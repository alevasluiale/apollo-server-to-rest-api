import { AuthenticationService } from "../modules/authentication/dataSources/authentication-service";
import { MealsService } from "../modules/meals/dataSources/meals-service";
import { RestaurantsService } from "../modules/restaurants/dataSources/restaurants-service";

export type DataSources = {
  authenticationService: InstanceType<typeof AuthenticationService>;
  restaurantsService: InstanceType<typeof RestaurantsService>;
  mealsService: InstanceType<typeof MealsService>;
};
export const getDataSources = (): DataSources => {
  const baseUrl = process.env.API_URL || "";
  return {
    authenticationService: new AuthenticationService(baseUrl),
    restaurantsService: new RestaurantsService(baseUrl),
    mealsService: new MealsService(baseUrl),
  };
};
