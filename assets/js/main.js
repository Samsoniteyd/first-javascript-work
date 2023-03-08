// console.log('amooo');
// let firstName= 'samson';
// console.log(firstName);

// // list of students 

// let className= ['lekan', 'kunle', 'favour', 'omole', 'tunji', 'sanya', 'bunmi'];
// let className=[1,2,3,4,5,6,7] 

// let los;
 

// console.log(className)

// className.length
//  className.unshift('gun');
//  console.log(className.splice(2,4))
//  className.splice(1,2)
//  className.pop() 
// className.concat('man') 
// className.reverse()
// className.shift()
// className.sort()

// for(let i=0; i<className.length; i++){
//     console.log(i)
//     console.log(className[i])
// }

// while loop
// let i=0;
// while(i<className.length){
//     console.log(i);
//     i++;
// }

//  let numbers = prompt('enter any number')
//   if(numbers%2===0){
//     console.log('it odd number')
//   }else{
//     console.log('it even number')
//   }

// let letter = prompt ('enter any alphabet').toLowerCase();
// let words = ['a','e','i','o','u'];

// if(letter===words.find.){
//   console.log('alphabet is vowel');
// }else{
//   console.log('alphabet is consonant');
// }

// let letter = prompt("Enter any letter").toLowerCase();
// const lettercheck = ["a", "e", "i", "o", "u"];
// const found = lettercheck.find(element => element == letter);
// found ?
//     console.log(`"${letter}" is a vowel letter!`) :
//     console.log(`"${letter}" is a Consonant letter!`)
// ;

// function Person(firstName, lastName, dob){
//   this.firstName=firstName
//   this.lastName= lastName
//   this.dob= new Date(dob)
//   // this.getYear = function(){
//   //   return this.dob.getFullYear()

//   }


// person1= new Person('samson','Amoo','april-4-1934');

// person2= new Person('kemi','olatunde',30);
// console.log(person2)

// let today = new Date()
// console.log(today)
// console.log(today.getTime())
// let number= Number(prompt("enter any number")) ;
// if(number%2===0){
//     console.log("the number you input is odd number")
// } else {
//     console.log("the number you input is even number")
// }



// let alphabet= prompt("enter any alphabet").toLowerCase();
// let words= "a"|| "e" || "i" || "o" || "u"
// if (alphabet === words) {
//     console.log("input is vowel");
// } else {
//     console.log("input is consonant");
// }


// a weather Script 

// let weather= prompt("enter weather situation").toLowerCase()
// let situation= "rainy" 
// let site= "sunny"
// let done= "cold"

// if (weather=== situation) {
// console.log(`its rainy ${"use your umbrella"}`);
// } else if (weather=== site) {
//     console.log(`its sunny ${"light cloth"}`);
// } else if (weather=== done) {
//     console.log(`its cold ${"put on your cardigan"}`);
// } else{
//     console.log("out of scope")
// }

// function addNum(num1, num2){
//      return num1 + num2;
//     }
//     console.log(addNum(5,6))

    



// const todos = [
//      {
//       id: 1,
//      task : 'Study html and css',
//      isComplete: true
//      },
//      {
//       id: 2,
//       task : 'Study bootstrap',
//       isComplete: true
//      },
//      {
//       id: 3,
//       task : 'Study git and git hub',
//       isComplete: true
//      },
//      {
//      id: 4,
//       task : 'Study javascript',
//       isComplete: false
//      },
//     ]


    // for(let sam of todos){
    //     // console.log(sam)
    //     console.log(sam.id);
    // }

    // const tasks = todos.map(function(todo){
    //  return todo.task
    //     })
    //     console.log(tasks);


        // const tasks = todos.map(function(man){
        //     return man.isComplete
        // })
        // console.log(tasks);


        // function Person(firstName, lastName, dob){
        //     this.firstName = firstName;
        //     this.lastName = lastName;
        //     this.dob = new Date(dob);
        //    }

        //    const person1 = new Person('Amoo', 'Dayo', 'August-18-1902');



        //    function Person(firstName, lastName, dob){
        //      this.firstName = firstName;
        //      this.lastName = lastName;
        //      this.dob = new Date(dob);
        //      this.getMyYear = function(){
        //       return this.dob.getFullYear();
        //      }
        //     }
            // console.log(person1.getMyYear())
            // Person.prototype.getFullName = function(){
            //      return `${this.firstName} ${this.lastName}`;
            //     }
            //     console.log(person1.getFullName())

            // dom 

            // let title = document.querySelector('#title');
            // title.style.background='seagreen'


            // const first = document.getElementsByClassName('list-group-item')

            // let heading = document.getElementsByTagName('h4')




            // // first.innerText='red'
            // ones = Array.from(first)

            // ones.forEach(function(come){
            //     come.style.background='pink'
            // })

            // console.log(first)


            // const ul = document.querySelector('ul');


const header= document.querySelector('h4')
header.style.background='seagreen'

const light= document.querySelector('.lit')
const dark= document.querySelector('.drk')
const body = document.querySelector('body')

dark.addEventListener('click',darkMode)
function darkMode(){
  body.style.background='black'
  body.style.color='black'

}
light.addEventListener('click', lightMode)
function lightMode(){
  body.style.background='white'
  body.style.color='black'

}


const form = document.querySelector('form')
const taskInput = document.querySelector('#task')
const addBtn = document.querySelector('#addBtn')
const ul = document.querySelector('.list-group')
const clear = document.querySelector('#clear')
const msg = document.querySelector('.msg')

form.addEventListener('submit', addTask);
function addTask(e){

  if(taskInput.value=== ''){
    msg.classList.add('error')
    msg.innerHTML= 'fill it now'
    // msg.textContent= 'fill the filed'
    
      setTimeout(function(){
        msg.classList.remove('error')
        msg.innerHTML= ''
      }, 2000 ); 
 
  }else{

    msg.classList.add('success')
    msg.innerHTML= 'task added successful'

    
      setTimeout(function(){
        msg.classList.remove('success')
        msg.innerHTML= ''
      }, 2000 ); 

      const lis = document.createElement('li');

      lis.className = 'list-group-item d-flex justify-content-between'

      lis.appendChild(document.createTextNode(taskInput.value))
      
      ul.appendChild(lis)
      taskInput.value=''
      // links
      const links = document.createElement('a')
      links.className= 'list-group-link link-danger'
      links.innerHTML='<i class="bi bi-trash"></i>'

      lis.appendChild(links)
      console.log(lis)

  }

  e.preventDefault()
}

clear.addEventListener('click',clearTask)
function clearTask(e){
  ul.innerHTML=''

  e.preventDefault()
}

ul.addEventListener('click', deleteTask);

function deleteTask(e){

 if(e.target.parentElement.classList.contains('list-group-link')){
  e.target.parentElement.parentElement.remove()
 }
}