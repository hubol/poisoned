import {Character, character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {sleep} from "pissant";
import {Container, Sprite} from "pixi.js";
import {lerp} from "../lerp";
import {subimageTextures} from "../../utils/pixi/simpleSpritesheet";
import {BackgroundBentonApartment} from "../../typedAssets/textures";
import {merge} from "../../utils/merge";
import {DoorClose, DoorOpen, Step1, Step2, Tone} from "../../typedAssets/sounds";

export async function bentonApartment()
{
    const hubol = character(styles.hubol).at(64 - 25, 105 - 4);
    hubol.subimage = 2;
    const megan = character(styles.megan).at(64 + 25, 105 - 2);
    [hubol, megan].forEach(x => x.scale.x *= -1);

    const door = makeDoor();

    sceneStage.addChild(door, hubol, megan);

    megan.visible = false;
    await walk();
    await sleep(1000);
    door.open();
    megan.visible = true;
    await sleep(333);
    Step1.play();
    megan.subimage = 1;
    await lerp(megan, "y").to(megan.y + 8).over(300);
    Step2.play();
    megan.subimage = 0;
    await sleep(500);
    door.close();
    await sleep(500);
    await megan.say("I let him hit it raw.")
    await sleep(250);
    const tone = createTone(hubol);
    tone.start();
    await shrink(hubol);
    tone.stop();
    await sleep(1000);
}

function createTone(character: Character)
{
    const sound = Tone;
    sound.loop(true);

    character.withStep(() => {
        sound.rate(character.scale.y * 2 + 1);
        sound.volume(character.scale.y);
    });

    return {
        start()
        {
            sound.play();
        },
        stop()
        {
            sound.stop();
        }
    }
}

async function walk(steps = 6)
{
    for (let i = 0; i < steps; i++)
    {
        const volume = Math.min(1, (i + 1) / steps);
        // @ts-ignore
        Step1.volume(volume).play();
        await sleep(300);
        // @ts-ignore
        Step2.volume(volume).play();
        await sleep(300);
    }
}

function makeDoor()
{
    const backgroundTextures = subimageTextures(BackgroundBentonApartment, 2);

    const sprite = Sprite.from(backgroundTextures[0]);

    return merge(sprite, {
        open()
        {
            DoorOpen.play();
            sprite.texture = backgroundTextures[1];
        },
        close()
        {
            DoorClose.play();
            sprite.texture = backgroundTextures[0];
        }
    })
}

function shrink(container: Container, ms = 4000)
{
    return Promise.all([
        lerp(container.scale, "x").to(0).over(ms),
        lerp(container.scale, "y").to(0).over(ms),
    ]);
}
