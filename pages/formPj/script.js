
const CreateField = {
    createInput() {     
        if(document.getElementById("inputName").value == null || document.getElementById("inputName").value == "") {
            swal("Atenção!", "Favor, preencher o nome do campo a ser criado!");
            return false;
        }

        const textLabel = document.getElementById("inputName").value;
        const labelElement = document.createElement("label");
        labelElement.innerHTML = textLabel;

        const div = document.getElementById("items");
    
        const child_div = document.createElement("div");
        child_div.setAttribute("class", "form-row");
    
        const input = document.createElement("input");
        input.setAttribute("type", document.querySelector('#inputs').value);
        
        child_div.appendChild(labelElement);
        child_div.appendChild(input);
    
        div.append(child_div);
    },
}

const ChangeContractElement = {
    changeTitleContractDefault() {    
        document.querySelector('.contract-type-clt').textContent = "CLT"
        document.querySelector('.contract-type-estag').textContent = "Estagiário"
        document.querySelector('.contract-name').textContent = "Nome"
        document.querySelector('.contract-document').textContent = "CPF"
    },
    
    changeTitleContractBusiness() {        
        document.querySelector('.contract-type-pj').textContent = "Pessoa Jurídica"
        document.querySelector('.contract-name').textContent = "Nome Empresa"
        document.querySelector('.contract-document').textContent = "CNPJ"
    },
}

const Form = {
    name: document.querySelector("input#name"),
    cnpj: document.querySelector("input#cnpj"),

    rua: document.querySelector("input#rua"),
    numero: document.querySelector("input#numero"),
    complemento: document.querySelector("input#complemento"),
    bairro: document.querySelector("input#bairro"),
    cidade: document.querySelector("input#cidade"),
    uf: document.querySelector("input#uf"),

    option: document.querySelector("input#radio"),
    

    getValues() {
        return {
            name: Form.name.value,
            cnpj: Form.cnpj.value,
            rua: Form.rua.value,
            numero: Form.numero.value, 
            complemento: Form.complemento.value, 
            bairro: Form.bairro.value, 
            cidade: Form.cidade.value, 
            uf: Form.uf.value,
            option: Form.option.value, 

        }
    }, 

    

    validateEmpty() {
        const {name, cnpj, rua, numero, complemento, bairro, cidade, uf} = Form.getValues();
        
        if(name.trim() == null || name.trim() == "" || cnpj.trim() == null || cnpj.trim() == "") {
            
            //swal("Atenção!", "Favor, preencha todos os campos de dados pessoais!");
            
            return false;
        }

        if(
            rua.trim() == null || rua.trim() == "" || 
            numero.trim() == null || numero.trim() == "" ||
            complemento.trim() == null || complemento.trim() == "" ||
            bairro.trim() == null || bairro.trim() == "" ||
            cidade.trim() == null || cidade.trim() == "" ||
            uf.trim() == null || uf.trim() == ""
           ) {
            
            //swal("Atenção!", "Favor, preencha todos os campos de endereço!");
            return false;
        }

      

        

    },

    submit(event) {
        event.preventDefault();
        try {
            Form.validateEmpty();


        }catch(error) {
            alert(error.message)
        }
        
    }
}