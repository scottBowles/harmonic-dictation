import {
	enharmonics,
	notes,
	scaleDegreeToSemitones,
	type NoteLetter,
	type NoteStr,
	type Octave,
	type ScaleDegree
} from './constants';

/**
 * Returns the enharmonic equivalent of a note as sharps seem to be working
 * with Tone.js, though I'm not sure why. This may be unnecessary.
 */
const getEnharmonicIfNeeded = (note: NoteStr): NoteStr => {
	const firstTwoChars = note.slice(0, 2);
	if (firstTwoChars in enharmonics) {
		return (enharmonics[firstTwoChars as keyof typeof enharmonics] + note.slice(2)) as NoteStr;
	}
	return note;
};

export class Note {
	#noteStr: NoteStr;

	constructor(note: NoteStr) {
		this.#noteStr = note;
	}

	toString() {
		return this.#noteStr;
	}

	get index() {
		const indexableNote = getEnharmonicIfNeeded(this.#noteStr);
		return notes.indexOf(indexableNote);
	}

	static from(octave: Octave, note: `${NoteLetter}` | `${NoteLetter}#` | `${NoteLetter}b`) {
		return new Note(`${note}${octave}`);
	}

	static fromIndex(index: number) {
		if (index < 0 || index >= notes.length) {
			throw new Error('Invalid note index');
		}
		return new Note(notes[index]);
	}

	transpose(interval: ScaleDegree, direction: 'up' | 'down' = 'up') {
		const semitones = scaleDegreeToSemitones[interval];
		const currentIndex = this.index;
		const newIndex = direction === 'up' ? currentIndex + semitones : currentIndex - semitones;
		if (newIndex < 0 || newIndex >= notes.length) {
			throw new Error('Invalid note index');
		}
		return Note.fromIndex(newIndex);
	}
}

export const buildChord = (
	tonic: NoteStr | NoteLetter,
	chordRootDegree: ScaleDegree,
	intervals: ScaleDegree[]
): NoteStr[] => {
	if (tonic.length === 1) {
		tonic += '3';
	}
	const tone = new Note(tonic as NoteStr);
	const chordRoot = tone.transpose(chordRootDegree);
	const chordNotes = intervals.map((interval) => chordRoot.transpose(interval).toString());
	return chordNotes;
};

// Maybe I should use Tone.js's Frequency instead of Note? Might not be worth the trouble.
