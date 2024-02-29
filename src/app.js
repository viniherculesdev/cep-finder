

document.addEventListener("DOMContentLoaded", function() {
let btnSearch = document.getElementById('cl-btn');


btnSearch.addEventListener("click", function() {
    let input = document.getElementById('cl-input').value;
    let cepInformado = ''
    if(input.length !== 8){
        alert("Cep invalido")
    } else{
        cepInformado = input
    }

    
    const url = `https://viacep.com.br/ws/${cepInformado}/json/`
    
    fetch(url)
        .then(response => {
            return response.json();
            })
        .then(data => {
            const logradouro = data.logradouro
            const bairro = data.logradouro
            const localidade = data.logradouro
            const uf = data.logradouro
            const ddd = data.logradouro

            document.getElementById('input1').value = data.logradouro
            document.getElementById('input2').value = data.bairro
            document.getElementById('input3').value = data.localidade
            document.getElementById('input4').value = data.uf
            document.getElementById('input5').value = data.ddd
            

            })    


});





});