Reflection - Components and Props
Components help break down the UI into smaller, reusable pieces. Instead of writing everything in one file, I can create small components like HelloWorld and pass in data using props. This makes the code easier to manage and scale as the app grows. Using props also makes components flexible and dynamic.


Reflection - Styling with Tailwind
Setting up Tailwind with React was smooth once I used an older version (v3.3.5). At first, I faced confusing plugin errors using the latest Tailwind version, which blocked the setup. After downgrading and following the correct steps, everything worked fine.
The biggest challenge was figuring out why `tailwindcss init -p` wasn't working and resolving issues with the `postcss.config.js`. Using a known stable setup helped avoid breaking changes in the newest release.
Now that it’s working, I understand how Tailwind integrates into a React project, and I feel confident using utility classes for styling components quickly.


Reflection – Handling State & User Input
Using useState made it very easy to manage the counter value in a clean and reactive way. I created a Counter.js component that displays a number and updates it whenever the user clicks the "Increment" button. With useState, the component re-renders automatically each time the state changes, keeping the UI in sync with the latest data.
One key thing I learned is that modifying state directly (like count++) doesn't update the UI because React doesn't detect the change. Instead, we should always use the setCount function returned by useState. This ensures React knows when to re-render the component.
Overall, this task helped me understand the importance of using React’s state management properly and how even small mistakes like directly mutating the state can break expected behavior.



Reflection – Working with Lists & User Input
Working with lists in React taught me how to dynamically manage user input and render components based on state changes. I built a small form where users can type something, click a button, and see their input appear in a list below. The .map() function made it easy to render each list item based on the current state.
One common issue I faced was forgetting to add a key prop when rendering the list, which React warns about in the console. It’s a simple but important detail that helps React track items efficiently and avoid rendering bugs.
Another challenge was managing empty input—without proper checks, the form could add blank entries. Adding a quick validation helped avoid that.
Overall, it was a good reminder of how important clean state management and small safeguards are when dealing with user-generated content in a dynamic UI.



Reflection – Tailwind CSS Styling
Using Tailwind CSS made it much faster to style my components directly within the markup. I didn’t need to switch between CSS and JSX files, and I could visually build styles using utility classes. It was especially helpful for quick prototyping and consistent design.
However, one potential drawback is that the class names can get long and cluttered if not managed well. Also, customizing designs that fall outside the default Tailwind theme sometimes takes extra configuration.
Overall, Tailwind boosted my productivity and made it easier to manage component styling in a React project.



Reflection – React Router Navigation
Client-side routing using React Router makes navigation between pages feel instant since it avoids full page reloads. This improves the user experience by maintaining the app state and loading components dynamically.
It also allows for easier handling of protected routes, nested views, and programmatic navigation within the app. Overall, it's essential for building smooth, modern single-page applications (SPAs).


Reflection – Understanding useEffect
You should use useEffect when you need to run side effects like fetching data, setting up subscriptions, or manipulating the DOM after the component has rendered. It’s useful for handling logic that shouldn’t be directly tied to user interactions.
If you don’t provide a dependency array, the effect runs after every render, which can cause performance issues or infinite loops if the effect updates state. Adding the correct dependencies ensures that effects only run when needed.
Improper use of useEffect, like skipping cleanup functions or using it without dependencies, can lead to memory leaks and inefficient re-renders. Thoughtful usage makes components more predictable and efficient.