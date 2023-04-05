import { AuthenticatedRESTDataSource } from "../../../data-sources/authenticated-rest";
import { AddRestaurantInput } from "../../../generated/graphql-types";

export class RestaurantsService extends AuthenticatedRESTDataSource {
  addRestaurant(input: AddRestaurantInput) {
    const url = "/restaurants/addRestaurant";
    // @ts-ignore
    return this.post<url>(url, input);
  }
}
