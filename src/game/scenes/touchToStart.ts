import {tickerWait} from "../tickerWait";
import {Key} from "../../utils/browser/key";
import {sleep} from "pissant";
import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {Heart, ThankYou, TouchToStart} from "../../typedAssets/textures";
import {Sprite} from "pixi.js";
import {add} from "../../utils/math/vector";
import {Now} from "../../utils/now";

export async function touchToStart()
{
    let steps = 0;
    const message = Sprite.from(TouchToStart)
        .at(64, 28)
        .withStep(() => {
            if (message.texture !== TouchToStart)
            {
                message.visible = true;
                return;
            }
            steps = (steps + 1) % 80;
            message.visible = steps < 40;
        });
    message.anchor.set(0.5, 0.5);
    const hubol = character(styles.hubol).at(64, 105);
    sceneStage.addChild(hubol, message);
    await tickerWait(() => Key.justWentDown("Space"));
    message.texture = ThankYou;
    const heart = Sprite.from(Heart)
        .at(add({ x: hubol.width / 4, y: -hubol.height + 4 }, hubol))
        .withStep(() => {
            heart.x += Math.sin(Now.s * 2) * 0.3;
            heart.y -= 0.5;
        });
    heart.anchor.set(0.5, 1);
    sceneStage.addChild(heart);
    hubol.shake.x = 1;
    await sleep(250);
    hubol.shake.x = 0;
    await sleep(2250);
}
