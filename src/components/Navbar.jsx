export const Navbar = (props) => {
    const {children, className} = props
    return (
      <div
        className={`shadow-md h-18 flex items-center justify-between 
        bg-white px-4 py-2 
        fixed top-0 z-30 
        w-full md:static md:w-auto md:flex-1 ${className}`}
      >
        {children}
      </div>
    );
} 