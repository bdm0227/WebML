
async function Engine()
{
  this.canvas = document.querySelector("#canvas");

  this.adapter = await navigator.gpu.requestAdapter();
  this.device = await adapter.requestDevice();

  this.context = canvas.getContext("webgpu");
  this.canvasFormat = navigator.gpu.getPreferredCanvasFormat();
  context.configure({
      device: device,
       format: canvasFormat,
  });

 this.encoder = device.createCommandEncoder();
 this.pass = encoder.beginRenderPass({
    colorAttachments: [{
      view: context.getCurrentTexture().createView(),
      loadOp: "clear",
      storeOp: "store",
    }]
 });
  
  pass.end();
  device.queue.submit([encoder.finish()]);
}

