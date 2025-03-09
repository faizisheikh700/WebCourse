function btn(t){
    let a = document.getElementById('dis').value += t;
}

function eq(){
    let a = document.getElementById('dis')
    a.value = eval(a.value)
}


function clr(){
   document.getElementById('dis').value = ''
}

function del(){
    let d = document.getElementById('dis')
    d.value = d.value.slice(0, -1)
}


// function solve(a, b){
//     return a + b
// }

// solve(15, 20);