function FarmDisplay() {
    const detailCard = (name, data) => {
        return (
            <div className=" p-5">
                <h1>
                    {name}
                </h1>
                <div className="bg-white h-10 w-40">
                    {data?data:<h1 className="p-2">0</h1>}
                </div>
            </div>
        )
    }
    return (
        <div className="bg-yellow-400 border-2 border-yellow-700 w-full flex flex-col md:justify-center justify-between items-center space-x-2 p-4">
            <div className="flex">
            {
                ['ETH Locked:', 'Time Locked:', 'Amount Yield:'].map((name)=>(detailCard(name)))
            }
            </div>
            <div className="flex w-full justify-evenly">
                <button className="text-white cursor-pointer bg-yellow-800 hover:bg-[#0086D4] p-2 px-12">Withdrawl ETH</button>
                <button className="text-white cursor-pointer bg-yellow-800 hover:bg-[#0086D4] p-2 px-12">Claim Yield</button>
            </div>
        </div>
    )
}

export default FarmDisplay
