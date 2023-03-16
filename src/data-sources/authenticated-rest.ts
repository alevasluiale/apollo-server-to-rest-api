import { RESTDataSource } from "apollo-datasource-rest";
import { ExpressContext } from "apollo-server-express";
import { paths } from "../generated/restAPI-service";
import { ServiceRequest, ServiceResponse } from "../utils/types";

type IRESTDataSource = InstanceType<typeof RESTDataSource>;
type Body = Parameters<IRESTDataSource["post"]>[1];
type RequestInit = Parameters<IRESTDataSource["post"]>[2];

export class AuthenticatedRESTDataSource extends RESTDataSource<ExpressContext> {
  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  post<Path extends keyof paths>(
    path: string,
    body?: ServiceRequest<"post", Path>,
    init?: RequestInit
  ): Promise<ServiceResponse<"post", Path>> {
    return super.post<ServiceResponse<"post", Path>>(path, body as Body, init);
  }
}
