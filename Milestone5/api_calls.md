Why is it useful to create a reusable Axios instance?
Creating a reusable Axios instance helps keep the code clean and consistent. Instead of repeating the base URL, headers, or timeout settings in every request, we define it once and use it everywhere. This makes the code easier to maintain and less error-prone.

How does intercepting requests help with authentication?
Request interceptors allow us to automatically attach authentication tokens (if available) to every request. This is useful because we don’t need to manually add the token in each API call. It keeps the authentication logic in one place and reduces the chances of forgetting it.

What happens if an API request times out, and how can you handle it?
If a request takes too long and times out, it throws an error. We can catch that specific error using its code (ECONNABORTED) and handle it gracefully — for example, by showing an error message to the user or retrying the request. This helps improve user experience and app stability.