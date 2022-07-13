//const DTube = artifacts.require("DTube");

//module.exports = function(deployer) {
//  deployer.deploy(DTube);
//};

var myContract = artifacts.require("DTube");

module.exports = function(deployer){
  deployer.deploy(DTube);
}
