
function changeTitles(type) {    
    console.log(type)
    if(type="CLT" || type == "ESTAG") {
        document.getElementById("profile-name").innerHTML = "CLT";
        document.getElementById("profile-document").innerHTML = "CPF";
    }

    if(type="PJ") {
        document.getElementById("profile-name").innerHTML = "PJ";
        document.getElementById("profile-document").innerHTML = "CNPJ";
    }

}

function createInput(inputType) {
    const textLabel = document.getElementById("inputName").value;
    const labelElement = document.createElement("label");
    labelElement.innerHTML = textLabel;
    
    const div = document.getElementById("items");

    const child_div = document.createElement("div");
    child_div.setAttribute("class", "form-row");

    const input = document.createElement("input");
    input.setAttribute("type", inputType);
    child_div.appendChild(labelElement);
    child_div.appendChild(input);

    div.append(child_div);
    div.appendChild(item);
}

function addField() {
    var select = document.getElementById('inputs');
    var value = select.options[select.selectedIndex].value;
    createInput(value);
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