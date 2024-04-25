let jAray=prompt("Masukkan Jumlah Array")
let jumlah=[]

for (let nilai = 0; nilai < jAray; nilai++) {
    let Array=prompt("Masukkan Nilai")
}

jumlah.push(Array)

let terbesar=Math.max.apply(Math, jumlah)

console.log(jumlah)
console.log(`Angka Terbesar =  ${terbesar}`)
