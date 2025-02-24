
function prtById(id, text)
{
  document.getElementById(id).insertAdjacentText("beforeend", text);
}

export { prtById };
