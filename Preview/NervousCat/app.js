/**
 * Created by szhj on 2016/3/26.
 */
var stage = new createjs.Stage("game-view");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);

var gameView = new createjs.Container();
gameView.x = 30;
gameView.y = 30;
stage.addChild(gameView);

var canvasArr = [[],[],[],[],[],[],[],[],[]]; //所有的点
var width = 9, height = 9; //游戏区域的最大长和宽.
var NO_MOVE = 0, UP_LEFT = 1, UP_RIGHT = 2, RIGHT = 3, DOWN_RIGHT = 4, DOWN_LEFT = 5, LEFT = 6; //猫能移动的方向
var distance = [0,0,0,0,0,0,0]; //猫距离障碍物的距离
var cat = null; //猫,记录当前猫的位置

/*
* 判断方向direction方向上是否有障碍物
* */
function canMove(direction, move) {
    var tempCat = {};
    tempCat.x = cat.indexX;
    tempCat.y = cat.indexY;
    tempCat = move(tempCat);
    while (true) {
        if (tempCat.x < 0 || tempCat.x > 8 || tempCat.y < 0 || tempCat.y > 8) {
            break;
        }
        if (canvasArr[tempCat.x][tempCat.y].getCircleType() == 2) {
            return false;
        }
        distance[direction]++;
        tempCat = move(tempCat);
    }
    return true;
}

/*
* 得到猫能够移动的方向
* */
function getDirection() {
    /*UP_LEFT*/
    var can;
    can = canMove(UP_LEFT, function(tempCat) {
       if (tempCat.y % 2 == 0) {
           tempCat.x--;
       }
       tempCat.y--;
       return tempCat;
    });
    if (can) {
        return UP_LEFT;
    }

    /*UP_RIGHT*/
    can = canMove(UP_RIGHT, function(tempCat) {
        if (tempCat.y % 2 != 0) {
            tempCat.x++;
        }
        tempCat.y--;
        return tempCat;
    });
    if (can) {
        return UP_RIGHT;
    }

    /*RIGHT*/
    can = canMove(RIGHT, function(tempCat) {
        tempCat.x++;
        return tempCat;
    });
    if (can) {
        return RIGHT;
    }

    /*DOWN_RIGHT*/
    can = canMove(DOWN_RIGHT, function(tempCat) {
        if (tempCat.y % 2 != 0) {
            tempCat.x++;
        }
        tempCat.y++;
        return tempCat;
    });
    if (can) {
        return DOWN_RIGHT;
    }

    /*DOWN_LEFT*/
    can = canMove(DOWN_LEFT, function(tempCat) {
        if (tempCat.y % 2 == 0) {
            tempCat.x--;
        }
        tempCat.y++;
        return tempCat;
    });
    if (can) {
        return DOWN_LEFT;
    }

    /*LEFT*/
    can = canMove(LEFT, function(tempCat) {
        tempCat.x--;
        return tempCat;
    });
    if (can) {
        return LEFT;
    }

    var maxDistance = Math.max.apply(null, distance);
    if (maxDistance == 0) {
        return NO_MOVE;
    }
    for (var i = 1; i < 7; ++i) {
        if (distance[i] == maxDistance) {
            return i;
        }
    }
}

/*
* 根据猫能够移动的方向,移动猫
* */
function catMove() {
    if (cat.indexX <= 0 || cat.indexX >= 8 || cat.indexY <= 0 || cat.indexY >= 8) {
        alert("游戏结束，你输了。");
        return;
    }
    var direction = getDirection();
    distance = [0,0,0,0,0,0,0];
    switch (direction) {
        case NO_MOVE:
            alert("游戏结束，你赢了。");
            break;
        case UP_LEFT:
            canvasArr[cat.indexX][cat.indexY].setCircleType(1);
            if (cat.indexY % 2 == 0) {
                cat.indexX--;
            }
            cat.indexY--;
            canvasArr[cat.indexX][cat.indexY].setCircleType(3);
            break;
        case UP_RIGHT:
            canvasArr[cat.indexX][cat.indexY].setCircleType(1);
            if (cat.indexY % 2 != 0) {
                cat.indexX++;
            }
            cat.indexY--;
            canvasArr[cat.indexX][cat.indexY].setCircleType(3);
            break;
        case RIGHT:
            canvasArr[cat.indexX][cat.indexY].setCircleType(1);
            cat.indexX++;
            canvasArr[cat.indexX][cat.indexY].setCircleType(3);
            break;
        case DOWN_RIGHT:
            canvasArr[cat.indexX][cat.indexY].setCircleType(1);
            if (cat.indexY % 2 != 0) {
                cat.indexX++;
            }
            cat.indexY++;
            canvasArr[cat.indexX][cat.indexY].setCircleType(3);
            break;
        case DOWN_LEFT:
            canvasArr[cat.indexX][cat.indexY].setCircleType(1);
            if (cat.indexY % 2 == 0) {
                cat.indexX--;
            }
            cat.indexY++;
            canvasArr[cat.indexX][cat.indexY].setCircleType(3);
            break;
        case LEFT:
            canvasArr[cat.indexX][cat.indexY].setCircleType(1);
            cat.indexX--;
            canvasArr[cat.indexX][cat.indexY].setCircleType(3);
            break;
    }
}

/*
* 初始化游戏地图和猫,随机生成障碍物.并为每个点绑定事件.
* */
function addCircles() {
    for (var indexY = 0; indexY < height; ++indexY) {
        for (var indexX = 0; indexX < width; ++indexX) {
            var circle = new Circle();
            gameView.addChild(circle);
            canvasArr[indexX][indexY] = circle;
            circle.indexX = indexX;
            circle.indexY = indexY;
            circle.x = indexY % 2 != 0 ? 30 + 55 * indexX : 55 * indexX;
            circle.y = 55 * indexY;
            if (indexX == 4 && indexY == 4) {
                circle.setCircleType(3);
                cat = circle;
            } else if (Math.random() < 0.1) {
                circle.setCircleType(2);
            }
            circle.addEventListener("click", function(event) {
               if (event.target.getCircleType() == 1) {
                   event.target.setCircleType(2);
               } else {
                   return;
               }
               catMove(); 
            });
        }
    }
}

addCircles();