// lexical scoping
function external() {
    let lexical = "hello";
    function internal() {
        console.log(lexical)
    }
    internal()
}
external()
// closure 
function external() {
    let parent = "hello i am closure"
    function internal() {
        console.log(parent)

    }
    return internal
}
const close = external()
close()
close()