import React, { useState, useEffect, useRef } from 'react';

const useFetch = ({
  url,
  options=null,
  fireNow=false
}) => {
  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  
  const didMount = useRef(fireNow);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        const fetched = await response.json();
        setIsLoading(false);
        setData(fetched);
      } catch (error) {
        console.error('Fetch', error);
        setIsLoading(false);
      }
    };
    
    if (didMount.current || fireNow) fetchData();
    else didMount.current = true;
  }, [url]);

  return { data, isLoading };
}

export default useFetch;