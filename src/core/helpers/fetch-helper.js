import isFunction from 'lodash/isFunction';
import has from 'lodash/has';
import get from 'lodash/get';
import isObject from 'lodash/isObject';
import isNil from 'lodash/isNil';
import pick from 'lodash/pick'

let onHandle401Request;
let onHandleStatus;

let globalModifyHeader = null;

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

const _internalFetch = (url, options/*, dispatch, getState*/) => {
  let didCallDispatch = false
  // TODO: adjust later
  /*const innerDispatch = (body, success, response, didThrowException) =>{
    const dispatchType = success
      ? `${options.key}_FULFILLED`
      : `${options.key}_ERROR`;
  
    if (body) {
      if (options.convertToCamelCase) {
        body = snakeToCamelCaseObject(body);
      } else if (options.convertToSnakeCase) {
        body = camelToSnakeCaseObject(body);
      }
    }
    const name = !success ? 'error' : '';
  
    didCallDispatch = true;
    try {
      dispatch({
        type: dispatchType,
        body: body,
        name: name,
        extraArguments: options.extraArguments,
        response,
      });
    } catch (ex) {
      console.log(`exception in reducer ${dispatchType}: ${ex.message}`);
      //TODO: do not throw yet
      //throw ex
    }
  
    if (onHandleStatus && !options.skipStatusCallback) {
      onHandleStatus(response.status, body);
    }
  
    if (!success) {
      if (
        !options.dontShowErrorsInNotificationBar &&
        body.message &&
        !didThrowException
      ) {
        console.error(`Call failed from server: ${options.key}: ${body.message}`);
        console.error('url: ' + options.url);
        console.error(body);
  
        if (window) {
          if (response.status !== 402) {
            // Don't show for Payment error status 402
            // Pass the message to the notification bar to show the error message
            window.postMessage(
              {
                type: 'fetch_notification',
                message: body.message,
                persistent: body.persistent,
              },
              window.document.origin
            );
          }
        }
      }
  
      if (options.onError) {
        options.onError(body, dispatch, getState);
      }
    }
  };

  dispatch({
    type: `${options.key}_PENDING`,
    extraArguments: options.extraArguments,
  });*/

  const request = new Request(url, {
    ...options.fetchOptions,
    url,
    skipCredentials: false,
  });

  //const request = new Request(url, pick(options.fetchOptions, allowedFetchOptions));

  let responsePromise = fetch(request).then((response) => response /*_checkAuthentication(response, url, options)*/);

  responsePromise = responsePromise.then((res) => {
    // Convert response to text and return original response + data
    return res.text().then((data) => ({ response: res, data: data }));
  });

  //Not applocable for the moment
  /*if (options.appendPromise) {
    responsePromise = responsePromise.then(options.appendPromise)
  }*/

  return responsePromise
    .then((result) => {
      console.log('Result: ', result);
      const obj = {
        response: result.response,
        payload: result.data,
      };      

      // Check if returnType is defined, if not, skip the 'parsing' and fallback to text
      if (
        typeof options.returnType === 'undefined' ||
        options.returnType === null ||
        options.returnType === ''
      ) {
        return obj;
      }

      // Convert text to the return type (only JSON supported for now)
      if (options.returnType === 'json') {
        if (obj.payload.length > 0) {
          obj.payload = JSON.parse(obj.payload);

          //TODO: ad feature. Not suported yet
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

        throw new Error(errorMessage);
      } else {
        //innerDispatch(result.payload, true, result.response);

        return {
          payload: result.payload//,
          //getState,
        };
      }
    })
    .catch((error) => {
      console.log('Error: ', error);
      // Firefox throws a TypeError when navigating to a page when a request is incomplete
      // we dont want to throw a message when this happends.
      // https://github.com/github/fetch/issues/310
      // https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/TypeError
      const dontLog = error.constructor === TypeError;

      //TODO: Create retry feature when applicable
      // cdn url retry with non cdn url
      /*if (isKnownCdnUrl(url)) {
        const nonCdnUrl = convertSiteNameToNonCdnUrl(url)
        _internalFetch(nonCdnUrl, options, dispatch, getState)
      }*/

      /*if (options.onException) {
        options.onException(error, dispatch, getState);
      } else if (!didCallDispatch) {
        // if we abort the request ourselves we have AbortError in the 'name'
        // property of the error. Dont dispatch anything, just cancel the
        // request
        if (error.name !== 'AbortError') {
          // innerDispatch({ message: 'Oops...something went wrong' }, false, {}, dontLog);
        }
      } else {
        const errorObjWithDispatch = {
          error: error,
          dispatch,
          getState,
        };
        throw errorObjWithDispatch;
      }*/

      return {
        error: error,
      };
    });
};

/*const _innerDispatch = (body, success, response, didThrowException, didCallDispatch = false) => {
  const dispatchType = success
    ? `${options.key}_FULFILLED`
    : `${options.key}_ERROR`;

  if (body) {
    if (options.convertToCamelCase) {
      body = snakeToCamelCaseObject(body);
    } else if (options.convertToSnakeCase) {
      body = camelToSnakeCaseObject(body);
    }
  }
  const name = !success ? 'error' : '';

  didCallDispatch = true;
  try {
    dispatch({
      type: dispatchType,
      body: body,
      name: name,
      extraArguments: options.extraArguments,
      response,
    });
  } catch (ex) {
    console.log(`exception in reducer ${dispatchType}: ${ex.message}`);
    //TODO: do not throw yet
    //throw ex
  }

  if (onHandleStatus && !options.skipStatusCallback) {
    onHandleStatus(response.status, body);
  }

  if (!success) {
    if (
      !options.dontShowErrorsInNotificationBar &&
      body.message &&
      !didThrowException
    ) {
      console.error(`Call failed from server: ${options.key}: ${body.message}`);
      console.error('url: ' + options.url);
      console.error(body);

      if (window) {
        if (response.status !== 402) {
          // Don't show for Payment error status 402
          // Pass the message to the notification bar to show the error message
          window.postMessage(
            {
              type: 'fetch_notification',
              message: body.message,
              persistent: body.persistent,
            },
            window.document.origin
          );
        }
      }
    }

    if (options.onError) {
      options.onError(body, dispatch, getState);
    }
  }
};*/

const deleteAsJson = (data, options, headers) => {
  const obj = {
    returnType: 'json',
    ...options,
  };

  obj.fetchOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...obj.fetchOptions.headers,
    },
    body: JSON.stringify(data),
    extraArguments: options.extraArguments,
  };

  return fetchAsJson(obj);
};

