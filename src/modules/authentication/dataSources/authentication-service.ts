import { AuthenticatedRESTDataSource } from "../../../data-sources/authenticated-rest";
import { SignInInput, SignUpInput } from "../../../generated/graphql-types";

export class AuthenticationService extends AuthenticatedRESTDataSource {
  signUp(input: SignUpInput) {
    const url = "/auth/signup";
    // @ts-ignore
    return this.post<url>(url, input);
  }
  signIn(input: SignInInput) {
    const url = "/auth/signin";
    // @ts-ignore
    return this.post<"/auth/signin">(url, input);
  }
}
