

const TransfertoPackageWallet = () => {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Transfer Fund</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="wallet-card">
                                            <div className="wallet-title">Income Wallet Balance</div>
                                            <div className="wallet-balance">$0</div>
                                            <div className="bar-chart">
                                                <div className="bar" />
                                                <div className="bar" />
                                                <div className="bar" />
                                                <div className="bar" />
                                                <div className="bar" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="wallet-card">
                                            <div className="wallet-title">Package Wallet Balance</div>
                                            <div className="wallet-balance">$0</div>
                                            <div className="bar-chart">
                                                <div className="bar" />
                                                <div className="bar" />
                                                <div className="bar" />
                                                <div className="bar" />
                                                <div className="bar" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="wallet-card">
                                            <div className="wallet-title">TLC Income Wallet Balance</div>
                                            <div className="wallet-balance">$0</div>
                                            <div className="bar-chart">
                                                <div className="bar" />
                                                <div className="bar" />
                                                <div className="bar" />
                                                <div className="bar" />
                                                <div className="bar" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="wallet-card">
                                            <div className="wallet-title">TLC Package Wallet Balance</div>
                                            <div className="wallet-balance">$0</div>
                                            <div className="bar-chart">
                                                <div className="bar" />
                                                <div className="bar" />
                                                <div className="bar" />
                                                <div className="bar" />
                                                <div className="bar" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 mb-3 mt-2">
                                        <label for="exampleFormControlInput1" class="form-label">Select Wallet <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Wallet</option>
                                            <option value={1}>Package</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-3 mb-3 mt-2">
                                        <label for="exampleFormControlInput1" class="form-label">Transfer To(User ID)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder='Enter Transfer To(User ID)'
                                        // value={filterInitial?.end_date}
                                        // name="end_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-3 mb-3 mt-2">
                                        <label for="exampleFormControlInput1" class="form-label">Amount to be Transfer </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder='Enter Amount to be Transfer '
                                        // value={filterInitial?.end_date}
                                        // name="end_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-3 mb-3 mt-2">
                                        <label for="exampleFormControlInput1" class="form-label">Remarks </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Amount to be Transfer '
                                        // value={filterInitial?.end_date}
                                        // name="end_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-12 text-center">
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
    )
}

export default TransfertoPackageWallet