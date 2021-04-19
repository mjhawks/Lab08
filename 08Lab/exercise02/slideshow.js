  var currentslide = 0;

function forward(){
  currentslide += 1;
  if (currentslide >4)
    currentslide = 0;
    setBackground(currentslide);
}
function backward(){
  currentslide -= 1;
  if (currentslide <0)
    currentslide = 4;
  setBackground(currentslide);
}
function setBackground(slide){
  if(slide == 0){
    document.getElementById('pic').className = "a";
  }
  if(slide == 1){
    document.getElementById('pic').className = "b";
  }
  if(slide == 2){
    document.getElementById('pic').className = "c";
  }
  if(slide == 3){
    document.getElementById('pic').className = "d";
  }
  if(slide == 4){
    document.getElementById('pic').className = "e";
  }
}
