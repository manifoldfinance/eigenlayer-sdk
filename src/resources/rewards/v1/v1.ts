// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EarnersAPI from './earners';
import { EarnerGetSummarizedRewardsParams, EarnerGetSummarizedRewardsResponse, Earners } from './earners';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class V1 extends APIResource {
  earners: EarnersAPI.Earners = new EarnersAPI.Earners(this._client);

  /**
   * GenerateClaimProof generates a proof for the given earner address and tokens for
   * claiming tokens against the RewardsCoordinator
   */
  generateClaimProof(
    body: V1GenerateClaimProofParams,
    options?: RequestOptions,
  ): APIPromise<V1GenerateClaimProofResponse> {
    return this._client.post('/rewards/v1/claim-proof', { body, ...options });
  }

  /**
   * ListDistributionRoots
   */
  listDistributionRoots(options?: RequestOptions): APIPromise<V1ListDistributionRootsResponse> {
    return this._client.get('/rewards/v1/distribution-roots', options);
  }
}

export interface V1GenerateClaimProofResponse {
  proof: V1GenerateClaimProofResponse.Proof;
}

export namespace V1GenerateClaimProofResponse {
  export interface Proof {
    earnerIndex?: number;

    earnerLeaf?: Proof.EarnerLeaf;

    earnerTreeProof?: string;

    root?: string;

    rootIndex?: number;

    tokenIndices?: number;

    tokenLeaves?: Proof.TokenLeaves;

    tokenTreeProofs?: string;
  }

  export namespace Proof {
    export interface EarnerLeaf {
      earner?: string;

      earnerTokenRoot?: string;
    }

    export interface TokenLeaves {
      token?: string;

      cumulativeEarnings?: string;
    }
  }
}

export interface V1ListDistributionRootsResponse {
  distributionRoots?: V1ListDistributionRootsResponse.DistributionRoots;
}

export namespace V1ListDistributionRootsResponse {
  export interface DistributionRoots {
    activatedAt?: string;

    activatedAtUnit?: string;

    blockHeight?: number;

    createdAtBlockNumber?: number;

    disabled?: boolean;

    logIndex?: number;

    rewardsCalculationEnd?: string;

    rewardsCalculationEndUnit?: string;

    root?: string;

    rootIndex?: number;

    transactionHash?: string;
  }
}

export interface V1GenerateClaimProofParams {
  earnerAddress?: string;

  rootIndex?: V1GenerateClaimProofParams.RootIndex;

  tokens?: string;
}

export namespace V1GenerateClaimProofParams {
  export interface RootIndex {
    value?: number;
  }
}

V1.Earners = Earners;

export declare namespace V1 {
  export {
    type V1GenerateClaimProofResponse as V1GenerateClaimProofResponse,
    type V1ListDistributionRootsResponse as V1ListDistributionRootsResponse,
    type V1GenerateClaimProofParams as V1GenerateClaimProofParams,
  };

  export {
    Earners as Earners,
    type EarnerGetSummarizedRewardsResponse as EarnerGetSummarizedRewardsResponse,
    type EarnerGetSummarizedRewardsParams as EarnerGetSummarizedRewardsParams,
  };
}
