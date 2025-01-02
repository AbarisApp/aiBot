import React from "react";
import SerialNumberTabForm from "./SerialNumberTabForm";

function SerialNumber() {
  return (
    <>
      <SerialNumberTabForm />
      <div>
        <div className="card-body p-0">
          <div className="table-responsive active-projects style-1">
            <div className="tbl-caption">
              <h4 className="heading mb-0">Serial Number Stock</h4>
            </div>
            <div className="dataTables_wrapper no-footer">
              <table className="table dataTable no-footer" role="grid">
                <thead>
                  <tr role="row">
                    <th>Product</th>
                    <th>S.No</th>
                  
                    <th>Quantity</th>
                    <th>Used Qty</th>
                    <th>War Start</th>
                    <th>War Month</th>
                    <th>War End</th>
                    <th>Issue To</th>
                    <th>Bill No</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row">
                    <td>0</td>
                    <td></td>
                   
                    <td>0.0000</td>
                    <td>0.0000</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SerialNumber;
