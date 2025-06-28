// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Results extends APIResource {
  /**
   * High-performance endpoint for retrieving the latest 32 completed auction results.
   *       Optimized with database-level aggregation and caching for frequent access.
   *
   *       Features:
   *       - Single optimized SQL query with JOIN aggregation
   *       - 60% smaller response payload than full auction objects
   *       - Sub-50ms response time with caching
   *       - Essential result metrics: clearing price, total bids, revenue, success rate
   *       - Auto-detects automatically created auctions
   *
   *       Use this endpoint for dashboards, analytics, and high-frequency result polling.
   *       For flexible querying with custom limits, use /history endpoint instead.
   *
   * @example
   * ```ts
   * const auctionResults =
   *   await client.v1.auctions.results.getLatest();
   * ```
   */
  getLatest(options?: RequestOptions): APIPromise<ResultGetLatestResponse> {
    return this._client.get('/api/v1/auctions/results/latest', options);
  }
}

export interface AuctionResult {
  /**
   * Whether this was an auto-created auction
   */
  autoCreated: boolean;

  /**
   * Clearing price in wei (null if cancelled)
   */
  clearingPrice: unknown | null;

  /**
   * Auction creation timestamp
   */
  createdAt: string;

  /**
   * Duration from creation to finalization in seconds
   */
  duration: number;

  /**
   * When the auction was finalized
   */
  finalizedAt: string;

  /**
   * Auction slot number
   */
  slot: number;

  /**
   * Final auction state
   */
  state: 'finalized' | 'settled' | 'cancelled';

  /**
   * Success rate (allocated quantity / total requested quantity)
   */
  successRate: unknown | null;

  /**
   * Total quantity allocated (null if cancelled)
   */
  totalAllocated: unknown | null;

  /**
   * Total number of bids received
   */
  totalBids: number;

  /**
   * Total revenue generated in wei (clearingPrice \* totalAllocated)
   */
  totalRevenue: unknown | null;

  /**
   * Number of winning bidders (null if cancelled)
   */
  winningBidders: unknown | null;
}

export type ResultGetLatestResponse = Array<AuctionResult>;

export declare namespace Results {
  export { type AuctionResult as AuctionResult, type ResultGetLatestResponse as ResultGetLatestResponse };
}
