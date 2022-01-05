import logo from './logo.svg';
import './App.css';
import Chaos from './Component/Chaos/Chaos';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Page/Home/Home';
import Info from './Page/InforChaos/Info';
import SaleChaos from './Page/InforChaos/SaleChaos';
import { useEffect, useState } from 'react';
import ethEnabled from '../src/Web3/Web3'
import Web3 from 'web3'

function App() {
  const[account,setAccount] = useState('0x00...00');
  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }
  async function loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
  }
  async function getnetwork() {
    window.web3.eth.net.getId().then(console.log);
  }

  useEffect(() => {
    loadWeb3()
    loadBlockchainData()
    getnetwork()
  }, [])
  return (
    <>
    <Router>
      <Switch>
        <Route path='/chaos'>
          <Info isView={true} account={account}/>
        </Route>
        <Route path='/c'>
          <Chaos/>
        </Route>
        <Route path='/'>
          <Home account={account}/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;