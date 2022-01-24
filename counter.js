let numText = document.getElementById("countNum")
let x = 0
setInterval(function(){
    numText.innerText = `${x++}s`
},1000)