const app = "I don't do much."


function Dog(name, breed){
  this.name = name;
  this.breed = breed
};

let weirdDog = new Dog("will", "pitbull")
//weirdDog.name === "will"
weirdDog.changeName = function(name) {this.name = name};
weirdDog.changeName("trey")
if (weirdDog.name !== "will") {
  console.log("WUT THU FUK")
};
//logs "WUT THU FUK" -- BECUASE THIS IS A WEIRD ASS DOG!


function Horse(){
  arguments
};

function Horse(){
	arr = []
	arr.push(arguments[0]);
    arr.forEach(function(elem){
	console.log(elem)
    //this.elem.keys[0] = elem.values[0]
    })
}
