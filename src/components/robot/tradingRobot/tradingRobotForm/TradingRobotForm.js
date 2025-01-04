import React from 'react'

function TradingRobotForm() {
  return (
    <>
    <div className="row m-4">
        <div className="col-xl-12">

            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Add Trading  Reports</h4>
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

export default TradingRobotForm
