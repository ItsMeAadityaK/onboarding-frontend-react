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
Example: let a = 10; let b = 20; let c = a+b; console.log(c);
let width = 10; let height = 20; let area = width + height; console.log(area); 