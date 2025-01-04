import { Breadcrumbs } from '@mui/material'
import React from 'react'

function Portfolio() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Robot",
        title_2: "Portfolio",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">


                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Trading Portfolio</h4>
                            </div>

                        </div>
                        <div className="card mt-4">
                            <div className='h-25 bg-warning text-white rounded font-weight-bold px-4 text-uppercase'>Trading</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-4">
                <div className="col-xl-12">


                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Compounding Portfolio</h4>
                            </div>

                        </div>
                        <div className="card mt-4">
                            <div className='h-25 bg-success text-white rounded font-weight-bold px-4 text-uppercase'>Compounding</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
