import { cn } from "@/utils/utils"

const Heading = ({children, className} : {className?: string, children?: React.ReactElement | string }) => {
    return (
        <h2 className={cn("my-4 text-2xl font-bold mt", className)}>{children}</h2>
    )
}

export default Heading;