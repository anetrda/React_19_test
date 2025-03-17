import Square from './Square.jsx'

export default function Grid(){
	const offsetIndex = 1

	function makeRows(column, rows){
		console.log(" make rows called ", column, rows)
		let gridRows = [];
		for( let r = 0; r < rows; r++ ){
			const bNumber = (column*rows) + r + offsetIndex
			console.log(' make rows called ', column, "\n rows ",rows ,"\n r", r, "\n bNumber ", bNumber )
			
			gridRows.push( <Square key={bNumber} buttonNumber={bNumber}/> )
		}
		return gridRows
	}

	function makeGrid(columns, rows){
		let grid = [];
		for (let c = 0 ; c < columns ; c++){
			console.log(' make grid called ', c, "\n grid ", grid )
			grid.push(  <div className='board-row'> 
							{makeRows(c, rows)}
						</div>
			)
		}
		return grid
	}
	
	return (
		<>
			{ makeGrid(3, 3) }
		</>
	)
}
