import { Menu } from "lucide-react"
import Link from "next/link"

function Headers() {
    return (
        <header className="bg-background fixed top-0 w-full">
            <nav className="container h-20 flex items-stretch justify-between">
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <div className="-skew-x-[25deg] w-1 h-4 bg-primary"></div>
                        <h1 className="">dEvAshirvad</h1>
                    </div>
                    <div className="md:flex items-center hidden">
                        <p className="text-xs">
                            Bhubaneswar, India -
                            12:59 PM
                        </p>
                    </div>
                </div>
                <div className="md:flex items-center hidden gap-2">
                    <div className="w-2 aspect-square rounded-full bg-green-400"></div>
                    <p className="text-xs">
                        Available for Work
                    </p>
                </div>
                <div className="md:flex items-center gap-5 hidden">
                    <Link href={""} className="text-xs">Work</Link>
                    <Link href={""} className="text-xs">Blogs</Link>
                    <Link href={""} className="text-xs">About</Link>
                    <Link href={""} className="text-xs">Book a Call</Link>
                </div>
                <div className="flex md:hidden items-center">
                    <Menu />
                </div>
            </nav>
        </header>
    )
}

export default Headers