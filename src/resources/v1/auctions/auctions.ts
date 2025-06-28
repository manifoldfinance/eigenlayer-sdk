// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BidsAPI from '../bids';
import * as ResultsAPI from './results';
import { AuctionResult, ResultGetLatestResponse, Results } from './results';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Auctions extends APIResource {
  results: ResultsAPI.Results = new ResultsAPI.Results(this._client);

  /**
   * Create a new auction for a specific slot. The auction will be initialized
   *       in 'pending' state and automatically transition through the 9-state lifecycle
   *       based on Ethereum slot timing.
   *
   * @example
   * ```ts
   * const auction = await client.v1.auctions.create({
   *   slot: 1234567,
   * });
   * ```
   */
  create(body: AuctionCreateParams, options?: RequestOptions): APIPromise<Auction> {
    return this._client.post('/api/v1/auctions', { body, ...options });
  }

  /**
   * Retrieve detailed information for a specific auction slot
   *
   * @example
   * ```ts
   * const auction = await client.v1.auctions.retrieve(1234567);
   * ```
   */
  retrieve(slot: number, options?: RequestOptions): APIPromise<Auction> {
    return this._client.get(path`/api/v1/auctions/${slot}`, options);
  }

  /**
   * Update auction
   *
   * @example
   * ```ts
   * const auction = await client.v1.auctions.update(0);
   * ```
   */
  update(slot: number, body: AuctionUpdateParams, options?: RequestOptions): APIPromise<Auction> {
    return this._client.put(path`/api/v1/auctions/${slot}`, { body, ...options });
  }

  /**
   * Retrieve auctions with optional filtering by state, slot range, and other criteria.
   *       Results are paginated and include metadata for navigation.
   *
   * @example
   * ```ts
   * const auctions = await client.v1.auctions.list();
   * ```
   */
  list(
    query: AuctionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuctionListResponse> {
    return this._client.get('/api/v1/auctions', { query, ...options });
  }

  /**
   * Cancel auction
   *
   * @example
   * ```ts
   * await client.v1.auctions.cancel(0);
   * ```
   */
  cancel(slot: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/auctions/${slot}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Finalize auction
   *
   * @example
   * ```ts
   * await client.v1.auctions.finalize(0);
   * ```
   */
  finalize(slot: number, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/v1/auctions/${slot}/finalize`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get auction history
   *
   * @example
   * ```ts
   * await client.v1.auctions.getHistory({ limit: 0 });
   * ```
   */
  getHistory(query: AuctionGetHistoryParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/auctions/history', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Consolidated endpoint providing a complete auction system overview:
   *
   *       **Current Auction:**
   *       - Active auction details and real-time progress
   *       - Live bidding status and market metrics
   *       - Timing information and phase tracking
   *
   *       **Next Auction:**
   *       - Upcoming auction details and timing
   *       - Auto-creation status and slot scheduling
   *
   *       **Latest Results:**
   *       - Most recent completed auction results
   *       - Final metrics and settlement data
   *
   *       **Quick Bid Suggestions:**
   *       - Market-based bid recommendations
   *       - Competitive analysis and positioning
   *       - Gas fee estimates and bidding windows
   *
   *       **System Status:**
   *       - Current Ethereum slot and system health
   *       - Rate limiting and operational status
   *
   *       This endpoint is optimized for dashboard displays and provides all essential
   *       auction information in a single request with 5-second caching.
   *
   * @example
   * ```ts
   * const response = await client.v1.auctions.getOverview();
   * ```
   */
  getOverview(options?: RequestOptions): APIPromise<AuctionGetOverviewResponse> {
    return this._client.get('/api/v1/auctions/overview', options);
  }

  /**
   * Retrieve real-time auction progress including:
   *       - Current state and timing information
   *       - Bid statistics and distribution
   *       - Market metrics and clearing price estimates
   *       - Competition analysis
   *
   * @example
   * ```ts
   * const response = await client.v1.auctions.getProgress(
   *   1234567,
   * );
   * ```
   */
  getProgress(slot: number, options?: RequestOptions): APIPromise<AuctionGetProgressResponse> {
    return this._client.get(path`/api/v1/auctions/${slot}/progress`, options);
  }

  /**
   * Get auction status
   *
   * @example
   * ```ts
   * await client.v1.auctions.getStatus(0);
   * ```
   */
  getStatus(slot: number, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/auctions/${slot}/status`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get auction timing information including Ethereum slot timing
   *
   * @example
   * ```ts
   * await client.v1.auctions.getTiming(0);
   * ```
   */
  getTiming(slot: number, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/auctions/${slot}/timing`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Streamlined bid submission with automatic market analysis and optimization:
   *
   *       **Features:**
   *       - Automatic bid value validation against current market
   *       - Optional auto-adjustment to stay competitive
   *       - Intelligent gas fee estimation
   *       - Real-time position tracking and win probability
   *
   *       **Auto-Adjustment:**
   *       - When enabled, automatically increases bid value to maintain competitiveness
   *       - Respects maximum value limits to prevent overspending
   *       - Monitors market changes during bid placement
   *
   *       **Response Includes:**
   *       - Actual bid value used (may differ if auto-adjusted)
   *       - Current market position and win probability
   *       - Real-time status and confirmation
   *
   *       This endpoint is ideal for automated bidding systems and users who want
   *       intelligent bid placement without manual market analysis.
   *
   * @example
   * ```ts
   * const response = await client.v1.auctions.submitQuickBid({
   *   quantity: 100,
   *   value: '1750000000000000000',
   * });
   * ```
   */
  submitQuickBid(
    body: AuctionSubmitQuickBidParams,
    options?: RequestOptions,
  ): APIPromise<AuctionSubmitQuickBidResponse> {
    return this._client.post('/api/v1/auctions/quick-bid', { body, ...options });
  }
}

export interface Auction {
  /**
   * Unique auction identifier
   */
  id: string;

  /**
   * Bidding deadline timestamp
   */
  biddingDeadline: string;

  /**
   * Auction creation timestamp
   */
  createdAt: string;

  /**
   * Settlement deadline timestamp
   */
  settlementDeadline: string;

  /**
   * Slot number
   */
  slot: number;

  /**
   * Current auction state
   */
  state:
    | 'pending'
    | 'bidding'
    | 'closing'
    | 'settling'
    | 'settled'
    | 'finalizing'
    | 'finalized'
    | 'disputed'
    | 'cancelled';

  /**
   * Total number of bids
   */
  totalBids: number;

  /**
   * Clearing price in wei
   */
  clearingPrice?: string;

  /**
   * Finalization timestamp
   */
  finalizedAt?: string;

  /**
   * Auction metadata
   */
  metadata?: unknown;

  /**
   * Total allocated quantity
   */
  totalAllocated?: number;
}

export interface MarketMetrics {
  /**
   * Average bid size
   */
  averageBidSize: string;

  /**
   * Bid rate per minute
   */
  bidRate: number;

  /**
   * Highest bid value
   */
  highestBid: string;

  /**
   * Market concentration index (HHI)
   */
  marketConcentration: number;

  /**
   * Price volatility measure
   */
  priceVolatility: number;

  /**
   * Total volume in the auction
   */
  totalVolume: number;

  /**
   * Number of unique bidders
   */
  uniqueBidders: number;
}

export interface AuctionListResponse {
  /**
   * Array of auction data
   */
  data: Array<Auction>;

  /**
   * Pagination links
   */
  links: AuctionListResponse.Links;

  /**
   * Pagination metadata
   */
  meta: AuctionListResponse.Meta;
}

export namespace AuctionListResponse {
  /**
   * Pagination links
   */
  export interface Links {
    /**
     * URL for the first page
     */
    first: string;

    /**
     * URL for the last page
     */
    last: string;

    /**
     * URL for the next page
     */
    next: string | null;

    /**
     * URL for the previous page
     */
    previous: string | null;

    /**
     * URL for the current page
     */
    self: string;
  }

  /**
   * Pagination metadata
   */
  export interface Meta {
    /**
     * Number of items on current page
     */
    currentPageItems: number;

    /**
     * Whether there is a next page
     */
    hasNext: boolean;

    /**
     * Whether there is a previous page
     */
    hasPrevious: boolean;

    /**
     * Number of items per page
     */
    limit: number;

    /**
     * Current page number (0-based)
     */
    page: number;

    /**
     * Total number of items
     */
    total: number;

    /**
     * Total number of pages
     */
    totalPages: number;
  }
}

export interface AuctionGetOverviewResponse {
  /**
   * Current Ethereum slot number
   */
  currentSlot: number;

  /**
   * Timestamp when this overview was generated
   */
  generatedAt: string;

  /**
   * System status for auction operations
   */
  systemStatus: 'operational' | 'maintenance' | 'degraded';

  /**
   * Current active auction (if any)
   */
  current?: Auction;

  /**
   * Latest completed auction result (if any)
   */
  latest?: ResultsAPI.AuctionResult;

  /**
   * Market metrics for current auction
   */
  marketMetrics?: MarketMetrics;

  /**
   * Next upcoming auction (if any)
   */
  next?: Auction;

  /**
   * Quick bid suggestions for current auction
   */
  quickBid?: AuctionGetOverviewResponse.QuickBid;

  /**
   * Recent bids in current auction (limited to 10)
   */
  recentBids?: Array<BidsAPI.Bid>;

  /**
   * Timing information for current/next auction
   */
  timing?: AuctionGetOverviewResponse.Timing;
}

export namespace AuctionGetOverviewResponse {
  /**
   * Quick bid suggestions for current auction
   */
  export interface QuickBid {
    /**
     * Whether bidding is currently allowed
     */
    biddingAllowed: boolean;

    /**
     * Current highest bid value in wei
     */
    currentHighest: unknown | null;

    /**
     * Minimum competitive bid value in wei
     */
    minCompetitive: string;

    /**
     * Estimated gas fee cap in gwei
     */
    suggestedGasCap: string;

    /**
     * Suggested bid value in wei based on current market
     */
    suggestedValue: string;
  }

  /**
   * Timing information for current/next auction
   */
  export interface Timing {
    /**
     * Milliseconds until bidding closes
     */
    biddingEndsInMs: unknown | null;

    /**
     * Current phase of the auction
     */
    currentPhase: 'upcoming' | 'bidding' | 'closing' | 'settling' | 'completed';

    /**
     * Progress percentage (0-100)
     */
    progressPercent: number;

    /**
     * Milliseconds until settlement completes
     */
    settlementEndsInMs: unknown | null;

    /**
     * Milliseconds until auction starts
     */
    startsInMs: unknown | null;
  }
}

export interface AuctionGetProgressResponse {
  /**
   * Auction details
   */
  auction: Auction;

  /**
   * Current bids in the auction
   */
  bids: Array<BidsAPI.Bid>;

  /**
   * Live update information
   */
  liveUpdates: AuctionGetProgressResponse.LiveUpdates;

  /**
   * Market metrics and analytics
   */
  metrics: MarketMetrics;

  /**
   * Time remaining until deadlines
   */
  timeRemaining: AuctionGetProgressResponse.TimeRemaining;

  /**
   * Price prediction data
   */
  prediction?: AuctionGetProgressResponse.Prediction;
}

export namespace AuctionGetProgressResponse {
  /**
   * Live update information
   */
  export interface LiveUpdates {
    /**
     * Recent activity level
     */
    activityLevel: 'low' | 'medium' | 'high';

    /**
     * Current bid rate (bids per minute)
     */
    bidRate: number;

    /**
     * Price trend indicator
     */
    priceTrend: 'rising' | 'falling' | 'stable';

    /**
     * Timestamp of last bid
     */
    lastBidTime?: string;
  }

  /**
   * Time remaining until deadlines
   */
  export interface TimeRemaining {
    /**
     * Milliseconds until bidding deadline
     */
    biddingMs: number;

    /**
     * Milliseconds until settlement deadline
     */
    settlementMs: number;
  }

  /**
   * Price prediction data
   */
  export interface Prediction {
    /**
     * Prediction confidence (0-1)
     */
    confidence: number;

    /**
     * Confidence interval lower bound
     */
    confidenceLower: string;

    /**
     * Confidence interval upper bound
     */
    confidenceUpper: string;

    /**
     * Predicted clearing price
     */
    predictedPrice: string;

    /**
     * Prediction timestamp
     */
    timestamp: string;
  }
}

export interface AuctionSubmitQuickBidResponse {
  /**
   * Actual bid value used (may differ from requested if auto-adjusted)
   */
  actualValue: string;

  /**
   * Unique bid identifier
   */
  bidId: string;

  /**
   * Current position in auction (1 = highest)
   */
  currentPosition: unknown | null;

  /**
   * Additional information or warnings
   */
  message: unknown | null;

  /**
   * Auction slot this bid was submitted to
   */
  slot: number;

  /**
   * Status of the bid submission
   */
  status: 'confirmed' | 'pending' | 'failed';

  /**
   * Timestamp when bid was submitted
   */
  submittedAt: string;

  /**
   * Whether bid was auto-adjusted
   */
  wasAdjusted: boolean;

  /**
   * Estimated chance of winning (0-1)
   */
  winProbability: unknown | null;
}

export interface AuctionCreateParams {
  /**
   * Slot number for the auction
   */
  slot: number;

  /**
   * Auction metadata including reserve price and settlement method
   */
  metadata?: unknown;
}

export interface AuctionUpdateParams {
  /**
   * Timestamp when auction was finalized
   */
  finalizedAt?: string;

  /**
   * Updated auction metadata
   */
  metadata?: unknown;

  /**
   * New auction state
   */
  state?:
    | 'pending'
    | 'bidding'
    | 'closing'
    | 'settling'
    | 'settled'
    | 'finalizing'
    | 'finalized'
    | 'disputed'
    | 'cancelled';
}

export interface AuctionListParams {
  /**
   * Filter auctions from this slot number
   */
  fromSlot?: number;

  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;

  /**
   * Filter by auction state
   */
  state?:
    | 'pending'
    | 'bidding'
    | 'closing'
    | 'settling'
    | 'settled'
    | 'finalizing'
    | 'finalized'
    | 'disputed'
    | 'cancelled';

  /**
   * Filter auctions up to this slot number
   */
  toSlot?: number;
}

export interface AuctionGetHistoryParams {
  limit: number;
}

export interface AuctionSubmitQuickBidParams {
  /**
   * Quantity to bid for
   */
  quantity: number;

  /**
   * Bid value in wei
   */
  value: string;

  /**
   * Auto-adjust bid to stay competitive (default: false)
   */
  autoAdjust?: boolean;

  /**
   * Gas fee cap in gwei (optional - will use suggested if not provided)
   */
  gasFeeCap?: string;

  /**
   * Maximum value willing to pay if auto-adjust is enabled
   */
  maxValue?: string;

  /**
   * Priority fee in gwei (optional)
   */
  priorityFee?: string;
}

Auctions.Results = Results;

export declare namespace Auctions {
  export {
    type Auction as Auction,
    type MarketMetrics as MarketMetrics,
    type AuctionListResponse as AuctionListResponse,
    type AuctionGetOverviewResponse as AuctionGetOverviewResponse,
    type AuctionGetProgressResponse as AuctionGetProgressResponse,
    type AuctionSubmitQuickBidResponse as AuctionSubmitQuickBidResponse,
    type AuctionCreateParams as AuctionCreateParams,
    type AuctionUpdateParams as AuctionUpdateParams,
    type AuctionListParams as AuctionListParams,
    type AuctionGetHistoryParams as AuctionGetHistoryParams,
    type AuctionSubmitQuickBidParams as AuctionSubmitQuickBidParams,
  };

  export {
    Results as Results,
    type AuctionResult as AuctionResult,
    type ResultGetLatestResponse as ResultGetLatestResponse,
  };
}
