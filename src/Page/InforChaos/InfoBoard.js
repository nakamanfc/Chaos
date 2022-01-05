import React from 'react'
import '../../Style/InfoChaos.css'

function InfoBoard() {
    return (
        <div className='container-info'>
                        <div className='title-c'>Infomation</div>
            <div className='box-info'>
                <div className='content-left'>
                    <div id='t'>
                        Owner
                    </div>
                    <div id='d'>
                        Creator
                    </div>
                    <div id='t'>
                        Father
                    </div>
                    <div id='d'>
                        Mother
                    </div>
                    <div id='t'>
                        Elements
                    </div>
                    <div id='d'>
                        Races
                    </div>
                    <div id='t'>
                        Genders
                    </div>
                    <div id='d'>
                        Birthday
                    </div>
                </div>
                <div className='content-right'>
                    <div id='d'>
                        : 0x5Bb46Ecc36DB1B4Af38eDa24e0D4633026D8AaD5
                    </div>
                    <div id='t'>
                        : 0x5Bb46Ecc36DB1B4Af38eDa24e0D4633026D8AaD5
                    </div>
                    <div id='d'>
                        : #172
                    </div>
                    <div id='t'>
                        : #8
                    </div>
                    <div id='d'>
                        : Warrior
                    </div>
                    <div id='t'>
                        : Live
                    </div>
                    <div id='d'>
                        : Male
                    </div>
                    <div id='t'>
                        : 11-11-2021
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBoard
