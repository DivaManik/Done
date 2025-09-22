// const names = ["Budi","Siti","Sean","James","Sahroni","Ahmad"]
// let temp = ""
// for (let i=0; i<names.length; i++){
//     temp += names[i] + "<br>"

// import { merek } from "./mobil"

    
// }
// document.getElementById("test").innerHTML = temp


// const mobil = {
//     merek : "Toyota",
//     jum_kabin : 2,
//     warna :"hitam"
// }

// document.getElementById("test").innerHTML = mobil.jum_kabin
// console.log(mobil.jum_kabin)

// const mobil =[
//     {merek :"Toyota",jum_kabin : 2},
//     {merek :"Honda",jum_kabin : 3},
//     {merek :"Daihatsu",jum_kabin : 2},
// ]

// let temp = ''
// for (let i=0; i<mobil.length;i++){
//     temp +=mobil[i].merek +" Jumlah Kabin : "+mobil[i].jum_kabin + "<br>" 
// }
// document.getElementById("test").innerHTML= temp


// let ket =""
// for (let x in mobil){
//     ket += `Merek ${mobil[x].merek} <br>`
// }

// document.getElementById("test").innerHTML = ket

// let buahan = new Map([
//     ["Apel",100],
//     ["Tomat",200],
//     ["Cabai",300],
//     ["Terong",400]
// ]
// )

// document.getElementById("test").innerHTML = buahan.get("Apel")


// for (let b of buahan.values()){
//     document.getElementById("test").innerHTML = b
// }

// for (let b of buahan.keys()){
//     document.getElementById("test1").innerHTML = b
// }

// for (let b of buahan){
//     document.getElementById("test2").innerHTML = b
// }


// let buahStr = ''
// for (let item of buahan){
//     buahStr += `Nama Buah : ${item[0]} Jumlah Buah : ${item[1]}<br>`
    
// }
// document.getElementById("test").innerHTML = buahStr


// let map = new Map([
//     ['1',"String"],
//     [1,"Numerical"],
//     [true,"Boolean"]
// ])

// // console.log(map.get(1));

// let obj = {
//     name : "Jhon",
//     age : 20
// }

// let mp = new Map(Object.entries(obj))
// console.log(mp.get("name"));


// let set = new Set()

// let john = {name : "Jhon"}
// let wick= {name : "Wick"}
// let budi = {name : "Budi"}
// let andi = {name : "Andi"}

// set.add(john)
// set.add(andi)
// set.add(wick)
// set.add(budi)
// set.add(budi)

// let dara = {name : "dara"}
// set.add(dara)

// console.log(set.size);
// // Mengahapus data 
// set.delete(budi)

// for (usr of set){
//     console.log(usr.name);
    
// }

// Filter data
const usia = [32,17,33,40]
const cek_usia = (u)=> u<20
const res = usia.filter(cek_usia)
const cek = cek_usia(20)

console.log(cek);
console.log(res);

let hasil = `Hasil filter : ${res.join(",")} `

if (cek){
    hasil+= "Usia Dewasa "
}else {
    hasil+= "Remaja "
}

document.getElementById("test").innerHTML = hasil