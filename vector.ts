class Vector{
    vals:number[]

    constructor(size:number){
        this.vals = new Array(size)
    }

    map(callback:(arr:number[],i:number) => void){
        for(var i = 0; i < this.vals.length; i++){
            callback(this.vals,i)
        }
        return this
    }

    mul(v:Vector):Vector{
        return this.map((arr,i) => arr[i] *= v.vals[i])
    }

    add(v:Vector):Vector{
        return this.map((arr,i) => arr[i] += v.vals[i])
    }

    sub(v:Vector):Vector{
        return this.map((arr,i) => arr[i] -= v.vals[i])
    }

    scale(s:number):Vector{
        return this.map((arr,i) => arr[i] *= s)
    }

    length():number{
        var sum = 0
        this.map((arr,i) => sum += arr[i] * arr[i])
        return Math.pow(sum,0.5)
    }

    normalize():Vector{
        return this.scale(1 / this.length())
    }

    to(v:Vector):Vector{
        return v.c().sub(this)
    }

    lerp(v:Vector,weight:number):Vector{
        return this.c().add(this.to(v).scale(weight))
    }

    c():Vector{
        return new Vector(this.vals.length).overwrite(this)
    }

    overwrite(v:Vector):Vector{
        return this.map((arr,i) => arr[i] = v.vals[i])
    }

    dot(v:Vector):number{
        var sum = 0
        this.map((arr,i) => sum += arr[i] * v.vals[i])
        return sum
    }

    loop(callback: (vector: Vector) => void): void {
        var counter = new Vector(this.vals.length);
        counter.vals.fill(0)

        while(counter.compare(this) == -1){
            callback(counter)
            if(counter.incr(this)){
                break;
            }
        }
    }

    compare(v:Vector):number{
        for (var i = this.vals.length - 1; i >= 0; i--) {
			if (this.vals[i] < v.vals[i]) {
				continue;
			}
			else if (this.vals[i] == v.vals[i]) {
                return 0;
			}
			else {
				return 1;
			}
		}
		return -1;
    }

    incr(comparedTo: Vector): boolean {
        for(var i = 0; i < this.vals.length; i++){
			if((this.vals[i] + 1) < comparedTo.vals[i]){
				this.vals[i]++;
				return false;
			}else{
				this.vals[i] = 0;
			}
		}
		return true;
    }
            
    project(v:Vector):Vector{
       return v.c().scale(this.dot(v) / v.dot(v))  
    }

    get(i:number):number{
        return this.vals[i]
    }

    set(i:number,val:number):void{
        this.vals[i] = val
    }
    
    get x(){
        return this.vals[0]
    }

    get y(){
        return this.vals[1]
    }

    get z(){
        return this.vals[2]
    }

    set x(val){
        this.vals[0] = val
    }

    set y(val){
        this.vals[1] = val
    }

    set z(val){
        this.vals[2] = val
    }

    draw(ctxt:CanvasRenderingContext2D){
        var width = 10
        var halfwidth = width / 2
        ctxt.fillRect(this.x - halfwidth,this.y - halfwidth,width,width)
    }
    
    cross(v:Vector):Vector3{
        var x = this.y * v.z - this.z * v.y
        var y = this.z * v.x - this.x * v.z
        var z = this.x * v.y - this.y * v.x
        return new Vector3(x,y,z)
    }
}

class Vector2 extends Vector{
    constructor(x,y){
        super(2)
        this.x = x
        this.y = y
    }
}

class Vector3 extends Vector{
    constructor(x,y,z){
        super(3)
        this.x = x
        this.y = y
        this.z = z
    }
}

(window as any).devtoolsFormatters = [
    {
        header: function(obj, config){
            if(!(obj instanceof Vector)){
                return null
            }

            if((obj instanceof Vector2)){
                return ["div",{style:""}, `x:${obj.x} y:${obj.y}`]
            }

            if((obj instanceof Vector3)){
                return ["div",{style:""}, `x:${obj.x} y:${obj.y} z:${obj.z}`]
            }
            
        },

        hasBody: function(obj){
            return false
        },
    }
]
