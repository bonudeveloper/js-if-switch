let kirish = confirm("Hurmatli sayohatchi Xorazimgacha bo'lgan yo'lni qanday bosib o'tmoqchisiz quyidagi keltirilgan takliflardan birini tanlang");
let piyoda = confirm("Piyoda");
let velosiped = confirm("Velosiped bilan");
let mashina = confirm("Mashina bilan");
let poyezd = confirm("poyezd bilan");
let samalyot = confirm("samalyot bilan");
let xorazm = 1100;
let piyodakm =xorazm / 2;
let velosipedkm = xorazm /20;
let mashinakm = xorazm / 70;
let poyezdkm = xorazm / 150;
let samalyotkm = xorazm / 880;
if (piyoda) {
    alert("piyoda yursangiz manzilga yetib borish uchun" + " " + piyodakm + " " + "soat sarflaysiz")
}else if (velosiped){
    alert(
      "velosiped bilan manzilga yetib borish uchun" +
        " " +
        velosipedkm +
        " " +
        "soat sarflaysiz"
    );
}else if (mashina) {
    alert(
      "mashina bilan manzilga yetib borish uchun" +
        " " +
        mashinakm +
        " " +
        "soat sarflaysiz"
    );
}else if (poyezd) {
    alert(
      "poyezd bilan manzilga yetib borish uchun" +
        " " +
        poyezdkm +
        " " +
        "soat sarflaysiz"
    );
}else if (samalyot) {
    alert(
      "samalyot bilan manzilga yetib borish uchun" +
        " " +
        samalyotkm +
        " " +
        "soat sarflaysiz"
    );
}
