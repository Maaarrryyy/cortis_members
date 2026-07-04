import { Card } from "./Card"
import {  type GridProps } from "./data"

export const Grid = ({ items }: GridProps) => {
  return (
    <section className="min-h-screen flex px-6 py-4 w-full mx-auto justify-center items-center ">
        <ul className="grid grid-cols-1 md:grid-cols-3  gap-x-8 gap-y-4 max-w-3xl">
               <li className=" relative text-3xl font-medium flex flex-col tracking-tight"
            >
                <h1 className="absolute top-0 left-0 ">
                    CORTIS MEMBERS
                </h1>
            </li>
            {items.map((item) => (
                <li>
                    <Card {...item} />
                </li>
               
            ))}
         
        </ul>
    </section>
  )
}
