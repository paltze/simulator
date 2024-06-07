import Vector from './vector';

export default class {
    constructor(u) {
        this.g = new Vector(0, -9.80665);
        this.u = u;
    }

    timePeriod() {
        return 2 * this.u.y / this.g.abs();
    }

    position(t) {
        return this.u.scalarProduct(t).add(this.g.scalarProduct(t * t / 2));
    }

    velocity(t) {
        return this.u.add(this.g.scalarProduct(t));
    }

    maxHeight() {
        return this.position(this.timePeriod() / 2);
    }

    range() {
        return this.position(this.timePeriod());
    }
}