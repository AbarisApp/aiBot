

const IncomeSummaryFillter = () => {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Filter Income
                                             </h4>
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
                                    <div className="col-xl-4 mb-3 mt-2">
                                        <label for="exampleFormControlInput1" class="form-label">Select Income-- <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected="selected" value="All Income">All Income</option>
                                            <option value="Level Income">Level Income</option>
                                            <option value="Matching Income">Matching Income</option>
                                            <option value="Staking Matching Income">Staking Matching Income</option>
                                            <option value="Staking Income">Staking Income</option><option value="IB Income">IB Income</option>
                                            <option value="Achievement Income">Achievement Income</option>
                                            <option value="Trading Income">Trading Income</option>
                                            <option value="Compounding Bonus">Compounding Bonus</option>
                                            <option value="Trading Profit Income">Trading Profit Income</option>
                                            <option value="Reward Income">Reward Income</option>
                                            <option value="Club Income">Club Income</option>

                                        </select>
                                    </div>

                                    <div className="col-xl-4 text-center">
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

export default IncomeSummaryFillter