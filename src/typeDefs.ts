import * as path from "path";
import * as fs from "fs";
import { gql } from "apollo-server-express";

const schemaFiles = ["authentication/type-defs/authentication.graphql"];

export const typeDefs = schemaFiles.map((filename) =>
  gql(fs.readFileSync(path.join(__dirname, filename), "utf8"))
);
