import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import TradingFilter from './tradingFillter/TradingFilter'
import Tradinglist from './tradingList/TradingList'





function Trading() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Income",
    title_2: "Trading Income",
  }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <TradingFilter/>
      <Tradinglist/>
    </>
  )
}

export default Trading
