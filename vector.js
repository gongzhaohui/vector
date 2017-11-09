class Vector {
    constructor(size) {
        this.vals = new Array(size);
    }
    add(v) {
        for (var i = 0; i < this.vals.length; i++) {
            this.vals[i] += v.vals[i];
        }
        return this;
    }
    sub(v) {
        for (var i = 0; i < this.vals.length; i++) {
            this.vals[i] += v.vals[i];
        }
        return this;
    }
    scale(s) {
        for (var i = 0; i < this.vals.length; i++) {
            this.vals[i] *= s;
        }
        return this;
    }
    length() {
        var sum = 0;
        for (var i = 0; i < this.vals.length; i++) {
            sum += Math.pow(this.vals[i], 2);
        }
        return Math.sqrt(sum);
    }
    normalize() {
        return this.scale(1 / this.length());
    }
    to(v) {
        return v.c().sub(this);
    }
    lerp(v, weight) {
        return this.c().add(this.to(v).scale(weight));
    }
    c() {
        return new Vector(this.vals.length).overwrite(this);
    }
    overwrite(v) {
        for (var i = 0; i < this.vals.length; i++) {
            this.vals[i] = v.vals[i];
        }
        return this;
    }
    dot(v) {
        var sum = 0;
        for (var i = 0; i < this.vals.length; i++) {
            sum += this.vals[i] * v.vals[i];
        }
        return sum;
    }
    loop() {
    }
    incr() {
    }
    project(v) {
        return v.c().scale(this.dot(v) / v.dot(v));
    }
    get(i) {
        return this.vals[i];
    }
    set(i, val) {
        this.vals[i] = val;
    }
    get x() {
        return this.vals[0];
    }
    get y() {
        return this.vals[1];
    }
    get z() {
        return this.vals[2];
    }
    set x(val) {
        this.vals[0] = val;
    }
    set y(val) {
        this.vals[1] = val;
    }
    set z(val) {
        this.vals[2] = val;
    }
}
class Vector2 extends Vector {
    constructor(x, y) {
        super(2);
        this.x = x;
        this.y = y;
    }
}
class Vector3 extends Vector {
    constructor(x, y, z) {
        super(3);
        this.x = x;
        this.y = y;
        this.z = z;
    }
    cross(v) {
        var x = this.y * v.z - this.z * v.y;
        var y = this.z * v.x - this.x * v.z;
        var z = this.x * v.y - this.y * v.x;
        return new Vector3(x, y, z);
    }
}
