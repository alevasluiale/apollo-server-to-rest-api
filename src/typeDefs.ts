import * as path from "path";
import * as fs from "fs";
import { gql } from "apollo-server-express";

const schemaFiles = [
  "authentication/typeDefs/authentication.graphql",
  "meals/typeDefs/meals.graphql",
];

export const typeDefs = schemaFiles.map((filename) =>
  gql(fs.readFileSync(path.join(`${__dirname}/modules/`, filename), "utf8"))
);
