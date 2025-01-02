import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import IbFilter from './ibFillter/IbFilter'
import IbList from './ibList/IbList'


function Lb() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Income",
    title_2: "IB Income",
  }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <IbFilter />
      <IbList/>
    </>
  )
}

export default Lb
