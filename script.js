const dataExemple = [
    {
        id: 1,
        name: "Batman <b>Forever</b>",
        country: "USA",
        genre: ["Action", "Crime", "Thriller", "Fantasy"],
    },
    {
        id: 2,
        name: "Cry Macho",
        country: "USA",
        // genre: ["Westerns", "Drama", "Thriller"],
    },
    {
        id: 3,
        // name: "Monster family 2",
        country: "Great Britain",
        genre: ["<i>Cartoons</i>"],
    },
    {
        id: 4,
        name: "Alien: Battlefield Earth",
        country: "",
        genre: ["Fantasy", "Action"],
    },
    {
        id: 5,
        name: "Eight Hundred / Eight Hundred",
        country: "China",
        genre: ["Action", "Military", "Drama", "Historical"],
    },
];

let gridView = new GridView();
const data = {
    header: "GridView",
    headerClass: ["header"],
    attribute: {
        "id": {
            "label": "nr.",
            "src": "html"
        },
        "name": {
            "label": "Original name",
            "src": "html"
        },
        "genre": {
            "label": "Genre",
            "value": (data) => {
                if (data.genre) {
                    for (let i = 0; i < data.genre.length; i++) {
                        return data.genre.join(" / ");
                    };
                }
                else {
                    return false;
                }
            },
            "src": "html"
        },
        "country": {
            "label": "Country",
            "src": "html"
        }
    },
    data: dataExemple
}
gridView.render(data);