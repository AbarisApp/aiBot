import React from 'react'
import SellAibotCard from './sellAibotCard/SellAibotCard'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import SellAibotForm from './sellAibotForm/SellAibotForm'

function SellAibot() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Buy Sell",
        title_2: "Sell AIBOT",
      }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SellAibotCard />
            <SellAibotForm/>

        </>
    )
}

export default SellAibot
