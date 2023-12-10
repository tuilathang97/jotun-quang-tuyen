const Section = ({children} : {children: React.ReactElement | React.ReactElement[]}) => {
    return(
        <section className='mt-4 md:mt-8 px-4 md:px-8 max-w-6xl lg:m-auto'>
            { children }
        </section>
    )
}

export default Section;