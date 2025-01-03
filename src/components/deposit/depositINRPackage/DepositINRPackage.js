import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"



const DepositINRPackage = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Deposit",
        title_2: "Deposit INR (Package)",
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Add Deposit INR (Package)</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Company Bank Name  </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select Company Bank Name</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Debited A/c Holder Name  </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Debited A/c Holder Name "
                                            // value={filterInitial?.end_date}
                                            // name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Amount($)  </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Amount($) "
                                            // value={filterInitial?.end_date}
                                            // name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">UTR/Reference No.   </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter UTR/Reference No.  "
                                            // value={filterInitial?.end_date}
                                            // name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Payment Mode   </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select Payment Mode </option>
                                                <option value={1}>IMPS</option>
                                                <option value={2}>NEFT</option>
                                                <option value={2}>Cash Deposit By Branch</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Payment Deposit Date </label>
                                            <input
                                                type="date"
                                                className="form-control"

                                            // value={filterInitial?.end_date}
                                            // name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Browse Slip </label>
                                            <input
                                                type="file"
                                                className="form-control"

                                            // value={filterInitial?.end_date}
                                            // name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-xl-12 text-center">
                                            <button type="button" className="btn btn-primary">
                                                Submit Deposit Request
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepositINRPackage