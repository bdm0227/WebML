import * as cmm from "./common.js";

function main()
{
  const canvas = document.querySelector("#canvas");
  
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();
  
  const context = canvas.getContext("webgpu");
  const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
  context.configure({
      device: device,
      format: canvasFormat,
  });

  const encoder = device.createCommandEncoder();

  const pass = encoder.beginRenderPass({
      colorAttachments: [{
              view: context.getCurrentTexture().createView(),
              loadOp: "clear",
              storeOp: "store",
          }]
  });

  pass.end();

  device.queue.submit([encoder.finish()]);
  
  cmm.prtById("print1", "12");
}

main();

