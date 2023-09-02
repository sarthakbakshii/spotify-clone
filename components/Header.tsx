"use client";
import React from "react";

import { twMerge } from "tailwind-merge";
import { useUser } from "@/hooks/useUser";

import ForwardBackwardNavigation from "./HeaderComponents/ForwardBackwardNavigation";
import HomeAndSearchNavigation from "./HeaderComponents/HomeAndSearchNavigation";
import LogInSection from "./HeaderComponents/LogInSection";
import LogOutSection from "./HeaderComponents/LogOutSection";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const { user } = useUser();

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="flex w-full mb-4 items-center justify-between">
        {/* only for desktop screen */}
        <ForwardBackwardNavigation />

        {/* only for mobile screen */}
        <HomeAndSearchNavigation />

        <div className="flex justify-between items-center gap-x-4">
          {user ? <LogOutSection /> : <LogInSection />}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
