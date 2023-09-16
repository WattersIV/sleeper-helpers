import type { PageLoad } from './$types';
// import { gql } from 'graphql-request';
// import { sleeperGraphQLClient } from '$lib';

export const load: PageLoad = async () => {
	// try {
	// const document = gql`
	// 	query get_league_detail {
	// 		league_rosters(league_id: "934328060843753472") {
	// 			owner_id
	// 		}

	// 		matchup_legs_2: matchup_legs(league_id: "934328060843753472", round: 2) {
	// 			starters
	// 			player_map
	// 			proj_points
	// 			starters_games
	// 		}
	// 	}
	// `;
	// const getLeagueDetail = await sleeperGraphQLClient.request(document);
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'User-Agent': 'insomnia/2023.5.8',
			Authorization:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXIiOiI4MDYzMjI1NDQ5NzFlM2ZmZTA2NzdkZjgwOTYyZDI4OCIsImRpc3BsYXlfbmFtZSI6IldhdHRlcnNJViIsImV4cCI6MTcyMjU2MzM5MCwiaXNfYm90IjpudWxsLCJpc19tYXN0ZXIiOm51bGwsInJlYWxfbmFtZSI6bnVsbCwidXNlcl9pZCI6NTY4MTU0ODI0MTg5ODU3NzkyfQ.oYjHVBJYBGq_L0j8oLeJpd6eBzV2rszrdOAkWqhI-68'
		},
		body: '{"query":"query get_league_detail {\n\tleague_rosters(league_id: "934328060843753472") {\n\t\towner_id\n\t}\n\n\tmatchup_legs_2: matchup_legs(league_id: "934328060843753472", round: 2) {\n\t\tstarters\n\t\tplayer_map\n\t\tproj_points\n\t\tstarters_games\n\t}\n}\n","operationName":"get_league_detail"}'
	};

	fetch('https://sleeper.com/graphql', options)
		.then((response) => console.log(response))
		.then((response) => console.log(response))
		.catch((err) => console.error(err));

	// } catch (error) {
	// 	console.log(error);
	// }
	return {
		a: 1
	};
};
