/*
 * Copyright 2021. Futurewei Technologies Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import prompt from '@system.prompt';
import storage from '@system.storage';
import router from '@system.router';
import vibrator from '@system.vibrator';
var grids;
var context;
var timer;

const gridWidth = 70;
const gridMargin = 5;

export default {
    data: {
        shortestTime: 0,
        currentTime: 0,
        gamenum: 1,
        isShow: false,
    },
    onInit() {
        grids = [[1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 0]];

        storage.get({
            key: "shortestTime",
            default: 0,
            success: res => {
                this.shortestTime = res.data
            }
        })
        this.initGrids();
    },
    onReady() {
        this.initGrids();
    },
    onShow() {
        context = this.$refs.canvas.getContext('2d');
        this.drawGrids();
    },
    initGrids() {
        let array = ["left", "up", "right", "down"];
        for (let i = 0; i < 100; i++) {
            let randomIndex = Math.floor(Math.random() * 4);
            let direction = array[randomIndex];
            this.changeGrids(direction);
        }
    },
    drawGrids() {
        for (let row = 0; row < 4; row++) {
            for (let column = 0; column < 4; column++) {
                let gridStr = grids[row][column].toString();
                context.fillStyle = "#422e03";
                let leftTopX = column * (gridMargin + gridWidth) + gridMargin;
                let leftTopY = row * (gridMargin + gridWidth) + gridMargin;
                context.fillRect(leftTopX, leftTopY, gridWidth, gridWidth);
                context.textBaseline = 'top'
                context.font = "30px";
                if (gridStr != "0") {
                    context.fillStyle = "#FFFFFF";
                    let offsetX = (4 - gridStr.length) * (gridWidth / 8);
                    let offsetY = (gridWidth - 30 ) / 2;
                    context.fillText(gridStr, leftTopX + offsetX, leftTopY + offsetY);
                }
            }
        }
    },
    countTime() {
        this.currentTime = (Math.floor(parseFloat(this.currentTime) * 10 + 1) / 10).toString();
        if (parseFloat(this.currentTime) % 1 == 0) {
            this.currentTime = this.currentTime + ".0";
        }
        if (this.gamenum == 1) {
            this.shortestTime = this.currentTime;
        }
    },
    swipeGrids(e) {
        this.changeGrids(e.direction);
        this.drawGrids();
        vibrator.vibrate({
            mode: 'short',
            success: function(ret) {
                console.log('vibrate is successful');
            },
            fail: function(ret) {
                console.log('vibrate is failed');
            },
            complete: function(ret) {
                console.log('vibrate is completed');
            }
        });
        if (this.gameOver()) {
            clearInterval(timer);
            this.isShow = true;
            this.gamenum = this.gamenum + 1;
        }
    },
    gameOver(){
        let oriGrids=[[1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 0]];
        for (let row = 0; row < 4; row++) {
            for (let column = 0; column < 4; column++) {
                if (grids[row][column] != oriGrids[row][column]) {
                    return false;
                }
            }
        }
        return true;
    },
    changeGrids(direction) {
        let x;
        let y;
        for (let row = 0; row < 4; row++) {
            for (let column = 0; column < 4; column++) {
                if (grids[row][column] == 0) {
                    x = row;
                    y = column;
                    break;
                }
            }
        }
        let temp;
        if (this.isShow == false) {
            if (direction == 'up' && (x + 1) < 4) {
                temp = grids[x + 1][y];
                grids[x + 1][y] = grids[x][y];
                grids[x][y] = temp;
            } else if (direction == 'down' && (x - 1) > -1) {
                temp = grids[x - 1][y];
                grids[x - 1][y] = grids[x][y];
                grids[x][y] = temp;
            } else if (direction == 'left' && (y + 1) < 4) {
                temp = grids[x][y + 1];
                grids[x][y + 1] = grids[x][y];
                grids[x][y] = temp;
            } else if (direction == 'right' && (y - 1) > -1) {
                temp = grids[x][y - 1];
                grids[x][y - 1] = grids[x][y];
                grids[x][y] = temp;
            }
        }
    },
    checkStart() {
        timer = setInterval(this.countTime, 100);
        this.currentTime = 0;
        this.isShow = false;
        this.onShow();
    },
    checkRestart() {
        this.gamenum = this.gamenum + 1;
        prompt.showDialog({
            title: "",
            message: "NEW GAME?",
            buttons: [],
            success: res => {
                if (res.index == 1) {
                    this.restart();
                }
            }
        })
    },
    restart() {
        if (this.currentTime < this.shortestTime) {
            storage.set({
                key: "shortestTime",
                value: this.currentTime
            });
            this.shortestTime = this.currentTime;
        }
        this.currentTime = 0;
        clearInterval(timer)
        this.isShow = false;
        this.initGrids();
        this.drawGrids();
        this.onShow();
    },
    checkBack() {
        router.replace({
            uri: 'pages/home/home'
        });
    }
}
