const PDF_NAME = 'Requerimento-aquisição-clt-estag.pdf';

const ENUM_REQUERIMENT_TYPE = {
    AQ: 'AQ',
    CHG: 'CHG',
    DEV: 'DEV'
}

const ENUM_CONTRACT_TYPE = {
    CLT: 'CLT',
    PJ: 'PJ',
    ESTAG: 'ESTAG'
}

const ENUM_STYLES = {
    DISPLAY_NONE: 'none',
    DISPLAY_BLOCK: 'block',
    PURE_FORM_STACKED: 'pure-form pure-form-stacked',
    FORM_DOCUMENT: 'form-document',
    FORM_TITLE: 'form-title',    
    PURE_G: 'pure-g',
    PURE_U_1_MD_1_3: 'pure-u-1 pure-u-md-1-3',
    CONTRACT_NAME: 'contract-name',
    PURE_INPUT_1_2: 'pure-input-1',
    FORM_ADDRESS: 'form-address',
    CONTRACT_TYPE: 'contract-type',
    PURE_FORM: 'pure-form',
    FORM_ITEMS: 'form-items',
    ITEMS_WRAPPER: 'items-wrapper',
    ADD_ROW: 'add-row',
    PURE_U_1_MD_1_3_MG_T_B_10: 'pure-u-md-1-5 mg-t-b-10',
    ROW: 'row'
}

const SELECTORS = {
    IS_CNPJ: '#isCnpj',
    ITEMS: 'items',
    FORM_DOCUMENT_INPUT: '#form-document input',
    FORM_ADDRESS_INPUT: '#form-address input',
    FORM_ITEMS_INPUT: '#form-items input',
    CONTRACT_TYPE_CLT: '.contract-type-clt',
    CONTRACT_TYPE_PJ: '.contract-type-pj',
    CONTRACT_TYPE_ESTAG: '.contract-type-estag',
    CONTRACT_NAME: '.contract-name',
    HANDLE_NEW_INPUT: '#new-div-', 

    REQUERIMENT_TYPE: 'tipo-requerimento',
    CONTRACT_TYPE: 'tipo-contrato',
    
    //document
    NAME: 'name', 
    OCUPATION: 'ocupacao', 
    CPF: 'cpf', 
    CNPJ: 'cnpj', 
    NATIONALITY: 'nacionalidade', 

    //address
    ZIPCODE: 'cep',
    STREET: 'rua', 
    NUMBER: 'numero', 
    COMPLEMENT: 'complemento', 
    DISTRICT: 'bairro',
    CITY: 'cidade',
    UF: 'uf'
}

const ENUM_ATTRIBUTES = {
    CLASS: 'class',
    ID: 'id',
    TYPE: 'type',
    VALUE: 'value',
    TYPE_TEXT: 'text',
    TYPE_NUMBER: 'number',
    TYPE_EMAIL: 'email',
    FOR: 'for',
    PLACEHOLDER: 'placeholder',
    ONCLICK: 'onclick'
}

const TAGS = {
    FORM: 'form',
    DIV: 'div',
    FIELDSET: 'fieldset', 
    LEGEND: 'legend',
    LABEL: 'label',
    INPUT: 'input',
    ITEMS: 'items'
}

const DESCRIPTIONS = {
    PERSONAL_DATA: 'Dados Pessoais',
    COMPANY_DATA : 'Dados da Empresa',
    PATRIMONY: 'Patrimônio',
    ITEMS: 'Informar modelo/patrimônio',
    NO_FIELD_REMOVE: 'Não existe field para remover',
    WARNING: 'Atenção!',
    CLT: 'CLT',
    ESTAG: 'Estagiário',
    PJ: 'Pessoa Jurídica',
    NOME: 'Nome',
    COMPANY_NAME: 'Nome Empresa',
    FIELD: ' O campo ',
    NOT_NULL: ' Não pode ser nulo! ',
    CEP_NOT_FOUND: 'CEP não encontrado.',
    INVALID_CEP_FORMAT: "Formato de CEP inválido.",
    CONTRACT_TYPE: 'Tipo de contrato', 
    REQUERIMENT_TYPE: 'Tipo de requerimento',

    //collaborator
    NAME: 'Nome',
    CPF: 'Cpf',
    CNPJ: 'Cnpj',
    OCCUPATION: 'Ocupação',
    NATIONALITY: 'Nacionalidade',

    //address
    ZIPCODE: 'Cep',
    STREET: 'Rua', 
    NUMBER: 'Número', 
    COMPLEMENT: 'Complemento', 
    DISTRICT: 'Bairro',
    CITY: 'Cidade',
    UF: 'Uf'
}

