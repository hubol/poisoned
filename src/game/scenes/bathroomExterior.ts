import {character} from "../character";
import {styles} from "../styles";
import {narrator} from "../narrator";
import {sleep} from "pissant";
import {sceneStage} from "../game";
import {Sprite} from "pixi.js";
import {BackgroundBathroomExterior} from "../../typedAssets/textures";

export async function bathroomExterior()
{
    const hubol = character(styles.hubol).at(64 + 25, 105);
    const john = character(styles.john).at(64 - 25, 105);

    sceneStage.addChild(Sprite.from(BackgroundBathroomExterior), hubol, john);

    hubol.scale.x *= -1;

    await sleep(1000);
    await narrator.say("The first time I took a shit here, John thought I was cooking something.");
    await sleep(500);
    await john.say("What are you cooking?");
    await sleep(500);
    await hubol.say("I'm... not cooking anything.");
    await sleep(1000);
    await john.say("Oh...");
    await sleep(2000);
}
