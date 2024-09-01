"use client"

import {
    IconX,
    IconTrendingUp,
    IconUserStar,
    IconBriefcase2,
  } from "@tabler/icons-react";
  import { motion } from "framer-motion";
  import NavigationLink from "./NavigationLink";
  
  const variants = {
    close: {
      x: -300,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 100,
    },
  };
  
  interface Props {
    selectedLink: string;
    isOpen: boolean;
    setSelectedLink: (project: string | null) => void;
  }
  
  const SubSidebarNavigation = ({
    selectedLink,
    isOpen,
    setSelectedLink,
  }: Props) => {
    return (
      <motion.nav
        variants={variants}
        initial="close"
        animate="open"
        exit="close"
        transition={{
          duration: 0.25,
          ease: "easeInOut",
          type: "spring",
        }}
        className={`h-full flex bg-background flex-col gap-8 w-64 absolute z-40 ml-0 ${
          isOpen ? "left-64" : "left-20"
        } border-r border-neutral-800 p-5`}
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <h1 className="tracking-wide text-lg">{selectedLink}</h1>
          <button onClick={() => setSelectedLink(null)}>
            <IconX className="w-8" />
          </button>
        </div>
        <input
          placeholder="Search"
          type="text"
          className="px-3 py-2 tracking-wide rounded-lg bg-muted"
        />
        <div className="flex flex-col gap-3">
          <NavigationLink name="Admin">
            <IconUserStar className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>

            <NavigationLink name="Employees">
              <IconBriefcase2 className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
            </NavigationLink>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="tracking-wide text-neutral-300">Team Members</h1>
          <a href="#" className="flex flex-row gap-3 place-items-center">
            <IconTrendingUp className="w-8 p-1 rounded-full stroke-2 stroke-rose-800 bg-rose-200/70" />
            <p className="tracking-wide text-neutral-400">Steve Jobs</p>
          </a>
          <a href="#" className="flex flex-row gap-3 place-items-center">
            <IconTrendingUp className="w-8 p-1 rounded-full stroke-2 stroke-emerald-800 bg-emerald-200/70" />
            <p className="tracking-wide text-neutral-400">Bill Gates</p>
          </a>
          <a href="#" className="flex flex-row gap-3 place-items-center">
            <IconTrendingUp className="w-8 p-1 rounded-full stroke-2 stroke-indigo-800 bg-indigo-200/70" />
            <p className="tracking-wide text-neutral-400">Jeff Bezos</p>
          </a>
        </div>
      </motion.nav>
    );
  };
  
  export default SubSidebarNavigation;
  