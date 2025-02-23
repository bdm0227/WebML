export { print_mbp };

function print_mbp(id, text)
{
  let textForPrint = document.getElementById(id);
  textForPrint.insertAdjacentText("beforeend", text);
}

