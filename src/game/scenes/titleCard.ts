import {TitleCardClang} from "../../typedAssets/sounds";
import {sleep} from "pissant";
import {Sprite} from "pixi.js";
import { TitleCard } from "../../typedAssets/textures";
import {background, sceneStage} from "../game";

export async function titleCard()
{
    const sprite = Sprite.from(TitleCard);
    background.tint = 0xffff00;
    sprite.tint = 0x0000ff;
    sceneStage.addChild(sprite);
    TitleCardClang.play();
    await sleep(4000);
}
