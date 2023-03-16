import { AuthenticatedRESTDataSource } from "../../data-sources/authenticated-rest";
import { SignUpInput } from "../../generated/graphql-types";

export class AuthenticationService extends AuthenticatedRESTDataSource {
  signUp(input: SignUpInput) {
    const url = "/auth/signup";
    // @ts-ignore
    return this.post<"/auth/signup">("/auth/signup", input);
  }
  // signIn();
}
