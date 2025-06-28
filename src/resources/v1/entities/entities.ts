// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from './api-keys';
import { APIKey, APIKeyCreateParams, APIKeyListResponse, APIKeyRevokeParams, APIKeys } from './api-keys';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Entities extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);

  /**
   * Create a new entity in the auction system. An entity represents a participant
   *       who can submit bids and manage API keys for programmatic access.
   *
   * @example
   * ```ts
   * const entity = await client.v1.entities.create({
   *   email: 'contact@acme-validator.com',
   *   name: 'Acme Validator',
   * });
   * ```
   */
  create(body: EntityCreateParams, options?: RequestOptions): APIPromise<Entity> {
    return this._client.post('/api/v1/entities', { body, ...options });
  }

  /**
   * Get entity by ID
   *
   * @example
   * ```ts
   * const entity = await client.v1.entities.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Entity> {
    return this._client.get(path`/api/v1/entities/${id}`, options);
  }

  /**
   * Update entity information. Only the entity owner or admin can update.
   *
   * @example
   * ```ts
   * const entity = await client.v1.entities.update('id');
   * ```
   */
  update(id: string, body: EntityUpdateParams, options?: RequestOptions): APIPromise<Entity> {
    return this._client.put(path`/api/v1/entities/${id}`, { body, ...options });
  }

  /**
   * Retrieve entities with optional filtering and pagination
   *
   * @example
   * ```ts
   * const entities = await client.v1.entities.list();
   * ```
   */
  list(
    query: EntityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntityListResponse> {
    return this._client.get('/api/v1/entities', { query, ...options });
  }

  /**
   * Delete an entity. This will also revoke all associated API keys.
   *       Only the entity owner or admin can delete.
   *
   * @example
   * ```ts
   * await client.v1.entities.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/entities/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve bidding statistics and performance metrics for an entity
   *
   * @example
   * ```ts
   * await client.v1.entities.getStats('id');
   * ```
   */
  getStats(
    id: string,
    query: EntityGetStatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/v1/entities/${id}/stats`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Entity {
  /**
   * Unique entity identifier
   */
  id: string;

  /**
   * Number of active API keys
   */
  activeApiKeys: number;

  /**
   * Entity creation timestamp
   */
  createdAt: string;

  /**
   * Contact email address
   */
  email: string;

  /**
   * Whether entity has any API keys
   */
  hasApiKeys: boolean;

  /**
   * Whether entity is currently active
   */
  isActive: boolean;

  /**
   * Entity name
   */
  name: string;

  /**
   * Current rate limit usage percentage
   */
  rateLimitUsage: number;

  /**
   * Entity status
   */
  status: 'active' | 'suspended' | 'inactive';

  /**
   * Number of successful bids
   */
  successfulBids: number;

  /**
   * Bid success rate (0-1)
   */
  successRate: number;

  /**
   * Total number of bids submitted
   */
  totalBids: number;

  /**
   * Last update timestamp
   */
  updatedAt: string;

  /**
   * Entity verification status
   */
  verificationStatus: 'unverified' | 'pending' | 'verified' | 'rejected';

  /**
   * Last activity timestamp
   */
  lastActivityAt?: string;

  /**
   * Additional entity metadata
   */
  metadata?: unknown;

  /**
   * Organization name
   */
  organization?: string;

  /**
   * Website URL
   */
  website?: string;
}

export type EntityListResponse = Array<Entity>;

export interface EntityCreateParams {
  /**
   * Contact email address
   */
  email: string;

  /**
   * Entity name or identifier
   */
  name: string;

  /**
   * Additional entity metadata
   */
  metadata?: unknown;

  /**
   * Organization or company name
   */
  organization?: string;

  /**
   * Website URL
   */
  website?: string;
}

export interface EntityUpdateParams {
  /**
   * Contact email address
   */
  email?: string;

  /**
   * Additional entity metadata
   */
  metadata?: unknown;

  /**
   * Entity name or identifier
   */
  name?: string;

  /**
   * Organization or company name
   */
  organization?: string;

  /**
   * Website URL
   */
  website?: string;
}

export interface EntityListParams {
  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Page offset (0-based)
   */
  offset?: number;

  /**
   * Filter by organization
   */
  organization?: string;

  /**
   * Search by entity name (partial match)
   */
  search?: string;

  /**
   * Sort field
   */
  sortBy?: 'createdAt' | 'name' | 'email' | 'totalBids' | 'successRate';

  /**
   * Sort order
   */
  sortOrder?: 'asc' | 'desc';
}

export interface EntityGetStatsParams {
  /**
   * Time period for statistics
   */
  period?: '1h' | '24h' | '7d' | '30d';
}

Entities.APIKeys = APIKeys;

export declare namespace Entities {
  export {
    type Entity as Entity,
    type EntityListResponse as EntityListResponse,
    type EntityCreateParams as EntityCreateParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityListParams as EntityListParams,
    type EntityGetStatsParams as EntityGetStatsParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKey as APIKey,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyRevokeParams as APIKeyRevokeParams,
  };
}
