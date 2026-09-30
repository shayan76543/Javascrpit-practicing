function CreateUser(score, name) {
    this.score = score;
    this.name = name;
};
CreateUser.prototype.incretment = function() {
    this.score++
};
// Add functionality to the Prototype
const name1 = new CreateUser(33, "shani")
const name2 = new CreateUser(44, "khan")
name1.incretment()
console.log(name1.score)
array = ["shayan ahmad", "daniyal ahmad"]
Array.prototype.addName = function (name) {
    console.log(`Your name is add :${name}`)
    array.push(name)
}
array.addName("sameer Ahmad")
console.log(array)
//  Inheritence in Javascript
const teacher={
    name:"shayan",
    makeVideo:true
}
const newTeacher={
    age:"21",
    subject:"bio"
}
Object.setPrototypeOf(newTeacher,teacher)
console.log(newTeacher.makeVideo)