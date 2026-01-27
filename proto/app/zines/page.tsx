'use client'

import Zines from "../../public/data/zines.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faGlasses, faFileArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Image from "next/image"

export default function Page() {
    const [openPdf, setOpenPdf] = useState('')


    const PdfViewer = (pdf: string) => {
        return(<div className="flex flex-col w-full h-screen bg-red-500/150">
            <FontAwesomeIcon onClick={() => setOpenPdf('')} height={50} width={50} className="self-end cursor-pointer" icon={faX}/>
            <embed className="w-full h-screen" src={`/data/zines/${pdf}.pdf`} type="application/pdf"/>
        </div>)
    }

    const Card = (key: string, value: {title: string, description: string, pdf: string, cover: string}) => {
        return(<div key={key} className="my-12 flex flex-col md:flex-row ">
            <h2 className="font-bold mb-4">{value.title}</h2>
            {value.description && <p>{value.description}</p>}
            {value.pdf && openPdf === key ? PdfViewer(value.pdf) :
                <div>
                    <div key={key} className={`my-12 flex flex-col md:flex-row `}>
                        <div className={`flex mr-4 mb-4 h-fit flex-row md:flex-col`}>
                            {value.cover && <Image className="max-w-[100] rounded-xl" src={`/data/covers/${value.cover}`} alt={`cover ${value.title}`} 
                            width={300} height={300}/>}
                            {value.pdf && <div className="self-end md:self-start">
                                <FontAwesomeIcon icon={faGlasses} onClick={() => setOpenPdf(key)} size="2x"/>
                                <a href={`/data/zines/${value.pdf}.pdf`} download={`${value.title}`}><FontAwesomeIcon icon={faFileArrowDown} size="2x"/></a>
                            </div>}
                    </div>
                </div>
            </div>}
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" /> 
        </div>)
    }

    return <div className={``}>
        <h1>Les zines</h1>
        <div>
        {Object.entries(Zines).map(([key, value]) => Card(key, value))

        }</div>
        </div>
  }