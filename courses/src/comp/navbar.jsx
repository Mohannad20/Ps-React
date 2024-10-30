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
import { Bell, BookAIcon, ChevronDown, Moon, SunDim } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../redux/courseSlice';
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom';


export default function Navbar() {
  const mode = useSelector(state=> state.courses.mode)
  console.log(mode);
  
  const dispatch = useDispatch()

  return (
    <div className={mode ? "" : "dark"}>

      <nav className={` bg-background text-primary border-foreground border rounded-lg w-fit px-20 flex mx-auto `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-10">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <Link  to="/">
            <span className="text-2xl font-bold text-primary cursor-pointer">CourseApp</span>
            </Link>
          </div>

          {/* Menu Items */}
          <Menubar className="hidden sm:flex bg-background ">
            <MenubarMenu>
              <Link to='/addForm'>
              <MenubarTrigger className='cursor-pointer' >Add a course</MenubarTrigger>
              </Link>
              {/* <MenubarContent>
                <MenubarItem>Product 1</MenubarItem>
                <MenubarItem>Product 2</MenubarItem>
                <MenubarItem>Product 3</MenubarItem>
              </MenubarContent> */}
            </MenubarMenu>
            {/* <MenubarMenu>
              <MenubarTrigger className='cursor-pointer'>Update</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Service 1</MenubarItem>
                <MenubarItem>Service 2</MenubarItem>
                <MenubarItem>Service 3</MenubarItem>
              </MenubarContent>
            </MenubarMenu> */}
           
          </Menubar>

          {/* User Profile */}
          <div className="flex items-center">
            <Button className='mx-3 bg-background text-primary hover:bg-secondary'>
              <BookAIcon className="h-6 w-6 " aria-hidden="true" />
            </Button>
            <div className="ml-3 relative">
              <div className="flex items-center hover:bg-secondary p-1 rounded">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='cursor-pointer flex items-center'>
                <span className="hidden md:flex mx-2 text-sm font-medium text-primary">Admin</span>
                <ChevronDown className="ml-1 h-4 w-4 text-primary" aria-hidden="true" />
                </div>
              </div>
            </div>
            {/* <Button className='mx-3 bg-background text-primary '>
              <Bell className="h-6 w-6 " aria-hidden="true" />
            </Button> */}
            <Button onClick={() => dispatch(toggleMode())} className='mx-3 bg-background text-primary hover:bg-secondary'>
              {mode ? 
              <Moon className="h-6 w-6 " aria-hidden="true" />
              :
              <SunDim className="h-6 w-6" aria-hidden="true" />
              }
            </Button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
