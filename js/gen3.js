var userProperties = [];

var q1 = q2 = q3 = q4 = q5 = q6 = q7 = '';
content = "";
var boardProperties = [
    {
        name: "type two",
        id: "1",
        gender: "male",
        terrain: "all mountain",
        medSize: [154, 157],
        xsize: [155],
        flex: "medium",
        weightRange: [145, 200],
        image: "img/typeTwo.png",
        ability: ["begginer", "intermediate", "advanced", "expert"],
        shoeS: [6, 10],
        shoeL: [11, 14]

            },
    {
        name: "swift",
        id: "2",
        gender: "male",
        terrain: "powder",
        smSize: [152],
        medSize: [157],
        lrgSize: [162],
        flex: "stiff",
        weightRange: [145, 200],
        image: "img/swift.png",
        ability: ["intermediate", "advanced", "expert"],
        shoeS: [6, 10],
        shoeL: [11, 14]
            },
    {
        name: "aura",
        id: "3",
        gender: "female",
        terrain: "park",
        smSize: [146, 148],
        medSize: [150, 152],
        lrgSize: [155],
        flex: "medium",
        weightRange: [100, 170],
        image: "img/aura.png",
        ability: ["begginer", "intermediate", "advanced", "expert"],
        shoeS: [4, 9],
        shoeL: [10, 14]
            },
    {
        name: "west",
        id: "4",
        gender: "male",
        terrain: "all mountain",
        smSize: [152, 154],
        medSize: [156, 157, 157, 159],
        lrgSize: [160, 162, 164],
        xsize: [160, 164],
        flex: "medium",
        weightRange: [145, 200],
        image: "img/west.png",
        ability: ["begginer", "intermediate", "advanced", "expert"],
        shoeS: [6, 10],
        shoeL: [11, 14]
            },
    {
        name: "funslinger",
        id: "5",
        gender: "male",
        terrain: "park",
        smSize: [149, 151],
        smSize: [149, 151],
        medSize: [153, 156],
        lrgSize: [159],
        xsize: [157, 160],
        flex: "soft",
        weightRange: [145, 180],
        image: "img/funslinger2.png",
        ability: ["begginer", "intermediate", "advanced", "expert"],
        shoeS: [6, 10],
        shoeL: [11, 14]
            },

            ];



content += '<h2>Are you a...?</h2>';
content += '<button style="margin: 5px" class="btn btn-default btn-lg" onclick="gender(1)">Guy</button>';

content += '<button style="margin: 5px" class="btn btn-default btn-lg"  onclick="gender(2)">Girl</button>';
q1 = content;
content = "";



content += '<h2>What do you like to ride?</h2>';
//content += '<ul>';
content += '<button style="margin: 5px" class="btn btn-default btn-lg"  onclick="terrain(1)">All Mountain</button>';
//content += '</ul>';
content += '<button style="margin: 5px" class="btn btn-default btn-lg" onclick="terrain(2)">Park</button>';
//content += '</ul>';
content += '<button style="margin: 5px" class="btn btn-default btn-lg" onclick="terrain(3)">Powder</button>';
q2 = content;
content = "";



content += '<h2>What is your skill level?</h2>';
content += '<button style="margin: 5px" class="btn btn-default btn-lg" onclick="ability(1)">Beginner</button>';
content += '<button style="margin: 5px" class="btn btn-default btn-lg" onclick="ability(2)">Intermediate</button>';
content += '<button style="margin: 5px" class="btn btn-default btn-lg" onclick="ability(3)">Advanced</button>';
content += '<button style="margin: 5px" class="btn btn-default btn-lg" onclick="ability(4)">Expert</button>';
q3 = content;
content = "";


content += '<h2>What size boot do you wear?</h2>';
content += '<input type="number" id="size"  min="4" max="15" style="width:50px"/>';
q4 = content;



content += '<h2>What is your weight?</h2>';
content += '<input type="number" id="weight"  min="60" max="250" style="width:50px"/>';
q5 = content;



