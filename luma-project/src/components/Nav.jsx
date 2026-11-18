import { useState } from 'react'
import './Nav.css'
export function Nav(){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav>
            <h1>LUMA</h1>
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <a href="#">Home</a>
                <a href="#">Collections</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <button className='explore-btn'>Explore Collection <i className="fa-solid fa-arrow-right"></i></button>

            <p onClick={() => setIsOpen(!isOpen)}><i class="fa-solid fa-bars"></i></p>
        </nav>
    )
}