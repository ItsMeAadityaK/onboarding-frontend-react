Reflection - useMemo
The useMemo hook helped me understand how to prevent unnecessary computations in React components. I created a component that performs a heavy calculation on a number and noticed that without useMemo, the calculation was triggered every time the component re-rendered—even if the relevant data hadn’t changed. This caused lag and poor performance.
By wrapping the calculation in useMemo, it only re-ran when the specific input (number) changed. This greatly improved responsiveness, especially while interacting with unrelated inputs like text fields.
However, I also realized that useMemo isn't always necessary. If the calculation is light or the component doesn’t re-render often, using useMemo can actually add complexity without much benefit.
If I removed useMemo, the expensive calculation ran on every keystroke or state change, which made the app sluggish. This showed me that useMemo is especially helpful when dealing with large datasets or CPU-intensive tasks.


Reflection - useCallBack
The useCallback hook helps avoid unnecessary re-renders by memoizing functions. In my example, I passed a function from a parent to a child component. Without useCallback, the child re-rendered every time because the function reference changed.
By using useCallback, the function stayed the same unless its dependencies changed. This reduced unnecessary renders and improved performance. Unlike useMemo, which caches a value, useCallback caches a function.
It’s most useful when passing functions to memoized components. But for simple components, using it everywhere isn’t necessary and can add complexity.