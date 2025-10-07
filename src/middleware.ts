import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
    ...routing,
    localeCookie: {
        // Custom cookie name
        name: 'USER_LOCALE',
        // Expire in one year
        maxAge: Number(process.env.LOCALE_COOKIE_MAX_AGE) || 60 * 60 * 24 * 365,
    }
});

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
