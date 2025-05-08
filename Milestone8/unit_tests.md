1. What was the most challenging part of testing Redux?
The most challenging part was setting up the testing environment correctly. There were multiple package conflicts during installation, and understanding how to isolate the reducer logic for testing took some research. Once that was figured out, writing tests became straightforward.

2. How do Redux tests differ from React component tests?
Redux tests focus on pure logic — they test how the reducer updates the state based on actions. React component tests, on the other hand, deal with rendering components, handling user interactions, and checking UI updates. Redux tests are faster and easier to isolate, while React component tests often require more setup (like rendering and mocking).

3. What are the benefits of using React Testing Library instead of testing implementation details?
React Testing Library focuses on how users interact with components rather than the internal implementation. This makes tests more resilient to code refactoring and keeps them meaningful — we're testing behavior, not structure. It’s closer to real-world use.

4. What challenges did you encounter when simulating user interaction?
Getting familiar with functions like fireEvent and screen.getByText was slightly tricky at first, but once I understood how the queries work, it became intuitive. Ensuring that DOM updates happen as expected after interactions required a bit of trial and error initially.

5. Why is it important to mock API calls in tests?
Mocking API calls ensures your tests are fast, reliable, and not dependent on real network conditions or backend availability. It isolates component behavior and helps identify UI bugs more efficiently.

6. What are some common pitfalls when testing asynchronous code?
Some challenges include not awaiting properly, testing before data has loaded, or forgetting to reset mocks between tests. Using waitFor and properly mocking responses with tools like jest.mock() helps avoid these pitfalls.

7. Why is automated testing important in software development?
Automated testing helps catch bugs early, ensures stability after code changes, and gives developers confidence when refactoring. For apps like Focus Bear with many interactive components, automated tests reduce the chance of accidentally breaking functionality.

8. What did you find challenging when writing your first Jest test?
The hardest part was understanding where to place the test file and how to structure test cases. But once the pattern was clear—import, write test(), and use expect()—it became much easier to write and understand tests.