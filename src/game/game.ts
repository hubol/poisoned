import {createGame} from "../utils/asshat/createGame";
import {integralUpscaleCanvas} from "../utils/browser/integralUpscaleCanvas";
import {Container, Graphics} from "pixi.js";
import {makeOnClickAliasForSpacebarPress} from "./makeOnClickAliasForSpacebarPress";
import {runOfShow} from "./runOfShow";
import {Snap} from "../typedAssets/sounds";
import {InTheNight} from "../typedAssets/musics";

export const game = createGame({width: 128, height: 128, targetFps: 60, hideCursor: true});
game.canvasElement.id = "gameCanvas";
document.body.appendChild(game.canvasElement);
integralUpscaleCanvas(game.canvasElement, 20);

makeOnClickAliasForSpacebarPress(game.canvasElement);

export const background = game.stage.addChild(new Graphics().beginFill(0xffffff).drawRect(0, 0, 128, 128));
export const sceneStage = game.stage.addChild(new Container());
export const hudStage = game.stage.addChild(new Container());

setTimeout(async () => {
    InTheNight.load();
    for (const runOfShowElement of runOfShow) {
        Snap.play();
        background.tint = 0;
        sceneStage.removeAllChildren();
        hudStage.removeAllChildren();
        await runOfShowElement();
    }
})
