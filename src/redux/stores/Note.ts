export default class Note {
    key?: string
    octave?: number
    pitch?: number

    constructor() {

    }
}

export class NoteBuilder {
    private readonly note: Note;

    constructor() {
        this.note = new Note();
    }

    key(val: string): NoteBuilder {
        this.note.key = val;
        return this;
    }

    octave(val: number): NoteBuilder {
        this.note.octave = val;
        return this;
    }

    pitch(val: number): NoteBuilder {
        this.note.pitch = val;
        return this;
    }

    build(): Note {
        return this.note;
    }
}