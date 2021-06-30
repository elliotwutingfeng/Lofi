import * as Tone from 'tone';

export enum Instrument {
  /** Salamander grand piano */
  Piano = 'piano',
  /** Lower-fidelity piano */
  Piano2 = 'piano2',
  BassGuitar = 'guitar-bass',
  ElectricGuitar = 'guitar-electric',
  Bass = 'bass'
}

const BASE_URL = './samples/instruments';
export const getInstrumentSampler = (instrument: Instrument) => {
  switch (instrument) {
    case Instrument.Piano: {
      return new Tone.Sampler({
        urls: {
          A2: 'A2.mp3',
          A3: 'A3.mp3',
          A4: 'A4.mp3',
          A5: 'A5.mp3',
          A6: 'A6.mp3',
          A7: 'A7.mp3',
          C2: 'C2.mp3',
          C3: 'C3.mp3',
          C4: 'C4.mp3',
          C5: 'C5.mp3',
          C6: 'C6.mp3',
          C7: 'C7.mp3',
          C8: 'C8.mp3',
          'D#2': 'Ds2.mp3',
          'D#3': 'Ds3.mp3',
          'D#4': 'Ds4.mp3',
          'D#5': 'Ds5.mp3',
          'D#6': 'Ds6.mp3',
          'D#7': 'Ds7.mp3',
          'F#2': 'Fs2.mp3',
          'F#3': 'Fs3.mp3',
          'F#4': 'Fs4.mp3',
          'F#5': 'Fs5.mp3',
          'F#6': 'Fs6.mp3',
          'F#7': 'Fs7.mp3'
        },
        baseUrl: `${BASE_URL}/piano/`,
        volume: 3
      });
    }

    case Instrument.Piano2: {
      return new Tone.Sampler({
        urls: {
          A4: 'A3.mp3',
          A7: 'A6.mp3',
          C3: 'C2.mp3',
          C6: 'C5.mp3',
          'D#4': 'Ds3.mp3',
          'D#7': 'Ds6.mp3',
          'F#3': 'Fs2.mp3',
          'F#6': 'Fs5.mp3',
          A5: 'A4.mp3',
          C4: 'C3.mp3',
          C7: 'C6.mp3',
          'D#5': 'Ds4.mp3',
          'F#4': 'Fs3.mp3',
          'F#7': 'Fs6.mp3',
          A3: 'A2.mp3',
          A6: 'A5.mp3',
          C5: 'C4.mp3',
          C8: 'C8.mp3',
          'D#3': 'Ds2.mp3',
          'D#6': 'Ds5.mp3',
          'F#5': 'Fs4.mp3'
        },
        baseUrl: `${BASE_URL}/piano2/`,
        volume: -8
      });
    }

    case Instrument.ElectricGuitar: {
      return new Tone.Sampler({
        urls: {
          A2: 'A2.mp3',
          A3: 'A3.mp3',
          A4: 'A4.mp3',
          A5: 'A5.mp3',
          C3: 'C3.mp3',
          C4: 'C4.mp3',
          C5: 'C5.mp3',
          C6: 'C6.mp3',
          'C#2': 'Cs2.mp3',
          'D#3': 'Ds3.mp3',
          'D#4': 'Ds4.mp3',
          'D#5': 'Ds5.mp3',
          E2: 'E2.mp3',
          'F#2': 'Fs2.mp3',
          'F#3': 'Fs3.mp3',
          'F#4': 'Fs4.mp3',
          'F#5': 'Fs5.mp3'
        },
        baseUrl: `${BASE_URL}/guitar-electric/`,
        volume: -10
      });
    }

    case Instrument.BassGuitar: {
      return new Tone.Sampler({
        urls: {
          E1: 'E.mp3',
          A1: 'A.mp3',
          C2: 'C.mp3'
        },
        baseUrl: `${BASE_URL}/guitar-bass/`,
        volume: 0
      });
    }

    case Instrument.Bass: {
      return new Tone.Sampler({
        urls: {
          C1: 'C.mp3',
          'D#1': 'Ds.mp3',
          E1: 'E.mp3',
          F1: 'F.mp3',
          G1: 'G.mp3'
        },
        baseUrl: `${BASE_URL}/bass/`,
        volume: 0
      });
    }

    default:
      throw new Error('Invalid instrument specified');
  }
};

export const getInstrumentFilters = (instrument: Instrument) => {
  switch (instrument) {
    case Instrument.Piano: {
      return [
        new Tone.Filter({
          type: 'lowpass',
          frequency: 3600,
          Q: 0.5
        }),
        new Tone.Filter({
          type: 'highpass',
          frequency: 700,
          Q: 0.5
        })
      ];
    }

    case Instrument.Piano2: {
      return [];
    }

    case Instrument.ElectricGuitar: {
      return [
        new Tone.Filter({
          type: 'highpass',
          frequency: 350,
          Q: 0.5
        })];
    }

    case Instrument.BassGuitar: {
      return [
        new Tone.Filter({
          type: 'highpass',
          frequency: 300,
          Q: 0.5
        })
      ];
    }

    case Instrument.Bass: {
      return [];
    }

    default:
      throw new Error('Invalid instrument specified');
  }
};
