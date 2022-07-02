//import { getUrl, siteNames } from '@eig-builder/core-utils/helpers/url-helper';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pdXN1YXJpb0BiYXJiZXJob21lLmNvbSIsIm5hbWVpZCI6IjQiLCJyb2xlIjoiQ3VzdG9tZXIiLCJOYW1lIjoiRnJhbmtsaW4iLCJMYXN0TmFtZSI6IkZyaWFzIiwiUGhvbmVOdW1iZXIiOiI4MDktODg4LTg4ODgiLCJ1c2VyVmVyaWZpZWQiOiJUcnVlIiwiQmlydGhEYXRlIjoiIiwiaXNUZW1QYXNzd29yZCI6IkZhbHNlIiwiaXNOZXdVc2VyIjoiRmFsc2UiLCJwYXltZW50TWV0aG9kcyI6IkNBU0gsUEFZUEFMIiwibmJmIjoxNjU2NzI1ODI0LCJleHAiOjE2NTY4MTIyMjQsImlhdCI6MTY1NjcyNTgyNCwiaXNzIjoiQmFyYmVySG9tZS5jb20iLCJhdWQiOiJCYXJiZXJIb21lLmNvbSJ9.4OBRaM-YMJX3eHdbA546pxTqWZw-Fe1RyRnGStC2feM';

export const getApiOptions = (endpoint, key, returnType = 'json', useCache = true) => {
  const options = {
    key,
    //TODO:createmethod to get the base URL
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


