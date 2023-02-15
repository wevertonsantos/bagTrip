const form = document.getElementById("novoItem")

form.addEventListener("submit", (e) => {
	e.preventDefault()
	const nome = e.target.elements['nome'].value
	const quantidade = e.target.elements['quantidade'].value

	criaElemento(nome, quantidade)
})

function criaElemento(nome, quantidade){
	console.log(nome)
	console.log(quantidade)

	const novoItem = document.createElement('li')
	novoItem.classList.add("item")

	const numeroItem = document.createElement('strong')
	numeroItem.innerHTML = quantidade

	console.log(numeroItem)
}