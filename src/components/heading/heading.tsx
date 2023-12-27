import { cn } from "@/utils/utils"

const Heading = ({children, className, id} : {className?: string, children?: React.ReactElement | string, id?: string }) => {
    return (
        <h2 id={id} className={cn("my-4 text-2xl font-bold mt", className)}>{children}</h2>
    )
}

export default Heading;