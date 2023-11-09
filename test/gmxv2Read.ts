import { FixedNumber, parseEther, parseUnits } from 'ethers-v6'
import GmxV2Service from '../src/exchanges/gmxv2'
import {
  CancelOrder,
  CreateOrder,
  PositionData,
  PositionInfo,
  UpdateOrder
} from '../src/interfaces/V1/IRouterAdapterBaseV1'
import { tokens } from '../src/common/tokens'
import { logObject } from '../src/common/helper'

const ex = new GmxV2Service()

const xrpMarketId = '0x0CCB4fAa6f1F1B30911619f1184082aB4E25813c:GMXV2:42161'
const ethMarketId = '0x70d95587d40A2caf56bd97485aB3Eec10Bee6336:GMXV2:42161'

async function testGetAllPositions() {
  const res = await ex.getAllPositions('0x2f88a09ed4174750a464576FE49E586F90A34820', undefined)
  console.dir({ res: res.result[0] }, { depth: 4 })
}

async function testSupportedMarkets() {
  const res = await ex.supportedMarkets(ex.supportedChains())
  console.dir({ res }, { depth: 4 })
}

async function testGetMarketsInfo() {
  const mIds = [xrpMarketId, ethMarketId]
  const res = await ex.getMarketsInfo(mIds)
  console.dir({ res }, { depth: 4 })
}

async function testMarketPrices() {
  const markets = await ex.supportedMarkets(ex.supportedChains())

  for (const m of markets) {
    const price = await ex.getMarketPrices([m.marketId])
    console.log(m.indexToken.symbol, ': ', { price })
  }
}

