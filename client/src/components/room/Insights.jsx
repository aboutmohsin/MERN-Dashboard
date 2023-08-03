import React from "react";

const Insights = () => {
  return (
    <>
      <div className="insights">
        <div className="sales">
          <span className="material-symbols-sharp">monitoring</span>
          <div className="middle">
            <div className="left">
              <h3>Total Sales</h3>
              <h1>$25,024</h1>
            </div>
          </div>
          <small className="text-muted"> Last 24 Hours</small>
        </div>
        <div className="expenses">
          <span className="material-symbols-sharp">bar_chart</span>
          <div className="middle">
            <div className="left">
              <h3>Total Expense</h3>
              <h1>$25,024</h1>
            </div>
          </div>
          <small className="text-muted"> Last 24 Hours</small>
        </div>
        <div className="income">
          <span className="material-symbols-sharp">signal_cellular_alt</span>
          <div className="middle">
            <div className="left">
              <h3>Total Income</h3>
              <h1>$23,024</h1>
            </div>
          </div>
          <small className="text-muted"> Last 24 Hours</small>
        </div>
      </div>
    </>
  );
};

export default Insights;
