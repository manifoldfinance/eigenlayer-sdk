// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BidsAPI from './bids';
import {
  Bid,
  BidCreateParams,
  BidGetByAuctionResponse,
  BidGetByEntityResponse,
  BidListParams,
  BidListResponse,
  BidUpdateParams,
  Bids,
} from './bids';
import * as AuctionsAPI from './auctions/auctions';
import {
  Auction,
  AuctionCreateParams,
  AuctionGetHistoryParams,
  AuctionGetOverviewResponse,
  AuctionGetProgressResponse,
  AuctionListParams,
  AuctionListResponse,
  AuctionSubmitQuickBidParams,
  AuctionSubmitQuickBidResponse,
  AuctionUpdateParams,
  Auctions,
  MarketMetrics,
} from './auctions/auctions';
import * as EntitiesAPI from './entities/entities';
import {
  Entities,
  Entity,
  EntityCreateParams,
  EntityGetStatsParams,
  EntityListParams,
  EntityListResponse,
  EntityUpdateParams,
} from './entities/entities';
import * as SystemAPI from './system/system';
import { System } from './system/system';

export class V1 extends APIResource {
  system: SystemAPI.System = new SystemAPI.System(this._client);
  auctions: AuctionsAPI.Auctions = new AuctionsAPI.Auctions(this._client);
  bids: BidsAPI.Bids = new BidsAPI.Bids(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
}

V1.System = System;
V1.Auctions = Auctions;
V1.Bids = Bids;
V1.Entities = Entities;

export declare namespace V1 {
  export { System as System };

  export {
    Auctions as Auctions,
    type Auction as Auction,
    type MarketMetrics as MarketMetrics,
    type AuctionListResponse as AuctionListResponse,
    type AuctionGetOverviewResponse as AuctionGetOverviewResponse,
    type AuctionGetProgressResponse as AuctionGetProgressResponse,
    type AuctionSubmitQuickBidResponse as AuctionSubmitQuickBidResponse,
    type AuctionCreateParams as AuctionCreateParams,
    type AuctionUpdateParams as AuctionUpdateParams,
    type AuctionListParams as AuctionListParams,
    type AuctionGetHistoryParams as AuctionGetHistoryParams,
    type AuctionSubmitQuickBidParams as AuctionSubmitQuickBidParams,
  };

  export {
    Bids as Bids,
    type Bid as Bid,
    type BidListResponse as BidListResponse,
    type BidGetByAuctionResponse as BidGetByAuctionResponse,
    type BidGetByEntityResponse as BidGetByEntityResponse,
    type BidCreateParams as BidCreateParams,
    type BidUpdateParams as BidUpdateParams,
    type BidListParams as BidListParams,
  };

  export {
    Entities as Entities,
    type Entity as Entity,
    type EntityListResponse as EntityListResponse,
    type EntityCreateParams as EntityCreateParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityListParams as EntityListParams,
    type EntityGetStatsParams as EntityGetStatsParams,
  };
}
