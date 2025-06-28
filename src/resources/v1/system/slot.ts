// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Slot extends APIResource {
  /**
   * Get current Ethereum slot information
   *
   * @example
   * ```ts
   * await client.v1.system.slot.getCurrent();
   * ```
   */
  getCurrent(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/system/slot/current', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get upcoming Ethereum slots
   *
   * @example
   * ```ts
   * await client.v1.system.slot.getUpcoming();
   * ```
   */
  getUpcoming(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/system/slot/upcoming', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
