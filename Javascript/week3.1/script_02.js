//creating a counter with the help of updating an element. using inner.HTML
let counter=0;

function update(){
    document.querySelector("h4").innerHTML=counter;
    counter=counter+1;
}
//setInterval(update,1000);
