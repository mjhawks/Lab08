function checkPassword(){
  var pword = document.getElementById('password').value;
  var pword2 = document.getElementById('password2').value;
  if (pword.length >= 8)
  {
    if (pword == pword2)
    {
      document.getElementById("message").innerHTML = "password works!";
    }
    else {
      document.getElementById("message").innerHTML = "passwords dont match!";
    }
  }
  else {
    document.getElementById("message").innerHTML = "password is too short!";
  }

}
