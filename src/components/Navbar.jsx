export const Navbar = (props) => {
    const {children} = props
    return(
        <div className="shadow-md max-h-18 flex justify-between bg-white w-screen p-3">
            {children}
        </div>
    )
} 