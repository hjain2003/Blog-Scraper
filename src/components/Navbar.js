import React from 'react'

const Navbar = () => {
    return (
        <nav id="navbar">
            <div id="nav_heading">
                <h2>Web Scraping</h2>
                </div>
                <div id="navbar_contents">
                    <ul>
                        <a href="/"><li>About</li></a>
                        <a href="/"><li>Latest Blogs</li></a>
                        <a href="/"><li>Explore</li></a>
                        <a href="/"><li>Reviews</li></a>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar
