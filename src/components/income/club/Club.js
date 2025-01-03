import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import ClubFilter from './clubFillter/ClubFilter'
import Clublist from './clubList/Clublist'





function Club() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Income",
    title_2: "Club Income",
  }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <ClubFilter/>
      <Clublist/>
    </>
  )
}

export default Club
