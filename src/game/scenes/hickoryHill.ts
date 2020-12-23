import {character} from "../character";
import {styles} from "../styles";
import {sleep} from "pissant";
import {sceneStage} from "../game";
import {HeldHands} from "../../typedAssets/textures";
import {Sprite} from "pixi.js";

export async function hickoryHill()
{
    const fromCenter = 12;
    const hubol = character(styles.hubol).at(64 - fromCenter, 100);
    hubol.subimage = 1;
    const cole = character(styles.cole).at(64 + fromCenter, hubol.y - 2)
        .withStep(() => {
            cole.subimage = (cole.subimage + 0.05) % 2;
            hubol.subimage = (hubol.subimage + 0.053) % 2;
        });

    const heldHands = Sprite.from(HeldHands)
        .at(56, 88);

    sceneStage.addChild(heldHands, cole, hubol);

    await sleep(5000);
    await cole.say("Have you fallen for me?");
    await sleep(5000);
}
