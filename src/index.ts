import {loadFontsAsync} from "./typedAssets/fonts";
import {loadHowlsAsync} from "./utils/resources/loadHowls";
import {Howl} from "howler";
import * as PIXI from "pixi.js";
import {loadTexturesAsync} from "./typedAssets/textures";
import {environment} from "./utils/environment";
import {devMute} from "./game/dev/devMute";

async function initialize()
{
    const howls = Object.values(require("./typedAssets/sounds")) as Howl[];
    (PIXI.settings.MIPMAP_TEXTURES as any) = false;
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    await Promise.all([loadFontsAsync(), loadTexturesAsync(), loadHowlsAsync(howls)]);

    if (!environment.isProduction)
        devMute();

    require("./game/game.ts");
}

window.onload = initialize;
