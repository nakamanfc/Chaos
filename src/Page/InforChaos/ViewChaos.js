import React, { useState, useEffect } from 'react'
import Foot from '../../Component/Foot/Foot'
import Nav from '../../Component/Nav/Nav'
import '../../Style/InfoChaos.css'
import Card from '../../Component/Card/Card'
import InfoBoard from './InfoBoard'
import PowerBoard from './PowerBoard'
import TransactionBoard from './TransactionBoard'
import { Button } from '@mui/material'
import Window from '../../Component/Window/Window'

function ViewChaos({isOnwer, account}) {
    const [type,setType] = useState(4);
    // const [id, sid] = useState(0);
    function clickFeeding(){
        setType(0)
    }
    function clickBreeding(){
        setType(1)
    }
    function clickSell(){
        setType(2)
    }
    function clickTranfer(){
        setType(3)
    }
    function clickCancel(){
        setType(4)
    }
    function getId(){
        let id = ((window.location.search).toString()).substring(4)
        return id
    }
    // useEffect(() => {
    //     getId()
    //   }, [])
    return (
        <>
            <Nav account={account}/>
            <div className='box-viewchaos'>
                <div className='box-top-content'>
                    <Card id={getId()}/>
                    <InfoBoard/>
                </div>
            </div>
            <div className='box-viewchaos'>
                <div className='box-bottom-content'>
                    <PowerBoard/>
                    <TransactionBoard/>
                </div>
            </div>
            {isOnwer?(
                <>
                <div className='function-viewchaos'>
                    <div className='function-button'>
                        <Button variant="contained" color="secondary" onClick={clickFeeding}>
                            Feeding
                        </Button>
                        <Button variant="contained" color="secondary" onClick={clickBreeding}>
                            Breeding
                        </Button>
                        <Button variant="contained" color="secondary" onClick={clickSell}>
                            Sell
                        </Button>
                        <Button variant="contained" color="secondary" onClick={clickTranfer}>
                            Star Gate
                        </Button>
                    </div>
                </div>
                <Window type={type} clickCancel={clickCancel} id={getId()}/>
                </>
            ):(
                <>
                </>
            )}
            <Foot/>
        </>
    )
}

export default ViewChaos
