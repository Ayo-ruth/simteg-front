/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { GrantedAuthority } from '../models/granted-authority';
export interface User {
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  creationDate?: string;
  credentialsNonExpired?: boolean;
  dateNaiss?: string;
  email?: string;
  enable?: boolean;
  enabled?: boolean;
  firstName?: string;
  id?: number;
  lastModifyDate?: string;
  name?: string;
  password?: string;
  photos?: string;
  username?: string;
}
