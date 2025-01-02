import React from 'react'
import pageNotFound from "../../assets/pagenotfound/3acwebs-1.png"
import { Link } from 'react-router-dom'
import Breadcrumbs from '../breadcrumb/Breadcrumbs'
function PageNotFound() {
  return (
    <div className=''>
      <Breadcrumbs breadCrumbsTitle={"PAGE NOT FOUND"} />
      <Link to={"/"}><img src={pageNotFound} alt='page not found' width={100 + "%"} /></Link>
    </div>
  )
}

export default PageNotFound
