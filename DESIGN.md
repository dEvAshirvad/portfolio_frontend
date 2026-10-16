---
name: dEvAshirvad
description: A field index of shipped work. Near-black sheet, one mono face, dashed guides, the artifact large.
colors:
  field-black: "hsl(0 0% 3.9%)"
  index-white: "hsl(0 0% 98%)"
  graphite-note: "hsl(0 0% 63.9%)"
  guide: "hsl(0 0% 14.9%)"
  signal-green: "#4ade80"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "6rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "3.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  title:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "0.025em"
  body:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "0.025em"
rounded:
  none: "0"
  full: "9999px"
spacing:
  row: "1.25rem"
  contact: "1rem"
  gutter: "1.25rem"
  sheet: "5rem"
  frame: "2rem"
components:
  ruled-row:
    backgroundColor: "{colors.field-black}"
    textColor: "{colors.index-white}"
    rounded: "{rounded.none}"
    padding: "1.25rem 0"
  dashed-row:
    backgroundColor: "{colors.field-black}"
    textColor: "{colors.index-white}"
    rounded: "{rounded.none}"
    padding: "1rem 0"
  wordmark:
    backgroundColor: "{colors.field-black}"
    textColor: "{colors.index-white}"
    rounded: "{rounded.none}"
    padding: "0"
    height: "5rem"
  availability:
    textColor: "{colors.index-white}"
    rounded: "{rounded.full}"
    padding: "0"
    size: "0.5rem"
---

# Design System: dEvAshirvad

## Overview

**Creative North Star: "The Field Index"**

The Field Index is a survey sheet for a person: numbered columns, dashed guides, and one green status mark. The page is near-black, set entirely in JetBrains Mono, and read like a record. Display names sit large and offset. Secondary copy is graphite. The interface stays quiet so the work, when it appears, is the only saturated thing on the page.

Density is sparse. A five-column grid holds the desktop. Two dashed guides hold the phone. Section titles occupy the right columns. Indexes occupy a column to their left. Lists are full-width rules. Space above a block is larger than the space inside it.

**Key Characteristics:**

- Near-black ground, near-white ink, one green status dot
- JetBrains Mono at every size, from 12px labels to 96px names
- Five-column sheet on desktop, two dashed guides on small screens
- Square corners, dashed or solid rules, no shadows
- Client color lives only inside project images

## Colors

The sheet is achromatic. Color is a status, or it is trapped inside a picture of the work.

### Primary

- **Index White** (`hsl(0 0% 98%)`): names, titles, row labels, the wordmark, and the skewed tick. This is the ink.

### Secondary

- **Signal Green** (`#4ade80`): the 8px availability dot beside "Available for Work". It is the only chromatic mark in the chrome.

### Neutral

- **Field Black** (`hsl(0 0% 3.9%)`): the page ground. Computed `rgb(10, 10, 10)`. Header and footer sit on the same ground, so they read as part of the sheet rather than as bars.
- **Graphite Note** (`hsl(0 0% 63.9%)`): secondary copy. The founder line, the about paragraph, the thin partnering caption, and years on a row. Computed `rgb(163, 163, 163)`.
- **Guide** (`hsl(0 0% 14.9%)`): column rules, solid list borders, and the homepage section index (`/ 1`). Computed `rgb(38, 38, 38)`. It is a hairline against Field Black, not a text color for anything a visitor must read.

### Named Rules

**The Plate Rule.** Client palettes stay inside the project image. The sheet around that image remains Field Black, Index White, Graphite Note, and Signal Green.

**The Status Rule.** Signal Green appears once, as the availability dot. It is not a link color, a heading color, or a fill behind type.

## Typography

**Display Font:** JetBrains Mono (ui-monospace, monospace)
**Body Font:** JetBrains Mono (ui-monospace, monospace)
**Label/Mono Font:** JetBrains Mono (ui-monospace, monospace)

**Character:** One face does every job. The voice is a measured record: wide mono, even color, no italic display, no second family for "personality." Urbanist is imported in the layout and unused. Leave it unused.

### Hierarchy

- **Display** (400, 6rem, line-height 1): the name lockup, ASHIRVAD / SATAPATHY, two lines, offset across the grid. Desktop only. The block is `hidden` below the `md` breakpoint.
- **Headline** (400, 3.75rem desktop / 1.875rem below `md`, line-height 1): section titles in columns 4–5. Contact's second line is uppercase at this desktop size and 2.25rem below `md`.
- **Title** (500, 1.875rem, line-height 1.375, letter-spacing 0.025em): the founder line, in Graphite Note. On small screens a 1rem greeting sits above it.
- **Body** (400, 1rem, line-height 1.5): rows, FAQ answers, footer links. About copy steps up to 1.25rem desktop / 1.125rem below `md`, still Graphite Note. Measure stays inside three columns on desktop.
- **Label** (400, 0.75rem, letter-spacing 0.025em): header place and time, availability, the partnering caption (weight 100), and the uppercase footer.

