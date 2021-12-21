const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2:Rust", "3: C++"],
    answers: [0, 0, 0, 0]
}


/*A poll has a question, an araay of options from which people can choose, and an array with the number of replies for each option. this data is stored in the starter poll above*/

/*create a method called 'registerNewAnswer' on the poll object the method does 2 things


Display a prompt window for the user to input the number of the selected option. the prompt should look like this:

0: JavaScript
1: python
2: Rust
3: C++
(Write option number);

based on the input number, update the 'answers' array property. for example. if the option is 3, increase the value at position 3 of the array by 1. make sure to check if the input is a number and


*/



poll.registerNewAnswer = function () {
    const ans = prompt(`
    What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)`)

    if (ans > 3 || ans < 0) {
        alert(`enter a number between 0 and 3`)
    } else {
        this.answers[ans]++
    }
}

poll.displayResults = function (type) {
    
    const [a, b, c, d] = poll.answers

    if (type === 'string') {
        console.log(a, b, c, d)
    } else if (type === 'array') {
        console.log(`Poll result are ${a}, ${b}, ${c}, ${d}`)
    }
}



// poll.registerNewAnswer();

const pollFunc = poll.registerNewAnswer.bind(poll);
const pollBtn = document.querySelector('.poll')


pollBtn.addEventListener('click', pollFunc);
poll.displayResults('array')

