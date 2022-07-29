import { useState, useEffect, useCallback, useContext } from "react";
import { xFetch } from "../helpers/fetch-helper";
import AppContext from "../store/app-context";

const responseHandler = (response, setState, dispatch) => {

  if(dispatch){
    if(response.isSuccess)
      dispatch(response?.payload)
    else
    dispatch(response)
  }
    
  setState(response);
}

const useFetch = (options = null) => {
  const [fetchResult, setFetchResult] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const appContext = useContext(AppContext);

  useEffect(() => {
    if (options) 
      sendRequest(options);
  }, []);

  const sendRequest = useCallback(async (options, dispatch = null) => {
    setIsLoading(true);
    appContext.showLoading(!!options.showGlobalLoading)
    //setFetchResult(null)
    try {
      const response = await xFetch(options);

      if(!response.isSuccess)
        throw new Error(response?.error?.message || "Something went wrong!");      
        
        //setFetchResult(response);//TODO: check behavior
        responseHandler(response, setFetchResult, dispatch);

    } catch (e) {
      console.log(e)
      responseHandler({ error: e, isSuccess: false }, setFetchResult, dispatch);
    }
    setIsLoading(false);
    appContext.showLoading(false)
  }, []);

  return [fetchResult, sendRequest, isloading];
};

export default useFetch;
