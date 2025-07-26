// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Xga from 'xga';

const client = new Xga({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource earners', () => {
  // skipped: tests are disabled for the time being
  test.skip('getSummarizedRewards', async () => {
    const responsePromise = client.rewards.v1.earners.getSummarizedRewards('earner_address');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getSummarizedRewards: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rewards.v1.earners.getSummarizedRewards(
        'earner_address',
        { block_height: 0, snapshot_date: 'snapshot_date' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Xga.NotFoundError);
  });
});
