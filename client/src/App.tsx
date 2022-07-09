
import React from "react";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewEmployee from "./components/NewEmployee";

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>          
          <Route path="/" element={<Home/>}/>
          <Route path="employees" element={<Employees/>}/>
          <Route path="employees/new" element={<NewEmployee />}/>
          {/* <Route path="employees/:id" element={<ViewEmployee />}/> */}
        </Routes>
      </Layout>
    </BrowserRouter>    
  );
}

export default App;
