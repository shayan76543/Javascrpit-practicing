// class user{
//     constructor(userName,email,password){
//         this.userName=userName;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUser(){
//         return `${this.userName.toUpperCase()}`
//     }
// }
// const firstUser=new user('shayanAhmad','ShayanAhmad@gmail.com','123')
// console.log(firstUser.encryptPassword())
// console.log(firstUser.changeUser())
class user{
    constructor(userName){
        this.userName=userName;
    }
    showName(){
        console.log(this.userName)
    }
}
class teacher extends user{
    constructor(userName,email){
        super(userName)
        this.email=email

    }
    addCourse(){
        console.log(`You successfully got the admission in specific course ${this.userName}`)
    }
}
const firstUser=new user("shayan")
const firstTeacher=new teacher("daniyal","daniyalAhmad@gmail.com")
// firstUser.showName()
firstTeacher.showName()
firstTeacher.addCourse()
console.log(firstUser instanceof user)
console.log(firstTeacher instanceof teacher)