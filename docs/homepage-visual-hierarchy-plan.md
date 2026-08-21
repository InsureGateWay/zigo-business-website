# Homepage Visual Hierarchy Improvement Plan

## Objective

Create a clearer homepage journey for a launch-stage technology company, reduce competing visual signals, remove unsupported positioning, and guide visitors toward one primary conversion action.

## Recommendations and acceptance criteria

### 1. Standardize calls to action

- Use **Book a Consultation** as the primary conversion label.
- Use **Explore Our Services** only as a secondary action.
- Ensure homepage calls to action navigate to a real destination.

### 2. Strengthen section separation

- Alternate white, warm-neutral, and dark brand backgrounds.
- Vary section composition so consecutive sections do not repeat the same centered-heading/card-grid pattern.
- Preserve accessible contrast on every background.

### 3. Simplify the hero

- Keep the headline, supporting copy, and primary action as the dominant hierarchy.
- Move the four principles into a compact supporting strip below the main hero composition.
- Retain responsive icons and readable supporting text.

### 4. Show actual services in “What We Do”

- Replace generic benefit cards with concrete service categories.
- Provide concise descriptions and links to relevant service pages.
- Make the section answer what the company delivers within one scan.

### 5. Simplify industries

- Replace flip cards with accessible, always-visible cards.
- Show each industry’s relevant solution examples without requiring interaction.
- Remove the unsupported nine-country reach claim.

### 6. Remove repetition between principles and commitments

- Retain principles in the hero.
- Reframe the later section as a four-step delivery process: Discover, Design, Deliver, Improve.
- Use a visually distinct branded treatment.

### 7. Make the insights section honest and actionable

- Present the content as business challenges rather than published articles.
- Avoid UI cues that imply complete editorial articles when none exist.
- Route each challenge to the consultation path with accurate action copy.

## Implementation status

| Recommendation | Status | Verification |
| --- | --- | --- |
| Standardize calls to action | Complete | Primary actions use “Book a Consultation”; secondary service navigation uses “Explore Our Services”; links resolve to existing routes. |
| Strengthen section separation | Complete | Homepage alternates white, warm neutral, dark brand, and white sections with varied header alignment and composition. |
| Simplify the hero | Complete | Principles moved from the primary text column into a compact supporting strip; mobile retains a compact icon grid. |
| Show actual services | Complete | Six concrete service categories replace generic benefit cards and link to relevant service/product routes. |
| Simplify industries | Complete | Flip interaction removed; six always-visible cards expose descriptions and solution examples; geographic claim removed. |
| Introduce delivery process | Complete | Repetitive commitments replaced by Discover, Design, Deliver, and Improve on a distinct branded background. |
| Reframe insights | Complete | Editorial styling and article implication removed; content is presented as three business challenges with accurate consultation actions. |

## Gap analysis

### Closed gaps

- **Competing conversion language:** Homepage and navigation primary actions now consistently use “Book a Consultation.”
- **Weak section differentiation:** Background rhythm and composition now distinguish services, industries, process, and challenge content.
- **Overloaded hero:** Capability principles are visually subordinate to the headline, proposition, and main action.
- **Unclear offering:** Visitors can identify six actual service areas directly from the homepage.
- **Interaction-dependent industry content:** Industry information is visible without hover, flip, or tap state.
- **Repeated value propositions:** The later homepage section now explains delivery rather than repeating hero principles.
- **Misleading editorial cues:** Business challenges no longer appear to be published articles.
- **Unsupported homepage reach claim:** “Serving 9 countries” has been removed from the industries section.

### Remaining gaps and follow-up work

- **Live visual QA:** The production build passes, but desktop/mobile screenshot inspection could not be completed because the in-app rendered-browser connection was unavailable. A post-deployment visual pass at common breakpoints remains recommended.
- **Legacy claims outside the homepage:** The About page, chatbot, and some service-page examples still contain historical scale, geography, or named-client claims. These should be verified or rewritten in a separate content-integrity pass.
- **Newsletter behavior:** The footer subscription UI should be checked against a real mailing-list integration before it is promoted as functional.
- **Analytics:** CTA conversion events are not currently evidenced in the repository. Adding analytics would allow hierarchy decisions to be validated with real behavior.

## Verification

- `npm run build`: passed
- `git diff --check`: passed
- Deprecated homepage phrases and flip-card interaction labels: absent
- Primary homepage CTA destination: `/contact`
