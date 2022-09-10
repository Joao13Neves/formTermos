const ENUM_PDF_NAME = {
    REQ_CLT: 'Requerimento Clt.pdf',
    REQ_PJ:  'Requerimento Pessoa Jurídica.pdf',
    REQ_ESTAG: 'Requerimento Estagio.pdf',
    DEV_CLT: 'Devolução Clt.pdf',
    DEV_PJ:  'Devolução Pessoa Jurídica.pdf',
    DEV_ESTAG: 'Devolução Estagio.pdf',
    CHG_CLT: 'Troca Clt.pdf',
    CHG_PJ:  'Troca Pessoa Jurídica.pdf',
    CHG_ESTAG: 'Troca Estagio.pdf',
} 

const ENUM_REQUERIMENT_TYPE = {
    AQ: 'Aquisição',
    CHG: 'Devolução',
    DEV: 'Troca'
}

const ENUM_CONTRACT_TYPE = {
    CLT: 'Clt',
    PJ: 'Pessoa Jurídica',
    ESTAG: 'Estagiário'
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
    CONTRACT_TYPE_ID: '.contract-type',
    CONTRACT_TYPE_CLT: '.contract-type-clt',
    CONTRACT_TYPE_PJ: '.contract-type-pj',
    CONTRACT_TYPE_ESTAG: '.contract-type-estag',
    CONTRACT_NAME: '.contract-name',
    HANDLE_NEW_INPUT: '#new-div-', 

    REQUERIMENT_TYPE: 'tipo-requerimento',
    
    ID_REQUERIMENTO_TYPE_AQUISICAO: '#tipo-requerimento-aquisicao',
    ID_REQUERIMENTO_TYPE_DEVOLUCAO: '#tipo-requerimento-troca',
    ID_REQUERIMENTO_TYPE_TROCA: '#tipo-requerimento-devolucao',
    
    ID_CONTRACT_TYPE_CLT: '#tipo-contrato-clt',
    ID_CONTRACT_TYPE_PJ: '#tipo-contrato-pj',
    ID_CONTRACT_TYPE_ESTAG: '#tipo-contrato-estag',

    
    NAME: 'name', 
    OCUPATION: 'ocupacao', 
    CPF: 'cpf', 
    CNPJ: 'cnpj', 
    NATIONALITY: 'nacionalidade', 

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
    COURIER: 'Courier',
    COURIER_BOLD:'Courier-Bold',
    COURIER_BOLDOBLIQUE:'Courier-BoldOblique',
    COURIER_OBLIQUE:'Courier-Oblique',
    HELVETICA: 'Helvetica',
    HELVETICA_BOLD: 'Helvetica-Bold',
    HELVETICA_BOLD_OBLIQUE: 'Helvetica-BoldOblique',
    HELVETICA_OBLIQUE: 'Helvetica-Oblique',
    SYMBOL: 'Symbol',
    TIMES_ROMAN: 'Times-Roman',
    TIMES_BOLD: 'Times-Bold',
    TIMES_ITALIC: 'Time-Italic',
    TIMES_BOLD_ITALIC: 'Time-BoldItalic'
}

const FONT_SIZE = {
    SIZE_11: '11',
    SIZE_14: '14',
}

const DOCUMENT_CONFIG = {
    align_center: 'center',
    align_left: 'left',
    align_rigth: 'rigth',
    assing_align: 80,

}

const FONT_STYLE = {
   BOLD: 'bold',
   NORMAL: 'normal'
}

const DOCUMENT_TOP_DESCRIPTION = {
    LINE_AQUISITION_EQUIPAMENT: `TERMO DE AQUISIÇÃO DE EQUIPAMENTOS`, 
    LINE_CHANGE_EQUIPAMENTE: `TERMO DE TROCA DE EQUIPAMENTOS`, 
    LINE_DEVOLUTION_EQUIPAMENT: `TERMO DE DEVOLUÇÃO DE EQUIPAMENTOS`, 
}

const DOCUMENT_BASEBOARD = {
    LINE_1: 'Atestamos que o bem foi entregue em DATA, nas seguintes condições:',
    LINE_2:'(  ) Em perfeito estado',
    LINE_3:'(  ) Apresentado marcas de uso',
    LINE_4:'(  ) Apresentando defeito',
    LINE_5:'(  ) Faltando peças ou acessórios',
    LINE_6:'NOME INFORMAR'
}

