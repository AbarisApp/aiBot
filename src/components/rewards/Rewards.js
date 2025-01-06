import React from 'react'
import RewardsList from './rewardsList/RewardsList'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import RewardsFilter from './rewardFillter/RewardsFilter';

function Rewards() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Rewawards",
        title_2: "Rewards Reports",
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <RewardsFilter />
            <RewardsList />
        </>
    )
}

export default Rewards
