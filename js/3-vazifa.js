let cars = ["audi", "bmw", "ferrari"];
let user = prompt("foydalanuvchi istalgan mashina markasini kiriting va men sizga o'z ro'yhatimizni taklif qilaman");
let userKichkina = user.toLowerCase();

if (cars.includes(userKichkina)){
    alert("Hurmatli foydalanuvchi siz kiritgan mashina markasi bizda mavjud" + " " + cars);
} else {
    cars.push(userKichkina);
    alert("Hurmatli foydalanuvchi siz kiritgam mashina markasi bizda mavjud emas edi, va uni biz ro'yhatga oldik" + " " + cars);
}