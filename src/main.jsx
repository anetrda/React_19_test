import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import SideMenu from './components/SideMenu.jsx'

const COMPONENT_NAME = {
	APP: 'app',
	LINK1: 'link1'
}

function MainState(){
	const [currentPage, setCurrentPage] = useState(COMPONENT_NAME.APP)

	return (
		<>
			<SideMenu myPage={currentPage} setMyPage={setCurrentPage} pageList={COMPONENT_NAME}/>
			{currentPage == COMPONENT_NAME.APP && <App />}
		</>
	);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
	<MainState />
  </StrictMode>,
)


