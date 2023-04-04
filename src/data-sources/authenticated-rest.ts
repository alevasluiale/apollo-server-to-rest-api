import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import { ExpressContext } from "apollo-server-express";
import { paths } from "../generated/restAPI-service";
import {
  ServiceRequest,
  ServiceResponse,
  ServiceSearchParams,
} from "../utils/types";
import qs from "qs";
import { getLogger } from "../utils/logger";

const logger = getLogger(__dirname);

type IRESTDataSource = InstanceType<typeof RESTDataSource>;
type Body = Parameters<IRESTDataSource["post"]>[1];
type RequestInit = Parameters<IRESTDataSource["post"]>[2];

const getContextHeaders = (context: ExpressContext) => {
  try {
    return context.req.headers || {};
  } catch (_) {
    logger.warn("Could not get headers from context");
    return {};
  }
};

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

  get<Path extends keyof paths>(
    path: string,
    params?: ServiceSearchParams<"get", Path>,
    init?: RequestInit
  ): Promise<ServiceResponse<"get", Path>> {
    return super.get<ServiceResponse<"get", Path>>(
      path,
      params ? qs.stringify(params, { indices: false }) : undefined,
      init
    );
  }

  protected willSendRequest(request: RequestOptions): void {
    const headers = getContextHeaders(this.context);

    const auth = headers.authorization || headers.Authorization;
    if (typeof auth === "string") {
      request.headers.set("Authorization", auth);
    }
    logger.info(
      `Sending request: ${JSON.stringify({
        method: request.method,
        path: request.path,
      })}`
    );
  }
}
