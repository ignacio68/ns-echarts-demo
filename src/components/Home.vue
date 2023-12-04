<script lang="ts" setup>
  import { Canvas, Paint, Style, createRect } from "@nativescript-community/ui-canvas";
  import { Color } from "@nativescript/core";

  function onDraw(event: { canvas: Canvas }) {
    const canvas = event.canvas;
    const bgPaint = new Paint();
    bgPaint.setAntiAlias(true);
    bgPaint.setTextSize(16);
    bgPaint.setColor("yellow");
    bgPaint.strokeWidth = 10;

    // rect
    canvas.drawRect(createRect(0, 0, 100, 100), bgPaint);
    bgPaint.setStyle(Style.STROKE);
    bgPaint.setColor(new Color(255, 0, 255, 0));
    canvas.drawRect(createRect(10, 10, 80, 80), bgPaint);
    bgPaint.setStyle(Style.STROKE);
    bgPaint.strokeWidth = 1;
    bgPaint.setColor(new Color(255, 255, 255, 0));
    canvas.drawRect(createRect(0, 0, 50, 50), bgPaint);
    bgPaint.setStyle(Style.FILL);
    bgPaint.setColor(new Color(255, 0, 0, 0));
    canvas.drawText("test", 0, 20, bgPaint);
  }
</script>

<template>
  <Frame>
    <Page>
      <ActionBar>
        <Label text="Home" class="font-bold text-lg" />
      </ActionBar>

      <GridLayout class="px-4">
        <CanvasView class="h-full w-full" @draw="onDraw" />
      </GridLayout>
    </Page>
  </Frame>
</template>