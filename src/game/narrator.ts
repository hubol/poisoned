import {say} from "./say";
import {clearCurrentSpeaker} from "./speakers";

export const narrator = {
    async say(text: string)
    {
        clearCurrentSpeaker();
        await say(text);
    }
}
