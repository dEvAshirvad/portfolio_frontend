import Image from 'next/image'
import React from 'react'

function AboutSection({ index, title, content }: { index: number, title: string, content: string }) {
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

                    <p className='border-y md:border-0 md:col-span-3 md:py-20 py-10 mt-10 md:row-start-2 md:text-xl text-lg text-muted-foreground'>{content}</p>

                    <Image src={"/me.jpeg"} width={910} height={1066} alt='Ashirvad Satapathy' className='md:row-start-3 md:col-start-4 mt-10 md:col-span-2'>

                    </Image>
                </div>
            </div>
        </div>
    )
}

export default AboutSection