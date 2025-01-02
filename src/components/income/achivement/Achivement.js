import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import Achivementlist from './achivementList/Achivementlist'
import AchivementFilter from './achivementFillter/AchivementFilter'



function Achivement() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Income",
    title_2: "Achivement Income",
  }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <AchivementFilter/>
      <Achivementlist/>
    </>
  )
}

export default Achivement
