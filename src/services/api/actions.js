import { getApiOptions,getPostApiOptions, getPutApiOptions,getDeleteApiOptions } from "../../core/helpers/fetch-options-helper";
import * as actionKeys from './constants'

//GET
export const getServices = (showGlobalLoading = false) => {

  const options = getApiOptions('service', actionKeys.GET_SERVICES, showGlobalLoading);
  return options;
};
export const getGroupedUsersCount = (period = null, showGlobalLoading = false) => {

  const options = getApiOptions(`home/users-count`, actionKeys.GROUPED_USERS_COUNT, showGlobalLoading);
  return options;
};

//POST
export const login = (userInfo) => {
  return getPostApiOptions('account/authenticate', userInfo, actionKeys.AUTHENTICATE, true);
}

//PUT

//UPDATE