//import { getUrl, siteNames } from '@eig-builder/core-utils/helpers/url-helper';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pdXN1YXJpb0BiYXJiZXJob21lLmNvbSIsIm5hbWVpZCI6IjQiLCJyb2xlIjoiQ3VzdG9tZXIiLCJOYW1lIjoiRnJhbmtsaW4iLCJMYXN0TmFtZSI6IkZyaWFzIiwiUGhvbmVOdW1iZXIiOiI4MDktODg4LTg4ODgiLCJ1c2VyVmVyaWZpZWQiOiJUcnVlIiwiQmlydGhEYXRlIjoiIiwiaXNUZW1QYXNzd29yZCI6IkZhbHNlIiwiaXNOZXdVc2VyIjoiRmFsc2UiLCJwYXltZW50TWV0aG9kcyI6IkNBU0gsUEFZUEFMIiwibmJmIjoxNjU2ODY5OTAwLCJleHAiOjE2NTY5NTYzMDAsImlhdCI6MTY1Njg2OTkwMCwiaXNzIjoiQmFyYmVySG9tZS5jb20iLCJhdWQiOiJCYXJiZXJIb21lLmNvbSJ9.KHWDJ8JHF54jDVhqU9aV8HG4nGONFPd4e_0spRJShXE';

export const getApiOptions = (endpoint, key, returnType = 'json', useCache = false) => {
  const options = {
    key,
    //TODO:create method to get the base URL
    url: `https://localhost:5001/${endpoint}`, //getUrl(siteNames.API_CRM, endpoint),
    returnType,
    useCache,
    convertToCamelCase: false,
    fetchOptions :{
      headers : {
        'AppKey': '96591422-3C4A-4A46-8D81-BB60E392568B',
        'Authorization':`Bearer ${token}`      
      }
    }    
  };

  return options;
};

export const getPostApiOptions = (endpoint, data, key, returnType = 'json', useCache = false) => {

  let options = getApiOptions(endpoint, key, returnType, useCache)

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

  return options;
};

export const getPutApiOptions = (endpoint, data, key, returnType = 'json', useCache = false) => {

  let options = getPostApiOptions(endpoint, data, key, returnType, useCache)
  options.fetchOptions.method = 'PUT';

  return options;
};

export const getDeleteApiOptions = (endpoint, data, key, returnType = 'json', useCache = false) => {

  let options = getPostApiOptions(endpoint, data, key, returnType, useCache)
  options.fetchOptions.method = 'DELETE';

  return options;
};


