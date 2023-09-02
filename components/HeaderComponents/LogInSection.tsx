import React from 'react'
import Button from '../Button';

import useAuthModal from "@/hooks/useAuthModal";

const LogInSection = () => {
    const authModal = useAuthModal();

  return (
    <>
      <div>
        <Button
          className="bg-transparent text-neutral-300 font-medium"
          onClick={authModal.onOpen}
        >
          Sign Up
        </Button>
      </div>
      <div>
        <Button className="bg-white px-6 py-2" onClick={authModal.onOpen}>
          Log in
        </Button>
      </div>
    </>
  );
}

export default LogInSection