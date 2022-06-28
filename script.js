/*Função para validação de formulário; chamada através do Evento 'onclick' na página de Contato*/

function validateForm() {
    //Validar nome
    var nome = contato_form.nome.value;
    if(nome == "") {
        alert("Digitar nome no campo correspondente");
        return false;
    }

    //Validar e-mail
    var email = contato_form.email.value;
    if(email == "") {
        alert("Iformar e-mail no campo correspondende");
        return false;
    }

    //Validar telefone
    var telefone = contato_form.tel.value;
    if(telefone == "") {
        alert("Informa número de telefone");
        return false;
    }

    //Validar preenchimento de gênero
    var genOptions = contato_form.genero.length;
    var option = null;
    for(var i = 0; i < genOptions; i++) {
        if(contato_form.genero[i].checked == true) {
            option = contato_form.genero[i].value;
        }
    }

    if(option == null) {
        alert("Necessário preencher o campo gênero");
        return false;
    }

    //Validar select
    var questionario = contato_form.quest.selectedIndex;
    if(questionario == "") {
        alert("Selecionar como conheceu a revista");
        return false;
    }
 

    //Validação do campo de mensagem
    var mensagem = contato_form.message.value;
    if(mensagem == "") {
        alert("Digitar mensagem no campo correspondente");
        return false;
    }

    contato_form.submit();
} /*== $0*/

/*Funções para alterar as imagens que estão no index. As alterações serão feita conforme o cursor estar nelas ou não. Obs.: Tentei, de todas as formas que consegui encontrar na internet, fazer funcionar com if, mas simplesmente não consegui, deve ter faltado algo que eu não consegui encontrar. Por fim, acabei optando por fazer uma a uma.*/

//Tais funções são chamadas através dos Eventos 'onmouseenter' e 'onmouseout'

function changeImg01(img) {
    img = document.getElementById("drive").src=img;
}   

function changeImg02(img) {
    img = document.getElementById("medida").src=img;
}

function changeImg03(img) {
    img = document.getElementById("redencao").src=img;
}

function changeImg04(img) {
    img = document.getElementById("totoro").src=img;
}

function changeImg05(img) {
    img = document.getElementById("lotte").src=img;
}

function changeImg06(img) {
    img = document.getElementById("wong").src=img;
}

function changeImg07(img) {
    img = document.getElementById("cannes").src=img;
}