
import React from 'react'

const TransferAIBOTRedeemWalletFilter = () => {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Filter TRANSFER AIBOT 2.0 REDEEM WALLET</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Start Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                        // value={filterInitial?.start_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">End Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                        // value={filterInitial?.end_date}
                                        // name="end_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransferAIBOTRedeemWalletFilter