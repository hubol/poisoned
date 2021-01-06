import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {sleep} from "pissant";
import {subimageTextures} from "../../utils/pixi/simpleSpritesheet";
import {BackgroundZoomWithMisha} from "../../typedAssets/textures";
import {Sprite} from "pixi.js";

export async function zoomWithMisha()
{
    const backgroundSprites = subimageTextures(BackgroundZoomWithMisha, 2)
        .map(Sprite.from);

    const padding = 39 - 6;
    const y = 116 - 6;
    const hubol = character(styles.hubol).at(64 + padding, y);
    const misha = character(styles.misha).at(64 - padding, y);
    hubol.scale.x *= -1;

    sceneStage.addChild(backgroundSprites[0], hubol, misha, backgroundSprites[1]);

    await sleep(1000);
    await hubol.say("It was so sweet, the other day he asked me a special question.");
    await hubol.say(`He asked, "Have you fallen for me?"`);
    await misha.say("Jesus! Wow, this question. What did you say?");
    await hubol.say(`Oh, I have no idea what I said. It was just so special to me.`);
    await misha.say("Jesus, if someone asked me that... If someone asked me that I would need to lay down and drink.");
    await misha.say("I can't look at romance. When people are saying these things or kissing on TV, I have to look away.");
    await misha.say("I can look at them having sex, though. That's different. All the romance is over before then.");

    await sleep(2000);
}
