import type { MiddlewaresConfig } from "@medusajs/medusa";
import { urlencoded } from "body-parser";
import cors from "cors";

export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher: "/custom*",
      middlewares: [
        cors({
          origin: "*",
          credentials: true,
        }),
      ],
    },
    {
      matcher: "/store/*",
      middlewares: [urlencoded({ extended: true })],
    },
  ],
};
