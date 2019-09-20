// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerX{
  constructor(props){
    this.length = props.length,
    this.width = props.width,
    this.height = props.height
  }
  volume() {
    return this.length*this.width*this.height;
  }
  surfaceArea() {
    return 2*(this.length*this.width + this.length*this.height + this.width*this.height);
  }
}

class CubeMaker extends CuboidMakerX{
  constructor(props){
    super(props)
  }
  cubeVolume() {
    if(this.length === this.width && this.length === this.height) {
      return Math.pow(this.length, 3);
    } else {
      return `This is not a cube`;
    }
  }
  cubeVolume() {
    if(this.length === this.width && this.length === this.height) {
      return `Cube volume is ${Math.pow(this.length, 3)}`;
    } else {
      return `Sorry, this is not a cube`;
    }
  }
  cubeSurfaceArea() {
    if(this.length === this.width && this.length === this.height) {
      return `Cube surface area is ${6*Math.pow(this.length, 2)}`;
    } else {
      return `Sorry, this is not a cube`;
    }
  }
}

let cuboidX = new CubeMaker({
  length: 4,
  width: 5,
  height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidX.volume()); // 100
console.log(cuboidX.surfaceArea()); // 130
console.log(cuboidX.cubeVolume()); // 130
console.log(cuboidX.cubeSurfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.