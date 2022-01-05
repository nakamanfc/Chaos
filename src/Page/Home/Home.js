import React, { useState } from 'react'
import '../../Style/Home.css'
import Nav from '../../Component/Nav/Nav';
import ChaosPage from '../ChaosPage/ChaosPage';
import Foot from '../../Component/Foot/Foot';
import Maketplace from '../Maketplace/Maketplace';
import MyChaos from '../MyChaos/MyChaos';
import Shop from '../Shop/Shop';

function Home({account}) {
  const[chaos,setChaos] = useState(true)
  const[maketplace,setMaketplace] = useState(false)
  const[myChaos,setMyChaos] = useState(false)
  const[shop,setShop] = useState(false)
  function clickChaos(){
    setChaos(true)
    setMaketplace(false)
    setMyChaos(false)
    setShop(false)
    console.log('chaos')
  }
  function clickMaketplace(){
    setChaos(false)
    setMaketplace(true)
    setMyChaos(false)
    setShop(false)
    console.log('maketplace')
  }
  function clickMyChaos(){
    setChaos(false)
    setMaketplace(false)
    setMyChaos(true)
    setShop(false)
    console.log('mychaos')
  }
  function clickShop(){
    setChaos(false)
    setMaketplace(false)
    setMyChaos(false)
    setShop(true)
    console.log('shop')
  }
    return (
                <>
                <Nav clickChaos={clickChaos} clickMaketplace={clickMaketplace}
                clickMyChaos={clickMyChaos} clickShop={clickShop} account={account}
                />
                {chaos?(<ChaosPage/>):(<></>)}
                {maketplace?(<Maketplace/>):(<></>)}
                {myChaos?(<MyChaos account={account}/>):(<></>)}
                {shop?(<Shop account={account}/>):(<></>)}
                <Foot/>
              </>
    )
}

export default Home
