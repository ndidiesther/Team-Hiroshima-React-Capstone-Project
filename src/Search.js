import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import {Link } from "react-router-dom";

const Search = ({setContent}) => {
    return (
        <form className="search"> 
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input onChange={e => setContent(e.target.value) } />
                <MicIcon />
            </div>
            <div className="search_buttons">
                <Button type="submit" variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            <div className="language">
                <span >Google Offered in:
                    <span>
                    <Link to="/"> Hausa</Link>
                    <Link to="/"> Igbo</Link>
                    <Link to="/"> Èdè Yorùbá </Link>
                    <Link to="/"> Nigerian Pidgin</Link>
                </span>
                </span>
            </div>
            <div className="last_div">

            </div>
        </form>
    )
}

export default Search
