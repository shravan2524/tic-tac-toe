var c = 1;
var f = 0;
$('[data-text]').on('keyup', function(){
  $(this).attr('data-text', $(this).text());
});
function reload() {
  location.reload();
}
function fill(control) {
  if (f == 0) {
    if (c % 2 == 0) {
      document.getElementById(control.id).innerHTML = "0";
    }
    else {
      document.getElementById(control.id).innerHTML = "X";
    }
  }
  var ok = checkWinner(c, control);
  if (ok === 1) {
    document.getElementById("winner").innerHTML = "Game Over";
    document.getElementById("winner").style.visibility = "visible";
    f = 1;
  }
  else if (ok === 0) {
    document.getElementById("winner").innerHTML = "Game Over";
    document.getElementById("winner").style.visibility = "visible";
    f = 1;
  }
  else if (c === 9 && f != 1) {
    document.getElementById("winner").innerHTML = "Draw";
  }
  c++;
}
function checkWinner(cnt, controlp) {
  var b1 = document.getElementById("o").innerHTML;
  var b2 = document.getElementById("t").innerHTML;
  var b3 = document.getElementById("th").innerHTML;
  var b4 = document.getElementById("f").innerHTML;
  var b5 = document.getElementById("fi").innerHTML;
  var b6 = document.getElementById("s").innerHTML;
  var b7 = document.getElementById("se").innerHTML;
  var b8 = document.getElementById("e").innerHTML;
  var b9 = document.getElementById("n").innerHTML;
  if (f == 0) {
    if (cnt % 2 !== 0) {
      if (controlp.id == 'o') {
        if (b1 === b2 && b2 === b3) {
          document.getElementById("o").style.color = "green";
          document.getElementById("t").style.color = "green";
          document.getElementById("th").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b1 === b4 && b4 === b7) {
          document.getElementById("o").style.color = "green";
          document.getElementById("f").style.color = "green";
          document.getElementById("se").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b1 === b5 && b5 === b9) {
          document.getElementById("o").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("n").style.color = "green";
          return 1;
        }
      }
      else if (controlp.id == 't') {
        console.log("xwin");
        if (b1 === b2 && b2 === b3) {
          document.getElementById("o").style.color = "green";
          document.getElementById("t").style.color = "green";
          document.getElementById("th").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b2 === b5 && b5 === b9) {
          document.getElementById("t").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("xwin");
          return 1;
        }
      }
      else if (controlp.id == 'th') {
        console.log("xwin");
        if (b1 === b2 && b2 === b3) {
          document.getElementById("o").style.color = "green";
          document.getElementById("t").style.color = "green";
          document.getElementById("th").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b3 === b6 && b6 === b9) {
          document.getElementById("th").style.color = "green";
          document.getElementById("s").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b3 === b5 && b5 === b7) {
          document.getElementById("th").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("se").style.color = "green";
          console.log("xwin");
          return 1;
        }
      }
      else if (controlp.id == 'f') {
        console.log("xwin");
        if (b1 === b4 && b4 === b7) {
          document.getElementById("o").style.color = "green";
          document.getElementById("f").style.color = "green";
          document.getElementById("se").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b4 === b5 && b5 === b6) {
          document.getElementById("f").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("s").style.color = "green";
          console.log("xwin");
          return 1;
        }
      }
      else if (controlp.id == 'fi') {
        console.log("xwin");
        if (b1 === b5 && b5 === b9) {
          document.getElementById("o").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b2 === b5 && b5 === b8) {
          document.getElementById("t").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("e").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b3 === b5 && b5 === b7) {
          document.getElementById("th").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("se").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b4 === b5 && b5 === b6) {
          document.getElementById("f").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("s").style.color = "green";
          console.log("xwin");
          return 1;
        }
      }
      else if (controlp.id == 's') {
        console.log("xwin");
        if (b3 === b6 && b6 === b9) {
          document.getElementById("th").style.color = "green";
          document.getElementById("s").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b4 === b5 && b5 === b6) {
          document.getElementById("f").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("s").style.color = "green";
          console.log("xwin");
          return 1;
        }
      }
      else if (controlp.id == 'se') {
        console.log("xwin");
        if (b1 === b4 && b4 === b7) {
          document.getElementById("o").style.color = "green";
          document.getElementById("f").style.color = "green";
          document.getElementById("se").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b7 === b8 && b8 === b9) {
          document.getElementById("se").style.color = "green";
          document.getElementById("e").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b7 === b5 && b5 === b3) {
          document.getElementById("th").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("se").style.color = "green";
          console.log("xwin");
          return 1;
        }
      }
      else if (controlp.id == 'e') {
        console.log("xwin");
        if (b7 === b8 && b8 === b9) {
          document.getElementById("se").style.color = "green";
          document.getElementById("e").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b2 === b5 && b5 === b8) {
          document.getElementById("t").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("e").style.color = "green";
          console.log("xwin");
          return 1;
        }
      }
      else if (controlp.id == 'n') {
        console.log("xwin");
        if (b1 === b5 && b5 === b9) {
          document.getElementById("o").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b7 === b8 && b8 === b9) {
          document.getElementById("se").style.color = "green";
          document.getElementById("e").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("xwin");
          return 1;
        }
        else if (b3 === b6 && b6 === b9) {
          document.getElementById("th").style.color = "green";
          document.getElementById("s").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("xwin");
          return 1;
        }
      }
    }
    else {
      console.log("brea");
      if (controlp.id == 'o') {
        if (b1 === b2 && b2 === b3) {
          document.getElementById("o").style.color = "green";
          document.getElementById("t").style.color = "green";
          document.getElementById("th").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b1 === b4 && b4 === b7) {
          document.getElementById("o").style.color = "green";
          document.getElementById("f").style.color = "green";
          document.getElementById("se").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b1 === b5 && b5 === b9) {
          document.getElementById("o").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("n").style.color = "green";
          return 0;
        }
      }
      else if (controlp.id == 't') {
        console.log("0win");
        if (b1 === b2 && b2 === b3) {
          document.getElementById("o").style.color = "green";
          document.getElementById("t").style.color = "green";
          document.getElementById("th").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b2 === b5 && b5 === b9) {
          document.getElementById("t").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("0win");
          return 0;
        }
      }
      else if (controlp.id == 'th') {
        console.log("0win");
        if (b1 === b2 && b2 === b3) {
          document.getElementById("o").style.color = "green";
          document.getElementById("t").style.color = "green";
          document.getElementById("th").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b3 === b6 && b6 === b9) {
          document.getElementById("th").style.color = "green";
          document.getElementById("s").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b3 === b5 && b5 === b7) {
          document.getElementById("th").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("se").style.color = "green";
          console.log("0win");
          return 0;
        }
      }
      else if (controlp.id == 'f') {
        console.log("0win");
        if (b1 === b4 && b4 === b7) {
          document.getElementById("o").style.color = "green";
          document.getElementById("f").style.color = "green";
          document.getElementById("se").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b4 === b5 && b5 === b6) {
          document.getElementById("f").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("s").style.color = "green";
          console.log("0win");
          return 0;
        }
      }
      else if (controlp.id == 'fi') {
        console.log("0win");
        if (b1 === b5 && b5 === b9) {
          document.getElementById("o").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b2 === b5 && b5 === b8) {
          document.getElementById("t").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("e").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b3 === b5 && b5 === b7) {
          document.getElementById("th").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("se").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b4 === b5 && b5 === b6) {
          document.getElementById("f").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("s").style.color = "green";
          console.log("0win");
          return 0;
        }
      }
      else if (controlp.id == 's') {
        console.log("0win");
        if (b3 === b6 && b6 === b9) {
          document.getElementById("th").style.color = "green";
          document.getElementById("s").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b4 === b5 && b5 === b6) {
          document.getElementById("f").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("s").style.color = "green";
          console.log("0win");
          return 0;
        }
      }
      else if (controlp.id == 'se') {
        console.log("0win");
        if (b1 === b4 && b4 === b7) {
          document.getElementById("o").style.color = "green";
          document.getElementById("f").style.color = "green";
          document.getElementById("se").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b7 === b8 && b8 === b9) {
          document.getElementById("se").style.color = "green";
          document.getElementById("e").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b7 === b5 && b5 === b3) {
          document.getElementById("th").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("se").style.color = "green";
          console.log("0win");
          return;
        }
      }
      else if (controlp.id == 'e') {
        console.log("0win");
        if (b7 === b8 && b8 === b9) {
          document.getElementById("se").style.color = "green";
          document.getElementById("e").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b2 === b5 && b5 === b8) {
          document.getElementById("t").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("e").style.color = "green";
          console.log("0win");
          return 0;
        }
      }
      else if (controlp.id == 'n') {
        console.log("0win");
        if (b1 === b5 && b5 === b9) {
          document.getElementById("o").style.color = "green";
          document.getElementById("fi").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b7 === b8 && b8 === b9) {
          document.getElementById("se").style.color = "green";
          document.getElementById("e").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("0win");
          return 0;
        }
        else if (b3 === b6 && b6 === b9) {
          document.getElementById("th").style.color = "green";
          document.getElementById("s").style.color = "green";
          document.getElementById("n").style.color = "green";
          console.log("0win");
          return 0;
        }
      }
    }
  }
};