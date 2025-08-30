export const Sidebar = (props) => {
  const { children } = props;
  return <div className="min-w-65 min-h-screen bg-white">{children}</div>;
};

export const SidebarHeader = (props) => {
  const { children } = props;
  return <div className="min-h-18 p-2 flex items-center">{children}</div>;
};

export const SidebarFooter = (props) => {
  const { children } = props;
  return <div className="shadow-md min-h-18 p-2">{children}</div>;
};

export const SidebarContent = (props) => {
    const {children} = props
    return <div className="min-w-full p-4">{children}</div>
}

export const SidebarItem = (props) => {
    const {children, href, className} = props
    return (
      <a
        href={href}
        className={`p-2 rounded-md flex items-center gap-2 font-poppins text-neutral-400 hover:bg-blue-500 hover:text-white ${className}`}
      >
        {children}
      </a>
    );
}
