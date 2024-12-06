# Next.js router.push() edge case bug

This repository demonstrates a subtle bug related to the `router.push()` method in Next.js.  Under certain conditions, the navigation to a new page may not occur as expected. The issue occurs when the function invoking `router.push()` is used in a conditional rendering or within a component that has an asynchronous operation. 

## Bug Description

The provided `bug.js` file shows a simple Next.js component. Clicking the button within the component is supposed to navigate to a new page using `router.push()`. However, in this specific scenario, the navigation does not occur reliably. 

## Solution

The `bugSolution.js` shows a possible solution.  By using useEffect, we ensure that the route change is handled after the component has mounted completely.  The exact solution may depend on the nature of the asynchronous operation causing the problem.   

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm run dev` to start the Next.js development server.

Try clicking the button in both `bug.js` and `bugSolution.js` components to observe the differences in behavior.