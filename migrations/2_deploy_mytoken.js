const MyToken = artifact.require("MyToken");

module.exports = function (deployer) {
  const initialSupply = 1000;
  deployer.deploy(MyToken, initialSupply);
};
