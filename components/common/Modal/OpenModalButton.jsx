"use client";

import Button from "../Button";

const OpenModalButton = ({ modalId, variant, children }) => {
  return (
    <Button
      onClick={() => document.getElementById(modalId).showModal()}
      variant={variant}
      className="w-full cursor-pointer xl:w-auto"
    >
      {children}
    </Button>
  );
};

export default OpenModalButton;
