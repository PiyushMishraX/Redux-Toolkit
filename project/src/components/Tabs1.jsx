import React from "react";

const Tabs1 = () => {
  const tabs = ["photos", "Videos", "GIF"];
  return (
    <div className="flex gap-5 p-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className="bg-emerald-600 px-5 py-2 rounded uppercase cursor-pointer active:scale-95 "
            key={idx}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs1;
