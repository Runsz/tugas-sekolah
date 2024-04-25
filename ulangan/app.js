//No 1
function string(a,b){
    let gabungan= a + b
    return "Gabungan 2 String :"+gabungan
}
console.log(string("Haii ","Semua"))


//No 2
function cuaca(a){
    if (a<20){
        return "Hujan Ringan"
    }
    else if(a>=20 && a<=50){
        return "Hujan Sedang"
    }
    else{
        return "Hujan Lebat"
    }
}
console.log(cuaca(30))


//No 3
let arr = [20, 100, 50, 60, 100, 10, 5]
arr[4]=150
console.log(arr)


//No 4 
let curah = [ 20, 100, 50, 60, 100, 10, 5]
for (let i = 0; i < 7; i++) {
    console.log(`Curah Hujan ${curah[i]}`)
}
