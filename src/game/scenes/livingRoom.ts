import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {sleep} from "pissant";
import {lerp} from "../lerp";
import {subimageTextures} from "../../utils/pixi/simpleSpritesheet";
import {BackgroundLivingRoom} from "../../typedAssets/textures";
import {Sprite} from "pixi.js";
import {narrator} from "../narrator";

export async function livingRoom()
{
    const backgroundSprites = subimageTextures(BackgroundLivingRoom, 2)
        .map(Sprite.from);

    const john = character(styles.john).at(68, 80);
    const kalmia = character(styles.kalmia).at(98, 80);
    const hubol = character(styles.hubol).at(142, 112 + 6);

    [john, kalmia].forEach(x => {
        x.scale.x *= -1;
        x.subimage = 2;
    });

    sceneStage.addChild(backgroundSprites[0], john, kalmia, hubol, backgroundSprites[1]);

    await sleep(1000);
    await hubol.walkTo(24);
    hubol.scale.x *= -1;
    hubol.facingAway = true;
    await lerp(hubol, "y").to(110).over(100);
    await lerp(hubol, "y").to(112).over(50);
    hubol.y -= 4;
    hubol.subimage = 2;
    await sleep(2000);
    await hubol.say("Hey I need to ask you guys something.");
    await hubol.say("This guy, Cole, I like him a lot. And it would be nice if I could have him over sometime.");
    await hubol.say("He has a job and wears a mask at work.");
    await sleep(1250);
    await john.say("We can probably work something out.");
    await sleep(2000);
    await narrator.say("They didn't. But it's okay.")
    await sleep(2000);
}
