function User(userName,isLogged,fatherName){
    this.userName=userName;
    this.isLogged=isLogged;
    this.fatherName=fatherName;
    return this
}
const user1=User("shayanAhmad",true,"ImranAhmad")
const user2=new User("DaniyalAhmad",false,"ImranAhmad")
console.log(user1.userName,user2.userName)