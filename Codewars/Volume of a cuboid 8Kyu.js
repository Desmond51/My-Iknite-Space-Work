// 

/*   Problem

Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

                 Steps

- Since V = l * w * h, we just need to return this formula
*/
                  //Solution


   class Kata {
    static getVolumeOfCuboid(length, width, height) {

        return length*width*height;
  
    }
  }


console.log( Kata.getVolumeOfCuboid(length, width, height))
                

//sample test

//   Test 

Kata.getVolumeOfCuboid(1,2,2) //4);
Kata.getVolumeOfCuboid(6.3,2,5) //63);