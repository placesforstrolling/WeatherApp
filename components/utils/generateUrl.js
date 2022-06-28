export default function generateUrl (currentTime, sunsetTime, sunriseTime, weatherStatus) {
    let iconPath = '../../assets/img/3dweathericons/sun/4.png';

    let sunsetTimeCorrect = sunsetTime.slice(-2) === 'PM' ? parseInt(sunsetTime.slice(0, 2)) + 12 : parseInt(sunsetTime.slice(0, 2));
    let sunriseTimeCorrect = sunriseTime.slice(-2) === 'PM' ? parseInt(sunriseTime.slice(0, 2)) + 12 : parseInt(sunriseTime.slice(0, 2));

    let dayTime = (parseInt(currentTime) < sunsetTimeCorrect && parseInt(currentTime) > sunriseTimeCorrect) ? 'sun' : 'moon';

    iconPath = iconPath + dayTime + '4.png';
    console.log(iconPath);
    console.log(currentTime);
    console.log(sunsetTimeCorrect);
    console.log(weatherStatus);
    if (dayTime === 'sun') {
        switch(parseInt(weatherStatus)) {
            case 1000: return require('../../assets/img/3dweathericons/sun/Sunny.png');
            case 1003: return require('../../assets/img/3dweathericons/sun/PartlyCloudy.png');
            case 1006: return require('../../assets/img/3dweathericons/sun/PartlyCloudy.png');
            case 1009: return require('../../assets/img/3dweathericons/cloud/Overcast.png');
            case 1030: return require('../../assets/img/3dweathericons/cloud/Overcast.png');
            case 1063: return require('../../assets/img/3dweathericons/sun/PatchyRain.png');
            case 1066: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1069: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1072: return require('../../assets/img/3dweathericons/cloud/FreezeSnow.png');
            case 1087: return require('../../assets/img/3dweathericons/cloud/Thunder.png');
            case 1114: return require('../../assets/img/3dweathericons/cloud/BlowingSnow.png');
            case 1117: return require('../../assets/img/3dweathericons/cloud/BlowingSnow.png');
            case 1135: return require('../../assets/img/3dweathericons/sun/PartlyCloudy.png');
            case 1147: return require('../../assets/img/3dweathericons/cloud/FreezeSnow.png');
            case 1150: return require('../../assets/img/3dweathericons/sun/PatchyRain.png');
            case 1153: return require('../../assets/img/3dweathericons/sun/PatchyRain.png');
            case 1168: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1171: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1180: return require('../../assets/img/3dweathericons/sun/PatchyRain.png');
            case 1183: return require('../../assets/img/3dweathericons/cloud/Rain.png');
            case 1186: return require('../../assets/img/3dweathericons/cloud/Rain.png');
            case 1189: return require('../../assets/img/3dweathericons/cloud/Rain.png');
            case 1192: return require('../../assets/img/3dweathericons/cloud/HeavyRain.png');
            case 1195: return require('../../assets/img/3dweathericons/cloud/HeavyRain.png');
            case 1198: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1201: return require('../../assets/img/3dweathericons/cloud/HeavyFreezingRain.png');
            case 1204: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1207: return require('../../assets/img/3dweathericons/cloud/HeavyFreezingRain.png');
            case 1210: return require('../../assets/img/3dweathericons/cloud/LightSnow.png');
            case 1213: return require('../../assets/img/3dweathericons/cloud/LightSnow.png');
            case 1216: return require('../../assets/img/3dweathericons/cloud/LightSnow.png');
            case 1219: return require('../../assets/img/3dweathericons/cloud/LightSnow.png');
            case 1222: return require('../../assets/img/3dweathericons/cloud/FreezeSnow.png');
            case 1225: return require('../../assets/img/3dweathericons/cloud/BlowingSnow.png');
            case 1237: return require('../../assets/img/3dweathericons/cloud/FreezeSnow.png');
            case 1240: return require('../../assets/img/3dweathericons/cloud/Rain.png');
            case 1243: return require('../../assets/img/3dweathericons/cloud/HeavyRain.png');
            case 1246: return require('../../assets/img/3dweathericons/cloud/HeavyRain.png');
            case 1249: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1252: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1255: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1258: return require('../../assets/img/3dweathericons/cloud/HeavySnow.png');
            case 1261: return require('../../assets/img/3dweathericons/cloud/FreezeSnow.png');
            case 1264: return require('../../assets/img/3dweathericons/cloud/FreezeSnow.png');
            case 1273: return require('../../assets/img/3dweathericons/cloud/ThunderRain.png');
            case 1276: return require('../../assets/img/3dweathericons/cloud/ThunderRain.png');
            case 1279: return require('../../assets/img/3dweathericons/cloud/PatchySnowThunder.png');
            case 1282: return require('../../assets/img/3dweathericons/cloud/BlowingSnow.png');

        }
    } else {
        switch(parseInt(weatherStatus)) {
            case 1000: return require('../../assets/img/3dweathericons/moon/Clear.png');
            case 1003: return require('../../assets/img/3dweathericons/moon/PartlyCloudy.png');
            case 1006: return require('../../assets/img/3dweathericons/moon/PartlyCloudy.png');
            case 1009: return require('../../assets/img/3dweathericons/cloud/Overcast.png');
            case 1030: return require('../../assets/img/3dweathericons/cloud/Overcast.png');
            case 1063: return require('../../assets/img/3dweathericons/moon/PatchyRain.png');
            case 1066: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1069: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1072: return require('../../assets/img/3dweathericons/cloud/FreezeSnow.png');
            case 1087: return require('../../assets/img/3dweathericons/cloud/Thunder.png');
            case 1114: return require('../../assets/img/3dweathericons/cloud/BlowingSnow.png');
            case 1117: return require('../../assets/img/3dweathericons/cloud/BlowingSnow.png');
            case 1135: return require('../../assets/img/3dweathericons/moon/Overcast.png');
            case 1147: return require('../../assets/img/3dweathericons/cloud/FreezeSnow.png');
            case 1150: return require('../../assets/img/3dweathericons/moon/PatchyRain.png');
            case 1153: return require('../../assets/img/3dweathericons/moon/PatchyRain.png');
            case 1168: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1171: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1180: return require('../../assets/img/3dweathericons/moon/PatchyRain.png');
            case 1183: return require('../../assets/img/3dweathericons/cloud/Rain.png');
            case 1186: return require('../../assets/img/3dweathericons/cloud/Rain.png');
            case 1189: return require('../../assets/img/3dweathericons/cloud/Rain.png');
            case 1192: return require('../../assets/img/3dweathericons/cloud/HeavyRain.png');
            case 1195: return require('../../assets/img/3dweathericons/cloud/HeavyRain.png');
            case 1198: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1201: return require('../../assets/img/3dweathericons/cloud/HeavyFreezingRain.png');
            case 1204: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1207: return require('../../assets/img/3dweathericons/cloud/HeavyFreezingRain.png');
            case 1210: return require('../../assets/img/3dweathericons/cloud/LightSnow.png');
            case 1213: return require('../../assets/img/3dweathericons/cloud/LightSnow.png');
            case 1216: return require('../../assets/img/3dweathericons/cloud/LightSnow.png');
            case 1219: return require('../../assets/img/3dweathericons/cloud/LightSnow.png');
            case 1222: return require('../../assets/img/3dweathericons/cloud/FreezeSnow.png');
            case 1225: return require('../../assets/img/3dweathericons/cloud/BlowingSnow.png');
            case 1237: return require('../../assets/img/3dweathericons/cloud/FreezeSnow.png');
            case 1240: return require('../../assets/img/3dweathericons/cloud/Rain.png');
            case 1243: return require('../../assets/img/3dweathericons/cloud/HeavyRain.png');
            case 1246: return require('../../assets/img/3dweathericons/cloud/HeavyRain.png');
            case 1249: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1252: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1255: return require('../../assets/img/3dweathericons/cloud/PatchySnow.png');
            case 1258: return require('../../assets/img/3dweathericons/cloud/HeavySnow.png');
            case 1261: return require('../../assets/img/3dweathericons/cloud/FreezeSnow.png');
            case 1264: return require('../../assets/img/3dweathericons/cloud/FreezeSnow.png');
            case 1273: return require('../../assets/img/3dweathericons/cloud/ThunderRain.png');
            case 1276: return require('../../assets/img/3dweathericons/cloud/ThunderRain.png');
            case 1279: return require('../../assets/img/3dweathericons/cloud/PatchySnowThunder.png');
            case 1282: return require('../../assets/img/3dweathericons/cloud/BlowingSnow.png');
        }
    }
}