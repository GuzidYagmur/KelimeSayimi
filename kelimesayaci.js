const CumleGirisi = prompt("Bir cümle girin:");
const Kelime= CumleGirisi.split(" ");
console.log("Kelimeler:", Kelime);

const KelimeSayimi = {};
for (let i = 0; i < Kelime.length; i++) {
    let word = Kelime[i].toLowerCase(); // Büyük/küçük harf duyarlılığını kaldırmak için
    if (Kelime[word]) {
        Kelime[word]++;
    } else {
        Kelime[word] = 1;
    }
}

console.log("Kelime Sayıları:", KelimeSayimi);

