const getToken = () => {
  return localStorage.getItem("token");
};

export const getApiOptions = (endpoint, key, showGlobalLoading = false, returnType = 'json', useCache = false) => {
  const options = {
    key,
    //TODO:create method to get the base URL
    url: `https://localhost:5001/${endpoint}`, //getUrl(siteNames.API_CRM, endpoint),
    returnType,
    showGlobalLoading,
    useCache,
    convertToCamelCase: false,
    fetchOptions :{
      headers : {
        'AppKey': 'cd9f408b-a836-4aae-8f7c-ea68f629f702',
        'Authorization':`Bearer ${getToken()}`      
      }
    }    
  };

  return options;
};

export const getPostApiOptions = (endpoint, data, key,  showGlobalLoading = false, returnType = 'json', useCache = false) => {

  let options = getApiOptions(endpoint, key, showGlobalLoading, returnType, useCache)

  const obj = {
    returnType: 'json',
    ...options,
  };

  obj.fetchOptions = {
    ...obj.fetchOptions,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...obj.fetchOptions.headers,
    },
    body: JSON.stringify(data),
  };

  return obj;
};

export const getPutApiOptions = (endpoint, data, key,  showGlobalLoading = false, returnType = 'json', useCache = false) => {

  let options = getPostApiOptions(endpoint, data, key, showGlobalLoading, returnType, useCache);
  options.fetchOptions.method = 'PUT';

  return options;
};

export const getDeleteApiOptions = (endpoint, data, key,  showGlobalLoading = false, returnType = 'json', useCache = false) => {

  let options = getPostApiOptions(endpoint, data, key, showGlobalLoading, returnType, useCache);
  options.fetchOptions.method = 'DELETE';

  return options;
};


