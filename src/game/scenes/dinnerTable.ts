import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {sleep} from "pissant";
import {narrator} from "../narrator";
import {subimageTextures} from "../../utils/pixi/simpleSpritesheet";
import {BackgroundDinnerTable} from "../../typedAssets/textures";
import {Sprite} from "pixi.js";

export async function dinnerTable()
{
    const backgroundSprites = subimageTextures(BackgroundDinnerTable, 2)
        .map(Sprite.from);

    const hubol = character(styles.hubol).at(64 - 25, 105);
    const john = character(styles.john).at(64 + 15, 100);
    john.scale.x *= -1;
    [hubol, john].forEach(x => x.subimage = 2);

    sceneStage.addChild(backgroundSprites[0], hubol, john, backgroundSprites[1]);

    await sleep(1000);
    await john.say("..... ....... .... .. ...... contention.");
    await john.say("..... .... .. ..... . ..... leave on good terms.");
    await sleep(2000);
    await narrator.say("I felt I needed to leave immediately.")
    await sleep(1000);
}
