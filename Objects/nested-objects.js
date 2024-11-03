var myStorage = {
    "car" : {
        "inside" : {
            "glove box" : "maps",
            "passenger seats" : "crumbs"
        },
        "outside" : {
            "trunk" : "jacket"
        }
    }
}

var gloveBoxContents = myStorage.car.inside["glove box"]

console.log(gloveBoxContents)
