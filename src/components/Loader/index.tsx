"use client";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="box">
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
