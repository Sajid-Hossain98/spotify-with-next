"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal
        title="Modal Test"
        description="To test the modal"
        onChange={() => {}}
        isOpen
      >
        Testing
      </Modal>
    </>
  );
};

export default ModalProvider;
