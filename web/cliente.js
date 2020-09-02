
    document.getElementById("ButtonSalvar").innerHTML = "Salvar";
    document.getElementById("ButtonCancelar").innerHTML = "Cancelar";
    

    function Salvar(){
        
        let nome = document.getElementById("nome").value;
        let cpf = document.getElementById("cpf").value;
        let datanascimento = document.getElementById("datanasc").value;
        let endereco = document.getElementById("endereco").value;
        let bairro = document.getElementById("bairro").value;
        let cep = document.getElementById("cep").value;
        let datacadastro = document.getElementById("datacadastro").value;
        let municipio = document.getElementById("municipio").value;
        let telefone = document.getElementById("telefone").value;
        let celular = document.getElementById("celular").value;
        let uf = document.getElementById("uf").value;
        let inscri = document.getElementById("inscri").value;
        
        imprimir(nome.trim(),cpf.trim(),datanascimento.trim(),endereco.trim()
        ,bairro.trim(),cep.trim(),datacadastro.trim(),municipio.trim(),telefone.trim()
        ,celular.trim(),uf.trim(),inscri.trim())
            
    }

    function imprimir(nome,cpf,datanascimento,endereco,bairro,cep,datacadastro,municipio,telefone,celular,uf,inscri){
        if(nome){
            console.log(nome);
        }
        if(cpf){
            console.log(cpf)
        }
        if(datanascimento){
            console.log(datanascimento);
        }
        if(endereco){
            console.log(endereco);
        }
        if(bairro){
            console.log(bairro);
        }
        if(cep){
            console.log(cep);
        }
        if(datacadastro){
            console.log(datacadastro);
        }
        if(municipio){
            console.log(municipio);
        }
        if(telefone){
            console.log(telefone);
        }
        if(celular){
            console.log(celular);
        }
        if(uf){
            console.log(uf);
        }
        if(inscri){
            console.log(inscri);
        }
    }
