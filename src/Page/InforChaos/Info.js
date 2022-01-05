import React from 'react'
import SaleChaos from './SaleChaos'
import ViewChaos from './ViewChaos'

function Info({isView, account}) {
    return (
        <>
          {isView?(
              <ViewChaos isOnwer={true} account={account}/>
          ):(
              <SaleChaos isAsker={true} account={account}/>
          )}  
        </>
    )
}

export default Info
