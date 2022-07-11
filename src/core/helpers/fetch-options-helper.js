//import { getUrl, siteNames } from '@eig-builder/core-utils/helpers/url-helper';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHBhbGFjZXRlLmNvbSIsIm5hbWVpZCI6IjEyIiwicm9sZSI6IkVtcGxveWVlIiwiTmFtZSI6IkFkbWluIiwiTGFzdE5hbWUiOiJBZG1pbiIsIlBob25lTnVtYmVyIjoiODQ5LTQwOC0xMjE0IiwidXNlclZlcmlmaWVkIjoiVHJ1ZSIsIkJpcnRoRGF0ZSI6IiIsImlzVGVtUGFzc3dvcmQiOiJGYWxzZSIsImlzTmV3VXNlciI6IkZhbHNlIiwibmJmIjoxNjU3MDc4ODIzLCJleHAiOjE2NTcxNjUyMjMsImlhdCI6MTY1NzA3ODgyMywiaXNzIjoiQmFyYmVySG9tZS5jb20iLCJhdWQiOiJCYXJiZXJIb21lLmNvbSJ9.nOrg56fl3v4nGzDKFhLR4N8WAsz73wT738m8qQiHddk";
const getToken = () => {
  return localStorage.getItem("token");
};

export const getApiOptions = (endpoint, key, showGlobalLoading = false, returnType = 'json', useCache = false) => {
  const options = {
    key,
    //TODO:create method to get the base URL
    url: `https://app-masterapi-prod.azurewebsites.net/${endpoint}`, //getUrl(siteNames.API_CRM, endpoint),
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


