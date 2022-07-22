const a = "a"; //STRING str строка ""
// console.log(a)
 let c = 32; //number
 // console.log(c)

 c = "Hello"
// console.log(c)

const bool = true; // boolean
const bool2 = false;

const obj = { //object
    key: 'value',
    username: 'Asia',
    data: {
        first_name: 'Asia',
        last_name: 'South'
    }

}
// console.log(obj.data.last_name)

const arr = ["Asia", true, false, 99] //array
// console.log(arr[3])

const arr2 = [
    {
        key: 'value'
    },
    {
        key: 'value2'
    },
    {
        key: 'value3'
    }

]
// console.log(arr2[1].key)

// const name = prompt("Как вас зовут?")
// console.log("hello " + name)

// const age = alert("у вас ошибка")

// const first_number = prompt("Первое число")
// const last_number = prompt("Второе число")
// if (first_number > last_number) {
//     console.log(first_number + ">" + last_number)
// } else if (first_number < last_number) {
//     console.log(first_number + "<" + last_number)
// } else {
//     console.log(first_number + "=" + last_number)
// }

const age = prompt("Сколько вам лет")
if (age < 18){
    console.log("вам нельзя входить")
} else if (age > 18){
    console.log("вам можно входить")
}else {
    console.log("поживи еще годик")
}
