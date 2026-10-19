# Bee the Light Massage — promo video brief (6 scenes: 5 + end-card)

Machine-readable twin: `D:/Hermes_Core/workspace/beethelight_site/promo/video/storyboard.json`
(schema = `D:/Hermes_Core/Teams/Marketing/video/test_storyboards/wwe_test.json`, validated with
`make_promo_video.py --dry-run`). Output lands at `promo/video/bee_16x9.mp4` (+ `bee_9x16.mp4`),
which is exactly the `src` the landing page already references. Poster `promo/video/bee_16x9.jpg` exists now.

**Tone:** calm, warm, unhurried — wellness, not hype. Slow push-ins, soft fades, no fast cuts.
**Voice:** `en-US-JennyNeural` (edge-tts; listed by `edge-tts --list-voices` on 2026-10-17 as
"Friendly, Considerate, Comfort"). Alternate: `en-US-AvaNeural` ("Caring, Pleasant").
**Music:** owner's own track only, mixed under VO at -18 dB; nothing bundled.
**Copy rules:** relief / restorative / ease-tension language only; no outcome claims; prices only from
`D:/Hermes_Core/Teams/Marketing/ops/offer_truth.json`.

| # | Real photo (absolute path, verified on disk) | Headline (<=6 words) | Sub (<=10 words) | VO line (<=14 words, spoken) | Dur |
|---|---|---|---|---|---|
| 1 | `D:/Hermes_Core/workspace/beethelight_site/static/images/home-sanctuary.jpg` | Massage in your own home | Pueblo, Pueblo West and Colorado Springs | Bee the Light Massage brings the massage table to your living room. | 4.0 s |
| 2 | `D:/Hermes_Core/workspace/beethelight_site/static/images/treatment-details.jpg` | Table and fresh linens included | Your therapist sets up where you are comfortable | Your therapist arrives with the table and fresh linens, and sets up. | 4.0 s |
| 3 | `D:/Hermes_Core/workspace/beethelight_site/static/images/hot_stones.jpg` | Hot stones on request | Complimentary warm basalt stones with your session | Warm basalt hot stones are complimentary on request. | 4.0 s |
| 4 | `D:/Hermes_Core/workspace/beethelight_site/static/images/organic_botanicals.jpg` | Ease tension, unhurried | 60 min $115 · 90 min $160 | Sixty minutes is one hundred fifteen dollars. Ninety minutes is one sixty. | 4.5 s |
| 5 | `D:/Hermes_Core/workspace/beethelight_site/static/images/hero_sanctuary.jpg` | Licensed, insured, woman-owned | Colorado Springs 60 min $140, travel included | Colorado-licensed, ABMP-insured, and proudly woman-owned. | 4.0 s |
| 6 (end-card) | over scene 5 image | Book your session | beethelightmassage.com | Book at beethelightmassage.com. Call or text to find your time. | 3.0 s |

## Source for every on-screen claim
- In-home, table/linens/hot stones: `D:/Hermes_Core/Teams/Bee_Light_Massage/Workspace/POSTING_KIT.md` ("table, fresh linens, hot stones included"); site `index.html` ("Complimentary hot stones on request").
- Areas: site `index.html` service-area links (Pueblo, Pueblo West, Cañon City, Fountain, Colorado Springs).
- $115 / $160 / $140 (Springs, travel included): `offer_truth.json` advertised_prices_usd.
- Colorado-licensed, ABMP-insured, woman-owned: site `index.html` hero badges + footer.

## Photo credits
The five photos are the site's own library (`static/images/`); no attribution is recorded on disk, so
`credit` is empty in the storyboard. Owner: confirm usage rights before paid placement.

## Commands (render is an owner/next-wave step — not run by this builder)
```
python D:/Hermes_Core/Teams/Marketing/video/make_promo_video.py --storyboard D:/Hermes_Core/workspace/beethelight_site/promo/video/storyboard.json --out D:/Hermes_Core/workspace/beethelight_site/promo/video --dry-run
python D:/Hermes_Core/Teams/Marketing/video/make_promo_video.py --storyboard D:/Hermes_Core/workspace/beethelight_site/promo/video/storyboard.json --out D:/Hermes_Core/workspace/beethelight_site/promo/video --aspects 16x9,9x16
python D:/Hermes_Core/Teams/Marketing/video/make_promo_video.py --qc D:/Hermes_Core/workspace/beethelight_site/promo/video
```
