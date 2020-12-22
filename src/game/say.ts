import {hudStage} from "./game";
import {BitmapText, Container, Graphics} from "pixi.js";
import {AcrobatixFont} from "../typedAssets/fonts";
import {Key} from "../utils/browser/key";
import {getCurrentSpeaker} from "./speakers";
import {lerp} from "../utils/math/number";
import {Vector} from "../utils/math/vector";

function addDialogToHudStage(text: string, resolve: () => void)
{
    const bitmapText = new BitmapText(text, { fontName: AcrobatixFont.font, maxWidth: 126 }).at(1, -1);
    bitmapText.tint = 0xB14030;
    const bitmapTextHeight = bitmapText.height;

    const graphics = new Graphics()
        .beginFill(0xffffff)
        .drawRect(0, 0, 128, bitmapTextHeight + 3);

    function getTailSourceVector(target: Vector)
    {
        const x = lerp(target.x, target.x < 64 ? 0 : 128, 0.2);
        return { x, y: graphics.height };
    }

    const tailGraphics = new Graphics()
        .withStep(() => {
            tailGraphics.clear();

            const speakerContainer = getCurrentSpeakerAsContainer();
            if (!speakerContainer)
                return;

            const thickness = 4;
            const v2 = getTailTargetVector(speakerContainer);
            const v1 = getTailSourceVector(v2);

            tailGraphics
                .lineStyle(1, 0xffffff)
                .beginFill(0xffffff)
                .moveTo(v1.x - thickness / 2, v1.y)
                .lineTo(v1.x + thickness / 2, v1.y)
                .lineTo(v2.x, v2.y)
                .closePath();
        })

    bitmapText.text = "";
    let textToCopy = text;
    let firstStep = true;
    let count = 0;

    const container = new Container()
        .on("removed", resolve)
        .withStep(() => {
            const advanceKeyPressed = !firstStep && Key.justWentDown("Space");
            firstStep = false;

            if (bitmapText.text !== text)
            {
                if (advanceKeyPressed)
                    bitmapText.text = text;
                else if (count++ % 4 === 0)
                {
                    const [ word, remainingTextToCopy ] = getNextWord(textToCopy);
                    bitmapText.text += word;
                    textToCopy = remainingTextToCopy;
                }
            }
            else if (advanceKeyPressed)
            {
                container.destroy();
            }
        });

    hudStage.addChild(container);
    container.addChild(graphics, tailGraphics, bitmapText);
}

function getTailTargetVector(container: Container)
{
    const bounds = container.getBounds();
    return { x: lerp(bounds.left, bounds.right, container.x / 128), y: bounds.top };
}

function getCurrentSpeakerAsContainer()
{
    const currentSpeaker = getCurrentSpeaker();
    if (currentSpeaker instanceof Container)
        return currentSpeaker;
    return null;
}

function getNextWord(text: string): [word: string, remaining: string]
{
    const endOfWordIndex = text.indexOf(" ");
    if (endOfWordIndex === -1)
        return [text, ""];

    return [text.substr(0, endOfWordIndex + 1), text.substr(endOfWordIndex + 1)]
}

function clearHudStage()
{
    hudStage.removeAllChildren();
}

export function say(text: string)
{
    clearHudStage();
    return new Promise<void>(resolve => {
        addDialogToHudStage(text, resolve);
    });
}
