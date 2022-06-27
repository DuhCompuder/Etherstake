import { useState, useContext, useEffect } from "react";
import { TransactionContext, TransactionProvider, getEthereumContract } from '../context/TransactionContext'
import { ethers } from 'ethers'

function FarmInput() {
    const [formInput, updateFormInput] = useState({ amount: 0, timelock: 0 })
    const { getEthereumContract } = useContext(TransactionContext);
    const [timelock, setTimelock] = useState("0")
    const [amount, setAmount] = useState("0")

    async function stakeEth() {
        const { amount, timelocked } = formInput
        if ( !amount || !timelocked ) alert('Please enter a value to stake') 
        
        if ( !(amount > 0) ) alert('Please enter an amount more than zero') 
        if ( !(timelocked > 0) ) alert('Please select the amount of time to lock tokens') 

        
        try {
          const contract = await getEthereumContract('farm')
          const transaction = await contract.stake({ value: ethers.utils.parseUnits(amount, 'ether') });
          await transaction.wait()
          console.log(transaction)
        } catch (error) {
          console.log('Error staking: ', error)
        }  
        setTimelock(0)
        setAmount(0)
    }

    const handleAmount = (event) => {
        const value = event.target.value;
        setAmount(value);
        updateFormInput({ ...formInput, amount: value })
    };

    const handleTimelock = (event) => {
        const value = event.target.value;
        setTimelock(value);
        updateFormInput({ ...formInput, amount: value })
    };
    return (
        <div className="bg-yellow-400 border-2 border-yellow-700 w-full flex justify-evenly items-center p-4">
            <h1 className="font-bold text-xl">
                Deposit ETH
            </h1>
            <div className="">
                <h1>
                    Time Lock:
                </h1>
                <div className="flex border-none focus:border-none">
                <input
                className="h-10 w-20 p-2"
                name="Ether"
                placeholder="0"
                value={timelock}
                type="number"
                onChange={handleTimelock} />
                
                </div>
            </div>
            <div className="">
                <h1>
                    Amount:
                </h1>
                <div className="flex border-none focus:border-none ">
                <input
                className="p-2 w-20"
                name="Ether"
                placeholder="0"
                value={amount}
                type="number"
                onChange={handleAmount}
                 />
                <button className="text-white cursor-pointer bg-yellow-800 hover:bg-[#0086D4] p-2 "
                onClick={()=>stakeEth()}
                >Deposit</button>
                </div>
            </div>
        </div>
    )
}

export default FarmInput
