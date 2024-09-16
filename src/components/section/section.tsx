import { cn } from "@/utils/utils";

const Section = ({children, className} : {children: React.ReactElement | React.ReactElement[], className?: string}) => {
    return(
        <section className={cn('mt-4 md:mt-8 px-4 max-w-6xl lg:m-auto', className)}>
            { children }
        </section>
    )
}

export default Section;