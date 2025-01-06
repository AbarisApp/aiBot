import { Pagination } from 'antd'
import React from 'react'

function RewardsList() {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0 p-2">Rewards </h4>
                                </div>
                                <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">

                                    <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '50px' }}>#</th>
                                                <th style={{ width: '150px' }}>Rank</th>
                                                <th style={{ width: '150px' }}>Bot Matching</th>
                                                <th style={{ width: '150px' }}>Reward</th>
                                                <th style={{ width: '150px' }}>Status</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="selected odd" role="row">
                                                <input type="hidden"   value="1" />
                                                <td class="sorting_1">1</td>
                                                <td>MANAGER</td>
                                                <td>25</td>
                                                <td>$100<br/>
                                                    Fund</td>

                                                <td>

                                                    <span class="badge badge-danger">Not-Achieve</span>
                                                </td>
                                            </tr><tr class="selected even" role="row">
                                                <input type="hidden"   value="2" />
                                                <td class="sorting_1">2</td>
                                                <td>SR.
                                                    MANAGER</td>
                                                <td>50</td>
                                                <td>$300<br/>
                                                    Android Mobile</td>

                                                <td>

                                                    <span class="badge badge-danger">Not-Achieve</span>
                                                </td>
                                            </tr><tr class="selected odd" role="row">
                                                <input type="hidden"   value="3" />
                                                <td class="sorting_1">3</td>
                                                <td>ZONAL
                                                    MANAGER</td>
                                                <td>100</td>
                                                <td>$500<br/>
                                                    Apple I-Pad</td>

                                                <td>

                                                    <span class="badge badge-danger">Not-Achieve</span>
                                                </td>
                                            </tr><tr class="selected even" role="row">
                                                <input type="hidden"   value="4" />
                                                <td class="sorting_1">4</td>
                                                <td>EAGLE
                                                    EXECUTIVE</td>
                                                <td>500</td>
                                                <td>$3000<br/>
                                                    Mackbook Pro &amp; I-Phone</td>

                                                <td>

                                                    <span class="badge badge-danger">Not-Achieve</span>
                                                </td>
                                            </tr><tr class="selected odd" role="row">
                                                <input type="hidden"   value="5" />
                                                <td class="sorting_1">5</td>
                                                <td>DOUBLE
                                                    EAGLE
                                                    EXECUTIVE</td>
                                                <td>1000</td>
                                                <td>$5000<br/>
                                                    Gold Fund</td>

                                                <td>

                                                    <span class="badge badge-danger">Not-Achieve</span>
                                                </td>
                                            </tr><tr class="selected even" role="row">
                                                <input type="hidden"   value="6" />
                                                <td class="sorting_1">6</td>
                                                <td>SAPPHIRE

                                                    EXECUTIVE</td>
                                                <td>2000</td>
                                                <td>$10000<br/>
                                                    Vitara Brezza </td>

                                                <td>

                                                    <span class="badge badge-danger">Not-Achieve</span>
                                                </td>
                                            </tr><tr class="selected odd" role="row">
                                                <input type="hidden"   value="7" />
                                                <td class="sorting_1">7</td>
                                                <td>DIAMOND
                                                    EXECUTIVE</td>
                                                <td>5000</td>
                                                <td>$25000<br/>
                                                    Jeep Compass</td>

                                                <td>

                                                    <span class="badge badge-danger">Not-Achieve</span>
                                                </td>
                                            </tr><tr class="selected even" role="row">
                                                <input type="hidden"   value="8" />
                                                <td class="sorting_1">8</td>
                                                <td>BLUE DIAMOND
                                                    EXECUTIVE</td>
                                                <td>10000</td>
                                                <td>$50000<br/>
                                                    Mercedes C Class</td>

                                                <td>

                                                    <span class="badge badge-danger">Not-Achieve</span>
                                                </td>
                                            </tr><tr class="selected odd" role="row">
                                                <input type="hidden"   value="9" />
                                                <td class="sorting_1">9</td>
                                                <td>BLACK
                                                    DIAMOND
                                                    EXECUTIVE</td>
                                                <td>25000</td>
                                                <td>$100000<br/>
                                                    Range Rover</td>

                                                <td>

                                                    <span class="badge badge-danger">Not-Achieve</span>
                                                </td>
                                            </tr><tr class="selected even" role="row">
                                                <input type="hidden"   value="10" />
                                                <td class="sorting_1">10</td>
                                                <td>ROYALE
                                                    DIAMOND</td>
                                                <td>50000</td>
                                                <td>$250000<br/>
                                                    Porsche Sports Car</td>

                                                <td>

                                                    <span class="badge badge-danger">Not-Achieve</span>
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

export default RewardsList
