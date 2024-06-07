class Vector {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    
    add(v) {
        return new Vector(this.x + v.x, this.y + v.y);
    }

    sub(v) {
        return new Vector(this.x - v.x, this.y - v.y);
    }

    abs() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }

    scalarProduct(k) {
        return new Vector(this.x * k, this.y * k);
    }

    getVirtual() {
        return new Vector(this.x, -1 * this.y);
    }
}

export default Vector;