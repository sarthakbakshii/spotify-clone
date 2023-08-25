"use client";
import React, { useEffect, useState } from "react";

import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // handling hydration error in modal
  // no running modal in ssr
  // how to check ?
  // if useEffect works, we are on client side

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
