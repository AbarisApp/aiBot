import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import MatchingIncomeFilter from './matchingIncomeFillter/MatchingIncomeFilter'
import MatchingIncomeList from './matchingincomeList/MatchingIncomeList'

function Matching() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Income",
    title_2: "Matching Income",
  }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <MatchingIncomeFilter />
      <MatchingIncomeList/>
    </>
  )
}

export default Matching
