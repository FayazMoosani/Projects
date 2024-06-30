const questions = [
    {
        question: "You can disable implicit variable type assignment by enabling the compiler option:",
        options: ["no Implicit Any", "no Auto Type", "Implicit = FALSE", "auto Type Assignment = FALSE"],
        answer: 0
    },
    {
        question: "True or False: TypeScript can always correctly infer a variables type.",
        options: ["False", "True"],
        answer: 0
    },
    {
        question: "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        options: ["Implicit", "Explicit"],
        answer: 1
    },
    {
        question: "What are the three main 'simple types' in TypeScript?",
        options: ["Object,Array,Symbol", "Array,Object,Boolean", "Object,String,Number", "Boolean,String,Number"],
        answer: 3
    },
    {
        question: "You can enable 'undefined' and 'null' types to be accounted for by enabling the compiler property:",
        options: ["no Falsey Inits", "strict Checks Required", "no Auto Type", "strict Null Checks"],
        answer: 3
    },
    {
        question: "______ is similar to 'any', but a safer alternative when uncertain about the type.",
        options: ["never", "similar", "unknown"],
        answer: 2
    },
    {
        question: "What is the inherited type for the variable example in `const example = ['Dylan']`?",
        options: ["any[]", "unknown[]", "string", "string[]"],
        answer: 3
    },
    {
        question: "What does the 'readonly' access modifier do for an array variable assignment like: `const codeNames: readonly string[] = ['Coding', 'God']`?",
        options: ["Allows no changes and is there simply to be read from and not modified", "Makes you read it for better clean code", "Allows only adding but not deleting elements in the array", "Makes it private and can only be used in the file its created"],
        answer: 0
    },
    {
        question: "True or False: TypeScript will always correctly infer the type of an array.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: a Tuple and an Array are the same thing when discussing types",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Which is a successful example of this tuple `[number, string]`?",
        options: ["const ourTuple = [101, 101, 'Coding God', 'Coding God']", "const ourTuple = [101]", "const ourTuple = [101, 'Coding God']", "const ourTuple = ['Coding God', 101]"],
        answer: 2
    },
    {
        question: "Type Aliases are mostly used with ______.",
        options: ["Booleans", "Strings", "Numbers"],
        answer: 1
    },
    {
        question: "True or False: Interfaces are similar to type aliases, but only for object types?",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "________ an interface will have the same properties as that interface.",
        options: ["Improving", "Idolizing", "Extending", "Duplicating"],
        answer: 2
    },
    {
        question: "What are the two types of enums?",
        options: ["Number and Number Array", "Number and Boolean", "String and Boolean", "String and Number"],
        answer: 3
    },
    {
        question: "Numeric enums first value is defaulted to what?",
        options: ["0", "1", "5", "10"],
        answer: 0
    },
    {
        question: "True or False: 'keyof' can be used with index signatures to extract the index type.",
        options: ["False", "True"],
        answer: 1
    },
    {
        question: "True or False: Generics can not be assigned default values.",
        options: ["False", "True"],
        answer: 1
    },
    {
        question: "Definitely Typed is...",
        options: ["a project that provides a central repository of TypeScript definitions for NPM packages which do not have types", "a superset of TypeScript", "the official name of TypeScript", "a project whose goal is to make types dynamic"],
        answer: 0
    },
    {
        question: "What is the type of the parameter: `function ex(param1?: string){}`?",
        options: ["string", "unknown", "string | undefined", "string | null"],
        answer: 2
    },
    {
        question: "_____ is a return type for when nothing is returned.",
        options: ["any", "unknown", "any[]", "void"],
        answer: 3
    },
    {
        question: "Access modifiers control the ______ of properties and methods.",
        options: ["visibility", "type", "inheritance", "mocking"],
        answer: 0
    },
    {
        question: "True or False: public modifiers allow access to the class members from anywhere.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: protected modifiers only are allowed in the inherited class.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "When a class extends another class and replaces the members of its parent it is called what?",
        options: ["inheriting", "extending", "overload", "override"],
        answer: 3
    },
];
class Quiz {
    questions;
    score;
    currentQuestionIndex;
    constructor(questions) {
        this.questions = questions;
        this.score = 0;
        this.currentQuestionIndex = 0;
    }
    askQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            const question = this.questions[this.currentQuestionIndex];
            console.log(`Q${this.currentQuestionIndex + 1}: ${question.question}`);
            question.options.forEach((option, index) => {
                console.log(`${index}: ${option}`);
            });
        }
        else {
            this.endQuiz();
        }
    }
    checkAnswer(answer) {
        const question = this.questions[this.currentQuestionIndex];
        if (answer === question.answer) {
            console.log("Correct!");
            this.score++;
        }
        else {
            console.log(`Wrong! The correct answer was ${question.options[question.answer]}.`);
        }
        this.currentQuestionIndex++;
        this.askQuestion();
    }
    endQuiz() {
        console.log(`Quiz over! Your score is ${this.score}/${this.questions.length}.`);
    }
}
const quiz = new Quiz(questions);
quiz.askQuestion();
process.stdin.on('data', (data) => {
    const answer = parseInt(data.toString().trim(), 10);
    if (!isNaN(answer)) {
        quiz.checkAnswer(answer);
    }
    else {
        console.log("Please enter a valid number.");
    }
});
export {};
//  Code With FM => FAYAZ MOOSANI
