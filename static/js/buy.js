var ShipAddress;
var ShipContract;
var addressNow;
var setting = {}
var networkId;
// 初始化钱包连接

doLogin()

function doLogin() {
    try {
        ethereum.request({ method: 'eth_requestAccounts' }).then((res) => {
            // console.log('eth:', res)\
            addressNow = res[0];
            console.log('Now account:', addressNow);
            web3js = new Web3(window.ethereum);
            getNetworkInterval = self.setInterval("getNetwork()", 2000);
        })
    } catch (error) {
        console.log('Connect err', error);
    }
}

// 通过钱包来初始化区块链链接
function getNetwork() {
  console.log('getNetwork========',ShipContract);
    if (ShipContract == undefined) {
        networkId = parseInt(ethereum.chainId);
        switchNetwork(networkId)
    }
    else {
        clearInterval(getNetworkInterval);
    }
}
//根据网络切换合约地址
function switchNetwork(networkId) {
    console.log("🚀 ~ file: buy.js ~ line 38 ~ switchNetwork ~ networkId", networkId)
    switch (networkId) {
        case 42://kovan
            NAPAddress = "0x0D54464EC49818BDaf6f42f465025A06CbD68ffD";
            LPAddress = "0xf00d166880f318cbf5fea6e3b6cd507ae37febe6";
            ShipAddress = "0xf3CD6403D309a0f5FE5776B995a1D59AFe1A8061";
            DropAddress = "0xe7cd521fcf34838d136203F3a86771606f055353";
            setting.netWork = 'Kovan'; //monaco
            initContractInstance(networkId);
            break;
        case 56://BSC
            NAPAddress = "0x4D05DE8D57b238457D62dAdd6D3B395Bbc8c9824";
            LPAddress = "0xc9a960dc0c04cde1c5729300892cb27eade5e4d0";
            ShipAddress = "0xe7cd521fcf34838d136203F3a86771606f055353";
            setting.netWork = 'BSC'
            initContractInstance(networkId);
            break;
        default:
            // 当匹配的chain ID不对劲时也清理掉周期调用
            clearInterval(getNetworkInterval);
            break;
    }

}
// 生成合约对象实例
async function initContractInstance(networkId) {
    ShipContract = new web3js.eth.Contract(Ship_ABI, ShipAddress);
    console.log("🚀 ~ file: buy.js ~ line 65 ~ initContractInstance ~ ShipContract", ShipContract)
}

// 检查名称可用性
async function nameAvailable(playerName) {
    var _isShipID = parseInt(await ShipContract.methods.ShipNameSystem_NameToShipId(playerName).call());
    return _isShipID == 0 ? true : false;
}

// 执行飞船购买
async function buyShip(playerName) {
    let price = web3js.utils.toWei(String((Math.ceil((await ShipContract.methods.shipPrice().call()) / web3js.utils.toWei('0.1', 'ether'))) * 0.1), 'ether')
    try {
        const res = await ShipContract.methods.orderShip(playerName).send({ from: addressNow, value: price });
        console.log(1111, res)
    } catch (err) {
        // 当用户取消交易时处理
        return false;
    }
    // 当用户购买成功处理
    return true;
}
