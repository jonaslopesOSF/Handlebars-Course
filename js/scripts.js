function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([}&#]*)|&|#|$)"),
        results = regex.exec(url);
    if(!results) return null;
    if(!results[2]) return '';
    return decodeURI(results[2].replace(/\+/g, " "));
}

var cast = {
    "characters" : [
        {
            "id": 0,
            "name": "Jon Snow",
            "shortCode": "jon-snow",
            "actor" : "Kit Harrington",
            "house": {
                "name": "Stark",
                "seat": "Winterfell",
                "words": "Winter is coming",
                "phone": 5551234564
            },
            "location": "The Wall",
            "bio": "Jon Snow, nascido Aegon Targaryen, é o filho de Rhaegar Targaryen e Lyanna Stark, fez sua primeira aparição em 'O Inverno está Chegando'. Quando Eddard Stark voltou para casa após a Rebelião de Robert, ele apresentou Jon como seu filho bastardo, nunca dizendo a ninguém, nem mesmo a Jon, quem era sua mãe. Eddard tomou a incomum decisão de criar Jon em seu castelo em Winterfell junto de seus filhos legítimos - causando tensão com sua esposa Catelyn Tully."
        },
        {
            "id": 1,
            "name": "Tyrion Lannister",
            "shortCode": "tyrion-lannister",
            "actor" : "Peter Dinklage",
            "house": {
                "name": "Lannister",
                "seat": "Casterly Rock",
                "words": "Hear me roar",
                "phone": 5551234564 
            },
            "location": "Mereen",
            "bio": "Jon Snow, nascido Aegon Targaryen, é o filho de Rhaegar Targaryen e Lyanna Stark, fez sua primeira aparição em 'O Inverno está Chegando'. Quando Eddard Stark voltou para casa após a Rebelião de Robert, ele apresentou Jon como seu filho bastardo, nunca dizendo a ninguém, nem mesmo a Jon, quem era sua mãe. Eddard tomou a incomum decisão de criar Jon em seu castelo em Winterfell junto de seus filhos legítimos - causando tensão com sua esposa Catelyn Tully."
        },
        {
            "id": 2,
            "name": "Victor Clegane",
            "shortCode": "jon-snow",
            "actor" : "Kit Harrington",
            "house": {
                "name": "Clegane",
                "seat": "",
                "words": ""
            },
            "location": false,
            "bio": "Jon Snow, nascido Aegon Targaryen, é o filho de Rhaegar Targaryen e Lyanna Stark, fez sua primeira aparição em 'O Inverno está Chegando'. Quando Eddard Stark voltou para casa após a Rebelião de Robert, ele apresentou Jon como seu filho bastardo, nunca dizendo a ninguém, nem mesmo a Jon, quem era sua mãe. Eddard tomou a incomum decisão de criar Jon em seu castelo em Winterfell junto de seus filhos legítimos - causando tensão com sua esposa Catelyn Tully."
        },
        {
            "id": 3,
            "name": "Jon Snow",
            "shortCode": "jon-snow",
            "actor" : "Kit Harrington",
            "house": {
                "name": "Stark",
                "seat": "Winterfell",
                "words": "Winter is coming" ,
                "phone": 5551234564
            },
            "location": "The Wall",
            "bio": "Jon Snow, nascido Aegon Targaryen, é o filho de Rhaegar Targaryen e Lyanna Stark, fez sua primeira aparição em 'O Inverno está Chegando'. Quando Eddard Stark voltou para casa após a Rebelião de Robert, ele apresentou Jon como seu filho bastardo, nunca dizendo a ninguém, nem mesmo a Jon, quem era sua mãe. Eddard tomou a incomum decisão de criar Jon em seu castelo em Winterfell junto de seus filhos legítimos - causando tensão com sua esposa Catelyn Tully."
        },
    ]
}

// custom helpers expresssions
Handlebars.registerHelper("formatName", function(name, seat){
    return new Handlebars.SafeString(
        "Hello my name is <strong>" + name + "</strong> and I live at <strong>" + seat + "</strong>"
    );
});
Handlebars.registerHelper("formatPhoneNumber", function(phoneNumber){
    if(phoneNumber){
        var phone = phoneNumber.toString();
        return "(" + phone.substr(0, 3) + ")" + phone.substr(3, 3) + "-" + phone.substr(6,4);
    }
});

Handlebars.registerHelper("makeBold", function(options){
    return new Handlebars.SafeString("<strong>"+options.fn(this)+"</strong>");
});
Handlebars.registerHelper("toUpper", function(options){
    return options.fn(this).toUpperCase();
});

$(document).ready(function(){
    var characterTemplate = $("#character-template").html();

    var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
    var $characterList = $(".character-list-container");

    /*$.ajax("./data/cast.json").done(function(cast) {
        console.log(cast);
    });*/
    var characterId = getParameterByName("id");
    console.log("characterId" , characterId);

    if($("body").hasClass("page-cast-details")){
        $characterList.html(compiledCharacterTemplate(cast.characters[0]));
    }else{
        $characterList.html(compiledCharacterTemplate(cast));
    }

    $(".character-list-container").on("click", ".view-details", function(e){
        //e.preventDefault();
        console.log("Button clicked");
    });
});