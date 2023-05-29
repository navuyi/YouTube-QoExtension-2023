import { VideoPlayer } from "./VideoPlayer";


/**
 * Player class is responsible for managing audio-video playback.
 * Audio-video synchronization, player UI, seeking, pausing etc.
*/
export class Player{
    private video : VideoPlayer

    constructor(video:VideoPlayer){
        this.video = video
    }
}