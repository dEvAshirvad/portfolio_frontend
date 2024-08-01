import Link from 'next/link'
import React from 'react'

function Sections({ index, title, lists }: { index: number, title: string, lists: Record<string, string>[] }) {
    return (
        <div className="pb-20">
            <div className="container">
                <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
                    <h1 className="md:col-start-2 md:text-3xl text-xl text-muted">
                        / {index}
                    </h1>
                    <h1 className="md:col-start-4 md:col-span-2 md:text-6xl text-3xl">
                        {title}
                    </h1>

                    <ul className="border-y md:col-span-5 md:mt-20 mt-10">
                        {
                            lists.map((list, index) => {
                                return <li>
                                    <Link href={list?.href || ""} key={index} className="py-5 border-b w-full flex justify-between gap-5">
                                        <h1 className='flex-1'>{list.title}</h1>
                                        <p className='truncate'>{list.year}</p>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sections