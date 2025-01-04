import React from 'react'

function BuyTLCForm() {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Buy AIBOT</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3 mt-2">
                                            <label for="exampleFormControlInput1" class="form-label">Select Wallet-- <span style={{ color: 'red' }}>*</span></label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select Wallet---</option>
                                                <option value={1}>AI BOT Income Wallet</option>
                                                <option value={1}>AI BOT Package Wallet</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3 mt-2">
                                            <label for="exampleFormControlInput1" class="form-label">Amount (RS)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Transfer To(User ID)'
                                            // value={filterInitial?.end_date}
                                            // name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3 mt-2">
                                            <label for="exampleFormControlInput1" class="form-label">Aibot</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Amount to be Transfer '
                                            // value={filterInitial?.end_date}
                                            // name="end_date"
                                            // onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3 mt-2">
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
                                            <button type="button" className="btn btn-primary">
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

export default BuyTLCForm
