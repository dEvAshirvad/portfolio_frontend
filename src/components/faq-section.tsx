import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function FAQ(
    {
        index,
        title,
        faqs
    }: {
        index: number,
        title: string,
        faqs: {
            title: string;
            answer: string;
        }[];
    }) {
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
                </div>

                <Accordion type="single" className="border-y md:mt-20 mt-10" collapsible>
                    {
                        faqs.map((faq, index) => {
                            return <AccordionItem key={index} value={faq.title.toLowerCase()}>
                                <AccordionTrigger className='py-5 text-left'>{faq.title}</AccordionTrigger>
                                <AccordionContent className='grid md:grid-cols-5 grid-cols-1 gap-5'>
                                    <div className="col-span-4">
                                        {faq.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        })
                    }
                </Accordion>

            </div>
        </div>
    )
}

export default FAQ