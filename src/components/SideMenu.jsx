import { useState } from 'react'
import './SideMenu.css'

function SideMenu({myPage, setMyPage, pageList}) {

  const links = []

  for (let page in pageList){
    links.push(   
    <button key={page} style={{ color : myPage == pageList[page] ? '#747bff' : 'white' }} onClick={() => setMyPage(pageList[page])}>
        {pageList[page]}
    </button>
    )
  }
  
  return (
    <>
      <div className="menu">
		<h3>MENU</h3>
		{links}
      </div>
    </>
  )
}

export default SideMenu
