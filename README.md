# Projectile "Simulator"

A very simple 2D projectile motion "simulator". This program is built with vanilla JS and HTML5 canvas without using any external library or framework.

- Calculates Range, Max Height and Time Period of a projectile projected from the ground

- Calculates it's position and velocity vector on any given time

- Visualises its path, also shows its position at a given time

## The Physics

### The Vector System

- Conventionally, the origin of a plane is taken such that the positive x direction is rightward while the positive y direction is vertically upward. On the contrary the positive y of a plane in HTML Canvas is vertically downwards.

- Consequentially I have assumed that we are working in the fourth quadrant of a conventional plane (this can be seen in the definition of our virtual origin in `src/draw.js`). The idea is to get negative of y part of vector before supplying it to canvas (this is why `getVirtual` method exists on `Vector`).

- If **OP** is the vector connecting origin of canvas to our virtual origin and **PR** is the vector connecting our virtual origin to any point then by triangle law of vector addition, vector connecting origin of canvas to the point (**OR**) will be equal to **OP** + **PR**. Then we simply multiply y value of **OR** with -1 and get the coordinates ready to be supplied to canvas.

### Kinematics

- In this program, I first calculate the Time Period (`T`) of the projectile using `(2 * uy) / g`. Where `uy` is the vertical component of initial velocity (`u`) and `g` is acceleration due to gravity.

- Then I write the general position of the projectile as `r(t) = ut + 1/2gt^2`. The Range is x component of `r(T)` and the Max Height is y component of `r(T/2)`. Instantaneous velocity can be written with `v(t) = u + gt`.