const FONT_FAMILY = {
    ARIAL_NARROW: 'Arial Narrow',
    CALIBRE_CORPO: 'Calibri (Corpo)'
}

const FONT_SIZE = {
    SIZE_11: '11',
    SIZE_14: '14',
}

const FONT_STYLE = {
   BOLD: 'bold',
   NORMAL: 'normal'
}

const ACQUISITION_TERM = [
    `TERMO DE AQUISIÇÃO DE EQUIPAMENTOS`, 
    `Eu, NAME , residente no endereço ADDRESS, no bairro DISTRICT, localizado na cidade`,
    'de CITY, no CEP ZIP_CODE, de nacionalidade NATIONALITY, exercendo a função de OCCUPATION',
    `Modal Gestão e Resultados Ltda, inscrita no CNPJ sob o n° 67.201.640.0001/30.`,
    `A título de empréstimo, para meu uso exclusivo, conforme determinado na lei, os equipamentos`,
    `especificados neste termo de responsabilidade, comprometendo-me a mantê-los em perfeito estado de`,
    `conservação, ficando ciente de que:`,
    `1- Se o equipamento for danificado ou inutilizado por emprego inadequado, mau uso, negligência ou`,
    `extravio, a empresa me fornecerá novo equipamento e cobrará o valor de um equipamento da mesma`,
    `marca ou equivalente ao da praça`,
    `2- Em caso de dano, inutilização ou extravio do equipamento deverei comunicar imediatamente ao setor`,
    `competente;`,
    `3- Terminando os serviços ou no caso de rescisão do contrato de trabalho, devolverei o equipamento`,
    `completo e em perfeito estado de conservação, considerando-se o tempo do uso dele e devolução imediata`,
    `ao setor competente`,
    `4- Estando os equipamentos em minha posse, estarei sujeito a inspeções sem prévio aviso.`,
    `Descrição do(s) material(is):`,   
    'AQUISIÇÃO', 
    'ITEMS',
    'Atestamos que o bem foi entregue em DATA, nas seguintes condições:',
    '(  ) Em perfeito estado',
    '(  ) Apresentado marcas de uso',
    '(  ) Apresentando defeito',
    '(  ) Faltando peças ou acessórios',
    'NOME RESPONSÁVEL',
]

function changeTitleContractDefault() {    
    document.querySelector(SELECTORS.CONTRACT_TYPE_CLT).textContent = DESCRIPTIONS.CLT
    document.querySelector(SELECTORS.CONTRACT_TYPE_ESTAG).textContent = DESCRIPTIONS.ESTAG
    document.querySelector(SELECTORS.CONTRACT_NAME).textContent = DESCRIPTIONS.NOME    
    document.querySelector(SELECTORS.IS_CNPJ).style.display = ENUM_STYLES.DISPLAY_NONE;
}

