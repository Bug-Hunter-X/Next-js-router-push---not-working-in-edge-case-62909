```javascript
import {useRouter} from 'next/router';

const MyComponent = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/new-page');
  };

  return (
    <button onClick={handleClick}>Go to new page</button>
  );
};

export default MyComponent; 
```