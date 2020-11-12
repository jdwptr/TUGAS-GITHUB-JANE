//Massa : 67KG
//Tinggi : 1.78M
//IMT : 21.146319909102385

let massa = 67
let tinggi = 1.78
let imt = massa/(tinggi**2)


switch (true) {
    case (imt<18.5 == true) :
        console.log('artinya BB kurang')
        break
    case (imt<18.5 == false) :
        console.log('artinya BB ideal')
        break
    case (18.5<=imt>=24.9 == true) :
        console.log('artinya BB ideal')
        break
    case (18.5<=imt>=24.9 == false) :
        console.log('artinya BB berlebih')
        break
    case (25<=imt>=29.9 == true) :
        console.log('artinya BB berlebih')
        break
    case (25<=imt>=29.9 == false) :
        console.log('artinya BB sangat berlebih')
        break
    case (30<=imt>=39.9 == true) :
        console.log('artinya BB sangat berlebih')
        break
    case (30<=imt>=39.9 == false) :
        console.log('obesitas')
        break
    default :
        console.log('obesitas')
}


if (imt<18.5 == true) {
    console.log('artinya BB kurang ideal')
} else if(imt<18.5 == false) {
    console.log('artinya BB ideal')
} else if(18.5<=imt>=24.9 == true) {
    console.log('artinya BB ideal')
} else if(18.5<=imt>=24.9 == false) {
    console.log('artinya BB berlebih')
} else if(25<=imt>=29.9 == true) {
    console.log('artinya BB berlebih')
} else if(25<=imt>=29.9 == false) {
    console.log('artinya BB sangat berlebih')
} else if(30<=imt>=39.9 == true) {
    console.log('artinya BB sangat berlebih')
} else if(imt>39.9 == true) {
    console.log('obesitas')
}
