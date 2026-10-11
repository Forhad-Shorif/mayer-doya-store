 import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from '@/lib/auth'
import { headers } from "next/headers";
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {

    // Get session from the request headers
const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
  const user = session?.user;
  console.log(user);

  // If user is not logged in, redirect to /signin
  if (!user) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }
}

export const config = {
  matcher: ['/profile','/details/:path'], // কোন কোন রুটে এই প্রটেকশন বা মিডলওয়্যার কাজ করবে তা এখানে বলে দিতে হবে
}