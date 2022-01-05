import Web3 from 'web3'
import chaosJson from '../Abi/Chaos.json'

const ChaosContract = '0x9fB20acf534eEfA995ea7d111352666050A2D162';
const web3 = new Web3(window.web3.currentProvider);
function ChaosMethods(){
  const data = new web3.eth.Contract(chaosJson,ChaosContract);
  return data
}

export default {
  ChaosMethods
};