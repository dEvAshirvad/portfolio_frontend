import Link from 'next/link'
import React from 'react'

function FrameFooter() {
    return (
        <footer className='fixed bottom-0 left-0 w-full'>
            <nav className="h-20 container flex items-stretch justify-between">
                <div className="flex items-center gap-5 text-xs uppercase">
                    <Link href={"https://www.linkedin.com/in/ashirvad-satapathy-2291961b7"}>Linkedin</Link>
                    <Link href={"https://www.instagram.com/hello_jicky?utm_source=qr&igsh=MWU3NWR5N2p3ejRnNQ=="} >Instagram</Link>
                    {/* <Link href={""} className='hidden md:inline'>Twitter</Link> */}
                    <Link href={"https://github.com/dEvAshirvad"}>Github</Link>
                </div>
                <div className="flex items-center ">
                    <p className='text-xs uppercase'>Copyright 2024</p>
                </div>
            </nav>
        </footer>
    )
}

export default FrameFooter