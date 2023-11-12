var three = document.querySelector(".three")
var mul = document.querySelector(".mul")
var four = document.querySelector(".four")
var ac =  document.querySelector(".ac")
var del = document.querySelector(".del")
var solve = document.querySelector(".solve")
var five = document.querySelector(".five")
var six = document.querySelector(".six")
var sev = document.querySelector(".sev")
var eight =  document.querySelector(".eight")
var sub = document.querySelector(".sub")
var divide = document.querySelector(".divide")
var dot = document.querySelector(".dot")
var one = document.querySelector(".one")
var zer = document.querySelector(".zer")
var two = document.querySelector(".two")
var per = document.querySelector(".per")
var nine = document.querySelector(".nine")
var add = document.querySelector(".add")

var ans = document.querySelector("#ans")
var output = document.querySelector("#output")

output.addEventListener("click", function(){
  output.blur();
})


ans.addEventListener("click", function(){
  ans.blur();
})

one.addEventListener("click", function(){
 output.value += 1;
})

two.addEventListener("click", function(){
 output.value += 2;
})
three.addEventListener("click", function(){
 output.value += 3;
 
})
four.addEventListener("click", function(){
 output.value += 4;
})

five.addEventListener("click", function(){
 output.value += 5;
})
six.addEventListener("click", function(){
 output.value += 6;
 
})

sev.addEventListener("click", function(){
 output.value += 7;
})

eight.addEventListener("click", function(){
 output.value += 8;
})
nine.addEventListener("click", function(){
 output.value += 9;
 
})
mul.addEventListener("click", function(){
 output.value += "*";
})

divide.addEventListener("click", function(){
 output.value += "/";
})
add.addEventListener("click", function(){
 output.value += "+";
 
})

sub.addEventListener("click", function(){
 output.value += "-";
})

per.addEventListener("click", function(){
 output.value += "/100";
 
})
dot.addEventListener("click", function(){
 output.value += ".";
 
})
zer.addEventListener("click", function(){
 output.value += 0;
 
})

  
solve.addEventListener("click", function(){
  let evaluate = eval(output.value)
  ans.value = evaluate;
  if (output.value.includes("**")){
    ans.value =" "
  }
  if (output.value.includes("//")){
    ans.value =" "
  }
  if(output.value.length == 0){
    ans.value = ""
  }
 
  
})

ac.addEventListener("click", function(){
  output.value = "";
  ans.value = "";
  
  
  
})

del.addEventListener("click", function(){
  
  output.value = output.value.slice(0, -1)
})




