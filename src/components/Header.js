import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { headerConfig } from "../utility/config";

const Header = () => {
  const { repo, functionalities, routes } = headerConfig;
  const [dropDown, setShowDropDown] = useState(true);
  return (
    <header className="fixed z-50 top-0 p-4 px-4 pb-0 md:px-8 left-0 w-screen flex flex-col bg-backgroundSecondary">
      {/* Desktop */}
      <section className="w-full items-center justify-between hidden md:flex">
        <div className="flex gap-2 items-center">
          <p className="text-slate-600 text-lg">{repo?.avatar}</p>
          <p className="text-lg text-blue-500">
            {repo?.title} <span className="text-slate-600">/</span>{" "}
            {repo?.subRepo}
          </p>
          <span className="border-solid border rounded-3xl px-2 p-1 text-xs text-slate-500 mb-1">
            {repo?.type}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {functionalities?.map((item, idx) =>
            item?.type === "isFunction" ? (
              <div
                key={idx}
                className="flex items-center gap-1 border  rounded-lg p-1 px-2"
              >
                <span className="text-xs text-slate-500">{item?.avatar}</span>
                <p className="text-xs text-slate-500">{item?.title}</p>
              </div>
            ) : item?.type === "isClicked" ? (
              <div
                key={idx}
                className="flex items-center overflow-hidden border rounded-lg "
              >
                <div className="flex gap-1 items-center border-r p-1 px-3">
                  <span className="text-xs text-slate-500">{item?.avatar}</span>
                  <p className="text-xs text-slate-500">{item?.title}</p>
                </div>
                <div className="w-[50%] bg-white text-xs text-slate-500 p-1 px-2">
                  {item?.value}
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>
      <section className="hidden md:flex gap-2 items-center overflow-x-scroll sm:overflow-hidden md:gap-1">
        {routes?.map((item, idx) =>
          item?.type === "Active" ? (
            <div
              key={idx}
              className="text-md text-slate-500 flex gap-2 items-center p-3 border-b-[3px]"
              style={{ paddingLeft: 0, borderColor: "#f79d88" }}
            >
              <span className="text-lg">{item?.avatar}</span>
              <span>{item?.title}</span>
            </div>
          ) : (
            <div
              key={idx}
              className="text-md text-slate-500 flex gap-2 items-center p-3 cursor-pointer"
              style={{ paddingLeft: 0 }}
            >
              <span className="text-lg">{item?.avatar}</span>
              <span>{item?.title}</span>
            </div>
          )
        )}
      </section>
      {/* Mobile */}
      <section className="flex md:hidden flex-col gap-2">
        <div className="flex gap-1 items-center text-base text-slate-500">
          <span>{repo?.avatar}</span>
          <p className="text-blue-500">
            {repo?.title} <span className="text-black">/</span> {repo?.subRepo}
          </p>
          <span className="text-xs border rounded-xl px-1 text-slate-600">
            {repo?.type}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          {functionalities?.map(
            (item, idx) =>
              item?.type === "isClicked" && (
                <div
                  key={idx}
                  className="flex gap-1 text-md text-slate-500 items-center border rounded-lg px-2"
                >
                  <span>{item?.title}</span>
                  <span className="text-[8px] bg-slate-200 px-1 rounded-full">
                    {item?.value}
                  </span>
                </div>
              )
          )}
        </div>
        <div className="flex gap-1 items-center justify-center rounded-lg border-2 text-base text-slate-500 w-[8rem]">
          <span>{functionalities?.[0]?.avatar}</span>
          <p>{functionalities?.[0]?.title}</p>
        </div>
      </section>
      <section className="flex md:hidden flex-wrap items-center justify-between mt-2 gap-2">
        <div className="flex items-center">
          {routes?.map((item, idx) =>
            idx < 3 ? (
              item?.type === "Active" ? (
                <div
                  key={idx}
                  className="flex gap-1 text-xs text-slate-500 items-center p-2 border-b-[3px]"
                  style={{ paddingLeft: 0, borderColor: "#f79d88" }}
                >
                  <span>{item?.avatar}</span>
                  <p>{item?.title}</p>
                </div>
              ) : (
                <div
                  key={idx}
                  className="flex gap-1 text-xs text-slate-500 items-center p-2"
                  style={{ paddingLeft: 0 }}
                >
                  <span>{item?.avatar}</span>
                  <p>{item?.title}</p>
                </div>
              )
            ) : null
          )}
        </div>
        <div className="relative">
          <span
            onClick={() => setShowDropDown(!dropDown)}
            className="text-xs text-slate-500"
          >
            <BsThreeDots />
          </span>
          {!dropDown ? (
            <div className="absolute top-7 right-1 bg-white rounded-md p-1 w-28 border">
              {routes?.map((item, idx) =>
                idx >= 3 ? (
                  <p
                    key={idx}
                    className="text-xs text-slate-500 p-1 cursor-pointer"
                  >
                    {item?.title}
                  </p>
                ) : null
              )}
            </div>
          ) : null}
        </div>
      </section>
    </header>
  );
};

export default Header;
