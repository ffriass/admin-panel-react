import { getApiOptions,getPostApiOptions, getPutApiOptions,getDeleteApiOptions } from "../../core/helpers/fetch-options-helper";
import * as actionKeys from './constants'

//GET
export const getServices = () => {

  const options = getApiOptions('service', actionKeys.GET_SERVICES);
  console.log('options', options);
  return options;
};


//POST
export const login = (userInfo) => {
  return getPostApiOptions('account/authenticate', userInfo, actionKeys.AUTHENTICATE);
}

//PUT

//UPDATE