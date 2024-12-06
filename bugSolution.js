```javascript
import { useRouter, useEffect } from 'next/router';

const MyComponent = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      router.push('/new-page');
    };
    handleRouteChange();
  }, []);

  return (
    <button >Go to new page</button>
  );
};

export default MyComponent; 
```