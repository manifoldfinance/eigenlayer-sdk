// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Generate a new API key for the entity. API keys are used for programmatic
   *       access to the auction system.
   *
   * @example
   * ```ts
   * const apiKey = await client.v1.entities.apiKeys.create(
   *   'id',
   *   {
   *     name: 'Production Bidding Bot',
   *     scopes: ['read', 'bid:submit', 'bid:cancel'],
   *   },
   * );
   * ```
   */
  create(id: string, body: APIKeyCreateParams, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.post(path`/api/v1/entities/${id}/api-keys`, { body, ...options });
  }

  /**
   * Retrieve all API keys for an entity (excludes secret keys)
   *
   * @example
   * ```ts
   * const apiKeys = await client.v1.entities.apiKeys.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<APIKeyListResponse> {
    return this._client.get(path`/api/v1/entities/${id}/api-keys`, options);
  }

  /**
   * Revoke an API key, making it immediately invalid
   *
   * @example
   * ```ts
   * await client.v1.entities.apiKeys.revoke('keyId', {
   *   id: 'id',
   * });
   * ```
   */
  revoke(keyID: string, params: APIKeyRevokeParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/api/v1/entities/${id}/api-keys/${keyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface APIKey {
  /**
   * Unique API key identifier
   */
  id: string;

  /**
   * API key creation timestamp
   */
  createdAt: string;

  /**
   * Number of requests in the current rate limit window
   */
  currentWindowRequests: number;

  /**
   * Days until expiration (null if no expiration)
   */
  daysUntilExpiration: number | null;

  /**
   * Entity ID that owns this API key
   */
  entityId: string;

  /**
   * Whether API key has expired
   */
  hasExpired: boolean;

  /**
   * Whether API key is currently active and valid
   */
  isActive: boolean;

  /**
   * Whether API key is approaching rate limit
   */
  isNearRateLimit: boolean;

  /**
   * API key prefix (for identification)
   */
  keyPrefix: string;

  /**
   * Human-readable name for the API key
   */
  name: string;

  /**
   * Rate limit for this API key (requests per hour)
   */
  rateLimit: number;

  /**
   * Scopes/permissions for the API key
   */
  scopes: Array<
    'read' | 'write' | 'bid:submit' | 'bid:update' | 'bid:cancel' | 'auction:read' | 'entity:manage'
  >;

  /**
   * API key status
   */
  status: 'active' | 'revoked' | 'expired';

  /**
   * Total number of requests made with this key
   */
  totalRequests: number;

  /**
   * Description of the API key usage
   */
  description?: string;

  /**
   * API key expiration timestamp
   */
  expiresAt?: string | null;

  /**
   * Full API key (only returned on creation)
   */
  key?: string;

  /**
   * Last usage timestamp
   */
  lastUsedAt?: string;
}

export type APIKeyListResponse = Array<APIKey>;

export interface APIKeyCreateParams {
  /**
   * Human-readable name for the API key
   */
  name: string;

  /**
   * Scopes/permissions for the API key
   */
  scopes: Array<
    'read' | 'write' | 'bid:submit' | 'bid:update' | 'bid:cancel' | 'auction:read' | 'entity:manage'
  >;

  /**
   * Description of the API key usage
   */
  description?: string;

  /**
   * Expiration date for the API key (optional, null for no expiration)
   */
  expiresAt?: string | null;
}

export interface APIKeyRevokeParams {
  /**
   * Entity CUID
   */
  id: string;
}

export declare namespace APIKeys {
  export {
    type APIKey as APIKey,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyRevokeParams as APIKeyRevokeParams,
  };
}
