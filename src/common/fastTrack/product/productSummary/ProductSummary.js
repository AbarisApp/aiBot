function ProductSummary() {
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
                  <th></th>
                  <th> Vou No</th>
                  <th>Date</th>
                  <th>Vou Type</th>
                  <th>Sales Qty</th>
                  <th>Purchase Qty</th>
                  <th>Rate</th>
                  <th>Disc.</th>
                  <th>Amount</th>
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

export default ProductSummary;
