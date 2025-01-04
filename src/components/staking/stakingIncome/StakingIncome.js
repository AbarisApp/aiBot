import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import StakingIncomeFillter from './stackingIncomeFillter/StakingIncomeFillter'
import StakingIncomeList from './stakingIncomeList/StakingIncomeList'




function StakimngIncome() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Income",
    title_2: "Staking Income Income",
  }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <StakingIncomeFillter/>
      <StakingIncomeList/>
    </>
  )
}

export default StakimngIncome
