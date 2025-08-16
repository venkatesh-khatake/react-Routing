import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Product from "./components/Product";
import Event from "./components/Event";
import Form from "./components/Form";
import Counter from "./components/Counter";

import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import ProductList from "./components/ProductList";
import MessageBox from "./components/MessageBox";
import LikeButton from "./components/LikeButton";

const App = () => {
  return (
    // <div>
    //   <BrowserRouter>
    //     {/* Navigation Links */}
    //     <nav
    //       style={{
    //         backgroundColor: "white",
    //         height: "70px",
    //       }}
    //     >
    //       <ul
    //         style={{
    //           width: "100%",
    //           height: "100%",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           gap: "10px",
    //           color: "white",
    //           listStyle: "none",
    //         }}
    //       >
    //         <li>
    //           <Link to="/" className="link">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/about" className="link">
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/dashboard" className="link">
    //             Dash- board
    //           </Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* Route Definition */}
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />

    //         {/* Parent Route */}
    //       <Route path="/dashboard" element={<Dashboard />}>

    //       {/* Nested Routes */}
    //         <Route path="profile" element={<Profile />} />
    //         <Route path="settings" element={<Settings />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    //   {/* <h1>Hello World</h1> */}
    // </div>

    <>
    {/* <h1>Blockbuster Deals | Shop now</h1> */}

     {/* <ProductList/> */}
     {/* <MessageBox
      name = "Venkatesh"
      textColor = "pink"
     /> */}

     {/* <Event/> */}
     {/* <Form/> */}

     {/* <Counter/> */}
     <LikeButton/>
    </>
  );
};

export default App;
