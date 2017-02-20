Vector2D and Vector3D class for all your vector needs

a vector2D and vector3D class that hold probably any vector operation that you would ever need(knock on wood).
1 feature that javascript doesn't have is is generics or templates which is what i was hoping to work around using javascript classes.
nearly all methods return themselve again so chaining methods together is more than possible.

shared methods

add(vector)
adds another vector to this one modifying itself

sub(vector)
subtracts another vector from this one modifiying itself

scale(number)
scales this factor by a number(scalar) modifying itself

normalize()
sets this vectors length to 1

length()
calculates the length of this vector

lerp(vector, weight)
linearly interpolates to the second vector

project(vector)
projects this vector onto another one modifying itself

dot(vector)
calculates the dot product of this and the other vector

c()
make a copy of this vector and returns the copy

equals(vector)
returns true if all fieds are equal to the other vector and false otherwise

overwrite(vector)
sets this vector's values to the other one

iterate(callback(i))
calls the callback as many times as the vector has dimensions.

loop(callback(vector))
calls the callback once with each possible combination of the values.
very useful with 2d vectors and 2d arrays so you dont have to write that nested for loop.
replaces this code construct

for(int x = 0; x < vector.x; x++){
    for(int y = 0; y < vector.y; y++){
        //some code that can now be replaced with the callback
        console.log(`x:${x}, y:${y}`)
    }
}
becomes
myvector.loop((vector) => {
    console.log(`x:${vector.x}, y:${vector.y}`)
})

get(i)
gets the corresponding value of the vector x being 0, y 1 and z 2
very useful in combination with iterate

set(i, value)
sets the corresponding value of the vector just like get and sets it to the passed in value
very useful in combination with iterate

2d
draw(2DcanvasContext)
draws the vector on the passed in graphicsContect

3d
cross(vector)
calculates the cross product and returns it as a new vector