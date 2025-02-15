'use client';
import { useState, useEffect } from 'react';
const usePostHook = (url, postData) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const postDataAsync = async () => {
      try {
        const response = await fetch(
          'https://speedritual.com' + url,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          },
          { next: { tags: ['self'] } }
        );

        const result = await response.json();
        setResponse(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    postDataAsync();
  }, [url, postData]);
  return { response, loading, error };
};

export default usePostHook;
