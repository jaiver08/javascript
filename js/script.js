
// var nota1 = parseFloat(prompt('Ingresar primera nota'))
// var nota2 = parseFloat(prompt('Ingresar segunda nota'))
// var nota3 = parseFloat(prompt('Ingresar tercera nota'))

// var res = nota1 + nota2 + nota3;

// res = res / 3;
// alert(res)

// if(res >= 5 && res <= 10){
//     alert('Aprobo')
// }else if(res >= 0 && res <=4.9){
//     alert('Reprobo')
// }

/* Camila no me deja utilizarlo
var texto = new Array(26).fill(1).map((_,i) => String.fromCharCode(65 + i));
var html = ''

for (let i = 0; i < texto.length; i++) {
    html+= '<div onclick="tomarElemento2(this)" id="selection'+texto[i]+'">'+texto[i]+'</div>'
}
document.getElementById('section').innerHTML = html
*/


var elemento = ''

function tomarElemento1(e){
    if(elemento){
        elemento = elemento.style.position = "unset"
    }
    e.style.position = "absolute"
    elemento = e
}

function tomarElemento2(e){
    var body = document.getElementById('body')
    var clon = e.cloneNode(true)
    body.appendChild(clon)
    clon.style.position = "absolute"
    elemento = clon
}

document.getElementById("body").addEventListener("dblclick", function(event) {
    elemento = ''
})

document.getElementById("body").addEventListener("mousemove", function(event) {
    //Capto las coordenads del puntero.
    var x = window.event.x;
    var y = window.event.y;

    //Y se las coloco al div.
    if(elemento){
        elemento.style.left = 5 + x + "px";
        elemento.style.top = 5 + y + "px";
    }
});