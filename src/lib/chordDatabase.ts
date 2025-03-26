type ChordType =
	| 'major'
	| 'minor'
	| 'dominant'
	| 'seventh'
	| 'extended'
	| 'borrowed'
	| 'suspended'
	| 'diminished';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

interface Chord {
	name: string;
	type: ChordType;
	difficulty: DifficultyLevel;
	scaleDegree: number; // Scale degree (e.g., 1 for tonic, 5 for dominant)
	intervals: string[]; // Intervals relative to the root (e.g., "major third", "perfect fifth")
	function?: string; // Harmonic function (e.g., "tonic", "dominant")
}

export const chordDatabase: Record<DifficultyLevel, Chord[]> = {
	beginner: [
		// Major triads (relative to scale degree)
		{
			name: 'major',
			type: 'major',
			difficulty: 'beginner',
			scaleDegree: 1,
			intervals: ['root', 'major third', 'perfect fifth'],
			function: 'tonic'
		},
		{
			name: 'minor',
			type: 'minor',
			difficulty: 'beginner',
			scaleDegree: 2,
			intervals: ['root', 'minor third', 'perfect fifth'],
			function: 'supertonic'
		},
		{
			name: 'dominant',
			type: 'major',
			difficulty: 'beginner',
			scaleDegree: 5,
			intervals: ['root', 'major third', 'perfect fifth'],
			function: 'dominant'
		},
		{
			name: 'subdominant',
			type: 'major',
			difficulty: 'beginner',
			scaleDegree: 4,
			intervals: ['root', 'major third', 'perfect fifth'],
			function: 'subdominant'
		},
		{
			name: 'minor',
			type: 'minor',
			difficulty: 'beginner',
			scaleDegree: 6,
			intervals: ['root', 'minor third', 'perfect fifth'],
			function: 'submediant'
		}
	],
	intermediate: [
		// Seventh chords
		{
			name: 'maj7',
			type: 'seventh',
			difficulty: 'intermediate',
			scaleDegree: 1,
			intervals: ['root', 'major third', 'perfect fifth', 'major seventh'],
			function: 'tonic'
		},
		{
			name: 'dominant7',
			type: 'dominant',
			difficulty: 'intermediate',
			scaleDegree: 5,
			intervals: ['root', 'major third', 'perfect fifth', 'minor seventh'],
			function: 'dominant'
		},
		{
			name: 'min7',
			type: 'seventh',
			difficulty: 'intermediate',
			scaleDegree: 2,
			intervals: ['root', 'minor third', 'perfect fifth', 'minor seventh'],
			function: 'supertonic'
		}
	],
	advanced: [
		// Extended chords (e.g., 9th, 11th, 13th)
		{
			name: 'maj9',
			type: 'extended',
			difficulty: 'advanced',
			scaleDegree: 1,
			intervals: ['root', 'major third', 'perfect fifth', 'major seventh', 'major ninth'],
			function: 'tonic'
		},
		{
			name: 'dominant9',
			type: 'extended',
			difficulty: 'advanced',
			scaleDegree: 5,
			intervals: ['root', 'major third', 'perfect fifth', 'minor seventh', 'major ninth'],
			function: 'dominant'
		},
		{
			name: 'borrowed',
			type: 'borrowed',
			difficulty: 'advanced',
			scaleDegree: 7,
			intervals: ['root', 'minor third', 'perfect fifth'],
			function: 'borrowed'
		}
	]
};
