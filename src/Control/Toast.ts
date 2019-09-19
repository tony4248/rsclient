/**
 * Created by egret on 2016/1/26.
 */
class Toast extends egret.DisplayObjectContainer{
    
    public static init( cont:egret.DisplayObjectContainer, txtrToastBg:egret.Texture):void{
        console.log( "Toast.init", txtrToastBg );
        this._cont = cont;
        this._txtrToastBg = txtrToastBg;
    }
    
    public static launch( msg:string ):void{
        if( this._cont ){
            var toast:Toast = new Toast( msg, this._cont.stage.stageWidth, this._cont.stage.stageHeight );
            this._cont.addChild( toast );
        }
    }

    private static _txtrToastBg:egret.Texture;
    private static _cont:egret.DisplayObjectContainer;

    constructor ( msg:string, w:number, h:number ){
        super();
        
        console.log( "Toast:", msg );
        
        var bg:egret.Bitmap = new egret.Bitmap( Toast._txtrToastBg );
        this.addChild( bg );
        
        var tx:egret.TextField = new egret.TextField;
        tx.multiline = true;
        tx.size = 20;
        tx.bold = true;
        tx.textColor = 0xFFFFFF;
        tx.stroke = 2;
        tx.strokeColor = 0;
        tx.text = msg;
        tx.fontFamily = "微软雅黑";
        tx.textAlign = egret.HorizontalAlign.CENTER;
        tx.width = w * .84;
        tx.x = ( Toast._txtrToastBg.textureWidth - tx.width ) / 2;
        tx.y = 6;
        this.addChild( tx );
        
        bg.height = 12 + tx.height;

        this.anchorOffsetX = this.width * .5;
        this.anchorOffsetY = this.height * .5;
        this.x = w * .5 ;
        this.y = h * .618;
        
        this.alpha = 0;
        
        egret.Tween.get( this )
            .to( { alpha: 1 }, 800, egret.Ease.quintOut )
            //.to( { scaleX: 1.2, scaleY: 1.2 }, 100, egret.Ease.quintOut )
            //.call( ()=>{ console.log( "tween tween tween" ); } ) 
            //.to( { scaleX: 1.0, scaleY: 1.0 }, 300, egret.Ease.quintIn )
            .wait( 1600 )
            .to( { alpha: 0 }, 1200, egret.Ease.quintIn  ).call( ()=>{      /*  y: this.y - 50, */
            if( this.parent ){
                this.parent.removeChild( this );
            }
        } );
	}
}