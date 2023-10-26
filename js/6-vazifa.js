let son = Math.floor(Math.random() * 10 + 1); 
console.log(son);
let kiritilganSon = prompt("Hurmatli foydalanuvchi 1-10 bo'lgan son kiriting va men o'ylagan soni toping");

if (kiritilganSon==son) {
    alert("siz men o'ylagan sonni topdingiz");
}else {
    alert("yo'q bu men o'ylagan son emasdi");
}