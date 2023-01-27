import React from "react";
import { BsGithub } from "react-icons/bs";
import { footerConfig } from "../utility/config";

const Footer = () => {
  const { routes } = footerConfig;
  return (
    <div className="border flex p-2 flex-col md:flex-row text-xs md:text-base md:gap-3 justify-center items-center">
      <span className="flex md:hidden text-2xl text-slate-700">
        <BsGithub />
      </span>
      <div className="flex gap-1 md:gap-3 items-center">
        {routes?.map(
          (item, idx) =>
            idx < 5 && (
              <div key={idx} className="p-3 text-blue-700">
                {item?.title}
              </div>
            )
        )}
      </div>
      <span className="hidden md:flex text-2xl text-slate-700">
        <BsGithub />
      </span>
      <div className="flex gap-1 md:gap-3 items-center">
        {routes?.map(
          (item, idx) =>
            idx > 5 && (
              <div key={idx} className="p-3 text-blue-700">
                {item?.title}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Footer;
