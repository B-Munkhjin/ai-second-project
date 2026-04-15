// import { error } from "console";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {

//   try {
//     const response = await fetch("http://localhost:3000/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     });
//     const data = await response.json();
//     if (!response.ok) {
//       return error;
//     }
//     return NextResponse.json({});
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: "Server error" }, { status: 500 });
//   }
// }
