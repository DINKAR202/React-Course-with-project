import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { bcryptjs } from 'bcryptjs';

export async function GET(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Check if email and password are provided

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
        return NextResponse.json({error: error.message},
            { status: 500 })
    }


  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
