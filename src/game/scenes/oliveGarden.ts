import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {Sprite} from "pixi.js";
import {BackgroundOliveGarden} from "../../typedAssets/textures";

export async function oliveGarden()
{
    sceneStage.addChild(Sprite.from(BackgroundOliveGarden));
    const padding = 40;
    const y = 118;
    const hubol = character(styles.hubol).at(padding, y);
    const cole = character(styles.cole).at(128 - padding, y);
    cole.scale.x *= -1;
    [hubol, cole].forEach(x => x.subimage = 2);
    sceneStage.addChild(hubol, cole);

    await hubol.say("That's so cute that you cook for yourself... And make drinks...");
    await hubol.say("You really treat yourself.");
    await cole.say("No, I don't treat myself. I treat myself like a person.");
    await hubol.say("Then what do I treat myself like?");
}
