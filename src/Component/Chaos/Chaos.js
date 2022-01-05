import React, { useEffect, useState } from 'react'
import '../../Style/Chaos.css'

function Chaos() {
    function rgbToCode(red,green,blue){
        let code ='#';
        var r = Number(Math.floor(red)%255).toString(16);
        if (r.length < 2) {
             r = "0" + r;
        }
        var g = Number(Math.floor(green)%255).toString(16);
        if (g.length < 2) {
             g = "0" + g;
        }
        var b = Number(Math.floor(blue)%255).toString(16);
        if (b.length < 2) {
             b = "0" + b;
        }
        code = code + r + g + b;
        return code;
    }
    function getNum(num){
        let gen = ((window.location.search).toString()).substring(5,22)
        return gen.substring(num, num+3);
    }

    //#eed0d0
    useEffect(() => {
        document.querySelector('.canvas').style.setProperty('--canvas',rgbToCode(getNum(0),getNum(1),getNum(2)));
        document.querySelector('.circle').style.setProperty('--circle',rgbToCode(getNum(1),getNum(2),getNum(3)));
        document.querySelector('.cactus').style.setProperty('--cactus',rgbToCode(getNum(2),getNum(3),getNum(4)));
        document.querySelector('.cactus').style.setProperty('--cactus-before',rgbToCode(getNum(3),getNum(4),getNum(5)));
        document.querySelector('.cactus').style.setProperty('--cactus-after',rgbToCode(getNum(4),getNum(5),getNum(6)));
        document.querySelector('.pricks').style.setProperty('--pricks',rgbToCode(getNum(5),getNum(6),getNum(7)));
        document.querySelector('.pricks').style.setProperty('--pricks-before',rgbToCode(getNum(6),getNum(7),getNum(8)));
        document.querySelector('.pricks').style.setProperty('--pricks-after',rgbToCode(getNum(7),getNum(8),getNum(9)));
        document.querySelector('.cactusSmall').style.setProperty('--cactussmall',rgbToCode(getNum(8),getNum(9),getNum(10)));
        document.querySelector('.cactusSmall').style.setProperty('--cactussmall-before',rgbToCode(getNum(9),getNum(10),getNum(11)));
        document.querySelector('.cactusSmall').style.setProperty('--cactussmall-after',rgbToCode(getNum(10),getNum(11),getNum(12)));
        document.querySelector('.pricksRight').style.setProperty('--pricksRight',rgbToCode(getNum(11),getNum(12),getNum(13)));
        document.querySelector('.pricksRight').style.setProperty('--pricksRight-before',rgbToCode(getNum(13),getNum(11),getNum(12)));
        document.querySelector('.pricksRight').style.setProperty('--pricksRight-after',rgbToCode(getNum(12),getNum(10),getNum(11)));
        document.querySelector('.pot').style.setProperty('--pot',rgbToCode(getNum(11),getNum(9),getNum(10)));
        document.querySelector('.eyes').style.setProperty('--eye1',rgbToCode(getNum(10),getNum(8),getNum(9)));
        document.querySelector('.eyes').style.setProperty('--eye2',rgbToCode(getNum(9),getNum(7),getNum(8)));
        document.querySelector('.cheeks').style.setProperty('--cheek1',rgbToCode(getNum(8),getNum(6),getNum(7)));
        document.querySelector('.cheeks').style.setProperty('--cheek2',rgbToCode(getNum(7),getNum(5),getNum(6)));
        document.querySelector('.mouth').style.setProperty('--mouth',rgbToCode(getNum(6),getNum(4),getNum(5)));
    }, [])
    return (
        <>

        <div className='canvas'>
            <div className='circle'>
                <div className='cactus'>
                    <div className='pricks'/>
                </div>
                <div className='cactusSmall'>
                    <div className='pricksRight'/>
                </div>
                <div className='pot'>
                    <div className='eyes'/>
                    <div className='cheeks'/>
                    <div className='mouth'/>
                </div>
            </div>
        </div>

        </>
    )
}

export default Chaos
