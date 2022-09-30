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

import router from '@system.router';
import app from '@system.app';

export default {
    to3x3() {
        router.replace({
            uri: 'pages/threebythree/threebythree',
        })
    },
    to4x4() {
        router.replace({
            uri: 'pages/fourbyfour/fourbyfour',
        })
    },
    to5x5() {
        router.replace({
            uri: 'pages/fivebyfive/fivebyfive',
        })
    },
    touchMove(e) {
        if(e.direction == "right"){
            this.appExit();
        }
    },
    appExit(){
        app.terminate();
    }
}
