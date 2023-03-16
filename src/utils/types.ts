import { paths } from "../generated/restAPI-service";

type RequestMethod = "get" | "post" | "put" | "patch" | "delete";

type WithMultipart<T> = "multipart/form-data" extends keyof T
  ? T["multipart/form-data"]
  : WithMultipart<T>;

type WithJSON<T> = "application/json" extends keyof T
  ? T["application/json"]
  : WithMultipart<T>;

type WithContent<T> = "content" extends keyof T
  ? WithJSON<T["content"]>
  : never;

// Deeply indexes into the "requestBody" of the operation
// equal to operation["responses"][200 or 201]["content"]["application/json"]
type WithRequest<T> = "requestBody" extends keyof T
  ? WithContent<T["requestBody"]>
  : never;

// Get the content of a 201 response, or give up
type With201<T> = 201 extends keyof T ? WithContent<T[201]> : never;

// Get the content of a 200 response, or fallback to the 201 response.
type With200<T> = 200 extends keyof T ? WithContent<T[200]> : With201<T>;

// Deeply indexes into the "responses" of the operation
// equal to operation["responses"][200 or 201]["content"]["application/json"]v
type WithResponse<T> = "responses" extends keyof T
  ? With200<T["responses"]>
  : never;

//Find the operation name for a given url and method
type ServiceOperation<
  Method extends RequestMethod,
  Path extends keyof paths
> = Method extends keyof paths[Path] ? paths[Path][Method] : never;

/**
 * The body type for a given URL + method for the generated API types.
 *
 * It's the equivalent of doing:
 * import { paths } from ".../generated/restAPI-service";
 * type Request = paths[path][method]["requestBody"]["content"]["application/json"]
 */
export type ServiceRequest<
  Method extends RequestMethod,
  Path extends keyof paths
> = WithRequest<ServiceOperation<Method, Path>>;

/**
 * The response type for a given URL + method for the generated API
 * types.
 *
 * It's the equivalent of doing
 * import { paths } from ".../generated/restAPI-service";
 * type Response = paths[path][method]["responses"][200]["content"]["application/json"]
 */
export type ServiceResponse<
  Method extends RequestMethod,
  Path extends keyof paths
> = WithResponse<ServiceOperation<Method, Path>>;
