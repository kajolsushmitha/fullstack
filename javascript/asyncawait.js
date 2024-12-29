// async function funName() {
//     console.log("kajol")
//     return "Hello"
// }
// arrowFunName=async()=>{
//     console.log("college")
//     return "KEC"
// }

// console.log(funName());
// console.log(arrowFunName());

async function funName() {
    setTimeout(()=>{
        console.log("Hello");
},5000)
console.log(await"hello")

}
arrowFunName=async()=>{
    setTimeout(()=>{
        console.log("KEC");
    },4000)
    console.log(await"KEC")
}
funName().then()
arrowFunName()