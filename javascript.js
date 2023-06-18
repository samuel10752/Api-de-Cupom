var cupons = {};
function adicionarCupom() {
    var codigo = $('#novo-cupom-codigo').val();
    var desconto = $('#novo-cupom-desconto').val();

    if (!codigo || !desconto) {
        swal({
            title: "Campos Vazios",
            text: "Por favor, preencha todos os campos.",
            icon: "warning",
            timer: 2000
        }).then(function () {
            $('#adicionar-cupom').hide();
            $('#overlay').hide();
            $('#novo-cupom-codigo').val('');
            $('#novo-cupom-desconto').val('');
        });
        return;
    }

    cupons[codigo] = desconto;
    $('#adicionar-cupom').hide();
    $('#overlay').hide();
    localStorage.setItem('cupons', JSON.stringify(cupons));

    swal({
        title: "Cupom Adicionado",
        text: "O cupom foi adicionado com sucesso!",
        icon: "success",
        timer: 2000
    }).then(function () {
        $('#novo-cupom-codigo').val('');
        $('#novo-cupom-desconto').val('');
    });
}

function validarCupom() {
    var codigo = $('#codigo-cupom').val();
    var desconto = cupons[codigo];

    if (!codigo) {
        swal({
            title: "Cupom Inválido",
            text: "Por favor, digite um código de cupom válido.",
            icon: "error",
            timer: 2000
        }).then(function () {
            $('#pop-up-cupom').hide();
            $('#overlay').hide();
            $('#codigo-cupom').val('');
        });
        return;
    }

    if (desconto) {
        var total = parseFloat($('#total').text());
        var novoTotal = total - (total * desconto / 100);

        $('#total').text(novoTotal.toFixed(2));
        $('#pop-up-cupom').hide();
        cupomUsado = true;

        swal({
            title: "Desconto Aplicado",
            text: "Desconto aplicado com sucesso!",
            icon: "success",
            timer: 2000
        }).then(function () {
            $('#pop-up-cupom').hide();
            $('#overlay').hide();
            $('#codigo-cupom').val('');
        });
    } else {
        swal({
            title: "Cupom Inválido",
            text: "Cupom inválido ou expirado.",
            icon: "error",
            timer: 2000
        }).then(function () {
            $('#pop-up-cupom').hide();
            $('#overlay').hide();
            $('#codigo-cupom').val('');
        });
    }
}


function mostrarCupons() {
    var cuponsLista = $('#cupons-lista');
    cuponsLista.empty();

    for (var codigo in cupons) {
        var cupomItem = $('<li><span>' + codigo + '</span> (' + cupons[codigo] + '%) <button class="excluir-cupom">Excluir</button></li>');
        cupomItem.find('.excluir-cupom').click({ codigo: codigo }, excluirCupomPopUp);
        cuponsLista.append(cupomItem);
    }

    if (Object.keys(cupons).length > 0) {
        $('#lista-cupons').show();
    } else {
        swal({
            title: "Nenhum Cupom",
            text: "Nenhum cupom armazenado.",
            icon: "warning",
            timer: 2000
        }).then(function () {
            $('#overlay').hide();
        });
    }

    setTimeout(function () {
        $('#overlay').hide();
    }, 2000);
}

function excluirCupomPopUp(event) {
    var codigo = event.data.codigo;

    swal({
        title: "Excluir Cupom",
        text: "Deseja excluir o cupom " + codigo + "?",
        icon: "warning",
        buttons: {
            cancel: "Cancelar",
            confirm: "Excluir"
        },
        dangerMode: true
    }).then(function (confirm) {
        if (confirm) {
            $('#lista-cupons').hide();
            $('#overlay').hide();
            excluirCupom(codigo);
        }
    });
}


function excluirCupom(codigo) {
    delete cupons[codigo];
    mostrarCupons();
    localStorage.setItem('cupons', JSON.stringify(cupons));

    swal({
        title: "Cupom Excluído",
        text: "O cupom foi excluído com sucesso!",
        icon: "success",
        timer: 2000
    }).then(function () {
        $('#lista-cupons').hide();
        $('#overlay').hide();
    });
}

var cupomUsado = false;
var cupons = JSON.parse(localStorage.getItem('cupons')) || {};

// Exemplo de elemento de total que será atualizado
var totalElement = document.getElementById('total');
totalElement.textContent = '100.00';