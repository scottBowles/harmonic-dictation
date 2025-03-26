const notesInChromaticScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const getNoteInKey = (tonic: string, degree: number): string => {
	const tonicIndex = notesInChromaticScale.indexOf(tonic);
	const targetIndex = (tonicIndex + degree - 1) % 12; // Scale degree 1 is tonic, 2 is supertonic, etc.
	return notesInChromaticScale[targetIndex];
};

export const buildChord = (tonic: string, scaleDegree: number, intervals: string[]): string[] => {
	const chordNotes = intervals.map((interval) => {
		const degree = scaleDegree + intervals.indexOf(interval); // Calculate the scale degree for each interval
		return getNoteInKey(tonic, degree); // Get the actual note based on the tonic and scale degree
	});

	return chordNotes;
};
