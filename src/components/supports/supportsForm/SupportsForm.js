import React from 'react'

function SupportsForm() {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">

                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Add Staking  AIBOT</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-12 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Staking Duration</label>
                                            <select className='form-select'>
                                                <option selected="selected" value="0">SELECT CATEGORY--</option>
                                                <option value="MONTHLY CLOSING">MONTHLY CLOSING</option>
                                                <option value="MT5 ACCOUNT">MT5 ACCOUNT</option>
                                                <option value="WITHDRAWAL">WITHDRAWAL</option>
                                                <option value="COMPOUNDING">COMPOUNDING</option>
                                                <option value="PROFILE">PROFILE</option>
                                                <option value="TLC">TLC</option>
                                                <option value="DEPOSIT">DEPOSIT</option>
                                                <option value="OTHERS">OTHERS</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-12 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Priority</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={""}
                                                name="start_date"
                                            // onChange={handleChange}

                                            />
                                        </div>
                                        <div className="col-xl-12 mb-3">
                                            <label for="exampleFormControlInput1" class="form-label"> Amount Of Stake</label>
                                            <textarea
                                                type="text"
                                                placeholder='Type Message'
                                                className="form-control"
                                                value={""}
                                                name="end_date"
                                            // onChange={handleChange}

                                            />
                                        </div>


                                        <div className="col-xl- 12  mb-3 mt-2">
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

export default SupportsForm
