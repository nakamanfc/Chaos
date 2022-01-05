
import React from 'react'
import Pagination from '@mui/material/Pagination';
import '../../Style/ChaosPage.css'
import { Button } from '@mui/material';
import ShopCard from '../../Component/Card/ShopCard';
import web3 from '../../Web3/Web3'


function Shop({account}) {
    async function createChaos(){
        await web3.ChaosMethods().methods.createRandomChaos().send({from: `${account}`}).then(console.log)
    }
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
                <div className='shop-chaoses'>
                        <ShopCard/>
                        <Button onClick={createChaos} variant="contained" color="secondary" sx={{marginTop:'20px'}}>Mint</Button>
                    <Pagination className='chaospage-pagination' count={1} color="secondary"/>
                </div>
            </div>
        </div>
    )
}

export default Shop
