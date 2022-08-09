
const CreateField = {
    createInput(event) {     
        event.preventDefault();

        if(document.getElementById("inputName").value == null || document.getElementById("inputName").value == "") {
            throw new Error("Favor, preencher o nome do campo a ser criado!");
        }

        const textLabel = document.getElementById("inputName").value;
        const labelElement = document.createElement("label");
        labelElement.innerHTML = textLabel;

        const div = document.getElementById("items");
    
        const child_div = document.createElement("div");
        child_div.setAttribute("class", "form-row");
    
        const input = document.createElement("input");
        input.setAttribute("type", document.querySelector('#inputs').value);
        input.setAttribute("value", textLabel);
        
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
  
    
    validateEmpty(value, name) {
      
        if(value.trim() == "" || value.trim() == null) {
            throw new Error("O campo " + name + " não pode ser nulo" );
        }
    },
    

    submit() {
      
        const elementsFormDocument = document.querySelectorAll('#form-document input');
        const elementsFormAdress = document.querySelectorAll('#form-address input');
        const elementsFormItems = document.querySelectorAll('#form-items input');
        

        
        try {

            elementsFormDocument.forEach(element => {
                Form.validateEmpty(element.value, element.placeholder)
            });

            elementsFormAdress.forEach(element => {
                Form.validateEmpty(element.value, element.placeholder)
            });

            elementsFormItems.forEach(element => {
                Form.validateEmpty(element.value, element.placeholder)
            });
            
            const documentArray = [];
            const addressArray = [];
            const itemsArray = [];

            elementsFormDocument.forEach(item => documentArray.push(item.value))
            elementsFormAdress.forEach(item => addressArray.push(item.value))
            elementsFormItems.forEach(item => itemsArray.push(item.value))
            
            
        } catch(error) {
            swal("Atenção!", error.message)
            return false;
        }
        
    }
}