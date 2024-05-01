const Container = ({ className, children, ...props }) => {
    return (
        <div className={`max-w-screen-xl mx-auto w-full px-4 md:px-0 py-10 ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Container
