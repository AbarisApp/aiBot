import { Empty } from 'antd'
import React from 'react'
import { Pagination } from 'react-bootstrap'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function BuySellReport() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Buy Sell",
        title_2: " AIBOT BUY/SELL Reports",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0 p-2">Buy/Sell Report</h4>
                                </div>
                                <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">

                                    <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '50px' }}>#</th>
                                                <th style={{ width: '150px' }}>Amount </th>
                                                <th style={{ width: '150px' }}>Price</th>
                                                <th style={{ width: '150px' }}>Ai Bot</th>
                                                <th style={{ width: '150px' }}>From Wallet </th>
                                                <th style={{ width: '150px' }}>Buy/Sell</th>
                                                <th style={{ width: '150px' }}>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row">
                                                <td colSpan={7}>
                                                    <Empty />
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>

                                    <div className="dataTables_info" role="status" aria-live="polite">
                                        Total {0} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers">
                                        <Pagination
                                        // defaultCurrent={1}
                                        // onChange={onChangeVal}
                                        // total={totalCount}
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

export default BuySellReport
