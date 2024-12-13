The solution addresses the issue by adding a cleanup function to the `useEffect` hook. This function is responsible for cancelling any pending asynchronous operations when the component unmounts.

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const timeoutId = setTimeout(() => {
        setData({ message: 'Data fetched!' });
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timeoutId); // Cleanup function
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}

export default MyComponent;
```

By using `clearTimeout` within the cleanup function, we ensure that the `setTimeout` callback is never executed if the component unmounts before the timer expires.