// SPDX-License-Identifier: MIT
pragma solidity >=0.4.24 <0.7.0;

interface IPoolzBack {
    // enum PoolStatus {Created, Open, PreMade, OutOfstock, Finished, Close} //the status of the pools

    function getTotalInvestor() external view returns(uint256);
    function IsReadyWithdrawInvestment(uint256 _id) external view returns(bool);
    function poolzCount() external view  returns(uint256);
    function IsReadyWithdrawLeftOvers(uint256 _PoolId) external view returns(bool);
    function WithdrawInvestment(uint256 _id) external returns (bool);
    function GetPoolStatus(uint256 _id) external view returns (uint);
    function getInvestors(uint256 _Id) external view returns(uint256, address, uint256, bool, uint256, uint256);
    function WithdrawLeftOvers(uint256 _PoolId) external returns (bool);
    function getPoolsMoreData(uint256 _Id) external view returns(bool, uint256, uint256, uint256, uint256, bool, bool, uint256);
}
