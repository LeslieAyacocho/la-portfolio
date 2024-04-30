const Container = ({ className, children, ...props }) => {
    return (
        <div className={`max-w-screen-xl mx-auto w-full, ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Container
