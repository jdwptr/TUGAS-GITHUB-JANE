/*var totalHari = 485
let hitTahun = (totalHari / 360)
let hitungTahun = Math.round(hitTahun)
let Tahun = (`${hitungTahun} Tahun`)
console.log(Tahun)*/

//hitung tahun
// let totalHari = 485
//let hari - totalHari
// let tahun = Math.floor(hari / 360)
// hari -= tahun * 360 // totalHari = totalHari - tahun * 360

//hitung bulan
// let bulan = Math.floor(hari / 30)
// hari -= bulan * 30

//hitung minggu
// let minggu = Math.floor (hari / 7)

//console.log('${totalHari} hari, ada ${tahun} tahun, ${bulan} bulan, ${hari} hari')

var totalHari = 485
var hitBulan = (totalHari - 360)
let hitungBulan = (hitBulan / 30)
let pembulatanBln = Math.round(hitungBulan)
let Bulan = (`${pembulatanBln} Bulan`)
console.log(Bulan)

var totalHari = 485
var hitBulan = (totalHari - 360)
var hitMinggu = (hitBulan - pembulatanBln*30)
let hitungMinggu = (hitMinggu / 7)
let pembulatanMggu = Math.floor(hitungMinggu)
let Minggu = (`${pembulatanMggu} Minggu`)
console.log(Minggu)



var totalHari = 485
var hitungHari = (hitBulan - pembulatanBln*30)
let Hari = (`${hitungHari} Hari`)
console.log(Hari)