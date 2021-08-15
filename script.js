let history = ["2+2=4", "5+5=10", "30-20=10"];

const NEXTBTN = document.getElementById('next');
const PREVIOUSBTN = document.getElementById('prev');
const HISTORY = document.getElementById('history');

let currentIndex = 0;
NEXTBTN.addEventListener('click', () => showNextValue());
PREVIOUSBTN.addEventListener('click', () => showPreviousValue());

function showNextValue(){
    let historyTotal = history.length;
    let lastIndex = historyTotal  - 1;
    if(currentIndex <= lastIndex){
        HISTORY.innerHTML = history[currentIndex] + '<button class="remove" value="0"> Delete</button>';
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

function showPreviousValue(){
    let shownHistory = document.getElementById('history');
    let history_content = shownHistory.textContent;
    let history_value = history_content.split(" ");
    console.log(history_value)

    let actual_history = history_value[0];
    let shownHistoryIndex = history.indexOf(actual_history);

    if(shownHistoryIndex >= 0){
        if(shownHistoryIndex != 0){
            let previousIndex = shownHistoryIndex - 1;
            HISTORY.innerHTML = history[previousIndex] + '<button class="remove" value="0"> Delete</button>';
        }
        
    }else{
        // alert("This is the First History Value")
        let previousIndex = history.length - 1;
        HISTORY.innerHTML = history[previousIndex] + '<button class="remove" value="0"> Delete</button>';
    }
}