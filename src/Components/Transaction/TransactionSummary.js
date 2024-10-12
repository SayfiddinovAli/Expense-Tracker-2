import React from 'react';

const TransactionSummary = () => {
  return (
    <div className="bg-light p-4 rounded shadow mb-4">
      <h2>2019 10</h2>
      <div className="d-flex justify-content-between">
        <div>
          <h5 className="text-success">Inflows: +6000 NT</h5>
          <h5 className="text-danger">Outflows: -70 NT</h5>
        </div>
        <h3>Total: 5930 NT</h3>
      </div>
    </div>
  );
};

export default TransactionSummary;
