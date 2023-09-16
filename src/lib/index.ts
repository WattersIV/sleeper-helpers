import { GraphQLClient } from 'graphql-request';

// place files you want to import through the `$lib` alias in this folder.
class SleeperGraphQLClient {
	constructor() {
		if (SleeperGraphQLClient.instance == null) {
			SleeperGraphQLClient.instance = this;
			this.client = new GraphQLClient('https://api.sleeper.app/v1/graphql', {
				headers: {
					'Content-Type': 'application/json',
					Authorization:
						'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXIiOiI4MDYzMjI1NDQ5NzFlM2ZmZTA2NzdkZjgwOTYyZDI4OCIsImRpc3BsYXlfbmFtZSI6IldhdHRlcnNJViIsImV4cCI6MTcyMjU2MzM5MCwiaXNfYm90IjpudWxsLCJpc19tYXN0ZXIiOm51bGwsInJlYWxfbmFtZSI6bnVsbCwidXNlcl9pZCI6NTY4MTU0ODI0MTg5ODU3NzkyfQ.oYjHVBJYBGq_L0j8oLeJpd6eBzV2rszrdOAkWqhI-68'
				}
			});
		}
		return SleeperGraphQLClient.instance;
	}
	private static instance: SleeperGraphQLClient;
	// @ts-expect-error
	public client: GraphQLClient;
}

export const sleeperGraphQLClient = new SleeperGraphQLClient().client;
