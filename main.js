import * as cmm from "./common.js";

async function main()
{
  cmm.prtById("print1", "6");
  
  const canvas = document.querySelector("#canvas");
  
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();
  
  const context = canvas.getContext("webgpu");
  const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
  context.configure({
      device: device,
      format: canvasFormat,
  });

  const vertices = new Float32Array([
    //   X,    Y,
    -0.8, -0.8, // Triangle 1 (Blue)
    0.8, -0.8,
    0.8,  0.8,

    -0.8, -0.8, // Triangle 2 (Red)
     0.8,  0.8,
    -0.8,  0.8,
  ]);
/*
  const vertexBuffer = device.createBuffer({
    label: "Cell vertices",
    size: vertices.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
  });
*/
  const encoder = device.createCommandEncoder();

  const pass = encoder.beginRenderPass({
      colorAttachments: [{
              view: context.getCurrentTexture().createView(), 
              clearValue: { r: 0, g: 0, b: 0.4, a: 1 },
              loadOp: "clear",
              storeOp: "store",
          }]
  });

  pass.end();

  device.queue.submit([encoder.finish()]);
  
  cmm.prtById("print2", "6");
}

main();

