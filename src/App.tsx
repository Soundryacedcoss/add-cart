import React, { createContext, useState } from 'react';
import { AddProduct } from './Components/AddProduct';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import { PlaceOrder } from './Components/PlaceOrder';
import { LandingPage } from './Components/LandingPage';
import { Setting } from './Components/Setting';
export const productContext = createContext({});
export const SettingDataContext = createContext({})
let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<LandingPage />} />
      <Route path='/AddProduct' element={<AddProduct />} />
      <Route path='/Setting' element={<Setting />} />
      <Route path='/PlaceOrder' element={<PlaceOrder />} />
    </>
  )
)

function App() {
  const [data, setData] = useState<any>([])
  const [SettingData, setSettingData] = useState({})
  return (
    <div className="App">
      <productContext.Provider value={{ data, setData }}>
        <SettingDataContext.Provider value={{ SettingData, setSettingData }}>
          <RouterProvider router={router} />
        </SettingDataContext.Provider>
      </productContext.Provider>
    </div>
  );
}

export default App;
