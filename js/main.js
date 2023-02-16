const form = document.getElementById("novoItem")

form.addEventListener("submit", (e) => {
	e.preventDefault()
	criaElemento(e.target.elements['nome'].value, e.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade){
	console.log(nome)
	console.log(quantidade)

 	const novoItem = document.createElement('li')
 	novoItem.classList.add('item')

 	const numeroItem = document.createElement('strong')
 	numeroItem.innerHTML = quantidade

 	const lista = document.getElementById('lista')

 	novoItem.appendChild(numeroItem)
 	novoItem.innerHTML += nome

 	lista.appendChild(novoItem)
}