


function AccountSummaryTab() {
  return (
    <div>
      <div className="card-body p-0">
        <div className="table-responsive active-projects style-1">
          <div className="tbl-caption">
            <h4 className="heading mb-0">Summary</h4>
          </div>
          <div className="dataTables_wrapper no-footer">
            <table className="table dataTable no-footer" role="grid">
              <thead>
                <tr role="row">
                  <th>Date</th>
                  <th>No</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Disc.</th>
                  <th>Amount</th>
                  <th>Branch</th>
                  <th>Voucher</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row">
                  <td>01/04/2024</td>
                  <td>Opening</td>
                  <td></td>
                  <td></td>
                  <td>0.00</td>
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
  );
}

export default AccountSummaryTab;
