class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
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
        document.getElementById("CountryFlag").src = this.flag;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "blue", "white"], "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/220px-Flag_of_the_United_States.svg.png");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/255px-Flag_of_Mexico.svg.png");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/255px-Flag_of_Algeria.svg.png");
let japan = new Country("Japan", "Japanese", "Kon'nichiwa sekai \n こんにちは世界", ["red", "black", "white"],"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/255px-Flag_of_Japan.svg.png");
let germany = new Country("Germany", "German", "Hallo Welt", ["black", "red", "gold"],"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png");


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
