import { AuthenticationService } from "../authentication/dataSources/authentication-service";

export type DataSources = {
  authenticationService: InstanceType<typeof AuthenticationService>;
};
export const getDataSources = (): DataSources => {
  const baseUrl = process.env.API_URL || "";
  return {
    authenticationService: new AuthenticationService(baseUrl),
  };
};
