"use client"

import {useState} from "react";
import { FiPlus } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import faqData from '../../data/info.json'
import {FAQ} from "@/types/faq";

const FrequentlyAskedQuestions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto flex flex-col justify-center items-center p-4 md:p-6">
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
                Frequently Asked Questions
            </h2>
            <div className="space-y-4 w-full mt-6 md:mt-10 text-gray-400">
                {faqData.faq.map((faq:FAQ, index:number) => (
                    <div className="border rounded-lg border-gray-600" key={index}>
                        <button
                            className="w-full flex items-center justify-between p-3 md:p-4"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{faq.question}</span>
                            <span className="text-lg md:text-xl">
                            {openIndex === index ? (
                                <LiaTimesSolid fill="#4F46E5FF"/>
                            ) : (
                                <FiPlus fill="#4ccd99"/>
                            )}
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="px-3 md:px-4 py-2">
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

    )
}

export default FrequentlyAskedQuestions;