import React from 'react'
import './paginator-layout.css'

function PaginatorLayout(props){
  return(
    <div className="Pagination">{props.children}</div>
  )
}

export default PaginatorLayout