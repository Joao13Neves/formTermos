
const CreateField = {
    createInput(event) {     
        event.preventDefault();

       
        const labelElement = document.createElement("label");
        labelElement.innerHTML = 'Patrimônio';

        const div = document.getElementById("items");
    
        const child_div = document.createElement("div");
        child_div.setAttribute("class", "pure-u-1 pure-u-md-1-3 mg-t-b-10");
    
        const input = document.createElement("input");
        input.setAttribute("type", 'text');
        input.setAttribute("class", "pure-input-1");
        input.setAttribute("value", "-INFORME: Nome/número do equipamento");
        
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

    dataAtualFormatada(){
        var data = new Date(),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
        return diaF+"/"+mesF+"/"+anoF;
    },

    generateAcquisitionDocumentCLT(documentArray, addressArray, items) {
      
        var doc = new jsPDF()
        var width = doc.internal.pageSize.getWidth();

        const center  = (width / 2);

        const documentTitle = 'TERMO DE AQUISIÇÃO DE EQUIPAMENTOS'; 
        
        doc.setFontSize(14)
        doc.setFont('Calibri (Corpo)', 'bold')
        doc.text(documentTitle, center,30, { align: 'center' })
        

      
        //========================= primeiro paragrafo =========================//
        const nameCapitalize = Form.capitalizeFirstLetter(documentArray[0])

        doc.setFontSize(11);
        doc.setFont('Arial Narrow', 'normal');
        doc.text("",20,45)
       
        doc.text(30,50,'Eu, ' + nameCapitalize + ' , residente no endereço ' + addressArray[0].trim() + ', no bairro ' + addressArray[4].trim() + ', localizado na cidade\n',);
        doc.text(20,55, 'de '+addressArray[5].trim() +', no CEP '+addressArray[1].trim()+', de nacionalidade INFORMAR, exercendo a função de INFORMAR,\n')
        doc.text(20,60, 'inscrito no CPF sob o n° ' + documentArray[1].trim() + ', declaro e confirmo a aquisição dos materiais de trabalho cedido pela\n')
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
        doc.text(20, 200, 'Atestamos que o bem foi entregue em ' + Form.dataAtualFormatada() + ', \nnas seguintes condições:');
        doc.text(20, 215, '(  ) Em perfeito estado\n');
        doc.text(20, 220, '(  ) Apresentado marcas de uso\n');
        doc.text(20, 225, '(  ) Apresentando defeito\n');
        doc.text(20, 230, '(  ) Faltando peças ou acessórios\n');

        doc.text('__________________________________', center,245, { align: 'center' }).setFontSize(11).setFont('Arial Narrow', '');
        
        doc.text(20,235,"").setFontSize(14).setFont('Calibri (Corpo)', 'bold');
        doc.text('NOME RESPONSÁVEL', center, 255, { align: 'center' })
        doc.save('Requerimento-aquisição-clt-estag.pdf')
    },

    prepareDocument(contractType, requerimentType, documentArray, addressArray, items) {
        if(contractType == "CLT" && requerimentType == "AQ") {
            Form.generateAcquisitionDocumentCLT(documentArray, addressArray, items)
        }  
    },


    clearForm() {
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('ibge').value=("");
     },

     callback(value) {
        if (!("erro" in value)) {
            document.getElementById('rua').value=(value.logradouro);
            document.getElementById('bairro').value=(value.bairro);
            document.getElementById('cidade').value=(value.localidade);
            document.getElementById('uf').value=(value.uf);
        } 
        else {
            Form.clearForm();
            alert("CEP não encontrado.");
        }
    },

     getAddress(valor) {
       
        let cep = valor.replace(/\D/g, '');
        if (cep != "") {
            var validacep = /^[0-9]{8}$/;

            if(validacep.test(cep)) {
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";
  
                var script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=Form.callback';
                document.body.appendChild(script);

            } 
            else {

                clearForm();
                throw new Error("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    },
    
    submit() {
        const elementsFormDocument = document.querySelectorAll('#form-document input');
        const elementsFormAdress = document.querySelectorAll('#form-address input');
        const elementsFormItems = document.querySelectorAll('#form-items input');

        try {

            const documentArray = [];
            const addressArray = [];
            const items = [];

            elementsFormDocument.forEach(element => {
                Form.validateEmpty(element.value, element.placeholder)
                documentArray.push(element.value)
            });

            elementsFormAdress.forEach(element => {
                Form.validateEmpty(element.value, element.placeholder)
                addressArray.push(element.value)
            });

            elementsFormItems.forEach(element => {
                Form.validateEmpty(element.value, element.placeholder)
                items.push(element.value)
            });

            const contractType = document.getElementById('tipo-contrato').value
            const requerimentType = document.getElementById('tipo-requerimento').value

            Form.validateEmpty(contractType, 'Tipo de contrato')
            Form.validateEmpty(requerimentType, 'Tipo de requerimento')
         
            Form.prepareDocument(contractType, requerimentType, documentArray, addressArray, items)
       
        } catch(error) {
            swal("Atenção!", error.message)
            return false;
        }
        
    }
}