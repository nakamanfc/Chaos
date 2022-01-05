import React from 'react'
import '../../Style/InfoChaos.css'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { pink, blue, red, brown } from '@mui/material/colors';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShieldSharpIcon from '@mui/icons-material/ShieldSharp';
function PowerBoard() {
    return (
<div className='container-pow'>
<div className='title-c'>Power</div>
            <div className='box-pow'>
                <div className='content-left-pow'>
                    <div id='t'>
                        <LocalFireDepartmentIcon sx={{ color: pink[500] }}/> 10
                    </div>
                    <div id='d'>
                        <LocalFireDepartmentIcon sx={{ color: blue[500] }}/> 0
                    </div>
                    <div id='t'>
                        <FavoriteSharpIcon sx={{ color: red[500] }}/> 56
                    </div>
                </div>
                <div className='content-right-pow'>
                    <div id='d'>
                        <DarkModeIcon sx={{ color: blue[500] }}/> 2
                    </div>
                    <div id='t'>
                        <ShieldSharpIcon sx={{ color: brown[500] }}/> 3
                    </div>
                    <div id='d'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PowerBoard