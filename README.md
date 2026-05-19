# IGPL Scroll — International Garudas

An Awwwards-level dark-mode scrollytelling site for **International Garudas Private Limited (IGPL)**.
The hero is a sticky HTML5 canvas driven by a 32-frame image sequence — scroll progress maps
1:1 to frame index, with four narrative text overlays at 0% / 30% / 60% / 90%.

## Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (dark, custom keyframes)
- **Framer Motion** (`useScroll`, `useTransform`, `useMotionValueEvent`)
- **HTML5 Canvas** (DPR-aware, contain-fit)

## Design influence
Component patterns inspired by [Skiper UI](https://skiper-ui.com/) — image-reveal, marquee strip,
and Devouring-Details-style microcopy.

## Frames
32 JPG frames live in `public/frames/ezgif-frame-001.jpg`..`ezgif-frame-032.jpg`.
All are preloaded behind a loader before scroll animation begins.

## Run

```bash
cd igpl-scroll
npm install
npm run dev
```

Open http://localhost:3000.

## Structure
```
igpl-scroll/
├── app/
│   ├── layout.tsx       # root layout, Inter, dark <body>
│   ├── globals.css      # Tailwind + gradient/shine/noise/vignette utilities
│   └── page.tsx         # assembles ScrollSequence + Marquee + Services + Industries + Footer
├── components/
│   ├── ScrollSequence.tsx   # ★ sticky canvas + 4 overlays + preloader
│   ├── Marquee.tsx          # infinite tag marquee
│   ├── Services.tsx         # 6-card bento services grid
│   ├── Industries.tsx       # divided list of verticals
│   └── Footer.tsx           # brand sign-off
└── public/frames/           # 32 sequence frames
```

## Overlay map
| Scroll | Overlay                                | Alignment |
|--------|----------------------------------------|-----------|
| 0%     | INTERNATIONAL GARUDAS — hero           | center    |
| 30%    | Custom Software, end-to-end            | left      |
| 60%    | Enterprise systems. Cloud-native.      | right     |
| 90%    | Build your software legacy. CTA buttons| center    |
