import { chordDatabase, type DifficultyLevel } from './chordDatabase';
import { buildChord } from './chordUtils';

type Progression = string[];

export const generateProgression = (tonic: string, difficulty: DifficultyLevel): Progression => {
	const chords = chordDatabase[difficulty];
	const progressionLength = Math.floor(Math.random() * 4) + 3; // Random progression length between 3-6 chords
	const progression: Progression = [];

	for (let i = 0; i < progressionLength; i++) {
		const randomChord = chords[Math.floor(Math.random() * chords.length)];
		const chordNotes = buildChord(tonic, randomChord.scaleDegree, randomChord.intervals);
		progression.push(chordNotes.join(', ')); // Join notes for display (e.g., "C, E, G")
	}

	return progression;
};
