import {character} from "../character";
import {styles} from "../styles";
import {sleep} from "pissant";
import {sceneStage} from "../game";

export async function mishasDriveway()
{
    const hubol = character(styles.hubol).at(64 + 20, 116);
    hubol.scale.x *= -1;
    const misha = character(styles.misha).at(64 - 20, 116);
    sceneStage.addChild(hubol, misha);

    await sleep(1000);
    await misha.say("Russian buckwheat. Bucklewheat? Buckwheat, I think.");
    await misha.say("And the company threw in some free gifts, probably good I guess.");
    await hubol.say("Aw thanks, Misha.");
    await hubol.say("Here's your jacket.");
    await hubol.say("And do you want this box I painted in 2015?");
    await misha.say("Do I want this box you painted in 2015? Of course I want this. It's great.");
    await sleep(2000);
    await misha.say("So, I probably won't see you again in my lifetime.");
    await hubol.say("I don't know about that, Misha. I'll be back someday. Izzy is going to get married.");
    await misha.say("Oh? Oh. Okay.");
    await sleep(1000);
    await misha.say("Best of luck to you and your family.");
    await hubol.say("Same to you, Misha.");
    await sleep(1000);
}
