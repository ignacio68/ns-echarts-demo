import { createApp, registerElement } from "nativescript-vue";
// import CanvasPlugin from "@nativescript-community/ui-canvas/vue";
// import CanvasLabelPlugin from "@nativescript-community/ui-canvaslabel/vue";
import { Canvas } from "@nativescript/canvas";
import Home from "./components/Home.vue";
import Charts from "./views/Charts.vue";

registerElement("Canvas", () => Canvas);

const app = createApp(Charts);

// app.use(CanvasPlugin);
// app.use(CanvasLabelPlugin);

app.start();
