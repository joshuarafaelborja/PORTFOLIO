// Date lists for CalendarPicker.astro, shared by its server render (default lists)
// and its script (drill-down lists), so both produce identical rows.
//
// "Today" is pinned to Wed Jan 28 2026, not the real date. Weeks start on Monday,
// and nothing after the current week / month is listed.

export interface CalRow {
	/** Stable id for selection: "y:2025", "m:2025-11", "w:<monday ms>". */
	key: string;
	/** "This Week" / "This Month" / "This Year" on the current period's row. */
	current?: string;
	value: string;
	year: number;
	/** 0-11, on month and week rows (for weeks: the month that owns the week's Thursday). */
	month?: number;
	/** Monday of the week, UTC ms, on week rows. */
	weekStart?: number;
}

const SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LONG = [
	"January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December",
];
const DAY = 24 * 60 * 60 * 1000;

export const TODAY = Date.UTC(2026, 0, 28);
const mondayOf = (t: number) => t - ((new Date(t).getUTCDay() + 6) % 7) * DAY;
const CUR_WEEK = mondayOf(TODAY);
const CUR_YEAR = new Date(TODAY).getUTCFullYear();
const CUR_MONTH = new Date(TODAY).getUTCMonth();
const OLDEST_YEAR = CUR_YEAR - 9;

const weekRange = (start: number) => {
	const a = new Date(start);
	const b = new Date(start + 6 * DAY);
	const from = `${SHORT[a.getUTCMonth()]} ${a.getUTCDate()}`;
	const to = `${SHORT[b.getUTCMonth()]} ${b.getUTCDate()}`;
	return a.getUTCFullYear() === b.getUTCFullYear()
		? `${from} - ${to}, ${b.getUTCFullYear()}`
		: `${from}, ${a.getUTCFullYear()} - ${to}, ${b.getUTCFullYear()}`;
};

export const yearRow = (y: number): CalRow => ({
	key: `y:${y}`,
	current: y === CUR_YEAR ? "This Year" : undefined,
	value: String(y),
	year: y,
});

export const monthRow = (y: number, m: number): CalRow => ({
	key: `m:${y}-${m}`,
	current: y === CUR_YEAR && m === CUR_MONTH ? "This Month" : undefined,
	value: `${LONG[m]} ${y}`,
	year: y,
	month: m,
});

export const weekRow = (start: number): CalRow => {
	// A week belongs to the month of its Thursday (used when a week is picked from
	// the default list and its month / year have to be filled in).
	const thu = new Date(start + 3 * DAY);
	return {
		key: `w:${start}`,
		current: start === CUR_WEEK ? "This Week" : undefined,
		value: weekRange(start),
		year: thu.getUTCFullYear(),
		month: thu.getUTCMonth(),
		weekStart: start,
	};
};

/** Year tab: this year back to OLDEST_YEAR. */
export const years = (): CalRow[] =>
	Array.from({ length: CUR_YEAR - OLDEST_YEAR + 1 }, (_, i) => yearRow(CUR_YEAR - i));

/** Default Month tab (no year picked): this month and the 12 before it. */
export const defaultMonths = (): CalRow[] =>
	Array.from({ length: 13 }, (_, i) => {
		const d = new Date(Date.UTC(CUR_YEAR, CUR_MONTH - i, 1));
		return monthRow(d.getUTCFullYear(), d.getUTCMonth());
	});

/** Default Week tab (no month picked): this week and the 12 before it. */
export const defaultWeeks = (): CalRow[] =>
	Array.from({ length: 13 }, (_, i) => weekRow(CUR_WEEK - i * 7 * DAY));

/** Months of one year, newest first, stopping at the current month. */
export const monthsOf = (y: number): CalRow[] => {
	const last = y === CUR_YEAR ? CUR_MONTH : 11;
	return Array.from({ length: last + 1 }, (_, i) => monthRow(y, last - i));
};

/** Monday-start weeks overlapping a month, newest first, stopping at the current week. */
export const weeksOf = (y: number, m: number): CalRow[] => {
	const first = Date.UTC(y, m, 1);
	const lastDay = Date.UTC(y, m + 1, 0);
	const rows: CalRow[] = [];
	for (let start = mondayOf(lastDay); start + 6 * DAY >= first; start -= 7 * DAY)
		if (start <= CUR_WEEK) rows.push(weekRow(start));
	return rows;
};
