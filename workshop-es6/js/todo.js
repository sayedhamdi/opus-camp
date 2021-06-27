console.log("yekhdem")
let addButton = document.querySelector("#add")
let todoInput = document.querySelector("#todo-input")
let todoListeView = document.querySelector("ul")
let counterView = document.querySelector("#counter")
let ratioView = document.querySelector("#ratio")

let counter = 0
let checked = 0
let todo = (text)=> `<li><input type='checkbox'>${text}</li>`


// collecte valeur de l'input
function addElement(){
	let todoText = todoInput.value
	if(todoText!=""){
		todoListeView.innerHTML+=todo(todoText)
		let checkboxes = document.querySelectorAll("input[type='checkbox']")
		checkboxes.forEach((checkbox)=>{
			checkbox.onclick = ()=>{
				console.log(checkbox.checked)
				if(checkbox.checked)
					checked+=1

				else 
					checked-=1
				ratioView.innerText = `Ratio des tache : ${checked} / ${counter}`
			}
		})
		//vider l'input
		todoInput.value=""
		counter++
		counterView.innerText = `Nombre de tache : ${counter}`
		ratioView.innerText = `Ratio des tache : ${checked} / ${counter}`

	}else{
		// matnajamch tzid element
		alert("matnjamch tzid ekteb 7aja")
	}
	
}


addButton.onclick= addElement

