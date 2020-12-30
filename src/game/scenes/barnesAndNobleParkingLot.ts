import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {sleep} from "pissant";
import {subimageTextures} from "../../utils/pixi/simpleSpritesheet";
import {BackgroundBarnesAndNobleParkingLot} from "../../typedAssets/textures";
import {Container, Sprite} from "pixi.js";

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

    await sleep(1000);
    await hubol.say("I cannot believe that you finished before me.");
    await hubol.say("And, I don't know if you noticed, but I did swallow!");
    await cole.say("I did notice. Now we're even.");
    await sleep(1000);
    await cole.say("You have cum on your glasses.");
    await hubol.say("Oh, I'll just get it with this.");
    await cole.say("Stop.");
    await sleep(1000);
    await hubol.say("Wow, I've never had someone clean my glasses for me.");
    await sleep(3000);
    await hubol.say("Thanks.");
    await sleep(2000);
}
