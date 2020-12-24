import * as PIXI from "pixi.js";
    
// This file is generated. Do not touch.

export let BackgroundBathroomExterior: PIXI.Texture;
export let BackgroundBreadGarden: PIXI.Texture;
export let BackgroundCafeExterior: PIXI.Texture;
export let BackgroundOliveGarden: PIXI.Texture;
export let BackgroundStreetCorner: PIXI.Texture;
export let CharacterBody: PIXI.Texture;
export let CharacterFaceAmusedClosed: PIXI.Texture;
export let CharacterFaceDead: PIXI.Texture;
export let CharacterFacePeering: PIXI.Texture;
export let CharacterFaceWhitesSmile: PIXI.Texture;
export let CharacterHeadLemon: PIXI.Texture;
export let CharacterHeadMessy: PIXI.Texture;
export let CharacterHeadPointed: PIXI.Texture;
export let CharacterHeadSharp: PIXI.Texture;
export let HeldHands: PIXI.Texture;


export function loadTexturesAsync()
{
    const loader = new PIXI.Loader();

    const BackgroundBathroomExteriorPath = require("../../assets/images/background/bathroom exterior.png");
    loader.add(BackgroundBathroomExteriorPath); 

    const BackgroundBreadGardenPath = require("../../assets/images/background/bread garden.png");
    loader.add(BackgroundBreadGardenPath); 

    const BackgroundCafeExteriorPath = require("../../assets/images/background/cafe exterior.png");
    loader.add(BackgroundCafeExteriorPath); 

    const BackgroundOliveGardenPath = require("../../assets/images/background/olive garden.png");
    loader.add(BackgroundOliveGardenPath); 

    const BackgroundStreetCornerPath = require("../../assets/images/background/street corner.png");
    loader.add(BackgroundStreetCornerPath); 

    const CharacterBodyPath = require("../../assets/images/character/body.png");
    loader.add(CharacterBodyPath); 

    const CharacterFaceAmusedClosedPath = require("../../assets/images/character/face amused closed.png");
    loader.add(CharacterFaceAmusedClosedPath); 

    const CharacterFaceDeadPath = require("../../assets/images/character/face dead.png");
    loader.add(CharacterFaceDeadPath); 

    const CharacterFacePeeringPath = require("../../assets/images/character/face peering.png");
    loader.add(CharacterFacePeeringPath); 

    const CharacterFaceWhitesSmilePath = require("../../assets/images/character/face whites smile.png");
    loader.add(CharacterFaceWhitesSmilePath); 

    const CharacterHeadLemonPath = require("../../assets/images/character/head lemon.png");
    loader.add(CharacterHeadLemonPath); 

    const CharacterHeadMessyPath = require("../../assets/images/character/head messy.png");
    loader.add(CharacterHeadMessyPath); 

    const CharacterHeadPointedPath = require("../../assets/images/character/head pointed.png");
    loader.add(CharacterHeadPointedPath); 

    const CharacterHeadSharpPath = require("../../assets/images/character/head sharp.png");
    loader.add(CharacterHeadSharpPath); 

    const HeldHandsPath = require("../../assets/images/held hands.png");
    loader.add(HeldHandsPath); 

    
    return new Promise<void>(resolve =>
    {
        loader.load((_, resources) => {
            BackgroundBathroomExterior = resources[BackgroundBathroomExteriorPath]?.texture as PIXI.Texture;
            BackgroundBreadGarden = resources[BackgroundBreadGardenPath]?.texture as PIXI.Texture;
            BackgroundCafeExterior = resources[BackgroundCafeExteriorPath]?.texture as PIXI.Texture;
            BackgroundOliveGarden = resources[BackgroundOliveGardenPath]?.texture as PIXI.Texture;
            BackgroundStreetCorner = resources[BackgroundStreetCornerPath]?.texture as PIXI.Texture;
            CharacterBody = resources[CharacterBodyPath]?.texture as PIXI.Texture;
            CharacterFaceAmusedClosed = resources[CharacterFaceAmusedClosedPath]?.texture as PIXI.Texture;
            CharacterFaceDead = resources[CharacterFaceDeadPath]?.texture as PIXI.Texture;
            CharacterFacePeering = resources[CharacterFacePeeringPath]?.texture as PIXI.Texture;
            CharacterFaceWhitesSmile = resources[CharacterFaceWhitesSmilePath]?.texture as PIXI.Texture;
            CharacterHeadLemon = resources[CharacterHeadLemonPath]?.texture as PIXI.Texture;
            CharacterHeadMessy = resources[CharacterHeadMessyPath]?.texture as PIXI.Texture;
            CharacterHeadPointed = resources[CharacterHeadPointedPath]?.texture as PIXI.Texture;
            CharacterHeadSharp = resources[CharacterHeadSharpPath]?.texture as PIXI.Texture;
            HeldHands = resources[HeldHandsPath]?.texture as PIXI.Texture;

            resolve();
        });
    });
}