"use client";

import React from "react";
import Modal from "./Modal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthModal = () => {
  const supabeseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  return (
    <Modal
      isOpen
      onChange={() => {}}
      title={"Welcome back"}
      description={"Login to your account"}
    >
      <Auth
        supabaseClient={supabeseClient}
        appearance={{
          theme: ThemeSupa,
          variables : {
            default : {
                colors : {
                    brand: '#404040',
                    brandAccent: '#22c55e'
                }
            }
          }
        }}

      />
    </Modal>
  );
};

export default AuthModal;
