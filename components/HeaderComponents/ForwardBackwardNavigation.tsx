
import React from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";

const ForwardBackwardNavigation = () => {
  const router = useRouter();

  return (
    <div className="hidden md:flex gap-x-2 items-center">
      <button
        onClick={() => router.back()}
        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
      >
        <RxCaretLeft className="text-white" size={35} />
      </button>
      <button
        onClick={() => router.back()}
        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
      >
        <RxCaretRight className="text-white" size={35} />
      </button>
    </div>
  );
};

export default ForwardBackwardNavigation;
