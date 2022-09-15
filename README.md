# Klotski-HarmonyOS-Watch

# Introduction
Klotski is a classic math fun puzzle game that consists of numbered square blocks in random order with one block missing. The goal of the game is to arrange the random numbers in order. The game includes 3 levels of difficulty, i.e., 3x3 puzzle for beginners, 4x4 puzzle for classic players, and 5x5 puzzle for challengers.  Enjoy playing the math fun Klotski puzzle game on watch. Try to challenge your logic and brainpower!

Description of how to play the game:

1.	On the start page of Game Klotski, select difficulty level (NxN, N = 3, 4, or 5) to play.
2.	On game interface, a NxN square matrix is displayed, with random numbers from 1 to (NxN -1) and a blank square distributed in the square matrix. There are 3 buttons on the bottom of game interface. They are START (timer) button, NEW (game) button, and BACK (to start page) button.   
3.	After clicking the START button, timer is counted and shown in TIME (current time) and BEST (shortest time) on the top of the game interface.
4.	Swiping up, down, left, or right, and the square blocks at the corresponding positions around the blank square blocks will move one square in the corresponding direction.
5.	After several swipes, when all the numbers are arranged in order, the game over will pop up with scale animation, and there will be no change in swiping.
6.	After clicking the NEW button, the interface of NEW GAME? will pop up. When NEW GAME is checked, the same level square matrix with random number is display, and the TIME is zero before the new game starts and the BEST shows the play-time of the previous game.  
7.	After clicking the START button, the new game starts, and the TIME shows the current time. Next steps are same from 4 to 6 above. 
8.	If you want to change the difficulty level, click the BACK button. The game interface is back to the start page. You can select the difficulty level and then play the game.    

# Installation requirements
Install Huawei DevEco Studio 3.0 Beta2 or later and set up the DevEco Studio development environment. The DevEco Studio development environment needs to depend on the network environment. It needs to be connected to the network to ensure the normal use of the tool.The development environment can be configured according to the following two situations: 1) If you can directly access the Internet, just download the HarmonyOS SDK; 2) If the network cannot access the Internet directly, it can be accessed through a proxy server • Generate secret key and apply for certificate.

# User guide 
Download this Project and open DevEco Studio 3.0 Beta2 or later, click File> Open> Then select and open this Project • Click Build> Build App(s)/Hap(s)>Build Debug Hap(s) to compile the hap package.  Then Click Run> Run 'entry' to run the hap package.
Note that you can choose to run the hap package on the local emulator or the Huawei Watch 3. If you run it on the watch, you need to configure the signature and certificate information in the project's File> Project Structure> Modules> Signing Configs.

# HarmonyOS version
HarmonyOS 2.0 or later.

# Support devices
Huawei Watch 3 and Watch 3 Pro.

# License
The demo code is licensed under the Apache License version 2.0 and ISC License.

# Acknowledgements
The code in this project has been modified from HarmonyOS open source demo and Huawei Analytics demo. Their contributions are greatly appreciated.

# Questions
If you have a questions - Stack Overflow is the best place for any programming inquiries. Be sure to include the tag huawei-mobile-services.

# Screenshots

<img src= "https://user-images.githubusercontent.com/97313676/190311778-7f7a963c-2af4-474a-a42c-ea76c4a28554.png" width="200" height="240"> <img src= "https://user-images.githubusercontent.com/97313676/190311930-e23b1445-dbe6-43e5-a8cc-6ca192739054.png" width="200" height="240"> <img src= "https://user-images.githubusercontent.com/97313676/190312128-1b9af175-d145-4a01-a8ec-25b932bacbef.png" width="200" height="240"> <img src= "https://user-images.githubusercontent.com/97313676/190312245-c09a3f99-f668-429f-8cc1-df7cc29796f6.png" width="200" height="240"> <img src= "https://user-images.githubusercontent.com/97313676/190312340-2f255d70-c875-448f-b59f-db73c6b3261e.png" width="200" height="240"> <img src= "https://user-images.githubusercontent.com/97313676/190312386-4bf42497-2ebd-40a8-8659-2d7fa3153ef8.png" width="200" height="240"> <img src= "https://user-images.githubusercontent.com/97313676/190312408-4007019c-dfdb-469a-a0ce-7451e5060de0.png" width="200" height="240"> <img src= "https://user-images.githubusercontent.com/97313676/190312452-090e09e4-2289-4aa6-950a-069f451859ee.png" width="200" height="240">


