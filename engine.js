function Person(arg) {

    this.name = arg;

    this.getName = function() {
        return this.name;
    }

    this.setName = function(value) {
        this.name = value;
    }
}

async function Engine()
{
  //this.canvas = document.querySelector("#canvas");
  /**
  this.adapter = await navigator.gpu.requestAdapter();
  this.device = await this.adapter.requestDevice();
  
  this.context = this.canvas.getContext("webgpu");
  this.canvasFormat = navigator.gpu.getPreferredCanvasFormat();
  this.context.configure({
      device: this.device,
      format: this.canvasFormat,
  });

  this.encoder = this.device.createCommandEncoder();

  this.pass = this.encoder.beginRenderPass({
      colorAttachments: [{
              view: this.context.getCurrentTexture().createView(),
              loadOp: "clear",
              storeOp: "store",
          }]
  });

  this.pass.end();

  this.device.queue.submit([this.encoder.finish()]);*/

  /**this.drawScene = function() {
    
  }

  this.clearTask = function() {
    
  }*/
}

export { Engine };
