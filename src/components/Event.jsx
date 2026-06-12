import React from "react";
import { FaLocationDot, FaPerson } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

const Event = ({ name, start, end, location, speaker }) => {
  const formatDate = (isoStr) => {
    if (!isoStr) return "";
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
      .format(new Date(isoStr))
      .replace(" at ", ", ");
  };

  const getDuration = (startIso, endIso) => {
    if (!startIso || !endIso) return "";
    const diffInHours = Math.round(
      (new Date(endIso) - new Date(startIso)) / 3600000,
    );
    return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""}`;
  };

  return (
    <li className="w-full max-w-75 border border-orange-300 bg-orange-200 rounded-sm px-4 py-2 space-y-2">
      <h3 className="text-base font-semibold">{name}</h3>
      <ol>
        <li className="flex items-center gap-1"><FaLocationDot />{location}</li>
        <li className="flex items-center gap-1"><FaPerson />{speaker}</li>
        <li className="flex items-center gap-1"><FaCalendarAlt />{formatDate(start)}</li>
        <li className="flex items-center gap-1"><IoIosTime />{getDuration(start, end)}</li>
      </ol>
    </li>
  );
};

export default Event;
