<script lang="ts">
	import * as Tone from 'tone';

	let chordProgression = [
		['C4', 'E4', 'G4'], // I (C major)
		['G4', 'B4', 'D5'], // V (G major)
		['C4', 'E4', 'G4'] // I (C major)
	];

	let sampler = new Tone.Sampler({
		urls: {
			C1: 'C1.mp3',
			'D#1': 'Ds1.mp3',
			'F#1': 'Fs1.mp3',
			A1: 'A1.mp3',
			C2: 'C2.mp3',
			'D#2': 'Ds2.mp3',
			'F#2': 'Fs2.mp3',
			A2: 'A2.mp3',
			C3: 'C3.mp3',
			'D#3': 'Ds3.mp3',
			'F#3': 'Fs3.mp3',
			A3: 'A3.mp3',
			C4: 'C4.mp3',
			'D#4': 'Ds4.mp3',
			'F#4': 'Fs4.mp3',
			A4: 'A4.mp3',
			C5: 'C5.mp3',
			'D#5': 'Ds5.mp3',
			'F#5': 'Fs5.mp3',
			A5: 'A5.mp3',
			C6: 'C6.mp3',
			'D#6': 'Ds6.mp3',
			'F#6': 'Fs6.mp3',
			A6: 'A6.mp3',
			C7: 'C7.mp3',
			'D#7': 'Ds7.mp3',
			'F#7': 'Fs7.mp3',
			A7: 'A7.mp3'
		},
		release: 1,
		baseUrl: 'https://tonejs.github.io/audio/salamander/'
	}).toDestination();

	Tone.loaded().then(() => console.log('Sampler loaded!'));

	async function playProgression() {
		await Tone.start();

		let time = Tone.now();
		chordProgression.forEach((chord, index) => {
			sampler.triggerAttackRelease(chord, 1, time + index * 1.5);
		});
	}
</script>

<button on:click={playProgression} class="rounded bg-blue-500 p-2 text-white">
	Play I-V-I Progression
</button>
