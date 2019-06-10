
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

const noop = () => undefined;
// const logLevel: LogLevel = process.env.VUE_APP_DEBUG_LEVEL;
const logLevel: LogLevel = 0;

export default class Logger {

  private static c: Console = console;

  public static get debug() {
    if (logLevel <= LogLevel.DEBUG) {
      return this.c.log.bind(console);
    } else {
      return noop;
    }
  }

  public static get info() {
    if (logLevel <= LogLevel.INFO) {
      return this.c.info.bind(console);
    } else {
      return noop;
    }
  }

  public static get warn() {
    if (logLevel <= LogLevel.WARN) {
      return this.c.warn.bind(console);
    } else {
      return noop;
    }
  }

  public static get error() {
    if (logLevel <= LogLevel.ERROR) {
      return this.c.error.bind(console);
    } else {
      return noop;
    }
  }
}
