import { useState, useContext } from "react";
import { TransactionContext, TransactionProvider, getEthereumContract } from '../context/TransactionContext'

function FarmInput() {
    const [formInput, updateFormInput] = useState({ amount: 0, timelock: 0 })
    const { getEthereumContract } = useContext(TransactionContext);

    async function stakeEth() {
        const { amount, timelocked } = formInput
        {/* for test purposes AUDIO file in Metadata: remove audioFileUrl if tests unsuccessful */}
        // removed audioFileURL due to inability to upload. After removal, upload process continued smoothly with both audio and graphic NFT's. (|| !audioFileURL) 
        if ( !amount || !timelocked ) return 
        
        if ( !(amount > 0) ) alert('Please enter an amount more than zero') 
        if ( !(timelocked > 0) ) alert('Please select the amount of time to lock tokens') 

        try {
          const contract = getEthereumContract('farm')
          await contract.stake({ value: amount });
        } catch (error) {
          console.log('Error staking: ', error)
        }  
    }

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
                placeholder="0.0"
                type="number"
                onChange={e => updateFormInput({ ...formInput, timelocked: e.target.value })} />
                
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
                placeholder="0.0"
                type="number"
                onChange={e => updateFormInput({ ...formInput, amount: e.target.value })}
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
