import {Vector} from "../utils/math/vector";
import {Howl} from "howler";
import {VoiceDecay} from "../typedAssets/sounds";

type Speaker = Vector & { voice?: Howl };

let currentSpeaker: Speaker | null;

export function getCurrentSpeaker()
{
    return currentSpeaker;
}

export function setCurrentSpeaker(speaker: Speaker)
{
    currentSpeaker = speaker;
}

export function clearCurrentSpeaker()
{
    currentSpeaker = null;
}

export function getCurrentSpeakerVoice()
{
    const voice = currentSpeaker?.voice;
    return voice ? voice : VoiceDecay;
}
