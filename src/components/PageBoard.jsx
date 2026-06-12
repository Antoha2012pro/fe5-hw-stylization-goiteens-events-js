import React from "react";
import Event from "./Event";

const PageBoard = ({ events }) => {
  console.log(events);

  return (
    <ul className="w-full border border-blue-400 bg-blue-300 pt-2 pb-4 px-4 rounded-sm flex flex-wrap justify-between gap-y-10">
      {events.map(({ name, time, location, speaker }, index) => (
        <Event
          key={index}
          name={name}
          start={time.start}
          end={time.end}
          location={location}
          speaker={speaker}
        />
      ))}
    </ul>
  );
};

export default PageBoard;
