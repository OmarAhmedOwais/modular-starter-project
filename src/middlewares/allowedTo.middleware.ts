import { BaseMiddleware } from '../base';
import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../errors';
import { IUser, UserRole } from '../data/types';
import { logger } from '../utils';

class AllowedToMiddleware implements BaseMiddleware {
  constructor(private readonly allowedRoles: UserRole[]) {}

  execute = (req: Request, _res: Response, next: NextFunction): void => {
    logger.info('adminAllowedMiddleware: Checking admin permissions');
    const userRole = (req.user as IUser)?.role;
    if (!this.allowedRoles.includes(userRole)) {
      throw new UnauthorizedError('You are not authorized');
    }
    next();
  };
}

export { AllowedToMiddleware };
