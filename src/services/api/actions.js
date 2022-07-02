import { fetchAsJson, postAsJson, putAsJson } from "../../core/helpers/fetch-helper";
import { getApiOptions } from "../../core/helpers/fetch-options-helper";
import * as actionKeys from './constants'

export const getServices = () => {

  const options = getApiOptions('service', actionKeys.GET_SERVICES);
  console.log('options', options);
  return fetchAsJson(options);
};
