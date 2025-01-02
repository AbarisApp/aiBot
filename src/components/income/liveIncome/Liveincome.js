import React from 'react'
import LiveincomeFillter from './liveincomeFillter/LiveincomeFillter'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import ListLevelincome from './listLevelincome/ListLevelincome'

function Liveincome() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Income",
    title_2: "Level Income",
  }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <LiveincomeFillter />
      <ListLevelincome/>
    </>
  )
}

export default Liveincome
