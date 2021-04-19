function changeColor(){
  var rcol = document.getElementById('r_color').value;
  var gcol = document.getElementById('g_color').value;
  var bcol = document.getElementById('b_color').value;
  var wid = document.getElementById('width').value;
  var someTag = document.getElementById("bod");
  someTag.style.borderColor = 'rgb('+rcol+', '+gcol+', '+bcol+')';
  someTag.style.borderWidth = wid;

  var rco = document.getElementById('r_colo').value;
  var gco = document.getElementById('g_colo').value;
  var bco = document.getElementById('b_colo').value;
  someTag.style.backgroundColor = 'rgb('+rco+', '+gco+', '+bco+')';
}
