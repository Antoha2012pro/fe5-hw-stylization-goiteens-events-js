import React from "react";
import "./App.css";
import PageBoard from "./components/PageBoard";
import uncomingEvents from "./upcoming-events.json";

const App = () => {
  return (
    <div className="w-full space-y-4 px-4 py-8">
      <h2 className="w-full border border-blue-500 bg-blue-300 text-2xl text-center py-1 rounded-sm">
        24th Core Worlds Coalition Conference
      </h2>
      <PageBoard events={uncomingEvents} />
    </div>
  );
};

export default App;
