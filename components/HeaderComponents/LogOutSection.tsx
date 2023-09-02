import React from "react";
import { FaUserAlt } from "react-icons/fa";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";

const LogOutSection = () => {
  const router = useRouter();

  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // reset any playing songs

    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("logged out!");
    }
  };

  return (
    <div className="flex gap-x-4 items-center">
      <Button onClick={handleLogout} className="bg-white px-6 py-2 w-fit">
        Log out
      </Button>
      <Button
        onClick={() => router.push("/account")}
        className="bg-white w-fit"
      >
        <FaUserAlt />
      </Button>
    </div>
  );
};

export default LogOutSection;
