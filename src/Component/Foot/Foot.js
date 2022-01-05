import React from 'react'
import '../../Style/Foot.css'
import { IconButton } from '@mui/material';
import { Facebook, GitHub, Twitter } from '@mui/icons-material';

function Foot() {
    return (
        <div className='foot'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,53.3C672,32,768,32,864,48C960,64,1056,96,1152,112C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className='foottt'>
                <div className='foot-contact'>
                    <IconButton className="foot-icon">
                        <Facebook fontSize='large'/>
                    </IconButton>
                    <IconButton className="foot-icon">
                        <Twitter fontSize='large'/>
                    </IconButton>
                    <IconButton className="foot-icon">
                        <GitHub fontSize='large'/>
                    </IconButton>
            </div>
            <div className='foot-end'>
                    ©Róck Cát Project From 2021 To The Moon.
            </div>
        </div>
        </div>
    )
}

export default Foot
