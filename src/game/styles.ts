import {
    CharacterFaceAmusedClosed, CharacterFaceChristian,
    CharacterFaceClueless,
    CharacterFaceDead, CharacterFaceMiserable, CharacterFacePeering,
    CharacterFaceWhitesSmile, CharacterHeadBald, CharacterHeadBoyish,
    CharacterHeadLemon, CharacterHeadMessy, CharacterHeadPointed,
    CharacterHeadSharp, CharacterHeadShoulderLengthHair
} from "../typedAssets/textures";
import {Texture} from "pixi.js";
import {Howl} from "howler";
import {CharacterArgs} from "./character";
import {VoiceDecay2, VoiceGay, VoiceLow, VoiceRough} from "../typedAssets/sounds";

export const styles = {
    hubol: style(0xF4D623, CharacterHeadLemon, CharacterFaceWhitesSmile, VoiceDecay2),
    cole: style(0x2FB783, CharacterHeadSharp, CharacterFaceDead, VoiceGay),
    trey: style(0xFCA1CD, CharacterHeadMessy, CharacterFaceAmusedClosed, VoiceGay),
    john: style(0xF49B46, CharacterHeadPointed, CharacterFacePeering, VoiceLow),
    josh: style(0xC7B6EA, CharacterHeadBoyish, CharacterFaceChristian, VoiceRough),
    keane: style(0x92C98D, CharacterHeadShoulderLengthHair, CharacterFaceMiserable, VoiceLow),
    valera: style(0xB2B596, CharacterHeadBald, CharacterFaceClueless, VoiceRough),
};

function style(color: number, headTexture: Texture, faceTexture: Texture, voice: Howl): CharacterArgs
{
    return { voice, headTexture, faceTexture, color };
}
