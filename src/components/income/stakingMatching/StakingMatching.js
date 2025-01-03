import React from 'react'
import StakingMatchingFillter from './StakingMatchingFillter'
import StakingmatchinglList from './StakingmatchinglList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function StakingMatching() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Income",
    title_2: "Staking Matching Income",
  }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <StakingMatchingFillter/>
      <StakingmatchinglList/>
    </>
  )
}

export default StakingMatching
