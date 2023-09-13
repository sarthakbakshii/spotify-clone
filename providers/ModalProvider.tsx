"use client";
import React, { useEffect, useState } from "react";

import Modal from "@/components/Modal/Modal";
import AuthModal from "@/components/Modal/AuthModal";
import UploadModal from "@/components/Modal/UploadModal";
import SubscribeModal from "@/components/Modal/SubscribeModal";
import { ProductWithPrice } from "@/types";

interface Props {
  products : ProductWithPrice[]
}
const ModalProvider: React.FC<Props> = ({ products }) => {
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
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;
