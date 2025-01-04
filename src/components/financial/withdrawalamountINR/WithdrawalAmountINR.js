import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import WithdrawalAmountINRFillter from './withdrawalAmountINRFillter/WithdrawalAmountINRFillter'
import WithdrawalAmountINRList from './withdrawalAmountINRList/WithdrawalAmountINRList'


function WithdrawalAmountINR() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Financial",
        title_2: "Withdrawal Amount (INR)",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <WithdrawalAmountINRFillter />
            <WithdrawalAmountINRList />
        </>
    )
}

export default WithdrawalAmountINR
