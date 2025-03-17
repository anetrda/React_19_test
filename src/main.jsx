import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import TicTacToe from './components/TicTacToe.jsx'
import SideMenu from './components/SideMenu.jsx'

const COMPONENT_NAME = {
	APP: 'app',
	LINK1: 'link1'
}

function MainState(){
	const [currentPage, setCurrentPage] = useState(COMPONENT_NAME.APP)

	function getCurrentPage(cPage){
		console.log(" get current page ", cPage )
		switch(cPage){
			case COMPONENT_NAME.APP:
				return <App />
			case COMPONENT_NAME.LINK1:
				return <TicTacToe />
			default:
				return <App />;
		}
	};
	
	function myConsole(){
		console.log("page draw called");
	}

	return (
		<>
			<SideMenu myPage={currentPage} setMyPage={setCurrentPage} pageList={COMPONENT_NAME}/>
			<>{getCurrentPage(currentPage)}</>
		</>
	);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
	<MainState />
  </StrictMode>
)


