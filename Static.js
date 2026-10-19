const shani = {
    name: 'ShayanAhmad',
    class: '13',
    age: '20'
}
console.log(Object.getOwnPropertyDescriptor(shani, 'name'))
Object.defineProperty(shani, 'name', {
    writable: false,
    enumurable:false
})
shani.name = "daniyal"
console.log(shani) 
let shani = {
    name: 'shanyan',
    class: '13',
    orderChai:function(){
        console.log("code pat gaya")
    }
}
for (let [Key, value] of Object.entries(shani)) {
    if (typeof value !=='function')
    console.log(`${Key}:${value}`)
}