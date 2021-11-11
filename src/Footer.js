import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <div>
                Nigeria
            </div>
            <div className="footer_links">
                <div>
                    <Link>About</Link>
                    <Link>Advertising</Link>
                    <Link>Business</Link>
                    <Link>How Search works</Link>
                </div>
                <div>
                    <Link>Carbon neutral since 2007 </Link>
                </div>
                <div>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                    <Link>Settings</Link>
                </div>
               
            </div>
            
        </div>
    )
}

export default Footer
