# React State Update on Unmounted Component

This repository demonstrates a common React bug: attempting to update a component's state after it has unmounted.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Problem

The original code uses `setTimeout` to simulate an asynchronous data fetch.  If the component unmounts before the `setTimeout` callback executes, React throws a warning and potentially causes issues.

## Solution

The solution introduces a cleanup function within the `useEffect` hook. This function ensures that any pending asynchronous operations are cancelled when the component unmounts, preventing the state update error.