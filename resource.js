
function createResource(capacity)
{
  const gpuBuffer = device.createBuffer({
    mappedAtCreation: true,
    size: capacity,
    usage: GPUBufferUsage.MAP_WRITE
  });
  const arrayBuffer = buffer.getMappedRange();

  new Uint8Array(arrayBuffer).set([0, 1, 2, 3]);

  return gpuBuffer;
}

function updateResource(src)
{
  
}

function readbackResource(dst)
{
  
}

