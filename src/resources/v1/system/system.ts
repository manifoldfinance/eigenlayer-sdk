// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AutoAuctionAPI from './auto-auction';
import { AutoAuction, AutoAuctionGetStatsResponse, AutoAuctionGetStatusResponse } from './auto-auction';
import * as FeaturesAPI from './features';
import { FeatureFlag, FeatureListFlagsResponse, FeatureUpdateFlagParams, Features } from './features';
import * as SlotAPI from './slot';
import { Slot } from './slot';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class System extends APIResource {
  slot: SlotAPI.Slot = new SlotAPI.Slot(this._client);
  features: FeaturesAPI.Features = new FeaturesAPI.Features(this._client);
  autoAuction: AutoAuctionAPI.AutoAuction = new AutoAuctionAPI.AutoAuction(this._client);

  /**
   * Health check endpoint
   *
   * @example
   * ```ts
   * await client.v1.system.checkHealth();
   * ```
   */
  checkHealth(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/system/health', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * System information
   *
   * @example
   * ```ts
   * await client.v1.system.getInfo();
   * ```
   */
  getInfo(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/system/info', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * System metrics
   *
   * @example
   * ```ts
   * await client.v1.system.getMetrics();
   * ```
   */
  getMetrics(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/system/metrics', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Detailed system status
   *
   * @example
   * ```ts
   * await client.v1.system.getStatus();
   * ```
   */
  getStatus(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/system/status', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

System.Slot = Slot;
System.Features = Features;
System.AutoAuction = AutoAuction;

export declare namespace System {
  export { Slot as Slot };

  export {
    Features as Features,
    type FeatureFlag as FeatureFlag,
    type FeatureListFlagsResponse as FeatureListFlagsResponse,
    type FeatureUpdateFlagParams as FeatureUpdateFlagParams,
  };

  export {
    AutoAuction as AutoAuction,
    type AutoAuctionGetStatsResponse as AutoAuctionGetStatsResponse,
    type AutoAuctionGetStatusResponse as AutoAuctionGetStatusResponse,
  };
}
