function btnVer() {
    const btnVer = document.getElementById("ver-mais");

    if(btnVer.ariaExpanded == "true"){
        btnVer.innerHTML="Ver Menos";
    }else{
        btnVer.innerHTML="Ver Mais";
    }
};

function saveIdPage(){
    const idPage = localStorage.getItem("last_page");
    let lastVisit =JSON.parse(localStorage.getItem('last_visit'));
    if(lastVisit == null){
        lastVisit = ['mmc','mdc','reg3','tt','5','6','7','8'];
    }
    if(lastVisit.indexOf(idPage) < 0){
        if(idPage !== null){
            lastVisit.unshift(idPage);
            lastVisit.pop();
        }
        localStorage.setItem('last_visit', JSON.stringify(lastVisit));
    }

    acessadosRecente();
}

function acessadosRecente(){
    const itens =JSON.parse(localStorage.getItem('last_visit'));
    const matematica = ['mmc','mdc'];
    const geradores = ['tt','ss'];
    const outros = ['reg3','cc'];
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