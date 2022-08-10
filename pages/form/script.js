
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
        child_div.setAttribute("class", "pure-u-1 pure-u-md-1-3 mg-t-b-10");
    
        const input = document.createElement("input");
        input.setAttribute("type", document.querySelector('#inputs').value);
        input.setAttribute("class", "pure-input-1");
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
    
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },

    getAquisitionTextClt(documentArray, addressArray) {
        const text = [];

        //========================= primeiro paragrafo =========================//
        const nameCapitalize = Form.capitalizeFirstLetter(documentArray[0])

        // composição primeiro paragrafo
        text.push('Eu, ' + nameCapitalize + ' , residente no endereço ' + addressArray[0].trim() + ', no bairro ' + addressArray[4].trim() + ', localizado na cidade');
        text.push('de '+addressArray[5].trim() +', no CEP '+addressArray[1].trim()+', de nacionalidade INFORMAR, exercendo a função de INFORMAR,');
        text.push('inscrito no CPF sob o n° ' + documentArray[1].trim() + ', declaro e confirmo a aquisição dos materiais de trabalho cedido pela');
        text.push(`Modal Gestão e Resultados Ltda, inscrita no CNPJ sob o n° 67.201.640.0001/30.`);
        text.push(`A título de empréstimo, para meu uso exclusivo, conforme determinado na lei, os equipamentos`);
        text.push(`especificados neste termo de responsabilidade, comprometendo-me a mantê-los em perfeito estado de`);
        text.push(`conservação, ficando ciente de que: `)


        //========================= segundo paragrafo =========================//
        text.push('A título de empréstimo, para meu uso exclusivo, conforme determinado na lei, os equipamentos');
        text.push('especificados neste termo de responsabilidade, comprometendo-me a mantê-los em perfeito estado de');
        text.push('conservação, ficando ciente de que: ')

        //========================= descrições das condições =========================//
        text.push('1- Se o equipamento for danificado ou inutilizado por emprego inadequado, mau uso, negligência ou');
        text.push('extravio, a empresa me fornecerá novo equipamento e cobrará o valor de um equipamento da mesma');
        text.push('marca ou equivalente ao da praça;')

        text.push('2- Em caso de dano, inutilização ou extravio do equipamento deverei comunicar imediatamente ao setor');
        text.push('competente;');

        text.push('3- Terminando os serviços ou no caso de rescisão do contrato de trabalho, devolverei o equipamento');
        text.push('completo e em perfeito estado de conservação, considerando-se o tempo do uso dele e devolução imediata');
        text.push('ao setor competente;');

        text.push('4- Estando os equipamentos em minha posse, estarei sujeito a inspeções sem prévio aviso.');
        text.push('Descrição do(s) material(is):')

        text.push('AQUISIÇÃO'); 


        text.push('Atestamos que o bem foi entregue em ' + Date.now() + ', nas seguintes condições:');
        text.push('(  ) Em perfeito estado');
        text.push('(  ) Apresentado marcas de uso');
        text.push('(  ) Apresentando defeito');
        text.push('(  ) Faltando peças ou acessórios');

        return text;
    }, 

    generateAcquisitionDocumentCLT(documentArray, addressArray) {
        const textDocument = Form.getAquisitionTextClt(documentArray, addressArray);
       
        var doc = new jsPDF()
        var width = doc.internal.pageSize.getWidth();

        const center  = (width / 2);

        const titleOfDocument = 'TERMO DE AQUISIÇÃO DE EQUIPAMENTOS'; 
        doc.text(titleOfDocument, center,30, { align: 'center' })
        .setFontSize(11).setFont('Arial Narrow', '');

        let lineSpace = 50; 
        const paragraph = 30; 
        const normalSpace = 20; 

        for (let index = 0; index < textDocument.length; index++) {
            
            if(index == 0) {
                doc.text(textDocument[index], paragraph,lineSpace).setFontSize(11).setFont('Arial Narrow', '');
                lineSpace += 5;
            }

            if(index == 4 ) {
                lineSpace += 10;
            }

            doc.text(textDocument[index], normalSpace,lineSpace).setFontSize(11).setFont('Arial Narrow', '');
            lineSpace += 5;
        }

        lineSpace+= 20; 
        const signatureLine = '__________________________________'; 
        doc.text(signatureLine, center,lineSpace, { align: 'center' }).setFontSize(11).setFont('Arial Narrow', '');
        
        lineSpace+= 10; 
        doc.text('NOME DO RESPONSÁVEL', center, lineSpace, { align: 'center' })
        doc.save('Requerimento-aquisição-clt.pdf')
    },

    

    prepareDocument(contractType, requerimentType, documentArray, addressArray) {
        if(contractType == "CLT" && requerimentType == "AQ") {
            Form.generateAcquisitionDocumentCLT(documentArray, addressArray)
        }  
    },

  

    submit() {
        const elementsFormDocument = document.querySelectorAll('#form-document input');
        const elementsFormAdress = document.querySelectorAll('#form-address input');
        const elementsFormItems = document.querySelectorAll('#form-items input');
        
        try {

            const documentArray = [];
            const addressArray = [];

            elementsFormDocument.forEach(element => {
                Form.validateEmpty(element.value, element.placeholder)
                documentArray.push(element.value)
            });

            elementsFormAdress.forEach(element => {
                Form.validateEmpty(element.value, element.placeholder)
                addressArray.push(element.value)
            });

            const contractType = document.getElementById('tipo-contrato').value
            const requerimentType = document.getElementById('tipo-requerimento').value
         
            Form.prepareDocument(contractType, requerimentType, documentArray, addressArray)
           
        } catch(error) {
            swal("Atenção!", error.message)
            return false;
        }
        
    }
}