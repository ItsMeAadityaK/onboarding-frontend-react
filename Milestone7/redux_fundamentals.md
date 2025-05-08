Reflection - When should you use Redux instead of useState?
While useState is perfect for handling local state within a single component, Redux becomes more valuable when the application grows in complexity and multiple components need to share or coordinate data. In cases like global authentication, user preferences, or a shopping cart, managing state through useState can lead to prop drilling and duplication. Redux provides a centralized store, making state management more predictable, testable, and scalable.
For example, if multiple components need to read or update the same state (like a global counter or logged-in user info), Redux helps maintain a single source of truth without having to pass props down multiple layers. On the other hand, for simple or isolated UI interactions like toggling a modal or switching tabs, useState is more lightweight and easier to implement.
Overall, Redux is most appropriate when app-wide state sharing is needed, while useState is ideal for component-specific data.



Reflection - What are the benefits of using selectors instead of directly accessing state?

Using selectors in Redux provides several long-term advantages. First, they improve **readability** by abstracting away how data is accessed from the store. Instead of repeating state.counter.value everywhere, I can use a clean and descriptive function like selectCount. This makes the code easier to follow for both new developers and my future self.

Selectors also offer flexibility — if the shape of the Redux store changes later, I only need to update the selector function in one place rather than updating every component that reads from the store. This improves maintainability and reduces the risk of bugs.

Finally, selectors can be composed or memoized using libraries like Reselect for performance optimization, especially in large applications with derived data.
