import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {Sprite} from "pixi.js";
import {sleep} from "pissant";
import {BackgroundBreadGarden} from "../../typedAssets/textures";

export async function breadGarden()
{
    sceneStage.addChild(Sprite.from(BackgroundBreadGarden));
    const padding = 40;
    const y = 118;
    const hubol = character(styles.hubol).at(padding, y);
    const cole = character(styles.cole).at(128 - padding, y);
    cole.scale.x *= -1;
    [hubol, cole].forEach(x => x.subimage = 2);
    sceneStage.addChild(hubol, cole);

    await sleep(1000);
    await cole.say("I hate walking.");
    await hubol.say("You do? Then why do you do it with me?");
    await cole.say("Think about it.");
    await sleep(1000);
    await hubol.say("Hm...");
    await sleep(1500);
    await hubol.say("HMM...");
    await sleep(2000);
    await hubol.say("HMMMMM!!!");
    await sleep(1000);
    await hubol.say("Maybe it's because you like me?");
    await sleep(1000);
}
