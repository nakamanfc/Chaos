import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ConnectButton({account}) {
    return (
        <>
        {(account != '0x00...00')?(
            <Button variant="contained" color="secondary" endIcon={<AccountCircleIcon/>}>{account[0]}{account[1]}{account[2]}{account[3]}...{account[40]}{account[41]}</Button>

        ):(
            <Button variant="contained" color="secondary">Connect</Button>         
        )}
        </>
    )
}

export default ConnectButton
