const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2:Rust", "3: C++"],
    answers: [0, 0, 0, 0],
    registerNewAnswer() {
        const ans = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(write option number)`));

        //register

        typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++

        this.displayResult('string');
    },

    displayResult(type = 'array') {
        
        if (type === 'array') {
            console.log(this.answers)
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))


/*A poll has a question, an araay of options from which people can choose, and an array with the number of replies for each option. this data is stored in the starter poll above*/

/*create a method called 'registerNewAnswer' on the poll object the method does 2 things


Display a prompt window for the user to input the number of the selected option. the prompt should look like this:

0: JavaScript
1: python
2: Rust
3: C++
(Write option number);

based on the input number, update the 'answers' array property. for example. if the option is 3, increase the value at position 3 of the array by 1. make sure to check if the input is a number and


call this method whenever the user clicks the "Answe poll" button

create a method 'displayResult' which displays the poll results. the method takes a string as an input (called 'type), which can be either 'string' or array simply display the results array as it is 'string', display a string like "Poll result are 12,2, 4, 1"

run the 'displayResults' methid at the end if each 'registerNewAnswer' method call.

Bonas: use the 'displayResults' methpod to display the 2 arrays in the test data. use both the 'array' and the string option. Do not put the arrays in the poll object! so what should the this keyword look like in this situation?
*/

poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });