import {game} from "./game";

type Predicate<T> = () => T;

export function tickerWait<T>(predicate: Predicate<T>)
{
    let fn: () => void;

    return new Promise<T>((resolve) => {
        fn = () => {
            const value = predicate();
            if (!!value)
                resolve(value);
        };

        game.ticker.add(fn);
    })
        .finally(() => game.ticker.remove(fn));
}
