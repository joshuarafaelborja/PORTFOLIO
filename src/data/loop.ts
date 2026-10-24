// All copy and image paths for the Loop case study draft (src/pages/work/loop.astro).
// Source: Figma "loop casestudy" frame (node 807:17)
// https://www.figma.com/design/2nYhgPKrVIuNd9J4G02Mae/ai-app?node-id=807-17
//
// Copy is the Figma text verbatim (not yet edited). Images:
// - Imported files (src/assets/work/loop/) are 2x Figma exports, resized by astro:assets.
// - An empty string renders a dashed "Screenshot: <placeholder>" box at the final
//   aspect ratio. To add a real screenshot, put the file in public/images/work/loop/
//   and set src to its path, e.g. "/images/work/loop/cta-first.png".

import type { TabItem } from "../components/TabSwitcher.astro";
import type { FlipState } from "../components/FlipToggle.astro";
import type { Step } from "../components/StepCard.astro";
import heroImage from "../assets/work/loop/hero.png";
import landingPage from "../assets/work/loop/landing-page.png";
import brandCard from "../assets/work/loop/brand-card.png";

export const page = {
	title: "Loop",
};

// TODO: the hero isn't final in Figma (807:26 still holds a Coach screenshot).
// Rendered as-is; replace with the Loop hero when it's ready.
export const hero = {
	src: heroImage.src,
	alt: "Loop case study hero",
};

// TODO: the Deliverables entry isn't final in Figma (855:30). Rendered as-is.
export const meta = [
	{ label: "Timeline", value: "May 2025 - Jun 2025" },
	{ label: "Role", value: "Product Designer" },
	{ label: "Tools", value: "Figma, Magic Patterns" },
	{ label: "Deliverables", value: "Brand Identity, Landing Page, B2B Onboarding Flow" },
];

export const outcome = {
	eyebrow: "Outcome",
	heading: "A landing page and B2B flow built from a blank slate",
	image: { src: landingPage, alt: "Loop landing page with the “Try A Loop” header button and a single “Get started” button" },
	body: "Loop is a Brighton e-bike startup. When we started, they had no brand, no website, and no way for an organization to start renting. Between May and June 2025, our three-person design team built all three. I owned the landing page and the B2B onboarding flow, and I gave input on the color scheme and fonts.",
};

export const context = {
	eyebrow: "Context",
	heading: "A brand built on partnership, not transactions",
	body: "Loop partners with cities and organizations to make cycling more accessible. At first, they were only looking to rent bikes to companies. They had no brand to carry that mission, so our team built one around a relationship-first approach: clear communication, flexible design, and a tone that speaks with people, not at them. We were three designers: our project lead, our brand lead, and me. I focused on the landing page and the onboarding flow.",
};

export const problem = {
	eyebrow: "Problem",
	heading: "No brand, no site, no way to convert organizations",
	pills: [
		{ heading: "#1 NO BRAND", body: "Loop had no brand assets or digital presence to build from." },
		{ heading: "#2 NO B2B FLOW", body: "No clear path from learning about Loop to picking a plan and booking a call" },
		{ heading: "#3 LITTLE DIRECTION", body: "Loop gave us a list of competitors and its research but little feedback after" },
	],
};

// Only tab 1 exists in Figma (992:224); tabs 2 and 3 use the brief's copy.
export const solution = {
	eyebrow: "Solution",
	heading: "Solutions at a glance",
	tabs: [
		{
			id: "landing-page",
			label: "Landing page",
			tag: "Solution 01",
			heading: "Buttons that say what Loop does",
			body: "The header button now reads “Try A Loop”. One “Get Started” button replaced a page that split visitors into businesses and solo riders before they understood the product.",
		},
		{
			id: "onboarding-flow",
			label: "Onboarding flow",
			tag: "Solution 02",
			heading: "Five steps to a booked call",
			body: "Company info, rental budget, subscription length, bike type, and plan selection, then a final screen to confirm and book. By the time someone books, Loop already knows what they want.",
			stat: "5",
			statLabel: "steps to book a call",
		},
		{
			id: "brand-system",
			label: "Brand system",
			tag: "Solution 03",
			heading: "A brand built on partnership",
			body: "Our brand lead had the final say. I gave input on the color scheme and font selection. The wordmark is built on Tilt Neon, with Anton for headlines and Poppins for text.",
			stat: "3",
			statLabel: "wordmark versions",
		},
	] satisfies TabItem[],
};

// Step titles are from the brief, not Figma (Figma only has "Company Info").
// Field text for steps 2-5 and the final line are placeholder copy.
const stepTitles = ["Company info", "Rental budget", "Subscription length", "Bike type", "Plan selection", "Confirm and book"];

