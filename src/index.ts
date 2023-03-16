import express from "express";
import * as path from "path";
import { buildSchema, graphqlSync } from "graphql";
import { getLogger } from "./utils/logger";
import { server } from "./server";

const logger = getLogger(__dirname);

const app = express();

if (process.env.PUBLIC_SCHEMA_INTROSPECTION_ENABLED === "true") {
  if (process.env.PRIVATE_SCHEMA_INTROSPECTION_ENABLED === "false") {
    app.get("/", (_, res) => {
      res.redirect(301, "/public");
    });
  }

  app.use("/public", express.static(path.join(__dirname, "graphiql")));

  // app.get("/publicSchema", (_, res) => {
  //   res.header("Content-Type", "application/json");
  //   res.send(
  //     graphqlSync(buildSchema(getPublicSchema()), getIntrospectionQuery())
  //   );
  // });
}

process.on("uncaughtException", (err) => {
  logger.error("uncaughtException catched on process:");
  logger.error(err);
});

server.applyMiddleware({ app, path: "/" });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  logger.info(`Running at http://localhost:${PORT}`);
});
