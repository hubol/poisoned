import * as PIXI from "pixi.js";
    
// This file is generated. Do not touch.

export let BackgroundBathroomExterior: PIXI.Texture;
export let BackgroundBreadGarden: PIXI.Texture;
export let BackgroundCafeExterior: PIXI.Texture;
export let BackgroundHyvee: PIXI.Texture;
export let BackgroundOliveGarden: PIXI.Texture;
export let BackgroundStreetCorner: PIXI.Texture;
export let BackgroundZoomWithJosh: PIXI.Texture;
export let CharacterBody: PIXI.Texture;
export let CharacterFaceAmusedClosed: PIXI.Texture;
export let CharacterFaceChristian: PIXI.Texture;
export let CharacterFaceDead: PIXI.Texture;
export let CharacterFacePeering: PIXI.Texture;
export let CharacterFaceWhitesSmile: PIXI.Texture;
export let CharacterHeadBoyish: PIXI.Texture;
export let CharacterHeadLemon: PIXI.Texture;
export let CharacterHeadMessy: PIXI.Texture;
export let CharacterHeadPointed: PIXI.Texture;
export let CharacterHeadSharp: PIXI.Texture;
export let Cone: PIXI.Texture;
export let HeldHands: PIXI.Texture;
export let IsoscelesTriangle: PIXI.Texture;
export let PythagoreanTheorem: PIXI.Texture;


export function loadTexturesAsync()
{
    const loader = new PIXI.Loader();

    const BackgroundBathroomExteriorPath = require("../../assets/images/background/bathroom exterior.png");
    loader.add(BackgroundBathroomExteriorPath); 

    const BackgroundBreadGardenPath = require("../../assets/images/background/bread garden.png");
    loader.add(BackgroundBreadGardenPath); 

    const BackgroundCafeExteriorPath = require("../../assets/images/background/cafe exterior.png");
    loader.add(BackgroundCafeExteriorPath); 

    const BackgroundHyveePath = require("../../assets/images/background/hyvee.png");
    loader.add(BackgroundHyveePath); 

    const BackgroundOliveGardenPath = require("../../assets/images/background/olive garden.png");
    loader.add(BackgroundOliveGardenPath); 

    const BackgroundStreetCornerPath = require("../../assets/images/background/street corner.png");
    loader.add(BackgroundStreetCornerPath); 

    const BackgroundZoomWithJoshPath = require("../../assets/images/background/zoom with josh.png");
    loader.add(BackgroundZoomWithJoshPath); 

    const CharacterBodyPath = require("../../assets/images/character/body.png");
    loader.add(CharacterBodyPath); 

    const CharacterFaceAmusedClosedPath = require("../../assets/images/character/face amused closed.png");
    loader.add(CharacterFaceAmusedClosedPath); 

    const CharacterFaceChristianPath = require("../../assets/images/character/face christian.png");
    loader.add(CharacterFaceChristianPath); 

    const CharacterFaceDeadPath = require("../../assets/images/character/face dead.png");
    loader.add(CharacterFaceDeadPath); 

    const CharacterFacePeeringPath = require("../../assets/images/character/face peering.png");
    loader.add(CharacterFacePeeringPath); 

    const CharacterFaceWhitesSmilePath = require("../../assets/images/character/face whites smile.png");
    loader.add(CharacterFaceWhitesSmilePath); 

    const CharacterHeadBoyishPath = require("../../assets/images/character/head boyish.png");
    loader.add(CharacterHeadBoyishPath); 

    const CharacterHeadLemonPath = require("../../assets/images/character/head lemon.png");
    loader.add(CharacterHeadLemonPath); 

    const CharacterHeadMessyPath = require("../../assets/images/character/head messy.png");
    loader.add(CharacterHeadMessyPath); 

    const CharacterHeadPointedPath = require("../../assets/images/character/head pointed.png");
    loader.add(CharacterHeadPointedPath); 

    const CharacterHeadSharpPath = require("../../assets/images/character/head sharp.png");
    loader.add(CharacterHeadSharpPath); 

    const ConePath = require("../../assets/images/cone.png");
    loader.add(ConePath); 

    const HeldHandsPath = require("../../assets/images/held hands.png");
    loader.add(HeldHandsPath); 

    const IsoscelesTrianglePath = require("../../assets/images/isosceles triangle.png");
    loader.add(IsoscelesTrianglePath); 

    const PythagoreanTheoremPath = require("../../assets/images/pythagorean theorem.png");
    loader.add(PythagoreanTheoremPath); 

    
    return new Promise<void>(resolve =>
    {
        loader.load((_, resources) => {
            BackgroundBathroomExterior = resources[BackgroundBathroomExteriorPath]?.texture as PIXI.Texture;
            BackgroundBreadGarden = resources[BackgroundBreadGardenPath]?.texture as PIXI.Texture;
            BackgroundCafeExterior = resources[BackgroundCafeExteriorPath]?.texture as PIXI.Texture;
            BackgroundHyvee = resources[BackgroundHyveePath]?.texture as PIXI.Texture;
            BackgroundOliveGarden = resources[BackgroundOliveGardenPath]?.texture as PIXI.Texture;
            BackgroundStreetCorner = resources[BackgroundStreetCornerPath]?.texture as PIXI.Texture;
            BackgroundZoomWithJosh = resources[BackgroundZoomWithJoshPath]?.texture as PIXI.Texture;
            CharacterBody = resources[CharacterBodyPath]?.texture as PIXI.Texture;
            CharacterFaceAmusedClosed = resources[CharacterFaceAmusedClosedPath]?.texture as PIXI.Texture;
            CharacterFaceChristian = resources[CharacterFaceChristianPath]?.texture as PIXI.Texture;
            CharacterFaceDead = resources[CharacterFaceDeadPath]?.texture as PIXI.Texture;
            CharacterFacePeering = resources[CharacterFacePeeringPath]?.texture as PIXI.Texture;
            CharacterFaceWhitesSmile = resources[CharacterFaceWhitesSmilePath]?.texture as PIXI.Texture;
            CharacterHeadBoyish = resources[CharacterHeadBoyishPath]?.texture as PIXI.Texture;
            CharacterHeadLemon = resources[CharacterHeadLemonPath]?.texture as PIXI.Texture;
            CharacterHeadMessy = resources[CharacterHeadMessyPath]?.texture as PIXI.Texture;
            CharacterHeadPointed = resources[CharacterHeadPointedPath]?.texture as PIXI.Texture;
            CharacterHeadSharp = resources[CharacterHeadSharpPath]?.texture as PIXI.Texture;
            Cone = resources[ConePath]?.texture as PIXI.Texture;
            HeldHands = resources[HeldHandsPath]?.texture as PIXI.Texture;
            IsoscelesTriangle = resources[IsoscelesTrianglePath]?.texture as PIXI.Texture;
            PythagoreanTheorem = resources[PythagoreanTheoremPath]?.texture as PIXI.Texture;

            resolve();
        });
    });
}