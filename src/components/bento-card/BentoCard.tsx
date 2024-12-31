import React, { ReactNode } from "react";

interface BentoCardProps {
  children?: ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = ({ children }) => {
  return (
    <div className="p-7">
      <div className="border-2 rounded-md bg-white/30 backdrop-blur-lg">
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
};

export default BentoCard;
