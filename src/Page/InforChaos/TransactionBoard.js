import React from 'react'
import '../../Style/InfoChaos.css'
import { Scrollbars } from 'react-custom-scrollbars'
import Transaction from './Transaction'

function TransactionBoard() {
    return (
        <div className='container-tx'>
            <div className='title-c'>Transaction</div>
            <div className='box-tx'>
                <Scrollbars Scrollbars style={{ width: '620px', height: '150px' }}>
                    <Transaction c={false}/>
                    <Transaction c={true}/>
                    <Transaction c={false}/>
                    <Transaction c={true}/>
                    <Transaction c={false}/>
                    <Transaction c={true}/>
                    <Transaction c={false}/>
                    <Transaction c={true}/>
                    <Transaction c={false}/>
                    <Transaction c={true}/>
                    <Transaction c={false}/>
                    <Transaction c={true}/>
                    <Transaction c={false}/>
                    <Transaction c={true}/>
                    <Transaction c={false}/>
                </Scrollbars>
            </div>
        </div>
    )
}

export default TransactionBoard