content += '<h2>What is your height range?</h2>';
content += '<select id = "heightOption"><option value="1">4.5ft - 5ft</option> <option value="2">5ft - 6ft</option> <option value="3">6ft - 8ft</option></select>'
content += '<input  type="submit" onclick="totalValues(),loopBoardArray1()"/>';
q6 = content;
content = "";

content += '<h2>Here are our recommendations</h2>';
content += '<img src = "img/swift.png">, <img src = "img/funslinger.png"><img src = "img/aura.png">';
q7 = content;




function init() {
    document.getElementById('questions').innerHTML = "";

    document.getElementById('questions').innerHTML = q1;

}






function gender(a) {
    var x = "male";
    var y = "female";
    if (a == 1) {
        userProperties.push(x);
    }

    if (a == 2) {
        userProperties.push(y);
    }
    document.getElementById('questions').innerHTML = q2;

};



function terrain(a) {
    var x = "all mountain";
    var y = "park";
    var z = "powder";
    if (a == 1) {
        userProperties.push(x);
    }

    if (a == 2) {
        userProperties.push(y);
    }
    if (a == 3) {
        userProperties.push(z);
    }

    document.getElementById('questions').innerHTML = q3;

};


function ability(a) {
    var x = "beginner";
    var y = "intermediate";
    var z = "advanced";
    var xx = "expert"

    if (a == 1) {
        userProperties.push(x);
    }

    if (a == 2) {
        userProperties.push(y);
    }
    if (a == 3) {
        userProperties.push(z);
    }
    if (a == 4) {
        userProperties.push(xx);
    }


    document.getElementById('questions').innerHTML = q4;
    document.getElementById('questions').innerHTML = q5;
    document.getElementById('questions').innerHTML = q6;

    console.log(userProperties);
};

var x;
var y;
var z;
//here we get the values from the user then put into an array call userProperties
function totalValues() {

    x = document.getElementById("size").value;
    y = document.getElementById("weight").value;
    z = document.getElementById("heightOption").value;
    userProperties.push(x, y, z);
    document.getElementById("questions").innerHTML = q7;
};

//    console.log(userProperties);
//here we take y (the weight value) and if greater then weightRange we push to riderboard array



var boardResultsArray = [];
var resultsToDisplay = [];

function getUserHeightWeight(val, min, max) {
    if (val >= min && val <= max) {
        return true;
    } else {
        return false;
    };

};


function getShoeSize(val, min, max) {

    if (val > min && val < max) {
        return true;
    } else {
        return false;
    };
};



//function getBoardSize(val, boardz) {
//    for (var i = 0; i < boardz.length; i++) {
//        if (heightOption == boardz[i]) {
//            boardResultsArray.push[i]
//
//        };
//    };
//
//};



//here we loop threw and return an array
var bp;

function loopBoardArray1() {
    for (var i = 0; i < boardProperties.length; i++) {
        bp = boardProperties[i];

        for (var key in bp) {
            if (bp.hasOwnProperty(key)) {

                //what is y?
                // y is the input weight


                // this function getUserHeightWeight(value from user input, min, max) passes these parameters

                var weightArray = bp["weightRange"];
                var zz = getUserHeightWeight(y, weightArray[0], weightArray[1]);
                console.log(zz);


                //What is x?
                //x is the input val for shoe size

                var shoeSizeArray = bp["shoeS"];
                var q = getShoeSize(x, shoeSizeArray[0], shoeSizeArray[1]);
                console.log(q);

                var shoeSizeArrayl = bp["shoeL"];
                var d = getShoeSize(x, shoeSizeArrayl[0], shoeSizeArrayl[1]);
                console.log(d);

                //here we check to see if height value is 1, 2 or 3 then push to array
                var smBoard = bp["smSize"];
                var medBoard = bp["medSize"];
                var lrgBoard = bp["lrgSize"];
                if (z == "1") {
                    resultsToDisplay.push[smBoard];
                    if (z == "2") {
                        resultsToDisplay.push[medBoard];
                    };
                    if (z == "3") {
                        resultsToDisplay.push[lrgBoard];
                        console.log(resultsToDisplay);
                    };

                };
            };
        };
    };
};