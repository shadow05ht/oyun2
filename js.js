let hesabla = document.getElementById('hesab');
let user;
let ad;
let netice;

hesabla.onclick = () => {
    let number = Math.floor(Math.random() * 7) + 1;
if (user == number) {
    netice = ` ${ad}, siz düzgün rəqəmi seçdiniz. `
} else if (user != number) {
    netice = ` ${ad}, siz ${user} daxil etdiniz, amma cavab ${number} idi. Bəxtinizi bir daha sınayın.`
}
document.getElementById('oyun').innerHTML=netice
}