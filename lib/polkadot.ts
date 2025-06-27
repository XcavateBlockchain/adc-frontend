import { ApiPromise, HttpProvider, WsProvider } from "@polkadot/api";
// import type { ApiOptions } from "@polkadot/api/types";
import { cryptoWaitReady } from "@polkadot/util-crypto";

/**
 * `Init Polkadot js`
 * Helper to initialize polkadot.js API with provided rpc.
 */
export async function initPolkadot(rpcUrl: string): Promise<ApiPromise> {
	// Wait for crypto to be ready to prevent initialization issues
	await cryptoWaitReady();

	const provider = rpcUrl.startsWith("http")
		? new HttpProvider(rpcUrl)
		: new WsProvider(rpcUrl);
	const api = await ApiPromise.create({
		provider,
	});

	return api;
}
