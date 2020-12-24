import {tickerWait} from "./tickerWait";
import {PropertiesOf} from "../utils/types/propertiesOf";
import {game} from "./game";
import {lerp as lerpNumber} from "../utils/math/number";

export function lerp<T>(object: T, key: keyof PropertiesOf<T, number>)
{
    return {
        to(target: number)
        {
            return {
                over(ms: number)
                {
                    let currentTick = 0;
                    const start = object[key] as unknown as number;

                    return tickerWait(() => {
                            currentTick++;
                            const currentMs = (currentTick * 1000) / game.maxFps;
                            const factor = Math.min(currentMs / ms, 1);

                            object[key] = lerpNumber(start, target, factor) as any;

                            return factor >= 1;
                        });
                }
            }
        }
    }
}
