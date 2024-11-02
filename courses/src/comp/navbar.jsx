import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, BookAIcon, ChevronDown, Moon, SunDim } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../redux/courseSlice";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const mode = useSelector((state) => state.courses.mode);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className={mode ? "" : "dark"}>
      <nav
        className={` bg-background text-primary border-primary border-2 rounded-lg w-fit px-20 flex mx-auto `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-10">
            <div className="flex-shrink-0 ">
              <Link to="/">
                <span className="text-2xl font-bold text-primary cursor-pointer">
                  CourseApp
                </span>
              </Link>
            </div>

            <Menubar className="hidden sm:flex bg-background ">
              <MenubarMenu>
                <Link to="/addForm">
                  <MenubarTrigger className="cursor-pointer">
                    Add a course
                  </MenubarTrigger>
                </Link>
              </MenubarMenu>
            </Menubar>

            <div className="flex items-center">
              {isLogged && (
                <div className="ml-3 relative">
                  <div className="flex items-center hover:bg-secondary p-1 rounded">
                    <Avatar>
                      <AvatarImage
                        src="https://wallpapers.com/images/featured/goku-background-vhm3f71ddueli0kl.jpg"
                        alt="photo"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="cursor-pointer flex items-center">
                      <span className="hidden md:flex mx-2 text-sm font-medium text-primary">
                        {user.username}
                      </span>
                      <ChevronDown
                        className="ml-1 h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* <Button className='mx-3 bg-background text-primary '>
              <Bell className="h-6 w-6 " aria-hidden="true" />
            </Button> */}
              <Button
                onClick={() => dispatch(toggleMode())}
                className="mx-3 bg-background text-primary hover:bg-secondary"
              >
                {mode ? (
                  <Moon className="h-6 w-6 " aria-hidden="true" />
                ) : (
                  <SunDim className="h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
