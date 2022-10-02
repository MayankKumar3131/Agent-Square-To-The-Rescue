var agent,agentEyeBallLeft,agentEyeLeft,agentEyeBallRight,agentEyeRight;
var ground,invisibleGround;
var enemySpy,enemySpyDetectorDetector,enemyEye,enemyEyeBall,mouth1,mouth2,mouth3,horn1,horn2;


var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;
var box31,box32,box33,box34,box35,box36,box37,box38,box39,box40;
var box41,box42,box43,box44,box45,box46,box47,box48,box49,box50;
var box51,box52,box53,box54,box55,box56,box57,box58,box59,box60;
var box61,box62,box63,box64,box65,box66,box67,box68,box69,box70;
var box71,box72,box73,box74,box75,box76,box77,box78,box79,box80;
var box81,box82,box83,box84,box85,box86,box87,box88,box89,box90;
var box91,box92,box93,box94,box95,box96,box97,box98,box99,box100;
var box101,box102,box103,box104,box105,box106,box107,box108,box109,box110;
var box111,box112,box113,box114,box115,box116,box117,box118,box119,box120;
var box121,box122,box123,box124,box125,box126,box127,box128,box129,box130;
var box131,box132,box133,box134,box135,box136,box137,box138,box139,box140;
var box141,box142,box143,box144,box145,box146,box147,box148,box149,box150;



var leftEdge,rightEdge;



var gameState = "intro";
var distanceTravelled = 0;

function preload() {
    
}

function setup(){
    createCanvas(windowWidth,windowHeight);


    enemySpyDetectorDetector = createSprite(800,500,80,800);
    enemySpyDetectorDetector.shapeColor = "lightGrey";
    enemySpyDetectorDetector.visible = false;

    agent = createSprite (200,750,50,50);
    agent.shapeColor = "lightGrey";
    agent.visible = false;

    agentEyeRight = createSprite(agent.x+10,agent.y-10,10,10);
    agentEyeRight.shapeColor = "white";
    agentEyeRight.visible = false;
    agentEyeBallRight = createSprite(agent.x+10,agent.y-10,5,5);
    agentEyeBallRight.shapeColor = "black";
    agentEyeBallRight.visible = false;

    agentEyeLeft = createSprite(agent.x-10,agent.y-10,10,10);
    agentEyeLeft.shapeColor = "white";
    agentEyeLeft.visible = false;
    agentEyeBallLeft = createSprite(agent.x-10,agent.y-10,5,5);
    agentEyeBallLeft.shapeColor = "black";
    agentEyeBallLeft.visible = false;



    ground = createSprite(windowWidth/2,825,windowWidth*2,100)
    ground.shapeColor = "brown";
    ground.visible = false;

    invisibleGround = createSprite(windowWidth/2,780,windowWidth*2,10)
    invisibleGround.visible = false;

    enemySpy = createSprite(windowWidth-200,200,80,80);
    enemySpy.shapeColor = "purple";
    enemySpy.visible = false;
    enemyEye = createSprite(enemySpy.x,enemySpy.y-10,20,20);
    enemyEye.shapeColor = "white";
    enemyEye.visible = false;
    enemyEyeBall = createSprite(enemySpy.x,enemySpy.y-10,10,10);
    enemyEyeBall.shapeColor = "red";
    enemyEyeBall.visible = false;
    mouth1 = createSprite(enemySpy.x,enemySpy.y*1.12,enemySpy.width/2,2);
    mouth1.shapeColor = "red";
    mouth1.visible = false;
    mouth2 = createSprite(enemySpy.x-15,enemySpy.y*1.13,2,5);
    mouth2.shapeColor = "red";
    mouth2.visible = false;
    mouth3 = createSprite(enemySpy.x+15,enemySpy.y*1.13,2,5);
    mouth3.shapeColor = "red";
    mouth3.visible = false;
    horn1 = createSprite(mouth2.x-5,enemySpy.y-45,10,20);
    horn1.shapeColor = "red";
    horn1.visible = false;
    horn2 = createSprite(mouth3.x+5,enemySpy.y-45,10,20);
    horn2.shapeColor = "red";
    horn2.visible = false;



    leftEdge = createSprite(-2,windowHeight/2,5,windowHeight*2);
    leftEdge.shapeColor = "red";
    leftEdge.visible = false;
    rightEdge = createSprite(windowWidth-2,windowHeight/2,5,windowHeight*2);
    rightEdge.shapeColor = "red";
    rightEdge.visible = false;
    
    box1 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box1.shapeColor = "white";
    box1.visible = false;
    box2 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box2.shapeColor = "white";
    box2.visible = false;
    box3 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box3.shapeColor = "white";
    box3.visible = false;
    box4 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box4.shapeColor = "white";
    box4.visible = false;
    box5 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box5.shapeColor = "white";
    box5.visible = false;
    box6 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box6.shapeColor = "white";
    box6.visible = false;
    box7 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box7.shapeColor = "white";
    box7.visible = false;
    box8 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box8.shapeColor = "white";
    box8.visible = false;
    box9 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box9.shapeColor = "white";
    box9.visible = false;
    box10 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box10.shapeColor = "white";
    box10.visible = false;
    box11 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box11.shapeColor = "white";
    box11.visible = false;
    box12 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box12.shapeColor = "white";
    box12.visible = false;
    box13 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box13.shapeColor = "white";
    box13.visible = false;
    box14 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box14.shapeColor = "white";
    box14.visible = false;
    box15 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box15.shapeColor = "white";
    box15.visible = false;
    box16 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box16.shapeColor = "white";
    box16.visible = false;
    box17 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box17.shapeColor = "white";
    box17.visible = false;
    box18 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box18.shapeColor = "white";
    box18.visible = false;
    box19 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box19.shapeColor = "white";
    box19.visible = false;
    box20 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box20.shapeColor = "white";
    box20.visible = false;
    box21 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box21.shapeColor = "white";
    box21.visible = false;
    box22 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box22.shapeColor = "white";
    box22.visible = false;
    box23 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box23.shapeColor = "white";
    box23.visible = false;
    box24 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box24.shapeColor = "white";
    box24.visible = false;
    box25 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box25.shapeColor = "white";
    box25.visible = false;
    box26 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box26.shapeColor = "white";
    box26.visible = false;
    box27 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box27.shapeColor = "white";
    box27.visible = false;
    box28 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box28.shapeColor = "white";
    box28.visible = false;
    box29 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box29.shapeColor = "white";
    box29.visible = false;
    box30 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box30.shapeColor = "white";
    box30.visible = false;
    box31 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box31.shapeColor = "white";
    box31.visible = false;
    box32 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box32.shapeColor = "white";
    box32.visible = false;
    box33 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box33.shapeColor = "white";
    box33.visible = false;
    box34 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box34.shapeColor = "white";
    box34.visible = false;
    box35 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box35.shapeColor = "white";
    box35.visible = false;
    box36 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box36.shapeColor = "white";
    box36.visible = false;
    box37 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box37.shapeColor = "white";
    box37.visible = false;
    box38 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box38.shapeColor = "white";
    box38.visible = false;
    box39 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box39.shapeColor = "white";
    box39.visible = false;
    box40 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box40.shapeColor = "white";
    box40.visible = false;
    box41 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box41.shapeColor = "white";
    box41.visible = false;
    box42 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box42.shapeColor = "white";
    box42.visible = false;
    box43 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box43.shapeColor = "white";
    box43.visible = false;
    box44 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box44.shapeColor = "white";
    box44.visible = false;
    box45 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box45.shapeColor = "white";
    box45.visible = false;
    box46 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box46.shapeColor = "white";
    box46.visible = false;
    box47 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box47.shapeColor = "white";
    box47.visible = false;
    box48 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box48.shapeColor = "white";
    box48.visible = false;
    box49 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box49.shapeColor = "white";
    box49.visible = false;
    box50 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box50.shapeColor = "white";
    box50.visible = false;
    box51 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box51.shapeColor = "white";
    box51.visible = false;
    box52 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box52.shapeColor = "white";
    box52.visible = false;
    box53 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box53.shapeColor = "white";
    box53.visible = false;
    box54 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box54.shapeColor = "white";
    box54.visible = false;
    box55 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box55.shapeColor = "white";
    box55.visible = false;
    box56 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box56.shapeColor = "white";
    box56.visible = false;
    box57 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box57.shapeColor = "white";
    box57.visible = false;
    box58 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box58.shapeColor = "white";
    box58.visible = false;
    box59 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box59.shapeColor = "white";
    box59.visible = false;
    box60 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box60.shapeColor = "white";
    box60.visible = false;
    box61 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box61.shapeColor = "white";
    box61.visible = false;
    box62 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box62.shapeColor = "white";
    box62.visible = false;
    box63 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box63.shapeColor = "white";
    box63.visible = false;
    box64 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box64.shapeColor = "white";
    box64.visible = false;
    box65 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box65.shapeColor = "white";
    box65.visible = false;
    box66 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box66.shapeColor = "white";
    box66.visible = false;
    box67 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box67.shapeColor = "white";
    box67.visible = false;
    box68 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box68.shapeColor = "white";
    box68.visible = false;
    box69 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box69.shapeColor = "white";
    box69.visible = false;
    box70 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box70.shapeColor = "white";
    box70.visible = false;
    box71 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box71.shapeColor = "white";
    box71.visible = false;
    box72 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box72.shapeColor = "white";
    box72.visible = false;
    box73 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box73.shapeColor = "white";
    box73.visible = false;
    box74 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box74.shapeColor = "white";
    box74.visible = false;
    box75 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box75.shapeColor = "white";
    box75.visible = false;
    box76 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box76.shapeColor = "white";
    box76.visible = false;
    box77 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box77.shapeColor = "white";
    box77.visible = false;
    box78 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box78.shapeColor = "white";
    box78.visible = false;
    box79 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box79.shapeColor = "white";
    box79.visible = false;
    box80 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box80.shapeColor = "white";
    box80.visible = false;
    box81 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box81.shapeColor = "white";
    box81.visible = false;
    box82 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box82.shapeColor = "white";
    box82.visible = false;
    box83 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box83.shapeColor = "white";
    box83.visible = false;
    box84 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box84.shapeColor = "white";
    box84.visible = false;
    box85 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box85.shapeColor = "white";
    box85.visible = false;
    box86 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box86.shapeColor = "white";
    box86.visible = false;
    box87 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box87.shapeColor = "white";
    box87.visible = false;
    box88 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box88.shapeColor = "white";
    box88.visible = false;
    box89 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box89.shapeColor = "white";
    box89.visible = false;
    box90 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box90.shapeColor = "white";
    box90.visible = false;
    box91 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box91.shapeColor = "white";
    box91.visible = false;
    box92 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box92.shapeColor = "white";
    box92.visible = false;
    box93 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box93.shapeColor = "white";
    box93.visible = false;
    box94 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box94.shapeColor = "white";
    box94.visible = false;
    box95 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box95.shapeColor = "white";
    box95.visible = false;
    box96 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box96.shapeColor = "white";
    box96.visible = false;
    box97 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box97.shapeColor = "white";
    box97.visible = false;
    box98 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box98.shapeColor = "white";
    box98.visible = false;
    box99 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box99.shapeColor = "white";
    box99.visible = false;
    box100 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box100.shapeColor = "white";
    box100.visible = false;
    box101 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box101.shapeColor = "white";
    box101.visible = false;
    box102 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box102.shapeColor = "white";
    box102.visible = false;
    box103 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box103.shapeColor = "white";
    box103.visible = false;
    box104 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box104.shapeColor = "white";
    box104.visible = false;
    box105 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box105.shapeColor = "white";
    box105.visible = false;
    box106 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box106.shapeColor = "white";
    box106.visible = false;
    box107 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box107.shapeColor = "white";
    box107.visible = false;
    box108 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box108.shapeColor = "white";
    box108.visible = false;
    box109 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box109.shapeColor = "white";
    box109.visible = false;
    box110 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box110.shapeColor = "white";
    box110.visible = false;
    box111 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box111.shapeColor = "white";
    box111.visible = false;
    box112 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box112.shapeColor = "white";
    box112.visible = false;
    box113 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box113.shapeColor = "white";
    box113.visible = false;
    box114 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box114.shapeColor = "white";
    box114.visible = false;
    box115 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box115.shapeColor = "white";
    box115.visible = false;
    box116 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box116.shapeColor = "white";
    box116.visible = false;
    box117 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box117.shapeColor = "white";
    box117.visible = false;
    box118 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box118.shapeColor = "white";
    box118.visible = false;
    box119 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box119.shapeColor = "white";
    box119.visible = false;
    box120 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box120.shapeColor = "white";
    box120.visible = false;
    box121 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box121.shapeColor = "white";
    box121.visible = false;
    box122 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box122.shapeColor = "white";
    box122.visible = false;
    box123 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box123.shapeColor = "white";
    box123.visible = false;
    box124 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box124.shapeColor = "white";
    box124.visible = false;
    box125 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box125.shapeColor = "white";
    box125.visible = false;
    box126 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box126.shapeColor = "white";
    box126.visible = false;
    box127 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box127.shapeColor = "white";
    box127.visible = false;
    box128 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box128.shapeColor = "white";
    box128.visible = false;
    box129 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box129.shapeColor = "white";
    box129.visible = false;
    box130 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box130.shapeColor = "white";
    box130.visible = false;
    box131 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box131.shapeColor = "white";
    box131.visible = false;
    box132 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box132.shapeColor = "white";
    box132.visible = false;
    box133 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box133.shapeColor = "white";
    box133.visible = false;
    box134 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box134.shapeColor = "white";
    box134.visible = false;
    box135 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box135.shapeColor = "white";
    box135.visible = false;
    box136 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box136.shapeColor = "white";
    box136.visible = false;
    box137 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box137.shapeColor = "white";
    box137.visible = false;
    box138 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box138.shapeColor = "white";
    box138.visible = false;
    box139 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box139.shapeColor = "white";
    box139.visible = false;
    box140 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box140.shapeColor = "white";
    box140.visible = false;
    box141 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box141.shapeColor = "white";
    box141.visible = false;
    box142 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box142.shapeColor = "white";
    box142.visible = false;
    box143 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box143.shapeColor = "white";
    box143.visible = false;
    box144 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box144.shapeColor = "white";
    box144.visible = false;
    box145 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box145.shapeColor = "white";
    box145.visible = false;
    box146 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box146.shapeColor = "white";
    box146.visible = false;
    box147 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box147.shapeColor = "white";
    box147.visible = false;
    box148 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box148.shapeColor = "white";
    box148.visible = false;
    box149 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box149.shapeColor = "white";
    box149.visible = false;
    box150 = createSprite(random(250,windowWidth*25),757.5,80,50);
    box150.shapeColor = "white";
    box150.visible = false;


    
    
    enemySpy.velocityX = -5;
    

}

