import {
    CharacterFaceAmusedClosed, CharacterFaceChristian,
    CharacterFaceDead, CharacterFacePeering,
    CharacterFaceWhitesSmile, CharacterHeadBoyish,
    CharacterHeadLemon, CharacterHeadMessy, CharacterHeadPointed,
    CharacterHeadSharp
} from "../typedAssets/textures";

export const styles = {
    hubol: { color: 0xF4D623, headTexture: CharacterHeadLemon, faceTexture: CharacterFaceWhitesSmile },
    cole: { color: 0x2FB783, headTexture: CharacterHeadSharp, faceTexture: CharacterFaceDead },
    trey: { color: 0xFCA1CD, headTexture: CharacterHeadMessy, faceTexture: CharacterFaceAmusedClosed },
    john: { color: 0xF49B46, headTexture: CharacterHeadPointed, faceTexture: CharacterFacePeering },
    josh: { color: 0xC7B6EA, headTexture: CharacterHeadBoyish, faceTexture: CharacterFaceChristian },
};
