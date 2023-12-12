<script setup lang="ts">
  import { ref, onMounted } from "nativescript-vue";
  import { LoadEventData, Application } from "@nativescript/core";
  import { HTMLCanvasElement } from "@nativescript/canvas-polyfill/DOM/HTMLCanvasElement";
  import * as echarts from "echarts";
  import { Canvas } from "@nativescript/canvas";

  echarts.setPlatformAPI({
    createCanvas() {
      return new HTMLCanvasElement(null) as any;
    }
  });

  onMounted(() => {
    console.log(`application.android.startActivity = ${Application.android.startActivity}`);
    console.log(`application.android.foregroundActivity = ${Application.android.foregroundActivity}`);
  });

  const onCanvasReady = (args: LoadEventData) => {
    console.log("canvasReady");
    const canvas = args?.object as unknown as Canvas;
    const _canvas = new HTMLCanvasElement(canvas as any);
    const chart = echarts.init(_canvas as unknown as HTMLCanvasElement);

    const options: echarts.EChartOption = {
      xAxis: {
        type: "category",
        data: ["Matcha Latte", "Milk Tea", "Cheese Cocoa", "Walnut Brownie"]
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          name: "2015",
          data: [89.3, 92.1, 94.4, 85.4]
        },
        {
          type: "bar",
          name: "2016",
          data: [95.8, 89.4, 91.2, 76.9]
        },
        {
          type: "bar",
          name: "2017",
          data: [97.7, 83.1, 92.5, 78.1]
        }
      ]
    };
    // const options: echarts.EChartOption = {
    //   xAxis: {},
    //   yAxis: {},
    //   series: [
    //     {
    //       type: "gauge",
    //       detail: {
    //         formatter: "{value}%"
    //       },
    //       data: [
    //         {
    //           value: 50,
    //           name: "Completion"
    //         }
    //       ]
    //     }
    //   ]
    // };
    chart.setOption(options);
  };
</script>
<template>
  <GridLayout rows="*">
    <Label row="0" text="Hola!!" />
    <!-- <Canvas ref="canvas" row="0" class="w-full h-full" @ready="onCanvasReady" /> -->
  </GridLayout>
</template>
<style scoped></style>
