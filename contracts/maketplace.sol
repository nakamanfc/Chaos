// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0;
import './chaosOwnerShip.sol';

contract Maketplace{
    receive() external payable {}
    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    ChaosOwnerShip chaos = ChaosOwnerShip(0x5A86858aA3b595FD6663c2296741eF4cd8BC4d01);

    struct SellOrder{
        uint256 priceSell;
        address Seller;
        uint IdChaos;
        bool active;
    }
    struct BuyOrder{
        uint256 priceBuy;
        address Buyer;
        uint IdChaos;
        bool active;
    }

    SellOrder [] public sellorders;
    BuyOrder [] public buyorders;

    function sendEthTo(address payable to) public payable {
        to.transfer(msg.value);
    }
    function withdrawETH(address payable recipient, uint256 amount) public payable{
        recipient.call{value: amount}("");
    }

    function createSellOrder(uint IdChaos, uint256 priceSell) public payable returns (bool) {
        require(msg.sender == chaos.ownerOf(IdChaos));
        chaos.transferFrom(msg.sender, address(this), IdChaos);
        SellOrder memory newSellOrder = SellOrder(priceSell, msg.sender, IdChaos, true);
        sellorders.push(newSellOrder);
        return true;
    }
    function createBuyOrder(uint IdChaos) public payable returns (bool) {
        sendEthTo(payable(address(this)));
        BuyOrder memory newBuyOrder = BuyOrder(msg.value, msg.sender, IdChaos, true);
        buyorders.push(newBuyOrder);
        return true;
    }
    function cancelSellOrder(uint idSellOrder) public returns (bool) {
        require(msg.sender == sellorders[idSellOrder].Seller);
        SellOrder memory _sellorder = sellorders[idSellOrder];
        uint IdChaos = _sellorder.IdChaos;
        _sellorder.active = false;
        sellorders[idSellOrder] = _sellorder;
        chaos.approve(msg.sender, IdChaos);
        chaos.transferFrom(address(this), msg.sender, IdChaos);
        return true;
    }
    function cancelBuyOrder(uint idBuyOrder) public returns (bool) {
        require(msg.sender == buyorders[idBuyOrder].Buyer);
        BuyOrder memory _buyorder = buyorders[idBuyOrder];
        uint256 amount = uint256(_buyorder.priceBuy);
        _buyorder.active = false;
        buyorders[idBuyOrder] = _buyorder;
        withdrawETH(payable(msg.sender), amount);
        return true;
    }
    function Sell(uint idBuyOrder) public payable returns (bool){
        require(msg.sender == chaos.ownerOf(buyorders[idBuyOrder].IdChaos));
        require(buyorders[idBuyOrder].active == true);
        BuyOrder memory _buyorder = buyorders[idBuyOrder];
        address _buyer = _buyorder.Buyer;
        uint256 _amount = _buyorder.priceBuy;
        uint _IdChaos = _buyorder.IdChaos;
        chaos.transferFrom(msg.sender, address(this), _IdChaos);
        chaos.approve(_buyer, _IdChaos);
        chaos.transferFrom(address(this), _buyer, _IdChaos);
        withdrawETH(payable(msg.sender), _amount);
        _buyorder.active = false;
        buyorders[idBuyOrder] = _buyorder;
        return true;
    }
    function Buy(uint idSellOrder) public payable returns (bool){
        require(sellorders[idSellOrder].active == true);
        require(address(msg.sender).balance >= sellorders[idSellOrder].priceSell);
        require(msg.value == sellorders[idSellOrder].priceSell);
        SellOrder memory _sellorder = sellorders[idSellOrder];
        address _seller = _sellorder.Seller;
        uint _IdChaos = _sellorder.IdChaos;
        payable(_seller).transfer(msg.value);
        chaos.approve(msg.sender, _IdChaos);
        chaos.transferFrom(address(this), msg.sender, _IdChaos);
        _sellorder.active = false;
        sellorders[idSellOrder] = _sellorder;
        return true;
    }

    function getIdSellByIdChaos(uint IdChaos) external view returns(uint[] memory) { 
        uint size = 0;
        for(uint i = 0; i < sellorders.length; i++){
            if(sellorders[i].IdChaos == IdChaos && sellorders[i].active == true){
                size++;
            }
        }

        uint[] memory result = new uint[](size);
        uint counter = 0;
        for(uint i = 0; i < sellorders.length; i++){
            if(sellorders[i].IdChaos == IdChaos && sellorders[i].active == true){
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }

    function getIdBuyByIdChaos(uint IdChaos) external view returns(uint[] memory) {
        uint size = 0;
        for(uint i = 0; i < buyorders.length; i++){
            if(buyorders[i].IdChaos == IdChaos && buyorders[i].active == true){
                size++;
            }
        }

        uint[] memory result = new uint[](size);
        uint counter = 0;
        for(uint i = 0; i < buyorders.length; i++){
            if(buyorders[i].IdChaos == IdChaos && buyorders[i].active == true){
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }
}