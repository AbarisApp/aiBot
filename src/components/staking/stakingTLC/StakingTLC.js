import React from 'react'
import StakingTLClist from './stakingTLCList/StakingTLCList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import StakingTLCFillter from './stakingTLCFillter/StakingTLCFillter'

function StakingTLC() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Staking",
        title_2: "Staking TLC",
      }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <StakingTLCFillter />
            <StakingTLClist />
        </>
    )
}

export default StakingTLC
