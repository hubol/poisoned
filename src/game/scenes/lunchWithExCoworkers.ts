import {character} from "../character";
import {styles} from "../styles";
import {background, sceneStage} from "../game";
import {sleep} from "pissant";
import {narrator} from "../narrator";
import {Container, Graphics, Sprite} from "pixi.js";
import {subimageTextures} from "../../utils/pixi/simpleSpritesheet";
import {BackgroundLunchWithExCoworkers} from "../../typedAssets/textures";
import {lerp} from "../lerp";

export async function lunchWithExCoworkers()
{
    const backgroundSprites = subimageTextures(BackgroundLunchWithExCoworkers, 2)
        .map(Sprite.from);
    backgroundSprites.forEach(x => x.x -= 128);

    const hubol = character(styles.hubol).at(90 + 10 + 12 - 6, 119);
    const keane = character(styles.keane).at(70 + 15 - 6, 92);
    const josh = character(styles.josh).at(-75, 119);
    const valera = character(styles.valera).at(-100, 92);

    [hubol, keane].forEach(x => x.scale.x *= -1);
    [hubol, keane, josh, valera].forEach(x => x.subimage = 2);

    background.tint = 0xA8D3DD;
    const grass = new Graphics()
        .beginFill(0x84BC9E)
        .drawRect(0, 89, 128, 128);
    const camera = new Container();
    sceneStage.addChild(grass, camera);

    camera.addChild(backgroundSprites[0], hubol, keane, backgroundSprites[1], valera, josh);

    camera.pivot.x = -126;
    await sleep(1000);
    await lerp(camera.pivot, "x").to(1).over(3000);
    await sleep(1000);
    await narrator.say("I'm not sure why I agreed to come here.");
    await sleep(2000);
    await keane.say("Misha was really abusive to me.");
    await hubol.say("Yeah?");
    await keane.say("Yeah, you don't want to get on his bad side.");
    await hubol.say("Oh, yeah?");
    await keane.say("Misha ruined my life.");
    await sleep(2000);
    await keane.say("You're the best programmer I've ever met.");
    await hubol.say("That doesn't matter to me.");
    await sleep(2000);
}
