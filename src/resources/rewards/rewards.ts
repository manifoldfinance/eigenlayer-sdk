// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1/v1';
import {
  V1,
  V1GenerateClaimProofParams,
  V1GenerateClaimProofResponse,
  V1ListDistributionRootsResponse,
} from './v1/v1';

export class Rewards extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Rewards.V1 = V1;

export declare namespace Rewards {
  export {
    V1 as V1,
    type V1GenerateClaimProofResponse as V1GenerateClaimProofResponse,
    type V1ListDistributionRootsResponse as V1ListDistributionRootsResponse,
    type V1GenerateClaimProofParams as V1GenerateClaimProofParams,
  };
}
