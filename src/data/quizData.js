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
  {
    module: "Module 5 – Conditional Statements",
    questions: [
      {
        id: "5-1",
        question:
          "Which keyword is used to start a conditional statement in Python?",
        options: ["when", "if", "for", "check"],
        answer: "if",
      },
      {
        id: "5-2",
        question:
          'What will this code print?\n\nx = 5\n\nif x > 3:\n\n    print("Yes")\n\nelse:\n\n    print("No")',
        options: ["Yes", "No", "3", "Error"],
        answer: "Yes",
      },
      {
        id: "5-3",
        question: "What is the correct structure of an if...else statement?",
        options: [
          "if condition:\n\n    # code\n\nelse:\n\n    # code",
          "if condition\n\n    # code\n\nelse condition\n\n    # code",
          "if (condition)\n\n    # code;\n\nelse\n\n    # code;",
          "Both A and C",
        ],
        answer: "if condition:\n\n    # code\n\nelse:\n\n    # code",
      },
      {
        id: "5-4",
        question: "Which of the following is valid syntax for multiple conditions?",
        options: [
          "if a > b:\n\nelif a == b:\n\nelse:",
          "if a > b:\n\n    ...\n\nelif a == b:\n\n    ...\n\nelse:\n\n    ...",
          "if (a > b)\n\n    ...\n\nelse if (a == b)\n\n    ...",
          "if a > b, elif a == b, else",
        ],
        answer:
          "if a > b:\n\n    ...\n\nelif a == b:\n\n    ...\n\nelse:\n\n    ...",
      },
      {
        id: "5-5",
        question:
          'What will this code print?\n\nx = 10\n\nif x > 15:\n\n    print("A")\n\nelif x > 5:\n\n    print("B")\n\nelse:\n\n    print("C")',
        options: ["A", "B", "C", "Error"],
        answer: "B",
      },
      {
        id: "5-6",
        question:
          "What will happen if no condition in an if–elif chain is true?",
        options: [
          "The program crashes",
          "The program skips the block",
          "It prints all blocks",
          "The first condition runs",
        ],
        answer: "The program skips the block",
      },
      {
        id: "5-7",
        question:
          "Which statement checks if a variable age is between 13 and 19 (inclusive)?",
        options: [
          "if age >= 13 and age <= 19:",
          "if 13 < age < 19:",
          "Both A and B",
          "None",
        ],
        answer: "Both A and B",
      },
      {
        id: "5-8",
        question:
          'What does this code print?\n\nx = True\n\nif not x:\n\n    print("Off")\n\nelse:\n\n    print("On")',
        options: ["Off", "On", "True", "Error"],
        answer: "On",
      },
      {
        id: "5-9",
        question: "Which of the following correctly checks if num is even?",
        options: [
          "if num / 2 == 0:",
          "if num % 2 == 0:",
          "if num == 2:",
          "if num % 2:",
        ],
        answer: "if num % 2 == 0:",
      },
      {
        id: "5-10",
        question:
          'What is the result of this code?\n\na = 3\n\nb = 5\n\nif a > b:\n\n    print("a")\n\nelse:\n\n    if b > 2:\n\n        print("b")',
        options: ["a", "b", "a b", "Error"],
        answer: "b",
      },
      {
        id: "5-11",
        question: "What type of statement is if in Python?",
        options: ["Iteration", "Selection", "Repetition", "Declaration"],
        answer: "Selection",
      },
      {
        id: "5-12",
        question:
          "Which of the following examples uses a nested conditional correctly?",
        options: [
          'if x > 0:\n\n    if x < 10:\n\n        print("Between 0 and 10")',
          'if x > 0 and x < 10:\n\n    print("Between 0 and 10")',
          "Both A and B",
          "None",
        ],
        answer: "Both A and B",
      },
      {
        id: "5-13",
        question:
          'What is printed by this code?\n\na = 10\n\nb = 20\n\nif a > b:\n\n    print("Greater")\n\nelif a == b:\n\n    print("Equal")\n\nelse:\n\n    print("Smaller")',
        options: ["Greater", "Equal", "Smaller", "Error"],
        answer: "Smaller",
      },
      {
        id: "5-14",
        question: "Which of these expressions evaluates to True?",
        options: ["not (5 > 10)", "5 > 10 and 10 > 20", "3 == 4", "7 != 7"],
        answer: "not (5 > 10)",
      },
      {
        id: "5-15",
        question:
          'What will this code print?\n\nx = 10\n\nif x > 5:\n\n    if x < 15:\n\n        print("Inside range")\n\n    else:\n\n        print("Too high")\n\nelse:\n\n    print("Too low")',
        options: ["Too low", "Too high", "Inside range", "Error"],
        answer: "Inside range",
      },
    ],
  },
  {
    module: "Module 6 – Loops",
    questions: [
      {
        id: "6-1",
        question:
          "Which type of loop is best used when you know how many times to repeat an action?",
        options: ["while loop", "for loop", "do-while loop", "repeat loop"],
        answer: "for loop",
      },
      {
        id: "6-2",
        question: "What will this code output?\n\nfor i in range(3):\n\n    print(i)",
        options: ["0 1 2", "1 2 3", "0 1 2 3", "3 2 1"],
        answer: "0 1 2",
      },
      {
        id: "6-3",
        question: "What does range(5) generate?",
        options: [
          "[0, 1, 2, 3, 4, 5]",
          "[1, 2, 3, 4, 5]",
          "[0, 1, 2, 3, 4]",
          "[5, 4, 3, 2, 1]",
        ],
        answer: "[0, 1, 2, 3, 4]",
      },
      {
        id: "6-4",
        question:
          "How many times will this loop run?\n\nfor i in range(2, 10, 3):\n\n    print(i)",
        options: ["3", "4", "2", "5"],
        answer: "3",
      },
      {
        id: "6-5",
        question:
          'What is the output of this code?\n\ncount = 0\n\nwhile count < 3:\n\n    print("Hi")\n\n    count += 1',
        options: [
          "Prints “Hi” once",
          "Prints “Hi” three times",
          "Infinite loop",
          "Error",
        ],
        answer: "Prints “Hi” three times",
      },
      {
        id: "6-6",
        question: "Which keyword is used to skip the current iteration of a loop?",
        options: ["break", "continue", "skip", "next"],
        answer: "continue",
      },
      {
        id: "6-7",
        question: "What does the break statement do?",
        options: [
          "Stops the loop completely",
          "Skips to the next iteration",
          "Restarts the loop",
          "Ends the program",
        ],
        answer: "Stops the loop completely",
      },
      {
        id: "6-8",
        question:
          "What will this code print?\n\nfor i in range(5):\n\n    if i == 3:\n\n        break\n\n    print(i)",
        options: ["0 1 2 3 4", "0 1 2", "3 4", "0 1 2 3"],
        answer: "0 1 2",
      },
      {
        id: "6-9",
        question:
          "What will this code output?\n\nfor i in range(5):\n\n    if i == 2:\n\n        continue\n\n    print(i)",
        options: ["0 1 2 3 4", "2 3 4", "0 1 3 4", "0 1 2"],
        answer: "0 1 3 4",
      },
      {
        id: "6-10",
        question:
          "What happens if the condition in a while loop is always True and there’s no break?",
        options: [
          "The loop runs once",
          "The program stops automatically",
          "Infinite loop occurs",
          "Error",
        ],
        answer: "Infinite loop occurs",
      },
      {
        id: "6-11",
        question: 'What will be printed?\n\nfor char in "Riya":\n\n    print(char)',
        options: ["R i y a", "['R', 'i', 'y', 'a']", '"Riya"', "Error"],
        answer: "R i y a",
      },
      {
        id: "6-12",
        question:
          "What is the output of the nested loop below?\n\nfor i in range(2):\n\n    for j in range(2):\n\n        print(i, j)",
        options: ["(0,0), (1,1)", "0 1", "0 0\n0 1\n1 0\n1 1", "Error"],
        answer: "0 0\n0 1\n1 0\n1 1",
      },
      {
        id: "6-13",
        question:
          'What does this loop print?\n\ni = 0\n\nwhile i < 3:\n\n    print(i)\n\n    i += 1\n\nelse:\n\n    print("Done")',
        options: ["0 1 2 Done", "0 1 2", "Done", "Infinite loop"],
        answer: "0 1 2 Done",
      },
      {
        id: "6-14",
        question: "Which of these loops will NOT execute at all?",
        options: [
          'for i in range(0):\n\n    print(i)',
          'while False:\n\n    print("Hi")',
          "Both A and B",
          "Neither",
        ],
        answer: "Both A and B",
      },
      {
        id: "6-15",
        question:
          'What does this code print?\n\nfor i in range(1, 6):\n\n    if i % 2 == 0:\n\n        print(i, "even")\n\n    else:\n\n        print(i, "odd")',
        options: [
          "Prints all numbers as odd",
          "Prints numbers 1–5 labeled even or odd",
          "Prints only even numbers",
          "Error",
        ],
        answer: "Prints numbers 1–5 labeled even or odd",
      },
    ],
  },
  {
    module: "Module 7 – Functions",
    questions: [
      {
        id: "7-1",
        question: "What keyword is used to define a function in Python?",
        options: ["func", "define", "def", "function"],
        answer: "def",
      },
      {
        id: "7-2",
        question:
          'What will this code output?\n\ndef greet():\n\n    print("Hello!")\n\ngreet()',
        options: ["Nothing", "Hello!", "greet", "Error"],
        answer: "Hello!",
      },
      {
        id: "7-3",
        question:
          "Which of the following correctly defines a function that takes no arguments and returns 5?",
        options: [
          "def num(): return 5",
          "def num: return 5",
          "function num(): return 5",
          "define num(): return 5",
        ],
        answer: "def num(): return 5",
      },
      {
        id: "7-4",
        question:
          "What is the output?\n\ndef add(a, b):\n\n    return a + b\n\nprint(add(2, 3))",
        options: ["23", "5", "2 + 3", "Error"],
        answer: "5",
      },
      {
        id: "7-5",
        question: "What happens if a function doesn’t include a return statement?",
        options: [
          "It returns None",
          "It causes an error",
          "It stops the program",
          "It returns 0",
        ],
        answer: "It returns None",
      },
      {
        id: "7-6",
        question:
          "What will this print?\n\ndef f(x):\n\n    print(x * 2)\n\nresult = f(3)\n\nprint(result)",
        options: ["6 6", "3 6", "6 None", "None 6"],
        answer: "6 None",
      },
      {
        id: "7-7",
        question: "What is the correct way to call a function named display?",
        options: ["display", "call display()", "display()", "def display()"],
        answer: "display()",
      },
      {
        id: "7-8",
        question:
          "What is the output?\n\ndef test(a, b=2):\n\n    return a * b\n\nprint(test(3))",
        options: ["6", "5", "Error", "None"],
        answer: "6",
      },
      {
        id: "7-9",
        question:
          "What will this code output?\n\ndef calc(x, y):\n\n    return x + y, x - y\n\nprint(calc(5, 2))",
        options: ["7", "(7, 3)", "[7, 3]", "Error"],
        answer: "(7, 3)",
      },
      {
        id: "7-10",
        question: "What is a recursive function?",
        options: [
          "A function that calls another function",
          "A function that calls itself",
          "A function that repeats a loop",
          "A built-in function",
        ],
        answer: "A function that calls itself",
      },
      {
        id: "7-11",
        question:
          "What will this code print?\n\ndef factorial(n):\n\n    if n == 1:\n\n        return 1\n\n    return n * factorial(n - 1)\n\nprint(factorial(3))",
        options: ["6", "3", "9", "Error"],
        answer: "6",
      },
      {
        id: "7-12",
        question: "What is the scope of a variable declared inside a function?",
        options: ["Global", "Local", "Universal", "Static"],
        answer: "Local",
      },
      {
        id: "7-13",
        question:
          "What is the output?\n\nx = 10\n\ndef change():\n\n    x = 5\n\nchange()\n\nprint(x)",
        options: ["5", "10", "0", "Error"],
        answer: "10",
      },
      {
        id: "7-14",
        question:
          "What is the output of this code?\n\nsquare = lambda x: x * x\n\nprint(square(4))",
        options: ["8", "4", "16", "Error"],
        answer: "16",
      },
      {
        id: "7-15",
        question:
          'What will this code output?\n\ndef outer():\n\n    x = "Python"\n\n    def inner():\n\n        print("Inner:", x)\n\n    inner()\n\nouter()',
        options: ["Inner: Python", "Python Inner", "Error", "Nothing"],
        answer: "Inner: Python",
      },
    ],
  },
  {
    module: "Module 8 – Collections",
    questions: [
      {
        id: "8-1",
        question: "Which of the following creates a list in Python?",
        options: ["{1, 2, 3}", "(1, 2, 3)", "[1, 2, 3]", "<1, 2, 3>"],
        answer: "[1, 2, 3]",
      },
      {
        id: "8-2",
        question: "Lists in Python are:",
        options: ["Immutable", "Mutable", "Fixed in size", "None of the above"],
        answer: "Mutable",
      },
      {
        id: "8-3",
        question:
          'What is the output of the following?\n\nfruits = ["apple", "banana", "cherry"]\n\nprint(fruits[1])',
        options: ["apple", "banana", "cherry", "Error"],
        answer: "banana",
      },
      {
        id: "8-4",
        question:
          "What will this code print?\n\nnums = [1, 2, 3]\n\nnums.append(4)\n\nprint(nums)",
        options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 1, 2, 3]", "Error"],
        answer: "[1, 2, 3, 4]",
      },
      {
        id: "8-5",
        question:
          "What is the output?\n\na = [10, 20, 30]\n\na[1] = 50\n\nprint(a)",
        options: ["[10, 50, 30]", "[50, 20, 30]", "[10, 20, 30, 50]", "Error"],
        answer: "[10, 50, 30]",
      },
      {
        id: "8-6",
        question: "Which of the following correctly defines a tuple?",
        options: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "<1, 2, 3>"],
        answer: "(1, 2, 3)",
      },
      {
        id: "8-7",
        question: "Tuples are:",
        options: ["Mutable", "Immutable", "Editable", "None of the above"],
        answer: "Immutable",
      },
      {
        id: "8-8",
        question:
          "What will this code output?\n\nt = (1, 2, 3)\n\nprint(t[0])",
        options: ["0", "1", "2", "Error"],
        answer: "1",
      },
      {
        id: "8-9",
        question:
          "What is the result of this code?\n\nt = (5, 10, 15)\n\nt[0] = 20",
        options: ["(20, 10, 15)", "Error", "[20, 10, 15]", "None"],
        answer: "Error",
      },
      {
        id: "8-10",
        question:
          'What will this code print?\n\nperson = {"name": "Riya", "age": 17}\n\nprint(person["name"])',
        options: ["name", '"name"', "Riya", "Error"],
        answer: "Riya",
      },
      {
        id: "8-11",
        question:
          'Which of the following adds a new key-value pair to a dictionary?\n\nstudent = {"name": "Riya"}',
        options: [
          'student.add("age", 16)',
          'student.update("age": 16)',
          'student["age"] = 16',
          'insert(student, "age", 16)',
        ],
        answer: 'student["age"] = 16',
      },
      {
        id: "8-12",
        question:
          'What will this code output?\n\ncolors = ["red", "green", "blue"]\n\nfor c in colors:\n\n    print(c)',
        options: [
          "red green blue",
          "['red', 'green', 'blue']",
          "Error",
          "Only red",
        ],
        answer: "red green blue",
      },
      {
        id: "8-13",
        question: "Which statement checks if a key exists in a dictionary?",
        options: [
          'if "name" in student:',
          'if student.has("name"):',
          'if "name" exists student:',
          'if haskey(student, "name"):',
        ],
        answer: 'if "name" in student:',
      },
      {
        id: "8-14",
        question: "What is the output of:\n\nnumbers = [1, 2, 3, 4]\n\nprint(numbers[-1])",
        options: ["1", "4", "-1", "Error"],
        answer: "4",
      },
      {
        id: "8-15",
        question:
          'What will this print?\n\ndata = {"a": 1, "b": 2, "c": 3}\n\nfor key, value in data.items():\n\n    print(key, value)',
        options: [
          "a 1 b 2 c 3",
          "(a,1), (b,2), (c,3)",
          "Error",
          "Only keys printed",
        ],
        answer: "a 1 b 2 c 3",
      },
    ],
  },
  {
    module: "Module 9 – Modules & Libraries",
    questions: [
      {
        id: "9-1",
        question: "Which keyword is used to include a module in Python?",
        options: ["include", "import", "require", "load"],
        answer: "import",
      },
      {
        id: "9-2",
        question: "Which of the following imports the entire math module?",
        options: ["import math", "from math import *", "Both A and B", "include math"],
        answer: "Both A and B",
      },
      {
        id: "9-3",
        question: "What does math.sqrt(16) return?",
        options: ["8", "4", "16", "Error"],
        answer: "4",
      },
      {
        id: "9-4",
        question:
          "What is the output of:\n\nimport random\n\nprint(random.randint(1, 5))",
        options: [
          "1 to 5 (inclusive) random integer",
          "1 to 4 random integer",
          "0 to 5 random integer",
          "Error",
        ],
        answer: "1 to 5 (inclusive) random integer",
      },
      {
        id: "9-5",
        question:
          "Which statement imports only the pi constant from the math module?",
        options: [
          "from math import pi",
          "import math.pi",
          "import pi from math",
          "from math import *",
        ],
        answer: "from math import pi",
      },
      {
        id: "9-6",
        question: "What will this print?\n\nimport math\n\nprint(math.ceil(4.2))",
        options: ["4", "5", "4.2", "Error"],
        answer: "5",
      },
      {
        id: "9-7",
        question: "What does math.floor(3.9) return?",
        options: ["4", "3", "3.9", "Error"],
        answer: "3",
      },
      {
        id: "9-8",
        question: "Which module generates random floating-point numbers?",
        options: ["random", "math", "os", "sys"],
        answer: "random",
      },
      {
        id: "9-9",
        question: "Which is the correct way to install an external Python package?",
        options: [
          "pip install package_name",
          "python install package_name",
          "import package_name",
          "include package_name",
        ],
        answer: "pip install package_name",
      },
      {
        id: "9-10",
        question: "What will random.choice([10, 20, 30]) do?",
        options: [
          "Return the sum of the list",
          "Return a random element from the list",
          "Return 10 always",
          "Return an error",
        ],
        answer: "Return a random element from the list",
      },
      {
        id: "9-11",
        question:
          "Which of the following is a standard Python library for working with dates?",
        options: ["datetime", "calendar", "time", "All of the above"],
        answer: "All of the above",
      },
      {
        id: "9-12",
        question: "What does from math import ceil allow you to do?",
        options: [
          "Use ceil() directly without math. prefix",
          "Import all functions in math",
          "Only use floor()",
          "Import external packages",
        ],
        answer: "Use ceil() directly without math. prefix",
      },
      {
        id: "9-13",
        question: "What happens if you try to import a non-existent module?",
        options: [
          "Python ignores it",
          "Python raises ModuleNotFoundError",
          "Python installs it automatically",
          "Nothing",
        ],
        answer: "Python raises ModuleNotFoundError",
      },
      {
        id: "9-14",
        question: "Which of these is a valid use of the random module?",
        options: [
          "random.randint(1, 100)",
          "random.shuffle([1,2,3,4])",
          "random.choice(['a','b','c'])",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: "9-15",
        question: "Which command shows the version of an installed package?",
        options: [
          "pip version package_name",
          "pip show package_name",
          "python --version package_name",
          "pip list package_name",
        ],
        answer: "pip show package_name",
      },
    ],
  },
  {
    module: "Module 10 – File Handling & Exceptions",
    questions: [
      {
        id: "10-1",
        question: "Which mode opens a file for reading only?",
        options: ['"r"', '"w"', '"a"', '"rw"'],
        answer: '"r"',
      },
      {
        id: "10-2",
        question:
          "Which mode opens a file for writing and overwrites existing content?",
        options: ['"r"', '"w"', '"a"', '"x"'],
        answer: '"w"',
      },
      {
        id: "10-3",
        question: "Which mode opens a file for appending content at the end?",
        options: ['"w"', '"a"', '"r"', '"ra"'],
        answer: '"a"',
      },
      {
        id: "10-4",
        question:
          'What does this code do?\n\nf = open("file.txt", "r")\n\ncontent = f.read()\n\nf.close()',
        options: [
          "Writes to a file",
          "Reads the entire file content",
          "Deletes the file",
          "Creates a new file",
        ],
        answer: "Reads the entire file content",
      },
      {
        id: "10-5",
        question: "What method reads one line at a time from a file?",
        options: ["read()", "readline()", "readlines()", "line()"],
        answer: "readline()",
      },
      {
        id: "10-6",
        question: 'What will f.write("Hello") do?',
        options: [
          "Reads content",
          'Writes "Hello" to the file',
          "Deletes file",
          'Prints "Hello"',
        ],
        answer: 'Writes "Hello" to the file',
      },
      {
        id: "10-7",
        question: "Which statement correctly closes a file?",
        options: ["f.stop()", "f.close()", "close(f)", "f.end()"],
        answer: "f.close()",
      },
      {
        id: "10-8",
        question: "What is the purpose of the try block?",
        options: [
          "To handle syntax errors",
          "To test a block of code for errors",
          "To exit the program",
          "To write to a file",
        ],
        answer: "To test a block of code for errors",
      },
      {
        id: "10-9",
        question: "Which block executes if an exception occurs?",
        options: ["try", "except", "else", "finally"],
        answer: "except",
      },
      {
        id: "10-10",
        question: "What does the finally block do?",
        options: [
          "Executes only if there’s an error",
          "Executes only if no error occurs",
          "Executes regardless of error",
          "Stops program execution",
        ],
        answer: "Executes regardless of error",
      },
      {
        id: "10-11",
        question:
          'What exception is raised when trying to open a non-existent file in "r" mode?',
        options: ["FileError", "IOError", "FileNotFoundError", "ValueError"],
        answer: "FileNotFoundError",
      },
      {
        id: "10-12",
        question:
          'What will this code print?\n\ntry:\n\n    x = 5 / 0\n\nexcept ZeroDivisionError:\n\n    print("Error occurred")',
        options: ["5", "0", "Error occurred", "ZeroDivisionError"],
        answer: "Error occurred",
      },
      {
        id: "10-13",
        question:
          "Which of these is the correct syntax for opening a file safely using with?",
        options: [
          'with open("file.txt") as f:',
          'with f = open("file.txt"):',
          'open("file.txt") as f:',
          'with open("file.txt", "r") as f:',
        ],
        answer: 'with open("file.txt", "r") as f:',
      },
      {
        id: "10-14",
        question: "Which method reads all lines from a file as a list?",
        options: ["read()", "readline()", "readlines()", "lines()"],
        answer: "readlines()",
      },
      {
        id: "10-15",
        question: "What is a common debugging tip when file operations fail?",
        options: [
          "Check file path and permissions",
          "Ignore the error",
          'Use print("debug") randomly',
          "Close Python and reopen",
        ],
        answer: "Check file path and permissions",
      },
    ],
  },
];
