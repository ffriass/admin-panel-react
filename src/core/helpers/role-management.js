
import Store from '@eig-builder/core-utils/store'
//import { CST_MP_ROLE_MATRIX, ROLES, ROLE_PAGE_ACCESS } from './role-mapping'

const getUserRoles = () => {
  return ['Employee'];
}
export const UserHasRole = role => {
  const roles = getUserRoles()
  if (!roles) {
    return false
  }
  return roles.includes(role)
}

export const UserHasAnyRole = rolesArray => {
  const clientRoles = getUserRoles()
  if (!clientRoles) {
    return false
  }
  return clientRoles.filter(clientRole => rolesArray.includes(clientRole)).length > 0
}

export const UserHasBuilderBrandRole = () => {
  const roles = getUserRoles()
  if (!roles) {
    return false
  }
  return roles.some(roleId => roleId > 1000 && roleId < 1010)
}

export const UserHasAccessForFeature = feature => {

  const roles = getUserRoles()
  if (!roles) {
    return false
  }
  let hasAccess = false

  // role is in numbers
  roles.forEach(role => {
    // the role exists and the feature is included.
    if (Array.isArray(CST_MP_ROLE_MATRIX[role]) && CST_MP_ROLE_MATRIX[role].includes(feature)) {
      hasAccess = true
    }
  })

  return hasAccess
}

export const GetUserRoles = () => {
  const roles = getUserRoles()

  if (!roles) {
    return false
  }
  return roles
}

export const GetUserBrandRoles = () => {
  const roles = getUserRoles()

  if (!roles) {
    return false
  }
  return roles.filter(roleId => roleId > 1000)
}

export const GetUserBuilderBrandRoles = () => {
  const roles = getUserRoles()

  if (!roles) {
    return false
  }
  return roles.filter(roleId => roleId > 1000 && roleId < 1010)
}

export const GetAllBrandRoles = () => {
  return Object.values(ROLES).filter(role => role > 1000)
}

export const UserHasAccessToPage = page => {
  const roles = getUserRoles()

  if (!roles) {
    return false
  }
  //TODO: Remove this return when the role matrix is full completed
  return true;

  let hasAccess = false
  roles.forEach(role => {
    const isArray = Array.isArray(ROLE_PAGE_ACCESS[role])

    if (isArray && ROLE_PAGE_ACCESS[role].includes(page)) {
      hasAccess = true
    }
  })

  return hasAccess
}
