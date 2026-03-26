# Design System Strategy: The Sonic Ether

## 1. Overview & Creative North Star
**Creative North Star: "The Sonic Ether"**
This design system rejects the "flat web" in favor of a volumetric, atmospheric experience. We are not just building a website; we are visualizing the invisible power of AI voice technology. The aesthetic moves away from rigid, boxy layouts toward a fluid, "floating" architecture. By utilizing heavy glassmorphism, intentional asymmetry, and deep tonal layering, we create a space that feels both high-tech and human-centric. This system is designed to evoke the precision of a recording studio mixed with the infinite scale of an enterprise AI cloud.

---

## 2. Colors: The Luminescent Void
Our palette is anchored in a deep, nocturnal base (`background: #0b0e14`) to provide maximum contrast for our vibrant "energy" tokens.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning. Structural separation must be achieved through:
- **Tonal Shifts:** Moving from `surface` to `surface_container_low`.
- **Atmospheric Glows:** Using `primary_dim` or `secondary_dim` as soft, 40-60px blurs behind content.
- **Negative Space:** Leveraging the Spacing Scale (e.g., `16` or `20`) to define boundaries.

### Surface Hierarchy & Nesting
Treat the interface as a physical stack of semi-transparent materials.
- **Base Layer:** `surface` (#0b0e14)
- **Primary Containers:** `surface_container` (#161a21) with a `DEFAULT` (1rem) radius.
- **Floating Elements:** `surface_container_high` (#1c2028) or `highest` (#22262f) to indicate interactive priority.
- **The Glass Rule:** For premium floating cards, use `surface_variant` at 40% opacity with a `backdrop-filter: blur(20px)`. This creates a "frosted glass" effect that allows background glows to bleed through, ensuring the UI feels integrated, not pasted.

### Signature Textures
Main CTAs must use a linear gradient: `primary` (#8ff5ff) to `primary_container` (#00eefc) at a 135-degree angle. This provides a "liquid light" feel that flat colors cannot replicate.

---

## 3. Typography: Editorial Authority
We pair **Space Grotesk** (Display/Headline) with **Manrope** (Body/Title) to balance high-tech innovation with enterprise reliability.

- **Display (Space Grotesk):** Set with tight tracking (-2%) and generous leading. These are your "vocal hooks"—bold, confident, and architectural.
- **Body (Manrope):** Chosen for its exceptional multilingual legibility. In enterprise contexts (contracts, technical specs), Manrope provides the "trust" factor.
- **Hierarchy as Identity:** Use `display-lg` for hero statements, but immediately follow with `body-lg` in `on_surface_variant` to create an editorial, high-contrast look that feels like a premium magazine.

---

## 4. Elevation & Depth: The Z-Axis
In this design system, depth is a functional tool, not just a decoration.

### The Layering Principle
Avoid "drop shadows" on every box. Instead, "stack" your surface tokens.
*   **Example:** A `surface_container_lowest` card sitting on a `surface_container_low` section creates a natural, recessed "dock" effect without a single shadow pixel.

### Ambient Shadows & Glows
When an element must "float" (e.g., a modal or floating navigation):
- **Shadows:** Use a blur of 40px-80px with 6% opacity. The shadow color should be a tint of `secondary` (#ac89ff) rather than black, creating an "ambient light" effect.
- **Ghost Border Fallback:** If a container requires definition against a complex background, use the `outline_variant` (#45484f) at **15% opacity**. High-contrast borders are forbidden.

---

## 5. Components: Fluid Primitives

### Buttons (The Kinetic Pulse)
- **Primary:** Gradient (`primary` to `primary_container`), `full` (pill) radius, with a subtle outer glow using `primary_dim`.
- **Secondary:** Transparent background with a "Ghost Border" (`outline_variant` at 20%) and `title-sm` typography.
- **Interaction:** On hover, buttons should scale 1.02x and increase backdrop-blur intensity.

### Floating Cards
- **Construction:** Use `surface_container_low` with a `lg` (2rem) corner radius. 
- **Rule:** Forbid the use of divider lines. Separate header and body text using a `spacing-6` (2rem) vertical gap. Use a subtle background shift (`surface_container_high`) for the footer area of the card.

### Input Fields (The Receptacle)
- **Style:** "Soft Inset" look. Use `surface_container_lowest` with a 1px `outline_variant` at 10% opacity. 
- **Focus State:** Transition the border to `primary` and add a 4px outer glow of `primary_dim` at 20% opacity.

### Chips (The Sonic Tags)
- Use `secondary_container` for the background with `on_secondary_container` for text. Radius must always be `full`. These should feel like tactile "beads" on the screen.

---

## 6. Do’s and Don’ts

### Do:
- **Use Asymmetry:** Place a floating 3D asset (like a stylized waveform or chrome sphere) overlapping the edge of a `surface_container` to break the grid.
- **Prioritize Breathing Room:** Use `spacing-20` (7rem) between major sections to let the "Glassmorphism" breathe.
- **Tint your Neutrals:** Ensure your "dark" colors have a hint of blue or purple to maintain the "High-Tech" energy.

### Don't:
- **No Pure Black/White:** Never use #000000 or #FFFFFF. Use `surface_container_lowest` and `on_surface`.
- **No Hard Edges:** Avoid `none` or `sm` roundedness scales unless for very small utility icons.
- **No Dividers:** If you feel the urge to draw a line between items in a list, use a `surface_container` background shift instead.
- **No Flat Buttons:** A button without a subtle gradient or a depth-based hover state is a failure of the system's "3D" promise.