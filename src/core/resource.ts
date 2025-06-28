// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Xga } from '../client';

export abstract class APIResource {
  protected _client: Xga;

  constructor(client: Xga) {
    this._client = client;
  }
}
