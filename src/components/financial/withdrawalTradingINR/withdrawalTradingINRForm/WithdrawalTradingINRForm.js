import React from 'react'

function WithdrawalTradingINRForm() {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Add New RS.TRC20 Address to Receive Profits</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">

                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Select Wallet Address</label>
                                            <select className='form-select'>
                                                <option>Select Wallet Address</option>
                                                <option>Teth USD (Tron/TRC20)</option>
                                                <option>Trillion (AIBOT)</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Address</label>
                                            <input
                                                type="Note"
                                                className="form-control"
                                                value={""}
                                                name="end_date"
                                            // onChange={handleChange}
                                            />
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

export default WithdrawalTradingINRForm
