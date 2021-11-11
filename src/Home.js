import React, { useState } from 'react';
import './Home.css';
import {Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar} from "@material-ui/core";
import logo from "./Side_hustle.png";
import Search from "./Search"
import Footer from "./Footer"

const Home = () => {
    const[content, setContent] = useState('')
    return (
        
        <div className="home">
            <div className = "home_header">
                <div className = "home_headerLeft">
                    <Link to="/about"> About</Link>
                    <Link to="/store"> Store</Link>
                </div>
                <div className = "home_headerRight">
                    <Link to="/gmail"> Gmail</Link>
                    <Link to="/images"> Images</Link>
                    <AppsIcon /> 
                    <Avatar />
                </div>
            </div>
            <div className = "home_body">
                {!content ? <img src={logo} alt="Logo"/>: content}
                <div className="home_inputContainer">
                    <Search setContent={setContent}/>
                </div>
            </div>
            <div className="home_footer">
                <Footer />
            </div>
        </div>
        
    )
}

export default Home
