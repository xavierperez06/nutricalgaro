"use client";

import Button from "../Button";

const OpenModalButton = ({ modalId, variant, children }) => {
  return (
    <Button
      onClick={() => document.getElementById(modalId).showModal()}
      variant={variant}
      className="cursor-pointer"
    >
      {children}
    </Button>
  );
};

export default OpenModalButton;
