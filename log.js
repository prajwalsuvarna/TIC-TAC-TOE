let count=0
let countx=0
let counto=0
function draw(tilex)
{  
    let x=document.getElementById(tilex)
    console.log(x)
   if(count==0)
    {
      count+=1        
      x.innerHTML=`<span style="color:gray">X</span>`
    }
   else if((count%2==0)&&(x.innerHTML==""))
    { 
      count+=1        
      x.innerHTML=`<span style="color:gray">X</span>`
        

        
    }
    else if((count%2!=0)&&(x.innerHTML!=`<span style="color:gray">X</span>`))
   {
    count+=1
    x.innerHTML=`<span style="color:rgb(150, 150, 150)">O</span>`
    
 
   }
   
   let b1, b2, b3, b4, b5, b6, b7, b8, b9;
   b1 = document.getElementById("tile0").textContent;
   b2 = document.getElementById("tile1").textContent;
   b3 = document.getElementById("tile2").textContent;
   b4 = document.getElementById("tile3").textContent;
   b5 = document.getElementById("tile4").textContent;
   b6 = document.getElementById("tile5").textContent;
   b7 = document.getElementById("tile6").textContent;
   b8 = document.getElementById("tile7").textContent;
   b9 = document.getElementById("tile8").textContent;
if((b1=="X"&&b4=="X"&&b7=="X")||(b1=="X"&&b5=="X"&&b9=="X")||(b1=="X"&&b2=="X"&&b3=="X")||(b2=="X"&&b5=="X"&&b8=="X")||(b3=="X"&&b6=="X"&&b9=="X")||(b4=="X"&&b5=="X"&&b6=="X")||(b7=="X"&&b8=="X"&&b9=="X")||(b5=="X"&&b3=="X"&&b7=="X"))
  {
      resultd1()
      let d=document.getElementById("playerX")
      countx+=1
      d.textContent="X : "+countx
  }
  else if((b1=="O"&&b4=="O"&&b7=="O")||(b1=="O"&&b5=="O"&&b9=="O")||(b1=="O"&&b2=="O"&&b3=="O")||(b2=="O"&&b5=="O"&&b8=="O")||(b3=="O"&&b6=="O"&&b9=="O")||(b4=="O"&&b5=="O"&&b6=="O")||(b7=="O"&&b8=="O"&&b9=="O")||(b5=="O"&&b3=="O"&&b7=="O"))
  {
    resultd2()
    let d=document.getElementById("playerO")
    counto+=1
    d.innerHTML="O : "+counto
  }
  else if((b1&&b2!="")&&(b3&&b4!="")&&(b5&&b6!="")&&(b7&&b8!="")){
    let x=document.getElementById("grid")
  x.innerHTML=`<span style="font-size:10vw">TIE!!</span>`

  }

}

function reset()
{
    let z=document.getElementById("grid")
    z.innerText=" "
    let tiles=["tile0","tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8"]
    let tilesitem=""
   
    for(let i=0;i<tiles.length;i++)
   { 
   tilesitem+=`<div id="${tiles[i]}" onclick="draw('${tiles[i]}')"></div>`
}    
z.innerHTML=tilesitem
// resettiles()
}

function resultd1()
{
  let x=document.getElementById("grid")
  x.innerHTML=`<span style="font-size:10vw">PLAYER X WON</span>`
}
function resultd2()
{
  let x=document.getElementById("grid")
  x.innerHTML=`<span style="font-size:10vw">PLAYER O WON</span>`

}


