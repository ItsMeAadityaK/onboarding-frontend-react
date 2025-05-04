1. Simplicity
Keep your code as straightforward as possible. Avoid unnecessary complexity and focus on clear, direct solutions. Simple code is easier to read, test, and maintain.

2. Readability
Write code that others (and future you) can easily understand. Use meaningful variable and function names, and structure your code to be self-explanatory.

3. Maintainability
Organize your code so that it's easy to update and extend. Well-structured code allows future developers to make changes without introducing bugs.

4. Consistency
Stick to a consistent coding style throughout your project. This includes naming conventions, indentation, and file organization. Consistency makes your codebase more predictable and easier to navigate.

5. Efficiency
Write code that performs well, but don't over-optimize prematurely. Focus on writing clean and efficient code, and optimize when necessary based on actual performance needs.


If we take an example of def calc(x,y):return x+y
then the improved code will be 
def Calculate_sum(num1,num2)
    """Returns the sum of number 1 and number 2"""
    return num1 + num2


After configuring ESLint with a detailed rule set and running it on my code, I saw just how many small issues add up — things like inconsistent spacing, missing semicolons, and unused variables. I also ran Prettier to format the code automatically. Once everything was cleaned up, the code looked a lot more organized and was easier to read. Having a consistent style makes the project feel more professional and reduces confusion when working with others or revisiting the code later. The linter really helps enforce discipline, and I can see how it would prevent subtle bugs or messy code from slipping through in a team setting.


A good variable name clearly describes what the value represents. In the first version, a, b, and c don’t give any context, which makes the code hard to understand. After changing the names to width, height, and area, it’s much easier to see what the code is doing. Refactoring made the code more readable and meaningful without changing any logic. Even small name changes can make a big difference.


The original code repeated the same console.log structure three times with only the name changing. This kind of duplication can lead to errors if I later need to update the message or format — I’d have to remember to change it everywhere. By refactoring with a greetUser() function, the code is now cleaner and easier to maintain. If I ever want to change the greeting, I only have to update it in one place. It also makes the code more reusable and scalable if more users are added later.

Breaking down functions into smaller ones is helpful because it makes the code easier to read, test, and update. In my example, I had one function that printed a user's name, age, and also checked if they were an adult — all in one place. It worked, but everything was mixed together, and it wasn’t very clear what each part was doing.
After refactoring, I created three smaller functions: one to print the name, one for the age, and one to check if the person is an adult. This made the structure more organized, and now each function does just one thing. If I ever need to change how age is printed, I can do that without touching the rest of the logic. Overall, the code looks cleaner and feels easier to manage.


Comments should be used to explain why something is done, not just what is obvious. In my example, the original comment just said "do something", which wasn’t helpful. After rewriting it to explain that the function returns the sum of two numbers, it’s now clear to anyone reading the code. But sometimes, if the function or variable names are clear enough, you don’t even need a comment. Instead of adding unnecessary comments, it's often better to write self-explanatory code.


The original function was doing something simple — checking if a number is even — but used an unnecessary if...else block. That made the code longer than it needed to be. After refactoring, I replaced it with a single return statement that’s easier to read and does the exact same thing. Simplifying small pieces like this keeps the code clean and saves time when revisiting it later.


The original function didn’t handle edge cases — if someone passed undefined, null, or a number, it would still try to build a greeting. I added a simple guard clause to check if the input is a valid, non-empty string. This makes the function more reliable and avoids confusing output. Handling errors like this is important because it protects the code from crashing or behaving in weird ways when given unexpected input.