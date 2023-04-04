import { AuthenticationService } from "../modules/authentication/dataSources/authentication-service";
import { MealsService } from "../modules/meals/dataSources/meals-service";

export type DataSources = {
  authenticationService: InstanceType<typeof AuthenticationService>;
  mealsService: InstanceType<typeof MealsService>;
};
export const getDataSources = (): DataSources => {
  const baseUrl = process.env.API_URL || "";
  return {
    authenticationService: new AuthenticationService(baseUrl),
    mealsService: new MealsService(baseUrl),
  };
};
