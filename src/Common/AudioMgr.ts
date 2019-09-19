class AudioMgr extends egret.DisplayObject {
	public constructor() {
		super();
	}
	static audio: AudioMgr;

	bgSound: egret.Sound;
	bgSoundCanel: egret.SoundChannel;

	extraAudio: egret.Sound;
	public static GetInstance(): AudioMgr {
		if (this.audio == null) this.audio = new AudioMgr();
		return this.audio;
	}
	public PlayBgAudio(str: string) {
		if (this.bgSound == null) this.bgSound = RES.getRes(str)
		if (this.bgSoundCanel != null) this.bgSoundCanel.stop();
		this.bgSoundCanel = this.bgSound.play(0,0)
	}
	public StopBgAudio() {
		if (this.bgSoundCanel != null) this.bgSoundCanel.stop();
	}

	public ExtraSound(str: string) {
		let sound: egret.Sound = RES.getRes(str)
		sound.play(0, 1);
	}
}

