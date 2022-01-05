import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ConnectButton from '../ConnectButton/ConnectButton.js'

function Nav({clickChaos, clickMaketplace, clickMyChaos, clickShop, account}) {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Box sx={{width: '100%', display: 'flex', flexDirection:'row', justifyContent:'space-between', padding:'20px', color:'white'}}>
            <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            >
                <Tab value="one" label="Chaos" onClick={clickChaos}/>
                <Tab value="two" label="Maketplace" onClick={clickMaketplace}/>
                <Tab value="three" label="shop" onClick={clickShop}/>
                <Tab value="four" label="My Chaos" onClick={clickMyChaos}/>
            </Tabs>
            <ConnectButton account={account}/>
        </Box>
    )
}

export default Nav
