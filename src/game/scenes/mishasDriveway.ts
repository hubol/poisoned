import {character} from "../character";
import {styles} from "../styles";
import {sleep} from "pissant";
import {sceneStage} from "../game";
import {Sprite} from "pixi.js";
import {BackgroundMishasDriveway, BuckwheatPackage, MishasJacket, PaintedBox} from "../../typedAssets/textures";
import {add} from "../../utils/math/vector";
import {lerp} from "../lerp";

export async function mishasDriveway()
{
    const hubol = character(styles.hubol).at(64 + 18, 116);
    hubol.scale.x *= -1;
    const misha = character(styles.misha).at(64 - 18, 116);

    const buckwheatPackage = Sprite.from(BuckwheatPackage).at(add({ x: 0, y: -11 }, misha));

    sceneStage.addChild(Sprite.from(BackgroundMishasDriveway), hubol, misha, buckwheatPackage);

    await sleep(500);
    await lerp(buckwheatPackage, "x").to(buckwheatPackage.x + 8).over(500);
    await sleep(500);
    await misha.say("Russian buckwheat. Bucklewheat? Buckwheat, I think.");
    await misha.say("And the company threw in some free gifts, probably good I guess.");
    const acceptBuckwheatPackage = lerp(buckwheatPackage, "x").to(hubol.x - 8).over(500);
    await hubol.say("Aw thanks, Misha.");
    await acceptBuckwheatPackage;
    await lerp(buckwheatPackage, "y").to(hubol.y - buckwheatPackage.height + 1).over(250);
    await hubolSearchForItem();
    const mishasJacket = sceneStage.addChild(Sprite.from(MishasJacket).at(add({ x: -20, y: -12 }, hubol)));
    await sleep(500);
    await hubol.say("Here's your jacket.");
    await lerp(mishasJacket, "x").to(misha.x).over(500);
    const placeMishasJacket = lerp(mishasJacket, "y").to(misha.y - mishasJacket.height + 2).over(500);
    await hubolSearchForItem();
    const paintedBox = sceneStage.addChild(Sprite.from(PaintedBox).at(add({ x: -20, y: -12 }, hubol)));
    await sleep(500);
    await hubol.say("And do you want this box I painted in 2015?");
    await placeMishasJacket;
    await misha.say("Do I want this box you painted in 2015? Of course I want this. It's great.");
    await lerp(paintedBox, "x").to(misha.x - 12).over(500);
    await lerp(paintedBox, "y").to(misha.y - paintedBox.height + 1).over(500);
    await sleep(2000);
    await misha.say("So, I probably won't see you again in my lifetime.");
    await hubol.say("I don't know about that, Misha. I'll be back someday. Izzy is going to get married.");
    await misha.say("Oh? Oh. Okay.");
    await sleep(1000);
    await misha.say("Best of luck to you and your family.");
    await hubol.say("Same to you, Misha.");
    await sleep(1000);

    async function hubolSearchForItem()
    {
        await sleep(500);
        hubol.scale.x *= -1;
        await sleep(500);
        hubol.scale.x *= -1;
    }
}
