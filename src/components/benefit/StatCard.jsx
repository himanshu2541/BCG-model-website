import React from "react";

function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-semibold text-primary">
        {value}
      </div>
      <div className="text-sm text-body/60 uppercase tracking-wide font-bold">
        {label}
      </div>
    </div>
  );
}

export default StatCard;