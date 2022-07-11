import { getApiOptions,getPostApiOptions, getPutApiOptions,getDeleteApiOptions } from "../../core/helpers/fetch-options-helper";
import * as actionKeys from './constants'

//GET
export const getServices = (showGlobalLoading = false) => {

  const options = getApiOptions('service', actionKeys.GET_SERVICES, showGlobalLoading);
  console.log('options', options);
  return options;
};

//POST
export const login = (userInfo) => {
  return getPostApiOptions('account/authenticate', userInfo, actionKeys.AUTHENTICATE, true);
}

//PUT

//UPDATE