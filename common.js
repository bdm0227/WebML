
function prtById(id, text)
{
  document.getElementId(id).insertAdjacentHTML("beforeend", text);
}

export { prtById };

