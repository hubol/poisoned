import {createGame} from "../utils/asshat/createGame";
import {integralUpscaleCanvas} from "../utils/browser/integralUpscaleCanvas";
import {Container} from "pixi.js";
import {oliveGarden} from "./scenes/oliveGarden";
import {makeOnClickAliasForSpacebarPress} from "./makeOnClickAliasForSpacebarPress";

const game = createGame({width: 128, height: 128, targetFps: 60, hideCursor: true});
game.canvasElement.id = "gameCanvas";
document.body.appendChild(game.canvasElement);
integralUpscaleCanvas(game.canvasElement, 20);

makeOnClickAliasForSpacebarPress(game.canvasElement);

export const sceneStage = game.stage.addChild(new Container());
export const hudStage = game.stage.addChild(new Container());

setTimeout(async () => {
    await oliveGarden();
})
