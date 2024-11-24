import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Clear the token cookie
    const response = NextResponse.json({ message: "Logout successful" });
    response.cookies.set("token", "", {
      httpOnly: true,
      path: "/",
      expires: new Date(0), // Expire immediately
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "An error occurred during logout" },
      { status: 500 }
    );
  }
}
