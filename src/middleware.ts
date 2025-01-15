import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

export default clerkMiddleware((auth, req, next) => {
  const protectedRoutes = createRouteMatcher(['/dashboard/(.*)']);
  if (protectedRoutes(req)) auth().catch();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
