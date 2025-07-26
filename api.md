# Rewards

## V1

Types:

- <code><a href="./src/resources/rewards/v1/v1.ts">V1GenerateClaimProofResponse</a></code>
- <code><a href="./src/resources/rewards/v1/v1.ts">V1ListDistributionRootsResponse</a></code>

Methods:

- <code title="post /rewards/v1/claim-proof">client.rewards.v1.<a href="./src/resources/rewards/v1/v1.ts">generateClaimProof</a>({ ...params }) -> V1GenerateClaimProofResponse</code>
- <code title="get /rewards/v1/distribution-roots">client.rewards.v1.<a href="./src/resources/rewards/v1/v1.ts">listDistributionRoots</a>() -> V1ListDistributionRootsResponse</code>

### Earners

Types:

- <code><a href="./src/resources/rewards/v1/earners.ts">EarnerGetSummarizedRewardsResponse</a></code>

Methods:

- <code title="get /rewards/v1/earners/{earner_address}/summarized-rewards">client.rewards.v1.earners.<a href="./src/resources/rewards/v1/earners.ts">getSummarizedRewards</a>(earnerAddress, { ...params }) -> EarnerGetSummarizedRewardsResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /v1/health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>
