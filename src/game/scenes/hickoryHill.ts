import {character} from "../character";
import {styles} from "../styles";
import {sleep} from "pissant";
import {background, sceneStage} from "../game";
import {HeldHands} from "../../typedAssets/textures";
import {Container, Graphics, Sprite} from "pixi.js";
import {Now} from "../../utils/now";
import {narrator} from "../narrator";

export async function hickoryHill()
{
    background.tint = 0x2657A0;

    function f(x: number)
    {
        const dx = x - Now.s;
        return 58 + .4 * x + Math.abs(Math.sin((1 + .1 * dx) - dx)) * 3;
    }

    const terrain = new Graphics()
        .withStep(() => {
            terrain
                .clear()
                .beginFill(0xF2EFA4);
            terrain.moveTo(0, 128);

            const samples = 64;
            const dx = 128 / samples;
            for (let i = 0; i <= samples; i++)
            {
                const x = i * dx;
                terrain.lineTo(x, f(x))
            }

            terrain.lineTo(128, 128);
            terrain.closePath();
        });

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

    const characters = new Container().at(-4, 6);

    sceneStage.addChild(terrain, characters);
    characters.addChild(heldHands, cole, hubol);

    await sleep(5000);
    await cole.say("Have you fallen for me?");
    await sleep(2500);
    await narrator.say("I don't remember how I responded.")
    await sleep(2500);
}
