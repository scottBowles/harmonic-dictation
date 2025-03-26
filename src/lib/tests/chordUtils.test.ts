import { describe, expect, it } from 'vitest';
import { buildChord } from '../utils';

describe('buildChord', () => {
	it('should build a tonic chord correctly in the key of C', () => {
		expect(buildChord('C', '1', ['1', '3', '5'])).toEqual(['C3', 'E3', 'G3']);
	});

	it('should build a subdominant chord correctly in the key of C', () => {
		expect(buildChord('C', '4', ['1', '3', '5'])).toEqual(['F3', 'A3', 'C4']);
	});

	it('should build a dominant chord correctly in the key of C', () => {
		expect(buildChord('C', '5', ['1', '3', '5'])).toEqual(['G3', 'B3', 'D4']);
	});

	it('should build a tonic chord correctly in the key of G', () => {
		expect(buildChord('G', '1', ['1', '3', '5'])).toEqual(['G3', 'B3', 'D4']);
	});

	it('should build a tonic chord in the key of A based on A5', () => {
		expect(buildChord('A5', '1', ['1', '3', '5'])).toEqual(['A5', 'C#6', 'E6']);
	});
});
