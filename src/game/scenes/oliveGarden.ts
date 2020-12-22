import {say} from "../say";
import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";

export async function oliveGarden()
{
    const padding = 40;
    const y = 118;
    const hubol = character(styles.hubol).at(padding, y);
    const cole = character(styles.cole).at(128 - padding, y);
    cole.scale.x *= -1;
    [hubol, cole].forEach(x => x.subimage = 2);
    sceneStage.addChild(hubol, cole);

    await say("That's so cute that you cook for yourself... And make drinks...");
    await say("You really treat yourself.");
    await say("No, I don't treat myself. I treat myself like a person.");
    await say("Then what do I treat myself like?");
}
