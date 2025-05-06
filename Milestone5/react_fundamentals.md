Components help break down the UI into smaller, reusable pieces. Instead of writing everything in one file, I can create small components like HelloWorld and pass in data using props. This makes the code easier to manage and scale as the app grows. Using props also makes components flexible and dynamic.



Setting up Tailwind with React was smooth once I used an older version (v3.3.5). At first, I faced confusing plugin errors using the latest Tailwind version, which blocked the setup. After downgrading and following the correct steps, everything worked fine.
The biggest challenge was figuring out why `tailwindcss init -p` wasn't working and resolving issues with the `postcss.config.js`. Using a known stable setup helped avoid breaking changes in the newest release.
Now that it’s working, I understand how Tailwind integrates into a React project, and I feel confident using utility classes for styling components quickly.