let history = ["2+2=4", "5+5=20", "30-20=20"];

const NEXTBTN = document.getElementById('next');
const HISTORY = document.getElementById('history');

let currentIndex = 0;
NEXTBTN.addEventListener('click', () => showNextValue());

function showNextValue(){
    let historyTotal = history.length;
    let lastIndex = historyTotal  - 1;
    if(currentIndex <= lastIndex){
        HISTORY.innerHTML = history[currentIndex] + '<button class="remove" value="0">Delete</button>';
        currentIndex++;
    }else{
        alert("No more history");
    }
    
    // let count = 0;
    // while(count <= lastIndex){
    //     console.log( history[count]);
    //     count++;
    // }
}