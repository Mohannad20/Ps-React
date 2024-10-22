import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"; // Ensure the path is correct
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, BookAIcon, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 border-b border-e rounded-lg w-fit px-20 flex mx-auto mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary cursor-pointer">Course</span>
          </div>

          {/* Menu Items */}
          <Menubar className="hidden sm:flex bg-gray-200 ">
            <MenubarMenu>
              <MenubarTrigger className='cursor-pointer' >Add a course</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Product 1</MenubarItem>
                <MenubarItem>Product 2</MenubarItem>
                <MenubarItem>Product 3</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className='cursor-pointer'>Update</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Service 1</MenubarItem>
                <MenubarItem>Service 2</MenubarItem>
                <MenubarItem>Service 3</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className='cursor-pointer'>

              dkfj
              </MenubarTrigger>
            {/* <MenubarContent>
              <MenubarItem>kdfj</MenubarItem>
            </MenubarContent> */}
            </MenubarMenu>
            {/* <MenubarMenu>
              <MenubarTrigger>About</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Our Story</MenubarItem>
                <MenubarItem>Team</MenubarItem>
                <MenubarItem>Careers</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Contact</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Support</MenubarItem>
                <MenubarItem>Sales</MenubarItem>
                <MenubarItem>Partnership</MenubarItem>
              </MenubarContent>
            </MenubarMenu> */}
          </Menubar>

          {/* User Profile */}
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <span className="sr-only">View notifications</span>
              <BookAIcon className="h-6 w-6 text-black" aria-hidden="true" />
            </button>
            <div className="ml-3 relative">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='cursor-pointer flex '>
                <span className="hidden md:flex ml-2 text-sm font-medium text-gray-700 ">Admin</span>
                <ChevronDown className="ml-1 h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}