function changeTitleContractBusiness() {        
    document.querySelector(SELECTORS.CONTRACT_TYPE_PJ).textContent = DESCRIPTIONS.PJ
    document.querySelector(SELECTORS.CONTRACT_NAME).textContent = DESCRIPTIONS.COMPANY_NAME
    document.querySelector(SELECTORS.IS_CNPJ).style.display = ENUM_STYLES.DISPLAY_BLOCK;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function validateEmpty(value, name) {


    if(!value || !value.trim()) {
        throw new Error(DESCRIPTIONS.FIELD + name + DESCRIPTIONS.NOT_NULL);
    }
}

function removeInput(event) {
    event.preventDefault(); 

    CreateField.newField -= 1;  
    let removeInput = (SELECTORS.HANDLE_NEW_INPUT + CreateField.newField); 

     let element = document.getElementById(removeInput);
     element.remove();
 }

function showCnpjField() {
    document.querySelector(SELECTORS.IS_CNPJ)
    .style.display = ENUM_STYLES.DISPLAY_NONE;
}
showCnpjField(); 

const CreateField = {
    newField: 0,
    
    createInput(event) {     
        event.preventDefault();
        const labelElement = document.createElement(TAGS.LABEL);
        labelElement.innerHTML = DESCRIPTIONS.PATRIMONY;

        const div = document.getElementById(TAGS.ITEMS);
    
        const child_div = document.createElement(TAGS.DIV);
        
        let addInput = SELECTORS.HANDLE_NEW_INPUT + CreateField.newField; 
    
        child_div.setAttribute(ENUM_ATTRIBUTES.CLASS, ENUM_STYLES.ROW);
        child_div.setAttribute(ENUM_ATTRIBUTES.ID, addInput);
       
        const input = document.createElement(TAGS.INPUT);
        input.setAttribute(ENUM_ATTRIBUTES.TYPE, ENUM_ATTRIBUTES.TYPE_TEXT);
        input.setAttribute(ENUM_ATTRIBUTES.CLASS, ENUM_STYLES.PURE_INPUT_1_2);
        input.setAttribute(ENUM_ATTRIBUTES.VALUE, DESCRIPTIONS.ITEMS);
       
        const removeBtn = document.createElement('button');
        removeBtn.setAttribute(ENUM_ATTRIBUTES.CLASS, 'btnRemove');
        removeBtn.setAttribute(ENUM_ATTRIBUTES.ONCLICK, 'removeInput(event)');

        const icon = document.createElement('i');
        icon.setAttribute(ENUM_ATTRIBUTES.CLASS, 'fa fa-minus')

        removeBtn.appendChild(icon);
        child_div.append(removeBtn);
        child_div.appendChild(input);
    
        div.append(child_div);
        CreateField.newField++;
    },
}

const Form = {

    getDate(){
        var data = new Date(),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
        return diaF+"/"+mesF+"/"+anoF;
    },

    clearForm() {
            document.getElementById(SELECTORS.STREET).value=("");
            document.getElementById(SELECTORS.DISTRICT).value=("");
            document.getElementById(SELECTORS.CITY).value=("");
            document.getElementById(SELECTORS.UF).value=("");
     },

     callback(value) {
        if (!("erro" in value)) {
            document.getElementById(SELECTORS.STREET).value=(value.logradouro);
            document.getElementById(SELECTORS.DISTRICT).value=(value.bairro);
            document.getElementById(SELECTORS.CITY).value=(value.localidade);
            document.getElementById(SELECTORS.UF).value=(value.uf);
        } 
        else {
            Form.clearForm();
            alert(DESCRIPTIONS.CEP_NOT_FOUND);
        }
     },

     getAddress(valor) {
       
        let cep = valor.replace(/\D/g, '');
        if (cep != "") {
            var validacep = /^[0-9]{8}$/;

            if(validacep.test(cep)) {
                document.getElementById(SELECTORS.STREET).value="...";
                document.getElementById(SELECTORS.DISTRICT).value="...";
                document.getElementById(SELECTORS.CITY).value="...";
                document.getElementById(SELECTORS.UF).value="...";
  
                var script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=Form.callback';
                document.body.appendChild(script);

            } 
            else {

                clearForm();
                throw new Error(DESCRIPTIONS.INVALID_CEP_FORMAT);
            }
        } 
        else {
            Form.clearForm();
        }
     },

    replaceTextCollaborator(text, collaborator) {
        switch(text) {
            case 'NAME':
                return text.replace(/NAME/gi, capitalizeFirstLetter(collaborator.name));

            case 'NATIONALITY':
                return text.replace(/NATIONALITY/gi, collaborator.nationality);
           
            default: 
                return "";
        }
    },

    replaceAddressText(text, address) {
        switch(text) {
            case 'ADDRESS':
                return text.replace(/ADDRESS/gi, address.street + " " + address.number);
      
            case 'DISTRICT':
                return text.replace(/DISTRICT/gi, address.district);
           
            case 'CITY':
                return text.replace(/CITY/gi, address.city);
           
            case 'ZIP_CODE':
                return text.replace(/ZIP_CODE/gi, address.zipcode);
           
            default: 
                return "";

        }
    },

    getDocument(requerimentType, collaborator, address, itemsArray) {

        var doc = new jsPDF()
        var width = doc.internal.pageSize.getWidth();
        const center  = (width / 2);

        let document = "";
        if(requerimentType == ENUM_REQUERIMENT_TYPE.AQ) {

            ACQUISITION_TERM.forEach(text => {
                document += Form.replaceDocumentText(text, collaborator);
                document += Form.replaceAddressText(text, address);
                document += text;
            });
        }

        if(requerimentType == ENUM_REQUERIMENT_TYPE.CHG) {
           
        }

        if(requerimentType == ENUM_REQUERIMENT_TYPE.DEV) {
           
        }

    },
    
    generateDocument(contractType, requerimentType, collaborator, address, itemsArray) {
      
        if(contractType == ENUM_CONTRACT_TYPE.CLT || contractType == ENUM_CONTRACT_TYPE.ESTAG) {

            Form.getDocument(requerimentType, collaborator, address, itemsArray)

        }

        if(contractType == ENUM_CONTRACT_TYPE.PJ) {

            Form.getDocument(requerimentType, collaborator, address, itemsArray)

        }

        /*
        const documentTitle = 'TERMO DE AQUISIÇÃO DE EQUIPAMENTOS'; 
        
        doc.setFontSize(14)
        doc.setFont('Calibri (Corpo)', 'bold')
        doc.text(documentTitle, center,30, { align: 'center' })
        
        //========================= primeiro paragrafo =========================//
        const nameCapitalize = capitalizeFirstLetter(documentArray[0])

        doc.setFontSize(11);
        doc.setFont('Arial Narrow', 'normal');
        doc.text("",20,45)
       
        doc.text(30,50,'Eu, ' + nameCapitalize + ' , residente no endereço ' + addressArray[0].trim() + ', no bairro ' + addressArray[4].trim() + ', localizado na cidade\n',);
        doc.text(20,55, 'de '+addressArray[5].trim() +', no CEP '+addressArray[1].trim()+', de nacionalidade '+  documentArray[4].trim() +', exercendo a função de '+  documentArray[1].trim() +',\n')
        
        if(requerimentType == "PJ") {
            doc.text(20,60, 'inscrito no CPF sob o n° ' + documentArray[2].trim() + ', declaro e confirmo a aquisição dos materiais de trabalho cedido pela\n')
        } else if(requerimentType == "CLT" || requerimentType == "ESTAG") {
            doc.text(20,60, 'inscrito no CPF sob o n° ' + documentArray[2].trim() + ', e possuinte do N° '+  documentArray[3].trim() +' INFORMAR, declaro e confirmo a aquisição dos materiais de trabalho cedido pela\n')
        }
       
        doc.text(20,65, `Modal Gestão e Resultados Ltda, inscrita no CNPJ sob o n° 67.201.640.0001/30.\n`)
        doc.text(30,75, 'A título de empréstimo, para meu uso exclusivo, conforme determinado na lei, os equipamentos\n')
        doc.text(20,80, 'especificados neste termo de responsabilidade, comprometendo-me a mantê-los em perfeito estado de\n')
        doc.text(20,85, 'conservação, ficando ciente de que: ')
        doc.text(20, 95, '1- Se o equipamento for danificado ou inutilizado por emprego inadequado, mau uso, negligência ou\n')
        doc.text(20, 100,'extravio, a empresa me fornecerá novo equipamento e cobrará o valor de um equipamento da mesma\n')
        doc.text(20, 105,'marca ou equivalente ao da praça;')
        doc.text(20, 115, '2- Em caso de dano, inutilização ou extravio do equipamento deverei comunicar imediatamente ao setor\n')
        doc.text(20, 120, 'competente;')
        doc.text(20, 130, '3- Terminando os serviços ou no caso de rescisão do contrato de trabalho, devolverei o equipamento\n')
        doc.text(20, 135, 'completo e em perfeito estado de conservação, considerando-se o tempo do uso dele e devolução imediata\n')
        doc.text(20, 140, 'ao setor competente;')
        doc.text(20, 150, '4- Estando os equipamentos em minha posse, estarei sujeito a inspeções sem prévio aviso.\n')
        doc.text(20, 155, 'Descrição do(s) material(is):')
       

        doc.setFontSize(11)
        doc.setFont('Arial Narrow', 'bold');
        doc.text(center, 165, 'AQUISIÇÃO');

        doc.setFontSize(11)
        doc.setFont('Arial Narrow', 'normal');
        doc.text(center, 166, "")

        let textItems = "";
        console.log(items)
        items.forEach((item, idx) => {    
            textItems += item  + "\n"
        })
  

        doc.text(35, 175,textItems).setFontSize(11).setFont('Arial Narrow', 'normal');        
        doc.text(20, 200, 'Atestamos que o bem foi entregue em ' + Form.getDate() + ', \nnas seguintes condições:');
        doc.text(20, 215, '(  ) Em perfeito estado\n');
        doc.text(20, 220, '(  ) Apresentado marcas de uso\n');
        doc.text(20, 225, '(  ) Apresentando defeito\n');
        doc.text(20, 230, '(  ) Faltando peças ou acessórios\n');

        doc.text('__________________________________', center,245, { align: 'center' }).setFontSize(11).setFont('Arial Narrow', '');
        
        doc.text(20,235,"").setFontSize(14).setFont('Calibri (Corpo)', 'bold');
        doc.text('NOME RESPONSÁVEL', center, 255, { align: 'center' })
        doc.save('PDF_NAME')
        */
    },

    submit() {

        try {
            const  collaborator = {
                name: document.getElementById(SELECTORS.NAME).value,
                cpf: document.getElementById(SELECTORS.CPF).value,
                cnpj: document.getElementById(SELECTORS.CNPJ).value,
                occupation: document.getElementById(SELECTORS.OCUPATION).value,
                nationality: document.getElementById(SELECTORS.NATIONALITY).value
            }
    
            const address = {
                zipcode: document.getElementById(SELECTORS.ZIPCODE).value,
                number: document.getElementById(SELECTORS.NUMBER).value,
                street: document.getElementById(SELECTORS.STREET).value, 
                district: document.getElementById(SELECTORS.DISTRICT).value, 
                city: document.getElementById(SELECTORS.CITY).value,
                uf: document.getElementById(SELECTORS.UF).value,
            }

            console.log(collaborator)
            console.log(address)
            
            validateEmpty(collaborator.name, DESCRIPTIONS.NAME);
            validateEmpty(collaborator.cpf, DESCRIPTIONS.CPF);
            
            if(collaborator.cnpj) {
                validateEmpty(collaborator.cnpj, DESCRIPTIONS.CNPJ);
            }

            validateEmpty(collaborator.occupation, DESCRIPTIONS.OCCUPATION);
            validateEmpty(collaborator.nationality, DESCRIPTIONS.NATIONALITY);

            validateEmpty(address.zipcode, DESCRIPTIONS.ZIPCODE);
            validateEmpty(address.number, DESCRIPTIONS.NUMBER);
            validateEmpty(address.street, DESCRIPTIONS.STREET);
            validateEmpty(address.city, DESCRIPTIONS.CITY);
            validateEmpty(address.district, DESCRIPTIONS.DISTRICT);
            validateEmpty(address.uf, DESCRIPTIONS.UF);

            const elementsFormItems = document.querySelectorAll(SELECTORS.FORM_ITEMS_INPUT);
            const itemsArray = [];
            
            elementsFormItems.forEach(element => {
                validateEmpty(element.value, element.placeholder)
                itemsArray.push(element.value)
            });

            const contractType = document.getElementById(SELECTORS.CONTRACT_TYPE).value
            const requerimentType = document.getElementById(SELECTORS.REQUERIMENT_TYPE).value

            validateEmpty(contractType, DESCRIPTIONS.CONTRACT_TYPE);
            validateEmpty(requerimentType, DESCRIPTIONS.REQUERIMENT_TYPE);
         
            Form.generateDocument(contractType, requerimentType, collaborator, address, itemsArray)
          
       
        } catch(error) {
            swal(DESCRIPTIONS.WARNING, error.message)
            return false;
        }
        
    }
}