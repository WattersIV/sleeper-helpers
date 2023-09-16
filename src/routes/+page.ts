import type { PageLoad } from './$types';
import { gql } from 'graphql-request';
import { sleeperGraphQLClient } from '$lib';

export const load: PageLoad = async () => {
	try {
		const document = gql`
			query get_league_detail {
				league_rosters(league_id: "934328060843753472") {
					owner_id
				}

				matchup_legs_2: matchup_legs(league_id: "934328060843753472", round: 2) {
					starters
					player_map
					proj_points
					starters_games
				}
			}
		`;
		const getLeagueDetail = await sleeperGraphQLClient.request(document);
		console.log(getLeagueDetail);
	} catch (error) {
		console.log(error);
	}
	return {
		a: 1
	};
};
