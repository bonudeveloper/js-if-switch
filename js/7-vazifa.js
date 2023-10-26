let kursEvro = 13240;
let kursDollar = 12200;
let userdollar = confirm("1$ kursini bilib oling");
let javobDollar = alert(kursDollar +"so'm" );
let userEvro = confirm("1evro kursini bilib oling");
let javobEvro = alert(kursEvro + "so'm");
let tikket = 350;
let living = 500;
let picnic = 300;
let hisobDollar = kursDollar + tikket + living;
let hisobEvro = kursEvro + picnic;
let haftaUchun = hisobDollar + hisobEvro;
console.log(haftaUchun + " " + "hafta uchun sarflanadigan umumiy summa so'mda");
let userdagiPul = prompt("1 haftalik sayohat uchun qancha sarflamoqchisiz(raqamlar bilan kiriting)?");
if (userdagiPul === haftaUchun){
    alert("sizdagi mablag' 1 haftalik sayohat uchun yetarli")
}else {
    alert("mablag'ingiz sayohat uchun etarli emas");
}