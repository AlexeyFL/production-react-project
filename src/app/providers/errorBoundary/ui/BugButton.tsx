import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';

const BugButton = () => {
  const [error, setErr] = useState<boolean>(false);

  const throwError = () => {
    setErr(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={throwError}>Throw error</Button>;
};

export default BugButton;
