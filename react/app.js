
function App(){	
	return (
		<div>
			<Element/>
			<Name />
		</div>
	);
}

// jsx
// component
// props
// hooks
// state
// style
//
function Element(){
	let [counter,setCounter] = React.useState(0)
	const style = {border:"2px solid" , fontSize:"18px"}
	return (
		<div style={style} >
			<button onClick={()=>setCounter(++counter)}>add</button>
			<h1> {counter} </h1>
		
		</div>
	)
}


function Name() {
	 const [name,setName] = React.useState("chedli") ;
	return (
	<div>
	        <input type='text' onChange={(e)=>setName(e.target.value)} />
		<h1>{name}</h1>
	</div>
	)
	
}



ReactDOM.render(<App />, document.querySelector("#root"))