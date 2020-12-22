import * as PIXI from "pixi.js";
    
// This file is generated. Do not touch.

export let CharacterBody: PIXI.Texture;
export let CharacterFaceAmusedClosed: PIXI.Texture;
export let CharacterFaceDead: PIXI.Texture;
export let CharacterFaceWhitesSmile: PIXI.Texture;
export let CharacterHeadLemon: PIXI.Texture;
export let CharacterHeadMessy: PIXI.Texture;
export let CharacterHeadSharp: PIXI.Texture;
export let Iguana: PIXI.Texture;


export function loadTexturesAsync()
{
    const loader = new PIXI.Loader();

    const CharacterBodyPath = require("../../assets/images/character/body.png");
    loader.add(CharacterBodyPath); 

    const CharacterFaceAmusedClosedPath = require("../../assets/images/character/face amused closed.png");
    loader.add(CharacterFaceAmusedClosedPath); 

    const CharacterFaceDeadPath = require("../../assets/images/character/face dead.png");
    loader.add(CharacterFaceDeadPath); 

    const CharacterFaceWhitesSmilePath = require("../../assets/images/character/face whites smile.png");
    loader.add(CharacterFaceWhitesSmilePath); 

    const CharacterHeadLemonPath = require("../../assets/images/character/head lemon.png");
    loader.add(CharacterHeadLemonPath); 

    const CharacterHeadMessyPath = require("../../assets/images/character/head messy.png");
    loader.add(CharacterHeadMessyPath); 

    const CharacterHeadSharpPath = require("../../assets/images/character/head sharp.png");
    loader.add(CharacterHeadSharpPath); 

    const IguanaPath = require("../../assets/images/iguana.png");
    loader.add(IguanaPath); 

    
    return new Promise<void>(resolve =>
    {
        loader.load((_, resources) => {
            CharacterBody = resources[CharacterBodyPath]?.texture as PIXI.Texture;
            CharacterFaceAmusedClosed = resources[CharacterFaceAmusedClosedPath]?.texture as PIXI.Texture;
            CharacterFaceDead = resources[CharacterFaceDeadPath]?.texture as PIXI.Texture;
            CharacterFaceWhitesSmile = resources[CharacterFaceWhitesSmilePath]?.texture as PIXI.Texture;
            CharacterHeadLemon = resources[CharacterHeadLemonPath]?.texture as PIXI.Texture;
            CharacterHeadMessy = resources[CharacterHeadMessyPath]?.texture as PIXI.Texture;
            CharacterHeadSharp = resources[CharacterHeadSharpPath]?.texture as PIXI.Texture;
            Iguana = resources[IguanaPath]?.texture as PIXI.Texture;

            resolve();
        });
    });
}