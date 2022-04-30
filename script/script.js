

const Encriptar = () => {
    const botonEncriptar = document.getElementById('buttonEncriptar')

    botonEncriptar.addEventListener('click', (e) => {
        let textoIngresado = document.getElementById('textarea').value
        textoIngresado = textoIngresado.toLowerCase()
        textoIngresado = textoIngresado.split('')


        let remplazoDeLetras = [];
        textoIngresado.forEach(element => {
            if (element === 'i') {
                element = element.replace('i', 'imes')
            } else if (element === 'a') {
                element = element.replace('a', 'ai')
            } else if (element === 'o') {
                element = element.replace('o', 'ober')
            } else if (element === 'e') {
                element = element.replace('e', 'enter')
            } else if (element === 'u') {
                element = element.replace('u', 'ufat')
            }
            remplazoDeLetras.push(element)

        });

        if (remplazoDeLetras.length != 0) {

            let texto = remplazoDeLetras.join('')
            copiarTexto(texto)
        }
    })
}

Encriptar()


const Desencriptar = () => {
    const buttonDesencriptar = document.getElementById('buttonDesencriptar')

    buttonDesencriptar.addEventListener('click', (e) => {
        let textoIngresado = document.getElementById('textarea').value
        textoIngresado = textoIngresado.split(' ')

        let remplazoDeLetrasDesencriptar = [];

        textoIngresado.forEach(element => {
            element = element.replaceAll('enter', 'e')
            element = element.replaceAll('imes', 'i')
            element = element.replaceAll('ai', 'a')
            element = element.replaceAll('ober', 'o')
            element = element.replaceAll('ufat', 'u')
            remplazoDeLetrasDesencriptar.push(element)
        })

        if (remplazoDeLetrasDesencriptar.length != 0) {
            let texto = remplazoDeLetrasDesencriptar.join(' ')
            copiarTexto(texto)
        }
    })

}

Desencriptar()

function copiarTexto(texto) {
    let div = document.querySelector('.box');
    let divNew = document.getElementById('divNew')
    divNew.classList.add("new-div")
    let containerMessage = document.querySelector('.container-message')
    div.style.visibility = 'hidden';
    const parrafo = document.getElementById('parrafo')
    parrafo.innerHTML = texto

    const buttonCopy = document.getElementById('botonCopiar');
    buttonCopy.innerText = 'Copiar';
    buttonCopy.classList.add("button-copiar")
    containerMessage.appendChild(divNew);
    divNew.appendChild(parrafo);
    divNew.appendChild(buttonCopy);

    buttonCopy.addEventListener('click', (e) => {
        var input = document.createElement("input");
        input.setAttribute("value", document.getElementById('parrafo').innerHTML = texto);
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        console.log('hiciste click', texto)
    })
}
