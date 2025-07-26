// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Earners extends APIResource {
  /**
   * GetSummarizedRewardsForEarner returns the summarized rewards for the given
   * earner address, including:
   *
   * - total tokens earned
   * - total tokens active (subset of earned that are in roots that have surpassed
   *   their activation delay)
   * - total claimed
   * - total claimable (total active - total claimed)
   */
  getSummarizedRewards(
    earnerAddress: string,
    query: EarnerGetSummarizedRewardsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EarnerGetSummarizedRewardsResponse> {
    return this._client.get(path`/rewards/v1/earners/${earnerAddress}/summarized-rewards`, {
      query,
      ...options,
    });
  }
}

export interface EarnerGetSummarizedRewardsResponse {
  rewards?: EarnerGetSummarizedRewardsResponse.Rewards;
}

export namespace EarnerGetSummarizedRewardsResponse {
  export interface Rewards {
    token?: string;

    active?: string;

    claimable?: string;

    claimed?: string;

    earned?: string;
  }
}

export interface EarnerGetSummarizedRewardsParams {
  /**
   * Block height to use for calculating rewards. If not provided, the latest block
   * is used.
   */
  block_height?: number;

  /**
   * Snapshot date in YYYY-MM-DD format. If provided, the minimum block height for
   * that date will be used instead of block_height.
   */
  snapshot_date?: string;
}

export declare namespace Earners {
  export {
    type EarnerGetSummarizedRewardsResponse as EarnerGetSummarizedRewardsResponse,
    type EarnerGetSummarizedRewardsParams as EarnerGetSummarizedRewardsParams,
  };
}