export const mockSteps: Step[] = [
	{ title: stepTitles[0], field: { kind: "input", text: "Company Name" } },
	{ title: stepTitles[1], field: { kind: "select", text: "Rental Budget" } },
	{ title: stepTitles[2], field: { kind: "select", text: "Subscription Length" } },
	{ title: stepTitles[3], field: { kind: "select", text: "Bike Type" } },
	{ title: stepTitles[4], field: { kind: "select", text: "Plan" } },
	{ title: stepTitles[5], field: { kind: "confirm", text: "Confirm your choices and book a call with Loop." } },
];

const stepShots = ["step-1", "step-2", "step-3", "step-4", "step-5", "step-final"];

export const screenshotSteps: Step[] = stepTitles.map((title, i) => ({
	title,
	image: { src: "", alt: `Onboarding flow screen: ${title}`, placeholder: stepShots[i] },
}));

export const brand = {
	eyebrow: "Design Decision",
	heading: "The brand system",
	body: "Our brand lead had the final say on the brand system. I gave input on the color scheme and font selection. The wordmark is built on Tilt Neon, chosen for its rounded curves and friendly feel, which nod to movement and cycling. The palette starts with Royale and softens it with Powder, warm enough to feel approachable to commuters and distinct enough to stand out against competitors.",
	pill: "Brand in use: B2b onboarding",
	card: {
		src: brandCard,
		alt: "Loop brand components: the “loop” wordmark in Tilt Neon, Anton and Poppins type samples, and the palette Royale, Powder, Citrus, Energy and Dahlia",
	},
	note: "*Brand Components from Loops Style Guide",
};

export const ctas = {
	eyebrow: "Design Decision",
	heading: "Fixing the landing page’s CTAs",
	bullets: [
		"Tried: our first header button was generic, with no connection to the product.",
		"Fix: I changed it to “Try A Loop”, tying the action directly to renting a bike.",
		"Tried: our first page split visitors into two audiences, businesses and solo riders, before they understood the product.",
		"Fix: I simplified it to a single “Get Started” button. The page builds interest first and sorts audiences later.",
	],
	toggle: [
		{
			id: "tried",
			label: "Tried",
			image: { src: "", alt: "First version of the landing page header and buttons", width: 896, height: 392, placeholder: "cta-first" },
			body: "Our first header button was generic, with no connection to the product. Our first page split visitors into two audiences, businesses and solo riders, before they understood the product.",
		},
		{
			id: "fix",
			label: "Fix",
			image: { src: "", alt: "Final landing page with the “Try A Loop” and “Get Started” buttons", width: 896, height: 392, placeholder: "cta-final" },
			body: "I changed it to “Try A Loop”, tying the action directly to renting a bike. I simplified it to a single “Get Started” button. The page builds interest first and sorts audiences later.",
		},
	] satisfies [FlipState, FlipState],
};

export const onboarding = {
	eyebrow: "Design Decision",
	heading: "Rebuilding the B2B onboarding flow",
	bullets: [
		"Tried: our first flow had no visual progress indicators, too many options per screen, and no connection to Loop’s brand.",
		"What I noticed: competitors made renting a bike a long process. Loop’s goal was simpler: get a call booked.",
		"Fix: I broke the flow into five numbered steps, one topic each: company info, rental budget, subscription length, bike type, and plan selection (“Step 1 of 5”). A final screen confirms the choices and books the call. I applied Loop’s brand system to every screen. By the time someone books, Loop already knows what they want, so the call can start with specifics instead of general questions.",
	],
};

export const delivered = {
	eyebrow: "Outcome",
	heading: "What we delivered",
	body: "We delivered a brand system, a landing page, and a B2B onboarding flow for a company that had none of them. With limited feedback, I trusted my own judgment and let Loop’s research and our competitor analysis lead.",
};

export const reflection = {
	eyebrow: "Reflection",
	heading: "Looking back",
	bullets: [
		"Scope: Loop was only looking at companies at first. We wanted to leave room for individual renters too, but time pushed us to design for companies only. I learned to scope around what I can actually ship in the time I have.",
		"Designing from the goal: Loop wanted a booked call. Starting there made it easier to decide what stayed in the flow and what didn’t.",
	],
	body: "Loop started with no brand, no site, and no path for an organization to get in touch. We left them with all three. My part was the landing page and the onboarding flow: clearer buttons, five steps, and a call that starts with specifics, plus input on color and type. The biggest thing I took from it: scope around what I can ship, and start from what the business actually wants.",
};
