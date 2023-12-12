import { createApp, registerElement } from "nativescript-vue";
import { Canvas } from "@nativescript/canvas";
import Home from "./views/Home.vue";

registerElement("Canvas", () => Canvas);

const app = createApp(Home);

// Global error handler
app.config.errorHandler = (error, instance, info) => {
  // Handle the error globally
  console.error("Global error:", error);
  console.log("Vue instance:", instance);
  console.log("Error info:", info);
};

app.start();
