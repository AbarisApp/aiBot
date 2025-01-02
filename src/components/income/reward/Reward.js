import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import RewardFilter from './rewardFillter/RewardFilter'
import Rewardlist from './rewardList/Rewardlist'




function Reward() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Income",
    title_2: "Reward Income",
  }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <RewardFilter/>
      <Rewardlist/>
    </>
  )
}

export default Reward