const ACQUISITION_TERM = {
    LINE_1: `Eu, NAME , residente no endereço ADDRESS, no bairro DISTRICT, localizado na cidade`,
    LINE_2: 'de CITY, no CEP ZIP_CODE, de nacionalidade NATIONALITY, exercendo a função de OCCUPATION',
    LINE_3: `Modal Gestão e Resultados Ltda, inscrita no CNPJ sob o n° 67.201.640.0001/30.`,
    LINE_4: `A título de empréstimo, para meu uso exclusivo, conforme determinado na lei, os equipamentos`,
    LINE_5: `especificados neste termo de responsabilidade, comprometendo-me a mantê-los em perfeito estado de`,
    LINE_6: `conservação, ficando ciente de que:`,

    LINE_7: `1- Se o equipamento for danificado ou inutilizado por emprego inadequado, mau uso, negligência ou`,
    LINE_8: `extravio, a empresa me fornecerá novo equipamento e cobrará o valor de um equipamento da mesma`,
    LINE_9: `marca ou equivalente ao da praça`,
    
    LINE_10: `2- Em caso de dano, inutilização ou extravio do equipamento deverei comunicar imediatamente ao setor`,
    LINE_11: `competente;`,
    
    LINE_12:`3- Terminando os serviços ou no caso de rescisão do contrato de trabalho, devolverei o equipamento`,
    LINE_13:`completo e em perfeito estado de conservação, considerando-se o tempo do uso dele e devolução imediata`,
    LINE_14:`ao setor competente`,
    
    LINE_15:`4- Estando os equipamentos em minha posse, estarei sujeito a inspeções sem prévio aviso.`,
    LINE_16:`Descrição do(s) material(is):`,   
    
    LINE_17 :'ITEMS',
}

const CHANGE_TERM = {
    LINE_1: `Eu, INFORMAR, residente no endereço INFORMAR, no bairro INFORMAR, localizado na cidade de`,
    LINE_2: `INFORMAR, no CEP INFORMAR, de nacionalidade INFORMAR, exercendo a função de INFORMAR,`,
    LINE_3: `inscrito no CPF sob o n° INFORMAR declaro e confirmo a troca dos materiais de trabalho cedido pela`,
    LINE_4: `Modal Gestão e Resultados Ltda, inscrita no CNPJ sob o n° 67.201.640.0001/30.`,
    LINE_5: `   A título de empréstimo, para meu uso exclusivo, conforme determinado na lei, os equipamentos`,
    LINE_6: `especificados neste termo de responsabilidade, comprometendo-me a mantê-los em perfeito estado de conservação,`,
    LINE_7: `ficando ciente de que:`,
    LINE_8: `1- Se o equipamento for danificado ou inutilizado por emprego inadequado, mau uso, negligência ou extravio, a empresa me`,
    LINE_9: `fornecerá novo equipamento e cobrará o valor de um equipamento da mesma marca ou equivalente ao da praça;`, 
    LINE_10: `2- Em caso de dano, inutilização ou extravio do equipamento deverei comunicar imediatamente ao setor competente;`,
    LINE_11: `3- Terminando os serviços ou no caso de rescisão do contrato de trabalho, devolverei o equipamento completo e em perfeito estado`,
    LINE_12: `de conservação, considerando-se o tempo do uso dele e devolução imediata ao setor competente;`,
    LINE_13: `4- Estando os equipamentos em minha posse, estarei sujeito a inspeções sem prévio aviso.`,
    LINE_14: `Descrição do(s) material(is):`,
    LINE_15: `AQUISIÇÃO`,
    LINE_16: `DEVOLUÇÃO`,
    LINE_17: 'Atestamos que o bem foi entregue em INFORMAR, nas seguintes condições:',
    LINE_18: '',
    LINE_19: '',
    LINE_20: '',
}

const DEVOLUTION_TERM = {
    LINE_1: `Eu, INFORMAR, residente no endereço INFORMAR, no bairro INFORMAR, localizado na cidade de`,
    LINE_2: `INFORMAR, no CEP INFORMAR, de nacionalidade INFORMAR, exercendo a função de INFORMAR,`,
    LINE_3: `inscrito no CPF sob o n° INFORMAR e proprietário do CNPJ inscrito sob n° INFORMAR, declaro e confirmo`,
    LINE_4: `a devolução do material de trabalho cedido pela Modal Gestão e Resultados Ltda, inscrita no CNPJ sob o`,
    LINE_5: `n° 67.201.640.0001/30.`,
    LINE_6: `Descrição do(s) material(is):`,
    LINE_7: `DEVOLUÇÃO`,
}


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

