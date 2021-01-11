import {Character, character} from "../character";
import {styles} from "../styles";
import {sleep, wait} from "pissant";
import {game, sceneStage} from "../game";
import {Graphics, Sprite} from "pixi.js";
import {narrator} from "../narrator";
import {lerp} from "../lerp";
import {InTheNight} from "../../typedAssets/musics";

import {Credits, ThankYou, TitleCard} from "../../typedAssets/textures";

export async function nightWalk()
{
    const hubol = character(styles.hubol).at(64, 105);
    setTimeout(async () => await walkForever(hubol));

    const blackout = new Graphics().beginFill(0).drawRect(0, 0, 128, 128);
    blackout.alpha = 1;

    sceneStage.addChild(hubol, blackout);

    await sleep(1000);
    await narrateAll(
        "What am I doing this for?",
        "I'm immortalizing and warping private and special moments.",);

    await sleep(1000);
    await lerp(blackout, "alpha").to(0).over(1000);
    await sleep(1000);

    await narrateAll(
        "On walks sometimes, I think about how I might go about cataloging every moment of my life.",
        "But what would an absurd project like that even have to say?",
        "And at what point would I end up recursively cataloging the act of cataloging?",
        "Or would I arbitrarily leave that out?",
        "I certainly left a lot out here. But what was I using to filter?",);

    await sleep(2000);
    await narrateAll(
        "My friend Jack showed me this song by Gary Wilson.",
        "When I go on walks at night, I think about the song.",
        "And I think about all the people I've loved.",
        "And all the people I've hurt.",
        "And I think about the future.",
        "And I think about the night.",);

    InTheNight.play();
    await waitForSongPosition(.963);
    hubol.destroy();
    await waitForSongPosition(2.862);
    sceneStage.addChild(Sprite.from(TitleCard));
    await waitForSongPosition(12.508);
    sceneStage.addChild(Sprite.from(Credits));
    await waitForSongPosition(22.139);
    sceneStage.addChild(Sprite.from(ThankYou));
    await wait(() => !InTheNight.playing());
    closeGame();
}

async function waitForSongPosition(seconds: number)
{
    await wait(() => InTheNight.state() === "loaded" && InTheNight.seek() >= seconds, 5);
}

async function walkForever(character: Character, ms = 1000)
{
    while (!character.destroyed)
    {
        character.subimage = 0;
        await sleep(ms);
        character.subimage = 1;
        await sleep(ms);
    }
}

async function narrateAll(...messages: string[])
{
    for (const message of messages)
        await narrator.say(message);
}

function closeGame()
{
    window.history.back();
    game.canvasElement.remove();
}
