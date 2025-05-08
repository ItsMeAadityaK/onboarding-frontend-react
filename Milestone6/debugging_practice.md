Debugging Practice: Fixing Direct State Mutation in a List Component

Issue:
In the DynamicList component, I initially tried adding new items to the state using items.push(inputValue) and then updating the state with setItems(items). This did not trigger a UI re-render, and the newly added items didn’t appear in the list.

Debugging Method:
I used console.log to track the state of the array before and after pushing. I also inspected the component using React DevTools and noticed that re-renders weren't triggered. This led me to realize the problem was due to modifying the original array (mutating state directly).

Fix:
I replaced the push logic with a spread operator to create a new array using setItems([...items, inputValue]). This ensures React detects the change and re-renders the component properly.

Takeaway:
React state should always be treated as immutable. Creating a new reference when updating arrays or objects ensures that React can detect changes and update the UI correctly.
