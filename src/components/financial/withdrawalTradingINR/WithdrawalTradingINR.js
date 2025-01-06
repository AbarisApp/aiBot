import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import WithdrawalTradingINRFillter from './withdrawalTradingINRFillter/WithdrawalTradingINRFillter'
import WithdrawalTradingINRList from './withdrawalTradingINRList/WithdrawalAmountList'

function WhdrawalTradingINR() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Financial",
        title_2: "Wallet (INR)",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <WithdrawalTradingINRFillter />
            <WithdrawalTradingINRList />
        </>
    )
}

export default WhdrawalTradingINR
