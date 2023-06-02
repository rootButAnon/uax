function readFile(fileName){
    const questions = [];
    fetch(fileName)
    .then(response => response.text())
    .then(contenido => {
      const lineas = contenido.split('\n');
      let resultadoTxt = ""
      // Hacer algo con las líneas
      

    for (let i = 0; i < lineas.length; i += 2) {
        const question = lineas[i].trim();
        const answer = lineas[i + 1].trim();

        questions.push({ question, answer });
    }
    let counter = 0
    pregTab = document.getElementById('tablaPreguntas')

   questions.forEach(element => {
    counter++
    pregunta = document.createElement('pregunta-component')
    pregunta.setAttribute('question',element.question)
    pregunta.setAttribute('fakeid',counter)
    pregunta.setAttribute('answer',element.answer)
    pregTab.appendChild(pregunta)
    console.log(element.question)
  })
})

.catch(error => {
    console.error( error);
});
return  questions ;
}

function setAllDaw(){
  const jsonData = readFile('./desarrollo_aplicaciones.txt')
jsonData.forEach(element => {
    counter++
    pregunta = document.createElement('pregunta-component')
    pregunta.setAttribute('question',element.question)
    pregunta.setAttribute('fakeid',counter)
    pregunta.setAttribute('answer',element.answer)
    pregTab.appendChild(pregunta)
    console.log(element.question)
  })
}
function setAllDiw(){
  const jsonData = readFile('./diseño_interfaces.txt')
jsonData.forEach(element => {
    counter++
    pregunta = document.createElement('pregunta-component')
    pregunta.setAttribute('question',element.question)
    pregunta.setAttribute('fakeid',counter)
    pregunta.setAttribute('answer',element.answer)
    pregTab.appendChild(pregunta)
    console.log(element.question)
  })
}