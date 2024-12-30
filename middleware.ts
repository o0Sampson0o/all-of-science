import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const fullPath = request.nextUrl.href; // Full URL including query parameters
	const response = NextResponse.next();
	response.headers.set("x-full-path", fullPath); // Pass full path as a header
	return response;
}
