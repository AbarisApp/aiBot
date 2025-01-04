import React from 'react'
import TradingRobotFilter from './tradingRobotFillter/TradingRobotFilter'
import TradingRobotlist from './TradingRobotList/TradingRoboltist'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function TradingRobot() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Robot",
        title_2: "Trading Robot",
      }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <TradingRobotFilter />
            <TradingRobotlist />
        </>
    )
}

export default TradingRobot
