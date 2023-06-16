import {Route, Routes, Link} from  "react-router-dom"
import { Layout, Typography, Space } from "antd"
import { Navbar, HomePage, Exchange, Cryptocurrencies, News, CryptoDetales  } from "./components"


const  App = () =>{
  

  return (
    <div>
     <div >
         <Navbar/>
      </div>
      <div className="main flex  justify-center items-center relative  ">
      <Routes path="/">
        <Route index element={<HomePage/>}  />
        <Route path="exchanges" element={<Exchange/>}  />
        <Route path="cryptocurrencies" element={<Cryptocurrencies/>}  />
        <Route path=":criptoId" element={<CryptoDetales/>}  />
        <Route path="news" element={<News/>}  />
      </Routes>
      
      <div className="bg-gray-900     fixed bottom-0 right-0 left-0 p-5 flex flex-col gap-2 text-white items-center justify-center" >
           
             <h1 className="text-yellow-300 font-bold transform-gpu " >cryptico </h1>
             <h2> © All rights reserverd</h2>
             <div className="flex gap-5 " >
             <Link className="text-blue-400 cursor-pointer "  to="." >Home</Link>
             <Link className="text-blue-400 cursor-pointer " to="exchanges" >Exchanges</Link>
             <Link className="text-blue-400 cursor-pointer " to="news" >News</Link>
             </div>
           
      </div>
      </div>
    </div>
  )
}

export default App
