import {Container, Sprite, Texture} from "pixi.js";
import {CharacterBody} from "../typedAssets/textures";
import {subimageTextures} from "../utils/pixi/simpleSpritesheet";
import {merge} from "../utils/merge";
import {isSpeaking, say} from "./say";
import {getCurrentSpeaker, setCurrentSpeaker} from "./speakers";
import {lerp} from "../utils/math/number";

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

    const headContainer = new Container();
    headContainer.addChild(headSprite, faceSprite);

    const bodySprite = Sprite.from(bodyTextures[0]);
    bodySprite.tint = color;
    const container = new Container();

    container.addChild(bodySprite, headContainer);

    const character = merge(container,
        {
            facingAway: false,
            subimage: 0,
            async say(text: string)
            {
                setCurrentSpeaker(container);
                await say(text);
            }
        });
    headContainer.pivot.set(15, 21);
    headContainer.position.set(headContainer.pivot.x, headContainer.pivot.y);
    character.pivot.set(16, 32);

    let speakingSteps = 0;
    let speakingFactor = 0;

    return character.withStep(() => {
        const x = Math.floor(Math.abs(character.subimage) % 3);
        bodySprite.texture = bodyTextures[x];

        headSprite.y = x === 1 ? -1 : 0;
        faceSprite.y = x === 1 ? -1 : 0;
        faceSprite.visible = !character.facingAway;

        headContainer.scale.set(1, 1);

        const isCurrentSpeaker = getCurrentSpeaker() === character;

        if (isSpeaking)
        {
            if (isCurrentSpeaker)
            {
                speakingSteps++;
                speakingFactor = 1;
            }
        }
        else
        {
            speakingFactor *= 0.9;
            if (speakingFactor < 0.1)
                speakingFactor = 0;
            if (!isCurrentSpeaker)
                speakingSteps = 0;
        }

        if (speakingFactor > 0)
        {
            const f = Math.abs(Math.sin((speakingSteps / 60) * 12));
            const dx = lerp(0.5, 1, f);
            const ddx = lerp(1, dx, speakingFactor);
            headContainer.scale.set(ddx, 2 - ddx);
        }

        character.pivot.set(16, 32);
        if (x === 2)
            character.pivot.set(16, 28);
    });
}
