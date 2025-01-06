import React from 'react'
import IncomeSummaryFillter from './incomeSummaryFilter/IncomeSummaryFillter';
import IncomeSummaryList from './incomeSummaryList/IncomeSummaryList';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';

function IncomeSummary() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Financial",
        title_2: "SUMMARY",
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <IncomeSummaryFillter />
            <IncomeSummaryList />
        </>
    )
}

export default IncomeSummary
