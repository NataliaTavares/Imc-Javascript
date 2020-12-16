var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault()
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);
    console.log (paciente)

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibirMensagensDeErro(erros);
        return;
    }

   
    // adicionando o paciente a tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemPacienteDoFormulario(form){

    var paciente = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
        classificaocao : classeImc()
    }
    
    return paciente;
}

function montaTd (dado,classe) {

    var td =  document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
    
        return td;  
}    

function montaTr (paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    pacienteTr.appendChild(montaTd(paciente.classificaocao, "info-class"));

    return pacienteTr;   
}
    
function validaPaciente(paciente){

    var erros = []

    if(paciente.nome.length == 0){
        erros.push("Nome Invalido");
    }

    if (!validaPeso(paciente.peso) || paciente.peso.length == 0){
        erros.push("Peso Invalido");    
    }
    
    if (!validaAltura(paciente.altura) || paciente.altura.length == 0){
        erros.push("Altura Invalida"); 
    }
        
    if(paciente.gordura.length == 0){
        erros.push("Gorduta Invalida");
    }
    
    

    return erros;  
}
        
function exibirMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        
    })

}     
    

