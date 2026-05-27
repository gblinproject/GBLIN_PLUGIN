/**
 * plugin-gblin — ElizaOS plugin for GBLIN Protocol
 *
 * Exposes three Actions and one Provider that let any ElizaOS agent:
 *   • Park idle USDC into the GBLIN MEV-protected cbBTC/WETH basket (invest)
 *   • JIT-swap GBLIN back to USDC to pay x402 invoices in real-time (rescue)
 *   • Read treasury health to decide when to rebalance (health check)
 *
 * All on-chain calls go through the GBLIN x402 API on Base mainnet.
 * Payments to the API ($0.001–$0.005 USDC) use EIP-3009 transferWithAuthorization
 * signed by the agent's own wallet — no API keys, no centralised auth.
 *
 * Required env (via runtime.getSetting):
 *   EVM_PRIVATE_KEY       — 0x-prefixed 32-byte hex key (agent hot wallet)
 *
 * Optional env:
 *   GBLIN_BASE_URL        — override API host (default: https://gblin.digital)
 *   GBLIN_RPC_URL         — override Base mainnet RPC (default: publicnode)
 */
import { type Action, type Plugin, type Provider } from "@elizaos/core";
declare const checkTreasuryHealthAction: Action;
declare const investIdleUsdcAction: Action;
declare const rescueUsdcAction: Action;
declare const gblinTreasuryProvider: Provider;
export declare const gblinPlugin: Plugin;
export default gblinPlugin;
export { checkTreasuryHealthAction, investIdleUsdcAction, rescueUsdcAction, gblinTreasuryProvider, };
//# sourceMappingURL=index.d.ts.map