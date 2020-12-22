import {Container, Sprite, Texture} from "pixi.js";
import {CharacterBody} from "../typedAssets/textures";
import {subimageTextures} from "../utils/pixi/simpleSpritesheet";
import {merge} from "../utils/merge";

export interface CharacterArgs
{
    faceTexture: Texture;
    headTexture: Texture;
    color: number;
}

const bodyTextures = subimageTextures(CharacterBody, 3);

export function character({color, faceTexture, headTexture}: CharacterArgs)
{
    const headSprite = Sprite.from(headTexture);
    headSprite.tint = color;
    const faceSprite = Sprite.from(faceTexture);
    const bodySprite = Sprite.from(bodyTextures[0]);
    bodySprite.tint = color;
    const container = new Container();

    container.addChild(bodySprite, headSprite, faceSprite);

    const character = merge(container, { subimage: 0 });
    character.pivot.set(16, 32);

    return character.withStep(() => {
        const x = Math.floor(Math.abs(character.subimage) % 3);
        bodySprite.texture = bodyTextures[x];
        headSprite.y = x === 1 ? -1 : 0;
        faceSprite.y = x === 1 ? -1 : 0;
        character.pivot.set(16, 32);
        if (x === 2)
            character.pivot.set(16, 28);
    });
}
