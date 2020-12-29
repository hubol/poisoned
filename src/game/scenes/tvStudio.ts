import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {sleep} from "pissant";
import {Sprite} from "pixi.js";
import {BackgroundTvStudio, Ipad} from "../../typedAssets/textures";

export async function tvStudio()
{
    const y = 108;
    const hubol = character(styles.hubol).at(128 + 16, y);
    const cole = character(styles.cole).at(-16, y);
    cole.addChild(Sprite.from(Ipad).at(6, 23));
    sceneStage.addChild(Sprite.from(BackgroundTvStudio), hubol, cole);

    await sleep(1000);
    await hubol.walkTo(96);
    await hubol.say("We can draw over here.")
    await cole.walkTo(32);
    await cole.say("Oh perfect, it's like casting couch.")
    await hubol.say("Like what?")
    await cole.say("Casting couch. You know, like in pornos.")
    await cole.say("TV studio, black couch.")
    await hubol.say("Oh, I think I've seen one of those before.")
    await sleep(2000);
}
