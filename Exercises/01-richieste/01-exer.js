
let nomi = [
    { id: 1, name: "Gino" },
    { id: 2, name: "Pino" },
    { id: 3, name: "Mario" },
    { id: 4, name: "Rosario" }
];

let nums = [1, 2, 3, 4, 5]
const targer = 9 

function findValues (nums, target) {
    for (let i = 0; i <= nums.length ; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ( nums[i] + nums[j]  === target )
                return [nums[i], nums[j]]
        }
    }
}
console.log(findValues(nums, targer))


let s = "  fly to the    moon  "

function lastWord (s) {
   s =   s.trim()
   let word = s.split(" ")
   return word[word.length - 1].length
} 
console.log("Lunghezza dell'ultima parola : " + lastWord(s))


function message() {
    let paragrafo = document.createElement("p")
    let testo = document.createTextNode("Hey! How is going your day?")
    paragrafo.appendChild(testo);
    document.getElementById("test").appendChild(paragrafo)
}


function control() {
    let textInput = document.getElementById("input").value
    let messageDiv = document.getElementById("message")
    let inputToList = document.getElementById("lista")
    messageDiv.innerHTML = ""

    const message = document.createElement("div")
    const lista = document.createElement("p")

    if (textInput.includes("a") || textInput.includes("A")) {
        message.id = "succesMessage"
        message.textContent = "OK"
        lista.id = "listaOk"
        lista.textContent = textInput
        inputToList.appendChild(lista)
    } else {
        message.id = "errorMessage"
        message.textContent = "Errore"
        lista.id = "listaError"
        lista.textContent=textInput
        inputToList.appendChild(lista)
    }

    messageDiv.append(message);
    document.getElementById("input").value = ""

}

    


function dropDown() {
    let select = document.getElementById("nomi");

    select.innerHTML = '<option>Seleziona un nome</option>';

    nomi.forEach(persona => {
        const option = document.createElement("option");
        option.value = persona.id;
        option.textContent = persona.name; 
        console.log(persona.name)
        select.append(option)
        });
    }

    //document.getElementById("buttonSelect").addEventListener("click", dropDown);


