// function addmore()
// {
//     document.getElementById('error').innerHTML="";
//     let name= document.getElementById('name').value;
//     if(name=='')
//     {
//         document.getElementById('error').innerHTML="please enter value";
//     }
//     else{
//         let box=document.getElementById('box');
//         let li=document.createElement('li');
//         li.textContent= name;
//         let a= document.createElement('a');
//         a.textContent="x";
//         a.href="javascript:void(0)";
//         a.className="remove";
//         li.appendChild(a);
//         let pos=box.firstElementChild;
//         // console.log(pos);
//         if(pos==null)
//         {
//             box.appendChild(li);
//         }
//         else{
//             box.insertBefore(li,pos);
//         }
        
//     }
//     document.getElementById('name').value="";
// }
// // let bn= document.querySelector('ul');
// document.addEventListener("click", function(e) {
//     if (e.target.id == "test") {
//       //do something
//       console.log("hellow");
  
//       let box = document.getElementById("box");
//       // console.log(e.target);
//       let li = e.target.parentNode;
//       // let li=e.target.firstElementChild;
//       box.removeChild(li);
//     } else {
//       return null;
//     }
//   });
// addd
// let bn= document.querySelector('ul');
// bn.addEventListener('click',function(e)
// {
//     let box= document.getElementById('box');
//     // console.log(e.target);
//     let li= e.target.parentNode;
//     // let li=e.target.firstElementChild;
//     box.removeChild(li);
// });

//addd 
// adding new js
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})