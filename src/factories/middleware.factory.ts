import { UserRole } from '../data/types';
import { AllowedToMiddleware } from '../middlewares/allowedTo.middleware';
import { AuthMiddleware} from '../middlewares/auth.middleware';
import { UserService } from '../modules/user/user.service';

class MiddlewareFactory {
  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  createAuthMiddleware() {
    return new AuthMiddleware(this.userService).execute;
  }

  createAllowedToMiddleware(...roles: UserRole[]) {
    return new AllowedToMiddleware(roles).execute;
  }
}

export { MiddlewareFactory };
