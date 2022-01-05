import React from 'react'
import '../../Style/Card.css'

function ShopCard() {
    return (
    <div className='container-card'>
        <div className='box-card'>
            <iframe className='chaosFrame' src='http://mobga.me/images/dragon-mania-legends/eggs/abyss-egg.png'/>
            <div className='chaosInfo'>
                <div style={{fontWeight: '500', color:'black'}}>
                    Eggs
                </div>
                <div>
                    #?
                </div>
                <div>
                    Level 1
                </div>
            </div>
        </div>
    </div>
    )
}

export default ShopCard
