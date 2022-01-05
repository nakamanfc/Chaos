import Card from '../../Component/Card/Card'
import React from 'react'
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import '../../Style/ChaosPage.css'
import FilterBroad from '../../Component/FilterBroad/FilterBroad';
import Avatar from '@mui/material/Avatar';
import web3 from '../../Web3/Web3'


function MyChaos({account}) {
    const[listID, setListID] = useState([])

    async function getMyChaos(){
        const data = await web3.ChaosMethods().methods.getChaosOfOwner(`${account}`).call();
        console.log('danh sach chao cua ban',data);
        setListID(data);
    }

    useEffect(() => {
        getMyChaos()
      }, [])
    return (
        <div className='chaospage-box'>
            <img className='image-home' src='https://d33wubrfki0l68.cloudfront.net/d0c191007cb249049b9a06c970cf19829fd9af38/ced0d/static/28214bb68eb5445dcb063a72535bc90c/3bf79/hero.png'/>
            <div style={{height:'100px', width:'100%', display:'flex', justifyContent:'center'}}>
                <Avatar
                    alt="Phạm Việt Hoàng"
                    src="https://files.wallpaperpass.com/2019/10/astronaut%20195%20-%201080x1920-768x1365.jpg"
                    sx={{ width: 200, height: 200, top:-100, color:'white', fontSize:100, background:'orange'}}
                    />
            </div>
            <div className='chaospage-title'>
                Phạm Việt Hoàng
                <div className='chasopage-content'>
                    <div>
                        Chaos: 495
                    </div>
                    <div>
                        Rank: 1
                    </div>
                    <div>
                        Price: 495
                    </div>
                </div>
            </div>
            <div className='chaospage-chaoslist'>
                <div className='chaospage-filter'>
                    <FilterBroad/>
                </div>
                <div className='chaospage-chaoses'>
                    <div className='chaospage-gridcontainer'>
                        {listID.map(id => (<Card id={id}/>))}
                    </div>
                    <Pagination className='chaospage-pagination' count={10} color="secondary"/>
                </div>
            </div>
        </div>
    )
}

export default MyChaos
