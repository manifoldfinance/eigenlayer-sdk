// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Features extends APIResource {
  /**
   * Retrieve the status of a specific feature flag
   *
   * @example
   * ```ts
   * const featureFlag = await client.v1.system.features.getFlag(
   *   'flagName',
   * );
   * ```
   */
  getFlag(flagName: string, options?: RequestOptions): APIPromise<FeatureFlag> {
    return this._client.get(path`/api/v1/system/features/${flagName}`, options);
  }

  /**
   * Retrieve the status of all system feature flags
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.system.features.listFlags();
   * ```
   */
  listFlags(options?: RequestOptions): APIPromise<FeatureListFlagsResponse> {
    return this._client.get('/api/v1/system/features', options);
  }

  /**
   * Enable or disable a system feature flag (admin only)
   *
   * @example
   * ```ts
   * const featureFlag =
   *   await client.v1.system.features.updateFlag({
   *     enabled: true,
   *     flagName: 'AUTO_AUCTION_ENABLED',
   *   });
   * ```
   */
  updateFlag(body: FeatureUpdateFlagParams, options?: RequestOptions): APIPromise<FeatureFlag> {
    return this._client.put('/api/v1/system/features', { body, ...options });
  }
}

export interface FeatureFlag {
  /**
   * Whether the feature flag is enabled
   */
  enabled: boolean;

  /**
   * Feature flag name
   */
  flagName: string;

  /**
   * When the flag was last updated
   */
  lastUpdated: string;
}

export interface FeatureListFlagsResponse {
  /**
   * All feature flags and their status
   */
  flags: unknown;

  /**
   * Timestamp of response
   */
  timestamp: string;
}

export interface FeatureUpdateFlagParams {
  /**
   * Whether the feature flag is enabled
   */
  enabled: boolean;

  /**
   * Feature flag name
   */
  flagName: string;
}

export declare namespace Features {
  export {
    type FeatureFlag as FeatureFlag,
    type FeatureListFlagsResponse as FeatureListFlagsResponse,
    type FeatureUpdateFlagParams as FeatureUpdateFlagParams,
  };
}
