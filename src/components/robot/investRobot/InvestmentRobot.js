import React from 'react'
import InvestmentRobotFilter from './investmentRobotFillter/InvestmentRobotFilter'
import InvestmentRobotlist from './investmentRobotList/InvestmentRobotList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function InvestmentRobot() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Robot",
        title_2: "Investment Robot",
      }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <InvestmentRobotFilter />
            <InvestmentRobotlist />
        </>
    )
}

export default InvestmentRobot
