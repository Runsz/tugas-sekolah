let angka=prompt("Masukkan Angka")
let prima=true

for (let i = 2; i < angka; i++) {
    if(angka%i==0){
        prima=false
    }
    
}
if(prima==true){
    console.log(`${angka} Adalah Bilangan Prima`)
}
else{
    console.log(`${angka} Bukan Bilangan Prima`)
}