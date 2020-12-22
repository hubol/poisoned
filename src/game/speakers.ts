import {Vector} from "../utils/math/vector";

type Speaker = Vector;

let currentSpeaker: Speaker | null;

export function getCurrentSpeaker()
{
    return currentSpeaker;
}

export function setCurrentSpeaker(speaker: Speaker)
{
    currentSpeaker = speaker;
}
