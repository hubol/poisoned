import {hudStage} from "./game";
import {BitmapText, Container, Graphics} from "pixi.js";
import {AcrobatixFont} from "../typedAssets/fonts";
import {Key} from "../utils/browser/key";

function addDialogToHudStage(text: string, resolve: () => void)
{
    const bitmapText = new BitmapText(text, { fontName: AcrobatixFont.font, maxWidth: 126 }).at(1, -1);
    bitmapText.tint = 0xB14030;
    const bitmapTextHeight = bitmapText.height;

    const graphics = new Graphics()
        .beginFill(0xffffff)
        .drawRect(0, 0, 128, bitmapTextHeight + 3);

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

    container.addChild(graphics, bitmapText);

    hudStage.addChild(container);
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
