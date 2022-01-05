import React from 'react'
import '../../Style/Tx.css'

function Transaction({type,c}) {
    return (
        <>
        {c?(
        <div className='tx-box'>
            <div className='tx-left'>
                <div id='d'>
                    Creator
                </div>
            </div>
            <div className='tx-right'>
                <div id='d'>
                    0x51d...fcaD5
                </div>
            </div>
        </div>
        ):(
        <div className='tx-box'>
            <div className='tx-left'>
                <div id='t'>
                    Creator
                </div>
            </div>
            <div className='tx-right'>
                <div id='t'>
                    0x51d...fcaD5
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default Transaction
