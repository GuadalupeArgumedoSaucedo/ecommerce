"use strict"



const dropdown = document.getElementById('productsDropdown');
const infoDisplay = document.getElementById("inStockInfo");

const categories = ["Collectibles", "Instruments", "Music", "Cards", "Books", "Video Games"];

categories.forEach(category => {
    let option = document.createElement("option");
    option.text = category;
    option.value = category;
    dropdown.appendChild(option);
});


//DROP DOWN
dropdown.addEventListener("change", function () {
    const selectedCategory = dropdown.value;
    
    switch (selectedCategory) {
        case "Collectibles":
            displayCollectibles(collectibles); // Show all collectibles
            break;
        case "Instruments":
            displayInstruments(instruments); // Show all instruments
            break;

        case "Music":
            break;
        case "Cards":
            displayCards(cards) // Show all cards

        case "Books":
        case "Video Games":
            getVideoGames();
            break;

        default:
            infoDisplay.textContent = "No collectibles available for this category.";
            break;
    }
});

// COLLECTIBLES
let collectibles = [
    {
        name: "Funko Pop! Broadway: Hamilton- King George",
        price: 20,
        img: "/images/cpop1.jpg",
        descrip: "The Pop! Figure of King George from Hamilton captures the iconic character's regal presence and flair. With detailed design and vibrant colors, it's a must-have collectible for fans of the hit musical."
    },
    {
        name: "Funko Pop Animation: Bobs Burgers - Teddy",
        price: 35,
        img: "/images/cpop2.webp",
        descrip: "The Pop! Figure of Teddy from Bob's Burgers brings the beloved character to life with charming detail. With his signature apron and friendly demeanor, Teddy is instantly recognizable to fans of the show. This collectible captures the essence of Teddy's endearing quirks, making it a delightful addition to any Bob's Burgers collection. Teddy's Pop! Figure adds a touch of humor and warmth to any space."
    },
    {
        name: "Freddy Krueger plushie",
        price: 15,
        img: "/images/cplush1.jpg",
        descrip: "The Freddy Krueger plushy embodies the sinister essence of the Nightmare on Elm Street villain with iconic details. Perfect for horror fans, this plushy is a chilling yet playful addition to any collection or display."
    },
    {
        name: "Stitch plushie",
        price: 10,
        img: "/images/cplush2.jpg",
        descrip: "The Stitch plushie captures the lovable charm of the mischievous alien from Disney's Lilo & Stitch. With its blue fur, big ears, and endearing expression, this plushie is a delightful addition to any Disney collection."
    },
    {
        name: "LEGO pin",
        price: 5,
        img: "/images/cpin1.jpg",
        descrip: "The LEGO pin, shaped like a LEGO minifigure, is a playful accessory for LEGO enthusiasts of all ages. With its iconic design and vibrant colors."
    },
    {
        name: "Blackpink pin",
        price: 3,
        img: "/images/cpin2.jpg",
        descrip: "The Blackpink pin celebrates the iconic K-pop girl group with its stylish design and vibrant colors. Featuring the group's logo, this pin is a must-have accessory for fans. Whether worn on clothing, bags, or accessories, it showcases support for the beloved group. With its sleek and eye-catching appearance, the Blackpink pin adds a touch of fandom flair to any outfit. Perfect for displaying love and admiration for Blackpink's music and achievements, this pin is a cherished collectible for fans worldwide."
    }
];
// Display collectible info
function displayCollectibles(collectibles) {
    if (collectibles && collectibles.length > 0) {
        infoDisplay.innerHTML = collectibles.map(collectible => `
            <div class="card" style="width: 18rem; margin-bottom: 20px;">
                <img src="${collectible.img}" class="card-img-top" alt="${collectible.name}">
                <div class="card-body">
                    <h5 class="card-title">${collectible.name}</h5>
                    <p class="card-text">${collectible.descrip}</p>
                    <p class="card-text">Price: $${collectible.price}</p>
                    <a href="#" class="btn btn-warning" style="width: 100%;">Add to cart</a>
                </div>
            </div>
        `).join('');
   
    }
}


// INSTRUMENTS

