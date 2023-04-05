import { AuthenticatedRESTDataSource } from "../../../data-sources/authenticated-rest";
import { AddRestaurantInput } from "../../../generated/graphql-types";
import { getLogger } from "../../../utils/logger";

const logger = getLogger(__dirname);

export class RestaurantsService extends AuthenticatedRESTDataSource {
  addRestaurant(input: AddRestaurantInput, userId: string) {
    const url = `/restaurants/addRestaurant?userId=${userId}`;
    // @ts-ignore
    return this.post<"/restaurants/addRestaurant">(url, input).then(
      (res: any) => {
        logger.info(res);
        return res;
      }
    );
  }
}
