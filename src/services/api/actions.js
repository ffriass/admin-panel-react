import { getApiOptions, getPostApiOptions, getPutApiOptions, getDeleteApiOptions } from "../../core/helpers/fetch-options-helper";
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

export const getOrdersCount = (period = null, showGlobalLoading = false) => {

  const options = getApiOptions(`home/orders-count`, actionKeys.GET_ORDERS_COUNT, showGlobalLoading);
  return options;
};

export const getUsers = (userType, page = 0, pageSize = 10, showGlobalLoading = false) => {

  const options = getApiOptions(`users/${userType}?page=${page}&pageSize=${pageSize}`, actionKeys.GET_USERS, showGlobalLoading);
  return options;
}
export const getAgentAvailabilityById = (id, showGlobalLoading = false) => {

  const options = getApiOptions(`AgentAvailable/agent/${id}`, actionKeys.GET_AGENT_AVAILABILITY_BY_ID, showGlobalLoading);
  return options;
}

export const getTransactions = (completed, page = 0, pageSize = 10, showGlobalLoading = false) => {

  const options = getApiOptions(`home/transactions?completed=${!!completed}&page=${page}&pageSize=${pageSize}`, actionKeys.GET_TRANSACTIONS, showGlobalLoading);
  return options;
}

export const getTransactionsByUserId = (completed, userId, page = 0, pageSize = 10, showGlobalLoading = false) => {

  const options = getApiOptions(`home/transactions/${userId}?completed=${!!completed}&page=${page}&pageSize=${pageSize}`, actionKeys.GET_TRANSACTIONS_BY_USER, showGlobalLoading);
  return options;
}

export const getBalanceDetail = (pending = false, showGlobalLoading = false) => {
  const endpoint = pending ? `pending` : "";

  const options = getApiOptions(`financial/balance/${endpoint}`, actionKeys.GET_BALANCE_DETAIL, showGlobalLoading);
  return options;
};

export const getAgentBalanceDetail = (agentId, showGlobalLoading = false) => {

  const options = getApiOptions(`financial/balance/pending-agent?agentId=${agentId}`, actionKeys.GET_AGENT_BALANCE_DETAIL, showGlobalLoading);
  return options;
};

export const getRevenuesByPeriod = (period = "Monthly", showGlobalLoading = false) => {

  const options = getApiOptions(`financial/revenue/${period}`, actionKeys.GET_REVENUE_BY_PERIOD, showGlobalLoading);
  return options;
};
//POST
export const login = (userInfo) => {
  return getPostApiOptions('account/authenticate', userInfo, actionKeys.AUTHENTICATE, true);
}
export const setAgentStatus = (statusInfo, showGlobalLoading = false) => {
  return getPostApiOptions('account/status', statusInfo, actionKeys.SET_USER_STATUS, showGlobalLoading);
}

//PUT

//UPDATE