function draw(){
    background("Black");
    
    if(frameCount<1800){
        background("black");
        gameState = "intro";

        fill("white");
        stroke("blue");
        textSize(80);
        text("Agent Square To The Rescue",500,130);
        text("__________________________",450,150);

        fill("lightGrey");
        stroke("grey");
        textSize(50); - 20


     - 20  
        text("This is the Game where you are an Agent. The agent is on a mission to find",150,300 - 20);
        text("a very secret information from the enemies for which he needs to pass from",150,360 - 20);
        text("all the obstacles and most importantly, keep himself away from the sight",150,420 - 20);
        text("of the enemy's spy. To be safe from the spy, he needs to camoflouge by",150,480 - 20);
        text("hiding by colliding with the boxes in its way so that the enemy spy can",150,540 - 20);
        text("not detect him. If the enemy spy locates him then, he will have to restart",150,600 - 20);
        text("his deadly journey from the beginning.",150,660 - 20);

        textSize(80);
        stroke("lightGreen");
        fill("green");
        text("Good Luck Agent !!!",580,760);
        stroke("red");
        fill("orange");
        text("Good Luck Agent !!!",585,765);

    }

    if(frameCount>1800 && frameCount<2600){
        textSize(100);
        fill("Blue");
        text("Loading",760,420);


        if(frameCount >= 1900 && frameCount <= 2200){
            textSize(100);
            fill("Blue");
            text(".",1150,420);
        }
        if(frameCount >= 2300 && frameCount <= 2600){
            textSize(100);
            fill("Blue");
            text(".",1150,420);
        }

        if(frameCount >= 2000 && frameCount <= 2200){
            textSize(100);
            fill("Blue");
            text(".",1170,420);
        }
        if(frameCount >= 2400 && frameCount <= 2600){
            textSize(100);
            fill("Blue");
            text(".",1170,420);
        }

        if(frameCount >= 2100 && frameCount <= 2200){
            textSize(100);
            fill("Blue");
            text(".",1190,420);
        }
        if(frameCount >= 2500 && frameCount <= 2600){
            textSize(100);
            fill("Blue");
            text(".",1190,420);
        }
    }

    if(frameCount>2600 && frameCount<2700){
        //if(frameCount>5 & frameCount<10){
        agent.visible = true;
        agentEyeRight.visible = true;
        agentEyeBallRight.visible = true;
        agentEyeLeft.visible = true;
        agentEyeBallLeft.visible = true;

        invisibleGround.visible = false;
        ground.visible = true;

        enemySpy.visible = true;
        enemySpyDetector = false;
        enemyEye.visible = true;
        enemyEyeBall.visible = true;
        mouth1.visible = true;
        mouth2.visible = true;
        mouth3.visible = true;
        horn1.visible = true;
        horn2.visible = true;

        leftEdge.visible = true;
        rightEdge.visible = true;


        box1.visible = true;
        box2.visible = true;
        box3.visible = true;
        box4.visible = true;
        box5.visible = true;
        box6.visible = true;
        box7.visible = true;
        box8.visible = true;
        box9.visible = true;
        box10.visible = true;
        box11.visible = true;
        box12.visible = true;
        box13.visible = true;
        box14.visible = true;
        box15.visible = true;
        box16.visible = true;
        box17.visible = true;
        box18.visible = true;
        box19.visible = true;
        box20.visible = true;
        box21.visible = true;
        box22.visible = true;
        box23.visible = true;
        box24.visible = true;
        box25.visible = true;
        box26.visible = true;
        box27.visible = true;
        box28.visible = true;
        box29.visible = true;
        box30.visible = true;
        box31.visible = true;
        box32.visible = true;
        box33.visible = true;
        box34.visible = true;
        box35.visible = true;
        box36.visible = true;
        box37.visible = true;
        box38.visible = true;
        box39.visible = true;
        box40.visible = true;
        box41.visible = true;
        box42.visible = true;
        box43.visible = true;
        box44.visible = true;
        box45.visible = true;
        box46.visible = true;
        box47.visible = true;
        box48.visible = true;
        box49.visible = true;
        box50.visible = true;

        box51.visible = true;
        box52.visible = true;
        box53.visible = true;
        box54.visible = true;
        box55.visible = true;
        box56.visible = true;
        box57.visible = true;
        box58.visible = true;
        box59.visible = true;
        box60.visible = true;
        box61.visible = true;
        box62.visible = true;
        box63.visible = true;
        box64.visible = true;
        box65.visible = true;
        box66.visible = true;
        box67.visible = true;
        box68.visible = true;
        box69.visible = true;
        box70.visible = true;
        box71.visible = true;
        box72.visible = true;
        box73.visible = true;
        box74.visible = true;
        box75.visible = true;
        box76.visible = true;
        box77.visible = true;
        box78.visible = true;
        box79.visible = true;
        box80.visible = true;
        box81.visible = true;
        box82.visible = true;
        box83.visible = true;
        box84.visible = true;
        box85.visible = true;
        box86.visible = true;
        box87.visible = true;
        box88.visible = true;
        box89.visible = true;
        box90.visible = true;
        box91.visible = true;
        box92.visible = true;
        box93.visible = true;
        box94.visible = true;
        box95.visible = true;
        box96.visible = true;
        box97.visible = true;
        box98.visible = true;
        box99.visible = true;
        box100.visible = true;

        box101.visible = true;
        box102.visible = true;
        box103.visible = true;
        box104.visible = true;
        box105.visible = true;
        box106.visible = true;
        box107.visible = true;
        box108.visible = true;
        box109.visible = true;
        box110.visible = true;
        box111.visible = true;
        box112.visible = true;
        box113.visible = true;
        box114.visible = true;
        box115.visible = true;
        box116.visible = true;
        box117.visible = true;
        box118.visible = true;
        box119.visible = true;
        box120.visible = true;
        box121.visible = true;
        box122.visible = true;
        box123.visible = true;
        box124.visible = true;
        box125.visible = true;
        box126.visible = true;
        box127.visible = true;
        box128.visible = true;
        box129.visible = true;
        box130.visible = true;
        box131.visible = true;
        box132.visible = true;
        box133.visible = true;
        box134.visible = true;
        box135.visible = true;
        box136.visible = true;
        box137.visible = true;
        box138.visible = true;
        box139.visible = true;
        box140.visible = true;
        box141.visible = true;
        box142.visible = true;
        box143.visible = true;
        box144.visible = true;
        box145.visible = true;
        box146.visible = true;
        box147.visible = true;
        box148.visible = true;
        box149.visible = true;
        box150.visible = true;
        
        }



    enemyEye.x = enemySpy.x;
    enemyEye.y = enemySpy.y - 10;
    enemyEye.depth = enemySpy.depth+1;

    enemyEyeBall.x = enemySpy.x;
    enemyEyeBall.y = enemySpy.y-10;
    enemyEyeBall.depth = enemyEye.depth+1;

    mouth1.x = enemySpy.x;
    mouth1.y = enemySpy.y * 1.12;
    mouth1.depth = enemySpy.depth+1;
    mouth2.x = enemySpy.x - 15;
    mouth2.y = enemySpy.y * 1.13;
    mouth2.depth = enemySpy.depth+1;
    mouth3.x = enemySpy.x + 15;
    mouth3.y = enemySpy.y * 1.13;
    mouth3.depth = enemySpy.depth+1;

    horn1.x = mouth2.x - 5;
    horn1.y = enemySpy.y - 45;
    horn1.depth = enemySpy.depth+1;
    horn2.x = mouth3.x + 5;
    horn2.y = enemySpy.y - 45;
    horn2.depth = enemySpy.depth+1;


    enemySpyDetectorDetector.depth = enemySpy.depth - 1;
    ground.depth = agent.depth-1;
    //agent.depth = ground.depth+1;


    agentEyeBallLeft.x = agent.x-10;
    agentEyeBallLeft.y = agent.y-10;
    agentEyeLeft.x = agent.x-10;
    agentEyeLeft.y = agent.y-10;

    agentEyeBallRight.x = agent.x+10;
    agentEyeBallRight.y = agent.y-10;
    agentEyeRight.x = agent.x+10;
    agentEyeRight.y = agent.y-10;

    agent.collide(invisibleGround);
    agent.velocityY = agent.velocityY + 0.8;

    agent.debug = false;
    agent.setCollider("rectangle",0,0,agent.width-15,agent.height-15);


    box1.debug = false;
    box1.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box2.debug = false;
    box2.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box3.debug = false;
    box3.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box4.debug = false;
    box4.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box5.debug = false;
    box5.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box6.debug = false;
    box6.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box7.debug = false;
    box7.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box8.debug = false;
    box8.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box9.debug = false;
    box9.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box10.debug = false;
    box10.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box11.debug = false;
    box11.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box12.debug = false;
    box12.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box13.debug = false;
    box13.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box14.debug = false;
    box14.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box15.debug = false;
    box15.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box16.debug = false;
    box16.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box17.debug = false;
    box17.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box18.debug = false;
    box18.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box19.debug = false;
    box19.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box20.debug = false;
    box20.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box21.debug = false;
    box21.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box22.debug = false;
    box22.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box23.debug = false;
    box23.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box24.debug = false;
    box24.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box25.debug = false;
    box25.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box26.debug = false;
    box26.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box27.debug = false;
    box27.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box28.debug = false;
    box28.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box29.debug = false;
    box29.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box30.debug = false;
    box30.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box31.debug = false;
    box31.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box32.debug = false;
    box32.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box33.debug = false;
    box33.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box34.debug = false;
    box34.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box35.debug = false;
    box35.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box36.debug = false;
    box36.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box37.debug = false;
    box37.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box38.debug = false;
    box38.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box39.debug = false;
    box39.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box40.debug = false;
    box40.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box41.debug = false;
    box41.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box42.debug = false;
    box42.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box43.debug = false;
    box43.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box44.debug = false;
    box44.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box45.debug = false;
    box45.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box46.debug = false;
    box46.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box47.debug = false;
    box47.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box48.debug = false;
    box48.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box49.debug = false;
    box49.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box50.debug = false;
    box50.setCollider("rectangle",0,0,box1.width-5,box1.height-5);

    box51.debug = false;
    box51.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box52.debug = false;
    box52.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box53.debug = false;
    box53.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box54.debug = false;
    box54.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box55.debug = false;
    box55.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box56.debug = false;
    box56.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box57.debug = false;
    box57.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box58.debug = false;
    box58.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box59.debug = false;
    box59.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box60.debug = false;
    box60.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box61.debug = false;
    box61.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box62.debug = false;
    box62.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box63.debug = false;
    box63.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box64.debug = false;
    box64.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box65.debug = false;
    box65.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box66.debug = false;
    box66.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box67.debug = false;
    box67.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box68.debug = false;
    box68.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box69.debug = false;
    box69.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box70.debug = false;
    box70.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box71.debug = false;
    box71.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box72.debug = false;
    box72.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box73.debug = false;
    box73.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box74.debug = false;
    box74.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box75.debug = false;
    box75.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box76.debug = false;
    box76.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box77.debug = false;
    box77.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box78.debug = false;
    box78.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box79.debug = false;
    box79.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box80.debug = false;
    box80.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box81.debug = false;
    box81.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box82.debug = false;
    box82.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box83.debug = false;
    box83.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box84.debug = false;
    box84.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box85.debug = false;
    box85.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box86.debug = false;
    box86.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box87.debug = false;
    box87.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box88.debug = false;
    box88.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box89.debug = false;
    box89.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box90.debug = false;
    box90.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box91.debug = false;
    box91.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box92.debug = false;
    box92.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box93.debug = false;
    box93.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box94.debug = false;
    box94.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box95.debug = false;
    box95.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box96.debug = false;
    box96.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box97.debug = false;
    box97.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box98.debug = false;
    box98.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box99.debug = false;
    box99.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box100.debug = false;
    box100.setCollider("rectangle",0,0,box1.width-5,box1.height-5);

    box101.debug = false;
    box101.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box102.debug = false;
    box102.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box103.debug = false;
    box103.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box104.debug = false;
    box104.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box105.debug = false;
    box105.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box106.debug = false;
    box106.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box107.debug = false;
    box107.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box108.debug = false;
    box108.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box109.debug = false;
    box109.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box110.debug = false;
    box110.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box111.debug = false;
    box111.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box112.debug = false;
    box112.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box113.debug = false;
    box113.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box114.debug = false;
    box114.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box115.debug = false;
    box115.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box116.debug = false;
    box116.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box117.debug = false;
    box117.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box118.debug = false;
    box118.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box119.debug = false;
    box119.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box120.debug = false;
    box120.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box121.debug = false;
    box121.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box122.debug = false;
    box122.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box123.debug = false;
    box123.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box124.debug = false;
    box124.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box125.debug = false;
    box125.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box126.debug = false;
    box126.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box127.debug = false;
    box127.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box128.debug = false;
    box128.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box129.debug = false;
    box129.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box130.debug = false;
    box130.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box131.debug = false;
    box131.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box132.debug = false;
    box132.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box133.debug = false;
    box133.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box134.debug = false;
    box134.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box135.debug = false;
    box135.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box136.debug = false;
    box136.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box137.debug = false;
    box137.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box138.debug = false;
    box138.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box139.debug = false;
    box139.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box140.debug = false;
    box140.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box141.debug = false;
    box141.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box142.debug = false;
    box142.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box143.debug = false;
    box143.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box144.debug = false;
    box144.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box145.debug = false;
    box145.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box146.debug = false;
    box146.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box147.debug = false;
    box147.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box148.debug = false;
    box148.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box149.debug = false;
    box149.setCollider("rectangle",0,0,box1.width-5,box1.height-5);
    box150.debug = false;
    box150.setCollider("rectangle",0,0,box1.width-5,box1.height-5);



    console.log(gameState);

    
    enemySpy.bounceOff(leftEdge);
    enemySpy.bounceOff(rightEdge);
    enemySpyDetectorDetector.bounceOff(leftEdge);
    enemySpyDetectorDetector.bounceOff(rightEdge);
    if(frameCount >=2601){
    enemySpyDetectorDetector.x = enemySpy.x;
    }



    if(distanceTravelled <= 500 && distanceTravelled >= 1){
        background("indigo");
    }
    if(distanceTravelled <= 1000 && distanceTravelled >= 500){
        background("black");
        ground.shapeColor = "lightPink"
    }
    if(distanceTravelled <= 1500 && distanceTravelled >= 1000){
        background("lightPink");
        ground.shapeColor = "black";
    }
    if(distanceTravelled <= 1990 && distanceTravelled >= 1500){

        if(frameCount % 3 === 0 ){
        background("yellow");
        ground.shapeColor = "black";
    }else{
        background("purple");
        ground.shapeColor = "white";
    }
    }
    if(distanceTravelled <= 2001 && distanceTravelled >= 1991){
        background("black");
        ground.shapeColor = "brown";
    }
    if(distanceTravelled >= 2002){
        background("cyan");
        ground.shapeColor = "green";
    }



    if(gameState !== "intro" && (box1.isTouching(agent) || agent.isTouching(box1) ||
    box2.isTouching(agent) || agent.isTouching(box2) ||
    box3.isTouching(agent) || agent.isTouching(box3) ||
    box4.isTouching(agent) || agent.isTouching(box4) ||
    box5.isTouching(agent) || agent.isTouching(box5) ||
    box6.isTouching(agent) || agent.isTouching(box6) ||
    box7.isTouching(agent) || agent.isTouching(box7) ||
    box8.isTouching(agent) || agent.isTouching(box8) ||
    box9.isTouching(agent) || agent.isTouching(box9) ||
    box10.isTouching(agent) || agent.isTouching(box10) ||
    box11.isTouching(agent) || agent.isTouching(box11) ||
    box12.isTouching(agent) || agent.isTouching(box12) ||
    box13.isTouching(agent) || agent.isTouching(box13) ||
    box14.isTouching(agent) || agent.isTouching(box14) ||
    box15.isTouching(agent) || agent.isTouching(box15) ||
    box16.isTouching(agent) || agent.isTouching(box16) ||
    box17.isTouching(agent) || agent.isTouching(box17) ||
    box18.isTouching(agent) || agent.isTouching(box18) ||
    box19.isTouching(agent) || agent.isTouching(box19) ||
    box20.isTouching(agent) || agent.isTouching(box20) ||
    box21.isTouching(agent) || agent.isTouching(box21) ||
    box22.isTouching(agent) || agent.isTouching(box22) ||
    box23.isTouching(agent) || agent.isTouching(box23) ||
    box24.isTouching(agent) || agent.isTouching(box24) ||
    box25.isTouching(agent) || agent.isTouching(box25) ||
    box26.isTouching(agent) || agent.isTouching(box26) ||
    box27.isTouching(agent) || agent.isTouching(box27) ||
    box28.isTouching(agent) || agent.isTouching(box28) ||
    box29.isTouching(agent) || agent.isTouching(box29) ||
    box30.isTouching(agent) || agent.isTouching(box30) ||
    box31.isTouching(agent) || agent.isTouching(box31) ||
    box32.isTouching(agent) || agent.isTouching(box32) ||
    box33.isTouching(agent) || agent.isTouching(box33) ||
    box34.isTouching(agent) || agent.isTouching(box34) ||
    box35.isTouching(agent) || agent.isTouching(box35) ||
    box36.isTouching(agent) || agent.isTouching(box36) ||
    box37.isTouching(agent) || agent.isTouching(box37) ||
    box38.isTouching(agent) || agent.isTouching(box38) ||
    box39.isTouching(agent) || agent.isTouching(box39) ||
    box40.isTouching(agent) || agent.isTouching(box40) ||
    box41.isTouching(agent) || agent.isTouching(box41) ||
    box42.isTouching(agent) || agent.isTouching(box42) ||
    box43.isTouching(agent) || agent.isTouching(box43) ||
    box44.isTouching(agent) || agent.isTouching(box44) ||
    box45.isTouching(agent) || agent.isTouching(box45) ||
    box46.isTouching(agent) || agent.isTouching(box46) ||
    box47.isTouching(agent) || agent.isTouching(box47) ||
    box48.isTouching(agent) || agent.isTouching(box48) ||
    box49.isTouching(agent) || agent.isTouching(box49) ||
    box50.isTouching(agent) || agent.isTouching(box50) ||
    box51.isTouching(agent) || agent.isTouching(box51) ||
    box52.isTouching(agent) || agent.isTouching(box52) ||
    box53.isTouching(agent) || agent.isTouching(box53) ||
    box54.isTouching(agent) || agent.isTouching(box54) ||
    box55.isTouching(agent) || agent.isTouching(box55) ||
    box56.isTouching(agent) || agent.isTouching(box56) ||
    box57.isTouching(agent) || agent.isTouching(box57) ||
    box58.isTouching(agent) || agent.isTouching(box58) ||
    box59.isTouching(agent) || agent.isTouching(box59) ||
    box60.isTouching(agent) || agent.isTouching(box60) ||
    box61.isTouching(agent) || agent.isTouching(box61) ||
    box62.isTouching(agent) || agent.isTouching(box62) ||
    box63.isTouching(agent) || agent.isTouching(box63) ||
    box64.isTouching(agent) || agent.isTouching(box64) ||
    box65.isTouching(agent) || agent.isTouching(box65) ||
    box66.isTouching(agent) || agent.isTouching(box66) ||
    box67.isTouching(agent) || agent.isTouching(box67) ||
    box68.isTouching(agent) || agent.isTouching(box68) ||
    box69.isTouching(agent) || agent.isTouching(box69) ||
    box70.isTouching(agent) || agent.isTouching(box70) ||
    box71.isTouching(agent) || agent.isTouching(box71) ||
    box72.isTouching(agent) || agent.isTouching(box72) ||
    box73.isTouching(agent) || agent.isTouching(box73) ||
    box74.isTouching(agent) || agent.isTouching(box74) ||
    box75.isTouching(agent) || agent.isTouching(box75) ||
    box76.isTouching(agent) || agent.isTouching(box76) ||
    box77.isTouching(agent) || agent.isTouching(box77) ||
    box78.isTouching(agent) || agent.isTouching(box78) ||
    box79.isTouching(agent) || agent.isTouching(box79) ||
    box80.isTouching(agent) || agent.isTouching(box80) ||
    box81.isTouching(agent) || agent.isTouching(box81) ||
    box82.isTouching(agent) || agent.isTouching(box82) ||
    box83.isTouching(agent) || agent.isTouching(box83) ||
    box84.isTouching(agent) || agent.isTouching(box84) ||
    box85.isTouching(agent) || agent.isTouching(box85) ||
    box86.isTouching(agent) || agent.isTouching(box86) ||
    box87.isTouching(agent) || agent.isTouching(box87) ||
    box88.isTouching(agent) || agent.isTouching(box88) ||
    box89.isTouching(agent) || agent.isTouching(box89) ||
    box90.isTouching(agent) || agent.isTouching(box90) ||
    box91.isTouching(agent) || agent.isTouching(box91) ||
    box92.isTouching(agent) || agent.isTouching(box92) ||
    box93.isTouching(agent) || agent.isTouching(box93) ||
    box94.isTouching(agent) || agent.isTouching(box94) ||
    box95.isTouching(agent) || agent.isTouching(box95) ||
    box96.isTouching(agent) || agent.isTouching(box96) ||
    box97.isTouching(agent) || agent.isTouching(box97) ||
    box98.isTouching(agent) || agent.isTouching(box98) ||
    box99.isTouching(agent) || agent.isTouching(box99) ||
    box100.isTouching(agent) || agent.isTouching(box100) ||
    box101.isTouching(agent) || agent.isTouching(box101) ||
    box102.isTouching(agent) || agent.isTouching(box102) ||
    box103.isTouching(agent) || agent.isTouching(box103) ||
    box104.isTouching(agent) || agent.isTouching(box104) ||
    box105.isTouching(agent) || agent.isTouching(box105) ||
    box106.isTouching(agent) || agent.isTouching(box106) ||
    box107.isTouching(agent) || agent.isTouching(box107) ||
    box108.isTouching(agent) || agent.isTouching(box108) ||
    box109.isTouching(agent) || agent.isTouching(box109) ||
    box110.isTouching(agent) || agent.isTouching(box110) ||
    box111.isTouching(agent) || agent.isTouching(box111) ||
    box112.isTouching(agent) || agent.isTouching(box112) ||
    box113.isTouching(agent) || agent.isTouching(box113) ||
    box114.isTouching(agent) || agent.isTouching(box114) ||
    box115.isTouching(agent) || agent.isTouching(box115) ||
    box116.isTouching(agent) || agent.isTouching(box116) ||
    box117.isTouching(agent) || agent.isTouching(box117) ||
    box118.isTouching(agent) || agent.isTouching(box118) ||
    box119.isTouching(agent) || agent.isTouching(box119) ||
    box120.isTouching(agent) || agent.isTouching(box120) ||
    box121.isTouching(agent) || agent.isTouching(box121) ||
    box122.isTouching(agent) || agent.isTouching(box122) ||
    box123.isTouching(agent) || agent.isTouching(box123) ||
    box124.isTouching(agent) || agent.isTouching(box124) ||
    box125.isTouching(agent) || agent.isTouching(box125) ||
    box126.isTouching(agent) || agent.isTouching(box126) ||
    box127.isTouching(agent) || agent.isTouching(box127) ||
    box128.isTouching(agent) || agent.isTouching(box128) ||
    box129.isTouching(agent) || agent.isTouching(box129) ||
    box130.isTouching(agent) || agent.isTouching(box130) ||
    box131.isTouching(agent) || agent.isTouching(box131) ||
    box132.isTouching(agent) || agent.isTouching(box132) ||
    box133.isTouching(agent) || agent.isTouching(box133) ||
    box134.isTouching(agent) || agent.isTouching(box134) ||
    box135.isTouching(agent) || agent.isTouching(box135) ||
    box136.isTouching(agent) || agent.isTouching(box136) ||
    box137.isTouching(agent) || agent.isTouching(box137) ||
    box138.isTouching(agent) || agent.isTouching(box138) ||
    box139.isTouching(agent) || agent.isTouching(box139) ||
    box140.isTouching(agent) || agent.isTouching(box140) ||
    box141.isTouching(agent) || agent.isTouching(box141) ||
    box142.isTouching(agent) || agent.isTouching(box142) ||
    box143.isTouching(agent) || agent.isTouching(box143) ||
    box144.isTouching(agent) || agent.isTouching(box144) ||
    box145.isTouching(agent) || agent.isTouching(box145) ||
    box146.isTouching(agent) || agent.isTouching(box146) ||
    box147.isTouching(agent) || agent.isTouching(box147) ||
    box148.isTouching(agent) || agent.isTouching(box148) ||
    box149.isTouching(agent) || agent.isTouching(box149) ||
    box150.isTouching(agent) || agent.isTouching(box150) ) ){



        if(box1.isTouching(agent) || agent.isTouching(box1)){
            agent.collide(box1);
            box1.collide(agent);
        }
        else if(box2.isTouching(agent) || agent.isTouching(box2)){
            agent.collide(box2);
            box2.collide(agent);
        }
        else if(box3.isTouching(agent) || agent.isTouching(box3)){
            agent.collide(box3);
            box3.collide(agent);
        }
        else if(box4.isTouching(agent) || agent.isTouching(box4)){
            agent.collide(box4);
            box4.collide(agent);
        }
        else if(box5.isTouching(agent) || agent.isTouching(box5)){
            agent.collide(box5);
            box5.collide(agent);
        }
        else if(box6.isTouching(agent) || agent.isTouching(box6)){
            agent.collide(box6);
            box6.collide(agent);
        }
        else if(box7.isTouching(agent) || agent.isTouching(box7)){
            agent.collide(box7);
            box7.collide(agent);
        }
        else if(box8.isTouching(agent) || agent.isTouching(box8)){
            agent.collide(box8);
            box8.collide(agent);
        }
        else if(box9.isTouching(agent) || agent.isTouching(box9)){
            agent.collide(box9);
            box9.collide(agent);
        }
        else if(box10.isTouching(agent) || agent.isTouching(box10)){
            agent.collide(box10);
            box10.collide(agent);
        }
        else if(box11.isTouching(agent) || agent.isTouching(box11)){
            agent.collide(box11);
            box11.collide(agent);
        }
        else if(box12.isTouching(agent) || agent.isTouching(box12)){
            agent.collide(box12);
            box12.collide(agent);
        }
        else if(box13.isTouching(agent) || agent.isTouching(box13)){
            agent.collide(box13);
            box13.collide(agent);
        }
        else if(box14.isTouching(agent) || agent.isTouching(box14)){
            agent.collide(box14);
            box14.collide(agent);
        }
        else if(box15.isTouching(agent) || agent.isTouching(box15)){
            agent.collide(box15);
            box15.collide(agent);
        }
        else if(box16.isTouching(agent) || agent.isTouching(box16)){
            agent.collide(box16);
            box16.collide(agent);
        }
        else if(box17.isTouching(agent) || agent.isTouching(box17)){
            agent.collide(box17);
            box17.collide(agent);
        }
        else if(box18.isTouching(agent) || agent.isTouching(box18)){
            agent.collide(box18);
            box18.collide(agent);
        }
        else if(box19.isTouching(agent) || agent.isTouching(box19)){
            agent.collide(box19);
            box19.collide(agent);
        }
        else if(box20.isTouching(agent) || agent.isTouching(box20)){
            agent.collide(box20);
            box20.collide(agent);
        }
        else if(box21.isTouching(agent) || agent.isTouching(box21)){
            agent.collide(box21);
            box21.collide(agent);
        }
        else if(box22.isTouching(agent) || agent.isTouching(box22)){
            agent.collide(box22);
            box22.collide(agent);
        }
        else if(box23.isTouching(agent) || agent.isTouching(box23)){
            agent.collide(box23);
            box23.collide(agent);
        }
        else if(box24.isTouching(agent) || agent.isTouching(box24)){
            agent.collide(box24);
            box24.collide(agent);
        }
        else if(box25.isTouching(agent) || agent.isTouching(box25)){
            agent.collide(box25);
            box25.collide(agent);
        }
        else if(box26.isTouching(agent) || agent.isTouching(box26)){
            agent.collide(box26);
            box26.collide(agent);
        }
        else if(box27.isTouching(agent) || agent.isTouching(box27)){
            agent.collide(box27);
            box27.collide(agent);
        }
        else if(box28.isTouching(agent) || agent.isTouching(box28)){
            agent.collide(box28);
            box28.collide(agent);
        }
        else if(box29.isTouching(agent) || agent.isTouching(box29)){
            agent.collide(box29);
            box29.collide(agent);
        }
        else if(box30.isTouching(agent) || agent.isTouching(box30)){
            agent.collide(box30);
            box30.collide(agent);
        }
        else if(box31.isTouching(agent) || agent.isTouching(box31)){
            agent.collide(box31);
            box31.collide(agent);
        }
        else if(box32.isTouching(agent) || agent.isTouching(box32)){
            agent.collide(box32);
            box32.collide(agent);
        }
        else if(box33.isTouching(agent) || agent.isTouching(box33)){
            agent.collide(box33);
            box33.collide(agent);
        }
        else if(box34.isTouching(agent) || agent.isTouching(box34)){
            agent.collide(box34);
            box34.collide(agent);
        }
        else if(box35.isTouching(agent) || agent.isTouching(box35)){
            agent.collide(box35);
            box35.collide(agent);
        }
        else if(box36.isTouching(agent) || agent.isTouching(box36)){
            agent.collide(box36);
            box36.collide(agent);
        }
        else if(box37.isTouching(agent) || agent.isTouching(box37)){
            agent.collide(box37);
            box37.collide(agent);
        }
        else if(box38.isTouching(agent) || agent.isTouching(box38)){
            agent.collide(box38);
            box38.collide(agent);
        }
        else if(box39.isTouching(agent) || agent.isTouching(box39)){
            agent.collide(box39);
            box39.collide(agent);
        }
        else if(box40.isTouching(agent) || agent.isTouching(box40)){
            agent.collide(box40);
            box40.collide(agent);
        }
        else if(box41.isTouching(agent) || agent.isTouching(box41)){
            agent.collide(box41);
            box41.collide(agent);
        }
        else if(box42.isTouching(agent) || agent.isTouching(box42)){
            agent.collide(box42);
            box42.collide(agent);
        }
        else if(box43.isTouching(agent) || agent.isTouching(box43)){
            agent.collide(box43);
            box43.collide(agent);
        }
        else if(box44.isTouching(agent) || agent.isTouching(box44)){
            agent.collide(box44);
            box44.collide(agent);
        }
        else if(box45.isTouching(agent) || agent.isTouching(box45)){
            agent.collide(box45);
            box45.collide(agent);
        }
        else if(box46.isTouching(agent) || agent.isTouching(box46)){
            agent.collide(box46);
            box46.collide(agent);
        }
        else if(box47.isTouching(agent) || agent.isTouching(box47)){
            agent.collide(box47);
            box47.collide(agent);
        }
        else if(box48.isTouching(agent) || agent.isTouching(box48)){
            agent.collide(box48);
            box48.collide(agent);
        }
        else if(box49.isTouching(agent) || agent.isTouching(box49)){
            agent.collide(box49);
            box49.collide(agent);
        }
        else if(box50.isTouching(agent) || agent.isTouching(box50)){
            agent.collide(box50);
            box50.collide(agent);
        }
        else if(box51.isTouching(agent) || agent.isTouching(box51)){
            agent.collide(box51);
            box51.collide(agent);
        }
        else if(box52.isTouching(agent) || agent.isTouching(box52)){
            agent.collide(box52);
            box52.collide(agent);
        }
        else if(box53.isTouching(agent) || agent.isTouching(box53)){
            agent.collide(box53);
            box53.collide(agent);
        }
        else if(box54.isTouching(agent) || agent.isTouching(box54)){
            agent.collide(box54);
            box54.collide(agent);
        }
        else if(box55.isTouching(agent) || agent.isTouching(box55)){
            agent.collide(box55);
            box55.collide(agent);
        }
        else if(box56.isTouching(agent) || agent.isTouching(box56)){
            agent.collide(box56);
            box56.collide(agent);
        }
        else if(box57.isTouching(agent) || agent.isTouching(box57)){
            agent.collide(box57);
            box57.collide(agent);
        }
        else if(box58.isTouching(agent) || agent.isTouching(box58)){
            agent.collide(box58);
            box58.collide(agent);
        }
        else if(box59.isTouching(agent) || agent.isTouching(box59)){
            agent.collide(box59);
            box59.collide(agent);
        }
        else if(box60.isTouching(agent) || agent.isTouching(box60)){
            agent.collide(box60);
            box60.collide(agent);
        }
        else if(box61.isTouching(agent) || agent.isTouching(box61)){
            agent.collide(box61);
            box61.collide(agent);
        }
        else if(box62.isTouching(agent) || agent.isTouching(box62)){
            agent.collide(box62);
            box62.collide(agent);
        }
        else if(box63.isTouching(agent) || agent.isTouching(box63)){
            agent.collide(box63);
            box63.collide(agent);
        }
        else if(box64.isTouching(agent) || agent.isTouching(box64)){
            agent.collide(box64);
            box64.collide(agent);
        }
        else if(box65.isTouching(agent) || agent.isTouching(box65)){
            agent.collide(box65);
            box65.collide(agent);
        }
        else if(box66.isTouching(agent) || agent.isTouching(box66)){
            agent.collide(box66);
            box66.collide(agent);
        }
        else if(box67.isTouching(agent) || agent.isTouching(box67)){
            agent.collide(box67);
            box67.collide(agent);
        }
        else if(box68.isTouching(agent) || agent.isTouching(box68)){
            agent.collide(box68);
            box68.collide(agent);
        }
        else if(box69.isTouching(agent) || agent.isTouching(box69)){
            agent.collide(box69);
            box69.collide(agent);
        }
        else if(box70.isTouching(agent) || agent.isTouching(box70)){
            agent.collide(box70);
            box70.collide(agent);
        }
        else if(box71.isTouching(agent) || agent.isTouching(box71)){
            agent.collide(box71);
            box71.collide(agent);
        }
        else if(box72.isTouching(agent) || agent.isTouching(box72)){
            agent.collide(box72);
            box72.collide(agent);
        }
        else if(box73.isTouching(agent) || agent.isTouching(box73)){
            agent.collide(box73);
            box73.collide(agent);
        }
        else if(box74.isTouching(agent) || agent.isTouching(box74)){
            agent.collide(box74);
            box74.collide(agent);
        }
        else if(box75.isTouching(agent) || agent.isTouching(box75)){
            agent.collide(box75);
            box75.collide(agent);
        }
        else if(box76.isTouching(agent) || agent.isTouching(box76)){
            agent.collide(box76);
            box76.collide(agent);
        }
        else if(box77.isTouching(agent) || agent.isTouching(box77)){
            agent.collide(box77);
            box77.collide(agent);
        }
        else if(box78.isTouching(agent) || agent.isTouching(box78)){
            agent.collide(box78);
            box78.collide(agent);
        }
        else if(box79.isTouching(agent) || agent.isTouching(box79)){
            agent.collide(box79);
            box79.collide(agent);
        }
        else if(box80.isTouching(agent) || agent.isTouching(box80)){
            agent.collide(box80);
            box80.collide(agent);
        }
        else if(box81.isTouching(agent) || agent.isTouching(box81)){
            agent.collide(box81);
            box81.collide(agent);
        }
        else if(box82.isTouching(agent) || agent.isTouching(box82)){
            agent.collide(box82);
            box82.collide(agent);
        }
        else if(box83.isTouching(agent) || agent.isTouching(box83)){
            agent.collide(box83);
            box83.collide(agent);
        }
        else if(box84.isTouching(agent) || agent.isTouching(box84)){
            agent.collide(box84);
            box84.collide(agent);
        }
        else if(box85.isTouching(agent) || agent.isTouching(box85)){
            agent.collide(box85);
            box85.collide(agent);
        }
        else if(box86.isTouching(agent) || agent.isTouching(box86)){
            agent.collide(box86);
            box86.collide(agent);
        }
        else if(box87.isTouching(agent) || agent.isTouching(box87)){
            agent.collide(box87);
            box87.collide(agent);
        }
        else if(box88.isTouching(agent) || agent.isTouching(box88)){
            agent.collide(box88);
            box88.collide(agent);
        }
        else if(box89.isTouching(agent) || agent.isTouching(box89)){
            agent.collide(box89);
            box89.collide(agent);
        }
        else if(box90.isTouching(agent) || agent.isTouching(box90)){
            agent.collide(box90);
            box90.collide(agent);
        }
        else if(box91.isTouching(agent) || agent.isTouching(box91)){
            agent.collide(box91);
            box91.collide(agent);
        }
        else if(box92.isTouching(agent) || agent.isTouching(box92)){
            agent.collide(box92);
            box92.collide(agent);
        }
        else if(box93.isTouching(agent) || agent.isTouching(box93)){
            agent.collide(box93);
            box93.collide(agent);
        }
        else if(box94.isTouching(agent) || agent.isTouching(box94)){
            agent.collide(box94);
            box94.collide(agent);
        }
        else if(box95.isTouching(agent) || agent.isTouching(box95)){
            agent.collide(box95);
            box95.collide(agent);
        }
        else if(box96.isTouching(agent) || agent.isTouching(box96)){
            agent.collide(box96);
            box96.collide(agent);
        }
        else if(box97.isTouching(agent) || agent.isTouching(box97)){
            agent.collide(box97);
            box97.collide(agent);
        }
        else if(box98.isTouching(agent) || agent.isTouching(box98)){
            agent.collide(box98);
            box98.collide(agent);
        }
        else if(box99.isTouching(agent) || agent.isTouching(box99)){
            agent.collide(box99);
            box99.collide(agent);
        }
        else if(box100.isTouching(agent) || agent.isTouching(box100)){
            agent.collide(box100);
            box100.collide(agent);
        }
        else if(box101.isTouching(agent) || agent.isTouching(box101)){
            agent.collide(box101);
            box101.collide(agent);
        }
        else if(box102.isTouching(agent) || agent.isTouching(box102)){
            agent.collide(box102);
            box102.collide(agent);
        }
        else if(box103.isTouching(agent) || agent.isTouching(box103)){
            agent.collide(box103);
            box103.collide(agent);
        }
        else if(box104.isTouching(agent) || agent.isTouching(box104)){
            agent.collide(box104);
            box104.collide(agent);
        }
        else if(box105.isTouching(agent) || agent.isTouching(box105)){
            agent.collide(box105);
            box105.collide(agent);
        }
        else if(box106.isTouching(agent) || agent.isTouching(box106)){
            agent.collide(box106);
            box106.collide(agent);
        }
        else if(box107.isTouching(agent) || agent.isTouching(box107)){
            agent.collide(box107);
            box107.collide(agent);
        }
        else if(box108.isTouching(agent) || agent.isTouching(box108)){
            agent.collide(box108);
            box108.collide(agent);
        }
        else if(box109.isTouching(agent) || agent.isTouching(box109)){
            agent.collide(box109);
            box109.collide(agent);
        }
        else if(box110.isTouching(agent) || agent.isTouching(box110)){
            agent.collide(box110);
            box110.collide(agent);
        }
        else if(box111.isTouching(agent) || agent.isTouching(box111)){
            agent.collide(box111);
            box111.collide(agent);
        }
        else if(box12.isTouching(agent) || agent.isTouching(box112)){
            agent.collide(box112);
            box112.collide(agent);
        }
        else if(box113.isTouching(agent) || agent.isTouching(box113)){
            agent.collide(box113);
            box113.collide(agent);
        }
        else if(box114.isTouching(agent) || agent.isTouching(box114)){
            agent.collide(box114);
            box114.collide(agent);
        }
        else if(box115.isTouching(agent) || agent.isTouching(box115)){
            agent.collide(box115);
            box115.collide(agent);
        }
        else if(box116.isTouching(agent) || agent.isTouching(box116)){
            agent.collide(box116);
            box116.collide(agent);
        }
        else if(box117.isTouching(agent) || agent.isTouching(box117)){
            agent.collide(box117);
            box117.collide(agent);
        }
        else if(box118.isTouching(agent) || agent.isTouching(box118)){
            agent.collide(box118);
            box118.collide(agent);
        }
        else if(box119.isTouching(agent) || agent.isTouching(box119)){
            agent.collide(box119);
            box119.collide(agent);
        }
        else if(box120.isTouching(agent) || agent.isTouching(box120)){
            agent.collide(box120);
            box120.collide(agent);
        }
        else if(box121.isTouching(agent) || agent.isTouching(box121)){
            agent.collide(box121);
            box121.collide(agent);
        }
        else if(box122.isTouching(agent) || agent.isTouching(box122)){
            agent.collide(box122);
            box122.collide(agent);
        }
        else if(box123.isTouching(agent) || agent.isTouching(box123)){
            agent.collide(box123);
            box123.collide(agent);
        }
        else if(box124.isTouching(agent) || agent.isTouching(box124)){
            agent.collide(box124);
            box124.collide(agent);
        }
        else if(box125.isTouching(agent) || agent.isTouching(box125)){
            agent.collide(box125);
            box125.collide(agent);
        }
        else if(box126.isTouching(agent) || agent.isTouching(box126)){
            agent.collide(box126);
            box126.collide(agent);
        }
        else if(box127.isTouching(agent) || agent.isTouching(box127)){
            agent.collide(box127);
            box127.collide(agent);
        }
        else if(box128.isTouching(agent) || agent.isTouching(box128)){
            agent.collide(box128);
            box128.collide(agent);
        }
        else if(box129.isTouching(agent) || agent.isTouching(box129)){
            agent.collide(box129);
            box129.collide(agent);
        }
        else if(box130.isTouching(agent) || agent.isTouching(box130)){
            agent.collide(box130);
            box130.collide(agent);
        }
        else if(box131.isTouching(agent) || agent.isTouching(box131)){
            agent.collide(box131);
            box131.collide(agent);
        }
        else if(box132.isTouching(agent) || agent.isTouching(box132)){
            agent.collide(box132);
            box132.collide(agent);
        }
        else if(box133.isTouching(agent) || agent.isTouching(box133)){
            agent.collide(box133);
            box133.collide(agent);
        }
        else if(box134.isTouching(agent) || agent.isTouching(box134)){
            agent.collide(box134);
            box134.collide(agent);
        }
        else if(box135.isTouching(agent) || agent.isTouching(box135)){
            agent.collide(box135);
            box135.collide(agent);
        }
        else if(box136.isTouching(agent) || agent.isTouching(box136)){
            agent.collide(box136);
            box136.collide(agent);
        }
        else if(box137.isTouching(agent) || agent.isTouching(box137)){
            agent.collide(box137);
            box137.collide(agent);
        }
        else if(box138.isTouching(agent) || agent.isTouching(box138)){
            agent.collide(box138);
            box138.collide(agent);
        }
        else if(box139.isTouching(agent) || agent.isTouching(box139)){
            agent.collide(box139);
            box139.collide(agent);
        }
        else if(box140.isTouching(agent) || agent.isTouching(box140)){
            agent.collide(box140);
            box140.collide(agent);
        }
        else if(box141.isTouching(agent) || agent.isTouching(box141)){
            agent.collide(box141);
            box141.collide(agent);
        }
        else if(box142.isTouching(agent) || agent.isTouching(box142)){
            agent.collide(box142);
            box142.collide(agent);
        }
        else if(box143.isTouching(agent) || agent.isTouching(box143)){
            agent.collide(box143);
            box143.collide(agent);
        }
        else if(box144.isTouching(agent) || agent.isTouching(box144)){
            agent.collide(box144);
            box144.collide(agent);
        }
        else if(box145.isTouching(agent) || agent.isTouching(box145)){
            agent.collide(box145);
            box145.collide(agent);
        }
        else if(box146.isTouching(agent) || agent.isTouching(box146)){
            agent.collide(box146);
            box146.collide(agent);
        }
        else if(box147.isTouching(agent) || agent.isTouching(box147)){
            agent.collide(box147);
            box147.collide(agent);
        }
        else if(box148.isTouching(agent) || agent.isTouching(box148)){
            agent.collide(box148);
            box148.collide(agent);
        }
        else if(box149.isTouching(agent) || agent.isTouching(box149)){
            agent.collide(box149);
            box149.collide(agent);
        }
        else if(box150.isTouching(agent) || agent.isTouching(box150)){
            agent.collide(box150);
            box150.collide(agent);
        }





        if(agent.y === 757.5){
        agent.shapeColor = "white";
        gameState = "safe";
    }

}else{
        agent.shapeColor = "lightGrey";
        gameState = "unsafe";
    }









    if(keyDown("space") && agent.y === 757.5){
        agent.velocityY = -10;
        console.log("space bar pressed");
    }


    //for right arrow key
    if(keyIsDown(39) && frameCount % 5 === 0 && gameState !== "intro"){
        console.log("Right arrow key pressed");
        distanceTravelled = distanceTravelled + 5;

        agentEyeRight.visible = true;
        agentEyeBallRight.visible = true;
        agentEyeLeft.visible = false;
        agentEyeBallLeft.visible = false;

        box1.x = box1.x-20;
        box2.x = box2.x-20;
        box3.x = box3.x-20;
        box4.x = box4.x-20;
        box5.x = box5.x-20;
        box6.x = box6.x-20;
        box7.x = box7.x-20;
        box8.x = box8.x-20;
        box9.x = box9.x-20;
        box10.x = box10.x-20;
        box11.x = box11.x-20;
        box12.x = box12.x-20;
        box13.x = box13.x-20;
        box14.x = box14.x-20;
        box15.x = box15.x-20;
        box16.x = box16.x-20;
        box17.x = box17.x-20;
        box18.x = box18.x-20;
        box19.x = box19.x-20;
        box20.x = box20.x-20;
        box21.x = box21.x-20;
        box22.x = box22.x-20;
        box23.x = box23.x-20;
        box24.x = box24.x-20;
        box25.x = box25.x-20;
        box26.x = box26.x-20;
        box27.x = box27.x-20;
        box28.x = box28.x-20;
        box29.x = box29.x-20;
        box30.x = box30.x-20;
        box31.x = box31.x-20;
        box32.x = box32.x-20;
        box33.x = box33.x-20;
        box34.x = box34.x-20;
        box35.x = box35.x-20;
        box36.x = box36.x-20;
        box37.x = box37.x-20;
        box38.x = box38.x-20;
        box39.x = box39.x-20;
        box40.x = box40.x-20;
        box41.x = box41.x-20;
        box42.x = box42.x-20;
        box43.x = box43.x-20;
        box44.x = box44.x-20;
        box45.x = box45.x-20;
        box46.x = box46.x-20;
        box47.x = box47.x-20;
        box48.x = box48.x-20;
        box49.x = box49.x-20;
        box50.x = box50.x-20;
        
        box51.x = box51.x-20;
        box52.x = box52.x-20;
        box53.x = box53.x-20;
        box54.x = box54.x-20;
        box55.x = box55.x-20;
        box56.x = box56.x-20;
        box57.x = box57.x-20;
        box58.x = box58.x-20;
        box59.x = box59.x-20;
        box60.x = box60.x-20;
        box61.x = box61.x-20;
        box62.x = box62.x-20;
        box63.x = box63.x-20;
        box64.x = box64.x-20;
        box65.x = box65.x-20;
        box66.x = box66.x-20;
        box67.x = box67.x-20;
        box68.x = box68.x-20;
        box69.x = box69.x-20;
        box70.x = box70.x-20;
        box71.x = box71.x-20;
        box72.x = box72.x-20;
        box73.x = box73.x-20;
        box74.x = box74.x-20;
        box75.x = box75.x-20;
        box76.x = box76.x-20;
        box77.x = box77.x-20;
        box78.x = box78.x-20;
        box79.x = box79.x-20;
        box80.x = box80.x-20;
        box81.x = box81.x-20;
        box82.x = box82.x-20;
        box83.x = box83.x-20;
        box84.x = box84.x-20;
        box85.x = box85.x-20;
        box86.x = box86.x-20;
        box87.x = box87.x-20;
        box88.x = box88.x-20;
        box89.x = box89.x-20;
        box90.x = box90.x-20;
        box91.x = box91.x-20;
        box92.x = box92.x-20;
        box93.x = box93.x-20;
        box94.x = box94.x-20;
        box95.x = box95.x-20;
        box96.x = box96.x-20;
        box97.x = box97.x-20;
        box98.x = box98.x-20;
        box99.x = box99.x-20;
        box100.x = box100.x-20;

        box101.x = box101.x-20;
        box102.x = box102.x-20;
        box103.x = box103.x-20;
        box104.x = box104.x-20;
        box105.x = box105.x-20;
        box106.x = box106.x-20;
        box107.x = box107.x-20;
        box108.x = box108.x-20;
        box109.x = box109.x-20;
        box110.x = box110.x-20;
        box111.x = box111.x-20;
        box112.x = box112.x-20;
        box113.x = box113.x-20;
        box114.x = box114.x-20;
        box115.x = box115.x-20;
        box116.x = box116.x-20;
        box117.x = box117.x-20;
        box118.x = box118.x-20;
        box119.x = box119.x-20;
        box120.x = box120.x-20;
        box121.x = box121.x-20;
        box122.x = box122.x-20;
        box123.x = box123.x-20;
        box124.x = box124.x-20;
        box125.x = box125.x-20;
        box126.x = box126.x-20;
        box127.x = box127.x-20;
        box128.x = box128.x-20;
        box129.x = box129.x-20;
        box130.x = box130.x-20;
        box131.x = box131.x-20;
        box132.x = box132.x-20;
        box133.x = box133.x-20;
        box134.x = box134.x-20;
        box135.x = box135.x-20;
        box136.x = box136.x-20;
        box137.x = box137.x-20;
        box138.x = box138.x-20;
        box139.x = box139.x-20;
        box140.x = box140.x-20;
        box141.x = box141.x-20;
        box142.x = box142.x-20;
        box143.x = box143.x-20;
        box144.x = box144.x-20;
        box145.x = box145.x-20;
        box146.x = box146.x-20;
        box147.x = box147.x-20;
        box148.x = box148.x-20;
        box149.x = box149.x-20;
        box150.x = box150.x-20;

    }


    //for left arrow key
    if(keyIsDown(37) && frameCount % 5 === 0 && gameState !== "intro"){
        console.log("Left arrow key pressed");
        distanceTravelled = distanceTravelled - 5;

        agentEyeRight.visible = false;
        agentEyeBallRight.visible = false;
        agentEyeLeft.visible = true;
        agentEyeBallLeft.visible = true;

        box1.x = box1.x+20;
        box2.x = box2.x+20;
        box3.x = box3.x+20;
        box4.x = box4.x+20;
        box5.x = box5.x+20;
        box6.x = box6.x+20;
        box7.x = box7.x+20;
        box8.x = box8.x+20;
        box9.x = box9.x+20;
        box10.x = box10.x+20;
        box11.x = box11.x+20;
        box12.x = box12.x+20;
        box13.x = box13.x+20;
        box14.x = box14.x+20;
        box15.x = box15.x+20;
        box16.x = box16.x+20;
        box17.x = box17.x+20;
        box18.x = box18.x+20;
        box19.x = box19.x+20;
        box20.x = box20.x+20;
        box21.x = box21.x+20;
        box22.x = box22.x+20;
        box23.x = box23.x+20;
        box24.x = box24.x+20;
        box25.x = box25.x+20;
        box26.x = box26.x+20;
        box27.x = box27.x+20;
        box28.x = box28.x+20;
        box29.x = box29.x+20;
        box30.x = box30.x+20;
        box31.x = box31.x+20;
        box32.x = box32.x+20;
        box33.x = box33.x+20;
        box34.x = box34.x+20;
        box35.x = box35.x+20;
        box36.x = box36.x+20;
        box37.x = box37.x+20;
        box38.x = box38.x+20;
        box39.x = box39.x+20;
        box40.x = box40.x+20;
        box41.x = box41.x+20;
        box42.x = box42.x+20;
        box43.x = box43.x+20;
        box44.x = box44.x+20;
        box45.x = box45.x+20;
        box46.x = box46.x+20;
        box47.x = box47.x+20;
        box48.x = box48.x+20;
        box49.x = box49.x+20;
        box50.x = box50.x+20;
        
        box51.x = box51.x+20;
        box52.x = box52.x+20;
        box53.x = box53.x+20;
        box54.x = box54.x+20;
        box55.x = box55.x+20;
        box56.x = box56.x+20;
        box57.x = box57.x+20;
        box58.x = box58.x+20;
        box59.x = box59.x+20;
        box60.x = box60.x+20;
        box61.x = box61.x+20;
        box62.x = box62.x+20;
        box63.x = box63.x+20;
        box64.x = box64.x+20;
        box65.x = box65.x+20;
        box66.x = box66.x+20;
        box67.x = box67.x+20;
        box68.x = box68.x+20;
        box69.x = box69.x+20;
        box70.x = box70.x+20;
        box71.x = box71.x+20;
        box72.x = box72.x+20;
        box73.x = box73.x+20;
        box74.x = box74.x+20;
        box75.x = box75.x+20;
        box76.x = box76.x+20;
        box77.x = box77.x+20;
        box78.x = box78.x+20;
        box79.x = box79.x+20;
        box80.x = box80.x+20;
        box81.x = box81.x+20;
        box82.x = box82.x+20;
        box83.x = box83.x+20;
        box84.x = box84.x+20;
        box85.x = box85.x+20;
        box86.x = box86.x+20;
        box87.x = box87.x+20;
        box88.x = box88.x+20;
        box89.x = box89.x+20;
        box90.x = box90.x+20;
        box91.x = box91.x+20;
        box92.x = box92.x+20;
        box93.x = box93.x+20;
        box94.x = box94.x+20;
        box95.x = box95.x+20;
        box96.x = box96.x+20;
        box97.x = box97.x+20;
        box98.x = box98.x+20;
        box99.x = box99.x+20;
        box100.x = box100.x+20;

        box101.x = box101.x+20;
        box102.x = box102.x+20;
        box103.x = box103.x+20;
        box104.x = box104.x+20;
        box105.x = box105.x+20;
        box106.x = box106.x+20;
        box107.x = box107.x+20;
        box108.x = box108.x+20;
        box109.x = box109.x+20;
        box110.x = box110.x+20;
        box111.x = box111.x+20;
        box112.x = box112.x+20;
        box113.x = box113.x+20;
        box114.x = box114.x+20;
        box115.x = box115.x+20;
        box116.x = box116.x+20;
        box117.x = box117.x+20;
        box118.x = box118.x+20;
        box119.x = box119.x+20;
        box120.x = box120.x+20;
        box121.x = box121.x+20;
        box122.x = box122.x+20;
        box123.x = box123.x+20;
        box124.x = box124.x+20;
        box125.x = box125.x+20;
        box126.x = box126.x+20;
        box127.x = box127.x+20;
        box128.x = box128.x+20;
        box129.x = box129.x+20;
        box130.x = box130.x+20;
        box131.x = box131.x+20;
        box132.x = box132.x+20;
        box133.x = box133.x+20;
        box134.x = box134.x+20;
        box135.x = box135.x+20;
        box136.x = box136.x+20;
        box137.x = box137.x+20;
        box138.x = box138.x+20;
        box139.x = box139.x+20;
        box140.x = box140.x+20;
        box141.x = box141.x+20;
        box142.x = box142.x+20;
        box143.x = box143.x+20;
        box144.x = box144.x+20;
        box145.x = box145.x+20;
        box146.x = box146.x+20;
        box147.x = box147.x+20;
        box148.x = box148.x+20;
        box149.x = box149.x+20;
        box150.x = box150.x+20;
        
    }
    


    if(gameState !== "intro" && (agent.isTouching(leftEdge) || agent.isTouching(rightEdge) || (agent.isTouching(enemySpyDetectorDetector) && agent.shapeColor === "lightGrey"))){
        distanceTravelled = 0;
        agent.x = leftEdge.x;
        agent.y = leftEdge.y;
        gameState = "GameOver";
        console.log("GameOver");

        
        textSize(100);
        fill("red");
        stroke("pink");
        text("Game Over!!!",505,windowHeight/3.5+5);
        fill("blue");
        stroke("green");
        text("Game Over!!!",500,windowHeight/3.5);

        textSize(40);
        fill("blue");
        stroke("green");
        text("Thank You for Playing ",700,windowHeight/1.8);


        agent.visible = false;
        agentEyeRight.visible = false;
        agentEyeBallRight.visible = false;
        agentEyeLeft.visible = false;
        agentEyeBallLeft.visible = false;

        invisibleGround.visible = false;
        ground.visible = false;
        
        enemySpy.visible = false;
        enemySpyDetector = false;
        enemyEye.visible = false;
        enemyEyeBall.visible = false;
        mouth1.visible = false;
        mouth2.visible = false;
        mouth3.visible = false;
        horn1.visible = false;
        horn2.visible = false;

        leftEdge.visible = false;
        rightEdge.visible = false;


        box1.visible = false;
        box2.visible = false;
        box3.visible = false;
        box4.visible = false;
        box5.visible = false;
        box6.visible = false;
        box7.visible = false;
        box8.visible = false;
        box9.visible = false;
        box10.visible = false;
        box11.visible = false;
        box12.visible = false;
        box13.visible = false;
        box14.visible = false;
        box15.visible = false;
        box16.visible = false;
        box17.visible = false;
        box18.visible = false;
        box19.visible = false;
        box20.visible = false;
        box21.visible = false;
        box22.visible = false;
        box23.visible = false;
        box24.visible = false;
        box25.visible = false;
        box26.visible = false;
        box27.visible = false;
        box28.visible = false;
        box29.visible = false;
        box30.visible = false;
        box31.visible = false;
        box32.visible = false;
        box33.visible = false;
        box34.visible = false;
        box35.visible = false;
        box36.visible = false;
        box37.visible = false;
        box38.visible = false;
        box39.visible = false;
        box40.visible = false;
        box41.visible = false;
        box42.visible = false;
        box43.visible = false;
        box44.visible = false;
        box45.visible = false;
        box46.visible = false;
        box47.visible = false;
        box48.visible = false;
        box49.visible = false;
        box50.visible = false;

        box51.visible = false;
        box52.visible = false;
        box53.visible = false;
        box54.visible = false;
        box55.visible = false;
        box56.visible = false;
        box57.visible = false;
        box58.visible = false;
        box59.visible = false;
        box60.visible = false;
        box61.visible = false;
        box62.visible = false;
        box63.visible = false;
        box64.visible = false;
        box65.visible = false;
        box66.visible = false;
        box67.visible = false;
        box68.visible = false;
        box69.visible = false;
        box70.visible = false;
        box71.visible = false;
        box72.visible = false;
        box73.visible = false;
        box74.visible = false;
        box75.visible = false;
        box76.visible = false;
        box77.visible = false;
        box78.visible = false;
        box79.visible = false;
        box80.visible = false;
        box81.visible = false;
        box82.visible = false;
        box83.visible = false;
        box84.visible = false;
        box85.visible = false;
        box86.visible = false;
        box87.visible = false;
        box88.visible = false;
        box89.visible = false;
        box90.visible = false;
        box91.visible = false;
        box92.visible = false;
        box93.visible = false;
        box94.visible = false;
        box95.visible = false;
        box96.visible = false;
        box97.visible = false;
        box98.visible = false;
        box99.visible = false;
        box100.visible = false;

        box101.visible = false;
        box102.visible = false;
        box103.visible = false;
        box104.visible = false;
        box105.visible = false;
        box106.visible = false;
        box107.visible = false;
        box108.visible = false;
        box109.visible = false;
        box110.visible = false;
        box111.visible = false;
        box112.visible = false;
        box113.visible = false;
        box114.visible = false;
        box115.visible = false;
        box116.visible = false;
        box117.visible = false;
        box118.visible = false;
        box119.visible = false;
        box120.visible = false;
        box121.visible = false;
        box122.visible = false;
        box123.visible = false;
        box124.visible = false;
        box125.visible = false;
        box126.visible = false;
        box127.visible = false;
        box128.visible = false;
        box129.visible = false;
        box130.visible = false;
        box131.visible = false;
        box132.visible = false;
        box133.visible = false;
        box134.visible = false;
        box135.visible = false;
        box136.visible = false;
        box137.visible = false;
        box138.visible = false;
        box139.visible = false;
        box140.visible = false;
        box141.visible = false;
        box142.visible = false;
        box143.visible = false;
        box144.visible = false;
        box145.visible = false;
        box146.visible = false;
        box147.visible = false;
        box148.visible = false;
        box149.visible = false;
        box150.visible = false;
    }


    if(distanceTravelled >= 2000 && gameState !== "intro"){
    //if(keyIsDown(40)){
        distanceTravelled = 1000000;
        enemySpyDetectorDetector.x = 1000;
        enemySpyDetectorDetector.y = 5000;

        agent.velocityY = 0
        agent.x = 600;
        agent.y = 460;
        enemySpy.velocityX = 0;
        enemySpy.x = 1300;
        enemySpy.y = 460;
        mouth1.y = enemySpy.y + 20;
        mouth2.y = enemySpy.y + 23;
        mouth3.y = enemySpy.y + 23;


        gameState = "win";
        console.log("win");

        textSize(100);
        fill("blue");
        stroke("green");
        text("You have completed the mission safely!!!",50,windowHeight/3.5);
        fill("red");
        stroke("pink");
        text("You have completed the mission safely!!!",55,windowHeight/3.5+5);

        textSize(50);
        fill("blue");
        stroke("green");
        text("Thank You for Playing ",700,windowHeight/1.8);

        agent.visible = true;
        agentEyeRight.visible = true;
        agentEyeBallRight.visible = true;
        agentEyeLeft.visible = true;
        agentEyeBallLeft.visible = true;

        invisibleGround.visible = false;
        ground.visible = true;
        
        enemySpy.visible = true;
        enemySpyDetector = false;
        enemyEye.visible = true;
        enemyEyeBall.visible = true;
        mouth1.visible = true;
        mouth2.visible = true;
        mouth3.visible = true;
        horn1.visible = true;
        horn2.visible = true;
        
        leftEdge.visible = false;
        rightEdge.visible = false;


        box1.visible = false;
        box2.visible = false;
        box3.visible = false;
        box4.visible = false;
        box5.visible = false;
        box6.visible = false;
        box7.visible = false;
        box8.visible = false;
        box9.visible = false;
        box10.visible = false;
        box11.visible = false;
        box12.visible = false;
        box13.visible = false;
        box14.visible = false;
        box15.visible = false;
        box16.visible = false;
        box17.visible = false;
        box18.visible = false;
        box19.visible = false;
        box20.visible = false;
        box21.visible = false;
        box22.visible = false;
        box23.visible = false;
        box24.visible = false;
        box25.visible = false;
        box26.visible = false;
        box27.visible = false;
        box28.visible = false;
        box29.visible = false;
        box30.visible = false;
        box31.visible = false;
        box32.visible = false;
        box33.visible = false;
        box34.visible = false;
        box35.visible = false;
        box36.visible = false;
        box37.visible = false;
        box38.visible = false;
        box39.visible = false;
        box40.visible = false;
        box41.visible = false;
        box42.visible = false;
        box43.visible = false;
        box44.visible = false;
        box45.visible = false;
        box46.visible = false;
        box47.visible = false;
        box48.visible = false;
        box49.visible = false;
        box50.visible = false;

        box51.visible = false;
        box52.visible = false;
        box53.visible = false;
        box54.visible = false;
        box55.visible = false;
        box56.visible = false;
        box57.visible = false;
        box58.visible = false;
        box59.visible = false;
        box60.visible = false;
        box61.visible = false;
        box62.visible = false;
        box63.visible = false;
        box64.visible = false;
        box65.visible = false;
        box66.visible = false;
        box67.visible = false;
        box68.visible = false;
        box69.visible = false;
        box70.visible = false;
        box71.visible = false;
        box72.visible = false;
        box73.visible = false;
        box74.visible = false;
        box75.visible = false;
        box76.visible = false;
        box77.visible = false;
        box78.visible = false;
        box79.visible = false;
        box80.visible = false;
        box81.visible = false;
        box82.visible = false;
        box83.visible = false;
        box84.visible = false;
        box85.visible = false;
        box86.visible = false;
        box87.visible = false;
        box88.visible = false;
        box89.visible = false;
        box90.visible = false;
        box91.visible = false;
        box92.visible = false;
        box93.visible = false;
        box94.visible = false;
        box95.visible = false;
        box96.visible = false;
        box97.visible = false;
        box98.visible = false;
        box99.visible = false;
        box100.visible = false;

        box101.visible = false;
        box102.visible = false;
        box103.visible = false;
        box104.visible = false;
        box105.visible = false;
        box106.visible = false;
        box107.visible = false;
        box108.visible = false;
        box109.visible = false;
        box110.visible = false;
        box111.visible = false;
        box112.visible = false;
        box113.visible = false;
        box114.visible = false;
        box115.visible = false;
        box116.visible = false;
        box117.visible = false;
        box118.visible = false;
        box119.visible = false;
        box120.visible = false;
        box121.visible = false;
        box122.visible = false;
        box123.visible = false;
        box124.visible = false;
        box125.visible = false;
        box126.visible = false;
        box127.visible = false;
        box128.visible = false;
        box129.visible = false;
        box130.visible = false;
        box131.visible = false;
        box132.visible = false;
        box133.visible = false;
        box134.visible = false;
        box135.visible = false;
        box136.visible = false;
        box137.visible = false;
        box138.visible = false;
        box139.visible = false;
        box140.visible = false;
        box141.visible = false;
        box142.visible = false;
        box143.visible = false;
        box144.visible = false;
        box145.visible = false;
        box146.visible = false;
        box147.visible = false;
        box148.visible = false;
        box149.visible = false;
        box150.visible = false;
    }




    console.log("distance completed = " + distanceTravelled);
    drawSprites();
    createEdgeSprites();
}