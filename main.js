import * as cmm from "./common.js";
import { Person } from "./engine.js";

function main()
{
  //let engine = new Engine();
  var me = new Person("velog");
  
  /**
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

  device.queue.submit([encoder.finish()]);*/
  
  cmm.prtById("print1", "6");
}

main();

