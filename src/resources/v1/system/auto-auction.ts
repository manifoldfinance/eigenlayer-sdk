// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FeaturesAPI from './features';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class AutoAuction extends APIResource {
  /**
   * Get statistics about automatic auction creation performance
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.system.autoAuction.getStats();
   * ```
   */
  getStats(options?: RequestOptions): APIPromise<AutoAuctionGetStatsResponse> {
    return this._client.get('/api/v1/system/auto-auction/stats', options);
  }

  /**
   * Get the current status and configuration of automatic auction creation
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.system.autoAuction.getStatus();
   * ```
   */
  getStatus(options?: RequestOptions): APIPromise<AutoAuctionGetStatusResponse> {
    return this._client.get('/api/v1/system/auto-auction/status', options);
  }

  /**
   * Enable or disable automatic auction creation (admin only)
   *
   * @example
   * ```ts
   * const featureFlag =
   *   await client.v1.system.autoAuction.toggleCreation();
   * ```
   */
  toggleCreation(options?: RequestOptions): APIPromise<FeaturesAPI.FeatureFlag> {
    return this._client.put('/api/v1/system/auto-auction/toggle', options);
  }
}

export interface AutoAuctionGetStatsResponse {
  /**
   * Number of auctions successfully created
   */
  created: number;

  /**
   * Number of failed creation attempts
   */
  failed: number;

  /**
   * Whether auto auction creation is enabled
   */
  isEnabled: boolean;

  /**
   * When the scheduler last ran
   */
  lastRun: string;

  /**
   * Available auction templates
   */
  templates: Array<string>;

  /**
   * Last error message if any
   */
  lastError?: string;
}

export interface AutoAuctionGetStatusResponse {
  /**
   * Whether auto auction creation is enabled
   */
  enabled: boolean;

  /**
   * When the status was last updated
   */
  lastUpdated: string;

  /**
   * Auto auction configuration
   */
  config?: unknown;

  /**
   * Error message if configuration unavailable
   */
  error?: string;

  /**
   * Default auction template settings
   */
  template?: unknown;
}

export declare namespace AutoAuction {
  export {
    type AutoAuctionGetStatsResponse as AutoAuctionGetStatsResponse,
    type AutoAuctionGetStatusResponse as AutoAuctionGetStatusResponse,
  };
}
