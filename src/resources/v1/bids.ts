// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bids extends APIResource {
  /**
   * Submit a bid for a specific auction slot. Validates all critical constraints:
   *       - Temporal validity (before auction deadline)
   *       - Economic validity (reserve price, value bounds)
   *       - Gas constraints (fee_cap >= tip_cap)
   *       - Entity limits (max bids per slot)
   *       - Rate limits (max bids per time window)
   *       - Auction state (must be in bidding state)
   *
   * @example
   * ```ts
   * const bid = await client.v1.bids.create({
   *   builderPublicKey:
   *     '0x1234567890abcdef1234567890abcdef12345678',
   *   gasFeeCap: '20000000000',
   *   gasTipCap: '20000000000',
   *   slot: 1234567,
   *   value: '1000000000000000000',
   * });
   * ```
   */
  create(body: BidCreateParams, options?: RequestOptions): APIPromise<Bid> {
    return this._client.post('/api/v1/bids', { body, ...options });
  }

  /**
   * Get bid by ID
   *
   * @example
   * ```ts
   * const bid = await client.v1.bids.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Bid> {
    return this._client.get(path`/api/v1/bids/${id}`, options);
  }

  /**
   * Update a bid's value, quantity, or gas parameters.
   *       Only the bid owner can update their bids.
   *       Bids can only be updated in PENDING or VALIDATED status.
   *
   * @example
   * ```ts
   * const bid = await client.v1.bids.update('id');
   * ```
   */
  update(id: string, body: BidUpdateParams, options?: RequestOptions): APIPromise<Bid> {
    return this._client.put(path`/api/v1/bids/${id}`, { body, ...options });
  }

  /**
   * Retrieve bids with optional filtering by slot, status, entity, with pagination
   *
   * @example
   * ```ts
   * const bids = await client.v1.bids.list();
   * ```
   */
  list(query: BidListParams | null | undefined = {}, options?: RequestOptions): APIPromise<BidListResponse> {
    return this._client.get('/api/v1/bids', { query, ...options });
  }

  /**
   * Cancel a bid. Only the bid owner can cancel their bids.
   *       Bids can only be cancelled in PENDING or VALIDATED status.
   *
   * @example
   * ```ts
   * await client.v1.bids.cancel('id');
   * ```
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/bids/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all bids for a specific auction slot, ordered by bid value
   *
   * @example
   * ```ts
   * const bids = await client.v1.bids.getByAuction(0);
   * ```
   */
  getByAuction(slot: number, options?: RequestOptions): APIPromise<BidGetByAuctionResponse> {
    return this._client.get(path`/api/v1/bids/auction/${slot}`, options);
  }

  /**
   * Retrieve all bids submitted by a specific entity
   *
   * @example
   * ```ts
   * const bids = await client.v1.bids.getByEntity('entityId');
   * ```
   */
  getByEntity(entityID: string, options?: RequestOptions): APIPromise<BidGetByEntityResponse> {
    return this._client.get(path`/api/v1/bids/entity/${entityID}`, options);
  }

  /**
   * Validate a bid against all business rules and mark as validated
   *
   * @example
   * ```ts
   * await client.v1.bids.validate('id');
   * ```
   */
  validate(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/v1/bids/${id}/validate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Bid {
  /**
   * Unique bid identifier
   */
  id: string;

  /**
   * Builder public key
   */
  builderPublicKey: string;

  /**
   * Entity identifier
   */
  entityId: string;

  /**
   * Gas fee cap in wei
   */
  gasFeeCap: string;

  /**
   * Gas tip cap in wei
   */
  gasTipCap: string;

  /**
   * Whether bid has expired
   */
  hasExpired: boolean;

  /**
   * Whether bid is currently active
   */
  isActive: boolean;

  /**
   * Whether bid can be modified
   */
  isModifiable: boolean;

  /**
   * Unique nonce for replay protection
   */
  nonce: string;

  /**
   * Quantity of units
   */
  quantity: number;

  /**
   * Slot number
   */
  slot: number;

  /**
   * Current bid status
   */
  status:
    | 'pending'
    | 'submitted'
    | 'validated'
    | 'updated'
    | 'winning'
    | 'partial'
    | 'lost'
    | 'cancelled'
    | 'expired';

  /**
   * Bid submission timestamp
   */
  submittedAt: string;

  /**
   * Last update timestamp
   */
  updatedAt: string;

  /**
   * Bid valid from timestamp
   */
  validFrom: string;

  /**
   * Bid valid until timestamp
   */
  validUntil: string;

  /**
   * Bid value in wei
   */
  value: string;

  /**
   * Bid version number
   */
  version: number;

  /**
   * Additional bid metadata
   */
  metadata?: unknown;

  /**
   * Validation timestamp
   */
  validatedAt?: string;
}

export type BidListResponse = Array<Bid>;

export type BidGetByAuctionResponse = Array<Bid>;

export type BidGetByEntityResponse = Array<Bid>;

export interface BidCreateParams {
  /**
   * Builder public key for block proposal (0x-prefixed hex string)
   */
  builderPublicKey: string;

  /**
   * Gas fee cap in wei - must be >= gasTipCap for EIP-1559 compatibility
   */
  gasFeeCap: string;

  /**
   * Gas tip cap in wei - must be <= gasFeeCap for EIP-1559 compatibility
   */
  gasTipCap: string;

  /**
   * Slot number for the bid (must be future slot)
   */
  slot: number;

  /**
   * Bid value in wei (as string for BigInt precision).
   *         Must be greater than auction reserve price and follow gas constraints.
   *         Example: "1000000000000000000" = 1 ETH
   */
  value: string;

  /**
   * Additional bid metadata
   */
  metadata?: unknown;

  /**
   * Quantity of units to bid for
   */
  quantity?: number;
}

export interface BidUpdateParams {
  /**
   * Updated gas fee cap in wei
   */
  gasFeeCap?: string;

  /**
   * Updated gas tip cap in wei
   */
  gasTipCap?: string;

  /**
   * Updated quantity
   */
  quantity?: number;

  /**
   * Updated bid value in wei
   */
  value?: string;
}

export interface BidListParams {
  /**
   * Filter by entity ID
   */
  entityId?: string;

  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;

  /**
   * Filter by slot number
   */
  slot?: number;

  /**
   * Filter by bid status
   */
  status?:
    | 'pending'
    | 'submitted'
    | 'validated'
    | 'updated'
    | 'winning'
    | 'partial'
    | 'lost'
    | 'cancelled'
    | 'expired';
}

export declare namespace Bids {
  export {
    type Bid as Bid,
    type BidListResponse as BidListResponse,
    type BidGetByAuctionResponse as BidGetByAuctionResponse,
    type BidGetByEntityResponse as BidGetByEntityResponse,
    type BidCreateParams as BidCreateParams,
    type BidUpdateParams as BidUpdateParams,
    type BidListParams as BidListParams,
  };
}
