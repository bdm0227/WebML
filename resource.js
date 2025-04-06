
function Resource(device, capacity)
{
  this.defaultBuffer = device.createBuffer({
    mappedAtCreation: true,
    size: capacity,
    usage: GPUBufferUsage.MAP_WRITE
  });
  this.arrayBuffer = this.defaultBuffer.getMappedRange();

  this.uploadBuffer = device.createBuffer({
    mappedAtCreation: true,
    size: capacity,
    usage: GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC
  });

  this.UpdateFloat32 = function(src) {
    new Float32Array(this.arrayBuffer).set(src);
  }

  this.ReadBackFloat32 = function() {
    
  }
}

