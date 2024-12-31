import React from "react";
import BentoCard from "../bento-card/BentoCard";
import Pill from "../pill/Pill";
import { ReactTyped } from "react-typed";

interface ProfileCardProps {
  name: string;
}

const POSITIONS = [
  "Front-end Engineer",
  "Web-Designer",
  "Javascript Developer",
];

const ProfileCard: React.FC<ProfileCardProps> = ({ name }) => {
  return (
    <BentoCard>
      <div className="grid grid-flow-col grid-cols-3 gap-2">
        <div className="col-span-1">
          <img src="src/assets/images/pedro.png" width={80} height={80} />
        </div>
        <div className="col-span-1">
          <Pill isAvaliable title={"Avaliable To Work"} />
          <p className={"text-xl font-bold text-gray-900 dark:text-white"}>
            {name}
          </p>
          <div className="flex flex-row gap-1">
            <p className="text-gray-900 dark:text-white">I am a</p>
            <ReactTyped
              strings={[
                "Front-end Engineer",
                "Web-Designer",
                "Javascript Developer",
              ]}
              typeSpeed={50}
              loop
              style={{ color: "#302b4b", width: "200px" }}
            />
          </div>
        </div>
        <div className="col-span-1">
          <p className="text-xl text-gray-900 dark:text-white text-end">
            Resume Button
          </p>
        </div>
      </div>
    </BentoCard>
  );
};

export default ProfileCard;
