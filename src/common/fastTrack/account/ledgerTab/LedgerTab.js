function LedgerTab() {
  return (
    <div>
      <div className="card-body p-0">
        <div className="table-responsive active-projects style-1">
          <div className="tbl-caption">
            <h4 className="heading mb-0">Ledger</h4>
          </div>
          <div className="dataTables_wrapper no-footer">
            <table className="table dataTable no-footer" role="grid">
              <thead>
                <tr role="row">
                  <th>Date</th>
                  <th>Type</th>
                  <th>No</th>
                  <th>Account Name</th>
                  <th>Credit</th>
                  <th>Debit</th>
                  <th>Chq/DD No</th>
                  <th>Chq/DD Date</th>

                  <th>Narration</th>
                  <th>Closing</th>
                  <th>Cl</th>
                  <th>Branch</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row">
                  <td>01/04/2024</td>
                  <td>Opening</td>
                  <td></td>
                  <td></td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>0.00</td>
                  <td>Db</td>
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

export default LedgerTab;
