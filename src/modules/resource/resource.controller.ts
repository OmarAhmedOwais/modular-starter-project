import { Request, Response } from "express";
import { Resource } from "../../data/entities/Resource";
import { BaseController } from "../../base/base.controller";
import { ResourceService } from "./resource.service";
import { Models } from "@/data";

export class ResourceController extends BaseController<Resource> {
  constructor() {
    super(new ResourceService(), Models.Resource);
  }

  public searchResources = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const query = req.query.q as string;
    const resources = await (this.service as ResourceService).searchResources(
      query
    );
    res.json(resources);
  };
}
