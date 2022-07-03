import { getApiOptions } from "../../core/helpers/fetch-options-helper";
import * as actionKeys from './constants'

export const getServices = () => {

  const options = getApiOptions('service', actionKeys.GET_SERVICES);
  console.log('options', options);
  return options;
};

//export const getAllor
