import React from 'react'
import '../../Style/Tx.css'

function Ask({type,c}) {
    return (
        <>
        {c?(
        <div className='tx-box'>
            <div className='tx-left'>
                <div id='d'>
                    0x51d...fcaD5
                </div>
            </div>
            <div className='tx-right'>
                <div id='d'>
                    1850 ETH
                </div>
            </div>
        </div>
        ):(
        <div className='tx-box'>
            <div className='tx-left'>
                <div id='t'>
                    0x51d...fcaD5
                </div>
            </div>
            <div className='tx-right'>
                <div id='t'>
                    1850 ETH
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default Ask
