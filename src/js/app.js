export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(characer) {
        this.members.forEach((item) => {
            if (JSON.stringify(item) === JSON.stringify(characer)) {
                throw new Error('The character has already been added');
            }
        });
        this.members.add(characer);
    }

    addAll(...arr) {
        arr.forEach((item) => {
            this.members.add(item);
        });
        return this;
    }

    toArray() {
        return Array.from(this.members);
    }
}