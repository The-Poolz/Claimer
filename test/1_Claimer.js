const Claimer = artifacts.require('Claimer')
const { assert } = require('chai');

contract('Claimer Contract', (accounts) => {
    let instance, fromAddress = accounts[0]

    beforeEach(async () =>{
        instance = await Claimer.deployed()
    })

    it('sets PoolzBack address', async () => {
        const contractAddress = accounts[1]
        await instance.setPoolzBackAddress(contractAddress, {from: fromAddress})
        const address = await instance.PoolzBackAddress()
        assert.equal(contractAddress, address)
    })

    it('sets StartInvestor and StartProjectOwner', async () => {
        const startInvestor = 1
        const startProjectOwner = 1
        await instance.SetStartForWork(startInvestor, startProjectOwner, {from: fromAddress})
    })

    it('sets and gets MinWorkInvestor', async () => {
        const value = 1
        await instance.SetMinWorkInvestor(value, {from: fromAddress})
        const result = await instance.GetMinWorkInvestor()
        assert.equal(result, value)
    })

    it('sets and gets MinWorkProjectOwner', async () => {
        const value = 1
        await instance.SetMinWorkProjectOwner(value, {from: fromAddress})
        const result = await instance.GetMinWorkProjectOwner()
        assert.equal(result, value)
    })
})