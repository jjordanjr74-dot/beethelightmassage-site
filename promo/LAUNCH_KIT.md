# Bee the Light Massage — Promo LAUNCH KIT

Package root: `D:/Hermes_Core/workspace/beethelight_site/promo/` (inside the GitHub Pages site repo,
CNAME `beethelightmassage.com`). Once pushed, the landing page lives at **https://beethelightmassage.com/promo/**.
Built 2026-10-17. Nothing here has been committed, pushed or published — that is the owner's step.

## 1. Package index
| File | What it is |
|---|---|
| `index.html` | Self-contained landing page (inline CSS + tiny inline reveal script, zero external requests) |
| `assets/hero.jpg` | Hero photo, re-encoded with PIL (1600x1000, under 300 KB) |
| `assets/og.png` | 1200x630 link-preview card (referenced by the page's og:image / twitter:image) |
| `assets/social_1080.png` | 1080x1080 feed graphic for Instagram / Facebook |
| `fonts/Lora-Variable.ttf` + `fonts/OFL.txt` | Self-hosted heading font (SIL Open Font License 1.1, from github.com/google/fonts) |
| `video/bee_16x9.jpg` | Video poster (1280x720, from `static/images/home-sanctuary.jpg`) |
| `video/BRIEF.md` | 6-scene video storyboard (5 scenes + end-card) |
| `video/storyboard.json` | Same storyboard in `make_promo_video.py` format (dry-run validated) |
| `video/bee_16x9.mp4` | **NOT YET RENDERED** — the page's `<video src>` points here; the render wave fills it |
| `LAUNCH_KIT.md` | This file |
| `_manifest.json` | Byte-verified file list + claim-to-source map |

Rates on the page (all from `D:/Hermes_Core/Teams/Marketing/ops/offer_truth.json`, each with a text-to-book link (sms:402-499-2936)
from `D:/Hermes_Core/Teams/Marketing/LIVE_LINKS.md`, each GET-verified HTTP 200 on 2026-10-17):
60 min $115 · Colorado Springs 60 min $140 (travel included) · 90 min $160 · 5-session pass $475 ·
booking deposit $40 · gift certificate $125.

## 2. Render the video (next wave, owner-approved)
```
python D:/Hermes_Core/Teams/Marketing/video/make_promo_video.py --storyboard D:/Hermes_Core/workspace/beethelight_site/promo/video/storyboard.json --out D:/Hermes_Core/workspace/beethelight_site/promo/video --aspects 16x9,9x16
python D:/Hermes_Core/Teams/Marketing/video/make_promo_video.py --qc D:/Hermes_Core/workspace/beethelight_site/promo/video
```
Expect `bee_16x9.mp4` (landing page + YouTube) and `bee_9x16.mp4` (Reels / TikTok / Shorts). QC must exit 0.

## 3. Deploy (quoted from the repo — DO NOT run without owner sign-off)
Remote (from `git remote -v`): `origin https://github.com/jjordanjr74-dot/beethelightmassage-site.git`, branch `main`.
```
cd D:/Hermes_Core/workspace/beethelight_site
python -m pytest D:/Hermes_Core/workspace/test_beethelight_site.py -q
git add promo/
git commit -m "promo: landing page, social graphics, video storyboard"
git push origin main
```
Then check: `curl -sI https://beethelightmassage.com/promo/` → 200, and paste the URL into a link-preview
debugger to confirm `og.png` shows. If the mp4 is not rendered yet, either render first or ship the page
knowing the Watch section shows the poster with an unplayable player until `video/bee_16x9.mp4` lands.

## 4. Video placement guide (calm wellness tone)
| Platform | File | Caption | Link |
|---|---|---|---|
| Instagram Reels | `bee_9x16.mp4` | "The table, fresh linens and hot stones come to you. In-home massage in Pueblo, Pueblo West and Colorado Springs. 60 min $115." | Link in bio → https://beethelightmassage.com/promo/ |
| TikTok | `bee_9x16.mp4` | "In-home massage, Pueblo to the Springs. Hot stones on request. Call or text 402-499-2936." | Bio link → https://beethelightmassage.com/promo/ |
| YouTube Shorts | `bee_9x16.mp4` | "Bee the Light Massage — in-home massage in Southern Colorado. 60 min $115 · 90 min $160." | Description → https://beethelightmassage.com/promo/ |
| Facebook page / Nextdoor | `bee_16x9.mp4` or `assets/social_1080.png` | "Woman-owned, ABMP-insured, in-home massage. Colorado Springs 60 min $140, travel included." | https://beethelightmassage.com/promo/ |
| Google Business Profile | `assets/social_1080.png` | Use a post from `Teams/Bee_Light_Massage/Workspace/marketing/GBP_POSTS.md` | Book button → https://beethelightmassage.com/promo/ |

Rules: soft music, no fast cuts, no before/after framing, no outcome promises; never post a checkout link
without the "confirm address and time first" line; never pay or reward for reviews.

## 5. Two-week posting cadence
| Day | Channel | Post |
|---|---|---|
| Mon wk1 | IG Reel + TikTok + Shorts | Video launch (9x16) |
| Tue wk1 | Facebook + Nextdoor | `social_1080.png` + intro post (SOCIAL.md no. 1) |
| Thu wk1 | GBP | Hot stones post (GBP_POSTS.md) |
| Sat wk1 | IG Story | Rates card: link to /promo/#rates |
| Mon wk2 | Facebook | Gift certificate $125 (link from the page) |
| Wed wk2 | IG Reel | Re-cut of video scene 3 (hot stones) |
| Fri wk2 | GBP + Nextdoor | Colorado Springs post: 60 min $140, travel included |
| Sun wk2 | All | Review the week: bookings by source (ask "where did you hear about us?") |

## 6. Staged vs live truth table (2026-10-17)
| Item | State | Evidence |
|---|---|---|
| beethelightmassage.com main site | LIVE | repo `main` @ 980289e; CNAME file |
| `promo/` directory | STAGED (untracked, `git status` shows `?? promo/`) | not pushed |
| Booking CTAs | text-to-book (sms) | 2026-10-18: one-off cs_live session links expired (Stripe page "This link is incomplete"); replaced to match live-site confirm-before-payment policy |
| `video/bee_16x9.mp4` | NOT RENDERED | storyboard dry-run VALIDATION OK only |
| `og.png` / `social_1080.png` | STAGED | PIL size check 1200x630 / 1080x1080 |
| Paying-customer count | not claimed anywhere | — |
