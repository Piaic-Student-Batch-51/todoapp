// import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
  return NextResponse.json({ message: "You called this api" });
};
