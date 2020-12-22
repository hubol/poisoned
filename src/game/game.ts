import {createGame} from "../utils/asshat/createGame";
import {integralUpscaleCanvas} from "../utils/browser/integralUpscaleCanvas";
import {character} from "./character";
import {styles} from "./styles";

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
