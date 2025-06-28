# V1

## System

Methods:

- <code title="get /api/v1/system/health">client.v1.system.<a href="./src/resources/v1/system/system.ts">checkHealth</a>() -> void</code>
- <code title="get /api/v1/system/info">client.v1.system.<a href="./src/resources/v1/system/system.ts">getInfo</a>() -> void</code>
- <code title="get /api/v1/system/metrics">client.v1.system.<a href="./src/resources/v1/system/system.ts">getMetrics</a>() -> void</code>
- <code title="get /api/v1/system/status">client.v1.system.<a href="./src/resources/v1/system/system.ts">getStatus</a>() -> void</code>

### Slot

Methods:

- <code title="get /api/v1/system/slot/current">client.v1.system.slot.<a href="./src/resources/v1/system/slot.ts">getCurrent</a>() -> void</code>
- <code title="get /api/v1/system/slot/upcoming">client.v1.system.slot.<a href="./src/resources/v1/system/slot.ts">getUpcoming</a>() -> void</code>

### Features

Types:

- <code><a href="./src/resources/v1/system/features.ts">FeatureFlag</a></code>
- <code><a href="./src/resources/v1/system/features.ts">FeatureListFlagsResponse</a></code>

Methods:

- <code title="get /api/v1/system/features/{flagName}">client.v1.system.features.<a href="./src/resources/v1/system/features.ts">getFlag</a>(flagName) -> FeatureFlag</code>
- <code title="get /api/v1/system/features">client.v1.system.features.<a href="./src/resources/v1/system/features.ts">listFlags</a>() -> FeatureListFlagsResponse</code>
- <code title="put /api/v1/system/features">client.v1.system.features.<a href="./src/resources/v1/system/features.ts">updateFlag</a>({ ...params }) -> FeatureFlag</code>

### AutoAuction

Types:

- <code><a href="./src/resources/v1/system/auto-auction.ts">AutoAuctionGetStatsResponse</a></code>
- <code><a href="./src/resources/v1/system/auto-auction.ts">AutoAuctionGetStatusResponse</a></code>

Methods:

- <code title="get /api/v1/system/auto-auction/stats">client.v1.system.autoAuction.<a href="./src/resources/v1/system/auto-auction.ts">getStats</a>() -> AutoAuctionGetStatsResponse</code>
- <code title="get /api/v1/system/auto-auction/status">client.v1.system.autoAuction.<a href="./src/resources/v1/system/auto-auction.ts">getStatus</a>() -> AutoAuctionGetStatusResponse</code>
- <code title="put /api/v1/system/auto-auction/toggle">client.v1.system.autoAuction.<a href="./src/resources/v1/system/auto-auction.ts">toggleCreation</a>() -> FeatureFlag</code>

## Auctions

Types:

- <code><a href="./src/resources/v1/auctions/auctions.ts">Auction</a></code>
- <code><a href="./src/resources/v1/auctions/auctions.ts">MarketMetrics</a></code>
- <code><a href="./src/resources/v1/auctions/auctions.ts">AuctionListResponse</a></code>
- <code><a href="./src/resources/v1/auctions/auctions.ts">AuctionGetOverviewResponse</a></code>
- <code><a href="./src/resources/v1/auctions/auctions.ts">AuctionGetProgressResponse</a></code>
- <code><a href="./src/resources/v1/auctions/auctions.ts">AuctionSubmitQuickBidResponse</a></code>

Methods:

- <code title="post /api/v1/auctions">client.v1.auctions.<a href="./src/resources/v1/auctions/auctions.ts">create</a>({ ...params }) -> Auction</code>
- <code title="get /api/v1/auctions/{slot}">client.v1.auctions.<a href="./src/resources/v1/auctions/auctions.ts">retrieve</a>(slot) -> Auction</code>
- <code title="put /api/v1/auctions/{slot}">client.v1.auctions.<a href="./src/resources/v1/auctions/auctions.ts">update</a>(slot, { ...params }) -> Auction</code>
- <code title="get /api/v1/auctions">client.v1.auctions.<a href="./src/resources/v1/auctions/auctions.ts">list</a>({ ...params }) -> AuctionListResponse</code>
- <code title="delete /api/v1/auctions/{slot}">client.v1.auctions.<a href="./src/resources/v1/auctions/auctions.ts">cancel</a>(slot) -> void</code>
- <code title="post /api/v1/auctions/{slot}/finalize">client.v1.auctions.<a href="./src/resources/v1/auctions/auctions.ts">finalize</a>(slot) -> void</code>
- <code title="get /api/v1/auctions/history">client.v1.auctions.<a href="./src/resources/v1/auctions/auctions.ts">getHistory</a>({ ...params }) -> void</code>
- <code title="get /api/v1/auctions/overview">client.v1.auctions.<a href="./src/resources/v1/auctions/auctions.ts">getOverview</a>() -> AuctionGetOverviewResponse</code>
- <code title="get /api/v1/auctions/{slot}/progress">client.v1.auctions.<a href="./src/resources/v1/auctions/auctions.ts">getProgress</a>(slot) -> AuctionGetProgressResponse</code>
- <code title="get /api/v1/auctions/{slot}/status">client.v1.auctions.<a href="./src/resources/v1/auctions/auctions.ts">getStatus</a>(slot) -> void</code>
- <code title="get /api/v1/auctions/{slot}/timing">client.v1.auctions.<a href="./src/resources/v1/auctions/auctions.ts">getTiming</a>(slot) -> void</code>
- <code title="post /api/v1/auctions/quick-bid">client.v1.auctions.<a href="./src/resources/v1/auctions/auctions.ts">submitQuickBid</a>({ ...params }) -> AuctionSubmitQuickBidResponse</code>

