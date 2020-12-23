import {hudStage} from "./game";
import {BitmapText, Container, Graphics} from "pixi.js";
import {AcrobatixFont} from "../typedAssets/fonts";
import {getCurrentSpeaker} from "./speakers";
import {lerp} from "../utils/math/number";
import {Vector} from "../utils/math/vector";
import {typeBitmapText} from "./typeBitmapText";

export let isSpeaking = false;

function addDialogToHudStage(text: string, resolve: () => void)
{
    const bitmapText = new BitmapText(text, { fontName: AcrobatixFont.font, maxWidth: 124 }).at(2, -1);
    bitmapText.tint = 0xB14030;
    const bitmapTextHeight = bitmapText.height;

    const graphics = new Graphics()
        .beginFill(0xffffff)
        .drawRoundedRect(0, 0, 128, bitmapTextHeight + 3, 4);

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
        });

    isSpeaking = true;

    const container = new Container().on("removed", resolve);
    typeBitmapText(bitmapText, resolve, () => isSpeaking = false);

    hudStage.addChild(container);
    container.addChild(graphics, tailGraphics, bitmapText);

    return container;
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

function clearHudStage()
{
    hudStage.removeAllChildren();
}

export function say(text: string)
{
    clearHudStage();
    let container;
    return new Promise<void>(resolve => {
        container = addDialogToHudStage(text, resolve);
    }).then(() => {
        if (!container?.destroyed)
            container?.destroy();
    });
}
