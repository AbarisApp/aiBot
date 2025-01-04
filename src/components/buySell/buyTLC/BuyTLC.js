import React from 'react'
import BuyTlcCard from './buyTlcCard/BuyTlcCard'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import BuyTLCForm from './buyTLCForm/BuyTLCForm'

function BuyTLC() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Buy Sell",
        title_2: "BUY AIBOT",
      }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <BuyTlcCard />
            <BuyTLCForm/>

        </>
    )
}

export default BuyTLC
