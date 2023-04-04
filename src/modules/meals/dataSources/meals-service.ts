import { AuthenticatedRESTDataSource } from "../../../data-sources/authenticated-rest";

export class MealsService extends AuthenticatedRESTDataSource {
  fetchAllMeals() {
    const url = "/meals/getAll";
    // @ts-ignore
    return this.get<"/meals/getAll">(url);
  }
}
