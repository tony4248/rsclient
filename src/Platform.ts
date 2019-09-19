/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {

    getUserInfo(): Promise<any>;

    login(username:string): Promise<any>

}

class DebugPlatform implements Platform {
    async getUserInfo() {
        return ClientModule.GetInstance().UserInfo;
    }
    async login(username:string) {

        var params = "?Channel=REG&GameType=RM_DDZ&User=admin&AppName=WX_5E8A";
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //将参数拼接到url
        request.open("http://139.199.80.217/www/login/login_test.php" + params, egret.HttpMethod.GET);
        // request.open("http://127.0.0.1/www/login/login_test.php" + params, egret.HttpMethod.GET);
        request.send();

        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    }

    private onPostComplete(event: egret.Event): void {
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("post data : ", request.response);
        let user: JsonUser = JSON.parse(request.response)
        ClientModule.GetInstance().UserInfo = user;
        NetMgr.GetInstance().Connect(user.FES);
    }

    private onPostIOError(event: egret.IOErrorEvent): void {
        console.log("post error : " + event);
    }
    private onPostProgress(event: egret.ProgressEvent): void {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }
}


if (!window.platform) {
    window.platform = new DebugPlatform();
}



declare let platform: Platform;

declare interface Window {

    platform: Platform
}





