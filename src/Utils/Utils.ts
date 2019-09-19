class Utils {
	public constructor() {
	}
	
    public static rand(a: number,b: number): number {
        var diff: number = b - a - 1;
        var r: number = Math.random() * diff;
        return Math.round(r) + a;
    }
    
    public static imageProxyUrl(url:string){
        return (egret.Capabilities.renderMode == "webgl") ? 
            window["API_SERVER"] + "api.php?cmd=image_proxy&url=" + encodeURIComponent(url) : 
            url;
    }
}