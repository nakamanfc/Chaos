import React from 'react'
import '../../Style/FilterBroad.css'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function FilterBroad() {
    return (
        <div className='ft-ct'>
            <div className='ft-bx'>
                <div className='ft-tile'>
                    FILTERS
                </div>
                <TextField label="Chaos ID" size="small"/>
                <div class='ft-races'>
                    Races
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Live" />
                        <FormControlLabel control={<Checkbox />} label="Hell" />
                        <FormControlLabel control={<Checkbox />} label="Paradise" />
                    </FormGroup>

                </div>
                <div class='ft-elements'>
                    Elements
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Warrior" />
                        <FormControlLabel control={<Checkbox />} label="Archer" />
                        <FormControlLabel control={<Checkbox />} label="Magician" />
                    </FormGroup>
                </div>
                <div class='ft-gender'>
                    Genders
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Male" />
                        <FormControlLabel control={<Checkbox />} label="Female" />
                    </FormGroup>
                </div>
                <div class='ft-sales'>
                    Sales
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="For Sale" />
                        <FormControlLabel control={<Checkbox />} label="Not For Sale" />
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}

export default FilterBroad
