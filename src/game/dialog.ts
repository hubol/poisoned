import {hudStage} from "./game";
import {BitmapText, Container, Graphics} from "pixi.js";
import {AcrobatixFont} from "../typedAssets/fonts";

function addDialogToHudStage(text: string, resolve: () => void)
{
    const bitmapText = new BitmapText(text, { fontName: AcrobatixFont.font, maxWidth: 126 }).at(1, -1);
    bitmapText.tint = 0xB14030;

    const graphics = new Graphics()
        .beginFill(0xffffff)
        .drawRect(0, 0, 128, bitmapText.height + 1);


    const container = new Container()
        .on("removed", resolve);

    container.addChild(graphics, bitmapText);

    hudStage.addChild(container);
}

function clearHudStage()
{
    hudStage.removeAllChildren();
}

class Dialog
{
    say(text: string)
    {
        clearHudStage();
        return new Promise<void>(resolve => {
            addDialogToHudStage(text, resolve);
        });
    }
}

export const dialog = new Dialog();
