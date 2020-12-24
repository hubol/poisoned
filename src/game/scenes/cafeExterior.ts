import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {sleep} from "pissant";
import {subimageTextures} from "../../utils/pixi/simpleSpritesheet";
import {BackgroundCafeExterior} from "../../typedAssets/textures";
import {Sprite} from "pixi.js";

export async function cafeExterior()
{
    const backgroundTextures = subimageTextures(BackgroundCafeExterior, 3);

    const hubol = character(styles.hubol).at(64 - 20, 116);
    const trey = character(styles.trey).at(64 + 20, 100);
    hubol.facingAway = true;
    [hubol, trey].forEach(x => x.subimage = 2);
    trey.scale.x *= -1;

    sceneStage.addChild(Sprite.from(backgroundTextures[0]), trey, Sprite.from(backgroundTextures[1]), hubol, Sprite.from(backgroundTextures[2]));

    await sleep(1000);
    await hubol.say("You still are very pretty.");
    await trey.say("Thanks, you too.");
    await hubol.say("Thanks.");
    await sleep(2000);
    await trey.say("Your skin looks good.");
    await hubol.say("Oh, do you mean that?");
    await trey.say("Yes!");
    await hubol.say("Thanks.");
    await sleep(2000);
}
