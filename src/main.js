import Draw from './draw';
import Vector from './vector';
import Calc from './calc';

const draw = new Draw();
let calc = new Calc(new Vector(1, 1));
draw.redraw(calc);

const velocity = () => {
    const ux = parseFloat(document.getElementById("ux").value);
    const uy = parseFloat(document.getElementById("uy").value);

    if (ux === 0 || uy === 0 || isNaN(ux) || isNaN(uy)) {
        return;
    }

    calc = new Calc(new Vector(ux, uy));
    draw.redraw(calc);
    draw.point(calc.position(parseFloat(document.getElementById("t").value)), 5, "green");

    document.getElementById("range").value = calc.range().x.toFixed(3);
    document.getElementById("height").value = calc.maxHeight().y.toFixed(3);
    document.getElementById("time").value = calc.timePeriod().toFixed(3);

    time();
};

const time = () => {
    const t = parseFloat(document.getElementById("t").value);

    draw.redraw(calc);
    draw.point(calc.position(t), 5, "green");

    document.getElementById("vx").value = calc.velocity(t).x.toFixed(3);
    document.getElementById("vy").value = calc.velocity(t).y.toFixed(3);
    document.getElementById("rx").value = calc.position(t).x.toFixed(3);
    document.getElementById("ry").value = calc.position(t).y.toFixed(3);
};

velocity();
time();

document.getElementById("ux").addEventListener("input", velocity);
document.getElementById("uy").addEventListener("input", velocity);
document.getElementById("t").addEventListener("input", time);