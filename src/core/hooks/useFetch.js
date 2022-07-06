import { useState, useEffect, useCallback } from "react";
import { xFetch } from "../helpers/fetch-helper";

const useFetch = (options = null) => {
  const [fetchResult, setFetchResult] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    if (options) 
      sendRequest(options);
  }, []);

  const sendRequest = useCallback(async (options, dispatch = null) => {
    setIsLoading(true);
    setFetchResult(null)
    try {
      const response = await xFetch(options);

      if(!response.isSuccess){
        throw new Error(response.error.message || "Something went wrong!");
      }
      if(dispatch)
        dispatch(response.payload)
        
        console.log('The response: ', response);
        setFetchResult(response);
      /*xFetch(options)
        .then((result) => {
          setFetchResult(result);
          setIsLoading(false);
        })
        .catch((error) => {
          setFetchResult(error);
          setIsLoading(false);
        });*/
    } catch (e) {
      //setIsLoading(false);
      setFetchResult({
        error: e,
        isSuccess: false
      });
    }
    setIsLoading(false);
  }, []);

  return [fetchResult, sendRequest, isloading];
};

export default useFetch;
