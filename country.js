class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }

    DisplayColors(){
        let color1 = document.getElementById("Color1");
        let color2 = document.getElementById("Color2");
        let color3 = document.getElementById("Color3");
        color1.style.backgroundColor = this.colors[0];
        color2.style.backgroundColor = this.colors[1];
        color3.style.backgroundColor = this.colors[2];
        document.getElementById("CountryName").innerText = this.name;
        document.getElementById("OfficialLanguage").innerText = this.lang;
        document.getElementById("HelloWorld").innerText = this.greeting;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "blue", "white"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);
let japan = new Country("Japan", "Japanese", "Kon'nichiwa sekai \n こんにちは世界", ["red", "black", "white"]);
let germany = new Country("Germany", "German", "Hallo Welt", ["black", "red", "gold"]);


function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Japan"){
        country = japan;
    }
    else if (input === "Germany"){
        country = germany;
    }

    country.DisplayColors();
    
}
