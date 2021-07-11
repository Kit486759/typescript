const ipt1 = document.getElementById("ipt1")! as HTMLInputElement
const ipt2 = document.getElementById("ipt2")! as HTMLInputElement
const btn = document.getElementById("btn")

const cal = (val1: number, val2: number) => {
   return val1 + val2
}

btn.addEventListener("click", ()=>{
console.log(cal(+ipt1.value, +ipt2.value))

}) 