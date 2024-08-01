"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react";

function Headers() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);
    if (time) {
        return (
            <header className="bg-background fixed top-0 w-full">
                <nav className="container h-20 flex items-stretch justify-between">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <div className="-skew-x-[25deg] w-1 h-4 bg-primary"></div>
                            <h1 className="">dEvAshirvad</h1>
                        </div>
                        <div className="md:flex items-center hidden">
                            <p className="text-xs">
                                Bhubaneswar, India - {time.toLocaleTimeString()}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex items-center gap-2">
                            <div className="w-2 aspect-square rounded-full bg-green-400"></div>
                            <p className="text-xs">
                                Available for Work
                            </p>
                        </div>
                        {/* <div className="flex items-center gap-5">
                            
                            <Link href={""} className="text-xs">Work</Link>
                            <Link href={""} className="text-xs">Blogs</Link>
                            <Link href={""} className="text-xs">About</Link>
                           
                            <Link href={""} className="text-xs">Book a Call</Link>
                        </div> */}
                    </div>
                </nav>
            </header>
        )
    }
}

export default Headers