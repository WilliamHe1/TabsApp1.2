
function showTab(tabIndex) {
    // Hide all content divs
    const contentDivs = document.querySelectorAll('.content');
    const tabs = document.querySelectorAll('.tab');
    contentDivs.forEach((div) => {
        div.style.display = 'none';
    });
    tabs.forEach((tab) => {
        tab.style.backgroundColor = 'gray';
        tab.style.color = 'white';
    });

    // Show the selected content div
    const selectedContent = document.getElementById(`content-${tabIndex}`);
    const selectedTab = document.getElementById(`tab-${tabIndex}`)
    selectedContent.style.display = 'block';
    selectedTab.style.backgroundColor = 'white';
    selectedTab.style.color = 'black';
}
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.classList.add('task');

        const checkmark = document.createElement('span');
        checkmark.classList.add('checkmark');
        checkmark.innerHTML = '-';
        checkmark.addEventListener('click', toggleTask)

        const label = document.createElement('label');
        label.textContent = taskText;
        label.addEventListener('click', toggleTask)

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', deleteTask);

        taskItem.appendChild(checkmark);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = '';
    }

    function toggleTask(event) {
        const taskItem = event.target.parentElement;
        const checkmark = taskItem.querySelector('.checkmark');
        taskItem.classList.toggle('done');
        if (taskItem.classList.contains('done')) {
            checkmark.innerHTML = '✓';
        } else {
            checkmark.innerHTML = '-';
        }
    }

    function deleteTask(event) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }

    function performGuess() {
        const div = document.getElementById("tab2Result");
        const radioButtons = document.querySelectorAll('input[name="Player1"]');
        let answer;

        for (const radioButton of radioButtons){
            if (radioButton.checked){

                answer = radioButton.value;
                break;
            }
        }
        div.innerHTML = `The computer guesses that player 1 is wearing a ${answer} 
        Hat while player 2 is wearing an Orange Hat.`
    }

    //start tab-4

document.getElementById('profile-img').addEventListener('click', showError);
document.getElementById('close-error').addEventListener('click', closeError);

function showError() {
    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.style.display = 'block';
}

function closeError() {
    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.style.display = 'none';
}
//end tab-4

// Show the initial tab (Start by showing tab 1.)
showTab(0);