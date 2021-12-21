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


*/
