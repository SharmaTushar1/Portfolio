import Error from '@/components/Error';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const resume = () => {
  const router = useRouter();
  const [error, setError]: any = useState(null)

  useEffect(() => {
    async function redirect() {
      try { 
        await router.push("https://drive.google.com/file/d/1ASQqf8GXKbULXDjgdOK2sgI2yMZNELom/view");
      } catch (err) {
        setError(err);
      }
    }
    redirect();
  }, []);

  if (error) {
    return <Error />;
  }

  return null;
}

export default resume