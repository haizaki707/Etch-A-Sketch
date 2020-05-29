let container = document.getElementById("container");
let restartButton = document.getElementById("restartBtn");
let blackButton = document.getElementById("blackBtn");
let rgbButton = document.getElementById("rgBtn");
let eraser = document.getElementById("eraser");
let resize = document.getElementById("resize");




// function gridTable(size) {
//   for(var i = 0; i < size; i++){
//     let row = document.createElement('div');
//     container.appendChild(row);
      
//       for(var j = 0; j < size; j++){
//         let colum = document.createElement('div');
//         colum.setAttribute('id', 'innerColum');
//         colum.classList.add('gridClass');
//         colum.style.border = 'solid black 2px';
//         row.appendChild(colum);
//         colum.style.width=960/size+"px";
//         colum.style.height=960/size+"px";
//         }
//       } 
//       let space = document.createElement("br");
//       document.getElementById("container").appendChild(space);
//   } // gridTable(64);

let containerHeight = container.clientHeight;
let containerWidth = container.clientWidth;
let div;

function makeGrid(gridSize) {
  let totalGrid = gridSize * gridSize;
  let gridWidth = (containerWidth / gridSize) + 'px';
  let gridHeight = (containerHeight / gridSize) + 'px';
  container.setAttribute('style', `display: grid; grid-template-columns: repeat(${gridSize}, ${gridWidth}); grid-template-rows: repeat(${gridSize}, ${gridHeight})`);
  
  
  for(var i = 0; i < totalGrid; i++) {
    let createGrid = document.createElement('div');
    createGrid.classList.add('gridClass');
    container.appendChild(createGrid);

  }
}

makeGrid(16)
 



  

let gettin = document.querySelectorAll('.gridClass');
  gettin.forEach((e)=>{ 
     e.addEventListener("mouseover", toblack);
  });
  
  function toblack(){
    this.style.backgroundColor='black';
  }


function rgbChanger() {
  let gettin = document.querySelectorAll('.gridClass');
gettin.forEach((e)=>{ 
   e.addEventListener("mouseover", toRgb);
});
  

  function toRgb() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  this.style.backgroundColor=bgColor;
}
}

function blackChanger() {
  let gettin = document.querySelectorAll('.gridClass');
    gettin.forEach((e)=>{ e.addEventListener("mouseover", toblack);
  });
  
  function toblack(){
    this.style.backgroundColor='black';
      }}



function bgtoWhite() {
  let gettin = document.querySelectorAll('.gridClass');
  gettin.forEach((e)=>{ 
     e.addEventListener("mouseover", towhite);
  });
  
  function towhite(){
    this.style.backgroundColor='whitesmoke'; }}



function clearGrid() {
  container.innerHTML= '';
  let gridSize = prompt("What grid size? It Must Be Between 8 & 64!")
  if(gridSize > 64 || gridSize < 8) {
    alert("Incorrect Size! Please choose a number between 8 & 64!");
    makeGrid(16);
    gettin;
    rgbChanger;
    blackChanger;
    bgtoWhite;
    clearGrid;
  } else {
  gridSize;
  makeGrid(gridSize);
  gettin;
  rgbChanger;
  blackChanger;
  bgtoWhite;
  clearGrid;
  }
  
}


rgbButton.addEventListener("click", rgbChanger);
blackButton.addEventListener("click", blackChanger);
eraser.addEventListener("click", bgtoWhite);
restartButton.addEventListener("click", clearGrid);




