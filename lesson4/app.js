// const blocks = document.getElementsByClassName("block")
// console.log(blocks)

// const block3 = document.getElementById("block3")
// console.log(block3)

// block3.className = "changeClass";
// block3.classList.add("newClass")
// block3.classList.remove("block")
// console.log(block3.classList)

// blockId.onclick = () => {
//     blockId.classList.toggle("active")
// }


// const block = document.querySelector(".block")
// const block2 = document.querySelectorAll(".block")
// console.log(block2)


const button = document.getElementById("button")
const  input = document.getElementById("input")
button.onclick = () => {
    const div = document.createElement("div")
    const deleteButton = document.createElement("button")
    deleteButton.id = "delete1"
    deleteButton.innerText = "delete"
    const changeButton = document.createElement("button")
    changeButton.id = "change1"
    changeButton.innerText = "change"
    div.setAttribute("class", "block")
    div.innerText = input.value
    div.append(deleteButton, changeButton)
    document.body.append(div)
    input.value = ""



}
    // changeButton.onclick = () => {
    //     const text = prompt('text');
    //     div.innerText = text;
    // }
    // deleteButton.onclick = () => {
    //     document.querySelector('.block').remove()
    // }
//
// function test (){
//     let element = document.getElementById("change1");
//     let element1 = document.getElementById("delete1");
//     document.body.remove()
// }
// test()