/**
 * put json to the given url
 *
 * @function
 * @param {string} url - string
 * @param {object} data, will be send as json
 * @param {object} options, object.key is required.
 * You can add object.extraArguments, these will be available in the reducer when the fetch is completed
 * @returns promise, that will dispatch redux events
 *
 * @memberOf FetchHelper
 */
const putAsJson = (data, options, headers) => {
  const obj = {
    returnType: 'json',
    ...options,
  };
  obj.fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...obj.fetchOptions.headers,
    },
    body: JSON.stringify(data),
  };

  return fetchAsJson(obj);
};

/**
 * post json to the given url
 *
 * @function
 * @param {string} url - string
 * @param {object} data, will be send as json
 * @param {object} options, object.key is required.
 * You can add object.extraArguments, these will be available in the reducer when the fetch is completed
 * @returns promise, that will dispatch redux events
 *
 * @memberOf FetchHelper
 */
const postAsJson = (data, options, headers) => {
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
  return fetchAsJson(obj);
};

const fetchAsJson = (options) => {
  if (!options || !options.key) {
    throw new Error('Missing option.key Attribute');
  }

  /*if (options.fetchOptions && options.fetchOptions.method && options.fetchOptions.method !== 'GET') {
    clearCache()
  }*/
  return _internalFetch(options.url, options);

  /*return function (dispatch, getState) {
    return _internalFetch(options.url, options, dispatch, getState);
  };*/
};


export {
  fetchAsJson,
  putAsJson,
  postAsJson,
  deleteAsJson
}
