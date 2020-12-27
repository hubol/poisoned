import {character} from "../character";
import {styles} from "../styles";
import {sleep} from "pissant";
import {sceneStage} from "../game";
import {Sprite} from "pixi.js";
import {BackgroundZoomWithJosh} from "../../typedAssets/textures";

export async function zoomWithJosh()
{
    const padding = 40;
    const y = 116;
    const hubol = character(styles.hubol).at(64 + padding, y + 3);
    const josh = character(styles.josh).at(64 - padding, y);
    hubol.scale.x *= -1;
    [hubol, josh].forEach(x => x.subimage = 2);

    sceneStage.addChild(Sprite.from(BackgroundZoomWithJosh), hubol, josh);

    await sleep(1000);
    await josh.say("When you push the boundaries of the life that God has prescribed for you, things can be challenging.");
    await hubol.say("I don't think I like the idea of God being angry that I am finding joy in being with a man.");
    await josh.say("I understand.");
    await sleep(2000);
    await josh.say("I just want you to know, I don't condemn you.");
    await sleep(2000);
}