### Named Rules

**The One Face Rule.** JetBrains Mono is the only voice. Do not introduce a second family for display, labels, or numerals.

## Layout

The sheet is a centered container, max 1400px, with 2rem of frame padding. Desktop is five columns with a 1.25rem gutter. Below `md` (768px) the content stacks to one column, and the fixed guide layer drops to two dashed columns.

Section rhythm: a quiet index in column 2 (`/ 1` at 1.875rem desktop, 1.25rem below `md`), the title in columns 4–5, then 5rem before the block (`md:mt-20`, 2.5rem below `md`). Sections close with 5rem of padding (`pb-20`). The header and footer are fixed, each 5rem tall. Page content keeps clear of both: the hero is `h-screen` with `py-20`, and the page ends with `pb-32`.

The homepage name is right-weighted: ASHIRVAD starts at column 4, SATAPATHY starts at column 2. The partnering caption sits in column 4. The founder line spans the first three columns. That offset is the layout signature. New pages keep the index in an early column and the title in the late columns.

## Elevation & Depth

The sheet is flat. Nothing casts a shadow. Depth is the difference between Field Black, a Guide rule, and a plate of the work sitting on top of the grid. The guide layer is `position: fixed`, `z-index` behind the page, dashed, at 30% opacity.

### Named Rules

**The Flat Sheet Rule.** Surfaces do not lift. Hover, focus, and open states change a rule or a type color. They do not add shadow, blur, or a second surface.

## Shapes

Corners are square. The only radius in the chrome is the availability dot, a full circle at 8px. A skewed tick, 4px by 16px, `skewX(-25deg)`, sits before the wordmark and reads as a slash.

Rules are 1px. Work rows and the FAQ use a solid bottom border in Guide. Contact rows and skill items use a dashed bottom border. The outer work list has solid top and bottom borders. Column guides are dashed verticals.

`--radius: 0.5rem` exists for unused shadcn pieces. The portfolio chrome does not use it. Do not round new portfolio surfaces with that token.

## Components

Portfolio chrome is type, rules, and one dot. There is no button style on the page. Do not invent a filled button for a new surface.

### Navigation

- **Header:** fixed top, 5rem, Field Black, container row. Left: skewed tick plus "dEvAshirvad" at body size, then "Bhubaneswar, India" and a live clock at label size (hidden below `md`). Right: Signal Green dot plus "Available for Work" at label size.
- **Footer:** fixed bottom, 5rem. Left: Linkedin, Instagram, Github, uppercase, label size, 1.25rem gaps. Right: "Copyright 2024", uppercase, label size.
- **Hover / Focus:** header and footer links have no dedicated hover color in the current page. New links use a dashed Index White focus ring, 1px, offset 4px, and a hover that shifts ink to Graphite Note.

### Ruled row

- **Shape:** square, full width of the five columns, 1.25rem vertical padding, 1px solid Guide border on the bottom.
- **Content:** title at the left in Index White, year at the right, truncated if needed, 1.25rem gap.
- **Use:** the featured-work index.

### Dashed row

- **Shape:** square, 1rem vertical padding, 1px dashed Guide border on the bottom, label left, value right.
- **Use:** contact links, skill items, and any new fact or outbound link that should feel like the contact block.
- **Skill groups:** a category name at title size on the left, a small `/ 01` on the right, then a two-column dashed list.

### Section index

- **Shape:** `/` plus a number, Guide colored, sitting in column 2. The title beside it is the headline, in columns 4–5, Index White.
- **Use:** every homepage section. The number is the order of the page, not decoration.

### Accordion

- **Shape:** a ruled row that opens. Trigger padding 1.25rem, answer held in the first four columns.
- **Icon:** a 16px chevron in Graphite Note, rotating 180 degrees when open, 200ms.
- **Use:** FAQ only.

### Plates

- **Shape:** square corners, full width of the content grid, intrinsic ratio. The supplied project marks are 1500×844.
- **Ground:** the image brings its own color. Do not recolor it, matte it in a device frame, or bleed its palette into the sheet.

## Do's and Don'ts

### Do:

- **Do** keep new pages on Field Black, in JetBrains Mono, inside the five-column sheet.
- **Do** put the index or return in an early column and the title in the late columns.
- **Do** separate blocks with 5rem above the content and rules between items.
- **Do** set secondary sentences in Graphite Note. Reserve Guide for lines and the existing homepage index.
- **Do** show a project as a full-width plate, then its facts as dashed rows.

### Don't:

- **Don't** restyle the homepage to match a case study. The homepage is the source.
- **Don't** bring client green, orange, cream, or gray out of the plate and into the chrome.
- **Don't** use cards, pills, rounded shadcn buttons, or shadows on portfolio surfaces.
- **Don't** promote Urbanist or add a second typeface.
- **Don't** use Signal Green for anything except the availability dot.
- **Don't** set readable copy in Guide. It disappears on Field Black.
