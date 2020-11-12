/* TUGAS DAY 07 :
1. Buatlah sebuah function u/ menghitung huruf vocal
- countVocal('Purwadhika)' // 3 =. u, a, i
- countVocal('Javascript') // 2 = a, i */

function HitungVokal (a) {
    let kata = a
    let kataSplit = kata.split('')
    console.log(kataSplit)
    let vokal = []
    let hitung_vokal = 0
for (let i = 0; i < kataSplit.length; i++) {
    if (kataSplit[i] == 'a' || kataSplit[i] == 'i' || kataSplit[i] == 'e'|| kataSplit[i] == 'u'||
        kataSplit[i] == 'o') {
            hitung_vokal++
            vokal.push(kataSplit[i])
        }
    }
    console.log(hitung_vokal)
    console.log(vokal)
}
HitungVokal('javascript')

/*2. Buatlah sebuh function u/ menghapus huruf vokal
- removeVocal('reactjs') // reactjs
- removeVocal('hello') // hello*/

function HapusVokal (b) {
    let kata1 = b
    let kata1Split = kata1.split('')
    console.log(kata1Split)
    let konsonan = []
    //let vokal_hapus = 0
    for (let i = 0; i < kata1Split.length; i++) {
        if (kata1Split[i] == 'a' || kata1Split[i] == 'e'|| kata1Split[i] == 'i' || kata1Split[i] == 'e' ||
            kata1Split[i] == 'o') {
            kata1Split.splice[i, 1]
            //konsonan.push(kata1Split[i])
            } else {
                konsonan.push(kata1Split[i])
            }
    }
    console.log(konsonan)
}
HapusVokal ('reactjs')

/*3. Buatlah fungsi u/ alternating case
- input : 'heLLO wOlRd' => output : 'HEllo WoLrD'*/

function BesarKecil (d)
    let katasal = d
    let res = ''
    let c = ''

    for (let i = 0; i < kataasal.length; i++) {
        if (c === c.toUpperCase()) {
            res += c.toLowerCase()
        } else {
           res += c.toUpperCase()
    }
    console.log(res)
}
BesarKecil ('heLLO wORld')

/*4. Buatlah fungsi u/ menghitung duplicate characterm dlm sebuah string
- input : 'I Love Javascript' => output : 1 => ada 1 huruf yang duplicate*/

function HitDupli (c) {
    let kataDupli = c
    //let kataDupArr = kataDupli.split('')
    let dupli = []
    let dupli2 = []
    let hitDupli = 0

    for (let i = 0; i < kataDupli.length; i++) {
        if (dupli.indexOf(kataDupli[i]) == -1 ) {
            dupli.push(kataDupli[i])
        } else {
            hitDupli++
            dupli2.push(kataDupli[i])
        }
    }
    console.log(hitDupli)
    console.log(dupli2)
}
HitDupli('i love javascript')
