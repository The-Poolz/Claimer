const Claimer = artifacts.require("./Claimer");

module.exports = function (deployer) {
  deployer.deploy(Claimer);
};