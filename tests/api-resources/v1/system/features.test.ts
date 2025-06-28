// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Xga from 'xga';

const client = new Xga({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource features', () => {
  // skipped: tests are disabled for the time being
  test.skip('getFlag', async () => {
    const responsePromise = client.v1.system.features.getFlag('flagName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listFlags', async () => {
    const responsePromise = client.v1.system.features.listFlags();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateFlag: only required params', async () => {
    const responsePromise = client.v1.system.features.updateFlag({
      enabled: true,
      flagName: 'AUTO_AUCTION_ENABLED',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateFlag: required and optional params', async () => {
    const response = await client.v1.system.features.updateFlag({
      enabled: true,
      flagName: 'AUTO_AUCTION_ENABLED',
    });
  });
});
