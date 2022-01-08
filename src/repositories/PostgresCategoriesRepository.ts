import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

// eslint-disable-next-line prettier/prettier
class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    throw new Error("Method not implemented.");
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({ description, name }: ICreateCategoryDTO): void {
    throw new Error("Method not implemented.");
  }
}

export { PostgresCategoriesRepository };
