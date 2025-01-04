import React from 'react'

function InvestmentRobotForm() {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Add Investment Reports</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">User ID</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={""}
                                                name="start_date"
                                            // onChange={handleChange}

                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Investment Amount</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={""}
                                                name="end_date"
                                            // onChange={handleChange}

                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Enter MTS Account No</label>
                                            <input
                                                type="Note"
                                                className="form-control"
                                                value={""}
                                                name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Trading Type</label>
                                            <select className='form-select'>
                                                <option>Trading Type Select</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">OTP</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={""}
                                                name="end_date"
                                            // onChange={handleChange}

                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Remarks</label>
                                            <input
                                                type="Note"
                                                className="form-control"
                                                value={""}
                                                name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-4">
                                            <button type="button" className="btn btn-primary mt-5">
                                                Submit
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

export default InvestmentRobotForm
