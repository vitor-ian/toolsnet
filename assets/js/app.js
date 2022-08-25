const matematica = ['MMC','MDC','Números Romanos','Porcentagem','Regra de 3 Simples', 'Resto da Divisão','Contador de Dias','Área do Círculo','Área do Quadrado','Área do Retângulo','Área do Triângulo','Área do Pentágono','Área do Hexágono', 'Área do Polígono','Área do Losango','Área do Trapézio','Área do Paralelogramo','Área da Elípse','Área da Coroa Circular','Área do Setor Circular'];
const geradores = ['Border Radius','Box Shadow','Animation','Nomes','Nicks','Senha Forte','Lorem Ipsum','Gerador Link WhatsApp'];
const outros = ['Corretor Ortográfico','Ordem Alfabética','Contador de Caracteres','Letras Personalizadas','Converter Maiúscula e Minuscula','Copiar Emojs','Sorteador de Números','Roleta da Sorte'];

function btnVer() {
    const btnVer = document.getElementById("ver-mais");

    if(btnVer.ariaExpanded == "true"){
        btnVer.innerHTML="Ver Menos";
    }else{
        btnVer.innerHTML="Ver Mais";
    }
};

function saveIdPage(idPage){
    let lastVisit = JSON.parse(localStorage.getItem('last_visit'));
    
    if(lastVisit == null){
        document.getElementById("tl-acessados-recente").innerHTML="Você pode gostar";
        lastVisit = ['MMC','Copiar Emojs','Números Romanos','Senha Forte','Contador de Caracteres','Regra de 3 Simples','Animation','Roleta da Sorte'];

        localStorage.setItem('last_visit', JSON.stringify(lastVisit));
    }
    if(lastVisit.indexOf(idPage) < 0 && idPage !== undefined){
        lastVisit.unshift(idPage);
        lastVisit.pop();
        localStorage.setItem('last_visit', JSON.stringify(lastVisit));
    }
}

function acessadosRecente(){
    const itens =JSON.parse(localStorage.getItem('last_visit'));
    if(itens == null || itens == undefined){
        saveIdPage();
    }
    
    let categoria = "";
    let icon = "";

    $(itens).each(function(index, value){
        //verifica a categoria
        if(matematica.indexOf(value) > -1){
            categoria = "matematica";
            icon = "<div class='icon-item icon-mat mb-4'><i class='bi bi-calculator-fill'></i></div>";
        } else if(geradores.indexOf(value) > -1){
            categoria = "geradores";
            icon = "<div class='icon-item icon-ger mb-4'><i class='bi bi-hammer'></i></div>";
        } else if(outros.indexOf(value) > -1){
            categoria = "outros";
            icon = "<div class='icon-item icon-out mb-4'><i class='bi bi-grid-fill'></i></div>";
        }else{
            console.log("arruma logo essa lista");
            icon = "<div class='icon-item icon-out mb-4'><i class='bi bi-question-octagon-fill'></i></div>";
        }

        if(index < 4){
            $("<a class='item-dash item-ac-rc' href='./" + categoria + "/" + value + ".html'>" + icon + "<span class='title-item'>" + value + "</span></a>").appendTo("#ac-rc-1");
            
        }else{
            $("<a class='item-dash item-ac-rc' href='./" + categoria + "/" + value + ".html'>" + icon + "<span class='title-item'>" + value + "</span></a>").appendTo("#ac-rc-2");
        }
    });
}

function loadItens(categoria, itens){
    let icon = "";

    switch(categoria){
        case "matematica":
            icon = "<div class='icon-item icon-mat mb-4'><i class='bi bi-calculator-fill'></i></div>";
            break;
        case "geradores":
            icon = "<div class='icon-item icon-ger mb-4'><i class='bi bi-hammer'></i></div>";
            break;
        case "outros":
            icon = "<div class='icon-item icon-out mb-4'><i class='bi bi-grid-fill'></i></div>";
            break;
        default:
            icon = "<div class='icon-item icon-out mb-4'><i class='bi bi-question-octagon-fill'></i></div>";
    }
    
    $(itens).each(function(index, value){
        $("<a class='item-dash item-ac-rc' href='./" + categoria + "/" + value + ".html'>" + icon + "<span class='title-item'>" + value + "</span></a>").appendTo("#itens-cat");
    });
}

