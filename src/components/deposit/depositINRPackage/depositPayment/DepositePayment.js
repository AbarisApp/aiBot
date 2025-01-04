import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';

function DepositePayment() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Deposit",
        title_2: "Deposit Payment Report",
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
                <div class="row m-4 justify-content-center">
                    <div className="col-lg-12 col-md-12">
                        <div className="d-flex align-items-center p-4 rounded" style={{ background: 'linear-gradient(90deg, #48c6ef, #6f86d6)', color: 'white' }}>
                            <div className="me-4">
                                <div className="d-flex justify-content-center align-items-center bg-light rounded-circle" style={{ width: 80, height: 80 }}>
                                    <i class="fa-sharp fa-solid fa-arrows-spin fa-spin" style={{ color: '#000', fontSize: "32px" }} ></i>
                                </div>
                            </div>
                            <div>
                                <h5 className="fw-bold mb-2">Reminder!</h5>
                                <p className="mb-0" style={{ lineHeight: '1.6' }}>
                                    "Kindly Make sure you send the exact amount mentioned to be paid when you send from your wallet or exchange as they might charge your transaction fee.
                                    If you send <strong>PARTIAL PAYMENT</strong> or <strong>EXTRA PAYMENT</strong>, your ID will not be activated automatically. You will have to contact the support team in this case, and it can take up to 48 hours for the solution."
                                </p>
                            </div>
                        </div>
                    </div>

            </div>
            <div className='row m-4'>
                <div className='col-xl-12 col-md-12'>
                    <div className="card shadow-sm rounded">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Payment Details</h5>
                            <div className="row mb-3 bg-light">
                                <div className="col-12 d-flex justify-content-between">
                                    <span>Amount To Send</span>
                                    <span className="fw-bold text-warning">
                                        10 USDT.TRC20 (Total confirms needed: 10)
                                    </span>
                                </div>
                            </div>
                            <div className="row mb-3 p-4">
                                <div className="col-12 d-flex justify-content-between">
                                    <span>Received So Far</span>
                                    <span>0.00000000 USDT.TRC20 unconfirmed</span>
                                </div>
                            </div>
                            <div className="row mb-3 bg-light p-4">
                                <div className="col-12 d-flex justify-content-between">
                                    <span>Status</span>
                                    <span className="text-muted">Waiting for buyer funds...</span>
                                </div>
                            </div>
                            <div className="row mb-3 p-4">
                                <div className="col-12">
                                    <div className="d-flex justify-content-between">
                                        <span>Payment Id</span>
                                        <span>CPJA39DSO335NVJQ5XKXZSGDNN</span>
                                    </div>
                                    <small className="text-muted">
                                        (have this handy if you need any support related to this transaction)
                                    </small>
                                </div>
                            </div>
                            <div className="row mb-3 bg-light p-4">
                                <div className="col-12 d-flex justify-content-between">
                                    <span>Creation Time</span>
                                    <span>1/4/2025 3:56:44 PM</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-between">
                                    <span>Expiry Time</span>
                                    <span>1/4/2025 5:56:44 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DepositePayment
