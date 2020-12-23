import {BitmapText} from "pixi.js";
import {Key} from "../utils/browser/key";
import {isSpeaking} from "./say";

export function typeBitmapText(bitmapText: BitmapText, onAdvanced: () => void, onTyped?: () => void)
{
    const text = bitmapText.text;
    let textToCopy = text;
    bitmapText.text = "";
    let firstStep = true;
    let count = 0;

    return bitmapText
        .withStep(() => {
            const advanceKeyPressed = !firstStep && Key.justWentDown("Space");
            firstStep = false;

            if (bitmapText.text !== text)
            {
                if (advanceKeyPressed)
                    bitmapText.text = text;
                else if (count++ % 4 === 0)
                {
                    const [word, remainingTextToCopy] = getNextWord(textToCopy);
                    bitmapText.text += word;
                    textToCopy = remainingTextToCopy;
                }

                if (bitmapText.text === text && onTyped)
                    onTyped();
            }
            else
            {
                if (advanceKeyPressed)
                    onAdvanced();
            }
        });
}

function getNextWord(text: string): [word: string, remaining: string]
{
    const endOfWordIndex = text.indexOf(" ");
    if (endOfWordIndex === -1)
        return [text, ""];

    return [text.substr(0, endOfWordIndex + 1), text.substr(endOfWordIndex + 1)]
}
