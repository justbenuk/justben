import Link from "next/link";
import React from "react";
import { FaSmile } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Faq() {
  return (
    <div className="py-12 lg:py-34">
      <div className="bg-white rounded-xl py-12 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-5xl">Frequently Asked Questions</h1>
          <p className="py-4">
            Im more then happy discuss anything, Some questions can be answered
            now
          </p>
        </div>
        <div className="p-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item1">
              <AccordionTrigger className="border px-6 mb-4">
                Do you make the designs
              </AccordionTrigger>
              <AccordionContent className="bg-gray-200 rounded-xl p-6 mb-4">
                In short NO, I admit I am no designer. But I can take your ideas
                and turn them in to the website you are looking for
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item2">
              <AccordionTrigger className="border px-6 mb-4">
                How long does it take
              </AccordionTrigger>
              <AccordionContent className="bg-gray-200 rounded-xl p-6 mb-4">
                Depends on what you after, Small simple websites can take a day
                or two. Large projects can take longer depending on what your
                looking for. We can always discuss a time line
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item3">
              <AccordionTrigger className="border px-6 mb-4">
                What about payment
              </AccordionTrigger>
              <AccordionContent className="bg-gray-200 rounded-xl p-6 mb-4">
                Depends on what you after, Small simple websites can take a day
                or two. Large projects can take longer depending on what your
                looking for. We can always discuss a time line
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item4">
              <AccordionTrigger className="border px-6 mb-4">
                What about payment
              </AccordionTrigger>
              <AccordionContent className="bg-gray-200 rounded-xl p-6 mb-4">
                Depends on what you after, Small simple websites can take a day
                or two. Large projects can take longer depending on what your
                looking for. We can always discuss a time line
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
