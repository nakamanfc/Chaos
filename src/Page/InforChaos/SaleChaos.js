import React, { useState } from 'react'
import Foot from '../../Component/Foot/Foot'
import Nav from '../../Component/Nav/Nav'
import '../../Style/InfoChaos.css'
import Card from '../../Component/Card/Card'
import InfoBoard from './InfoBoard'
import PowerBoard from './PowerBoard'
import TransactionBoard from './TransactionBoard'
import { Button } from '@mui/material'
import Window from '../../Component/Window/Window'
import Price from './Price'
import AskList from './AskList'

function SaleChaos({isSeller,isAsker,account}) {
    return (
        <>
            <Nav account={account}/>
            <div className='box-viewchaos'>
                <div className='box-top-content'>
                    <Card id={0}/>
                    <InfoBoard/>
                </div>
            </div>
            <div className='box-viewchaos'>
                <div className='box-bottom-content'>
                    <PowerBoard/>
                    <TransactionBoard/>
                </div>
            </div>
            <div className='box-viewchaos'>
                <div className='box-bottom-content'>
                    <Price/>
                    <AskList/>
                </div>
            </div>
            {isSeller?(
            <div className='function-viewchaos'>
            <div className='function-button'>
                <Button variant="contained" color="secondary">
                    Sell Now
                </Button>
                <Button variant="outlined" color="secondary">
                    Cancel Sell
                </Button>
            </div>
        </div>
            ):(
                <div className='function-viewchaos'>
                <div className='function-button'>
                    <Button variant="contained" color="secondary">
                        Buy Now
                    </Button>
                    <Button variant="contained" color="secondary">
                        Ask
                    </Button>
                    {isAsker?(
                        <Button variant="outlined" color="secondary">
                            Cancel Ask
                        </Button>
                    ):(
                        <>
                        </>
                    )}
                </div>
            </div>
            )}
            <Foot/>
        </>
    )
}

export default SaleChaos
