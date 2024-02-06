import { Request, Response } from "express";

function RouteNotFound(req: Request, res: Response) {
  return res.json({ msg: "Route not Found" });
}

export default RouteNotFound;
