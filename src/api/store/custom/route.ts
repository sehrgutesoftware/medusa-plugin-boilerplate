import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export const GET = async function (
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  res.sendStatus(200);
};
