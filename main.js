//import initForAll from "./initialize.js";

function prtById(id, text)
{
  document.getElementById(id).insertAdjacentText("beforeend", text);
}

function main()
{
  prtById("print", "ff");
  //initForAll();
  //document.getElementById("print").insertAdjacentText("beforeend", "dd");
}

main();

