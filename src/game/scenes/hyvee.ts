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
    const trey = character(styles.trey).at(-25, 92);

    const blurred = new Container();
    sceneStage.addChild(blurred, hubol);

    blurred.addChild(Sprite.from(BackgroundHyvee), trey);

    await sleep(1000);
    await narrator.say("I thought I saw Trey at the grocery.");
    await sleep(1000);

    await trey.walkTo(25, 0.67);
    await sleep(1000);
    hubol.facingAway = true;
    await sleep(1000);
    hubol.facingAway = false;

    hubol.shake.x = 1;
    const noiseFilter = new filters.NoiseFilter(0);
    setTimeout(async () => await lerp(noiseFilter, "noise").to(0.15).over(6000));
    blurred.withStep(() => noiseFilter.seed = Math.random());
    const blurFilter = new filters.BlurFilter(0, 6);
    blurred.filters = [blurFilter, noiseFilter];
    await lerp(blurFilter, "blur").to(8).over(3000);

    await sleep(500);
    await narrator.say("I wanted to leave.");
    await sleep(1000);
}
