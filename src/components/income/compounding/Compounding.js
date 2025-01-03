import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import CompoundingFilter from './compoundingFillter/CompoundingFilter'
import Compoundinglist from './compoundingList/Compoundinglist'




function Compounding() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Income",
    title_2: "Compounding Income",
  }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <CompoundingFilter/>
      <Compoundinglist/>
    </>
  )
}

export default Compounding
