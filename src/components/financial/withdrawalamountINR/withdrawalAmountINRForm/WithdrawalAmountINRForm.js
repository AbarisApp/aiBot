import React from 'react'

function WithdrawalINRForm() {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Add New Bank Details to Receive Profits
                                    </h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">A/c holder Name
                                            </label>
                                            <input
                                                type="Note"
                                                className="form-control"
                                                value={""}
                                                name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Select Bank</label>
                                            <select className='form-select'>
                                                <option>Select Bank</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">IFSC</label>
                                            <input
                                                type="Note"
                                                className="form-control"
                                                value={""}
                                                name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">A/c Number
                                            </label>
                                            <input
                                                type="Note"
                                                className="form-control"
                                                value={""}
                                                name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">PAN NO
                                            </label>
                                            <input
                                                type="Note"
                                                className="form-control"
                                                value={""}
                                                name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3 mt-2">
                                            <label for="exampleFormControlInput1" class="form-label">One Time Password</label>
                                            <div className="d-flex align-items-center">
                                                <input
                                                    type="text"
                                                    className="form-control border-0"
                                                    placeholder="Enter One Time Password"
                                                />
                                                <button className="btn btn-sm btn-warning text-white fw-bold rounded-0 rounded-end">
                                                    Send OTP
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3 mt-2">
                                            <div className="form-check mt-2">
                                                <input
                                                    className="form-check-input form-check-lg border border-primary"
                                                    type="checkbox"
                                                    id="checkboxTLC"
                                                    style={{ width: '20px', height: '20px' }} // Optional custom size
                                                />
                                                <label className="form-check-label ms-2" htmlFor="checkboxTLC">
                                                    Check me out
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
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

export default WithdrawalINRForm
