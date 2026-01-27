'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Image from 'next/image'
import Link from "next/link"

export default function Header() {



    const [windowWidth, setWindowWidth] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
          }
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener('resize', handleResize)
    })

    const navBar = () => {     
        const className = "ml-6"   
        return (
            <>
                <Link className={className} href="zines">Zines</Link>
                <Link className={className} href="team">Zineurses</Link>
                <Link className={className} href="contact">Contact</Link>
            </>
        )
    }

    return (
        <div className="w-full flex flex-col justify-center sticky top-0">
        
            <div className="p-6 m-2 border-2 border-black h-8 w-full flex self-center items-center justify-between shadow-xl bg-white">
                <Link href="/">
                    <Image src={"/logo.png"} className="max-w-auto" alt="Logo Proto" width={100} height={100}/>
                </Link>
               {windowWidth < 720 ? <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} onClick={() => setMenuOpen(!menuOpen)}/>
               : <div className="flex flex-row w-full p-2 mr-10">
                    {navBar()}
                </div>}
            </div>
            {windowWidth < 720 && menuOpen && <div className="flex flex-col w-full self-center justify-between p-2 border-2 border-black shadow-xl bg-white">
                {navBar()}
                </div>}
        </div>
        
    )
}