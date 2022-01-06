function FarmInput() {
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
                type="number" />
                
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
                type="number" />
                <button className="text-white cursor-pointer bg-yellow-800 hover:bg-[#0086D4] p-2 ">Deposit</button>
                </div>
            </div>
        </div>
    )
}

export default FarmInput
