import React, { useState, useEffect } from 'react'
import '../../Style/Card.css'
import web3 from '../../Web3/Web3'

function Card({id,maketplace,b,f}) {
    const [cdb, setcdb] = useState([])
    async function getChaos(){
        const data = await web3.ChaosMethods().methods.chaoses(id).call();
        console.log(data);
        setcdb(data)
    }
    function openCard(){
        if(b == true){
            web3.ChaosMethods().methods.createRandomChaos().send({from: '0x5Bb46Ecc36DB1B4Af38eDa24e0D4633026D8AaD5'}).then(console.log)
        } else if(f == true){
            web3.ChaosMethods().methods.chaosFeeding(0,1).send({from: `${0x5Bb46Ecc36DB1B4Af38eDa24e0D4633026D8AaD5}`}).then(console.log)
        } else {
            window.open(`http://localhost:3000/chaos?id=${id}`)
        }
    }
    useEffect(() => {
        getChaos()
      }, [])
    return (
    <div className='container-card' onClick={openCard}>
        <div className='box-card'>
            <iframe className='chaosFrame' src={`http://localhost:3000/c?gen=${cdb[0]}`}/>
            <div className='chaosInfo'>
                <div style={{fontWeight: '500', color:'black'}}>
                    Chaos
                </div>
                <div>
                    #{cdb[0]}
                </div>
                <div>
                    Level {cdb[3]}
                </div>
            </div>
        </div>
        {maketplace?(
            <div className='Price-card'>
                3.5 ETH ~ 18020$
            </div>
        ):(
        <></>
        )}
    </div>
    )
}

export default Card
