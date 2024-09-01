"use clinet"

interface Props {
    children: React.ReactNode;
    name: string;
  }
  
  const SidebarLink = ({ children, name }: Props) => {
    return (
      <a href="" className="flex p-1 rounded cursor-pointer hover:stroke-neutral-100 stroke-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-muted transition-colors duration-100">
        {children}
        <p className="text-inherit overflow-clip whitespace-nowrap tracking-wide">
          {name}
        </p>
      </a>
    );
  };
  
  export default SidebarLink;
  