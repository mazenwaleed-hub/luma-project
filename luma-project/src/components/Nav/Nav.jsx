import { useState } from 'react'
import { CollectionBtn } from '../Button/CollectionBtn'
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
            < CollectionBtn/>

            <p onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-bars"></i></p>
        </nav>
    )
}