let instruments = [
    {
        name: "Violin",
        price: 100,
        img: "/images/istring2.jpg",
        descrip: "Discover the elegance and charm of the violin with this special sale offer. Crafted with precision and care, this violin boasts a rich, resonant tone and exquisite craftsmanship. Perfect for beginners and experienced musicians alike, it comes complete with essential accessories, including a bow and case.  Don't miss this chance to bring the timeless beauty of the violin into your musical journey."
    },
    {
        name: "Clarinet",
        price: 200,
        img: "/images/iww1.jpg",
        descrip: "Embrace the melodious tones of the clarinet with this exclusive sale opportunity. Crafted with precision and quality materials, this clarinet offers a rich and versatile sound suitable for various musical styles."
    },
    {
        name: "Acoustic Guitar",
        price: 100,
        img: "/images/istring1.jpg",
        descrip: "This acoustic guitar offers an opportunity to acquire a timeless instrument known for its warm, natural sound. With its elegant design and versatile playability, it's perfect for musicians of all skill levels."
    },
    {
        name: "Saxophone",
        price: 650,
        img: "/images/iww2.webp",
        descrip: "Elevate your musical prowess with this discounted saxophone, perfect for both beginners and seasoned players. Crafted with precision and attention to detail, it offers a smooth, vibrant tone and effortless playability."
    },
    {
        name: "Drum Set",
        price: 700,
        img: "/images/iper1.jpg",
        descrip: "Unleash your rhythmic potential with this discounted drum set, perfect for aspiring drummers and seasoned musicians alike. Featuring sturdy construction and versatile sound options."
    },
    {
        name: "Xylophone",
        price: 80,
        img: "/images/iper2.webp",
        descrip: "Discover the joy of making music with this xylophone on sale, perfect for musicians of all ages. Crafted with precision and quality materials, it offers clear, resonant tones and exceptional durability. With its colorful keys and intuitive layout, it's ideal for beginners learning the basics of melody and rhythm. Whether for educational purposes, musical exploration, or creative expression, this discounted xylophone is a valuable addition to any home or classroom."
    }
];
// Display Instruments info
function displayInstruments(instruments) {
    if (instruments && instruments.length > 0) {
        infoDisplay.innerHTML = instruments.map(instrument => `
            <div class="card" style="width: 18rem; margin-bottom: 20px;">
                <img src="${instrument.img}" class="card-img-top" alt="${instrument.name}">
                <div class="card-body">
                    <h5 class="card-title">${instrument.name}</h5>
                    <p class="card-text">${instrument.descrip}</p>
                    <p class="card-text">Price: $${instrument.price}</p>
                    <a href="#" class="btn btn-warning" style="width: 100%;">Add to cart</a>
                </div>
            </div>
        `).join('');

    }
}

// CARDS

let cards = [
    {
        name: "Scarlet & Violet Pokemon 151 Booster Pack",
        price: 5,
        img: "/images/cpokemons.webp",
        descrip: "Pokémon Trading Card Game: Scarlet vs. Violet introduces 151 new cards along with an extra 10 cards. Trainers can explore a variety of Pokémon, including VMAX forms and Shiny Pokémon, enhancing gameplay diversity."
    },
    {
        name: "Pokemon TCG: Crown Zenith Elite Trainer Box",
        price: 50,
        img: "/images/cpokemonl.jpg",
        descrip: "The Pokémon Crown Zenith Elite Trainer Box offers trainers a comprehensive collection of tools and cards for competitive play. With a range of booster packs, including sought-after Pokémon V and VMAX cards, players can enhance their decks and expand their collections. The box also includes premium accessories like card sleeves, dice, and status counters for a complete gaming experience."
    },
    {
        name: "YuGiOh Battle of Chaos Booster",
        price: 100,
        img: "5",
        descrip: "The pack introduces thrilling new cards and strategies for dueling enthusiasts. With a focus on chaos-themed monsters and spells, players can unleash devastating combos and turn the tide of battle."
    },
    {
        name: "Battle Pack 2: War of the Giants",
        price: 100,
        img: "/images/cyugiohl.webp",
        descrip: "The War of Giants: Round 2 - Battle Pack 2 expansion offers duelists an exciting array of cards for strategic gameplay. Featuring powerful monsters and game-changing spells, players can craft versatile decks to outmaneuver their opponents."
    },
    {
        name: "Magic: The Gathering Kamigawa Booster Pack",
        price: 5,
        img: "/images/cmagics.webp",
        descrip: "Kamigawa Neon Dynasty Draft Booster delivers an array of cards for drafting and deck building. With a focus on the futuristic setting of Kamigawa, players can explore new mechanics and strategies."
    },
    {
        name: "Murders at Karlov Manor Commander Deck",
        price: 40,
        img: "/images/cmagicl.jpg",
        descrip: "In Magic: The Gathering - Murders at Karlv Manor Commander, players immerse themselves in a murder mystery-themed expansion set. Commanders lead their decks through a thrilling investigation filled with intrigue and suspense. With new cards and mechanics, players must outwit their opponents while uncovering the secrets of Karlv Manor. As players navigate through twists and turns, they must strategize carefully to solve the mystery and emerge victorious in this thrilling Commander format expansion."
    }




];

// Display Instruments info
function displayCards(cards) {
    if (cards && cards.length > 0) {
        infoDisplay.innerHTML = cards.map(card => `
            <div class="card" style="width: 18rem; margin-bottom: 20px;">
                <img src="${card.img}" class="card-img-top" alt="${card.name}">
                <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-text">${card.descrip}</p>
                    <p class="card-text">Price: $${card.price}</p>
                    <a href="#" class="btn btn-warning" style="width: 100%;">Add to cart</a>
                </div>
            </div>
        `).join('');

    }
}


// VIDEO GAMES

//get from api
function getVideoGames() { 
    const myHeaders = new Headers();
myHeaders.append("Client-ID", "qcvwcl359a8lv5kcpuphv70m7cx4sr");
myHeaders.append("Authorization", "Bearer q2h0dj5m3z7kmookwm2nzg8fc2ox49");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "__cf_bm=8FGjk3ce3OJh_jLeeXUTEIauB4fo.vEnH9juvgvk3ZQ-1721021485-1.0.1.1-focTFJXuw7r8_tgmihuhXEFag52igOFx3EkGcrfoRDN5WtwHaNbh7w8W_dBZYhGtKWch0r7OFVp1wrhpeekwtg");

const raw = "fields summary, url, name, cover; where id = (112875, 912, 1942, 2844, 119388, 1092);";

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.igdb.com/v4/games", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}

//displayyyy
function displayVideoGames(){
    const thegames = document.getElementById("option");
    thegames.innerHTML = '';


}




