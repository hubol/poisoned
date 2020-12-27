import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {Sprite} from "pixi.js";
import {BackgroundOliveGarden} from "../../typedAssets/textures";
import {sleep} from "pissant";
import {narrator} from "../narrator";

function oliveGarden() {
    sceneStage.addChild(Sprite.from(BackgroundOliveGarden));
    const padding = 40;
    const y = 118;
    const hubol = character(styles.hubol).at(padding, y);
    const cole = character(styles.cole).at(128 - padding, y);
    cole.scale.x *= -1;
    [hubol, cole].forEach(x => x.subimage = 2);
    sceneStage.addChild(hubol, cole);
    return {hubol, cole};
}

export async function oliveGarden1()
{
    const {hubol, cole} = oliveGarden();

    await sleep(1000);
    await hubol.say("That's so cute that you cook for yourself... And make drinks...");
    await hubol.say("You really treat yourself.");
    await cole.say("No, I don't treat myself. I treat myself like a person.");
    await hubol.say("Then what do I treat myself like?");
    await sleep(1500);
    await narrator.say("You probably said something witty, but I don't remember what it was.")
    await sleep(1000);
}

export async function oliveGarden2()
{
    const {hubol, cole} = oliveGarden();

    await sleep(1000);
    await hubol.say("Do you know the heimlich?");
    await cole.say("Yes, why?");
    await hubol.say("Oh, because I almost choked just now.");
    await cole.say("You--you can't just casually ask if I know the heimlich while you're choking!");
    await hubol.say("Oh, well I don't know the heimlich.");
    await cole.say("Why don't you know the heimlich?");
    await hubol.say("I mean, I know to press on their sternum or whatever. But I get nervous.");
    await cole.say("It's a person's life!");
    await hubol.say("Yes, I know, but I get nervous! You know.");
    await sleep(1000);
}
