// Through Classes
class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get password() {
        return this._password.toUpperCase()
    }
    set password(user) {
        this._password = user
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(user) {
        this._email = user
    }
}
const firstUser = new user("HiteshChaudary@gmail.com", 'nokiakhan')
console.log(firstUser.password);
console.log(firstUser.email)

// Through Propertiy define method in function 
function user(email, password) {
    this._email = email;
    this._password = password;
    Object.defineProperty(this, "password", {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (user) {
            this._password = user;
        }
    })
}
const fun = new user("shayanahmad@gmail.com", 'nokiakhan')
console.log(fun.password)
