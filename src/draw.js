import Vector from "./vector";

export default class {
    constructor() {
        this.ctx = this.getCtx();
        this.origin = new Vector(0.1*window.innerWidth, -0.9*window.innerHeight);
    }

    getCtx() {
        document.getElementsByTagName("body")[0]
        .insertAdjacentHTML("afterbegin", `<canvas width="${window.innerWidth}" height="${window.innerHeight}"></canvas>`);

        return document.getElementsByTagName("canvas")[0].getContext("2d");
    }

    clear() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    getVirtual(point) {
        return this.origin.add(point.scalarProduct(this.zoom)).getVirtual();
    }

    line(x1, y1, x2, y2, width) {
        this.ctx.lineWidth = width;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

    point(center, radius, color) {
        let finalPoint = this.getVirtual(center);
        this.ctx.lineWidth = 0.5 * radius;
        this.ctx.beginPath();
        this.ctx.arc(finalPoint.x, finalPoint.y, radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.stroke();
    }

    path(height, range, width) {
        const fOrigin = this.getVirtual(new Vector(0, 0));
        const fHeight = this.getVirtual(new Vector(height.x, height.y * 2));
        const fRange = this.getVirtual(range);

        this.ctx.lineWidth = width;
        this.ctx.moveTo(fOrigin.x, fOrigin.y);
        this.ctx.quadraticCurveTo(fHeight.x, fHeight.y, fRange.x, fRange.y);
        this.ctx.stroke();
    }

    redraw(calc) {
        this.height = calc.maxHeight();
        this.range = calc.range();
        this.zoom = this.getZoom();
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        this.line(0, -1 * this.origin.y, window.innerWidth, -1 * this.origin.y, 3);
        this.line(this.origin.x, 0, this.origin.x, window.innerHeight, 3);
        this.point(new Vector(0, 0), 4, "black");
        this.path(this.height, this.range, 3);
        this.point(this.height, 5, "red");
        this.point(this.range, 5, "blue");
    }

    getZoom() {
        const width = 0.9 * window.innerWidth * 0.9;
        const height = 0.9 * window.innerHeight * 0.9;

        let ratio = width / this.range.x;
        if (height / ratio > this.height.y) {
            return ratio;
        }
        else {
            return height / this.height.y;
        }
    }
}