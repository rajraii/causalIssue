import React, { useState } from "react";
import { BiComment } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { VscIssues } from "react-icons/vsc";
import { tableConfig } from "../utility/config";

const Table = ({ data, loading }) => {
  const { statistics, accessibilty } = tableConfig;
  const [showAccessibilty, setShowAccessibilty] = useState(false);
  function get_time_diff(date) {
    let datetime = new Date(date).getTime();
    var now = new Date().getTime();

    if (isNaN(datetime)) {
      return "";
    }
    let milisec_diff;
    if (datetime < now) {
      milisec_diff = now - datetime;
    } else {
      milisec_diff = datetime - now;
    }

    var date_diff = new Date(milisec_diff);

    if (date_diff.getHours() === 1) return date_diff.getHours() + " Day";
    if (date_diff.getHours() > 0) return date_diff.getHours() + " Days";
    if (date_diff.getMinutes() > 0) return date_diff.getMinutes() + " Minutes";

    return date_diff.getSeconds() + " Seconds";
  }
  return (
    <div className="rounded-md md:border w-full  md:w-[99%]">
      <section className="border-b p-3 flex justify-between items-center bg-slate-100">
        <div className="flex text-md text-slate-500 gap-2">
          {statistics?.map((item, idx) =>
            item?.type === "Open" ? (
              <div
                key={idx}
                className="flex text-black font-medium gap-1 items-center"
              >
                <span>{item?.avatar}</span>
                <p>{item?.title}</p>
              </div>
            ) : (
              <div key={idx} className="flex gap-1 items-center">
                <span>{item?.avatar}</span>
                <p>{item?.title}</p>
              </div>
            )
          )}
        </div>

        <div className="hidden md:flex gap-2 items-center">
          {accessibilty?.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 text-slate-500 text-md"
            >
              <p>{item?.title}</p>
              <span className="text-xs">{item?.avatar}</span>
            </div>
          ))}
        </div>

        <div className="relative md:hidden">
          <span className="text-xs text-slate-500">
            <BsThreeDots
              onClick={() => setShowAccessibilty(!showAccessibilty)}
            />
          </span>
          {showAccessibilty ? (
            <div className="absolute border bg-white z-50  -right-1 top-8 rounded-md p-1">
              {accessibilty?.map((item, idx) => (
                <div key={idx} className="text-xs text-slate-500 p-1">
                  {item?.title}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <section>
        {loading ? (
          <div className="flex justify-center items-center h-[8rem]">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          data?.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 text-xs relative"
            >
              <div className="w-[80%] md:w-[70%] flex gap-3">
                <span className="text-green-500 text-base">
                  <VscIssues />
                </span>
                <div>
                  <h3 className="break-all font-semibold">{item?.title}</h3>
                  <p>
                    #{item?.number} opened {get_time_diff(item?.created_at)}
                  </p>
                </div>
              </div>
              <div className="flex  md:w-[30%] gap-3 justify-end">
                <img
                  src={item?.user?.avatar_url}
                  className="h-5 w-5 rounded-full"
                  alt=""
                />
                <div className=" right-4 flex gap-1 items-center float-right">
                  <span>
                    <BiComment />
                  </span>
                  {item?.comments > 0 && item?.comments}
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Table;
