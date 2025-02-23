import * as mbp from "common.js";

function initForAll()
{
      mbp.print_mbp("개씨발 진짜 좀 돼라");
      
      let canvas = document.querySelector("#canvas");

      let adapter = await navigator.gpu.requestAdapter();
      let device = await adapter.requestDevice();

      let context = canvas.getContext("webgpu");
      let canvasFormat = navigator.gpu.getPreferredCanvasFormat();
      context.configure({
          device: device,
          format: canvasFormat,
      });

      let encoder = device.createCommandEncoder();

      let pass = encoder.beginRenderPass({
          colorAttachments: [{
                  view: context.getCurrentTexture().createView(),
                  loadOp: "clear",
                  storeOp: "store",
              }]
      });

      pass.end();

      device.queue.submit([encoder.finish()]);
}

