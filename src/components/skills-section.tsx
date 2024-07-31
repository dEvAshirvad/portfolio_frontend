import React from 'react'

function SkillSection({ index, title, skills }: { index: number, title: string, skills: Record<string, string[]> }) {
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

                    <div className="grid md:grid-cols-5 md:gap-y-20 md:mt-20 mt-10 md:col-span-5 grid-cols-1 gap-5">
                        {
                            Object.keys(skills).map((key, index) => {
                                return <div className={`col-span-2 ${index % 2 !== 0 ? "md:col-start-4" : ""}`} key={index}>
                                    <div className="flex flex-row-reverse items-end justify-between">
                                        <h1>/ 0{index + 1}</h1>
                                        <h1 className="text-3xl capitalize">{key}</h1>
                                    </div>
                                    <ul className="md:mt-10 mt-5 space-y-2 md:columns-2 md:gap-5">
                                        {
                                            skills[key].map((skill, index) => {
                                                return <li key={index} className="pb-2 border-b border-dashed capitalize">
                                                    {skill}
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillSection