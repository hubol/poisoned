import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {sleep} from "pissant";
import {narrator} from "../narrator";
import {Container, Sprite} from "pixi.js";
import { BackgroundHyvee } from "../../typedAssets/textures";
import {filters} from "pixi.js";
import {lerp} from "../lerp";

export async function hyvee()
{
    const hubol = character(styles.hubol).at(50, 119);
    const trey = character(styles.trey).at(25, 92);

    const blurred = new Container();
    sceneStage.addChild(blurred, hubol);

    blurred.addChild(Sprite.from(BackgroundHyvee), trey);

    await sleep(1000);
    await narrator.say("I thought I saw Trey at the grocery.");

    hubol.shake.x = 1;
    const blurFilter = new filters.BlurFilter(0);
    blurred.filters = [blurFilter];
    await lerp(blurFilter, "blur").to(8).over(3000);

    await sleep(500);
    await narrator.say("I started shaking and wanted to leave.");
    await sleep(1000);
}
