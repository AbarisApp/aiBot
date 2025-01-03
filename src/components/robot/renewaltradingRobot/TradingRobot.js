import React from 'react'
import RenewalTradingFilter from './renewaltradingFillter/RenewalTradingFilter'
import RenewalTradinglist from './renewalTradingList/RenewalTradinglist'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function RenewalTrading() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Robot",
        title_2: "RenewalTrading",
      }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <RenewalTradingFilter />
            <RenewalTradinglist />
        </>
    )
}

export default RenewalTrading
