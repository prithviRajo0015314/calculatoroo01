let button = document.getElementById('buttonForAdd');
 document.getElementById('num1').value;
 document.getElementById('num2').value;
let ansArea = document.getElementById('ansArea');



function reset()
{
    let x = document.getElementById('num1')
    let y =  document.getElementById('num2')
   x.value = 0;
   y.value = 0;
    ansArea.innerText = 0;

}
function add()
{
let x = Number( document.getElementById('num1').value)
let y = Number( document.getElementById('num2').value)
let z = x + y;
console.log(z);
ansArea.innerText = z;
}
function sub()
{
let x = Number( document.getElementById('num1').value)
let y = Number( document.getElementById('num2').value)
let z = x - y;
console.log(z);
ansArea.innerText = z;
}
function mul()
{
let x = Number( document.getElementById('num1').value)
let y = Number( document.getElementById('num2').value)
let z = x * y;
console.log(z);
ansArea.innerText = z;
}
function divr()
{
let x = Number( document.getElementById('num1').value)
let y = Number( document.getElementById('num2').value)
let z = x / y;
console.log(z);
ansArea.innerText = z;
}
// button.addEventListener('click', () => {
//     // alert('hi');
    
//     let x = num1.value
//     let y = num2.value
//     z = x + y;

//     // if(num1==0 && num2==0){
//     //     ansArea.innerText ='Enter number properly!!';
//     // }
//     // else{
//     // console.log('Ans is', z);
//     // 
//     // }

 
    
// });

