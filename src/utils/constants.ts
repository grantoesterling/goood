import * as dotenv from "dotenv"
dotenv.config()
export const AMAZON_LINK =
  "https://www.amazon.com/dp/B0BWNPGHT8?ref=myi_title_dp&th=1";
export const GRAPHQL_ENDPOINT = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-01/graphql/production/default`;
