const text = "Two shadows merge, weaving a tale yet to be told"; // Your text here
let i = 0;

function typeWriter() {
  if (i <text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // Adjust the typing speed here
  } else {
    i=0;
    setTimeout(() => {
      document.getElementById("typewriter").innerHTML = '';
     typeWriter();
    }, 2000); // Adjust the time before the text restarts typing
    
  } 
}
typeWriter();















// const typewriter = document.getElementById('typewriter');
// const text = 'Two shadows merge, weaving a tale yet to be told';
// let index = 0;
// function type() {
//   if (index < text.length) {
//     typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
//     index++;
//     setTimeout(type, Math.random() * 150 + 50);
//     } else {
//       typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
//     }
// }
// // start typing

//   type();

