import React from 'react'
import SupportsFillter from './supportsFillter/SupportsFillter'
import SupportList from './supportsList/SupportsList'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function Supports() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Supports",
      }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SupportsFillter />
            <SupportList/>
        </>
    )
}

export default Supports
