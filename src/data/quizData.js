export const quizData = [
  {
    module: "Module 1 – Introduction to Python",
    questions: [
      {
        id: "1-1",
        question: "What is Python mainly known for?",
        options: [
          "Low-level programming",
          "Complex syntax and memory management",
          "Readability and simplicity",
          "Being used only for mobile apps",
        ],
        answer: "Readability and simplicity",
      },
      {
        id: "1-2",
        question: "Who developed Python?",
        options: [
          "Guido van Rossum",
          "Dennis Ritchie",
          "Elon Musk",
          "James Gosling",
        ],
        answer: "Guido van Rossum",
      },
      {
        id: "1-3",
        question: "Python is considered a(n) ______ language.",
        options: [
          "Interpreted, high-level",
          "Compiled, low-level",
          "Assembly-based",
          "Binary-only",
        ],
        answer: "Interpreted, high-level",
      },
      {
        id: "1-4",
        question: "Why is Python useful for beginners?",
        options: [
          "It hides errors",
          "It forces complex syntax",
          "It has simple, human-like syntax",
          "It can only be used online",
        ],
        answer: "It has simple, human-like syntax",
      },
      {
        id: "1-5",
        question:
          "Which of the following commands runs a Python file from the terminal?",
        options: [
          "python filename.py",
          "run filename.py",
          "compile filename.py",
          "execute filename.py",
        ],
        answer: "python filename.py",
      },
      {
        id: "1-6",
        question: 'What is the output of the following code?\n\nprint("Python is fun!")',
        options: [
          '"Python is fun!"',
          "Python is fun!",
          'print("Python is fun!")',
          "SyntaxError",
        ],
        answer: "Python is fun!",
      },
      {
        id: "1-7",
        question: "What function is used to display output in Python?",
        options: ["echo()", "print()", "display()", "show()"],
        answer: "print()",
      },
      {
        id: "1-8",
        question: "What symbol is used to write a single-line comment in Python?",
        options: ["//", "#", "/*", "--"],
        answer: "#",
      },
      {
        id: "1-9",
        question: "Which of the following are examples of Python data types?",
        options: [
          "string, integer, float, boolean",
          "word, number, decimal",
          "text, whole, real",
          "char, int, bool",
        ],
        answer: "string, integer, float, boolean",
      },
      {
        id: "1-10",
        question:
          'What will this code print?\n\n# print("This line won\'t run")\n\nprint("This line will run")',
        options: [
          "Both lines print",
          "Only the first line prints",
          "Only the second line prints",
          "Error",
        ],
        answer: "Only the second line prints",
      },
      {
        id: "1-11",
        question:
          "Which environment can you use to write and test Python code without installation?",
        options: [
          "Online Python IDEs like Replit or Jupyter Notebook",
          "Only IDLE on Windows",
          "Only Linux terminal",
          "Python cannot be run online",
        ],
        answer: "Online Python IDEs like Replit or Jupyter Notebook",
      },
      {
        id: "1-12",
        question: "What is required before you can use Python locally?",
        options: [
          "Install Python interpreter",
          "Install Java compiler",
          "Download an IDE only",
          "Purchase a license",
        ],
        answer: "Install Python interpreter",
      },
      {
        id: "1-13",
        question: "Which of the following is a valid Python variable?",
        options: ["2name", "_value", "my-variable", "for"],
        answer: "_value",
      },
      {
        id: "1-14",
        question: "What is the correct way to print multiple items in one line?",
        options: [
          'print("Hello" + "World")',
          'print("Hello", "World")',
          "Both A and B",
          "None of the above",
        ],
        answer: "Both A and B",
      },
      {
        id: "1-15",
        question: "Which of these best describes Python’s dynamic typing?",
        options: [
          "You must declare variable types",
          "Python automatically detects variable types",
          "Variable types cannot change",
          "All variables must be strings",
        ],
        answer: "Python automatically detects variable types",
      },
    ],
  },
  {
    module: "Module 2 – Variable and Data Types",
    questions: [
      {
        id: "2-1",
        question: "What is a variable in Python?",
        options: [
          "A fixed value that never changes",
          "A name that stores a value in memory",
          "A function used to display output",
          "A keyword that defines a loop",
        ],
        answer: "A name that stores a value in memory",
      },
      {
        id: "2-2",
        question: "Which of the following is a valid variable name?",
        options: ["1value", "value_1", "my-variable", "if"],
        answer: "value_1",
      },
      {
        id: "2-3",
        question: "Which of the following is NOT a valid variable name?",
        options: ["myVar", "_var", "total$", "value"],
        answer: "total$",
      },
      {
        id: "2-4",
        question: "What will this code output?\n\nx = 10\n\ny = 3.5\n\nprint(x + y)",
        options: ["13.5", "103.5", "Error", "13"],
        answer: "13.5",
      },
      {
        id: "2-5",
        question: "What data type is the result of 5 + 3.0?",
        options: ["int", "float", "str", "bool"],
        answer: "float",
      },
      {
        id: "2-6",
        question: "Which of these correctly assigns a string to a variable?",
        options: ['name = "Riya"', "name = 'Riya'", "name = Riya", "Both A and B"],
        answer: "Both A and B",
      },
      {
        id: "2-7",
        question: "What is the value and type of a after this code runs?\n\na = True",
        options: ["1, int", '"True", str', "True, bool", "None, NoneType"],
        answer: "True, bool",
      },
      {
        id: "2-8",
        question: 'What does the following code print?\n\nx = "10"\n\ny = 2\n\nprint(x * y)',
        options: ["20", '"20"', "1010", '"1010"'],
        answer: '"1010"',
      },
      {
        id: "2-9",
        question: "Which function is used to check a variable’s data type?",
        options: ["typeof()", "checktype()", "type()", "datatype()"],
        answer: "type()",
      },
      {
        id: "2-10",
        question: 'What happens if you do this?\n\nx = 5\n\nx = "Hello"',
        options: [
          "Error: cannot change variable type",
          "Python will automatically reassign x to a string",
          "It will concatenate",
          "Program crashes",
        ],
        answer: "Python will automatically reassign x to a string",
      },
      {
        id: "2-11",
        question: "Which statement correctly concatenates two strings?",
        options: [
          '"Hello" * "World"',
          '"Hello" + "World"',
          '"Hello" and "World"',
          'concat("Hello", "World")',
        ],
        answer: '"Hello" + "World"',
      },
      {
        id: "2-12",
        question: "What is the output of:\n\na = 7\n\nb = 2\n\nprint(a // b)",
        options: ["3.5", "3", "4", "3.0"],
        answer: "3",
      },
      {
        id: "2-13",
        question: "What is the best practice for naming variables?",
        options: [
          "Use spaces between words",
          "Use descriptive names and lowercase_with_underscores",
          "Start variable names with numbers",
          "Use only capital letters",
        ],
        answer: "Use descriptive names and lowercase_with_underscores",
      },
      {
        id: "2-14",
        question: 'What will this code print?\n\nx = "3"\n\ny = 4\n\nprint(int(x) + y)',
        options: ['"34"', "7", "3 + 4", "Error"],
        answer: "7",
      },
      {
        id: "2-15",
        question: "What is the data type of the value False?",
        options: ["int", "bool", "str", "NoneType"],
        answer: "bool",
      },
    ],
  },
];
