import {character} from "../character";
import {styles} from "../styles";
import {sceneStage} from "../game";
import {Container, DisplayObject, Sprite, Texture} from "pixi.js";
import {sleep} from "pissant";
import {BackgroundBreadGarden, Cone, IsoscelesTriangle, PythagoreanTheorem} from "../../typedAssets/textures";
import {add, normalize, scale, vector} from "../../utils/math/vector";
import {lerp} from "../lerp";
import {Buzz, MathAppear} from "../../typedAssets/sounds";

export async function breadGarden()
{
    sceneStage.addChild(Sprite.from(BackgroundBreadGarden));
    const padding = 40;
    const y = 118;
    const hubol = character(styles.hubol).at(padding, y);
    const cole = character(styles.cole).at(128 - padding, y);
    cole.scale.x *= -1;
    [hubol, cole].forEach(x => x.subimage = 2);
    sceneStage.addChild(hubol, cole);

    await sleep(1000);
    await cole.say("I hate walking.");
    await hubol.say("You do? Then why do you do it with me?");
    await cole.say("Think about it.");
    await sleep(1000);
    await hubol.say("Hm...");
    const math = createMath(hubol);
    await sleep(1500);
    await hubol.say("HMM...");
    await sleep(2000);
    await lerp(math, "alpha").to(0).over(250);
    const position = vector(hubol);
    hubol.shake.x = 1;
    Buzz.play();
    await hubol.say("HMMMMM!!!");
    hubol.at(position);
    hubol.shake.x = 0;
    Buzz.stop();
    await sleep(1000);
    await hubol.say("Maybe it's because you like me?");
    await sleep(1000);
}

function createMath(hubol: DisplayObject)
{
    const container = sceneStage.addChild(new Container());
    const pieceFactories = [
        () => mathPiece(PythagoreanTheorem).at(add({ x: 2, y: - 32 }, hubol)),
        () => mathPiece(IsoscelesTriangle).at(add({ x: 2, y: - 32 }, hubol)),
        () => mathPiece(Cone).at(add({ x: 0, y: - 32 }, hubol)),
    ];

    setTimeout(async () => {
        let volume = 0.5;
       while (true)
       {
           for (const pieceFactory of pieceFactories) {
               if (container.alpha < 0.1)
                   return;
               const piece = pieceFactory();
               container.addChild(piece);
               MathAppear.stop();
               MathAppear.rate(0.8 + Math.random() * 0.4);
               MathAppear.volume(volume);
               MathAppear.play();
               await lerp(piece, "alpha").to(1).over(250);
               await sleep(500);
               await lerp(piece, "alpha").to(0).over(250);
               piece.destroy();
               volume *= 0.9125;
           }
       }
    });

    return container;
}

function mathPiece(texture: Texture)
{
    const speed = scale(normalize({ x: -.5 + Math.random(), y: -.5 + Math.random() }), 0.2);
    let pos;
    const sprite = Sprite.from(texture)
        .withStep(() => {
            if (!pos)
                pos = vector(sprite.position);

            add(pos, speed);
            sprite.position.set(Math.round(pos.x), Math.round(pos.y));
        });

    sprite.anchor.set(0.5, 1);
    sprite.alpha = 0;
    return sprite;
}
