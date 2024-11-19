
const urlParams = new URLSearchParams(window.location.search);

let onglet = "TOURNOIS";
let user = urlParams.get("user");

const users = {
    "Adrien": {
        desc: "JEU DE DEPART: 8 DELUXE\nEXTRA-SCOLAIRE: Athlétisme",
        play: "Peachette",
        maps: "Road-trip à Los Angeles"
    },
    "Anthony": {
        desc: "JEU DE DEPART: 8 DELUXE\nEXTRA-SCOLAIRE: Passe-partout",
        play: "Toad",
        maps: "Prairie MeuhMeuh"
    },
    "Theo": {
        desc: "JEU DE DEPART: WII\nEXTRA-SCOLAIRE: cantine",
        play: "Bébé mario",
        maps: "Ile Yoshi"
    },
    "Kayhan": {
        desc: "JEU DE DEPART: 8 DELUXE\nEXTRA-SCOLAIRE: Rugby",
        play: "Mario Tanuki",
        maps: "Descente Givrée"
    },
    "Maxime": {
        desc: "JEU DE DEPART: 7\nEXTRA-SCOLAIRE: Drôle",
        play: "Mii",
        maps: "Piste Musicale"
    },
    "Noah": {
        desc: "JEU DE DEPART: 8 DELUXE\nEXTRA-SCOLAIRE: Sport",
        play: "Bowser Squelette",
        maps: "Course à la propreté"
    },
    "Louis": {
        desc: "JEU DE DEPART: DS\nEXTRA-SCOLAIRE: Mario Kart",
        play: "Daisy",
        maps: "Gorge Champignon"
    },
    "TheoJ": {
        desc: "JEU DE DEPART: 8 DELUXE\nEXTRA-SCOLAIRE: Fourberie",
        play: "Lary",
        maps: "Route arc-en-ciel N64"
    },
    "Sean": {
        desc: "JEU DE DEPART: WII\nEXTRA-SCOLAIRE: Fabrication de Chaussures",
        play: "Peach",
        maps: "Route arc-en-ciel SNES"
    },
    "Bastien": {
        desc: "JEU DE DEPART: 7\nEXTRA-SCOLAIRE: BDG",
        play: "Luigi",
        maps: "Circuit Toad"
    },
    "Enoha": {
        desc: "JEU DE DEPART: DS\nEXTRA-SCOLAIRE: Basket",
        play: "Wario",
        maps: "Circuit Mario 3"
    },
    "Guilherme": {
        desc: "JEU DE DEPART: WII\nEXTRA-SCOLAIRE: Brawl Star",
        play: "Maskass",
        maps: "Hyrule"
    },
    "Mael08": {
        desc: "JEU DE DEPART: DS\nEXTRA-SCOLAIRE: Guitard",
        play: "Link",
        maps: "Bois vermeille"
    },
    "Matiass": {
        desc: "JEU DE DEPART: 8 DELUXE\nEXTRA-SCOLAIRE: Brawl Star",
        play: "Lemmy",
        maps: "Super Marché Coco"
    },
    "Max": {
        desc: "JEU DE DEPART: 8 DELUXE\nEXTRA-SCOLAIRE: Guitard",
        play: "Mario",
        maps: "Champidrôme"
    },
    "Lucas": {
        desc: "JEU DE DEPART: 8 DELUXE\nEXTRA-SCOLAIRE: Il est là",
        play: "Koopa",
        maps: "Parc Baby"
    },
    "Antoine": {
        desc: "JEU DE DEPART: WII\nEXTRA-SCOLAIRE: Percussion",
        play: "Harmonie",
        maps: "Mute City"
    },
    "Soan": {
        desc: "JEU DE DEPART: WII\nEXTRA-SCOLAIRE: Athlétisme",
        play: "Waluigi",
        maps: "Flipper Waluigi"
    },
    "Zackary": {
        desc: "JEU DE DEPART: 8 DELUXE\nEXTRA-SCOLAIRE: Muscu",
        play: "Yoshi",
        maps: "Exicbite"
    },
    "Justin": {
        desc: "JEU DE DEPART: 7\nEXTRA-SCOLAIRE: Boxe",
        play: "Wigler",
        maps: "Promenade à Paris"
    },
    "Kevin": {
        desc: "JEU DE DEPART: WII\nEXTRA-SCOLAIRE: Foot",
        play: "Donkey Kong",
        maps: "Roma romantica"
    },
    "Marius": {
        desc: "JEU DE DEPART: WII\nEXTRA-SCOLAIRE: Muscu",
        play: "Diddy Kong",
        maps: "Route arc-en-ciel 3DS"
    },
    "Nolan": {
        desc: "JEU DE DEPART: 8 DELUXE\nEXTRA-SCOLAIRE: Basket",
        play: "Mario Métal",
        maps: "Route arc-en-ciel WII"
    },
    "Thibault": {
        desc: "JEU DE DEPART: 7\nEXTRA-SCOLAIRE: Il est là",
        play: "Villageois",
        maps: "Animal Crossing"
    }
};

const datas = {
    "HOME": get_home_page,
    "TOURNOIS": get_tounois_page,
    "PARTICIPANT": get_participant_page,
    "PARTICIPANTS": get_participants_page
}

function get_home_page() {
    return `
<h2>Bienvenue</h2>`
}

function get_tounois_page() {
    return `
<h2>Prochains participants :</h2>
<img src="/resources/img/image.png" alt="" srcset="">`;
}

function get_participants_page() {
    return `
<h2>Participants :</h2>
<div id="participants">
    <a href="/?user=Adrien">Adrien</a></a>
    <a href="/?user=Anthony">Anthony</a>
    <a href="/?user=Theo">Théo</a>
    <a href="/?user=Kayhan">Kayhan</a>
    <a href="/?user=Maxime">Maxime</a>
    <a href="/?user=Noah">Noah</a>
    <a href="/?user=Louis">Louis</a>
    <a href="/?user=Sean">Sean</a>
    <a href="/?user=Bastien">Bastien</a>
    <a href="/?user=Enoha">Enoha</a>
    <a href="/?user=Guilherme">Guilher</a>i>
    <a href="/?user=Matiass">Matiass</a>
    <a href="/?user=Max">Max</a>
    <a href="/?user=Lucas">Lucas</a>
    <a href="/?user=Antoine">Antoine</a>
    <a href="/?user=Soan">Soan</a>
    <a href="/?user=Zackary">Zackary</a>
    <a href="/?user=Justin">Justin</a>
    <a href="/?user=Kevin">Kevin</a>
    <a href="/?user=Marius">Marius</a>
    <a href="/?user=Nolan">Nolan</a>
    <a href="/?user=Thibault">Thibault</a>
    <a href="/?user=Mael08">Mael (08)</a>
    <a href="/?user=TheoJ">Théo J</a>
</div>`;
}

function get_participant_page() {
    return `
<h2>${user}</h2>
<img id="usr" src="/resources/img/user.png" alt="user" />
<pre emoji="🎯">${users[user].desc}</pre>
<span emoji="🏎️">${users[user].play}</span>
<span emoji="🎢">${users[user].maps}</span>`;
}

function update(data) {
    document.getElementById("data").innerHTML = data;
}

window.onload = () => { 

    Array.from(document.getElementsByClassName("btn")).forEach(element => {
        element.addEventListener("click", function () {
            update(datas[element.innerHTML.toUpperCase()]());
        });
    });

    if (!user)
        update(datas["TOURNOIS"]());

    update(datas["PARTICIPANT"]());

};
