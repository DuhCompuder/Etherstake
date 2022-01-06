import BoxLayout from "../components/BoxLayout"
import FarmDisplay from "../components/FarmDisplay"
import FarmInput from "../components/FarmInput"
import Navbar from "../components/Navbar"
import Transactions from "../components/Transactions"

function HomePage() {
    return (
      <div className="bg-orange-500 h-screen">
        <Navbar />
        <div className="flex justify-center">
          
          <div className="my-2 max-w-3xl space-y-2">
            <div className="flex">
              <div className="w-60">
              <img src='/hodl.jpg' className="object-cover h-full" alt='hodl' />
              </div>
              <FarmInput />
            </div>
            
            
            <FarmDisplay />
            <BoxLayout />
            <Transactions /> 
          </div>
        </div>
      </div>
    )
  }
  
  export default HomePage