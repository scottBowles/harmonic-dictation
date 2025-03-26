export type NoteLetter = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B';
export type Octave = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type NoteStr =
	| `${NoteLetter}${Octave}`
	| `${NoteLetter}#${Octave}`
	| `${NoteLetter}b${Octave}`;

export const notes: NoteStr[] = [
	'C1',
	'C#1',
	'D1',
	'D#1',
	'E1',
	'F1',
	'F#1',
	'G1',
	'G#1',
	'A1',
	'A#1',
	'B1',
	'C2',
	'C#2',
	'D2',
	'D#2',
	'E2',
	'F2',
	'F#2',
	'G2',
	'G#2',
	'A2',
	'A#2',
	'B2',
	'C3',
	'C#3',
	'D3',
	'D#3',
	'E3',
	'F3',
	'F#3',
	'G3',
	'G#3',
	'A3',
	'A#3',
	'B3',
	'C4',
	'C#4',
	'D4',
	'D#4',
	'E4',
	'F4',
	'F#4',
	'G4',
	'G#4',
	'A4',
	'A#4',
	'B4',
	'C5',
	'C#5',
	'D5',
	'D#5',
	'E5',
	'F5',
	'F#5',
	'G5',
	'G#5',
	'A5',
	'A#5',
	'B5',
	'C6',
	'C#6',
	'D6',
	'D#6',
	'E6',
	'F6',
	'F#6',
	'G6',
	'G#6',
	'A6',
	'A#6',
	'B6',
	'C7',
	'C#7',
	'D7',
	'D#7',
	'E7',
	'F7',
	'F#7',
	'G7',
	'G#7',
	'A7',
	'A#7',
	'B7'
];

export const enharmonics = {
	Db: 'C#',
	Eb: 'D#',
	Fb: 'E',
	Gb: 'F#',
	Ab: 'G#',
	Bb: 'A#',
	Cb: 'B',
	'E#': 'F',
	'B#': 'C'
};

export type ScaleDegree =
	| '1'
	| 'b2'
	| '2'
	| '#2'
	| 'b3'
	| '3'
	| 'b4'
	| '#3'
	| '4'
	| '#4'
	| 'b5'
	| '5'
	| '#5'
	| 'b6'
	| '6'
	| '#6'
	| 'b7'
	| '7'
	| '8'
	| 'b9'
	| '9'
	| '#9'
	| 'b10'
	| '10'
	| 'b11'
	| '#10'
	| '11'
	| '#11'
	| 'b12'
	| '12'
	| '#12'
	| 'b13'
	| '13';

export const notesInChromaticScale = [
	'C',
	'C#',
	'D',
	'D#',
	'E',
	'F',
	'F#',
	'G',
	'G#',
	'A',
	'A#',
	'B'
];

export const scaleDegreeToSemitones = {
	'1': 0,
	b2: 1,
	'2': 2,
	'#2': 3,
	b3: 3,
	'3': 4,
	b4: 4,
	'#3': 5,
	'4': 5,
	'#4': 6,
	b5: 6,
	'5': 7,
	'#5': 8,
	b6: 8,
	'6': 9,
	b7: 10,
	'#6': 10,
	'7': 11,
	'8': 12,
	b9: 13,
	'9': 14,
	'#9': 15,
	b10: 15,
	'10': 16,
	b11: 16,
	'#10': 17,
	'11': 17,
	'#11': 18,
	b12: 18,
	'12': 19,
	'#12': 20,
	b13: 20,
	'13': 21
} satisfies Record<ScaleDegree, number>;
