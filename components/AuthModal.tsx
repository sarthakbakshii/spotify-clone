"use client";

import React, { useEffect } from "react";
import Modal from "./Modal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";

import { toast } from "react-hot-toast";

const AuthModal = () => {
  const supabeseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  useEffect( () =>{
   if(session) {
    router.refresh();
    onClose();
    // toast.success("logged in successfully!")
    
   }
  }, [session,router,onClose])

  const onChange = ( open : boolean) => {
    if(!open){
        onClose()
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      title={"Welcome back"}
      description={"Login to your account"}
    >
      <Auth
        supabaseClient={supabeseClient}
        theme="dark"
        providers={["github"]}
        magicLink
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
