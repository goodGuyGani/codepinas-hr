"use client"

import ThemeSwitcher from "./ThemeSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IconMenu2 } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useScreenSize } from "./providers/ScreenSizeProvider";

const DashboardMainNav = () => {
  const isSmallScreen = useScreenSize();

  return (
    <>
      {!isSmallScreen ? (
        <div className="flex flex-row justify-between">
          <ul className="flex flex-row font-bold text-xl">
            <li>
              <Button className="font-bold text-xl" variant="ghost">
                Overview
              </Button>
            </li>
            <li>
              <Button
                className="font-bold text-xl text-muted-foreground dark:text-muted dark:hover:text-foreground"
                variant="ghost"
              >
                Employees
              </Button>
            </li>
            <li>
              <Button
                className="font-bold text-xl text-muted-foreground dark:text-muted dark:hover:text-foreground"
                variant="ghost"
              >
                Requests
              </Button>
            </li>
            <li>
              <Button
                className="font-bold text-xl text-muted-foreground dark:text-muted dark:hover:text-foreground"
                variant="ghost"
              >
                Settings
              </Button>
            </li>
          </ul>
          <div className="flex flex-row">
            <Input
              className="w-72"
              type="text"
              id="text"
              placeholder="Search..."
            />
            <div className="mx-4">
              <ThemeSwitcher />
            </div>
            <div className="justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="w-8 h-8 cursor-pointer">
                    <AvatarImage
                      className="object-cover"
                      src="https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 mr-5">
                <DropdownMenuLabel>User One</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Overview</DropdownMenuItem>
                  <DropdownMenuItem>Employees</DropdownMenuItem>
                  <DropdownMenuItem>Request</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between w-full items-center">
          <div className="ml-3">
            <Input
              className="w-72"
              type="text"
              id="text"
              placeholder="Search..."
            />
          </div>
          <div className="flex flex-row items-center">
            <div className="mr-3">
              <ThemeSwitcher />
            </div>
            <Avatar className="w-8 h-8 mr-4 cursor-pointer">
              <AvatarImage
                className="object-cover"
                src="https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-0">
                  <IconMenu2 className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Overview</DropdownMenuItem>
                  <DropdownMenuItem>Employees</DropdownMenuItem>
                  <DropdownMenuItem>Request</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardMainNav;
