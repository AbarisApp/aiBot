import { Pagination } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { Link } from "react-router-dom";
import TransferAIBOTRedeemWalletFilter from "./transferAIBOTRedeemWalletFilter/TransferAIBOTRedeemWalletFilter";



const TransferAIBOTRedeemWallet = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transfer",
        title_2: "Transfer AIBOT 2.0 Redeem Wallet",
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <TransferAIBOTRedeemWalletFilter />
            <div className="row m-4">
                {/* {loading && <Loadar />} */}
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Transfer AIBOT 2.0 Redeem Wallet</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/transfer-fund-AIBOT-redeemable-add" role="button" aria-controls="offcanvasExample">+ Transfer Gift AIBOT Redeem Wallet</Link>
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                        </button>
                                    </div>
                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '50px' }}>S.NO</th>
                                                <th style={{ width: '150px' }}>AIBOT</th>
                                                <th style={{ width: '150px' }}>Price</th>
                                                <th style={{ width: '150px' }}>Amount</th>
                                                <th style={{ width: '150px' }}>Particular</th>
                                                <th style={{ width: '200px' }}>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd" key={''}>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                {/* <td>
                                                    <div className="d-flex">
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                            <i className="fa fa-pencil" />
                                                        </Link>
                                                        <Popconfirm
                                                            title="Delete Blog"
                                                            description="Are you sure to delete?"
                                                            // onConfirm={() => confirm(item?._id)}
                                                            // onCancel={cancel}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                <i className="fa fa-trash" />
                                                            </Link>
                                                        </Popconfirm>
                                                    </div>
                                                </td> */}
                                            </tr>

                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {0} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                        // defaultCurrent={1}
                                        // onChange={onChangeVal}
                                        // total={data?.totalCount}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransferAIBOTRedeemWallet