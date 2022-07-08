import has from 'lodash/has';
import get from 'lodash/get';
import isObject from 'lodash/isObject';
import pick from 'lodash/pick'

const allowedFetchOptions = [
  'method',
  'headers',
  'body',
  'redirect',
  'signal',
  'follow',
  'timeout',
  'compress',
  'size',
  'agent'
];

/**
 * innerDispatch - helper that calls dispatch and adds some other logic
 *
 * @param {object} body to dispatch
 * @param {bool} success false if we want to throw an error
 * @param {Response} response
 * @param {boolean} didThrowException
 */

const _internalFetch = (url, options) => {

  /*dispatch({
    type: `${options.key}_PENDING`,
    extraArguments: options.extraArguments,
  });*/

  const request = new Request(url, {
    ...pick(options.fetchOptions, allowedFetchOptions),
    url,
    skipCredentials: false,
  });

  let responsePromise = fetch(request).then((response) => response /*_checkAuthentication(response, url, options)*/);

  responsePromise = responsePromise.then((res) => {
    // Convert response to text and return original response + data
    return res.text().then((data) => ({ response: res, data: data }));
  });

  return responsePromise
    .then((result) => {
      
      const obj = {
        response: result.response,
        payload: result.data,
      };      
    
      // Check if returnType is defined, if not, skip the 'parsing' and fallback to text
      if (!options.returnType)
        return obj;
      

      // Convert text to the return type (only JSON supported for now)
      if (options.returnType === 'json') {
        if (obj.payload.length > 0) {
          obj.payload = JSON.parse(obj.payload);

          //TODO: add feature. Not suported yet
          /*if (options.convertToCamelCase) {
            obj.payload = snakeToCamelCaseObject(obj.payload)
          } else if (options.convertToSnakeCase) {
            obj.payload = camelToSnakeCaseObject(obj.payload)
          }*/
        }
      } else if (options.returnType === 'text') {
        return obj;
      } else {
        // Or... Returntype was defined, but not supported yet, throw a message
        console.log(
          `Returntype ${options.returnType} not supported, fallback to text`
        );
      }
      console.log('Result 1: ', obj);

      return obj;
    })
    .then((result) => {
      if (result.response.status >= 400) {
        //innerDispatch(result.payload, false, result.response);

        const errorMessage = has(result.payload, 'message')
          ? get(result.payload, 'message')
          : isObject(result.payload)
          ? JSON.stringify(result.payload)
          : result.payload;

          console.log('Result 2: ', !errorMessage ? result.response.statusText : errorMessage);

        //throw new Error(!errorMessage ? result.response.statusText : errorMessage);
        return {
          payload: result.payload,          
          isSuccess: true
        };
      } else {
        //innerDispatch(result.payload, true, result.response);

        return {
          payload: result.payload,          
          isSuccess: true
        };
      }
    })
    .catch((error) => {
      //TODO: Create retry feature when applicable calling _internalFetch again with adjustemnts
      
      return {
        error: error,
        isSuccess: false
      };
    });
};

const xFetch = (options) => {
  if (!options || !options.key) {
    throw new Error('Missing option.key Attribute');
  }

  //TODO: start using cache when nedeed ang clear it when is not GET

  return _internalFetch(options.url, options);
};


export {
  xFetch
}
