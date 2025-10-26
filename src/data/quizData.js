export const quizData = [
  {
    module: "Module 1 – Python Basics: printing, comments, and program setup",
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
    module:
      "Module 2 – Variables & Data Types: variables, data types, and naming conventions",
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
  {
    module:
      "Module 3 - Operators & Expressions: arithmetic, comparison, and logical operators",
    questions: [
      {
        id: "3-1",
        question: "What is the result of this expression?\n\n5 + 3 * 2",
        options: ["16", "11", "13", "10"],
        answer: "11",
      },
      {
        id: "3-2",
        question:
          "Which operator is used for exponentiation (raising to a power) in Python?",
        options: ["^", "**", "^^", "pow"],
        answer: "**",
      },
      {
        id: "3-3",
        question: "What will 10 % 3 return?",
        options: ["3", "1", "0", "10"],
        answer: "1",
      },
      {
        id: "3-4",
        question: "What will this code output?\n\nx = 9 // 2\n\nprint(x)",
        options: ["4.5", "5", "4", "Error"],
        answer: "4",
      },
      {
        id: "3-5",
        question: "What does the expression a == b do?",
        options: [
          "Checks if a and b are equal",
          "Assigns the value of b to a",
          "Returns the smaller of a and b",
          "Compares data types only",
        ],
        answer: "Checks if a and b are equal",
      },
      {
        id: "3-6",
        question: "What is the result of this comparison?\n\n4 != 5",
        options: ["False", "True", "None", "Error"],
        answer: "True",
      },
      {
        id: "3-7",
        question: "Which operator returns True only if both conditions are True?",
        options: ["or", "not", "and", "xor"],
        answer: "and",
      },
      {
        id: "3-8",
        question: "What does this expression evaluate to?\n\nTrue or False and False",
        options: ["True", "False", "None", "Error"],
        answer: "True",
      },
      {
        id: "3-9",
        question: "What is the output of:\n\nnot (5 > 2)",
        options: ["True", "False", "None", "Error"],
        answer: "False",
      },
      {
        id: "3-10",
        question: "Which of the following expressions will evaluate to True?",
        options: [
          "5 > 10 and 10 > 5",
          "3 < 4 or 4 < 3",
          "not (5 == 5)",
          "8 == 4 * 3",
        ],
        answer: "3 < 4 or 4 < 3",
      },
      {
        id: "3-11",
        question:
          "What is the result of combining operators like this?\n\nx = (3 + 2) * (4 - 1)",
        options: ["15", "9", "12", "5"],
        answer: "15",
      },
      {
        id: "3-12",
        question: "Which operator has the highest precedence in Python?",
        options: ["and", "or", "not", "**"],
        answer: "**",
      },
      {
        id: "3-13",
        question: "What does this expression return?\n\n10 / 3",
        options: ["3", "3.333...", "3.0", "4"],
        answer: "3.333...",
      },
      {
        id: "3-14",
        question: "What is printed by this code?\n\nx = 5\n\nx += 2\n\nprint(x)",
        options: ["7", "5", "2", "Error"],
        answer: "7",
      },
      {
        id: "3-15",
        question: "Which of the following is an invalid expression in Python?",
        options: ["4 < 5 < 6", "10 and 0", "3 <> 2", "5 == 5"],
        answer: "3 <> 2",
      },
    ],
  },
  {
    module: "Module 4 – Input & Output: input/output handling and type conversion",
    questions: [
      {
        id: "4-1",
        question: "Which function is used to take input from the user in Python?",
        options: ["enter()", "scan()", "input()", "read()"],
        answer: "input()",
      },
      {
        id: "4-2",
        question: "What is the data type of the value returned by input()?",
        options: ["int", "float", "str", "depends on user input"],
        answer: "str",
      },
      {
        id: "4-3",
        question:
          'What will this code print if the user types 10?\n\nx = input("Enter a number: ")\n\nprint(x + x)',
        options: ["20", "1010", "Error", "None"],
        answer: "1010",
      },
      {
        id: "4-4",
        question: "How do you convert a user’s input into an integer?",
        options: ["int(input())", "input(int())", "str(input())", "input().int()"],
        answer: "int(input())",
      },
      {
        id: "4-5",
        question:
          'What happens if the user types text instead of a number when you run this code?\n\nage = int(input("Enter your age: "))',
        options: [
          "It prints 0",
          "It ignores the input",
          "It raises a ValueError",
          "It automatically converts it",
        ],
        answer: "It raises a ValueError",
      },
      {
        id: "4-6",
        question: "What is the correct syntax for printing variables using an f-string?",
        options: [
          'print("The sum is {x + y}")',
          'print(f"The sum is {x + y}")',
          "print(\"f'The sum is {x + y}'\")",
          'print(f"The sum is x + y")',
        ],
        answer: 'print(f"The sum is {x + y}")',
      },
      {
        id: "4-7",
        question: 'What will this code output?\n\nname = "Riya"\n\nprint(f"Hello, {name}!")',
        options: ["Hello, name!", "Hello, {name}!", "Hello, Riya!", "Error"],
        answer: "Hello, Riya!",
      },
      {
        id: "4-8",
        question: 'Which of the following correctly converts a string "3.14" into a float?',
        options: ['float("3.14")', 'int("3.14")', 'str("3.14")', 'toFloat("3.14")'],
        answer: 'float("3.14")',
      },
      {
        id: "4-9",
        question: "Which of these will result in a TypeError?",
        options: [
          'print("The number is", 5)',
          'print("The number is " + "5")',
          'print("The number is " + 5)',
          'print(f"The number is {5}")',
        ],
        answer: 'print("The number is " + 5)',
      },
      {
        id: "4-10",
        question:
          'What does this code print?\n\nx = input("Enter: ")\n\nprint("You entered:", x)',
        options: [
          "Displays user input after the text “You entered:”",
          "Prints only “Enter:”",
          "Prints user input only",
          "Error",
        ],
        answer: "Displays user input after the text “You entered:”",
      },
      {
        id: "4-11",
        question:
          'What is the output if the user enters 4.5 in the following code?\n\nnum = float(input("Enter a number: "))\n\nprint(num * 2)',
        options: ["9", '"4.54.5"', "8", "9.0"],
        answer: "9.0",
      },
      {
        id: "4-12",
        question: "Which code snippet will safely handle invalid numeric input?",
        options: [
          'x = int(input("Enter a number: "))\n\nprint(x)',
          'try:\n\n    x = int(input("Enter a number: "))\n\nexcept:\n\n    print("Invalid input!")',
          'x = input(int("Enter a number: "))',
          'int("Enter a number:")',
        ],
        answer:
          'try:\n\n    x = int(input("Enter a number: "))\n\nexcept:\n\n    print("Invalid input!")',
      },
      {
        id: "4-13",
        question: "What does print() do by default at the end of every line?",
        options: [
          "Adds a comma",
          "Adds a newline (\\n)",
          "Adds a space",
          "Adds nothing",
        ],
        answer: "Adds a newline (\\n)",
      },
      {
        id: "4-14",
        question: "Which parameter in print() allows printing on the same line?",
        options: ["end", "next", "line", "continue"],
        answer: "end",
      },
      {
        id: "4-15",
        question: 'What will this code output?\n\nprint("Hi", end=" ")\n\nprint("there!")',
        options: ["Hi\nthere!", "Hi there!", "Hi\n \nthere!", "Error"],
        answer: "Hi there!",
      },
    ],
  },
];
