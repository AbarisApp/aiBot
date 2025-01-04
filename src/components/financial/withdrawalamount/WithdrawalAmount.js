import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import WithdrawalAmountFillter from './withdrawalAmountFillter/WithdrawalAmountFillter'
import WithdrawalAmountList from './withdrawalAmountList/WithdrawalAmountList'

function WithdrawalAmount() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Financial",
        title_2: "Withdrawal Amount ()",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <WithdrawalAmountFillter />
            <WithdrawalAmountList />
        </>
    )
}

export default WithdrawalAmount
