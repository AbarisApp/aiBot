
import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import AccountStatementList from './accountStatementList/AccountStatementList';
import AccountStatementFillter from './accountStatementFilter/AccountStatementFilter';

const AccountStatements = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Financial",
        title_2: "Account Statements",
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AccountStatementFillter />
            <AccountStatementList/>
        </>
    )
}

export default AccountStatements