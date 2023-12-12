import { NativeScriptConfig } from "@nativescript/core";

export default {
  id: "org.nativescript.nsechartsdemo",
  appPath: "src",
  appResourcesPath: "App_Resources",
  discardUncaughtJsExceptions: true,
  android: {
    v8Flags: "--expose_gc",
    markingMode: "none"
  }
} as NativeScriptConfig;
