/**
 * class Rect
 */

class Rect {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    draw() {
        console.log(`Rect(w=${this.w}, h=${this.h})를 그렸습니다.`);
    }
}

// test
const rect1 = new Rect(10, 20);
const rect2 = new Rect(100, 20);

rect1.draw();
rect2.draw();
/**
 * cf . 생성자 함수 Circle
 */
const Circle = function(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.prototype.draw = function() {
    console.log(`Circle(x=${this.x}, y=${this.y}, r= ${this.r})를 그렸습니다.`);
}

const circle1 = new Circle(10, 100 ,10);
const circle2 = new Circle(100, 100 ,10);
circle1.draw();
circle2.draw();


/**
 * extends - 상속
 */

class Shape {
    constructor(fillColor, lineColor){
        this.fillColor = fillColor;
        this.lineColor = lineColor;
    }

    draw() {
        console.log('그릴 수 없습니다.');
    }

    area() {
        console.log('구할 수 없습니다.');
    }
}

class Triangle extends Shape {
    constructor(w , h, fillColor, lineColor){
        super(fillColor, lineColor);
        this.w = w;
        this.h = h;
    }
    //@Override
    draw() {
        console.log(`Triangle(w=${this.w}, h=${this.h}, fillColor=${this.fillColor}, lineColor=${this.lineColor}) 삼각형을 그렸습니다.`);
    }
}

const s =new Triangle(10, 10, 'red', 'black');
s.draw();