import React from "react";

interface PillProps {
  title?: string;
  icon?: string;
  isAvaliable: boolean;
}

const Pill: React.FC<PillProps> = ({ title, icon, isAvaliable }) => {
  return (
    <div className="rounded-full border border-gray-700 bg-black/30 backdrop-blur-lg h-8 max-w-44">
      <div className="flex flex-row mt-0.5">
        <div className="flex px-2">
          {isAvaliable ? (
            <div className="flex h-4 w-1 mt-[9px]">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </div>
          ) : (
            <img
              className="motion-safe:animate-pulsate"
              src={
                icon
                  ? icon
                  : "https://framerusercontent.com/images/oT8R3yT3QObEqWbS7g0bAjsEjk.svg"
              }
            />
          )}
        </div>
        <p className="text-base text-gray-900 dark:text-white ml-1">{title}</p>
      </div>
    </div>
  );
};

export default Pill;
