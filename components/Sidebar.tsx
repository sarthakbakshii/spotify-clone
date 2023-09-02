"use client";
import React, { useMemo } from "react";

import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import { Song } from "@/types";
import useOnPlay from "@/hooks/useOnPlay";
import usePlayer from "@/hooks/usePlayer";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { twMerge } from "tailwind-merge";



interface sidebarProps {
  children: React.ReactNode;
  songs: Song[]
}
const Sidebar: React.FC<sidebarProps> = ({ children, songs }) => {
  const pathName = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathName !== "/search",
        href: "/",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathName === "/search",
        href: "/search",
        icon: BiSearch,
      },
    ],
    [pathName]
  );

  const player = usePlayer()

  return (
    <div className={twMerge(`flex h-full`, player.activeId && "h-[calc(100%-80px)]" )}>
      <div className="hidden md:flex flex-col gap-y-2 bgblack h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gay-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
