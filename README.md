# GITAM University — Static Front-End Clone

A static recreation of the GITAM Deemed to be University homepage, built as a coursework
project to study a large production front-end (responsive layout, Swiper sliders, sticky
multi-level navigation, scroll animations).

**This is not the official GITAM site and is not affiliated with GITAM.**
The official site is <https://www.gitam.edu/>.

## Running it

It is plain static HTML — no build step, no server-side code.

```bash
# any static server works, e.g.
ruby -run -e httpd . -p 8000
# then open http://localhost:8000
```

Opening `index.html` directly from disk also works, except for the three social-media
embeds (Facebook / Instagram / LinkedIn), which browsers block over `file://`.

## Deploying to GitHub Pages

1. Push this folder to a repository.
2. **Settings → Pages → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. It works from a project subpath (`user.github.io/repo/`) because every asset path is
   relative — there are no root-relative (`/themes/...`) URLs left.

`.nojekyll` is included so GitHub Pages serves the directory as-is rather than running it
through Jekyll.

## Layout

```
index.html                  the page
assets/js/drupal-shim.js    stand-ins for the two Drupal globals app.js closes over
themes/gitam/assets/        theme CSS, JS, fonts, icons  (mirrored)
sites/default/files/        content images               (mirrored)
core/                       form-widget icons the base CSS references
```

## How this differs from the live site

The original is a Drupal application. Everything requiring a server was removed or
neutralised so the page is safe to host publicly:

| Removed | Why |
| --- | --- |
| Google Tag Manager `GTM-W337MSK` | would send visitor events to GITAM's real analytics |
| NoPaperForms tracker `npf_c=6362` | would inject fake enquiries into their admissions pipeline |
| WisePops, Cloudflare beacon | third-party tracking tied to GITAM's accounts |
| reCAPTCHA site key, site-verification meta | credentials belonging to GITAM |
| `drupalSettings` JSON, aggregated Drupal JS | stale CSRF/session tokens; needs a Drupal backend |
| Hidden form build tokens | expired, and there is nothing to POST to |

| Changed | Why |
| --- | --- |
| All ~200 links → `href="#"` | one-page build; also stops clicks reaching real login/payment portals |
| Both forms → non-submitting | their Drupal AJAX endpoints no longer exist |
| Hero `<video>` → still banner image | the source MP4 is hotlink-blocked (HTTP 403) and could not be mirrored |
| 38 lazy-loaded images → direct `src` | drops the lazysizes dependency; native `loading="lazy"` instead |
| Added `robots: noindex, nofollow` | keeps the clone out of search results |

Some HTML defects in the original were also fixed: two `<div>` tags written where `</div>`
was meant, two unclosed `<li>` elements, a duplicated `alt` attribute, a duplicate element
`id`, and an invalid `telePhone` key in the schema.org block.

## Credit

All branding, imagery, and text belong to GITAM (Gandhi Institute of Technology and
Management). Reproduced here for educational purposes only.
