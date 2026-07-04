import type { CardProps } from "./data"

export const Card = ({ img, imgAlt, label, birth }: CardProps) => {
  return (
    <article className="group flex flex-col  cursor-pointer">
        <figure className=" w-full h-full object-cover relative overflow-hidden">
            <img loading="eager" decoding="async" className="group-hover:scale-103 transition-transform duration-200"
            src={img} alt={imgAlt} />

            <div className="absolute inset-0 bg-neutral-950/40 scale-y-0 opacity-0 transform ease-out duration-400 origin-top
            group-hover:opacity-100 group-hover:scale-y-100"  />
        </figure>
        <figcaption className="flex justify-between items-baseline mt-2">
            <h3 className="text-lg font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors duration-200">
          {label}
        </h3>
        <span className="font-mono text-sm text-neutral-600 tracking-tight uppercase">
          {birth}
        </span>
        </figcaption>
    </article>
  )
}
