import React from "react";

function ProductHistory() {
  return (
    <div>
      <div className="card-body p-0">
        <div className="table-responsive active-projects style-1">
          <div className="tbl-caption">
            <h4 className="heading mb-0">History</h4>
          </div>
          <div className="dataTables_wrapper no-footer">
            <table className="table dataTable no-footer" role="grid">
              <thead>
                <tr role="row">
                  <th></th>
                  <th> Account Name</th>
                  <th>No</th>
                  <th>Date</th>
                  <th>Batch No</th>
                  <th>Type</th>
                  <th>In Qty</th>
                  <th>Out Qty</th>
                  <th>Rate</th>
                  <th>Tax Rate</th>
                  <th>Cost Rate</th>
                  <th>Amount</th>
                  <th>Doc No</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row">
                  <td colSpan={14} className="text-center">
                    <span>No Records Available</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductHistory;
