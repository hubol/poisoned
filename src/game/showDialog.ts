import {hudStage} from "./game";
import {DisplayObject} from "pixi.js";

function clearHudStage()
{
    hudStage.removeAllChildren();
}

export function showDialog(dialogFactory: (resolve: () => void) => DisplayObject)
{
    clearHudStage();
    let displayObject: DisplayObject | null;
    return new Promise<void>(resolve => {
        displayObject = dialogFactory(resolve);
    }).then(() => {
        if (!displayObject?.destroyed)
            displayObject?.destroy();
    });
}
