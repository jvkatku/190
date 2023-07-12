let res = document.getElementById('res_nome')
let gravar = document.getElementById('gravar')

gravar.addEventListener('click',()=>{
    let nome = document.getElementById('nome').value
    res_nome.innerHTML = ' o nome do cliente é '+nome
})