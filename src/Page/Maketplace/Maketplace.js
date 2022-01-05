import Card from '../../Component/Card/Card'
import { Box } from '@mui/system'
import Grid from '@mui/material/Grid';
import React from 'react'
import Pagination from '@mui/material/Pagination';
import '../../Style/ChaosPage.css'
import FilterBroad from '../../Component/FilterBroad/FilterBroad';

function Maketplace() {
    return (
        <>
        <div className='chaospage-box'>
            <img className='image-home' src='https://d33wubrfki0l68.cloudfront.net/d0c191007cb249049b9a06c970cf19829fd9af38/ced0d/static/28214bb68eb5445dcb063a72535bc90c/3bf79/hero.png'/>
            <div className='chaospage-title'>
                All THE CHAOS IN THE MAKET
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
                    <div className='maketplace-gridcontainer'>
                        <Card id={0} maketplace={true}/>
                        {/* <Card maketplace={true}/>
                        <Card maketplace={true}/>
                        <Card maketplace={true}/>
                        <Card maketplace={true}/>
                        <Card maketplace={true}/>
                        <Card maketplace={true}/> */}
                    </div>
                    <Pagination className='chaospage-pagination' count={10} color="secondary"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Maketplace