function getContractType() {
    if (document.querySelector(SELECTORS.ID_CONTRACT_TYPE_CLT).checked) {
        return ENUM_CONTRACT_TYPE.CLT;
    } else if (document.querySelector(SELECTORS.ID_CONTRACT_TYPE_PJ).checked) {
        return ENUM_CONTRACT_TYPE.PJ;
    } else if (document.querySelector(SELECTORS.ID_CONTRACT_TYPE_ESTAG).checked) {
        return ENUM_CONTRACT_TYPE.ESTAG;
    } else {
        return null
    }
}

function getRequerimentType() {
    if (document.querySelector(SELECTORS.ID_REQUERIMENTO_TYPE_AQUISICAO).checked) {
        return ENUM_REQUERIMENT_TYPE.AQ;
    } else if (document.querySelector(SELECTORS.ID_REQUERIMENTO_TYPE_TROCA).checked) {
        return ENUM_REQUERIMENT_TYPE.CHG;
    } else if (document.querySelector(SELECTORS.ID_REQUERIMENTO_TYPE_DEVOLUCAO).checked) {
        return ENUM_REQUERIMENT_TYPE.DEV;
    } else {
        return null
    }
}


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

    makeAquisitionDocument(collaborator, address, itemsArray, ENUM_PDF_NAME,DOCUMENT_TOP_DESCRIPTION) {
        var doc = new jsPDF()
        var width = doc.internal.pageSize.getWidth();
        const center  = (width / 2);

        console.log(ENUM_PDF_NAME)
        doc.setFontSize(FONT_SIZE.SIZE_14);
        doc.setFont(FONT_FAMILY.TIMES_ROMAN, FONT_STYLE.BOLD)
        doc.text(DOCUMENT_TOP_DESCRIPTION, center,20, {align: DOCUMENT_CONFIG.align_center}); 


        doc.setFontSize(FONT_SIZE.SIZE_11);
        doc.setFont(FONT_FAMILY.TIMES_ROMAN, FONT_STYLE.NORMAL)
        doc.text(ACQUISITION_TERM.LINE_1, 35,45, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_2, 20,50, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_3, 20,55, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_4, 20,60, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_5, 20,65, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_6, 20,70, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_7, 20,80, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_8, 20,85, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_9, 20,90, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_10, 20,100, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_11, 20,105, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_12, 20,115, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_13, 20,120, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_14, 20,125, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_15, 20,135, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_16, 20,140, {align: DOCUMENT_CONFIG.align_left});

        doc.setFont(FONT_FAMILY.TIMES_ROMAN, FONT_STYLE.BOLD)
        doc.text(ACQUISITION_TERM.LINE_17, center,155, {align: DOCUMENT_CONFIG.align_left});

        doc.setFont(FONT_FAMILY.TIMES_ROMAN, FONT_STYLE.NORMAL)
        let nextLine = 165;
        itemsArray.forEach(item => {
            doc.text(item, 20,nextLine, {align: DOCUMENT_CONFIG.align_left});
            nextLine += 5;
        })
        
        const assign = (nextLine + 20);
        const responseName = (assign + 10);

        doc.setFontSize(FONT_SIZE.SIZE_11)
        doc.setFont(FONT_FAMILY.TIMES_ROMAN, FONT_STYLE.BOLD)
        doc.text('__________________________________', DOCUMENT_CONFIG.assing_align,assign, { align: DOCUMENT_CONFIG.align_left});
        

        doc.setFontSize(14)
        doc.setFont(FONT_FAMILY.TIMES_ROMAN, FONT_STYLE.BOLD);
        doc.text(DOCUMENT_BASEBOARD.LINE_6, (DOCUMENT_CONFIG.assing_align + 5), responseName, {align: DOCUMENT_CONFIG.align_left})

        doc.save(ENUM_PDF_NAME);
    },

    makeChangeDocument(collaborator, address, itemsArray, ENUM_PDF_NAME,DOCUMENT_TOP_DESCRIPTION) {
        console.log(itemsArray)
        var doc = new jsPDF()
        var width = doc.internal.pageSize.getWidth();
        const center  = (width / 2);

        console.log(ENUM_PDF_NAME)
        doc.setFontSize(FONT_SIZE.SIZE_14);
        doc.setFont(FONT_FAMILY.TIMES_ROMAN, FONT_STYLE.BOLD)
        doc.text(DOCUMENT_TOP_DESCRIPTION, 60,10, {align: DOCUMENT_CONFIG.align_left}); 


        doc.setFontSize(FONT_SIZE.SIZE_11);
        doc.setFont(FONT_FAMILY.TIMES_ROMAN, FONT_STYLE.NORMAL)
        doc.text(ACQUISITION_TERM.LINE_1, 35,45, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_2, 20,50, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_3, 20,55, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_4, 20,60, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_5, 20,65, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_6, 20,70, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_7, 20,90, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_8, 20,95, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_9, 20,100, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_10, 20,110, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_11, 20,115, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_12, 20,135, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_13, 20,140, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_14, 20,145, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_15, 20,165, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_16, 20,170, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_17, 20,190, {align: DOCUMENT_CONFIG.align_left});

        let nextLine = 205;
        itemsArray.forEach(item => {
            doc.text(item, 20,nextLine, {align: DOCUMENT_CONFIG.align_left});
            nextLine += 5;
        })
        
        const assign = (nextLine + 20);
        const responseName = (assign + 10);

        doc.setFontSize(FONT_SIZE.SIZE_11)
        doc.setFont(FONT_FAMILY.TIMES_ROMAN, '');
        doc.text('__________________________________', DOCUMENT_CONFIG.assing_align,assign, { align: DOCUMENT_CONFIG.align_left});
        

        doc.setFontSize(14)
        doc.setFont(FONT_FAMILY.TIMES_ROMAN, FONT_STYLE.BOLD);
        doc.text(DOCUMENT_BASEBOARD.LINE_6, DOCUMENT_CONFIG.assing_align, responseName, {align: DOCUMENT_CONFIG.align_left})

        doc.save(ENUM_PDF_NAME);
    },

    makeDevolutionDocument(collaborator, address, itemsArray, ENUM_PDF_NAME,DOCUMENT_TOP_DESCRIPTION) {
        var doc = new jsPDF()
        var width = doc.internal.pageSize.getWidth();
        const center  = (width / 2);

        console.log(ENUM_PDF_NAME)
        doc.setFontSize(FONT_SIZE.SIZE_14);
        doc.setFont(FONT_FAMILY.TIMES_ROMAN, FONT_STYLE.BOLD)
        doc.text(DOCUMENT_TOP_DESCRIPTION, 60,10, {align: DOCUMENT_CONFIG.align_left}); 


        doc.setFontSize(FONT_SIZE.SIZE_11);
        doc.setFont(FONT_FAMILY.TIMES_ROMAN, FONT_STYLE.NORMAL)
        doc.text(ACQUISITION_TERM.LINE_1, 35,45, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_2, 20,50, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_3, 20,55, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_4, 20,60, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_5, 20,65, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_6, 20,70, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_7, 20,90, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_8, 20,95, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_9, 20,100, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_10, 20,110, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_11, 20,115, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_12, 20,135, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_13, 20,140, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_14, 20,145, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_15, 20,165, {align: DOCUMENT_CONFIG.align_left});
        doc.text(ACQUISITION_TERM.LINE_16, 20,170, {align: DOCUMENT_CONFIG.align_left});

        doc.text(ACQUISITION_TERM.LINE_17, 20,190, {align: DOCUMENT_CONFIG.align_left});

        let nextLine = 205;
        itemsArray.forEach(item => {
            doc.text(item, 20,nextLine, {align: DOCUMENT_CONFIG.align_left});
            nextLine += 5;
        })
        
        const assign = (nextLine + 20);
        const responseName = (assign + 10);

        doc.setFontSize(FONT_SIZE.SIZE_11)
        doc.setFont(FONT_FAMILY.TIMES_ROMAN, '');
        doc.text('__________________________________', DOCUMENT_CONFIG.assing_align,assign, { align: DOCUMENT_CONFIG.align_left});
        

        doc.setFontSize(14)
        doc.setFont(FONT_FAMILY.TIMES_ROMAN, FONT_STYLE.BOLD);
        doc.text(DOCUMENT_BASEBOARD.LINE_6, DOCUMENT_CONFIG.assing_align, responseName, {align: DOCUMENT_CONFIG.align_left})

        doc.save(ENUM_PDF_NAME);
    },

    generateDocument(contractType, requerimentType, collaborator, address, itemsArray) {
     
        if(contractType == ENUM_CONTRACT_TYPE.CLT) {

            if(requerimentType === ENUM_REQUERIMENT_TYPE.AQ) {
                Form.makeAquisitionDocument(
                    collaborator, 
                    address, 
                    itemsArray, 
                    ENUM_PDF_NAME.REQ_CLT, 
                    DOCUMENT_TOP_DESCRIPTION.LINE_AQUISITION_EQUIPAMENT
                );
            }

            if(requerimentType === ENUM_REQUERIMENT_TYPE.CHG) {
                Form.makeChangeDocument(
                    collaborator, 
                    address, 
                    itemsArray, 
                    ENUM_PDF_NAME.CHG_CLT,
                    DOCUMENT_TOP_DESCRIPTION.LINE_CHANGE_EQUIPAMENTE
                );
            }

            if(requerimentType === ENUM_REQUERIMENT_TYPE.DEV) {
                Form.makeDevolutionDocument(
                    collaborator, 
                    address, 
                    itemsArray, 
                    ENUM_PDF_NAME.DEV_CLT,
                    DOCUMENT_TOP_DESCRIPTION.LINE_DEVOLUTION_EQUIPAMENT
                );
            }

        }

        if(contractType == ENUM_CONTRACT_TYPE.PJ) {

            if(requerimentType === ENUM_REQUERIMENT_TYPE.AQ) {
                Form.makeAquisitionDocument(
                    collaborator, 
                    address, 
                    itemsArray, 
                    ENUM_PDF_NAME.REQ_PJ,
                    DOCUMENT_TOP_DESCRIPTION.LINE_AQUISITION_EQUIPAMENT
                );
            }

            if(requerimentType === ENUM_REQUERIMENT_TYPE.CHG) {
                Form.makeChangeDocumentDocument(
                    collaborator, 
                    address, 
                    itemsArray, 
                    ENUM_PDF_NAME.CHG_PJ,
                    DOCUMENT_TOP_DESCRIPTION.LINE_CHANGE_EQUIPAMENTE
                );
            }

            if(requerimentType === ENUM_REQUERIMENT_TYPE.DEV) {
                Form.makeDevolutionDocument(
                    collaborator, 
                    address, 
                    itemsArray, 
                    ENUM_PDF_NAME.DEV_PJ, 
                    DOCUMENT_TOP_DESCRIPTION.LINE_DEVOLUTION_EQUIPAMENT
                );
            }

        }

        if(contractType == ENUM_CONTRACT_TYPE.ESTAG) {

            if(requerimentType === ENUM_REQUERIMENT_TYPE.AQ) {
                Form.makeAquisitionDocument(
                    collaborator, 
                    address, 
                    itemsArray, 
                    ENUM_PDF_NAME.REQ_ESTAG,
                    DOCUMENT_TOP_DESCRIPTION.LINE_AQUISITION_EQUIPAMENT
                );
            }

            if(requerimentType === ENUM_REQUERIMENT_TYPE.CHG) {
                Form.makeChangeDocument(
                    collaborator, 
                    address, 
                    itemsArray, 
                    ENUM_PDF_NAME.CHG_ESTAG, 
                    DOCUMENT_TOP_DESCRIPTION.LINE_CHANGE_EQUIPAMENTE
                );
            }

            if(requerimentType === ENUM_REQUERIMENT_TYPE.DEV) {
                Form.makeDevolutionDocument(
                    collaborator, 
                    address, 
                    itemsArray, 
                    ENUM_PDF_NAME.DEV_ESTAG, 
                    DOCUMENT_TOP_DESCRIPTION.LINE_DEVOLUTION_EQUIPAMENT
                );
            }

        } 
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

            let contractType = getContractType()
            let requerimentType = getRequerimentType()

            console.log(contractType)
            console.log(requerimentType)
            
            validateEmpty(contractType, DESCRIPTIONS.CONTRACT_TYPE);
            validateEmpty(requerimentType, DESCRIPTIONS.REQUERIMENT_TYPE);
        

            Form.generateDocument(contractType, requerimentType, collaborator, address, itemsArray)
          
       
        } catch(error) {
            swal(DESCRIPTIONS.WARNING, error.message)
            return false;
        }
        
    }
}