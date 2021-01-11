import {loadFontsAsync} from "./typedAssets/fonts";
import {loadHowlsAsync} from "./utils/resources/loadHowls";
import {Howl} from "howler";
import * as PIXI from "pixi.js";
import {loadTexturesAsync} from "./typedAssets/textures";
import {environment} from "./utils/environment";
import {devMute} from "./game/dev/devMute";
import {removeMobileSafariGrayHighlight} from "./utils/browser/removeMobileSafariGrayHighlight";

removeMobileSafariGrayHighlight();

async function initialize()
{
    const loadingElement = createLoadingElement();

    const howls = Object.values(require("./typedAssets/sounds")) as Howl[];
    (PIXI.settings.MIPMAP_TEXTURES as any) = false;
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    await Promise.all([loadFontsAsync(), loadTexturesAsync(), loadHowlsAsync(howls)]);

    loadingElement.remove();

    if (!environment.isProduction)
        devMute();

    require("./game/game.ts");
}

function createLoadingElement()
{
    const loadingElement = document.createElement('p');
    document.body.appendChild(loadingElement);
    loadingElement.id = "loading";
    return loadingElement;
}

if (environment.isProduction && !environment.isElectron)
    document.body.appendChild(createStartGameButtonElement());
else
    window.onload = initialize;

function createStartGameButtonElement()
{
    const buttonElement = document.createElement("button");
    buttonElement.id = "startButton";
    buttonElement.onclick = () => {
        document.body.removeChild(buttonElement);
        setTimeout(initialize);
    };
    return buttonElement;
}
