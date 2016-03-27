/**
 * Created by szhj on 2016/3/26.
 */
function Circle() {
    createjs.Shape.call(this);

    this.setCircleType = function (type) {
        this._circleType = type;
        switch (type) {
            case Circle.TYPE_UNSELLECED:
                this.setColor("#ccc");
                break;
            case Circle.TYPE_SELLECED:
                this.setColor("#f60");
                break;
            case Circle.TYPE_CAT:
                this.setColor("#f0f");
                break;
        }
    };

    this.setColor = function (colorString) {
        this.graphics.beginFill(colorString);
        this.graphics.drawCircle(0, 0, 25);
        this.graphics.endFill();
    };

    this.getCircleType = function () {
        return this._circleType;
    };

    this.setCircleType(Circle.TYPE_UNSELLECED);
}

Circle.prototype = new createjs.Shape();
Circle.TYPE_UNSELLECED = 1;
Circle.TYPE_SELLECED = 2;
Circle.TYPE_CAT = 3;