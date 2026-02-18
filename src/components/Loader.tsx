import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <img
        src="/loader.gif"
        alt="Loading..."
        className="w-50 h-60 object-contain"
      />
    </div>
  );
};

export default Loader;
