

const AccountStatementFillter = () => {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Filter Account Statement
                                    A               </h4>
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
                                        <label for="exampleFormControlInput1" class="form-label">Select Statement-- <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Select Statement---</option>
                                            <option value={1}>New Statement</option>
                                            <option value={1}>Old Statement</option>
                                        </select>
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

export default AccountStatementFillter