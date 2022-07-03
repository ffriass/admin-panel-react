import { useState, useEffect, useCallback } from "react";
import { xFetch } from "../helpers/fetch-helper";

const useFetch = (options = null) => {
  const [fetchResult, setFetchResult] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    if (options) 
      return setFecth(options);
  }, []);

  const setFecth = useCallback((options) => {
    setIsLoading(true);
    xFetch(options)
      .then((result) => {
        setFetchResult(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setFetchResult(error);
        setIsLoading(false);
      });
  }, []);

  return [fetchResult, setFecth, isloading];
};

export default useFetch;
