import * as PIXI from "pixi.js";
    
// This file is generated. Do not touch.

export let BackgroundBathroomExterior: PIXI.Texture;
export let BackgroundBreadGarden: PIXI.Texture;
export let BackgroundCafeExterior: PIXI.Texture;
export let BackgroundDinnerTable: PIXI.Texture;
export let BackgroundHyvee: PIXI.Texture;
export let BackgroundLunchWithExCoworkers: PIXI.Texture;
export let BackgroundOliveGarden: PIXI.Texture;
export let BackgroundStreetCorner: PIXI.Texture;
export let BackgroundZoomWithJosh: PIXI.Texture;
export let CharacterBody: PIXI.Texture;
export let CharacterFaceAmusedClosed: PIXI.Texture;
export let CharacterFaceChristian: PIXI.Texture;
export let CharacterFaceClueless: PIXI.Texture;
export let CharacterFaceDead: PIXI.Texture;
export let CharacterFaceMiserable: PIXI.Texture;
export let CharacterFacePeering: PIXI.Texture;
export let CharacterFaceWhitesSmile: PIXI.Texture;
export let CharacterHeadBald: PIXI.Texture;
export let CharacterHeadBoyish: PIXI.Texture;
export let CharacterHeadLemon: PIXI.Texture;
export let CharacterHeadMessy: PIXI.Texture;
export let CharacterHeadPointed: PIXI.Texture;
export let CharacterHeadSharp: PIXI.Texture;
export let CharacterHeadShoulderLengthHair: PIXI.Texture;
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

    const BackgroundDinnerTablePath = require("../../assets/images/background/dinner table.png");
    loader.add(BackgroundDinnerTablePath); 

    const BackgroundHyveePath = require("../../assets/images/background/hyvee.png");
    loader.add(BackgroundHyveePath); 

    const BackgroundLunchWithExCoworkersPath = require("../../assets/images/background/lunch with ex coworkers.png");
    loader.add(BackgroundLunchWithExCoworkersPath); 

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

    const CharacterFaceCluelessPath = require("../../assets/images/character/face clueless.png");
    loader.add(CharacterFaceCluelessPath); 

    const CharacterFaceDeadPath = require("../../assets/images/character/face dead.png");
    loader.add(CharacterFaceDeadPath); 

    const CharacterFaceMiserablePath = require("../../assets/images/character/face miserable.png");
    loader.add(CharacterFaceMiserablePath); 

    const CharacterFacePeeringPath = require("../../assets/images/character/face peering.png");
    loader.add(CharacterFacePeeringPath); 

    const CharacterFaceWhitesSmilePath = require("../../assets/images/character/face whites smile.png");
    loader.add(CharacterFaceWhitesSmilePath); 

    const CharacterHeadBaldPath = require("../../assets/images/character/head bald.png");
    loader.add(CharacterHeadBaldPath); 

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

    const CharacterHeadShoulderLengthHairPath = require("../../assets/images/character/head shoulder length hair.png");
    loader.add(CharacterHeadShoulderLengthHairPath); 

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
            BackgroundDinnerTable = resources[BackgroundDinnerTablePath]?.texture as PIXI.Texture;
            BackgroundHyvee = resources[BackgroundHyveePath]?.texture as PIXI.Texture;
            BackgroundLunchWithExCoworkers = resources[BackgroundLunchWithExCoworkersPath]?.texture as PIXI.Texture;
            BackgroundOliveGarden = resources[BackgroundOliveGardenPath]?.texture as PIXI.Texture;
            BackgroundStreetCorner = resources[BackgroundStreetCornerPath]?.texture as PIXI.Texture;
            BackgroundZoomWithJosh = resources[BackgroundZoomWithJoshPath]?.texture as PIXI.Texture;
            CharacterBody = resources[CharacterBodyPath]?.texture as PIXI.Texture;
            CharacterFaceAmusedClosed = resources[CharacterFaceAmusedClosedPath]?.texture as PIXI.Texture;
            CharacterFaceChristian = resources[CharacterFaceChristianPath]?.texture as PIXI.Texture;
            CharacterFaceClueless = resources[CharacterFaceCluelessPath]?.texture as PIXI.Texture;
            CharacterFaceDead = resources[CharacterFaceDeadPath]?.texture as PIXI.Texture;
            CharacterFaceMiserable = resources[CharacterFaceMiserablePath]?.texture as PIXI.Texture;
            CharacterFacePeering = resources[CharacterFacePeeringPath]?.texture as PIXI.Texture;
            CharacterFaceWhitesSmile = resources[CharacterFaceWhitesSmilePath]?.texture as PIXI.Texture;
            CharacterHeadBald = resources[CharacterHeadBaldPath]?.texture as PIXI.Texture;
            CharacterHeadBoyish = resources[CharacterHeadBoyishPath]?.texture as PIXI.Texture;
            CharacterHeadLemon = resources[CharacterHeadLemonPath]?.texture as PIXI.Texture;
            CharacterHeadMessy = resources[CharacterHeadMessyPath]?.texture as PIXI.Texture;
            CharacterHeadPointed = resources[CharacterHeadPointedPath]?.texture as PIXI.Texture;
            CharacterHeadSharp = resources[CharacterHeadSharpPath]?.texture as PIXI.Texture;
            CharacterHeadShoulderLengthHair = resources[CharacterHeadShoulderLengthHairPath]?.texture as PIXI.Texture;
            Cone = resources[ConePath]?.texture as PIXI.Texture;
            HeldHands = resources[HeldHandsPath]?.texture as PIXI.Texture;
            IsoscelesTriangle = resources[IsoscelesTrianglePath]?.texture as PIXI.Texture;
            PythagoreanTheorem = resources[PythagoreanTheoremPath]?.texture as PIXI.Texture;

            resolve();
        });
    });
}