async function increasePosition() {
  const orders: CreateOrder[] = []
  const updateOrders: UpdateOrder[] = []
  const cancelOrders: CancelOrder[] = []

  await ex.setup('0x92B54cA40F1d7aca2E9c140176fabC1f7D7B387A')
  await ex.supportedMarkets(ex.supportedChains())

  // pass size delta in usd terms and margin delta in token terms

  // direction x type combinations for eth and erc20

  // orders.push({
  //   type: 'MARKET',
  //   marketId: ethMarketId,
  //   direction: 'LONG',
  //   sizeDelta: { amount: FixedNumber.fromValue(parseUnits('40', 30), 30), isTokenAmount: false },
  //   marginDelta: { amount: FixedNumber.fromValue(parseEther('0.02'), 18), isTokenAmount: true },
  //   triggerData: undefined,
  //   collateral: tokens.ETH,
  //   slippage: undefined
  // })
  //
  // orders.push({
  //   type: 'LIMIT',
  //   marketId: ethMarketId,
  //   direction: 'LONG',
  //   sizeDelta: { amount: FixedNumber.fromValue(parseUnits('40', 30), 30), isTokenAmount: false },
  //   marginDelta: { amount: FixedNumber.fromValue(parseEther('0.02'), 18), isTokenAmount: true },
  //   collateral: tokens.ETH,
  //   triggerData: { triggerPrice: FixedNumber.fromValue(parseEther('1800'), 18), triggerAboveThreshold: true },
  //   slippage: undefined
  // })
  //
  // orders.push({
  //   type: 'MARKET',
  //   marketId: ethMarketId,
  //   direction: 'SHORT',
  //   sizeDelta: { amount: FixedNumber.fromString('200', 'fixed128x30'), isTokenAmount: false },
  //   marginDelta: { amount: FixedNumber.fromString('0.02', 'fixed128x18'), isTokenAmount: true },
  //   triggerData: undefined,
  //   collateral: tokens.ETH,
  //   slippage: undefined
  // })
  //
  // orders.push({
  //   type: 'LIMIT',
  //   marketId: ethMarketId,
  //   direction: 'SHORT',
  //   sizeDelta: { amount: FixedNumber.fromValue(parseUnits('40', 30), 30), isTokenAmount: false },
  //   marginDelta: { amount: FixedNumber.fromValue(parseEther('0.02'), 18), isTokenAmount: true },
  //   collateral: tokens.ETH,
  //   triggerData: { triggerPrice: FixedNumber.fromValue(parseEther('1800'), 18), triggerAboveThreshold: true },
  //   slippage: undefined
  // })
  //
  // orders.push({
  //   type: 'MARKET',
  //   marketId: xrpMarketId,
  //   direction: 'LONG',
  //   sizeDelta: { amount: FixedNumber.fromValue(parseUnits('50', 30), 30), isTokenAmount: false },
  //   marginDelta: { amount: FixedNumber.fromValue(parseEther('0.02'), 18), isTokenAmount: true },
  //   triggerData: undefined,
  //   collateral: tokens.ETH,
  //   slippage: 2
  // })
  //
  // orders.push({
  //   type: 'LIMIT',
  //   marketId: xrpMarketId,
  //   direction: 'LONG',
  //   sizeDelta: { amount: FixedNumber.fromValue(parseUnits('100', 30), 30), isTokenAmount: false },
  //   marginDelta: { amount: FixedNumber.fromValue(parseEther('20'), 6), isTokenAmount: true },
  //   collateral: tokens.USDC,
  //   triggerData: { triggerPrice: FixedNumber.fromValue(parseEther('0.5'), 18), triggerAboveThreshold: true },
  //   slippage: 2
  // })
  //
  // orders.push({
  //   type: 'MARKET',
  //   marketId: xrpMarketId,
  //   direction: 'SHORT',
  //   sizeDelta: { amount: FixedNumber.fromValue(parseUnits('50', 30), 30), isTokenAmount: false },
  //   marginDelta: { amount: FixedNumber.fromValue(parseEther('0.02'), 18), isTokenAmount: true },
  //   triggerData: undefined,
  //   collateral: tokens.ETH,
  //   slippage: 2
  // })
  //
  // orders.push({
  //   type: 'LIMIT',
  //   marketId: xrpMarketId,
  //   direction: 'SHORT',
  //   sizeDelta: { amount: FixedNumber.fromValue(parseUnits('204', 30), 30), isTokenAmount: false },
  //   marginDelta: { amount: FixedNumber.fromValue(parseEther('0.02'), 18), isTokenAmount: true },
  //   collateral: tokens.ETH,
  //   triggerData: { triggerPrice: FixedNumber.fromValue(parseEther('1'), 18), triggerAboveThreshold: true },
  //   slippage: 2
  // })

  // console.dir(await ex.increasePosition(orders), { depth: 4 })

  // updateOrders.push({
  //   type: "LIMIT",
  //   orderId: "0xfe9f545ed33253d24046db903c42c247fb35c817da1f1e13f2d8813abdd2d535",
  //   triggerData: {
  //     triggerAboveThreshold: true,
  //     triggerPrice: FixedNumber.fromString('204', 'fixed128x18'),
  //   },
  //   marketId: xrpMarketId,
  //   sizeDelta: { amount: FixedNumber.fromString('204', 'fixed128x30'), isTokenAmount: false },
  //   direction: 'SHORT',
  //   marginDelta: { amount: FixedNumber.fromValue(0), isTokenAmount: true }
  // })

  // console.dir(await ex.updateOrder(updateOrders), { depth: 4 })

  // cancelOrders.push({
  //   orderId: "0xfe9f545ed33253d24046db903c42c247fb35c817da1f1e13f2d8813abdd2d535",
  //   type: "LIMIT"
  // })
  //
  // console.dir(await ex.cancelOrder(cancelOrders), { depth: 4 })
  //

  // const pos = await ex.getAllPositions("0x92B54cA40F1d7aca2E9c140176fabC1f7D7B387A", undefined)
  // console.log(JSON.stringify(pos))

  // const jsonString =
  //   '{"result":[{"marketId":"0x70d95587d40A2caf56bd97485aB3Eec10Bee6336:GMXV2:42161","posId":"0x92B54cA40F1d7aca2E9c140176fabC1f7D7B387A:0x70d95587d40A2caf56bd97485aB3Eec10Bee6336:0x82aF49447D8a07e3bd95BD0d56f35241523fBab1:false","size":{"amount":{"format":"fixed128x30","_value":"200.0"},"isTokenAmount":false},"margin":{"amount":{"format":"fixed128x18","_value":"0.02"},"isTokenAmount":true},"accessibleMargin":{"amount":{"format":"fixed128x30","_value":"27.82649023574546454396817625"},"isTokenAmount":false},"avgEntryPrice":{"format":"fixed128x30","_value":"1893.129105673218"},"cumulativeFunding":{"format":"fixed128x30","_value":"0.0"},"unrealizedPnl":{"format":"fixed128x30","_value":"-0.4445639431713292602"},"liquidationPrice":{"format":"fixed128x30","_value":"2308.8442646265"},"leverage":{"format":"fixed128x4","_value":"5.2872"},"direction":"SHORT","collateral":{"symbol":"WETH","name":"WETH","decimals":18,"address":{"42161":"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"},"priceDecimals":12},"indexToken":{"symbol":"ETH","name":"ETH","decimals":18,"address":{"42161":"0x0000000000000000000000000000000000000000"},"priceDecimals":12},"protocolId":"GMXV2"}],"maxItemsCount":1}'
  // const pos = JSON.parse(jsonString).result as PositionInfo[]
  //
  // pos[0].margin = { amount: FixedNumber.fromString('0.02', 'fixed128x18'), isTokenAmount: true }
  // pos[0].size = { amount: FixedNumber.fromString('200', 'fixed128x30'), isTokenAmount: false }

  // const out = await ex.closePosition(pos, [{
  //   closeSize: { amount: FixedNumber.fromString('100', 'fixed128x30'), isTokenAmount: false },
  //   type: 'TAKE_PROFIT',
  //   triggerData: undefined,
  //   outputCollateral: tokens.WETH
  // }])
  // console.dir(out, { depth: 4 })

  // const out = await ex.updatePositionMargin(pos, [
  //   {
  //     collateral: tokens.ETH,
  //     isDeposit: false,
  //     margin: { amount: FixedNumber.fromString('0.007', 'fixed128x18'), isTokenAmount: true }
  //   }
  // ])
  // console.dir(out, { depth: 4 })
}

async function testGetAllOrders() {
  const res = await ex.getAllOrders('0x2f88a09ed4174750a464576FE49E586F90A34820', undefined)
  // console.dir({ res: res.result[0] }, { depth: 4 })
  res.result.forEach((o) => {
    console.dir({ o }, { depth: 3 })
  })
}

async function testGetAllOrdersForPosition() {
  const positions = (await ex.getAllPositions('0x2f88a09ed4174750a464576FE49E586F90A34820', undefined)).result
  const res = await ex.getAllOrdersForPosition('0x2f88a09ed4174750a464576FE49E586F90A34820', positions, undefined)
  console.dir({ res: res }, { depth: 4 })
}

async function test() {
  await increasePosition()
}

test()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })