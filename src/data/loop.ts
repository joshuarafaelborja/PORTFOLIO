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
import type { Step } from "../components/StepCard.astro";
import type { CallBriefData } from "../components/CallBrief.astro";
import type { OnboardingCopy } from "../components/OnboardingFlow.astro";
import landingScroll from "../assets/work/loop/2026-10-28-loop-landing-scroll-cropped.mp4?url";
import landingScrollPoster from "../assets/work/loop/2026-10-28-loop-landing-scroll-cropped-poster.png";
import brandCard from "../assets/work/loop/brand-card.png";
import wordmarkVersions from "../assets/work/loop/wordmark-versions.svg";
import headerBefore from "../assets/work/loop/cta-header-before.png";
import headerAfter from "../assets/work/loop/cta-header-after.png";
import heroBefore from "../assets/work/loop/cta-hero-before.png";
import heroAfter from "../assets/work/loop/cta-hero-after.png";

export const page = {
	title: "Loop",
};

// TODO: real Loop hero still to come. Empty src renders a dashed "Screenshot: hero"
// box at the hero's size (the Figma hero, 807:26, is a Coach screenshot).
export const hero = {
	src: "",
	alt: "Loop case study hero",
};

export const meta = [
	{ label: "Timeline", value: "May 2025 - Jun 2025" },
	{ label: "Role", value: "Product Designer" },
	{ label: "Tools", value: "Figma, Magic Patterns" },
	{ label: "Deliverables", value: "Landing Page, B2B Onboarding Flow" },
];

export const outcome = {
	eyebrow: "Outcome",
	heading: "A landing page and B2B flow built from a blank slate",
	// Screen recording, 1434 x 1000, 12.9s, no audio. Poster is its first frame.
	video: {
		src: landingScroll,
		poster: landingScrollPoster,
		label: "Scroll through the redesigned Loop landing page, from the header and Get started button down to the footer",
		play: "Play",
		pause: "Pause",
	},
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
			body: "The header button now reads “Try A Loop”. One “Get started” button replaced two buttons, “Organizations” and “Employers”, so visitors didn’t have to choose before they understood the product.",
		},
		{
			id: "onboarding-flow",
			label: "Onboarding flow",
			tag: "Solution 02",
			heading: "Five steps to a booked call",
			body: "After a short company info screen, five numbered steps: company size, budget, subscription length, bike type, and tier level. A final screen confirms the choices and books the call. By the time someone books, Loop already knows what they want.",
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
const stepTitles = ["Company info", "Budget", "Subscription length", "Bike type", "Tier level", "Confirm and book"];

export const mockSteps: Step[] = [
	{ title: stepTitles[0], field: { kind: "input", text: "Company Name" } },
	{ title: stepTitles[1], field: { kind: "select", text: "Budget" } },
	{ title: stepTitles[2], field: { kind: "select", text: "Subscription Length" } },
	{ title: stepTitles[3], field: { kind: "select", text: "Bike Type" } },
	{ title: stepTitles[4], field: { kind: "select", text: "Tier" } },
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
	wordmarks: {
		src: wordmarkVersions,
		alt: "Loop wordmark in three versions: primary, monochrome, and reversed for dark backgrounds.",
	},
	card: {
		src: brandCard,
		alt: "Loop brand components: the “loop” wordmark in Tilt Neon, Anton and Poppins type samples, and the palette Royale, Powder, Citrus, Energy and Dahlia",
	},
	note: "Brand assets from Loop’s style guide, by our brand lead.",
};

// "Smaller fixes": each bullet is followed by a Before/After pair (Figma 1025:342,
// crops exported at 2x with 8px trimmed from each edge to drop the rounded corners).
export const ctas = {
	eyebrow: "Smaller fixes",
	heading: "Fixing the landing page’s CTAs",
	beforeLabel: "Before",
	afterLabel: "After",
	fixes: [
		{
			lead: "Header button:",
			body: "“Plan” was generic, so I changed it to “Try A Loop”, tying the action directly to renting a bike.",
			before: { src: headerBefore, alt: "Before: header button reading Plan" },
			after: { src: headerAfter, alt: "After: header button reading Try A Loop" },
		},
		{
			lead: "Hero buttons:",
			body: "two buttons, “Organizations” and “Employers”, asked visitors to choose before they understood the product. I replaced them with one “Get started” button, which is less confusing.",
			before: { src: heroBefore, alt: "Before: two hero buttons, Organizations and Employers" },
			after: { src: heroAfter, alt: "After: one Get started button" },
		},
	],
};

export const onboarding = {
	eyebrow: "Design Decision",
	heading: "Rebuilding the B2B onboarding flow",
	bullets: [
		"Tried: our first flow had no visual progress indicators, too many options per screen, and no connection to Loop’s brand.",
		"What I noticed: competitors made renting a bike a long process. Loop’s goal was simpler: get a call booked.",
		"Fix: I broke the flow into five numbered steps, one question each: company size, budget, subscription length, bike type, and tier level, after a short company info screen. A progress bar and step counter show where you are. A final screen confirms the choices and books the call. I applied Loop’s brand system to every screen. By the time someone books, Loop already knows what they want, so the call can start with specifics instead of general questions.",
	],
};

// Working onboarding demo in "Rebuilding the B2B onboarding flow" (OnboardingFlow).
// Copy is verbatim from the Figma frames (1025:141, 167, 182, 299, 197, 245, 276).
// The plan card shows the visitor's answers, falling back to `value` until they answer.
export const onboardingFlow = {
	label: "Onboarding flow demo",
	hint: "Use the left and right arrow keys to move between screens.",
	close: "Close & save",
	intro: {
		heading: "Tell us about your company",
		fields: [
			{ id: "company-name", label: "Company Name", placeholder: "Type Here..." },
			{ id: "company-contact", label: "Company Contact", placeholder: "Type Here..." },
		],
		blobText: "Now, let’s build your plan",
		button: "Continue",
	},
	steps: [
		{ kind: "input", key: "size", heading: "What is your company size?", placeholder: "Type Here..." },
		{ kind: "input", key: "budget", heading: "What is your budget?", placeholder: "Type Here..." },
		{
			kind: "choice",
			key: "subscription",
			variant: "plain",
			heading: "How long do you want to subscribe?",
			options: [{ value: "30 days" }, { value: "90 days" }, { value: "1 year" }, { value: "2 years" }],
		},
		{
			kind: "choice",
			key: "bike",
			variant: "bike",
			heading: "What bike are you renting?",
			options: [
				{ value: "Electric", icon: "electric" },
				{ value: "Manual", icon: "manual" },
				{ value: "Mix", icon: "mix" },
			],
		},
		{
			kind: "choice",
			key: "tier",
			variant: "tier",
			heading: "Select your tier level",
			options: [
				{ value: "Tier 1", body: "Basic/functional electric or manual Bike, helmet and lock. Theft insurance. 6 monthly maintenance checks" },
				{
					value: "Tier 2",
					body: ["Robust electric or manual bike.", "Quality helmet and highly secure lock. Theft and injury insurance and maintenance"],
				},
				{ value: "Tier 3", body: "Top of the range electric or manual bike. Benefits of Tier 2 GPS tracking, analytics and Corporate branding." },
			],
		},
	],
	final: {
		heading: "Last step, finalize and book",
		planHeading: "Your plan",
		plan: [
			{ label: "Company Size", key: "size", value: "50-100" },
			{ label: "Budget", key: "budget", value: "$10,000 - 20,000" },
			{ label: "Subscription:", key: "subscription", value: "2 years" },
			{ label: "Bike type:", key: "bike", value: "Electric" },
			{ label: "", key: "tier", value: "Tier 1" },
		],
		schedule: "Schedule a call",
		home: "Go back home",
		status: "Demo only, no call was booked.",
	},
	controls: { back: "Back", next: "Next" },
} satisfies OnboardingCopy;

export const delivered = {
	eyebrow: "Outcome",
	heading: "What we delivered",
	body: "We delivered a brand system, a landing page, and a B2B onboarding flow for a company that had none of them. With limited feedback, I trusted my own judgment and let Loop’s research and our competitor analysis lead.",
};

// "What I'd do today" (between "What we delivered" and "Looking back").
// Each bullet renders its visual underneath: an image slot or the CallBrief card.
// The revisited image is a placeholder until the file is ready (see note at top).
export const rebuild = {
	eyebrow: "If I rebuilt it",
	heading: "What I’d do today",
	intro: "We built this in four weeks, and I’m happy with it for that window. Two things I’d do now:",
	accessibility: {
		lead: "Fix accessibility first.",
		body: "I’d run a contrast and text size pass: a visible “Close & save”, a progress bar you can actually see, and 16px minimum text.",
		image: { src: "", alt: "Onboarding flow revisited with higher contrast and 16px minimum text", placeholder: "revisited" },
	},
	ai: {
		lead: "Use AI to brief the call.",
		body: "I’d turn a company’s answers into a short summary for Loop’s team, so the call starts with specifics.",
	},
	callBrief: {
		pill: "Concept for today",
		answersHeading: "Their answers",
		answers: [
			{ label: "Company size", value: "50-100" },
			{ label: "Budget", value: "$10,000 - 20,000" },
			{ label: "Subscription", value: "2 years" },
			{ label: "Bike type", value: "Electric" },
			{ label: "Tier", value: "Tier 1" },
		],
		summary: {
			heading: "AI summary",
			body: "A 50 to 100 person company wants electric bikes on a two-year subscription at Tier 1, with a $10,000 to $20,000 budget. They picked the basic tier, so ask what they need from maintenance and insurance.",
		},
		suggestion: {
			heading: "AI suggestion",
			body: "How many bikes do you want to start with, and where will riders use them?",
		},
	} satisfies CallBriefData,
};

export const reflection = {
	eyebrow: "Reflection",
	heading: "Looking back",
	bullets: [
		"Scope: Loop was only looking at companies at first. We wanted to leave room for individual renters too, but time pushed us to design for companies only. I learned to scope around what I can actually ship in the time I have.",
		// TODO: add what the research found Loop's users needed
		{
			lead: "Matching the flow to the brand:",
			body: "I restyled the onboarding flow to match Loop’s website: the wordmark in the header, mostly one question per screen, a progress bar, and cards with the brand’s offset shadows. Accessibility was part of Loop’s identity.",
		},
	],
	body: "Loop started with no brand, no site, and no path for an organization to get in touch. We left them with all three. My part was the landing page and the onboarding flow: clearer buttons, five steps, and a call that starts with specifics, plus input on color and type. The biggest thing I took from it: scope around what I can ship, and start from what the business actually wants.",
};
