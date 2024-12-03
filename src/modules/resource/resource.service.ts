import { AppDataSource } from "../../config/data-source";
import { Resource } from "../../data/entities/Resource";
import { BaseService } from "../../base/base.service";
import { getSearchOptions } from "@/utils";

export class ResourceService extends BaseService<Resource> {
  constructor() {
    // Passing the Resource repository to the BaseService constructor
    super(AppDataSource.getRepository(Resource));
  }
  async getResources(): Promise<Resource[]> {
    return this.repository.find();
  }
  // Custom search logic for resources
  async searchResources(query: string): Promise<Resource[]> {
    const searchOptions = getSearchOptions<Resource>(query, [
      "name",
      "description",
    ]);

    // Return the result using an array of where conditions
    return await this.repository.find({
      where: searchOptions,
    });
  }
}
