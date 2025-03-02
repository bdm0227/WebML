
function createResource(buffer)
{
  
}

function updateResource(buffer, src)
{
  const gpuBuffer = device.createBuffer({
    mappedAtCreation: true,
    size: 4,
    usage: GPUBufferUsage.MAP_WRITE
  });
  const arrayBuffer = buffer.getMappedRange();

  new Uint8Array(arrayBuffer).set([0, 1, 2, 3]);
}

function readbackResource(buffer, dst)
{
  
}

