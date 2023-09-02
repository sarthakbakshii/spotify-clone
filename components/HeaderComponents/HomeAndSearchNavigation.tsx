import React from "react";
import { useRouter } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

const HomeAndSearchNavigation = () => {
  const router = useRouter();

  return (
    <div className="flex md:hidden gap-x-2 items-center">
      <button
        onClick={() => router.push("/")}
        className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
      >
        <HiHome className="text-black" size={20} />
      </button>
      <button
        onClick={() => router.push("/search")}
        className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
      >
        <BiSearch className="text-black" size={20} />
      </button>
    </div>
  );
};

export default HomeAndSearchNavigation;
