import React from 'react'
import '../../Style/InfoChaos.css'
import { Scrollbars } from 'react-custom-scrollbars'
import Transaction from './Transaction'
import Ask from './Ask'

function AskList() {
    return (
        <div className='container-tx'>
            <div className='title-c'>Ask List</div>
            <div className='box-tx'>
                <Scrollbars Scrollbars style={{ width: '620px', height: '150px' }}>
                    <Ask c={false}/>
                    <Ask c={true}/>
                    <Ask c={false}/>
                    <Ask c={true}/>
                    <Ask c={false}/>
                    <Ask c={true}/>
                    <Ask c={false}/>
                    <Ask c={true}/>
                    <Ask c={false}/>
                    <Ask c={true}/>
                    <Ask c={false}/>
                    <Ask c={true}/>
                    <Ask c={false}/>
                    <Ask c={true}/>
                    <Ask c={false}/>
                </Scrollbars>
            </div>
        </div>
    )
}

export default AskList
