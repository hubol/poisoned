import {Character, character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {sleep} from "pissant";
import {Sprite} from "pixi.js";
import {BackgroundTvStudio, Ipad} from "../../typedAssets/textures";
import {lerp} from "../lerp";

export async function tvStudio()
{
    const y = 108;
    const hubol = character(styles.hubol).at(128 + 16, y);
    const cole = character(styles.cole).at(-16, y);
    const ipadSprite = Sprite.from(Ipad);
    ipadSprite.anchor.set(0.5, 0.5);
    cole.addChild(ipadSprite.at(11, 27));
    sceneStage.addChild(Sprite.from(BackgroundTvStudio), cole, hubol);

    await sleep(1000);
    await hubol.walkTo(96);
    await hubol.say("We can draw over here.")
    await cole.walkTo(32);
    await cole.say("Oh perfect, it's like casting couch.")
    const coleWalkToCouch = moveColeToCouch(cole);
    await hubol.say("Like what?");
    await coleWalkToCouch;
    await cole.say("Casting couch. You know, like in pornos.");
    await cole.say("TV studio, black couch.");
    await hubol.say("Oh, I think I've seen one of those before.");
    await sleep(250);
    await Promise.all([
        lerp(ipadSprite, "angle").to(-70).over(100),
        lerp(ipadSprite, "x").to(ipadSprite.x + 12).over(100),
        lerp(ipadSprite, "y").to(ipadSprite.y - 4).over(100)
    ]);
    await sleep(500);
    await hubol.walkTo(64 + 9);
    await sleep(500);
}

async function moveColeToCouch(cole: Character)
{
    await cole.walkTo(64 - 9);
    cole.subimage = 1;
    await lerp(cole, "y").to(cole.y - 13).over(150);
    cole.y -= 4;
    cole.subimage = 2;
}