### Results

Types:

- <code><a href="./src/resources/v1/auctions/results.ts">AuctionResult</a></code>
- <code><a href="./src/resources/v1/auctions/results.ts">ResultGetLatestResponse</a></code>

Methods:

- <code title="get /api/v1/auctions/results/latest">client.v1.auctions.results.<a href="./src/resources/v1/auctions/results.ts">getLatest</a>() -> ResultGetLatestResponse</code>

## Bids

Types:

- <code><a href="./src/resources/v1/bids.ts">Bid</a></code>
- <code><a href="./src/resources/v1/bids.ts">BidListResponse</a></code>
- <code><a href="./src/resources/v1/bids.ts">BidGetByAuctionResponse</a></code>
- <code><a href="./src/resources/v1/bids.ts">BidGetByEntityResponse</a></code>

Methods:

- <code title="post /api/v1/bids">client.v1.bids.<a href="./src/resources/v1/bids.ts">create</a>({ ...params }) -> Bid</code>
- <code title="get /api/v1/bids/{id}">client.v1.bids.<a href="./src/resources/v1/bids.ts">retrieve</a>(id) -> Bid</code>
- <code title="put /api/v1/bids/{id}">client.v1.bids.<a href="./src/resources/v1/bids.ts">update</a>(id, { ...params }) -> Bid</code>
- <code title="get /api/v1/bids">client.v1.bids.<a href="./src/resources/v1/bids.ts">list</a>({ ...params }) -> BidListResponse</code>
- <code title="delete /api/v1/bids/{id}">client.v1.bids.<a href="./src/resources/v1/bids.ts">cancel</a>(id) -> void</code>
- <code title="get /api/v1/bids/auction/{slot}">client.v1.bids.<a href="./src/resources/v1/bids.ts">getByAuction</a>(slot) -> BidGetByAuctionResponse</code>
- <code title="get /api/v1/bids/entity/{entityId}">client.v1.bids.<a href="./src/resources/v1/bids.ts">getByEntity</a>(entityID) -> BidGetByEntityResponse</code>
- <code title="post /api/v1/bids/{id}/validate">client.v1.bids.<a href="./src/resources/v1/bids.ts">validate</a>(id) -> void</code>

## Entities

Types:

- <code><a href="./src/resources/v1/entities/entities.ts">Entity</a></code>
- <code><a href="./src/resources/v1/entities/entities.ts">EntityListResponse</a></code>

Methods:

- <code title="post /api/v1/entities">client.v1.entities.<a href="./src/resources/v1/entities/entities.ts">create</a>({ ...params }) -> Entity</code>
- <code title="get /api/v1/entities/{id}">client.v1.entities.<a href="./src/resources/v1/entities/entities.ts">retrieve</a>(id) -> Entity</code>
- <code title="put /api/v1/entities/{id}">client.v1.entities.<a href="./src/resources/v1/entities/entities.ts">update</a>(id, { ...params }) -> Entity</code>
- <code title="get /api/v1/entities">client.v1.entities.<a href="./src/resources/v1/entities/entities.ts">list</a>({ ...params }) -> EntityListResponse</code>
- <code title="delete /api/v1/entities/{id}">client.v1.entities.<a href="./src/resources/v1/entities/entities.ts">delete</a>(id) -> void</code>
- <code title="get /api/v1/entities/{id}/stats">client.v1.entities.<a href="./src/resources/v1/entities/entities.ts">getStats</a>(id, { ...params }) -> void</code>

### APIKeys

Types:

- <code><a href="./src/resources/v1/entities/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/v1/entities/api-keys.ts">APIKeyListResponse</a></code>

Methods:

- <code title="post /api/v1/entities/{id}/api-keys">client.v1.entities.apiKeys.<a href="./src/resources/v1/entities/api-keys.ts">create</a>(id, { ...params }) -> APIKey</code>
- <code title="get /api/v1/entities/{id}/api-keys">client.v1.entities.apiKeys.<a href="./src/resources/v1/entities/api-keys.ts">list</a>(id) -> APIKeyListResponse</code>
- <code title="delete /api/v1/entities/{id}/api-keys/{keyId}">client.v1.entities.apiKeys.<a href="./src/resources/v1/entities/api-keys.ts">revoke</a>(keyID, { ...params }) -> void</code>
