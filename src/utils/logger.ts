import log4js from "log4js";

log4js.configure({
  appenders: {
    out: { type: "stdout" },
  },
  categories: {
    default: { appenders: ["out"], level: "info" },
  },
});

export const getLogger = (scriptName: string): log4js.Logger =>
  log4js.getLogger(scriptName);
