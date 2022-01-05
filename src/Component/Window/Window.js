import { Button, TextField } from '@mui/material'
import React from 'react'
import '../../Style/Window.css'
import Card from '../Card/Card'
import Pagination from '@mui/material/Pagination';

function Window({type,clickCancel,id}) {
    if(type == 0){
        return(
        <div className='bg-window'>
            <div className='box-window'>
                <div className='tt-window'>
                    CHOOSE fOOD
                </div>
                <div className='ct-window'>
                    <Card id = {1}/>
                    <Card id = {2}/>
                </div>
                <Pagination className='chaospage-pagination' count={10} color="secondary"/>
                <Button variant="outlined" color="secondary" onClick={clickCancel}>
                    Cancel
                </Button>
            </div>
        </div>
        )
    } else if(type == 1){
    return (

    <div className='bg-window'>
        <div className='box-window'>
            <div className='tt-window'>
                CHOOSE PARTER
            </div>
            <div className='ct-window'>
                <Card id={1} b={true}/>
                <Card id={2} b={true}/>
            </div>
            <Pagination className='chaospage-pagination' count={10} color="secondary"/>
            <Button variant="outlined" color="secondary" onClick={clickCancel}>
                Cancel
            </Button>
        </div>
    </div>
    )} else if(type == 2){
        return(
    <div className='bg-window'>
        <div className='box-window'>
            <div className='tt-window'>
                SELL
            </div>
            <Card id={id}/>
            <div className='pc-window'>
                <TextField id="outlined-basic" label="Price ~ ETH" variant="outlined" />
                <Button variant="contained" color="secondary">
                    Sell
                </Button>
                <Button variant="outlined" color="secondary" onClick={clickCancel}>
                    Cancel
                </Button>
            </div>
        </div>
    </div>
        )
    } else if(type == 3){
        return(
        <div className='bg-window'>
        <div className='box-window'>
            <div className='tt-window'>
                Go to Goerli Planet
            </div>
            <Card id={id}/>
            <div className='pc-window'>
                <Button variant="contained" color="secondary">
                    Trip
                </Button>
                <Button variant="outlined" color="secondary" onClick={clickCancel}>
                    Cancel
                </Button>
            </div>
        </div>
    </div>)
    } else {
        return(
            <>
            </>
        )
    }
}

export default Window
