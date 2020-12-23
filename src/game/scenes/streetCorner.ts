import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {sleep} from "pissant";
import {Sprite} from "pixi.js";
import {BackgroundStreetCorner} from "../../typedAssets/textures";

export async function streetCorner()
{
    const hubol = character(styles.hubol).at(50, 100);
    const trey = character(styles.trey).at(30, 100);
    [hubol, trey].forEach(x => x.subimage = 2);
    sceneStage.addChild(Sprite.from(BackgroundStreetCorner), hubol, trey);

    await sleep(1000);
    await hubol.say("I don't want to make myself sound like a superhero...");
    await hubol.say("But I wonder how different things could have been if I had ended up with you instead of Megan.");
    await hubol.say("I would have gotten to be gay.");
    await hubol.say("Titus would have never been hurt.");
    await sleep(2000);
    await trey.say("I was going to confess my feelings for you.");
    await trey.say("But then Megan did that whole thing--crying at the airport.");
    await sleep(1000);
    await hubol.say("I didn't know you had feelings for me...");
    await sleep(1000);
}
