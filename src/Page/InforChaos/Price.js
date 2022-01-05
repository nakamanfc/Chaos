import React from 'react'
import '../../Style/InfoChaos.css'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { pink, blue, red, brown } from '@mui/material/colors';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShieldSharpIcon from '@mui/icons-material/ShieldSharp';
function Price() {
    return (
<div className='container-pow'>
            <div className='box-pow'>
                <div className='content-left-pow'>
                    <div id='t'>
                        Price:
                    </div>
                    <div id='d'>
                        Ask:
                    </div>
                </div>
                <div className='content-right-pow'>
                    <div id='d'>
                        2000 ETH
                    </div>
                    <div id='t'>
                        1800 ETH
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price