var contacts = [
    {
        "firstName" : "Ketan",
        "lastName" : "Shukla",
        "number" : "0111222333",
        "likes" : ["Paratha", "Cricket", "Programming"]
    },
    {
        "firstName" : "Andreiovich",
        "lastName" : "Slavashenko",
        "number" : "0444555666",
        "likes" : ["Kasha", "Mosin-Nagat", "Wrestling"]
    },
    {
        "firstName" : "Doughlas",
        "lastName" : "McCornello",
        "number" : "0777888999",
        "likes" : ["Pizza", "Surfing", "Truck-Driving"]
    },
    {
        "firstName" : "Jean-der",
        "lastName" : "Bonearno",
        "number" : "0123456789",
        "likes" : ["Pain-au-Chocolat", "Painting", "Cycling"]
    }
]

function lookUpProfile (name, prop)
{
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName == name){
            return contacts[i][prop] || "No such property"
        }
        return "No such contact"
    }
}

var data = lookUpProfile("Andreiovich", "likes")

console.log(data)