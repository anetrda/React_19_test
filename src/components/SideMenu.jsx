import { useState } from 'react'
import './SideMenu.css'

function SideMenu({myPage, setMyPage, pageList}) {

  const links = []

  for (let page in pageList){
    links.push(   
    <button key={page} className="menuButton" style={{ color : myPage == pageList[page] ? '#747bff' : 'white' }} onClick={() => setMyPage(pageList[page])}>
        {pageList[page]}
    </button>
    )
  }
  
  return (
      <div className="menu">
		<p className="menuHead">MENU</p>
		{links}
      </div>
  )
}

export default SideMenu
