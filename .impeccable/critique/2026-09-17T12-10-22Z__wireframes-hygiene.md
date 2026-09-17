---
target: "hygiene group: company, careers, insights, legal"
total_score: 26
p0_count: 0
p1_count: 1
timestamp: 2026-09-17T12-10-22Z
slug: wireframes-hygiene
---
# Critique: Hygiene group (company · careers · insights · legal)

Scope: wireframes/company.html, careers.html, insights.html, legal.html. Minimalism is a decision (jtbd.md §8.3), not scored as a defect. Service chrome (.wf-tree, .wf-states, .wf-doc) excluded.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No active nav item (known #11); on legal all three footer legal links land on the same Privacy page |
| 2 | Match System / Real World | 3 | Honest TBD slots; insights items carry no date though the page promises "when a dated requirement lands" |
| 3 | User Control and Freedom | 3 | 5x "Read the announcement" link back to insights.html itself (silent self-loop) |
| 4 | Consistency and Standards | 2 | Mirrored rail zigzag on legal; lede size applied to closing paragraphs; zero gaps h3/dl, trio/p, stacked buttons |
| 5 | Error Prevention | 3 | n/a mostly; self-links are the one trap |
| 6 | Recognition Rather Than Recall | 3 | Badge + H1 locate the page; legal badge repeats H1 |
| 7 | Flexibility and Efficiency | 2 | No skip link; 5 identical link names on insights |
| 8 | Aesthetic and Minimalist Design | 3 | Restraint reads as intent; hero 587px tall is heavy for hygiene |
| 9 | Error Recovery | 3 | No error surfaces by design |
| 10 | Help and Documentation | 2 | Legal has no in-page contact route, "Contact" section is TBD with no fallback link |
| **Total** | | **26/40** | **Acceptable** |

## Anti-Patterns Verdict
LLM: not AI slop. Claim-register headings, TBD honesty and the rail grid are specific to this system; no gradient, no eyebrow scaffolding, no card-grid reflex. Weakest tell: the "statement. dim rebuttal." H1 cadence repeats on company, careers, insights (voice canon, noted not flagged).
Detector CLI: 4 warnings em-dash-overuse (company 9, careers 6, insights 6, legal 10) — false positive: dashes are in <title>, wf-doc and the canonical [TBD — ...] marker (voice.md).
Browser (injected into hidden iframes, own tab): company 11, careers 10, insights 11, legal 8. all-caps-body x2 (wf-tree), tiny-text (wf-states, wf-doc), line-length (wf-doc) = service chrome, false positives. Real: line-length ~104ch on footer .foot-legal (all pages); skipped-heading h2 -> h4 on legal (footer column titles are h4).

## Priority Issues
- [P1] legal.html at >=980px: mirrored rail (kit.css .stack > section:nth-of-type(even)) puts even sections' body LEFT of their H2 in a wide column and the H2 at far right; five one-line sections form a zigzag, reading order visual != DOM. Fix: non-mirrored rail for document pages (existing .stack--route modifier) or a rule decision.
- [P2] kit.css `.stack > section > .body:first-of-type` gives lede size (20px) to closing paragraphs when a section starts with dl/div: company "The empty rows above...", careers "Open positions...", insights closing line — larger than the hero lede (16px). Hierarchy inverts.
- [P2] Zero vertical gap: company h3 directly under dl.values (0px); careers p after .trio (0px); careers buttons 4px apart on desktop, 0px stacked on mobile (p:has(>.btn) flex gap is scoped to specific contexts, not .section--band).
- [P2] insights: 5 identical "Read the announcement" links, all href=insights.html (self); news items show category in .chip--date and no date. Link names non-unique for AT.
- [P2] legal: badge "Legal · Privacy Policy" duplicates H1; Terms/Privacy/Cookies all -> legal.html so two of three labels lie; no route to contact while Contact section is TBD.

## Minor
- .screen-head badge stretches to 1083px (grid item stretch) — reads as a bar, not a tag.
- Badge icons load from api.iconify.design at runtime; first headless render showed company badge without icon.
- No skip link before header.
- Footer column titles h4 after page h2/h3: heading level skip.
- company footer "About" and "Leadership team" both -> company.html (known in microcopy.md).
- Careers trio columns 201px wide at 1440 with 16px text: 156px measure, ~20 chars/line (inside known #8 band context).

## Questions
- Should document-type pages (legal) opt out of the mirrored rail?
- Is a news item without a date still a "deadline" item?
