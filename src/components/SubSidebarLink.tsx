"use client"

import { IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  name: string;
  selectedLink: string | null;
  setSelectedLink: (val: string | null) => void;
}

const SubSidebarLink = ({
  children,
  name,
  selectedLink,
  setSelectedLink,
}: Props) => {
  const handleClick = () => {
    if (selectedLink === name) {
      setSelectedLink(null); // Close if the same link is clicked again
    } else {
      setSelectedLink(null); // Reset the selected link
      setTimeout(() => {
        setSelectedLink(name); // Set the new selected link
      }, 250);
    }
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-muted transition-colors duration-100"
    >
      {children}
      <div className="flex overflow-clip place-items-center justify-between w-full">
        <p className="text-inherit truncate whitespace-nowrap tracking-wide">
          {name}
        </p>
        <motion.div
          animate={{ rotate: selectedLink === name ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IconChevronRight className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </motion.div>
      </div>
    </a>
  );
};

export default SubSidebarLink;
