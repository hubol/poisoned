import {createGame} from "../utils/asshat/createGame";
import {integralUpscaleCanvas} from "../utils/browser/integralUpscaleCanvas";
import {character} from "./character";
import {styles} from "./styles";
import {Container} from "pixi.js";
import {dialog} from "./dialog";

const game = createGame({width: 128, height: 128, targetFps: 60});
game.canvasElement.id = "gameCanvas";
document.body.appendChild(game.canvasElement);
integralUpscaleCanvas(game.canvasElement, 20);

const hubol = character(styles.hubol)
    .withStep(() => {
        hubol.subimage += 0.1;
        if (hubol.subimage % 6 < 0.1)
            hubol.scale.x *= -1;
    })
    .at(64, 64);
game.stage.addChild(hubol);

export const hudStage = game.stage.addChild(new Container());

setTimeout(async () => {
    await dialog.say("That's so cute that you cook for yourself... And make drinks...");
    await dialog.say("You really treat yourself.");
    await dialog.say("No, I don't treat myself. I treat myself like a person.");
    await dialog.say("Then what do I treat myself like?");
})
