import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import LayoutPage from "./Pages/LayoutPage/LayoutPage";
import NavBar from "./Pages/NavBar/NavBar";
import AuthPage from "./Pages/Auth/AuthPage";
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout style={{ height: "100vh" }}>
    <NavBar/>
   <div style={{height:"100%",padding:"10px"}}>

   <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route index  element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
   </div>
    </Layout>
  );
}

export default App;
