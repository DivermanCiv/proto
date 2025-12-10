'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Image from 'next/image'

export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 720)
    const [menuOpen, setMenuOpen] = useState(!isMobile)

    const handleResize = () => {
        setIsMobile(window.innerWidth < 720)
      }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    const navBar = () => {     
        let className = "ml-6"   
        return (
            <>
                <a className={className} href="/">Accueil</a>
                <a className={className} href="zines">Zines</a>
                <a className={className} href="team">Zineurses</a>
                <a className={className} href="contact">Contact</a>
            </>
        )
    }

    return (
        <div className="w-full flex flex-col justify-center sticky top-0">
        
            <div className="p-6 m-2 border-2 border-black h-8 w-full flex self-center items-center justify-between shadow-xl bg-white">
                <Image src={"/logo.png"} alt="Logo Proto" width={100} height={100}/>
               {isMobile ? <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} onClick={() => setMenuOpen(!menuOpen)}/>
               : <div className="flex flex-row w-full p-2 mr-10">
                    {navBar()}
                </div>}
            </div>
            {isMobile && menuOpen && <div className="flex flex-col w-full self-center justify-between p-2 border-2 border-black shadow-xl bg-white">
                {navBar()}
                </div>}
        </div>
        
    )
}