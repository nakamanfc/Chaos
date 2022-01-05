import Card from '../../Component/Card/Card'
import { Box } from '@mui/system'
import Grid from '@mui/material/Grid';
import React from 'react'
import Pagination from '@mui/material/Pagination';
import '../../Style/ChaosPage.css'
import FilterBroad from '../../Component/FilterBroad/FilterBroad';


function ChaosPage() {
    return (
        <div className='chaospage-box'>
            <img className='image-home' src='https://d33wubrfki0l68.cloudfront.net/d0c191007cb249049b9a06c970cf19829fd9af38/ced0d/static/28214bb68eb5445dcb063a72535bc90c/3bf79/hero.png'/>
            <div className='chaospage-title'>
                All THE CHAOS IN THE WORLD
                <div className='chasopage-content'>
                    <div>
                        Live: 495
                    </div>
                    <div>
                        Hell: 495
                    </div>
                    <div>
                        Paradise: 495
                    </div>
                </div>
            </div>
            <div className='chaospage-chaoslist'>
                <div className='chaospage-filter'>
                    <FilterBroad/>
                </div>
                <div className='chaospage-chaoses'>
                    <div className='chaospage-gridcontainer'>
                        <Card id={0}/>
                        <Card id={1}/>
                        <Card id={2}/>
                        <Card id={3}/>
                    </div>
                    <Pagination className='chaospage-pagination' count={10} color="secondary"/>
                </div>
            </div>
        </div>
    )
}

export default ChaosPage
