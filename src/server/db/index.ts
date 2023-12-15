import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "@/env";
import * as schema from "./schema";

export const connection = new Client({
  url: env.DATABASE_URL,
  fetch: (url, init) => {
    if (init?.cache) {
      delete init.cache;
    }
    return fetch(url, init);
  },
}).connection();


export const db = drizzle(connection, { schema });
