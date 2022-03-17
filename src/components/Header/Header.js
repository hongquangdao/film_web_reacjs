import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <span onClick={() => window.scroll(0, 0)}>🎥🎥 Web xem phim 🎬🎬</span>
        </div>
    )
}

export default Header