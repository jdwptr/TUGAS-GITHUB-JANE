//DERET FIBONACCI 0,1,1,2,3,5,8,...(batas 25)
let initialValue = 0
let currentValue = 1

while (currentValue < 25) {
    //simpan old currentValue
    let temp = currentValue

    //update value
    currentValue = currentValue + initialValue 
    //currentValue += initialValue => currentValue = currentValue + initialValue
    initialValue = temp

    //check value
    if (currentValue > 25) {
    break
    }
}
console.log(currentValue)

//initial = 0
//current = 1

// loop : temp = 1, current = 1 + 0 = 1, initial temp = 1
// loop : temp = 1, current = 1 + 1 = 2, initial temp = 1
// loop : temp = 2, current = 1 + 2 = 3, initial temp = 2
// loop : temp = 3, current = 3 + 2 = 5, initial temp = 3
// loop : temp = 