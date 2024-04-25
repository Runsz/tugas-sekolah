let jamMasuk=prompt("Jam Masuk Parkir")
let jamKeluar=prompt("Jam Keluar Parkir")
let lamaParkir=jamKeluar-jamMasuk
let biaya=lamaParkir-2
let parkir=2000

console.log(`Jam Masuk = ${jamMasuk}`)
console.log(`Jam Keluar = ${jamKeluar}`)

if (lamaParkir<3) {
    console.log(`Biaya Parkir = Rp.${parkir}`)
}
else {
    let akhir=parkir+(500*(biaya))
    console.log(`Biaya Parkir = Rp.${akhir}`)
}