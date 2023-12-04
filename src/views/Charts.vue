<script setup lang="ts">
  import { ref, Ref, onMounted } from "nativescript-vue";
  import { ObservableArray } from "@nativescript/core";
  import { HTMLCanvasElement } from "@nativescript/canvas-polyfill/DOM/HTMLCanvasElement";
  import * as echarts from "echarts";
  import type { Canvas } from "@nativescript/canvas";

  const counter = ref(0);
  const message = ref("");
  const data = ref<Array<number>>([]);

  const getData = () => {
    for (let i = 0; i < 5; ++i) {
      data.value.push(Math.round(Math.random() * 200));
    }
  };
  onMounted(() => {
    counter.value = 42;
    updateMessage();
  });

  const updateMessage = () => {
    message.value = counter.value <= 0 ? "Hoorraaay! You unlocked the NativeScript clicker achievement!" : `${counter.value} taps left`;
  };

  const onReady = (args: any) => {
    console.log("canvasReady");
    const canvas: Canvas = args.object;
    const chart = echarts.init(canvas);
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

    chart.setOption(options);
  };
</script>
<template>
  <Page actionBarHidden="true">
    <GridLayout class="px-4" rows="auto, *">
      <Label row="0" :text="message" textWrap="true" />
      <Canvas row="1" ref="canvas" class="h-100 w-100" @ready="onReady" />
    </GridLayout>
  </Page>
</template>
