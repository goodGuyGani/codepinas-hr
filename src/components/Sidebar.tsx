"use client"

import {
    IconChevronsRight,
    IconLayoutDashboard,
    IconUsers,
    IconUsersGroup,
    IconClockHour8,
    IconCash,
    IconDoorExit,
    IconHourglassEmpty,
    IconReport,
    IconSettings,
  } from "@tabler/icons-react";
  import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
  import { useEffect, useState } from "react";
  import CodePinasLogo from "../../public/assets/CodePinasLogo.png";
  import CodePinas from "../../public/assets/CodePinasSmall.png";
  import SidebarLink from "./SidebarLink";
  import SubSidebarLink from "./SubSidebarLink";
  import SubSidebarNavigation from "./SubSidebarNavigation";
  import { useScreenSize } from "./providers/ScreenSizeProvider";
  
  const containerVariants = {
    close: {
      width: "5rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
    open: {
      width: "18.5rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
  };
  
  interface Props {
    isSidebarOpen: boolean;
    setSidebarOpen: (val: boolean) => void;
  }
  
  const Sidebar = ({ isSidebarOpen, setSidebarOpen }: Props) => {
    const containerControls = useAnimationControls();
    const [selectedLink, setSelectedLink] = useState<string | null>(null);
  
    // const { theme } = useTheme();
    // const [logo, setLogo] = useState(ExampleLogo);
  
    // useEffect(() => {
    //   setLogo(theme === "light" ? ExampleLogo2 : ExampleLogo);
    // }, [theme]);
  
    const isSmallScreen = useScreenSize();
  
    useEffect(() => {
      if(isSmallScreen){
        setSidebarOpen(false)
      }
    })
  
    useEffect(() => {
      if (isSidebarOpen) {
        containerControls.start("open");
      } else {
        containerControls.start("close");
      }
    }, [isSidebarOpen, containerControls]);
  
    const handleOpenClose = () => {
      setSidebarOpen(!isSidebarOpen);
      setSelectedLink(null);
    };
  
    return (
      <>
        <motion.nav
          variants={containerVariants}
          animate={containerControls}
          initial="close"
          className="flex flex-col z-50 p-5 top-0 left-0 h-screen shadow sticky dark:shadow-neutral-600 bg-background shadow-neutral-300"
        >
          <div className="flex flex-row items-center justify-center">
              <img
                className="flex-none object-cover"
                src={isSidebarOpen ? CodePinas.src : CodePinasLogo.src}
                alt="Example Logo"
                style={{
                  maxHeight: "4.5rem",
                  height: isSidebarOpen ? "3.5rem" : "100%",
                }}
              />
          </div>
          {!isSmallScreen && (
            <div className="relative flex items-center justify-center w-8 h-8 mt-12">
            <motion.div
              className="p-1 rounded-full flex border-2 bg-background hover:bg-muted cursor-pointer"
              style={{
                position: "absolute",
                left: isSidebarOpen
                  ? "calc(16rem - 2.3rem)"
                  : "calc(5rem - 2.3rem)",
              }}
              animate={{
                left: isSidebarOpen
                  ? "calc(16rem - 2.3rem)"
                  : "calc(5rem - 2.3rem)",
              }}
              transition={{ type: "spring", damping: 15, duration: 0.5 }}
              onClick={handleOpenClose}
            >
              <motion.div
                animate={{ rotate: isSidebarOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <IconChevronsRight className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
          )}
          <div className="flex flex-col gap-3 mt-10 flex-grow overflow-hidden">
              <SidebarLink name="Dashboard">
                <IconLayoutDashboard className="stroke-foreground min-w-8 w-8" />
              </SidebarLink>
            <SubSidebarLink
              name="Users"
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
            >
              <IconUsers className="stroke-foreground min-w-8 w-8" />
            </SubSidebarLink>
            <SidebarLink name="Departments">
              <IconUsersGroup className="stroke-foreground min-w-8 w-8" />
            </SidebarLink>
              <SidebarLink name="Attendance">
                <IconClockHour8 className="stroke-foreground min-w-8 w-8" />
              </SidebarLink>
            <SidebarLink name="Payroll">
              <IconCash className="stroke-foreground min-w-8 w-8" />
            </SidebarLink>
            <SidebarLink name="Leaves">
              <IconDoorExit className="stroke-foreground min-w-8 w-8" />
            </SidebarLink>
            <SidebarLink name="Overtime">
              <IconHourglassEmpty className="stroke-foreground min-w-8 w-8" />
            </SidebarLink>
            <SidebarLink name="Reports">
              <IconReport className="stroke-foreground min-w-8 w-8" />
            </SidebarLink>
          </div>
  
          <div className="overflow-hidden">
            <SidebarLink name="Settings">
              <IconSettings className="stroke-foreground min-w-8 w-8" />
            </SidebarLink>
          </div>
        </motion.nav>
        <AnimatePresence>
          {selectedLink && (
            <SubSidebarNavigation
              key={selectedLink}
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
              isOpen={isSidebarOpen}
            />
          )}
        </AnimatePresence>
      </>
    );
  };
  
  export default Sidebar;
  