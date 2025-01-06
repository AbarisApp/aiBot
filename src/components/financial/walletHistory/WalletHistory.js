import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import WalletHistoryList from './walletHistoryList.js/WalletHistoryList';
import WalletHistoryFillter from './walletHistoryFilter/WalletHistoryFillter';

function WalletHistory() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Financial",
        title_2: "Wallet History",
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <WalletHistoryFillter />
            <WalletHistoryList />
        </>
    )
}

export default WalletHistory
