let history = ["2+2=4", "5+5=10", "30-20=10"];

const NEXTBTN = document.getElementById('next');
const PREVIOUSBTN = document.getElementById('prev');
const HISTORY = document.getElementById('history');

let currentIndex = 0;
NEXTBTN.addEventListener('click', () => showNextValue());
PREVIOUSBTN.addEventListener('click', () => showPreviousValue());

const POSiTIONVIEW = document.getElementById('position');

let position = 0;
let full_position = "";
let historyTotal = history.length;

function showNextValue(){
    let lastIndex = historyTotal  - 1;

    position = currentIndex + 1;

    if(currentIndex <= lastIndex){
        full_position = position + "/" + historyTotal
        HISTORY.innerHTML = history[currentIndex] + '<button class="remove" value="0"> <img src="delete.png" title="Delete icon"></button>';
        currentIndex++;
    }else{
        full_position = "1/" + historyTotal
        currentIndex = 0;
        alert("No more history");
    }
    POSiTIONVIEW.textContent = full_position
}

function showPreviousValue(){
    let shownHistory = document.getElementById('history');
    let history_content = shownHistory.textContent;
    let history_value = history_content.split(" ");
    // console.log(history_value)

    let actual_history = history_value[0];
    let shownHistoryIndex = history.indexOf(actual_history);

    if(shownHistoryIndex >= 0){
        if(shownHistoryIndex != 0){
            let previousIndex = shownHistoryIndex - 1;

            position = previousIndex + 1;
            full_position = position + "/" + historyTotal

            HISTORY.innerHTML = history[previousIndex] + '<button class="remove" value="0"> <img src="delete.png" title="Delete icon"></button>';
        }
        
    }else{
        // alert("This is the First History Value")
        full_position = historyTotal + "/" + historyTotal

        let previousIndex = history.length - 1;
        HISTORY.innerHTML = history[previousIndex] + '<button class="remove" value="0"> <img src="delete.png" title="Delete icon"></button>';
    }

    POSiTIONVIEW.textContent = full_position

}