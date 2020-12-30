import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {sleep} from "pissant";
import {subimageTextures} from "../../utils/pixi/simpleSpritesheet";
import {BackgroundBarnesAndNobleParkingLot} from "../../typedAssets/textures";
import {Container, Sprite} from "pixi.js";
import {lerp} from "../lerp";

export async function barnesAndNobleParkingLot()
{
    const backgroundSprites = subimageTextures(BackgroundBarnesAndNobleParkingLot, 3)
        .map(Sprite.from);

    const padding = 51;
    const y = 100;
    const hubol = character(styles.hubol).at(padding, y);
    const cole = character(styles.cole).at(128 - padding, y);
    cole.scale.x *= -1;
    [hubol, cole].forEach(x => {
        x.facingAway = true;
        x.subimage = 2;
    });

    const car = new Container();
    sceneStage.addChild(backgroundSprites[0], car);

    car.addChild(backgroundSprites[1], hubol, cole, backgroundSprites[2]);

    hubol.facingAway = false;
    const onLapX = 16;
    const onLapY = -4;
    hubol.x += onLapX;
    hubol.y += onLapY;

    async function moveHubolOffLap()
    {
        cole.facingAway = false;
        await lerp(hubol, "x").to(hubol.x - onLapX / 2).over(500);
    }

    await sleep(1000);
    await hubol.say("I cannot believe that you finished before me.");
    await Promise.all([
        lerp(hubol, "x").to(hubol.x - onLapX / 2).over(500),
        lerp(hubol, "y").to(hubol.y - onLapY).over(500),
    ]);
    await hubol.say("And, I don't know if you noticed, but I did swallow!");
    await Promise.all([
        moveHubolOffLap(),
        cole.say("I did notice. Now we're even.")
    ]);
    await sleep(1000);
    await cole.say("You have cum on your glasses.");
    await hubol.say("Oh, I'll just get it with this.");
    hubol.facingAway = true;
    await lerp(hubol, "y").to(hubol.y + 3).over(200);
    await cole.say("Stop. Give me those.");
    setTimeout(async () => await lerp(hubol, "y").to(hubol.y - 3).over(500));
    await lerp(cole, "x").to(cole.x - 3).over(200);
    await lerp(cole, "x").to(cole.x + 3).over(170);
    cole.facingAway = true;
    hubol.facingAway = false;
    await sleep(1000);
    await hubol.say("Wow, I've never had someone clean my glasses for me.");
    await sleep(2000);
    cole.facingAway = false;
    await sleep(250);
    await lerp(cole, "x").to(cole.x - 3).over(200);
    setTimeout(async () => {
        await lerp(hubol, "x").to(hubol.x - 2).over(100);
        await lerp(hubol, "x").to(hubol.x + 2).over(100);
    });
    await lerp(cole, "x").to(cole.x + 3).over(170);
    await sleep(500);
    await hubol.say("Thanks.");
    await sleep(2000);
}
