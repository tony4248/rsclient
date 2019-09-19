window.skins=window.skins||{};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","border_down":"resource/GameSkin/pdk/border_down.exml","DdzLoadScene":"resource/eui_skins/DdzLoadScene.exml","DdzCreateScene":"resource/eui_skins/DdzCreateScene.exml","DdzSelectScene":"resource/eui_skins/DdzSelectScene.exml","LoadScene":"resource/eui_skins/LoadScene.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_on_btn_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_on_btn_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_on_btn_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_off_btn_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,8,8);
		t.source = "input_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.left = "10";
		t.right = "10";
		t.size = 30;
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.left = 10;
		t.right = 10;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 100;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "vslide_track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/CRadioButtonSkin.exml'] = window.CRadioButtonSkin = (function (_super) {
	__extends(CRadioButtonSkin, _super);
	function CRadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 65;
		this.width = 175;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","itembg_choosed_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = CRadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "itembg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x6822b5;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return CRadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/VScrollBar_ListSkin.exml'] = window.VScrollBar_ListSkin = (function (_super) {
	__extends(VScrollBar_ListSkin, _super);
	function VScrollBar_ListSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.width = 5;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VScrollBar_ListSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Rect();
		this.track = t;
		t.fillAlpha = 1;
		t.fillColor = 0x373453;
		t.percentHeight = 100;
		t.width = 3;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Rect();
		this.thumb = t;
		t.fillColor = 0x644773;
		t.height = 100;
		t.width = 5;
		t.x = 0;
		t.y = 10;
		return t;
	};
	return VScrollBar_ListSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/ListSkin.exml'] = window.ListSkin = (function (_super) {
	__extends(ListSkin, _super);
	function ListSkin() {
		_super.call(this);
		this.skinParts = ["verticalScrollBar"];
		
		this.width = 550;
		this.elementsContent = [this.verticalScrollBar_i()];
	}
	var _proto = ListSkin.prototype;

	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.bottom = 10;
		t.right = 2;
		t.skinName = "VScrollBar_ListSkin";
		t.top = 10;
		return t;
	};
	return ListSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Agent/agent.exml'] = window.AgentSkin = (function (_super) {
	__extends(AgentSkin, _super);
	var AgentSkin$Skin1 = 	(function (_super) {
		__extends(AgentSkin$Skin1, _super);
		function AgentSkin$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return AgentSkin$Skin1;
	})(eui.Skin);

	var AgentSkin$Skin2 = 	(function (_super) {
		__extends(AgentSkin$Skin2, _super);
		function AgentSkin$Skin2() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return AgentSkin$Skin2;
	})(eui.Skin);

	var AgentSkin$Skin3 = 	(function (_super) {
		__extends(AgentSkin$Skin3, _super);
		function AgentSkin$Skin3() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "申请代理";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return AgentSkin$Skin3;
	})(eui.Skin);

	var AgentSkin$Skin4 = 	(function (_super) {
		__extends(AgentSkin$Skin4, _super);
		function AgentSkin$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return AgentSkin$Skin4;
	})(eui.Skin);

	var AgentSkin$Skin5 = 	(function (_super) {
		__extends(AgentSkin$Skin5, _super);
		function AgentSkin$Skin5() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return AgentSkin$Skin5;
	})(eui.Skin);

	var AgentSkin$Skin6 = 	(function (_super) {
		__extends(AgentSkin$Skin6, _super);
		function AgentSkin$Skin6() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return AgentSkin$Skin6;
	})(eui.Skin);

	var AgentSkin$Skin7 = 	(function (_super) {
		__extends(AgentSkin$Skin7, _super);
		function AgentSkin$Skin7() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "绑定银行卡";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return AgentSkin$Skin7;
	})(eui.Skin);

	var AgentSkin$Skin8 = 	(function (_super) {
		__extends(AgentSkin$Skin8, _super);
		function AgentSkin$Skin8() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "绑定支付宝";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return AgentSkin$Skin8;
	})(eui.Skin);

	var AgentSkin$Skin9 = 	(function (_super) {
		__extends(AgentSkin$Skin9, _super);
		function AgentSkin$Skin9() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "提取佣金";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return AgentSkin$Skin9;
	})(eui.Skin);

	var AgentSkin$Skin10 = 	(function (_super) {
		__extends(AgentSkin$Skin10, _super);
		function AgentSkin$Skin10() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return AgentSkin$Skin10;
	})(eui.Skin);

	function AgentSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","labParentId","labUserId","labAgentState","labCreateTime","grpAgentState","txtParentId","btnApplyAgent","grpApplyAgent","agentRadioBtn","grpTabBtns","grpTabMenu","vsAgent","grpAgent","labPerfSum","btnRefresh0","grpTableHead","labSelfPerf","labTeamMembersPerf","grpPerfReport","labAvailBalance","labRebateSum","grpRebateReport","labDirectMembersNum","labTeamMembersNum","grpTeamMembersReport","grpAgentPerf","cbDirectMembers","btnRefresh1","lablistTeamMembersNoData","listTeamMembers","grpAgentTeam","btnRefresh2","lablistAgentPerfsNoData","listAgentPerfs","grpAgentPerfs","labBalanceNum","txtBankCardNo","btnBindBankCard","txtAlipayId","btnBindAlipay","txtAmount","btnWithdraw","grpWithdraw","btnRefresh3","lablistWithdrawsNoData","listWithdraws","grpWithdraws"];
		
		this.height = 600;
		this.width = 900;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpAgentState_i(),this.grpApplyAgent_i(),this.grpTabMenu_i(),this.grpAgent_i(),this.grpAgentPerf_i(),this.grpAgentTeam_i(),this.grpAgentPerfs_i(),this.grpWithdraw_i(),this.grpWithdraws_i()];
	}
	var _proto = AgentSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.horizontalCenter = 0;
		t.source = "win_title_red_bg_png";
		t.top = -30;
		t.width = 515;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 10;
		t.top = 10;
		t.width = 55;
		t.skinName = AgentSkin$Skin1;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 10;
		t.top = 8;
		t.width = 55;
		t.skinName = AgentSkin$Skin2;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_agent_png";
		t.top = 10;
		return t;
	};
	_proto.grpAgentState_i = function () {
		var t = new eui.Group();
		this.grpAgentState = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.horizontalCenter = 0;
		t.top = 90;
		t.visible = false;
		t.width = 820;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.labParentId_i(),this.labUserId_i(),this.labAgentState_i(),this._Image3_i(),this.labCreateTime_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = -100;
		t.size = 22;
		t.text = "上级ID:";
		t.textAlign = "right";
		t.textColor = 0xEDBE31;
		t.top = 70;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = -100;
		t.size = 22;
		t.text = "申请者ID:";
		t.textAlign = "right";
		t.textColor = 0xEDBE31;
		t.top = 130;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = -100;
		t.size = 22;
		t.text = "状态:";
		t.textAlign = "right";
		t.textColor = 0xEDBE31;
		t.top = 190;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto.labParentId_i = function () {
		var t = new eui.Label();
		this.labParentId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 60;
		t.size = 22;
		t.text = "500";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 70;
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto.labUserId_i = function () {
		var t = new eui.Label();
		this.labUserId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 60;
		t.size = 22;
		t.text = "500";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 130;
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto.labAgentState_i = function () {
		var t = new eui.Label();
		this.labAgentState = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 60;
		t.size = 22;
		t.text = "500";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 190;
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.horizontalCenter = -40;
		t.source = "club_expiration_png";
		t.top = 255;
		t.width = 25;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 110;
		t.size = 20;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 250;
		t.verticalAlign = "middle";
		t.width = 220;
		return t;
	};
	_proto.grpApplyAgent_i = function () {
		var t = new eui.Group();
		this.grpApplyAgent = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.horizontalCenter = 0;
		t.top = 90;
		t.visible = false;
		t.width = 820;
		t.elementsContent = [this._Image4_i(),this.txtParentId_i(),this._Label4_i(),this.btnApplyAgent_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.txtParentId_i = function () {
		var t = new eui.TextInput();
		this.txtParentId = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.prompt = "上级代理的Id";
		t.top = 80;
		t.width = 300;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 70;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "注意:本项目内容一旦提交,则不可变更.如果申请一级代理的资质,请在本项中输入：000001.";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 140;
		t.verticalAlign = "middle";
		t.width = 480;
		return t;
	};
	_proto.btnApplyAgent_i = function () {
		var t = new EButton();
		this.btnApplyAgent = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.top = 240;
		t.width = 145;
		t.skinName = AgentSkin$Skin3;
		return t;
	};
	_proto.grpTabMenu_i = function () {
		var t = new eui.Group();
		this.grpTabMenu = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 20;
		t.top = 90;
		t.width = 200;
		t.elementsContent = [this._Image5_i(),this.grpTabBtns_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpTabBtns_i = function () {
		var t = new eui.Group();
		this.grpTabBtns = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 200;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.agentRadioBtn_i(),this._RadioButton1_i(),this._RadioButton2_i(),this._RadioButton3_i(),this._RadioButton4_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.agentRadioBtn_i = function () {
		var t = new eui.RadioButton();
		this.agentRadioBtn = t;
		t.groupName = "tabAgentBtns";
		t.horizontalCenter = 0;
		t.label = "我的业绩";
		t.selected = true;
		t.skinName = "CRadioButtonSkin";
		t.value = "0";
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabAgentBtns";
		t.horizontalCenter = 0;
		t.label = "我的团队";
		t.skinName = "CRadioButtonSkin";
		t.value = "1";
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabAgentBtns";
		t.horizontalCenter = 0;
		t.label = "业绩记录";
		t.skinName = "CRadioButtonSkin";
		t.value = "2";
		return t;
	};
	_proto._RadioButton3_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabAgentBtns";
		t.horizontalCenter = 0;
		t.label = "提佣";
		t.skinName = "CRadioButtonSkin";
		t.value = "3";
		return t;
	};
	_proto._RadioButton4_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabAgentBtns";
		t.horizontalCenter = 0;
		t.label = "提佣记录";
		t.skinName = "CRadioButtonSkin";
		t.value = "4";
		return t;
	};
	_proto.grpAgent_i = function () {
		var t = new eui.Group();
		this.grpAgent = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.width = 620;
		t.elementsContent = [this._Image6_i(),this.vsAgent_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.vsAgent_i = function () {
		var t = new eui.ViewStack();
		this.vsAgent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpAgentPerf_i = function () {
		var t = new eui.Group();
		this.grpAgentPerf = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this.grpTableHead_i(),this.grpPerfReport_i(),this.grpRebateReport_i(),this.grpTeamMembersReport_i()];
		return t;
	};
	_proto.grpTableHead_i = function () {
		var t = new eui.Group();
		this.grpTableHead = t;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image7_i(),this._Label5_i(),this.labPerfSum_i(),this.btnRefresh0_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "table_head_bg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.left = 0;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x6e990d;
		t.text = "本期业绩：";
		t.textAlign = "right";
		t.textColor = 0xf7f5ef;
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 50;
		return t;
	};
	_proto.labPerfSum_i = function () {
		var t = new eui.Label();
		this.labPerfSum = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.right = 0;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x6E990D;
		t.text = "12334";
		t.textAlign = "left";
		t.textColor = 0xF7F5EF;
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 50;
		return t;
	};
	_proto.btnRefresh0_i = function () {
		var t = new EButton();
		this.btnRefresh0 = t;
		t.height = 40;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = AgentSkin$Skin4;
		return t;
	};
	_proto.grpPerfReport_i = function () {
		var t = new eui.Group();
		this.grpPerfReport = t;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.top = 50;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Label6_i(),this._Label7_i(),this.labSelfPerf_i(),this.labTeamMembersPerf_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.left = 5;
		t.verticalCenter = 0;
		t.percentWidth = 49;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.right = 5;
		t.verticalCenter = 0;
		t.percentWidth = 49;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.left = 5;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x131905;
		t.text = "自身业绩：";
		t.textAlign = "center";
		t.textColor = 0xF7F5EF;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.right = 5;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x131905;
		t.text = "团队业绩：";
		t.textAlign = "center";
		t.textColor = 0xF7F5EF;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	_proto.labSelfPerf_i = function () {
		var t = new eui.Label();
		this.labSelfPerf = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.left = 5;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x131905;
		t.text = "112433";
		t.textAlign = "center";
		t.textColor = 0xF7F5EF;
		t.top = 40;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	_proto.labTeamMembersPerf_i = function () {
		var t = new eui.Label();
		this.labTeamMembersPerf = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.right = 5;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x131905;
		t.text = "112433";
		t.textAlign = "center";
		t.textColor = 0xF7F5EF;
		t.top = 40;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	_proto.grpRebateReport_i = function () {
		var t = new eui.Group();
		this.grpRebateReport = t;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.top = 135;
		t.percentWidth = 100;
		t.x = 10;
		t.elementsContent = [this._Rect3_i(),this._Rect4_i(),this._Label8_i(),this._Label9_i(),this.labAvailBalance_i(),this.labRebateSum_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.left = 5;
		t.verticalCenter = 0;
		t.percentWidth = 49;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.right = 5;
		t.verticalCenter = 0;
		t.percentWidth = 49;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.left = 5;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x131905;
		t.text = "佣金余额：";
		t.textAlign = "center";
		t.textColor = 0xF7F5EF;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.right = 5;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x131905;
		t.text = "本期佣金：";
		t.textAlign = "center";
		t.textColor = 0xF7F5EF;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	_proto.labAvailBalance_i = function () {
		var t = new eui.Label();
		this.labAvailBalance = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.left = 5;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x131905;
		t.text = "112433";
		t.textAlign = "center";
		t.textColor = 0xF7F5EF;
		t.top = 40;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	_proto.labRebateSum_i = function () {
		var t = new eui.Label();
		this.labRebateSum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.right = 5;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x131905;
		t.text = "112433";
		t.textAlign = "center";
		t.textColor = 0xF7F5EF;
		t.top = 40;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	_proto.grpTeamMembersReport_i = function () {
		var t = new eui.Group();
		this.grpTeamMembersReport = t;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.top = 220;
		t.percentWidth = 100;
		t.x = 10;
		t.elementsContent = [this._Rect5_i(),this._Rect6_i(),this._Label10_i(),this._Label11_i(),this.labDirectMembersNum_i(),this.labTeamMembersNum_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.left = 5;
		t.verticalCenter = 0;
		t.percentWidth = 49;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.right = 5;
		t.verticalCenter = 0;
		t.percentWidth = 49;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.left = 5;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x131905;
		t.text = "直属会员：";
		t.textAlign = "center";
		t.textColor = 0xF7F5EF;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.right = 5;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x131905;
		t.text = "团队人数：";
		t.textAlign = "center";
		t.textColor = 0xF7F5EF;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	_proto.labDirectMembersNum_i = function () {
		var t = new eui.Label();
		this.labDirectMembersNum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.left = 5;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x131905;
		t.text = "112433";
		t.textAlign = "center";
		t.textColor = 0xF7F5EF;
		t.top = 40;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	_proto.labTeamMembersNum_i = function () {
		var t = new eui.Label();
		this.labTeamMembersNum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 40;
		t.right = 5;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x131905;
		t.text = "112433";
		t.textAlign = "center";
		t.textColor = 0xF7F5EF;
		t.top = 40;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	_proto.grpAgentTeam_i = function () {
		var t = new eui.Group();
		this.grpAgentTeam = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Group2_i(),this.lablistTeamMembersNoData_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.cbDirectMembers_i(),this._Label12_i(),this.btnRefresh1_i()];
		return t;
	};
	_proto.cbDirectMembers_i = function () {
		var t = new eui.CheckBox();
		this.cbDirectMembers = t;
		t.height = 40;
		t.label = "";
		t.right = 200;
		t.verticalCenter = 0;
		t.width = 40;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.right = 90;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "直属会员";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 100;
		t.wordWrap = true;
		return t;
	};
	_proto.btnRefresh1_i = function () {
		var t = new EButton();
		this.btnRefresh1 = t;
		t.height = 40;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = AgentSkin$Skin5;
		return t;
	};
	_proto.lablistTeamMembersNoData_i = function () {
		var t = new eui.Label();
		this.lablistTeamMembersNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 429;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listTeamMembers_i();
		return t;
	};
	_proto.listTeamMembers_i = function () {
		var t = new eui.List();
		this.listTeamMembers = t;
		t.percentHeight = 100;
		t.horizontalCenter = 13;
		t.itemRendererSkinName = ItemTeamMemberSkin;
		t.verticalCenter = 300;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout2_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 6;
		t.horizontalAlign = "justify";
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		return t;
	};
	_proto.grpAgentPerfs_i = function () {
		var t = new eui.Group();
		this.grpAgentPerfs = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Group4_i(),this.lablistAgentPerfsNoData_i(),this._Scroller2_i(),this._Label13_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.btnRefresh2_i()];
		return t;
	};
	_proto.btnRefresh2_i = function () {
		var t = new EButton();
		this.btnRefresh2 = t;
		t.height = 40;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = AgentSkin$Skin6;
		return t;
	};
	_proto.lablistAgentPerfsNoData_i = function () {
		var t = new eui.Label();
		this.lablistAgentPerfsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 390;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listAgentPerfs_i();
		return t;
	};
	_proto.listAgentPerfs_i = function () {
		var t = new eui.List();
		this.listAgentPerfs = t;
		t.percentHeight = 100;
		t.horizontalCenter = 13;
		t.itemRendererSkinName = ItemPerformanceSkin;
		t.verticalCenter = 300;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout3_i();
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "justify";
		t.paddingLeft = 3;
		t.paddingRight = 3;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i(),this._Object13_i()];
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "提示：系统只保留最近100次的记录";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.verticalAlign = "middle";
		t.width = 620;
		return t;
	};
	_proto.grpWithdraw_i = function () {
		var t = new eui.Group();
		this.grpWithdraw = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Image8_i(),this._Label14_i(),this.labBalanceNum_i(),this.txtBankCardNo_i(),this._Label15_i(),this.btnBindBankCard_i(),this.txtAlipayId_i(),this.btnBindAlipay_i(),this._Label16_i(),this.txtAmount_i(),this._Label17_i(),this.btnWithdraw_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 240;
		t.source = "txt_bg_png";
		t.top = 15;
		t.width = 220;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = -131;
		t.size = 24;
		t.text = "账号余额:";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 20;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto.labBalanceNum_i = function () {
		var t = new eui.Label();
		this.labBalanceNum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 250;
		t.size = 24;
		t.stroke = 1;
		t.text = "803832";
		t.textAlign = "left";
		t.textColor = 0xf4ba0c;
		t.top = 20;
		t.verticalAlign = "middle";
		t.width = 220;
		return t;
	};
	_proto.txtBankCardNo_i = function () {
		var t = new eui.TextInput();
		this.txtBankCardNo = t;
		t.height = 45;
		t.left = 80;
		t.prompt = "银行卡卡号";
		t.top = 80;
		t.width = 360;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 20;
		t.text = "银行卡卡号, 请先绑定银行卡卡号";
		t.textAlign = "left";
		t.textColor = 0xcec7b3;
		t.top = 120;
		t.verticalAlign = "middle";
		t.width = 450;
		return t;
	};
	_proto.btnBindBankCard_i = function () {
		var t = new EButton();
		this.btnBindBankCard = t;
		t.height = 45;
		t.left = 450;
		t.top = 80;
		t.width = 130;
		t.skinName = AgentSkin$Skin7;
		return t;
	};
	_proto.txtAlipayId_i = function () {
		var t = new eui.TextInput();
		this.txtAlipayId = t;
		t.height = 45;
		t.left = 80;
		t.prompt = "收款支付宝";
		t.top = 160;
		t.width = 360;
		return t;
	};
	_proto.btnBindAlipay_i = function () {
		var t = new EButton();
		this.btnBindAlipay = t;
		t.height = 45;
		t.left = 450;
		t.top = 160;
		t.width = 130;
		t.skinName = AgentSkin$Skin8;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 20;
		t.text = "收款的支付宝账号";
		t.textAlign = "left";
		t.textColor = 0xcec7b3;
		t.top = 205;
		t.verticalAlign = "middle";
		t.width = 450;
		return t;
	};
	_proto.txtAmount_i = function () {
		var t = new eui.TextInput();
		this.txtAmount = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.prompt = "兑换金额";
		t.width = 360;
		t.x = 85;
		t.y = 237;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 20;
		t.text = "要兑换的金额";
		t.textAlign = "left";
		t.textColor = 0xCEC7B3;
		t.top = 280;
		t.verticalAlign = "middle";
		t.width = 450;
		return t;
	};
	_proto.btnWithdraw_i = function () {
		var t = new EButton();
		this.btnWithdraw = t;
		t.height = 55;
		t.top = 300;
		t.width = 155;
		t.x = 228;
		t.skinName = AgentSkin$Skin9;
		return t;
	};
	_proto.grpWithdraws_i = function () {
		var t = new eui.Group();
		this.grpWithdraws = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Group6_i(),this.lablistWithdrawsNoData_i(),this._Scroller3_i(),this._Label18_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group5_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.btnRefresh3_i()];
		return t;
	};
	_proto.btnRefresh3_i = function () {
		var t = new EButton();
		this.btnRefresh3 = t;
		t.height = 40;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = AgentSkin$Skin10;
		return t;
	};
	_proto.lablistWithdrawsNoData_i = function () {
		var t = new eui.Label();
		this.lablistWithdrawsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 390;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listWithdraws_i();
		return t;
	};
	_proto.listWithdraws_i = function () {
		var t = new eui.List();
		this.listWithdraws = t;
		t.percentHeight = 100;
		t.horizontalCenter = 13;
		t.itemRendererSkinName = ItemWithdrawSkin;
		t.verticalCenter = 300;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout4_i();
		t.dataProvider = this._ArrayCollection3_i();
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "justify";
		t.paddingLeft = 3;
		t.paddingRight = 3;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection3_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object14_i(),this._Object15_i(),this._Object16_i(),this._Object17_i(),this._Object18_i(),this._Object19_i(),this._Object20_i(),this._Object21_i(),this._Object22_i()];
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "提示：系统只保留最近100次的记录";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.verticalAlign = "middle";
		t.width = 620;
		return t;
	};
	return AgentSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Agent/AgentPerfs.exml'] = window.AgentPerfsSkin = (function (_super) {
	__extends(AgentPerfsSkin, _super);
	var AgentPerfsSkin$Skin11 = 	(function (_super) {
		__extends(AgentPerfsSkin$Skin11, _super);
		function AgentPerfsSkin$Skin11() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentPerfsSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return AgentPerfsSkin$Skin11;
	})(eui.Skin);

	var AgentPerfsSkin$Skin12 = 	(function (_super) {
		__extends(AgentPerfsSkin$Skin12, _super);
		function AgentPerfsSkin$Skin12() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentPerfsSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return AgentPerfsSkin$Skin12;
	})(eui.Skin);

	var AgentPerfsSkin$Skin13 = 	(function (_super) {
		__extends(AgentPerfsSkin$Skin13, _super);
		function AgentPerfsSkin$Skin13() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AgentPerfsSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return AgentPerfsSkin$Skin13;
	})(eui.Skin);

	function AgentPerfsSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","btnRefresh","lablistAgentPerfsNoData","listAgentPerfs","grpAgentPerfs"];
		
		this.height = 600;
		this.width = 700;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpAgentPerfs_i(),this._Label2_i()];
	}
	var _proto = AgentPerfsSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.horizontalCenter = 0;
		t.source = "win_title_red_bg_png";
		t.top = -30;
		t.width = 515;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 10;
		t.top = 10;
		t.width = 55;
		t.skinName = AgentPerfsSkin$Skin11;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 10;
		t.top = 8;
		t.width = 55;
		t.skinName = AgentPerfsSkin$Skin12;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_AgentPerfs_png";
		t.top = 10;
		return t;
	};
	_proto.grpAgentPerfs_i = function () {
		var t = new eui.Group();
		this.grpAgentPerfs = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.horizontalCenter = 0;
		t.top = 80;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.btnRefresh_i(),this.lablistAgentPerfsNoData_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.left = 10;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "业绩详情";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 200;
		t.wordWrap = true;
		return t;
	};
	_proto.btnRefresh_i = function () {
		var t = new EButton();
		this.btnRefresh = t;
		t.height = 45;
		t.right = 30;
		t.top = 0;
		t.width = 45;
		t.skinName = AgentPerfsSkin$Skin13;
		return t;
	};
	_proto.lablistAgentPerfsNoData_i = function () {
		var t = new eui.Label();
		this.lablistAgentPerfsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 380;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listAgentPerfs_i();
		return t;
	};
	_proto.listAgentPerfs_i = function () {
		var t = new eui.List();
		this.listAgentPerfs = t;
		t.anchorOffsetY = 0;
		t.height = 380;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemPerformanceSkin;
		t.verticalCenter = -21;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bottom = 30;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "提示：系统只保留最近100次的记录";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	return AgentPerfsSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Agent/ApplyAgent.exml'] = window.ApplyAgentSkin = (function (_super) {
	__extends(ApplyAgentSkin, _super);
	var ApplyAgentSkin$Skin14 = 	(function (_super) {
		__extends(ApplyAgentSkin$Skin14, _super);
		function ApplyAgentSkin$Skin14() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ApplyAgentSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return ApplyAgentSkin$Skin14;
	})(eui.Skin);

	var ApplyAgentSkin$Skin15 = 	(function (_super) {
		__extends(ApplyAgentSkin$Skin15, _super);
		function ApplyAgentSkin$Skin15() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ApplyAgentSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return ApplyAgentSkin$Skin15;
	})(eui.Skin);

	var ApplyAgentSkin$Skin16 = 	(function (_super) {
		__extends(ApplyAgentSkin$Skin16, _super);
		function ApplyAgentSkin$Skin16() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ApplyAgentSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "申请代理";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ApplyAgentSkin$Skin16;
	})(eui.Skin);

	function ApplyAgentSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","txtParentId","btnApplyAgent","grpApplyAgent"];
		
		this.height = 400;
		this.width = 550;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpApplyAgent_i()];
	}
	var _proto = ApplyAgentSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_s_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_agent_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = ApplyAgentSkin$Skin14;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = ApplyAgentSkin$Skin15;
		return t;
	};
	_proto.grpApplyAgent_i = function () {
		var t = new eui.Group();
		this.grpApplyAgent = t;
		t.anchorOffsetY = 0;
		t.height = 265;
		t.horizontalCenter = 0.5;
		t.top = 86;
		t.percentWidth = 90;
		t.elementsContent = [this._Image2_i(),this.txtParentId_i(),this._Label1_i(),this.btnApplyAgent_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.txtParentId_i = function () {
		var t = new eui.TextInput();
		this.txtParentId = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.prompt = "上级代理的Id";
		t.top = 20;
		t.width = 300;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 70;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "注意:本项目内容一旦提交,则不可变更.如果申请一级代理的资质,请在本项中输入：000001.";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 80;
		t.verticalAlign = "middle";
		t.width = 480;
		return t;
	};
	_proto.btnApplyAgent_i = function () {
		var t = new EButton();
		this.btnApplyAgent = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.top = 180;
		t.width = 145;
		t.skinName = ApplyAgentSkin$Skin16;
		return t;
	};
	return ApplyAgentSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Agent/ItemPerformance.exml'] = window.ItemPerformanceSkin = (function (_super) {
	__extends(ItemPerformanceSkin, _super);
	function ItemPerformanceSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","lab1stTips","labRebateSum","labPerfSum","labDirectMembersNum","labTeamMembersNum","labSartTime","labEndTime"];
		
		this.height = 70;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this.lab1stTips_i(),this.labRebateSum_i(),this._Label1_i(),this.labPerfSum_i(),this._Label2_i(),this.labDirectMembersNum_i(),this._Label3_i(),this.labTeamMembersNum_i(),this._Image1_i(),this.labSartTime_i(),this._Image2_i(),this.labEndTime_i(),this._Image3_i()];
	}
	var _proto = ItemPerformanceSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto.lab1stTips_i = function () {
		var t = new eui.Label();
		this.lab1stTips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "佣金:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 55;
		return t;
	};
	_proto.labRebateSum_i = function () {
		var t = new eui.Label();
		this.labRebateSum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 60;
		t.size = 20;
		t.text = "534567";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 150;
		t.size = 20;
		t.text = "业绩:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 55;
		return t;
	};
	_proto.labPerfSum_i = function () {
		var t = new eui.Label();
		this.labPerfSum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 200;
		t.size = 20;
		t.text = "123";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 305;
		t.size = 20;
		t.text = "直属会员:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 87;
		return t;
	};
	_proto.labDirectMembersNum_i = function () {
		var t = new eui.Label();
		this.labDirectMembersNum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 400;
		t.size = 20;
		t.text = "500";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 60;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 455;
		t.size = 20;
		t.text = "团队人数:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 87;
		return t;
	};
	_proto.labTeamMembersNum_i = function () {
		var t = new eui.Label();
		this.labTeamMembersNum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 550;
		t.size = 20;
		t.text = "500";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 60;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 15;
		t.source = "club_expiration_png";
		t.top = 40;
		t.width = 25;
		return t;
	};
	_proto.labSartTime_i = function () {
		var t = new eui.Label();
		this.labSartTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 55;
		t.size = 20;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 210;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 310;
		t.source = "club_expiration_png";
		t.top = 40;
		t.width = 25;
		return t;
	};
	_proto.labEndTime_i = function () {
		var t = new eui.Label();
		this.labEndTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 350;
		t.size = 20;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 210;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemPerformanceSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Agent/ItemTeamMember.exml'] = window.ItemTeamMemberSkin = (function (_super) {
	__extends(ItemTeamMemberSkin, _super);
	function ItemTeamMemberSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","labMemberName","labMemberId","labAagentLevel"];
		
		this.height = 35;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this.labMemberName_i(),this._Label1_i(),this.labMemberId_i(),this._Label2_i(),this.labAagentLevel_i(),this._Image1_i()];
	}
	var _proto = ItemTeamMemberSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto.labMemberName_i = function () {
		var t = new eui.Label();
		this.labMemberName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 30;
		t.size = 22;
		t.text = "用户的名字";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 160;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 200;
		t.size = 20;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 31;
		return t;
	};
	_proto.labMemberId_i = function () {
		var t = new eui.Label();
		this.labMemberId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 240;
		t.size = 20;
		t.text = "2123121";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 380;
		t.size = 20;
		t.text = "级别关系:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 97;
		return t;
	};
	_proto.labAagentLevel_i = function () {
		var t = new eui.Label();
		this.labAagentLevel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 477;
		t.size = 20;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		t.width = 94;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemTeamMemberSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Agent/ItemWithdraw.exml'] = window.ItemWithdrawSkin = (function (_super) {
	__extends(ItemWithdrawSkin, _super);
	var ItemWithdrawSkin$Skin17 = 	(function (_super) {
		__extends(ItemWithdrawSkin$Skin17, _super);
		function ItemWithdrawSkin$Skin17() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemWithdrawSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "撤销";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemWithdrawSkin$Skin17;
	})(eui.Skin);

	function ItemWithdrawSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","lab1stTips","labAmount","labState","labPaymentType","labPaymentId","labCreateTime","btnAction"];
		
		this.height = 70;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this.lab1stTips_i(),this._Label1_i(),this._Label2_i(),this.labAmount_i(),this.labState_i(),this.labPaymentType_i(),this.labPaymentId_i(),this._Image1_i(),this.labCreateTime_i(),this._Image2_i(),this.btnAction_i()];
	}
	var _proto = ItemWithdrawSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto.lab1stTips_i = function () {
		var t = new eui.Label();
		this.lab1stTips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "金额:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 55;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "状态:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 55;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 160;
		t.size = 20;
		t.text = "方式:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 55;
		return t;
	};
	_proto.labAmount_i = function () {
		var t = new eui.Label();
		this.labAmount = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 60;
		t.size = 20;
		t.text = "534567";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.labState_i = function () {
		var t = new eui.Label();
		this.labState = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 60;
		t.size = 20;
		t.text = "PENDING";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto.labPaymentType_i = function () {
		var t = new eui.Label();
		this.labPaymentType = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 210;
		t.size = 20;
		t.text = "BANKCARD";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 121;
		return t;
	};
	_proto.labPaymentId_i = function () {
		var t = new eui.Label();
		this.labPaymentId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 335;
		t.size = 20;
		t.text = "12345678998765432123";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 285;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 200;
		t.source = "club_expiration_png";
		t.top = 5;
		t.width = 25;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 230;
		t.size = 20;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 210;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.btnAction_i = function () {
		var t = new EButton();
		this.btnAction = t;
		t.height = 40;
		t.right = 10;
		t.top = 0;
		t.width = 90;
		t.skinName = ItemWithdrawSkin$Skin17;
		return t;
	};
	return ItemWithdrawSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/ChangeDescription.exml'] = window.ChangeDescriptionSkin = (function (_super) {
	__extends(ChangeDescriptionSkin, _super);
	var ChangeDescriptionSkin$Skin18 = 	(function (_super) {
		__extends(ChangeDescriptionSkin$Skin18, _super);
		function ChangeDescriptionSkin$Skin18() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChangeDescriptionSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return ChangeDescriptionSkin$Skin18;
	})(eui.Skin);

	var ChangeDescriptionSkin$Skin19 = 	(function (_super) {
		__extends(ChangeDescriptionSkin$Skin19, _super);
		function ChangeDescriptionSkin$Skin19() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChangeDescriptionSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return ChangeDescriptionSkin$Skin19;
	})(eui.Skin);

	var ChangeDescriptionSkin$Skin20 = 	(function (_super) {
		__extends(ChangeDescriptionSkin$Skin20, _super);
		function ChangeDescriptionSkin$Skin20() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChangeDescriptionSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "保存";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ChangeDescriptionSkin$Skin20;
	})(eui.Skin);

	function ChangeDescriptionSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","txtClubDescription","btnChangeDescription","grpChangeDescription"];
		
		this.height = 400;
		this.width = 550;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpChangeDescription_i()];
	}
	var _proto = ChangeDescriptionSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_s_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_adv_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = ChangeDescriptionSkin$Skin18;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = ChangeDescriptionSkin$Skin19;
		return t;
	};
	_proto.grpChangeDescription_i = function () {
		var t = new eui.Group();
		this.grpChangeDescription = t;
		t.anchorOffsetY = 0;
		t.height = 296;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 29;
		t.percentWidth = 90;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this._Label1_i(),this.btnChangeDescription_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.top = 10;
		t.width = 400;
		t.elementsContent = [this._Image3_i(),this.txtClubDescription_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,8,8);
		t.source = "input_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.txtClubDescription_i = function () {
		var t = new eui.EditableText();
		this.txtClubDescription = t;
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.multiline = true;
		t.size = 24;
		t.text = "";
		t.textColor = 0x000000;
		t.percentWidth = 100;
		t.wordWrap = true;
		t.y = 2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 4.5;
		t.size = 20;
		t.text = "俱乐部公告,2-150个字";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 160;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	_proto.btnChangeDescription_i = function () {
		var t = new EButton();
		this.btnChangeDescription = t;
		t.bottom = 30;
		t.height = 60;
		t.horizontalCenter = 5;
		t.width = 165;
		t.skinName = ChangeDescriptionSkin$Skin20;
		return t;
	};
	return ChangeDescriptionSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/ClubHall.exml'] = window.ClubHallSkin = (function (_super) {
	__extends(ClubHallSkin, _super);
	var ClubHallSkin$Skin21 = 	(function (_super) {
		__extends(ClubHallSkin$Skin21, _super);
		function ClubHallSkin$Skin21() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubHallSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubHallSkin$Skin21;
	})(eui.Skin);

	var ClubHallSkin$Skin22 = 	(function (_super) {
		__extends(ClubHallSkin$Skin22, _super);
		function ClubHallSkin$Skin22() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubHallSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 32;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "创建房间";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ClubHallSkin$Skin22;
	})(eui.Skin);

	var ClubHallSkin$Skin23 = 	(function (_super) {
		__extends(ClubHallSkin$Skin23, _super);
		function ClubHallSkin$Skin23() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubHallSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubHallSkin$Skin23;
	})(eui.Skin);

	var ClubHallSkin$Skin24 = 	(function (_super) {
		__extends(ClubHallSkin$Skin24, _super);
		function ClubHallSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubHallSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "club_menu_members_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ClubHallSkin$Skin24;
	})(eui.Skin);

	var ClubHallSkin$Skin25 = 	(function (_super) {
		__extends(ClubHallSkin$Skin25, _super);
		function ClubHallSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubHallSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "club_menu_adv_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ClubHallSkin$Skin25;
	})(eui.Skin);

	var ClubHallSkin$Skin26 = 	(function (_super) {
		__extends(ClubHallSkin$Skin26, _super);
		function ClubHallSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubHallSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "club_menu_games_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ClubHallSkin$Skin26;
	})(eui.Skin);

	var ClubHallSkin$Skin27 = 	(function (_super) {
		__extends(ClubHallSkin$Skin27, _super);
		function ClubHallSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubHallSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "club_menu_score_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ClubHallSkin$Skin27;
	})(eui.Skin);

	var ClubHallSkin$Skin28 = 	(function (_super) {
		__extends(ClubHallSkin$Skin28, _super);
		function ClubHallSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubHallSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "club_menu_setting_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ClubHallSkin$Skin28;
	})(eui.Skin);

	var ClubHallSkin$Skin29 = 	(function (_super) {
		__extends(ClubHallSkin$Skin29, _super);
		function ClubHallSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubHallSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "club_menu_members_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ClubHallSkin$Skin29;
	})(eui.Skin);

	var ClubHallSkin$Skin30 = 	(function (_super) {
		__extends(ClubHallSkin$Skin30, _super);
		function ClubHallSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubHallSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "club_menu_score_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ClubHallSkin$Skin30;
	})(eui.Skin);

	var ClubHallSkin$Skin31 = 	(function (_super) {
		__extends(ClubHallSkin$Skin31, _super);
		function ClubHallSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubHallSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "club_menu_me_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ClubHallSkin$Skin31;
	})(eui.Skin);

	function ClubHallSkin() {
		_super.call(this);
		this.skinParts = ["btnGoBack","labClubName","labClubId","grpClub","labAnnouncement","grpAnnouncement","btnCreateClubRoom","cbAllOnlineRooms","btnRefresh","lablistOnlineRoomsNoData","listOnlineRooms","grpOnlineRooms","btnAdminMembers","btnAdminAdv","btnAdminGameConf","btnAdminOfflineRooms","btnAdminClubSetting","grpAdminMenu","btnMembers","btnOfflineRooms","btnClubme","grpMemberMenu"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.btnGoBack_i(),this.grpClub_i(),this.grpAnnouncement_i(),this.grpOnlineRooms_i(),this.grpAdminMenu_i(),this.grpMemberMenu_i()];
	}
	var _proto = ClubHallSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(260,80,522,480);
		t.source = "clubhall_png";
		t.top = 0;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 75;
		t.right = 5;
		t.top = 5;
		t.width = 75;
		t.skinName = ClubHallSkin$Skin21;
		return t;
	};
	_proto.grpClub_i = function () {
		var t = new eui.Group();
		this.grpClub = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.width = 460;
		t.x = 340;
		t.y = 6;
		t.elementsContent = [this.labClubName_i(),this.labClubId_i(),this._Label1_i()];
		return t;
	};
	_proto.labClubName_i = function () {
		var t = new eui.Label();
		this.labClubName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 28;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "嬴政赢俱乐部";
		t.textAlign = "center";
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 254;
		t.wordWrap = true;
		return t;
	};
	_proto.labClubId_i = function () {
		var t = new eui.Label();
		this.labClubId = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.left = 200;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "123321";
		t.textAlign = "center";
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 100;
		t.wordWrap = true;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 160;
		t.size = 20;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 31;
		return t;
	};
	_proto.grpAnnouncement_i = function () {
		var t = new eui.Group();
		this.grpAnnouncement = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 460;
		t.left = 60;
		t.top = 120;
		t.width = 360;
		t.elementsContent = [this._Image2_i(),this.labAnnouncement_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "announcement_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labAnnouncement_i = function () {
		var t = new eui.Label();
		this.labAnnouncement = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 330;
		t.lineSpacing = 5;
		t.size = 28;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "系统公告,公告内容";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 330;
		t.wordWrap = true;
		t.x = 10;
		t.y = 72;
		return t;
	};
	_proto.grpOnlineRooms_i = function () {
		var t = new eui.Group();
		this.grpOnlineRooms = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 460;
		t.horizontalCenter = 178.5;
		t.top = 120;
		t.width = 800;
		t.elementsContent = [this._Image3_i(),this._Group1_i(),this.lablistOnlineRoomsNoData_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.horizontalCenter = -1.5;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.btnCreateClubRoom_i(),this._Label2_i(),this.cbAllOnlineRooms_i(),this._Label3_i(),this.btnRefresh_i()];
		return t;
	};
	_proto.btnCreateClubRoom_i = function () {
		var t = new EButton();
		this.btnCreateClubRoom = t;
		t.height = 75;
		t.left = 10;
		t.verticalCenter = 0;
		t.width = 165;
		t.skinName = ClubHallSkin$Skin22;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 39.33;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x76677c;
		t.text = "在线房间";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 200;
		t.wordWrap = true;
		return t;
	};
	_proto.cbAllOnlineRooms_i = function () {
		var t = new eui.CheckBox();
		this.cbAllOnlineRooms = t;
		t.height = 65;
		t.label = "";
		t.right = 160;
		t.verticalCenter = 0;
		t.width = 65;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.right = 102;
		t.size = 28;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "全部";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 60;
		t.wordWrap = true;
		return t;
	};
	_proto.btnRefresh_i = function () {
		var t = new EButton();
		this.btnRefresh = t;
		t.height = 65;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 65;
		t.skinName = ClubHallSkin$Skin23;
		return t;
	};
	_proto.lablistOnlineRoomsNoData_i = function () {
		var t = new eui.Label();
		this.lablistOnlineRoomsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 80;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 380;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 80;
		t.percentWidth = 100;
		t.viewport = this.listOnlineRooms_i();
		return t;
	};
	_proto.listOnlineRooms_i = function () {
		var t = new eui.List();
		this.listOnlineRooms = t;
		t.percentHeight = 100;
		t.horizontalCenter = -2;
		t.itemRendererSkinName = ItemOnlineRoomSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.grpAdminMenu_i = function () {
		var t = new eui.Group();
		this.grpAdminMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 958.33;
		t.elementsContent = [this.btnAdminMembers_i(),this.btnAdminAdv_i(),this.btnAdminGameConf_i(),this.btnAdminOfflineRooms_i(),this.btnAdminClubSetting_i()];
		return t;
	};
	_proto.btnAdminMembers_i = function () {
		var t = new EButton();
		this.btnAdminMembers = t;
		t.anchorOffsetX = 0;
		t.height = 85;
		t.left = 50;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = ClubHallSkin$Skin24;
		return t;
	};
	_proto.btnAdminAdv_i = function () {
		var t = new EButton();
		this.btnAdminAdv = t;
		t.anchorOffsetX = 0;
		t.height = 85;
		t.horizontalCenter = -200;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = ClubHallSkin$Skin25;
		return t;
	};
	_proto.btnAdminGameConf_i = function () {
		var t = new EButton();
		this.btnAdminGameConf = t;
		t.anchorOffsetX = 0;
		t.height = 85;
		t.horizontalCenter = 0;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = ClubHallSkin$Skin26;
		return t;
	};
	_proto.btnAdminOfflineRooms_i = function () {
		var t = new EButton();
		this.btnAdminOfflineRooms = t;
		t.anchorOffsetX = 0;
		t.height = 85;
		t.right = 50;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = ClubHallSkin$Skin27;
		return t;
	};
	_proto.btnAdminClubSetting_i = function () {
		var t = new EButton();
		this.btnAdminClubSetting = t;
		t.anchorOffsetX = 0;
		t.height = 85;
		t.horizontalCenter = 200;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = ClubHallSkin$Skin28;
		return t;
	};
	_proto.grpMemberMenu_i = function () {
		var t = new eui.Group();
		this.grpMemberMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -1;
		t.height = 80;
		t.right = 203;
		t.visible = false;
		t.width = 874.33;
		t.elementsContent = [this.btnMembers_i(),this.btnOfflineRooms_i(),this.btnClubme_i()];
		return t;
	};
	_proto.btnMembers_i = function () {
		var t = new EButton();
		this.btnMembers = t;
		t.anchorOffsetX = 0;
		t.height = 85;
		t.left = 50;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = ClubHallSkin$Skin29;
		return t;
	};
	_proto.btnOfflineRooms_i = function () {
		var t = new EButton();
		this.btnOfflineRooms = t;
		t.anchorOffsetX = 0;
		t.height = 85;
		t.horizontalCenter = 0;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = ClubHallSkin$Skin30;
		return t;
	};
	_proto.btnClubme_i = function () {
		var t = new EButton();
		this.btnClubme = t;
		t.anchorOffsetX = 0;
		t.height = 85;
		t.right = 50;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = ClubHallSkin$Skin31;
		return t;
	};
	return ClubHallSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/ClubMe.exml'] = window.ClubMeSkin = (function (_super) {
	__extends(ClubMeSkin, _super);
	var ClubMeSkin$Skin32 = 	(function (_super) {
		__extends(ClubMeSkin$Skin32, _super);
		function ClubMeSkin$Skin32() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMeSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubMeSkin$Skin32;
	})(eui.Skin);

	var ClubMeSkin$Skin33 = 	(function (_super) {
		__extends(ClubMeSkin$Skin33, _super);
		function ClubMeSkin$Skin33() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMeSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubMeSkin$Skin33;
	})(eui.Skin);

	var ClubMeSkin$Skin34 = 	(function (_super) {
		__extends(ClubMeSkin$Skin34, _super);
		function ClubMeSkin$Skin34() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMeSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubMeSkin$Skin34;
	})(eui.Skin);

	var ClubMeSkin$Skin35 = 	(function (_super) {
		__extends(ClubMeSkin$Skin35, _super);
		function ClubMeSkin$Skin35() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMeSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_purple_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x860DC6;
			t.text = "记录";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ClubMeSkin$Skin35;
	})(eui.Skin);

	var ClubMeSkin$Skin36 = 	(function (_super) {
		__extends(ClubMeSkin$Skin36, _super);
		function ClubMeSkin$Skin36() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMeSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_fold_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xCC1E0E;
			t.text = "退出俱乐部";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ClubMeSkin$Skin36;
	})(eui.Skin);

	function ClubMeSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgMemberAvatar","labMemberName","labMemberId","labMemberLv","labIsAdmin","labMemberScore","labCreateTime","btnRefresh","btnClubOrders","btnQuitClub","grpClubMe"];
		
		this.height = 400;
		this.width = 550;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpClubMe_i()];
	}
	var _proto = ClubMeSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_s_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_me_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = ClubMeSkin$Skin32;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = ClubMeSkin$Skin33;
		return t;
	};
	_proto.grpClubMe_i = function () {
		var t = new eui.Group();
		this.grpClubMe = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.top = 90;
		t.percentWidth = 90;
		t.elementsContent = [this._Image2_i(),this._Group2_i(),this.btnQuitClub_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i(),this.labMemberName_i(),this._Label1_i(),this.labMemberId_i(),this._Label2_i(),this.labMemberLv_i(),this._Label3_i(),this.labIsAdmin_i(),this._Label4_i(),this.labMemberScore_i(),this._Image4_i(),this.labCreateTime_i(),this.btnRefresh_i(),this.btnClubOrders_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 70;
		t.elementsContent = [this.imgMemberAvatar_i(),this._Image3_i()];
		return t;
	};
	_proto.imgMemberAvatar_i = function () {
		var t = new eui.Image();
		this.imgMemberAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.horizontalCenter = 0;
		t.source = "avatar_man_png";
		t.verticalCenter = 0;
		t.width = 54;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "avatar_bg_png";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.labMemberName_i = function () {
		var t = new eui.Label();
		this.labMemberName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 22;
		t.text = "用户的名字";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 240;
		t.size = 20;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 31;
		return t;
	};
	_proto.labMemberId_i = function () {
		var t = new eui.Label();
		this.labMemberId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 280;
		t.size = 20;
		t.text = "2123121";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 94;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 380;
		t.size = 20;
		t.text = "LV:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 35;
		return t;
	};
	_proto.labMemberLv_i = function () {
		var t = new eui.Label();
		this.labMemberLv = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 421;
		t.size = 20;
		t.text = "3";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 20;
		t.text = "管理员:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 80;
		return t;
	};
	_proto.labIsAdmin_i = function () {
		var t = new eui.Label();
		this.labIsAdmin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 160;
		t.size = 20;
		t.text = "是";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 47;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 120;
		t.size = 24;
		t.text = "当前积分:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 100;
		t.verticalAlign = "middle";
		t.width = 118;
		return t;
	};
	_proto.labMemberScore_i = function () {
		var t = new eui.Label();
		this.labMemberScore = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 230;
		t.size = 24;
		t.text = "2345343";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 100;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 230;
		t.source = "club_expiration_png";
		t.top = 40;
		t.width = 25;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 260;
		t.size = 20;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 205;
		return t;
	};
	_proto.btnRefresh_i = function () {
		var t = new EButton();
		this.btnRefresh = t;
		t.height = 45;
		t.left = 50;
		t.top = 95;
		t.width = 45;
		t.skinName = ClubMeSkin$Skin34;
		return t;
	};
	_proto.btnClubOrders_i = function () {
		var t = new EButton();
		this.btnClubOrders = t;
		t.height = 60;
		t.left = 350;
		t.top = 85;
		t.width = 130;
		t.skinName = ClubMeSkin$Skin35;
		return t;
	};
	_proto.btnQuitClub_i = function () {
		var t = new EButton();
		this.btnQuitClub = t;
		t.bottom = 30;
		t.height = 65;
		t.horizontalCenter = 0;
		t.width = 165;
		t.skinName = ClubMeSkin$Skin36;
		return t;
	};
	return ClubMeSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/ClubMembers.exml'] = window.ClubMembersSkin = (function (_super) {
	__extends(ClubMembersSkin, _super);
	var ClubMembersSkin$Skin37 = 	(function (_super) {
		__extends(ClubMembersSkin$Skin37, _super);
		function ClubMembersSkin$Skin37() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMembersSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubMembersSkin$Skin37;
	})(eui.Skin);

	var ClubMembersSkin$Skin38 = 	(function (_super) {
		__extends(ClubMembersSkin$Skin38, _super);
		function ClubMembersSkin$Skin38() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMembersSkin$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubMembersSkin$Skin38;
	})(eui.Skin);

	var ClubMembersSkin$Skin39 = 	(function (_super) {
		__extends(ClubMembersSkin$Skin39, _super);
		function ClubMembersSkin$Skin39() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMembersSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "管理";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ClubMembersSkin$Skin39;
	})(eui.Skin);

	var ClubMembersSkin$Skin40 = 	(function (_super) {
		__extends(ClubMembersSkin$Skin40, _super);
		function ClubMembersSkin$Skin40() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMembersSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubMembersSkin$Skin40;
	})(eui.Skin);

	var ClubMembersSkin$Skin41 = 	(function (_super) {
		__extends(ClubMembersSkin$Skin41, _super);
		function ClubMembersSkin$Skin41() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMembersSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "page_up_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubMembersSkin$Skin41;
	})(eui.Skin);

	var ClubMembersSkin$Skin42 = 	(function (_super) {
		__extends(ClubMembersSkin$Skin42, _super);
		function ClubMembersSkin$Skin42() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMembersSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "page_down_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubMembersSkin$Skin42;
	})(eui.Skin);

	var ClubMembersSkin$Skin43 = 	(function (_super) {
		__extends(ClubMembersSkin$Skin43, _super);
		function ClubMembersSkin$Skin43() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMembersSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "添加管理员";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ClubMembersSkin$Skin43;
	})(eui.Skin);

	var ClubMembersSkin$Skin44 = 	(function (_super) {
		__extends(ClubMembersSkin$Skin44, _super);
		function ClubMembersSkin$Skin44() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMembersSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubMembersSkin$Skin44;
	})(eui.Skin);

	var ClubMembersSkin$Skin45 = 	(function (_super) {
		__extends(ClubMembersSkin$Skin45, _super);
		function ClubMembersSkin$Skin45() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMembersSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubMembersSkin$Skin45;
	})(eui.Skin);

	var ClubMembersSkin$Skin46 = 	(function (_super) {
		__extends(ClubMembersSkin$Skin46, _super);
		function ClubMembersSkin$Skin46() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubMembersSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubMembersSkin$Skin46;
	})(eui.Skin);

	function ClubMembersSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","radioBtn","grpTabBtns","grpTabMenu","vsMembers","grpMembers","txtMemberId","btnMemberMgmt","btnRefresh1","btnPageUp","labPagesNum","btnPageDown","lablistAllMembersNoData","listAllMembers","grpAllMembers","txtAdminId","btnAddClubAdmin","btnRefresh2","lablistAdminsNoData","listAdmins","grpAdmins","cbAutoApprove","btnRefresh3","lablistAppliedMembersNoData","listAppliedMembers","grpAppliedMembers","btnRefresh4","lablistInvitedMembersNoData","listInvitedMembers","grpInvitedMembers"];
		
		this.height = 600;
		this.width = 900;
		this.elementsContent = [this.imgWin_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpTabMenu_i(),this.grpMembers_i(),this.grpAllMembers_i(),this.grpAdmins_i(),this.grpAppliedMembers_i(),this.grpInvitedMembers_i()];
	}
	var _proto = ClubMembersSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_b_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 20;
		t.width = 55;
		t.skinName = ClubMembersSkin$Skin37;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 20;
		t.width = 55;
		t.skinName = ClubMembersSkin$Skin38;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_membermgmt_png";
		t.top = 25;
		return t;
	};
	_proto.grpTabMenu_i = function () {
		var t = new eui.Group();
		this.grpTabMenu = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 20;
		t.top = 90;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this.grpTabBtns_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpTabBtns_i = function () {
		var t = new eui.Group();
		this.grpTabBtns = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 200;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.radioBtn_i(),this._RadioButton1_i(),this._RadioButton2_i(),this._RadioButton3_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.radioBtn_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn = t;
		t.groupName = "tabBtns";
		t.horizontalCenter = 0;
		t.label = "会员列表";
		t.selected = true;
		t.skinName = "CRadioButtonSkin";
		t.value = "0";
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabBtns";
		t.horizontalCenter = 0;
		t.label = "管理员";
		t.skinName = "CRadioButtonSkin";
		t.value = "1";
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabBtns";
		t.horizontalCenter = 0;
		t.label = "申请列表";
		t.skinName = "CRadioButtonSkin";
		t.value = "2";
		return t;
	};
	_proto._RadioButton3_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabBtns";
		t.horizontalCenter = 0;
		t.label = "邀请会员";
		t.skinName = "CRadioButtonSkin";
		t.value = "3";
		t.visible = false;
		return t;
	};
	_proto.grpMembers_i = function () {
		var t = new eui.Group();
		this.grpMembers = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this.vsMembers_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.vsMembers_i = function () {
		var t = new eui.ViewStack();
		this.vsMembers = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpAllMembers_i = function () {
		var t = new eui.Group();
		this.grpAllMembers = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Group3_i(),this.lablistAllMembersNoData_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 60;
		t.elementsContent = [this.txtMemberId_i(),this.btnMemberMgmt_i(),this.btnRefresh1_i()];
		return t;
	};
	_proto.txtMemberId_i = function () {
		var t = new eui.TextInput();
		this.txtMemberId = t;
		t.height = 40;
		t.left = 10;
		t.prompt = "会员ID";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto.btnMemberMgmt_i = function () {
		var t = new EButton();
		this.btnMemberMgmt = t;
		t.height = 55;
		t.left = 180;
		t.verticalCenter = 0;
		t.width = 130;
		t.skinName = ClubMembersSkin$Skin39;
		return t;
	};
	_proto.btnRefresh1_i = function () {
		var t = new EButton();
		this.btnRefresh1 = t;
		t.height = 45;
		t.left = 320;
		t.verticalCenter = 0;
		t.width = 45;
		t.skinName = ClubMembersSkin$Skin40;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.top = 0;
		t.percentWidth = 40;
		t.elementsContent = [this._Image3_i(),this.btnPageUp_i(),this.labPagesNum_i(),this.btnPageDown_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.right = 30;
		t.scale9Grid = new egret.Rectangle(21,8,131,17);
		t.source = "numbers_bg_png";
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto.btnPageUp_i = function () {
		var t = new EButton();
		this.btnPageUp = t;
		t.height = 40;
		t.right = 200;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = ClubMembersSkin$Skin41;
		return t;
	};
	_proto.labPagesNum_i = function () {
		var t = new eui.Label();
		this.labPagesNum = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.right = 50;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x404142;
		t.text = "133/1300";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto.btnPageDown_i = function () {
		var t = new EButton();
		this.btnPageDown = t;
		t.height = 40;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = ClubMembersSkin$Skin42;
		return t;
	};
	_proto.lablistAllMembersNoData_i = function () {
		var t = new eui.Label();
		this.lablistAllMembersNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 440;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listAllMembers_i();
		return t;
	};
	_proto.listAllMembers_i = function () {
		var t = new eui.List();
		this.listAllMembers = t;
		t.percentHeight = 100;
		t.horizontalCenter = -2;
		t.itemRendererSkinName = ItemClubMemberSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout2_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.grpAdmins_i = function () {
		var t = new eui.Group();
		this.grpAdmins = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Group4_i(),this.lablistAdminsNoData_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.txtAdminId_i(),this.btnAddClubAdmin_i(),this.btnRefresh2_i()];
		return t;
	};
	_proto.txtAdminId_i = function () {
		var t = new eui.TextInput();
		this.txtAdminId = t;
		t.height = 40;
		t.left = 10;
		t.prompt = "会员ID";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto.btnAddClubAdmin_i = function () {
		var t = new EButton();
		this.btnAddClubAdmin = t;
		t.height = 55;
		t.left = 180;
		t.verticalCenter = 0;
		t.width = 165;
		t.skinName = ClubMembersSkin$Skin43;
		return t;
	};
	_proto.btnRefresh2_i = function () {
		var t = new EButton();
		this.btnRefresh2 = t;
		t.height = 45;
		t.right = 20;
		t.verticalCenter = 0;
		t.width = 45;
		t.skinName = ClubMembersSkin$Skin44;
		return t;
	};
	_proto.lablistAdminsNoData_i = function () {
		var t = new eui.Label();
		this.lablistAdminsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 425;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listAdmins_i();
		return t;
	};
	_proto.listAdmins_i = function () {
		var t = new eui.List();
		this.listAdmins = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemClubMemberSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout3_i();
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.grpAppliedMembers_i = function () {
		var t = new eui.Group();
		this.grpAppliedMembers = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Group5_i(),this.lablistAppliedMembersNoData_i(),this._Scroller3_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.cbAutoApprove_i(),this._Label1_i(),this.btnRefresh3_i()];
		return t;
	};
	_proto.cbAutoApprove_i = function () {
		var t = new eui.CheckBox();
		this.cbAutoApprove = t;
		t.height = 40;
		t.label = "";
		t.left = 10;
		t.verticalCenter = 0;
		t.width = 40;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.left = 65;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "开启自动审批";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 140;
		t.wordWrap = true;
		return t;
	};
	_proto.btnRefresh3_i = function () {
		var t = new EButton();
		this.btnRefresh3 = t;
		t.height = 45;
		t.right = 20;
		t.verticalCenter = 0;
		t.width = 45;
		t.skinName = ClubMembersSkin$Skin45;
		return t;
	};
	_proto.lablistAppliedMembersNoData_i = function () {
		var t = new eui.Label();
		this.lablistAppliedMembersNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.height = 425;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listAppliedMembers_i();
		return t;
	};
	_proto.listAppliedMembers_i = function () {
		var t = new eui.List();
		this.listAppliedMembers = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemAppliedMemberSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout4_i();
		t.dataProvider = this._ArrayCollection3_i();
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection3_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.grpInvitedMembers_i = function () {
		var t = new eui.Group();
		this.grpInvitedMembers = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Group6_i(),this.lablistInvitedMembersNoData_i(),this._Scroller4_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.btnRefresh4_i()];
		return t;
	};
	_proto.btnRefresh4_i = function () {
		var t = new EButton();
		this.btnRefresh4 = t;
		t.height = 45;
		t.right = 20;
		t.verticalCenter = 0;
		t.width = 45;
		t.skinName = ClubMembersSkin$Skin46;
		return t;
	};
	_proto.lablistInvitedMembersNoData_i = function () {
		var t = new eui.Label();
		this.lablistInvitedMembersNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller4_i = function () {
		var t = new eui.Scroller();
		t.height = 425;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listInvitedMembers_i();
		return t;
	};
	_proto.listInvitedMembers_i = function () {
		var t = new eui.List();
		this.listInvitedMembers = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemClubMemberSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout5_i();
		t.dataProvider = this._ArrayCollection4_i();
		return t;
	};
	_proto._VerticalLayout5_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection4_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	return ClubMembersSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/ClubOrders.exml'] = window.ClubOrdersSkin = (function (_super) {
	__extends(ClubOrdersSkin, _super);
	var ClubOrdersSkin$Skin47 = 	(function (_super) {
		__extends(ClubOrdersSkin$Skin47, _super);
		function ClubOrdersSkin$Skin47() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubOrdersSkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubOrdersSkin$Skin47;
	})(eui.Skin);

	var ClubOrdersSkin$Skin48 = 	(function (_super) {
		__extends(ClubOrdersSkin$Skin48, _super);
		function ClubOrdersSkin$Skin48() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubOrdersSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubOrdersSkin$Skin48;
	})(eui.Skin);

	var ClubOrdersSkin$Skin49 = 	(function (_super) {
		__extends(ClubOrdersSkin$Skin49, _super);
		function ClubOrdersSkin$Skin49() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubOrdersSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubOrdersSkin$Skin49;
	})(eui.Skin);

	function ClubOrdersSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","imgWinTitle","btnGoBack","btnClose","lab1stTips","labBalance","labRechargeSum","labWithdrawSum","grpClubOrdersSum","btnRefresh","lablistClubOrdersNoData","listClubOrders","grpClubOrders"];
		
		this.height = 600;
		this.width = 700;
		this.elementsContent = [this.imgWin_i(),this.imgWinTitle_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpClubOrdersSum_i(),this.grpClubOrders_i(),this._Label4_i()];
	}
	var _proto = ClubOrdersSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,84,578,420);
		t.source = "win_m_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_cluborders_png";
		t.top = 25;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = ClubOrdersSkin$Skin47;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = ClubOrdersSkin$Skin48;
		return t;
	};
	_proto.grpClubOrdersSum_i = function () {
		var t = new eui.Group();
		this.grpClubOrdersSum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.horizontalCenter = 0;
		t.top = 80;
		t.width = 620;
		t.elementsContent = [this._Image1_i(),this.lab1stTips_i(),this.labBalance_i(),this._Label1_i(),this.labRechargeSum_i(),this._Label2_i(),this.labWithdrawSum_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.lab1stTips_i = function () {
		var t = new eui.Label();
		this.lab1stTips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "差额:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 61;
		return t;
	};
	_proto.labBalance_i = function () {
		var t = new eui.Label();
		this.labBalance = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 70;
		t.size = 22;
		t.text = "534567";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 170;
		t.size = 20;
		t.text = "上分总计:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.labRechargeSum_i = function () {
		var t = new eui.Label();
		this.labRechargeSum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 260;
		t.size = 22;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 380;
		t.size = 20;
		t.text = "下分总计:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.labWithdrawSum_i = function () {
		var t = new eui.Label();
		this.labWithdrawSum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 480;
		t.size = 22;
		t.text = "788766";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.grpClubOrders_i = function () {
		var t = new eui.Group();
		this.grpClubOrders = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 410;
		t.horizontalCenter = 0;
		t.top = 123;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.btnRefresh_i(),this.lablistClubOrdersNoData_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Label3_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.left = 10;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "记录详情";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 200;
		t.wordWrap = true;
		return t;
	};
	_proto.btnRefresh_i = function () {
		var t = new EButton();
		this.btnRefresh = t;
		t.height = 45;
		t.right = 30;
		t.top = 0;
		t.width = 45;
		t.skinName = ClubOrdersSkin$Skin49;
		return t;
	};
	_proto.lablistClubOrdersNoData_i = function () {
		var t = new eui.Label();
		this.lablistClubOrdersNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 400;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listClubOrders_i();
		return t;
	};
	_proto.listClubOrders_i = function () {
		var t = new eui.List();
		this.listClubOrders = t;
		t.anchorOffsetY = 0;
		t.height = 360;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemClubOrderSkin;
		t.verticalCenter = -21;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bottom = 30;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "提示：系统只保留最近100次的记录";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	return ClubOrdersSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/Clubs.exml'] = window.ClubsSkin = (function (_super) {
	__extends(ClubsSkin, _super);
	var ClubsSkin$Skin50 = 	(function (_super) {
		__extends(ClubsSkin$Skin50, _super);
		function ClubsSkin$Skin50() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubsSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubsSkin$Skin50;
	})(eui.Skin);

	var ClubsSkin$Skin51 = 	(function (_super) {
		__extends(ClubsSkin$Skin51, _super);
		function ClubsSkin$Skin51() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubsSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubsSkin$Skin51;
	})(eui.Skin);

	var ClubsSkin$Skin52 = 	(function (_super) {
		__extends(ClubsSkin$Skin52, _super);
		function ClubsSkin$Skin52() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubsSkin$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "创建俱乐部";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ClubsSkin$Skin52;
	})(eui.Skin);

	var ClubsSkin$Skin53 = 	(function (_super) {
		__extends(ClubsSkin$Skin53, _super);
		function ClubsSkin$Skin53() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubsSkin$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "快速加入";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ClubsSkin$Skin53;
	})(eui.Skin);

	var ClubsSkin$Skin54 = 	(function (_super) {
		__extends(ClubsSkin$Skin54, _super);
		function ClubsSkin$Skin54() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubsSkin$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubsSkin$Skin54;
	})(eui.Skin);

	var ClubsSkin$Skin55 = 	(function (_super) {
		__extends(ClubsSkin$Skin55, _super);
		function ClubsSkin$Skin55() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubsSkin$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "page_up_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubsSkin$Skin55;
	})(eui.Skin);

	var ClubsSkin$Skin56 = 	(function (_super) {
		__extends(ClubsSkin$Skin56, _super);
		function ClubsSkin$Skin56() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubsSkin$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "page_down_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubsSkin$Skin56;
	})(eui.Skin);

	function ClubsSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","clubRadioBtn","grpTabBtns","btnShowCCWin","grpTabMenu","vsClubs","grpClubs","txtClubId","btnJoinClub","btnRefresh","btnPageUp","labPagesNum","btnPageDown","lablistAllClubsNoData","listAllClubs","grpAllClubs","lablistMyClubsNoData","listMyClubs","grpMyClubs","lablistJoinedClubsNoData","listJoinedClubs","grpJoinedClubs","lablistMyAppliedClubsNoData","listMyAppliedClubs","grpAppliedClubs"];
		
		this.height = 600;
		this.width = 900;
		this.elementsContent = [this.imgWin_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpTabMenu_i(),this.grpClubs_i(),this.grpAllClubs_i(),this.grpMyClubs_i(),this.grpJoinedClubs_i(),this.grpAppliedClubs_i()];
	}
	var _proto = ClubsSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(92,87,744,449);
		t.source = "win_b_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 20;
		t.width = 55;
		t.skinName = ClubsSkin$Skin50;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 20;
		t.width = 55;
		t.skinName = ClubsSkin$Skin51;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_club_png";
		t.top = 25;
		return t;
	};
	_proto.grpTabMenu_i = function () {
		var t = new eui.Group();
		this.grpTabMenu = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 20;
		t.top = 90;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this.grpTabBtns_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpTabBtns_i = function () {
		var t = new eui.Group();
		this.grpTabBtns = t;
		t.anchorOffsetY = 0;
		t.height = 360;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 200;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.clubRadioBtn_i(),this._RadioButton1_i(),this._RadioButton2_i(),this._RadioButton3_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.clubRadioBtn_i = function () {
		var t = new eui.RadioButton();
		this.clubRadioBtn = t;
		t.groupName = "tabClubBtns";
		t.horizontalCenter = 0;
		t.label = "俱乐部";
		t.selected = true;
		t.skinName = "CRadioButtonSkin";
		t.value = "0";
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabClubBtns";
		t.horizontalCenter = 0;
		t.label = "我创建的";
		t.skinName = "CRadioButtonSkin";
		t.value = "1";
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabClubBtns";
		t.horizontalCenter = 0;
		t.label = "我加入的";
		t.skinName = "CRadioButtonSkin";
		t.value = "2";
		return t;
	};
	_proto._RadioButton3_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabClubBtns";
		t.horizontalCenter = 0;
		t.label = "我的申请";
		t.skinName = "CRadioButtonSkin";
		t.value = "3";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.horizontalCenter = 0;
		t.top = 360;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.btnShowCCWin_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 5;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.btnShowCCWin_i = function () {
		var t = new EButton();
		this.btnShowCCWin = t;
		t.bottom = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.width = 175;
		t.skinName = ClubsSkin$Skin52;
		return t;
	};
	_proto.grpClubs_i = function () {
		var t = new eui.Group();
		this.grpClubs = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this.vsClubs_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.vsClubs_i = function () {
		var t = new eui.ViewStack();
		this.vsClubs = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpAllClubs_i = function () {
		var t = new eui.Group();
		this.grpAllClubs = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.width = 620;
		t.elementsContent = [this._Group4_i(),this.lablistAllClubsNoData_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 60;
		t.elementsContent = [this.txtClubId_i(),this.btnJoinClub_i(),this.btnRefresh_i()];
		return t;
	};
	_proto.txtClubId_i = function () {
		var t = new eui.TextInput();
		this.txtClubId = t;
		t.height = 40;
		t.left = 10;
		t.prompt = "俱乐部ID";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto.btnJoinClub_i = function () {
		var t = new EButton();
		this.btnJoinClub = t;
		t.height = 55;
		t.left = 180;
		t.verticalCenter = 0;
		t.width = 130;
		t.skinName = ClubsSkin$Skin53;
		return t;
	};
	_proto.btnRefresh_i = function () {
		var t = new EButton();
		this.btnRefresh = t;
		t.height = 40;
		t.left = 320;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = ClubsSkin$Skin54;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.top = 0;
		t.percentWidth = 40;
		t.elementsContent = [this._Image3_i(),this.btnPageUp_i(),this.labPagesNum_i(),this.btnPageDown_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.right = 30;
		t.scale9Grid = new egret.Rectangle(21,8,131,17);
		t.source = "numbers_bg_png";
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto.btnPageUp_i = function () {
		var t = new EButton();
		this.btnPageUp = t;
		t.height = 40;
		t.right = 200;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = ClubsSkin$Skin55;
		return t;
	};
	_proto.labPagesNum_i = function () {
		var t = new eui.Label();
		this.labPagesNum = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.right = 50;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x404142;
		t.text = "133/1300";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto.btnPageDown_i = function () {
		var t = new EButton();
		this.btnPageDown = t;
		t.height = 40;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = ClubsSkin$Skin56;
		return t;
	};
	_proto.lablistAllClubsNoData_i = function () {
		var t = new eui.Label();
		this.lablistAllClubsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 430;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listAllClubs_i();
		return t;
	};
	_proto.listAllClubs_i = function () {
		var t = new eui.List();
		this.listAllClubs = t;
		t.percentHeight = 100;
		t.horizontalCenter = -2;
		t.itemRendererSkinName = ItemClubSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout3_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.grpMyClubs_i = function () {
		var t = new eui.Group();
		this.grpMyClubs = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this.lablistMyClubsNoData_i(),this._Scroller2_i()];
		return t;
	};
	_proto.lablistMyClubsNoData_i = function () {
		var t = new eui.Label();
		this.lablistMyClubsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.viewport = this.listMyClubs_i();
		return t;
	};
	_proto.listMyClubs_i = function () {
		var t = new eui.List();
		this.listMyClubs = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemClubSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout4_i();
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.grpJoinedClubs_i = function () {
		var t = new eui.Group();
		this.grpJoinedClubs = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this.lablistJoinedClubsNoData_i(),this._Scroller3_i()];
		return t;
	};
	_proto.lablistJoinedClubsNoData_i = function () {
		var t = new eui.Label();
		this.lablistJoinedClubsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.viewport = this.listJoinedClubs_i();
		return t;
	};
	_proto.listJoinedClubs_i = function () {
		var t = new eui.List();
		this.listJoinedClubs = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemClubSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout5_i();
		t.dataProvider = this._ArrayCollection3_i();
		return t;
	};
	_proto._VerticalLayout5_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection3_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.grpAppliedClubs_i = function () {
		var t = new eui.Group();
		this.grpAppliedClubs = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this.lablistMyAppliedClubsNoData_i(),this._Scroller4_i()];
		return t;
	};
	_proto.lablistMyAppliedClubsNoData_i = function () {
		var t = new eui.Label();
		this.lablistMyAppliedClubsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller4_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.viewport = this.listMyAppliedClubs_i();
		return t;
	};
	_proto.listMyAppliedClubs_i = function () {
		var t = new eui.List();
		this.listMyAppliedClubs = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemClubSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout6_i();
		t.dataProvider = this._ArrayCollection4_i();
		return t;
	};
	_proto._VerticalLayout6_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection4_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	return ClubsSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/ClubSetting.exml'] = window.ClubSettingSkin = (function (_super) {
	__extends(ClubSettingSkin, _super);
	var ClubSettingSkin$Skin57 = 	(function (_super) {
		__extends(ClubSettingSkin$Skin57, _super);
		function ClubSettingSkin$Skin57() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubSettingSkin$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubSettingSkin$Skin57;
	})(eui.Skin);

	var ClubSettingSkin$Skin58 = 	(function (_super) {
		__extends(ClubSettingSkin$Skin58, _super);
		function ClubSettingSkin$Skin58() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubSettingSkin$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return ClubSettingSkin$Skin58;
	})(eui.Skin);

	var ClubSettingSkin$Skin59 = 	(function (_super) {
		__extends(ClubSettingSkin$Skin59, _super);
		function ClubSettingSkin$Skin59() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubSettingSkin$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_fold_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xCC1E0E;
			t.text = "删除";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ClubSettingSkin$Skin59;
	})(eui.Skin);

	var ClubSettingSkin$Skin60 = 	(function (_super) {
		__extends(ClubSettingSkin$Skin60, _super);
		function ClubSettingSkin$Skin60() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ClubSettingSkin$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xFCBC0F;
			t.text = "转让";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ClubSettingSkin$Skin60;
	})(eui.Skin);

	function ClubSettingSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","txtClubId","btnDeleteClub","grpDeleteClub","txtUserId","btnTransferClub","grpTransferClub"];
		
		this.height = 400;
		this.width = 550;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpDeleteClub_i(),this.grpTransferClub_i()];
	}
	var _proto = ClubSettingSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_s_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_setting_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = ClubSettingSkin$Skin57;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = ClubSettingSkin$Skin58;
		return t;
	};
	_proto.grpDeleteClub_i = function () {
		var t = new eui.Group();
		this.grpDeleteClub = t;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.horizontalCenter = 0;
		t.top = 100;
		t.percentWidth = 90;
		t.elementsContent = [this._Image2_i(),this.txtClubId_i(),this._Label1_i(),this.btnDeleteClub_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.txtClubId_i = function () {
		var t = new eui.TextInput();
		this.txtClubId = t;
		t.height = 45;
		t.left = 10;
		t.prompt = "俱乐部的Id";
		t.top = 20;
		t.width = 300;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "注意:俱乐部删除之后,不可恢复.";
		t.textAlign = "left";
		t.textColor = 0xcec7b3;
		t.top = 65;
		t.verticalAlign = "middle";
		t.width = 480;
		return t;
	};
	_proto.btnDeleteClub_i = function () {
		var t = new EButton();
		this.btnDeleteClub = t;
		t.height = 60;
		t.left = 320;
		t.top = 15;
		t.width = 145;
		t.skinName = ClubSettingSkin$Skin59;
		return t;
	};
	_proto.grpTransferClub_i = function () {
		var t = new eui.Group();
		this.grpTransferClub = t;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.horizontalCenter = 0.5;
		t.top = 225;
		t.percentWidth = 90;
		t.elementsContent = [this._Image3_i(),this.txtUserId_i(),this._Label2_i(),this.btnTransferClub_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.txtUserId_i = function () {
		var t = new eui.TextInput();
		this.txtUserId = t;
		t.height = 45;
		t.left = 10;
		t.prompt = "用户的Id";
		t.top = 20;
		t.width = 300;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "注意:本操作将变更俱乐部的拥有者.";
		t.textAlign = "left";
		t.textColor = 0xcec7b3;
		t.top = 65;
		t.verticalAlign = "middle";
		t.width = 480;
		return t;
	};
	_proto.btnTransferClub_i = function () {
		var t = new EButton();
		this.btnTransferClub = t;
		t.height = 60;
		t.left = 320;
		t.top = 15;
		t.width = 145;
		t.skinName = ClubSettingSkin$Skin60;
		return t;
	};
	return ClubSettingSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/DropDownListSkin.exml'] = window.DropDownListSkin = (function (_super) {
	__extends(DropDownListSkin, _super);
	var DropDownListSkin$Skin61 = 	(function (_super) {
		__extends(DropDownListSkin$Skin61, _super);
		function DropDownListSkin$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dropdown_btn_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DropDownListSkin$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dropdown_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.left = 60;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x472439;
			t.verticalCenter = 0;
			return t;
		};
		return DropDownListSkin$Skin61;
	})(eui.Skin);

	function DropDownListSkin() {
		_super.call(this);
		this.skinParts = ["listMask","menuBgMask","menuBg","list","menuBtn"];
		
		this.height = 60;
		this.width = 200;
		this.elementsContent = [this.listMask_i(),this.menuBgMask_i(),this.menuBg_i(),this.list_i(),this.menuBtn_i()];
	}
	var _proto = DropDownListSkin.prototype;

	_proto.listMask_i = function () {
		var t = new eui.Rect();
		this.listMask = t;
		t.height = 20;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.menuBgMask_i = function () {
		var t = new eui.Rect();
		this.menuBgMask = t;
		t.height = 20;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.menuBg_i = function () {
		var t = new eui.Image();
		this.menuBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.mask = this.menuBgMask;
		t.scale9Grid = new egret.Rectangle(13,5,150,36);
		t.source = "dropdown_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.mask = this.listMask;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.menuBtn_i = function () {
		var t = new eui.Button();
		this.menuBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.horizontalCenter = -1;
		t.label = "下拉选择";
		t.verticalCenter = -2;
		t.width = 208;
		t.skinName = DropDownListSkin$Skin61;
		return t;
	};
	return DropDownListSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/CreateClub.exml'] = window.CreateClubsSkin = (function (_super) {
	__extends(CreateClubsSkin, _super);
	var CreateClubsSkin$Skin62 = 	(function (_super) {
		__extends(CreateClubsSkin$Skin62, _super);
		function CreateClubsSkin$Skin62() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateClubsSkin$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return CreateClubsSkin$Skin62;
	})(eui.Skin);

	var CreateClubsSkin$Skin63 = 	(function (_super) {
		__extends(CreateClubsSkin$Skin63, _super);
		function CreateClubsSkin$Skin63() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateClubsSkin$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return CreateClubsSkin$Skin63;
	})(eui.Skin);

	var CreateClubsSkin$Skin64 = 	(function (_super) {
		__extends(CreateClubsSkin$Skin64, _super);
		function CreateClubsSkin$Skin64() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateClubsSkin$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "创建俱乐部";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return CreateClubsSkin$Skin64;
	})(eui.Skin);

	function CreateClubsSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","txtClubName","txtfeeRate","btnCreateClub","ddlGameType","grpCreateClub"];
		
		this.height = 500;
		this.width = 650;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpCreateClub_i()];
	}
	var _proto = CreateClubsSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_m_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_createclub_png";
		t.top = 25;
		t.width = 170;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 10;
		t.width = 55;
		t.skinName = CreateClubsSkin$Skin62;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 10;
		t.width = 55;
		t.skinName = CreateClubsSkin$Skin63;
		return t;
	};
	_proto.grpCreateClub_i = function () {
		var t = new eui.Group();
		this.grpCreateClub = t;
		t.anchorOffsetY = 0;
		t.height = 420;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 22;
		t.percentWidth = 90;
		t.elementsContent = [this.txtClubName_i(),this._Label1_i(),this.txtfeeRate_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.btnCreateClub_i(),this.ddlGameType_i()];
		return t;
	};
	_proto.txtClubName_i = function () {
		var t = new eui.TextInput();
		this.txtClubName = t;
		t.height = 45;
		t.horizontalCenter = 0.5;
		t.prompt = "俱乐部名称";
		t.top = 20;
		t.width = 300;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "俱乐部名称,2-6个字,必须是数字、字母或汉字";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 60;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	_proto.txtfeeRate_i = function () {
		var t = new eui.TextInput();
		this.txtfeeRate = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.prompt = "服务费";
		t.top = 100;
		t.width = 280;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 126;
		t.size = 24;
		t.text = "%";
		t.textAlign = "left";
		t.textColor = 0xcec7b3;
		t.top = 105;
		t.verticalAlign = "middle";
		t.width = 43;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "服务费的比率,比如输入'2',表示是2%的服务费";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 140;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = -5.5;
		t.size = 20;
		t.text = "选择俱乐部的游戏";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 240;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	_proto.btnCreateClub_i = function () {
		var t = new EButton();
		this.btnCreateClub = t;
		t.bottom = 30;
		t.height = 65;
		t.horizontalCenter = 5;
		t.width = 175;
		t.skinName = CreateClubsSkin$Skin64;
		return t;
	};
	_proto.ddlGameType_i = function () {
		var t = new DropDownList();
		this.ddlGameType = t;
		t.height = 55;
		t.horizontalCenter = 0;
		t.skinName = "DropDownListSkin";
		t.top = 190;
		t.width = 200;
		return t;
	};
	return CreateClubsSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/CreateClubRoom.exml'] = window.CreateClubRoomSkin = (function (_super) {
	__extends(CreateClubRoomSkin, _super);
	var CreateClubRoomSkin$Skin65 = 	(function (_super) {
		__extends(CreateClubRoomSkin$Skin65, _super);
		function CreateClubRoomSkin$Skin65() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateClubRoomSkin$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return CreateClubRoomSkin$Skin65;
	})(eui.Skin);

	var CreateClubRoomSkin$Skin66 = 	(function (_super) {
		__extends(CreateClubRoomSkin$Skin66, _super);
		function CreateClubRoomSkin$Skin66() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateClubRoomSkin$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return CreateClubRoomSkin$Skin66;
	})(eui.Skin);

	var CreateClubRoomSkin$Skin67 = 	(function (_super) {
		__extends(CreateClubRoomSkin$Skin67, _super);
		function CreateClubRoomSkin$Skin67() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateClubRoomSkin$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return CreateClubRoomSkin$Skin67;
	})(eui.Skin);

	function CreateClubRoomSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","btnRefresh","labListNoData","listGameConfs","grpCreateClubRoom"];
		
		this.height = 500;
		this.width = 650;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpCreateClubRoom_i()];
	}
	var _proto = CreateClubRoomSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_m_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_createroom_png";
		t.top = 25;
		t.width = 150;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 10;
		t.width = 55;
		t.skinName = CreateClubRoomSkin$Skin65;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 10;
		t.width = 55;
		t.skinName = CreateClubRoomSkin$Skin66;
		return t;
	};
	_proto.grpCreateClubRoom_i = function () {
		var t = new eui.Group();
		this.grpCreateClubRoom = t;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.labListNoData_i(),this._Scroller1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Label1_i(),this.btnRefresh_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "设置的玩法";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 200;
		t.wordWrap = true;
		return t;
	};
	_proto.btnRefresh_i = function () {
		var t = new EButton();
		this.btnRefresh = t;
		t.height = 50;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 50;
		t.skinName = CreateClubRoomSkin$Skin67;
		return t;
	};
	_proto.labListNoData_i = function () {
		var t = new eui.Label();
		this.labListNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 260;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listGameConfs_i();
		return t;
	};
	_proto.listGameConfs_i = function () {
		var t = new eui.List();
		this.listGameConfs = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemGameConfSkin;
		t.verticalCenter = -12.5;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "提示：每个玩法最多可创建2个空房间.正在游戏的房间不计在内.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 320;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	return CreateClubRoomSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/TRadioButtonSkin.exml'] = window.TRadioButtonSkin = (function (_super) {
	__extends(TRadioButtonSkin, _super);
	function TRadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 40;
		this.width = 40;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7),
					new eui.SetProperty("_Image1","source","radio_on_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = TRadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.height = 40;
		t.source = "radio_off_png";
		t.width = 40;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6a6b70;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return TRadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/CHSlider.exml'] = window.CHSliderSkin = (function (_super) {
	__extends(CHSliderSkin, _super);
	function CHSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.height = 40;
		this.minHeight = 40;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.track_i(),this.thumb_i()];
	}
	var _proto = CHSliderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.height = 25;
		t.horizontalCenter = 0;
		t.source = "hslider_bg_png";
		t.verticalCenter = 0;
		t.width = 400;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.source = "hslider_bar_png";
		t.verticalCenter = 0;
		t.width = 400;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "slider_btn_png";
		t.verticalCenter = 0;
		t.width = 40;
		return t;
	};
	return CHSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/CreateGameConf.exml'] = window.CreateGameConfSkin = (function (_super) {
	__extends(CreateGameConfSkin, _super);
	var CreateGameConfSkin$Skin68 = 	(function (_super) {
		__extends(CreateGameConfSkin$Skin68, _super);
		function CreateGameConfSkin$Skin68() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateGameConfSkin$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return CreateGameConfSkin$Skin68;
	})(eui.Skin);

	var CreateGameConfSkin$Skin69 = 	(function (_super) {
		__extends(CreateGameConfSkin$Skin69, _super);
		function CreateGameConfSkin$Skin69() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateGameConfSkin$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return CreateGameConfSkin$Skin69;
	})(eui.Skin);

	var CreateGameConfSkin$Skin70 = 	(function (_super) {
		__extends(CreateGameConfSkin$Skin70, _super);
		function CreateGameConfSkin$Skin70() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateGameConfSkin$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x5886c9;
			t.text = "设置";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return CreateGameConfSkin$Skin70;
	})(eui.Skin);

	var CreateGameConfSkin$Skin71 = 	(function (_super) {
		__extends(CreateGameConfSkin$Skin71, _super);
		function CreateGameConfSkin$Skin71() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateGameConfSkin$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x5886c9;
			t.text = "设置";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return CreateGameConfSkin$Skin71;
	})(eui.Skin);

	var CreateGameConfSkin$Skin72 = 	(function (_super) {
		__extends(CreateGameConfSkin$Skin72, _super);
		function CreateGameConfSkin$Skin72() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateGameConfSkin$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x5886c9;
			t.text = "设置";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return CreateGameConfSkin$Skin72;
	})(eui.Skin);

	var CreateGameConfSkin$Skin73 = 	(function (_super) {
		__extends(CreateGameConfSkin$Skin73, _super);
		function CreateGameConfSkin$Skin73() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateGameConfSkin$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x5886c9;
			t.text = "设置";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return CreateGameConfSkin$Skin73;
	})(eui.Skin);

	function CreateGameConfSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","imgWinTitle","btnGoBack","btnClose","ddzBottomOpt1","ddzBottomOpt2","ddzBottomOpt3","ddzRoundsOpt1","ddzRoundsOpt2","ddzRoundsOpt3","ddzMinChipsOpt1","ddzMinChipsOpt2","ddzMinChipsOpt3","btnCreateDdzRoom","grpCreateDdzRoom","texasBottomOpt1","texasBottomOpt2","texasBottomOpt3","texasRoundsOpt1","texasRoundsOpt2","texasRoundsOpt3","texasMinChipsOpt1","texasMinChipsOpt2","texasMinChipsOpt3","texasMaxChipsOpt1","texasMaxChipsOpt2","texasMaxChipsOpt3","hsTexasCapacity","labTexasCapacity","btnCreateTexasRoom","grpCreateTexasRoom","qznnBottomOpt1","qznnBottomOpt2","qznnBottomOpt3","qznnRoundsOpt1","qznnRoundsOpt2","qznnRoundsOpt3","qznnMinChipsOpt1","qznnMinChipsOpt2","qznnMinChipsOpt3","hsQznnCapacity","labQznnCapacity","btnCreateQznnRoom","grpCreateQznnRoom","zjhBottomOpt1","zjhBottomOpt2","zjhBottomOpt3","zjhRoundsOpt1","zjhRoundsOpt2","zjhRoundsOpt3","zjhMinChipsOpt1","zjhMinChipsOpt2","zjhMinChipsOpt3","zjhMaxChipsOpt1","zjhMaxChipsOpt2","zjhMaxChipsOpt3","hsZjhCapacity","labZjhCapacity","btnCreateZjhRoom","grpCreateZjhRoom"];
		
		this.height = 600;
		this.width = 700;
		this.elementsContent = [this.imgWin_i(),this.imgWinTitle_i(),this.btnGoBack_i(),this.btnClose_i(),this._Group1_i(),this.grpCreateDdzRoom_i(),this.grpCreateTexasRoom_i(),this.grpCreateQznnRoom_i(),this.grpCreateZjhRoom_i()];
	}
	var _proto = CreateGameConfSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,84,578,420);
		t.source = "win_m_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_games_png";
		t.top = 25;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = CreateGameConfSkin$Skin68;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = CreateGameConfSkin$Skin69;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 480;
		t.horizontalCenter = 0;
		t.top = 80;
		t.visible = true;
		t.width = 600;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpCreateDdzRoom_i = function () {
		var t = new eui.Group();
		this.grpCreateDdzRoom = t;
		t.height = 480;
		t.horizontalCenter = 0;
		t.top = 80;
		t.visible = false;
		t.width = 600;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this.btnCreateDdzRoom_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 10;
		t.percentWidth = 100;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.ddzBottomOpt1_i(),this.ddzBottomOpt2_i(),this.ddzBottomOpt3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "底分:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzBottomOpt1_i = function () {
		var t = new eui.RadioButton();
		this.ddzBottomOpt1 = t;
		t.groupName = "ddzBottomOpts";
		t.label = "1";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzBottomOpt2_i = function () {
		var t = new eui.RadioButton();
		this.ddzBottomOpt2 = t;
		t.groupName = "ddzBottomOpts";
		t.label = "2";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzBottomOpt3_i = function () {
		var t = new eui.RadioButton();
		this.ddzBottomOpt3 = t;
		t.groupName = "ddzBottomOpts";
		t.label = "3";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 80;
		t.percentWidth = 100;
		t.elementsContent = [this._Image3_i(),this._Label2_i(),this.ddzRoundsOpt1_i(),this.ddzRoundsOpt2_i(),this.ddzRoundsOpt3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "局数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzRoundsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.ddzRoundsOpt1 = t;
		t.groupName = "ddzRoundsOpts";
		t.label = "3";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzRoundsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.ddzRoundsOpt2 = t;
		t.groupName = "ddzRoundsOpts";
		t.label = "4";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzRoundsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.ddzRoundsOpt3 = t;
		t.groupName = "ddzRoundsOpts";
		t.label = "5";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 150;
		t.percentWidth = 100;
		t.elementsContent = [this._Image4_i(),this._Label3_i(),this.ddzMinChipsOpt1_i(),this.ddzMinChipsOpt2_i(),this.ddzMinChipsOpt3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "起始分:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzMinChipsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.ddzMinChipsOpt1 = t;
		t.groupName = "ddzMinChipsOpts";
		t.label = "5";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzMinChipsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.ddzMinChipsOpt2 = t;
		t.groupName = "ddzMinChipsOpts";
		t.label = "10";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzMinChipsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.ddzMinChipsOpt3 = t;
		t.groupName = "ddzMinChipsOpts";
		t.label = "20";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnCreateDdzRoom_i = function () {
		var t = new EButton();
		this.btnCreateDdzRoom = t;
		t.bottom = 20;
		t.height = 57;
		t.horizontalCenter = 0;
		t.width = 160;
		t.skinName = CreateGameConfSkin$Skin70;
		return t;
	};
	_proto.grpCreateTexasRoom_i = function () {
		var t = new eui.Group();
		this.grpCreateTexasRoom = t;
		t.height = 480;
		t.horizontalCenter = 0;
		t.top = 80;
		t.visible = false;
		t.width = 600;
		t.elementsContent = [this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this.btnCreateTexasRoom_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 10;
		t.percentWidth = 100;
		t.elementsContent = [this._Image5_i(),this._Label4_i(),this.texasBottomOpt1_i(),this.texasBottomOpt2_i(),this.texasBottomOpt3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "盲注:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasBottomOpt1_i = function () {
		var t = new eui.RadioButton();
		this.texasBottomOpt1 = t;
		t.groupName = "texasBottomOpts";
		t.label = "1/2";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasBottomOpt2_i = function () {
		var t = new eui.RadioButton();
		this.texasBottomOpt2 = t;
		t.groupName = "texasBottomOpts";
		t.label = "2/4";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasBottomOpt3_i = function () {
		var t = new eui.RadioButton();
		this.texasBottomOpt3 = t;
		t.groupName = "texasBottomOpts";
		t.label = "3/6";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 70;
		t.percentWidth = 100;
		t.elementsContent = [this._Image6_i(),this._Label5_i(),this.texasRoundsOpt1_i(),this.texasRoundsOpt2_i(),this.texasRoundsOpt3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "局数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasRoundsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.texasRoundsOpt1 = t;
		t.groupName = "texasRoundsOpts";
		t.label = "3";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasRoundsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.texasRoundsOpt2 = t;
		t.groupName = "texasRoundsOpts";
		t.label = "4";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasRoundsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.texasRoundsOpt3 = t;
		t.groupName = "texasRoundsOpts";
		t.label = "5";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 130;
		t.percentWidth = 100;
		t.elementsContent = [this._Image7_i(),this._Label6_i(),this.texasMinChipsOpt1_i(),this.texasMinChipsOpt2_i(),this.texasMinChipsOpt3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "最小带入:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasMinChipsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.texasMinChipsOpt1 = t;
		t.groupName = "texasMinChipsOpts";
		t.label = "5";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasMinChipsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.texasMinChipsOpt2 = t;
		t.groupName = "texasMinChipsOpts";
		t.label = "10";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasMinChipsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.texasMinChipsOpt3 = t;
		t.groupName = "texasMinChipsOpts";
		t.label = "20";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 190;
		t.percentWidth = 100;
		t.elementsContent = [this._Image8_i(),this._Label7_i(),this.texasMaxChipsOpt1_i(),this.texasMaxChipsOpt2_i(),this.texasMaxChipsOpt3_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "最大带入:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasMaxChipsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.texasMaxChipsOpt1 = t;
		t.groupName = "texasMaxChipsOpts";
		t.label = "10";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasMaxChipsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.texasMaxChipsOpt2 = t;
		t.groupName = "texasMaxChipsOpts";
		t.label = "20";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasMaxChipsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.texasMaxChipsOpt3 = t;
		t.groupName = "texasMaxChipsOpts";
		t.label = "40";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 260;
		t.percentWidth = 100;
		t.elementsContent = [this._Image9_i(),this._Label8_i(),this.hsTexasCapacity_i(),this.labTexasCapacity_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "人数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.hsTexasCapacity_i = function () {
		var t = new eui.HSlider();
		this.hsTexasCapacity = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.left = 305;
		t.skinName = "CHSliderSkin";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto.labTexasCapacity_i = function () {
		var t = new eui.Label();
		this.labTexasCapacity = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.right = 30;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto.btnCreateTexasRoom_i = function () {
		var t = new EButton();
		this.btnCreateTexasRoom = t;
		t.bottom = 20;
		t.height = 57;
		t.horizontalCenter = 0;
		t.width = 160;
		t.skinName = CreateGameConfSkin$Skin71;
		return t;
	};
	_proto.grpCreateQznnRoom_i = function () {
		var t = new eui.Group();
		this.grpCreateQznnRoom = t;
		t.height = 480;
		t.horizontalCenter = 0;
		t.top = 80;
		t.visible = false;
		t.width = 600;
		t.elementsContent = [this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i(),this.btnCreateQznnRoom_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 10;
		t.percentWidth = 100;
		t.elementsContent = [this._Image10_i(),this._Label9_i(),this.qznnBottomOpt1_i(),this.qznnBottomOpt2_i(),this.qznnBottomOpt3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "底分:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnBottomOpt1_i = function () {
		var t = new eui.RadioButton();
		this.qznnBottomOpt1 = t;
		t.groupName = "qznnBottomOpts";
		t.label = "1";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnBottomOpt2_i = function () {
		var t = new eui.RadioButton();
		this.qznnBottomOpt2 = t;
		t.groupName = "qznnBottomOpts";
		t.label = "2";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnBottomOpt3_i = function () {
		var t = new eui.RadioButton();
		this.qznnBottomOpt3 = t;
		t.groupName = "qznnBottomOpts";
		t.label = "3";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 80;
		t.percentWidth = 100;
		t.elementsContent = [this._Image11_i(),this._Label10_i(),this.qznnRoundsOpt1_i(),this.qznnRoundsOpt2_i(),this.qznnRoundsOpt3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "局数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnRoundsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.qznnRoundsOpt1 = t;
		t.groupName = "qznnRoundsOpts";
		t.label = "3";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnRoundsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.qznnRoundsOpt2 = t;
		t.groupName = "qznnRoundsOpts";
		t.label = "4";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnRoundsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.qznnRoundsOpt3 = t;
		t.groupName = "qznnRoundsOpts";
		t.label = "15";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 150;
		t.percentWidth = 100;
		t.elementsContent = [this._Image12_i(),this._Label11_i(),this.qznnMinChipsOpt1_i(),this.qznnMinChipsOpt2_i(),this.qznnMinChipsOpt3_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "最小带入:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnMinChipsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.qznnMinChipsOpt1 = t;
		t.groupName = "qznnMinChipsOpts";
		t.label = "5";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnMinChipsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.qznnMinChipsOpt2 = t;
		t.groupName = "qznnMinChipsOpts";
		t.label = "10";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnMinChipsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.qznnMinChipsOpt3 = t;
		t.groupName = "qznnMinChipsOpts";
		t.label = "20";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 220;
		t.percentWidth = 100;
		t.elementsContent = [this._Image13_i(),this._Label12_i(),this.hsQznnCapacity_i(),this.labQznnCapacity_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "人数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.hsQznnCapacity_i = function () {
		var t = new eui.HSlider();
		this.hsQznnCapacity = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.left = 305;
		t.skinName = "CHSliderSkin";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto.labQznnCapacity_i = function () {
		var t = new eui.Label();
		this.labQznnCapacity = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.right = 30;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto.btnCreateQznnRoom_i = function () {
		var t = new EButton();
		this.btnCreateQznnRoom = t;
		t.bottom = 20;
		t.height = 57;
		t.horizontalCenter = 0;
		t.width = 160;
		t.skinName = CreateGameConfSkin$Skin72;
		return t;
	};
	_proto.grpCreateZjhRoom_i = function () {
		var t = new eui.Group();
		this.grpCreateZjhRoom = t;
		t.height = 480;
		t.horizontalCenter = 0;
		t.top = 80;
		t.visible = false;
		t.width = 600;
		t.elementsContent = [this._Group14_i(),this._Group15_i(),this._Group16_i(),this._Group17_i(),this._Group18_i(),this.btnCreateZjhRoom_i()];
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 10;
		t.percentWidth = 100;
		t.elementsContent = [this._Image14_i(),this._Label13_i(),this.zjhBottomOpt1_i(),this.zjhBottomOpt2_i(),this.zjhBottomOpt3_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "底分:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhBottomOpt1_i = function () {
		var t = new eui.RadioButton();
		this.zjhBottomOpt1 = t;
		t.groupName = "zjhBottomOpts";
		t.label = "1";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhBottomOpt2_i = function () {
		var t = new eui.RadioButton();
		this.zjhBottomOpt2 = t;
		t.groupName = "zjhBottomOpts";
		t.label = "2";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhBottomOpt3_i = function () {
		var t = new eui.RadioButton();
		this.zjhBottomOpt3 = t;
		t.groupName = "zjhBottomOpts";
		t.label = "3";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 70;
		t.percentWidth = 100;
		t.elementsContent = [this._Image15_i(),this._Label14_i(),this.zjhRoundsOpt1_i(),this.zjhRoundsOpt2_i(),this.zjhRoundsOpt3_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "局数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhRoundsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.zjhRoundsOpt1 = t;
		t.groupName = "zjhRoundsOpts";
		t.label = "3";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhRoundsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.zjhRoundsOpt2 = t;
		t.groupName = "zjhRoundsOpts";
		t.label = "4";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhRoundsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.zjhRoundsOpt3 = t;
		t.groupName = "zjhRoundsOpts";
		t.label = "5";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 130;
		t.percentWidth = 100;
		t.elementsContent = [this._Image16_i(),this._Label15_i(),this.zjhMinChipsOpt1_i(),this.zjhMinChipsOpt2_i(),this.zjhMinChipsOpt3_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "最小带入:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhMinChipsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.zjhMinChipsOpt1 = t;
		t.groupName = "zjhMinChipsOpts";
		t.label = "5";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhMinChipsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.zjhMinChipsOpt2 = t;
		t.groupName = "zjhMinChipsOpts";
		t.label = "10";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhMinChipsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.zjhMinChipsOpt3 = t;
		t.groupName = "zjhMinChipsOpts";
		t.label = "20";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 190;
		t.percentWidth = 100;
		t.elementsContent = [this._Image17_i(),this._Label16_i(),this.zjhMaxChipsOpt1_i(),this.zjhMaxChipsOpt2_i(),this.zjhMaxChipsOpt3_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "最大带入:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhMaxChipsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.zjhMaxChipsOpt1 = t;
		t.groupName = "zjhMaxChipsOpts";
		t.label = "10";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhMaxChipsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.zjhMaxChipsOpt2 = t;
		t.groupName = "zjhMaxChipsOpts";
		t.label = "20";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhMaxChipsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.zjhMaxChipsOpt3 = t;
		t.groupName = "zjhMaxChipsOpts";
		t.label = "40";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 260;
		t.percentWidth = 100;
		t.elementsContent = [this._Image18_i(),this._Label17_i(),this.hsZjhCapacity_i(),this.labZjhCapacity_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "人数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.hsZjhCapacity_i = function () {
		var t = new eui.HSlider();
		this.hsZjhCapacity = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.left = 305;
		t.skinName = "CHSliderSkin";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto.labZjhCapacity_i = function () {
		var t = new eui.Label();
		this.labZjhCapacity = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.right = 30;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto.btnCreateZjhRoom_i = function () {
		var t = new EButton();
		this.btnCreateZjhRoom = t;
		t.bottom = 20;
		t.height = 57;
		t.horizontalCenter = 0;
		t.width = 160;
		t.skinName = CreateGameConfSkin$Skin73;
		return t;
	};
	return CreateGameConfSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/GameConfs.exml'] = window.GameConfsSkin = (function (_super) {
	__extends(GameConfsSkin, _super);
	var GameConfsSkin$Skin74 = 	(function (_super) {
		__extends(GameConfsSkin$Skin74, _super);
		function GameConfsSkin$Skin74() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameConfsSkin$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return GameConfsSkin$Skin74;
	})(eui.Skin);

	var GameConfsSkin$Skin75 = 	(function (_super) {
		__extends(GameConfsSkin$Skin75, _super);
		function GameConfsSkin$Skin75() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameConfsSkin$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return GameConfsSkin$Skin75;
	})(eui.Skin);

	var GameConfsSkin$Skin76 = 	(function (_super) {
		__extends(GameConfsSkin$Skin76, _super);
		function GameConfsSkin$Skin76() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameConfsSkin$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "设置新玩法";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return GameConfsSkin$Skin76;
	})(eui.Skin);

	var GameConfsSkin$Skin77 = 	(function (_super) {
		__extends(GameConfsSkin$Skin77, _super);
		function GameConfsSkin$Skin77() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameConfsSkin$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return GameConfsSkin$Skin77;
	})(eui.Skin);

	function GameConfsSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","btnShowCGCWin","btnRefresh","labListNoData","listGameConfs","grpGameConfs"];
		
		this.height = 500;
		this.width = 650;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpGameConfs_i()];
	}
	var _proto = GameConfsSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_m_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_games_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 10;
		t.width = 55;
		t.skinName = GameConfsSkin$Skin74;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 10;
		t.width = 55;
		t.skinName = GameConfsSkin$Skin75;
		return t;
	};
	_proto.grpGameConfs_i = function () {
		var t = new eui.Group();
		this.grpGameConfs = t;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.labListNoData_i(),this._Scroller1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.btnShowCGCWin_i(),this._Label1_i(),this.btnRefresh_i()];
		return t;
	};
	_proto.btnShowCGCWin_i = function () {
		var t = new EButton();
		this.btnShowCGCWin = t;
		t.height = 55;
		t.left = 10;
		t.verticalCenter = 0;
		t.width = 160;
		t.skinName = GameConfsSkin$Skin76;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "设置的玩法";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 200;
		t.wordWrap = true;
		return t;
	};
	_proto.btnRefresh_i = function () {
		var t = new EButton();
		this.btnRefresh = t;
		t.height = 50;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 50;
		t.skinName = GameConfsSkin$Skin77;
		return t;
	};
	_proto.labListNoData_i = function () {
		var t = new eui.Label();
		this.labListNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 260;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listGameConfs_i();
		return t;
	};
	_proto.listGameConfs_i = function () {
		var t = new eui.List();
		this.listGameConfs = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemGameConfSkin;
		t.verticalCenter = -12.5;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "提示：每个俱乐部支持3种玩法";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 320;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	return GameConfsSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/ItemAppliedMember.exml'] = window.ItemAppliedMemberSkin = (function (_super) {
	__extends(ItemAppliedMemberSkin, _super);
	var ItemAppliedMemberSkin$Skin78 = 	(function (_super) {
		__extends(ItemAppliedMemberSkin$Skin78, _super);
		function ItemAppliedMemberSkin$Skin78() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemAppliedMemberSkin$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "批准";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemAppliedMemberSkin$Skin78;
	})(eui.Skin);

	var ItemAppliedMemberSkin$Skin79 = 	(function (_super) {
		__extends(ItemAppliedMemberSkin$Skin79, _super);
		function ItemAppliedMemberSkin$Skin79() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemAppliedMemberSkin$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_purple_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x860DC6;
			t.text = "拒绝";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemAppliedMemberSkin$Skin79;
	})(eui.Skin);

	function ItemAppliedMemberSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","imgMemberAvatar","labMemberName","labMemberId","labCreateTime","btnApprove","btnDeny"];
		
		this.height = 70;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this._Group1_i(),this.labMemberName_i(),this._Label1_i(),this.labMemberId_i(),this._Image2_i(),this.labCreateTime_i(),this.btnApprove_i(),this.btnDeny_i(),this._Image3_i()];
	}
	var _proto = ItemAppliedMemberSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 70;
		t.elementsContent = [this.imgMemberAvatar_i(),this._Image1_i()];
		return t;
	};
	_proto.imgMemberAvatar_i = function () {
		var t = new eui.Image();
		this.imgMemberAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.horizontalCenter = 0;
		t.source = "avatar_man_png";
		t.verticalCenter = 0;
		t.width = 54;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "avatar_bg_png";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.labMemberName_i = function () {
		var t = new eui.Label();
		this.labMemberName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 75;
		t.size = 22;
		t.text = "用户的名字";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 200;
		t.size = 20;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 31;
		return t;
	};
	_proto.labMemberId_i = function () {
		var t = new eui.Label();
		this.labMemberId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 240;
		t.size = 20;
		t.text = "2123121";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 94;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 75;
		t.source = "club_expiration_png";
		t.top = 40;
		t.width = 25;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 110;
		t.size = 20;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 205;
		return t;
	};
	_proto.btnApprove_i = function () {
		var t = new EButton();
		this.btnApprove = t;
		t.height = 60;
		t.right = 160;
		t.verticalCenter = 0;
		t.width = 130;
		t.skinName = ItemAppliedMemberSkin$Skin78;
		return t;
	};
	_proto.btnDeny_i = function () {
		var t = new EButton();
		this.btnDeny = t;
		t.height = 60;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 130;
		t.skinName = ItemAppliedMemberSkin$Skin79;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemAppliedMemberSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/ItemClub.exml'] = window.ItemClubSkin = (function (_super) {
	__extends(ItemClubSkin, _super);
	var ItemClubSkin$Skin80 = 	(function (_super) {
		__extends(ItemClubSkin$Skin80, _super);
		function ItemClubSkin$Skin80() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemClubSkin$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "加入";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemClubSkin$Skin80;
	})(eui.Skin);

	function ItemClubSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","labClubName","labClubId","labGameType","labClubMembers","labState","labCreateTime","btnAction"];
		
		this.height = 70;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this._Image1_i(),this.labClubName_i(),this._Label1_i(),this.labClubId_i(),this._Label2_i(),this.labGameType_i(),this._Image2_i(),this.labClubMembers_i(),this.labState_i(),this._Image3_i(),this.labCreateTime_i(),this.btnAction_i(),this._Image4_i()];
	}
	var _proto = ItemClubSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.left = 0;
		t.source = "club_icon_png";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.labClubName_i = function () {
		var t = new eui.Label();
		this.labClubName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 75;
		t.size = 22;
		t.text = "俱乐部的名字";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 220;
		t.size = 20;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 31;
		return t;
	};
	_proto.labClubId_i = function () {
		var t = new eui.Label();
		this.labClubId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 250;
		t.size = 20;
		t.text = "2123121";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 94;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 340;
		t.size = 20;
		t.text = "游戏:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 50;
		return t;
	};
	_proto.labGameType_i = function () {
		var t = new eui.Label();
		this.labGameType = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 390;
		t.size = 20;
		t.text = "德州扑克";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 80;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 80;
		t.source = "club_members_png";
		t.top = 40;
		t.width = 25;
		return t;
	};
	_proto.labClubMembers_i = function () {
		var t = new eui.Label();
		this.labClubMembers = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 110;
		t.size = 18;
		t.text = "231/500";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 88;
		return t;
	};
	_proto.labState_i = function () {
		var t = new eui.Label();
		this.labState = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 190;
		t.size = 18;
		t.text = "ACTIVE";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 90;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 270;
		t.source = "club_expiration_png";
		t.top = 40;
		t.width = 25;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 300;
		t.size = 18;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 183;
		return t;
	};
	_proto.btnAction_i = function () {
		var t = new EButton();
		this.btnAction = t;
		t.height = 60;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 130;
		t.skinName = ItemClubSkin$Skin80;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemClubSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/ItemClubMember.exml'] = window.ItemClubMemberSkin = (function (_super) {
	__extends(ItemClubMemberSkin, _super);
	var ItemClubMemberSkin$Skin81 = 	(function (_super) {
		__extends(ItemClubMemberSkin$Skin81, _super);
		function ItemClubMemberSkin$Skin81() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemClubMemberSkin$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "管理";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemClubMemberSkin$Skin81;
	})(eui.Skin);

	function ItemClubMemberSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","imgMemberAvatar","labMemberName","labMemberId","labMemberLv","labMemberScore","labCreateTime","btnAction"];
		
		this.height = 70;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this._Group1_i(),this.labMemberName_i(),this._Label1_i(),this.labMemberId_i(),this._Label2_i(),this.labMemberLv_i(),this._Label3_i(),this.labMemberScore_i(),this._Image2_i(),this.labCreateTime_i(),this.btnAction_i(),this._Image3_i()];
	}
	var _proto = ItemClubMemberSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 70;
		t.elementsContent = [this.imgMemberAvatar_i(),this._Image1_i()];
		return t;
	};
	_proto.imgMemberAvatar_i = function () {
		var t = new eui.Image();
		this.imgMemberAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.horizontalCenter = 0;
		t.source = "avatar_man_png";
		t.verticalCenter = 0;
		t.width = 54;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "avatar_bg_png";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.labMemberName_i = function () {
		var t = new eui.Label();
		this.labMemberName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 75;
		t.size = 22;
		t.text = "用户的名字";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 200;
		t.size = 20;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 31;
		return t;
	};
	_proto.labMemberId_i = function () {
		var t = new eui.Label();
		this.labMemberId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 240;
		t.size = 20;
		t.text = "2123121";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 94;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 340;
		t.size = 20;
		t.text = "LV:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 35;
		return t;
	};
	_proto.labMemberLv_i = function () {
		var t = new eui.Label();
		this.labMemberLv = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 380;
		t.size = 20;
		t.text = "3";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 80;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 77;
		t.size = 20;
		t.text = "积分:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 53;
		return t;
	};
	_proto.labMemberScore_i = function () {
		var t = new eui.Label();
		this.labMemberScore = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 130;
		t.size = 20;
		t.text = "2345343";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 230;
		t.source = "club_expiration_png";
		t.top = 40;
		t.width = 25;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 260;
		t.size = 20;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 205;
		return t;
	};
	_proto.btnAction_i = function () {
		var t = new EButton();
		this.btnAction = t;
		t.height = 55;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 130;
		t.skinName = ItemClubMemberSkin$Skin81;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemClubMemberSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/ItemClubOrder.exml'] = window.ItemClubOrderSkin = (function (_super) {
	__extends(ItemClubOrderSkin, _super);
	function ItemClubOrderSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","lab1stTips","labAmount","labUpdatedAmt","labCreateTime"];
		
		this.height = 35;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this.lab1stTips_i(),this.labAmount_i(),this._Label1_i(),this.labUpdatedAmt_i(),this._Image1_i(),this.labCreateTime_i(),this._Image2_i()];
	}
	var _proto = ItemClubOrderSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto.lab1stTips_i = function () {
		var t = new eui.Label();
		this.lab1stTips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "数额:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 61;
		return t;
	};
	_proto.labAmount_i = function () {
		var t = new eui.Label();
		this.labAmount = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 70;
		t.size = 22;
		t.text = "534567";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 170;
		t.size = 20;
		t.text = "更新值:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 67;
		return t;
	};
	_proto.labUpdatedAmt_i = function () {
		var t = new eui.Label();
		this.labUpdatedAmt = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 245;
		t.size = 22;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 360;
		t.source = "club_expiration_png";
		t.top = 5;
		t.width = 25;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 393;
		t.size = 20;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 222;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemClubOrderSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/ItemGameConf.exml'] = window.ItemGameConfSkin = (function (_super) {
	__extends(ItemGameConfSkin, _super);
	var ItemGameConfSkin$Skin82 = 	(function (_super) {
		__extends(ItemGameConfSkin$Skin82, _super);
		function ItemGameConfSkin$Skin82() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemGameConfSkin$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "删除";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemGameConfSkin$Skin82;
	})(eui.Skin);

	function ItemGameConfSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","lab1stTips","labBottomScore","labMinChips","labMaxChips","labCapacity","labRounds","btnAction"];
		
		this.height = 70;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this._Image1_i(),this.lab1stTips_i(),this.labBottomScore_i(),this._Label1_i(),this.labMinChips_i(),this._Label2_i(),this.labMaxChips_i(),this._Image2_i(),this.labCapacity_i(),this.labRounds_i(),this._Label3_i(),this.btnAction_i(),this._Image3_i()];
	}
	var _proto = ItemGameConfSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.left = 0;
		t.source = "game_conf_icon_png";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.lab1stTips_i = function () {
		var t = new eui.Label();
		this.lab1stTips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 70;
		t.size = 20;
		t.text = "底分/小盲注";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 110;
		return t;
	};
	_proto.labBottomScore_i = function () {
		var t = new eui.Label();
		this.labBottomScore = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 180;
		t.size = 22;
		t.text = "5";
		t.textAlign = "center";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 50;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 140;
		t.size = 20;
		t.text = "最小带入:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 90;
		return t;
	};
	_proto.labMinChips_i = function () {
		var t = new eui.Label();
		this.labMinChips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 240;
		t.size = 20;
		t.text = "2000";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 60;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 300;
		t.size = 20;
		t.text = "最大带入:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 90;
		return t;
	};
	_proto.labMaxChips_i = function () {
		var t = new eui.Label();
		this.labMaxChips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 400;
		t.size = 20;
		t.text = "3000";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 80;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 70;
		t.source = "club_members_png";
		t.top = 40;
		t.width = 25;
		return t;
	};
	_proto.labCapacity_i = function () {
		var t = new eui.Label();
		this.labCapacity = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 100;
		t.size = 18;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 40;
		return t;
	};
	_proto.labRounds_i = function () {
		var t = new eui.Label();
		this.labRounds = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 300;
		t.size = 18;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 40;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 250;
		t.size = 18;
		t.text = "局数:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 50;
		return t;
	};
	_proto.btnAction_i = function () {
		var t = new EButton();
		this.btnAction = t;
		t.height = 60;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 130;
		t.skinName = ItemGameConfSkin$Skin82;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemGameConfSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/ItemOnlineRoom.exml'] = window.ItemOnlineRoomSkin = (function (_super) {
	__extends(ItemOnlineRoomSkin, _super);
	var ItemOnlineRoomSkin$Skin83 = 	(function (_super) {
		__extends(ItemOnlineRoomSkin$Skin83, _super);
		function ItemOnlineRoomSkin$Skin83() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemOnlineRoomSkin$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "加入";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemOnlineRoomSkin$Skin83;
	})(eui.Skin);

	var ItemOnlineRoomSkin$Skin84 = 	(function (_super) {
		__extends(ItemOnlineRoomSkin$Skin84, _super);
		function ItemOnlineRoomSkin$Skin84() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemOnlineRoomSkin$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_purple_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x860DC6;
			t.text = "解散";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemOnlineRoomSkin$Skin84;
	})(eui.Skin);

	function ItemOnlineRoomSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","labRoomId","labBottomTips","labBottomScore","labMinChips","labRounds","labRoomMembers","labState","labCreateTime","btnJoinRoom","btnCloseRoom"];
		
		this.height = 100;
		this.width = 800;
		this.elementsContent = [this.img_dialog_outer_i(),this._Image1_i(),this._Label1_i(),this.labRoomId_i(),this.labBottomTips_i(),this.labBottomScore_i(),this._Label2_i(),this.labMinChips_i(),this._Label3_i(),this.labRounds_i(),this._Image2_i(),this.labRoomMembers_i(),this.labState_i(),this._Image3_i(),this.labCreateTime_i(),this.btnJoinRoom_i(),this.btnCloseRoom_i(),this._Image4_i()];
	}
	var _proto = ItemOnlineRoomSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.left = 0;
		t.source = "room_icon_png";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 70;
		t.size = 20;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 31;
		return t;
	};
	_proto.labRoomId_i = function () {
		var t = new eui.Label();
		this.labRoomId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 100;
		t.size = 20;
		t.text = "2123121";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 94;
		return t;
	};
	_proto.labBottomTips_i = function () {
		var t = new eui.Label();
		this.labBottomTips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 185;
		t.size = 20;
		t.text = "底分:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 50;
		return t;
	};
	_proto.labBottomScore_i = function () {
		var t = new eui.Label();
		this.labBottomScore = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 235;
		t.size = 20;
		t.text = "5";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 40;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 265;
		t.size = 20;
		t.text = "最低带入:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 90;
		return t;
	};
	_proto.labMinChips_i = function () {
		var t = new eui.Label();
		this.labMinChips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 350;
		t.size = 20;
		t.text = "50000";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 65;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 420;
		t.size = 20;
		t.text = "局数:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 50;
		return t;
	};
	_proto.labRounds_i = function () {
		var t = new eui.Label();
		this.labRounds = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 470;
		t.size = 20;
		t.text = "30";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 40;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 20;
		t.height = 25;
		t.left = 70;
		t.source = "club_members_png";
		t.width = 25;
		return t;
	};
	_proto.labRoomMembers_i = function () {
		var t = new eui.Label();
		this.labRoomMembers = t;
		t.anchorOffsetX = 0;
		t.bottom = 15;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 100;
		t.size = 18;
		t.text = "10/10";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.verticalAlign = "middle";
		t.width = 60;
		return t;
	};
	_proto.labState_i = function () {
		var t = new eui.Label();
		this.labState = t;
		t.anchorOffsetX = 0;
		t.bottom = 15;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 160;
		t.size = 18;
		t.text = "ACTIVE";
		t.textAlign = "center";
		t.textColor = 0xedbe31;
		t.verticalAlign = "middle";
		t.width = 90;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 20;
		t.height = 25;
		t.left = 260;
		t.source = "club_expiration_png";
		t.width = 25;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.bottom = 15;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 300;
		t.size = 18;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.verticalAlign = "middle";
		t.width = 183;
		return t;
	};
	_proto.btnJoinRoom_i = function () {
		var t = new EButton();
		this.btnJoinRoom = t;
		t.height = 60;
		t.right = 170;
		t.verticalCenter = 0;
		t.width = 125;
		t.skinName = ItemOnlineRoomSkin$Skin83;
		return t;
	};
	_proto.btnCloseRoom_i = function () {
		var t = new EButton();
		this.btnCloseRoom = t;
		t.height = 60;
		t.right = 20;
		t.verticalCenter = 0;
		t.width = 125;
		t.skinName = ItemOnlineRoomSkin$Skin84;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemOnlineRoomSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Club/MemberMgmt.exml'] = window.MemberMgmtSkin = (function (_super) {
	__extends(MemberMgmtSkin, _super);
	var MemberMgmtSkin$Skin85 = 	(function (_super) {
		__extends(MemberMgmtSkin$Skin85, _super);
		function MemberMgmtSkin$Skin85() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemberMgmtSkin$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return MemberMgmtSkin$Skin85;
	})(eui.Skin);

	var MemberMgmtSkin$Skin86 = 	(function (_super) {
		__extends(MemberMgmtSkin$Skin86, _super);
		function MemberMgmtSkin$Skin86() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemberMgmtSkin$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return MemberMgmtSkin$Skin86;
	})(eui.Skin);

	var MemberMgmtSkin$Skin87 = 	(function (_super) {
		__extends(MemberMgmtSkin$Skin87, _super);
		function MemberMgmtSkin$Skin87() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemberMgmtSkin$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "清零";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return MemberMgmtSkin$Skin87;
	})(eui.Skin);

	var MemberMgmtSkin$Skin88 = 	(function (_super) {
		__extends(MemberMgmtSkin$Skin88, _super);
		function MemberMgmtSkin$Skin88() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemberMgmtSkin$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "上分";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return MemberMgmtSkin$Skin88;
	})(eui.Skin);

	var MemberMgmtSkin$Skin89 = 	(function (_super) {
		__extends(MemberMgmtSkin$Skin89, _super);
		function MemberMgmtSkin$Skin89() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemberMgmtSkin$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "下分";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return MemberMgmtSkin$Skin89;
	})(eui.Skin);

	var MemberMgmtSkin$Skin90 = 	(function (_super) {
		__extends(MemberMgmtSkin$Skin90, _super);
		function MemberMgmtSkin$Skin90() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemberMgmtSkin$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_fold_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xCC1E0E;
			t.text = "删除";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return MemberMgmtSkin$Skin90;
	})(eui.Skin);

	var MemberMgmtSkin$Skin91 = 	(function (_super) {
		__extends(MemberMgmtSkin$Skin91, _super);
		function MemberMgmtSkin$Skin91() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemberMgmtSkin$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "设为管理员";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return MemberMgmtSkin$Skin91;
	})(eui.Skin);

	var MemberMgmtSkin$Skin92 = 	(function (_super) {
		__extends(MemberMgmtSkin$Skin92, _super);
		function MemberMgmtSkin$Skin92() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemberMgmtSkin$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return MemberMgmtSkin$Skin92;
	})(eui.Skin);

	var MemberMgmtSkin$Skin93 = 	(function (_super) {
		__extends(MemberMgmtSkin$Skin93, _super);
		function MemberMgmtSkin$Skin93() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemberMgmtSkin$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_purple_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x860DC6;
			t.text = "记录";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return MemberMgmtSkin$Skin93;
	})(eui.Skin);

	function MemberMgmtSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgMemberAvatar","labMemberName","labMemberId","labMemberLv","labMemberScore","btnResetScore","labCreateTime","labIsAdmin","txtPlusScore","txtMinusScore","btnPlusScore","btnMinusScore","btnDeleteMember","btnAddAdmin","btnRefresh","btnClubOrders","grpMemberMgmt"];
		
		this.height = 500;
		this.width = 650;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpMemberMgmt_i()];
	}
	var _proto = MemberMgmtSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_m_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_members_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 10;
		t.width = 55;
		t.skinName = MemberMgmtSkin$Skin85;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 10;
		t.width = 55;
		t.skinName = MemberMgmtSkin$Skin86;
		return t;
	};
	_proto.grpMemberMgmt_i = function () {
		var t = new eui.Group();
		this.grpMemberMgmt = t;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.percentWidth = 90;
		t.elementsContent = [this._Image2_i(),this._Group2_i(),this._Group3_i(),this._Label5_i(),this._Label6_i(),this.txtPlusScore_i(),this.txtMinusScore_i(),this.btnPlusScore_i(),this.btnMinusScore_i(),this.btnDeleteMember_i(),this.btnAddAdmin_i(),this.btnRefresh_i(),this.btnClubOrders_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i(),this.labMemberName_i(),this._Label1_i(),this.labMemberId_i(),this._Label2_i(),this.labMemberLv_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 70;
		t.elementsContent = [this.imgMemberAvatar_i(),this._Image3_i()];
		return t;
	};
	_proto.imgMemberAvatar_i = function () {
		var t = new eui.Image();
		this.imgMemberAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.horizontalCenter = 0;
		t.source = "avatar_man_png";
		t.verticalCenter = 0;
		t.width = 54;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "avatar_bg_png";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.labMemberName_i = function () {
		var t = new eui.Label();
		this.labMemberName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 22;
		t.text = "用户的名字";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 240;
		t.size = 20;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 31;
		return t;
	};
	_proto.labMemberId_i = function () {
		var t = new eui.Label();
		this.labMemberId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 280;
		t.size = 20;
		t.text = "2123121";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 94;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 380;
		t.size = 20;
		t.text = "LV:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 35;
		return t;
	};
	_proto.labMemberLv_i = function () {
		var t = new eui.Label();
		this.labMemberLv = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 421;
		t.size = 20;
		t.text = "3";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Label3_i(),this.labMemberScore_i(),this.btnResetScore_i(),this.labCreateTime_i(),this.labIsAdmin_i(),this._Image4_i(),this._Label4_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 24;
		t.text = "当前积分:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 100;
		t.verticalAlign = "middle";
		t.width = 118;
		return t;
	};
	_proto.labMemberScore_i = function () {
		var t = new eui.Label();
		this.labMemberScore = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 190;
		t.size = 24;
		t.text = "2345343";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 100;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.btnResetScore_i = function () {
		var t = new EButton();
		this.btnResetScore = t;
		t.height = 60;
		t.left = 300;
		t.top = 85;
		t.width = 130;
		t.skinName = MemberMgmtSkin$Skin87;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 260;
		t.size = 20;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 205;
		return t;
	};
	_proto.labIsAdmin_i = function () {
		var t = new eui.Label();
		this.labIsAdmin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 160;
		t.size = 20;
		t.text = "是";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 47;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 230;
		t.source = "club_expiration_png";
		t.top = 40;
		t.width = 25;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 20;
		t.text = "管理员:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 80;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 150;
		t.size = 30;
		t.text = "+";
		t.textAlign = "center";
		t.textColor = 0xf9f5e8;
		t.top = 160;
		t.verticalAlign = "middle";
		t.width = 20;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 150;
		t.size = 30;
		t.text = "-";
		t.textAlign = "center";
		t.textColor = 0xF9F5E8;
		t.top = 230;
		t.verticalAlign = "middle";
		t.width = 20;
		return t;
	};
	_proto.txtPlusScore_i = function () {
		var t = new eui.TextInput();
		this.txtPlusScore = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.left = 174;
		t.prompt = "分数";
		t.top = 160;
		t.width = 120;
		return t;
	};
	_proto.txtMinusScore_i = function () {
		var t = new eui.TextInput();
		this.txtMinusScore = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.prompt = "分数";
		t.right = 291;
		t.top = 230;
		t.width = 120;
		return t;
	};
	_proto.btnPlusScore_i = function () {
		var t = new EButton();
		this.btnPlusScore = t;
		t.height = 60;
		t.left = 300;
		t.top = 150;
		t.width = 130;
		t.skinName = MemberMgmtSkin$Skin88;
		return t;
	};
	_proto.btnMinusScore_i = function () {
		var t = new EButton();
		this.btnMinusScore = t;
		t.height = 60;
		t.left = 300;
		t.top = 220;
		t.width = 130;
		t.skinName = MemberMgmtSkin$Skin89;
		return t;
	};
	_proto.btnDeleteMember_i = function () {
		var t = new EButton();
		this.btnDeleteMember = t;
		t.bottom = 30;
		t.height = 70;
		t.horizontalCenter = -120;
		t.width = 155;
		t.skinName = MemberMgmtSkin$Skin90;
		return t;
	};
	_proto.btnAddAdmin_i = function () {
		var t = new EButton();
		this.btnAddAdmin = t;
		t.bottom = 30;
		t.height = 70;
		t.horizontalCenter = 120;
		t.width = 155;
		t.skinName = MemberMgmtSkin$Skin91;
		return t;
	};
	_proto.btnRefresh_i = function () {
		var t = new EButton();
		this.btnRefresh = t;
		t.height = 50;
		t.left = 25;
		t.top = 95;
		t.width = 50;
		t.skinName = MemberMgmtSkin$Skin92;
		return t;
	};
	_proto.btnClubOrders_i = function () {
		var t = new EButton();
		this.btnClubOrders = t;
		t.height = 60;
		t.top = 85;
		t.width = 130;
		t.x = 437;
		t.skinName = MemberMgmtSkin$Skin93;
		return t;
	};
	return MemberMgmtSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/ChipsNum.exml'] = window.ChipsNumSkin = (function (_super) {
	__extends(ChipsNumSkin, _super);
	function ChipsNumSkin() {
		_super.call(this);
		this.skinParts = ["labChipNums"];
		
		this.elementsContent = [this._Image1_i(),this.labChipNums_i()];
	}
	var _proto = ChipsNumSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "texas_chips_png";
		t.verticalCenter = 0;
		t.width = 91;
		return t;
	};
	_proto.labChipNums_i = function () {
		var t = new eui.Label();
		this.labChipNums = t;
		t.fontFamily = "微软雅黑";
		t.height = 25;
		t.right = 0;
		t.size = 16;
		t.text = "88888";
		t.textAlign = "center";
		t.textColor = 0xe0dcd7;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	return ChipsNumSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/CToggleSwitchSkin.exml'] = window.CToggleSwitchSkin = (function (_super) {
	__extends(CToggleSwitchSkin, _super);
	function CToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","switch_off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","switch_off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","switch_off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
				])
			,
			new eui.State ("downAndSelected",
				[
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = CToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "switch_on_png";
		return t;
	};
	return CToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/Dialog.exml'] = window.DialogSkin = (function (_super) {
	__extends(DialogSkin, _super);
	var DialogSkin$Skin94 = 	(function (_super) {
		__extends(DialogSkin$Skin94, _super);
		function DialogSkin$Skin94() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DialogSkin$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return DialogSkin$Skin94;
	})(eui.Skin);

	var DialogSkin$Skin95 = 	(function (_super) {
		__extends(DialogSkin$Skin95, _super);
		function DialogSkin$Skin95() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DialogSkin$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yes_png";
			t.percentWidth = 100;
			return t;
		};
		return DialogSkin$Skin95;
	})(eui.Skin);

	function DialogSkin() {
		_super.call(this);
		this.skinParts = ["imgBG","imgWinTitle","btnOk","lbMsg","btnCancel"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.imgBG_i(),this._Group1_i()];
	}
	var _proto = DialogSkin.prototype;

	_proto.imgBG_i = function () {
		var t = new eui.Image();
		this.imgBG = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 460;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 580;
		t.elementsContent = [this._Image1_i(),this.imgWinTitle_i(),this.btnOk_i(),this.lbMsg_i(),this.btnCancel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 460;
		t.scale9Grid = new egret.Rectangle(96,71,578,433);
		t.source = "win_info_png";
		t.width = 580;
		t.x = -1;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "txt_title_tips_png";
		t.top = -30;
		t.width = 380;
		return t;
	};
	_proto.btnOk_i = function () {
		var t = new EButton();
		this.btnOk = t;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.right = -5;
		t.top = -5;
		t.width = 60;
		t.skinName = DialogSkin$Skin94;
		return t;
	};
	_proto.lbMsg_i = function () {
		var t = new eui.Label();
		this.lbMsg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 300;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.multiline = true;
		t.text = "提示信息";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -10;
		t.width = 534;
		t.wordWrap = true;
		return t;
	};
	_proto.btnCancel_i = function () {
		var t = new EButton();
		this.btnCancel = t;
		t.bottom = 30;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 145;
		t.skinName = DialogSkin$Skin95;
		return t;
	};
	return DialogSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/DropDownItemSkin.exml'] = window.DropDownItemSkin = (function (_super) {
	__extends(DropDownItemSkin, _super);
	function DropDownItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 45;
		this.width = 200;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Image1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.itemValue"],[0],this._Label1,"text");
	}
	var _proto = DropDownItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.1;
		t.height = 45;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 18;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 98;
		return t;
	};
	return DropDownItemSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/EIcon.exml'] = window.EIconSkin = (function (_super) {
	__extends(EIconSkin, _super);
	function EIconSkin() {
		_super.call(this);
		this.skinParts = ["ImgBtn","lbBottomScore","lbMinChips","lbBottomScoreVal","lbMinChipsVal"];
		
		this.height = 330;
		this.width = 250;
		this.elementsContent = [this.ImgBtn_i(),this.lbBottomScore_i(),this.lbMinChips_i(),this.lbBottomScoreVal_i(),this.lbMinChipsVal_i()];
	}
	var _proto = EIconSkin.prototype;

	_proto.ImgBtn_i = function () {
		var t = new eui.Image();
		this.ImgBtn = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "coin_mode_bas_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.lbBottomScore_i = function () {
		var t = new eui.Label();
		this.lbBottomScore = t;
		t.anchorOffsetX = 0;
		t.bottom = 55;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.horizontalCenter = -40;
		t.size = 22;
		t.stroke = 1;
		t.strokeColor = 0xBCB7B7;
		t.text = "底分：";
		t.textAlign = "right";
		t.width = 120;
		return t;
	};
	_proto.lbMinChips_i = function () {
		var t = new eui.Label();
		this.lbMinChips = t;
		t.bottom = 25;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.horizontalCenter = -40;
		t.size = 22;
		t.stroke = 1;
		t.strokeColor = 0xBCB7B7;
		t.text = "入场限制：";
		t.textAlign = "right";
		t.width = 120;
		return t;
	};
	_proto.lbBottomScoreVal_i = function () {
		var t = new eui.Label();
		this.lbBottomScoreVal = t;
		t.anchorOffsetX = 0;
		t.bottom = 55;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.horizontalCenter = 60;
		t.size = 22;
		t.stroke = 1;
		t.strokeColor = 0xBCB7B7;
		t.text = "5";
		t.textAlign = "left";
		t.width = 75;
		return t;
	};
	_proto.lbMinChipsVal_i = function () {
		var t = new eui.Label();
		this.lbMinChipsVal = t;
		t.anchorOffsetX = 0;
		t.bottom = 25;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.horizontalCenter = 60;
		t.size = 22;
		t.stroke = 1;
		t.strokeColor = 0xBCB7B7;
		t.text = "10000";
		t.textAlign = "left";
		t.width = 75;
		return t;
	};
	return EIconSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/ETimer.exml'] = window.ETimerSkin = (function (_super) {
	__extends(ETimerSkin, _super);
	function ETimerSkin() {
		_super.call(this);
		this.skinParts = ["lbTime"];
		
		this.elementsContent = [this._Image1_i(),this.lbTime_i()];
	}
	var _proto = ETimerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.source = "timer_png";
		t.width = 90;
		return t;
	};
	_proto.lbTime_i = function () {
		var t = new eui.Label();
		this.lbTime = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.stroke = 3;
		t.strokeColor = 0x47a40e;
		t.text = "20";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	return ETimerSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/EToast.exml'] = window.EToastSkin = (function (_super) {
	__extends(EToastSkin, _super);
	function EToastSkin() {
		_super.call(this);
		this.skinParts = ["imgBG","imgMsgBg","labMsg"];
		
		this.height = 640;
		this.width = 960;
		this.elementsContent = [this.imgBG_i(),this._Group1_i()];
	}
	var _proto = EToastSkin.prototype;

	_proto.imgBG_i = function () {
		var t = new eui.Image();
		this.imgBG = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 960;
		t.elementsContent = [this.imgMsgBg_i(),this.labMsg_i()];
		return t;
	};
	_proto.imgMsgBg_i = function () {
		var t = new eui.Image();
		this.imgMsgBg = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "modal_png";
		t.width = 960;
		t.y = 0;
		return t;
	};
	_proto.labMsg_i = function () {
		var t = new eui.Label();
		this.labMsg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 100;
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x91381d;
		t.text = "信息";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 600;
		return t;
	};
	return EToastSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/Loading.exml'] = window.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["loading","img_load"];
		
		this.height = 720;
		this.width = 1280;
		this.loading_i();
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.img_load_i()];
	}
	var _proto = LoadingSkin.prototype;

	_proto.loading_i = function () {
		var t = new egret.tween.TweenGroup();
		this.loading = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "load_0_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto.img_load_i = function () {
		var t = new eui.Image();
		this.img_load = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "load_1_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/LoadingProgress.exml'] = window.LoadingProgress = (function (_super) {
	__extends(LoadingProgress, _super);
	function LoadingProgress() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.height = 22;
		this.width = 778;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = LoadingProgress.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(12,0,43,22);
		t.source = "loadingBarBg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(15,0,51,22);
		t.source = "loadingBarCur_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = -1;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 4;
		t.size = 22;
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -0.5;
		return t;
	};
	return LoadingProgress;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/ParticleAnimation.exml'] = window.ParticleAnimationSkin = (function (_super) {
	__extends(ParticleAnimationSkin, _super);
	function ParticleAnimationSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this._Image3_i();
		
		this.states = [
			new eui.State ("0",
				[
					new eui.AddItems("_Image3","",1,"")
				])
			,
			new eui.State ("1",
				[
					new eui.AddItems("_Image2","",1,"")
				])
			,
			new eui.State ("2",
				[
					new eui.AddItems("_Image1","",0,"")
				])
		];
	}
	var _proto = ParticleAnimationSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "icon_g_point2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "icon_g_point1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.source = "icon_g_point0_png";
		t.verticalCenter = 0;
		return t;
	};
	return ParticleAnimationSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Control/Tips.exml'] = window.TipsSkin = (function (_super) {
	__extends(TipsSkin, _super);
	var TipsSkin$Skin96 = 	(function (_super) {
		__extends(TipsSkin$Skin96, _super);
		function TipsSkin$Skin96() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TipsSkin$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return TipsSkin$Skin96;
	})(eui.Skin);

	var TipsSkin$Skin97 = 	(function (_super) {
		__extends(TipsSkin$Skin97, _super);
		function TipsSkin$Skin97() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TipsSkin$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "微软雅黑";
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "确定";
			t.textColor = 0xFFFFFF;
			t.verticalCenter = 0;
			return t;
		};
		return TipsSkin$Skin97;
	})(eui.Skin);

	var TipsSkin$Skin98 = 	(function (_super) {
		__extends(TipsSkin$Skin98, _super);
		function TipsSkin$Skin98() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TipsSkin$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_fold_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "微软雅黑";
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "取消";
			t.textColor = 0xFFFFFF;
			t.verticalCenter = 0;
			return t;
		};
		return TipsSkin$Skin98;
	})(eui.Skin);

	function TipsSkin() {
		_super.call(this);
		this.skinParts = ["imgBG","imgWinTitle","labContent","btnClose","btnOk","btnCancel","grpTipsWin"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.imgBG_i(),this.grpTipsWin_i()];
	}
	var _proto = TipsSkin.prototype;

	_proto.imgBG_i = function () {
		var t = new eui.Image();
		this.imgBG = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto.grpTipsWin_i = function () {
		var t = new eui.Group();
		this.grpTipsWin = t;
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = -20;
		t.width = 550;
		t.elementsContent = [this._Image1_i(),this.imgWinTitle_i(),this.labContent_i(),this.btnClose_i(),this.btnOk_i(),this.btnCancel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "txt_title_tips_png";
		t.top = -30;
		t.width = 380;
		return t;
	};
	_proto.labContent_i = function () {
		var t = new eui.Label();
		this.labContent = t;
		t.fontFamily = "微软雅黑";
		t.height = 160;
		t.horizontalCenter = 0;
		t.multiline = true;
		t.size = 26;
		t.text = "标签";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 60;
		t.verticalAlign = "middle";
		t.width = 400;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.right = 10;
		t.top = 10;
		t.width = 60;
		t.skinName = TipsSkin$Skin96;
		return t;
	};
	_proto.btnOk_i = function () {
		var t = new EButton();
		this.btnOk = t;
		t.bottom = 50;
		t.height = 60;
		t.horizontalCenter = -100;
		t.width = 145;
		t.skinName = TipsSkin$Skin97;
		return t;
	};
	_proto.btnCancel_i = function () {
		var t = new EButton();
		this.btnCancel = t;
		t.bottom = 50;
		t.height = 60;
		t.horizontalCenter = 100;
		t.width = 145;
		t.skinName = TipsSkin$Skin98;
		return t;
	};
	return TipsSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Ddz/DdzSeatUIL.exml'] = window.DdzSeatUILSkin = (function (_super) {
	__extends(DdzSeatUILSkin, _super);
	function DdzSeatUILSkin() {
		_super.call(this);
		this.skinParts = ["imgAvatar","imgWinner","imgPokersNumBG","labName","labScore","imgLandlord","labPokersNum","grpTimer","imgUserReady"];
		
		this.height = 210;
		this.width = 180;
		this.elementsContent = [this._Image1_i(),this.imgAvatar_i(),this.imgWinner_i(),this.imgPokersNumBG_i(),this.labName_i(),this.labScore_i(),this.imgLandlord_i(),this.labPokersNum_i(),this.grpTimer_i(),this.imgUserReady_i()];
	}
	var _proto = DdzSeatUILSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 170;
		t.left = 0;
		t.source = "avatar_v_s_png";
		t.width = 115;
		return t;
	};
	_proto.imgAvatar_i = function () {
		var t = new eui.Image();
		this.imgAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = -33;
		t.source = "avatar_man_png";
		t.verticalCenter = -17;
		t.width = 90;
		return t;
	};
	_proto.imgWinner_i = function () {
		var t = new eui.Image();
		this.imgWinner = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 173;
		t.left = 0;
		t.source = "vprofile_winner_png";
		t.width = 115;
		return t;
	};
	_proto.imgPokersNumBG_i = function () {
		var t = new eui.Image();
		this.imgPokersNumBG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 50;
		t.left = 125;
		t.source = "poker_0_png";
		t.width = 40;
		return t;
	};
	_proto.labName_i = function () {
		var t = new eui.Label();
		this.labName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.left = 0;
		t.size = 18;
		t.text = "会飞的猪头肉";
		t.textAlign = "center";
		t.top = 145;
		t.verticalAlign = "middle";
		t.width = 114;
		return t;
	};
	_proto.labScore_i = function () {
		var t = new eui.Label();
		this.labScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 10;
		t.height = 22;
		t.left = 6;
		t.size = 18;
		t.text = "10000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 104;
		return t;
	};
	_proto.imgLandlord_i = function () {
		var t = new eui.Image();
		this.imgLandlord = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "landlord_png";
		t.top = 0;
		t.width = 40;
		t.x = 38;
		return t;
	};
	_proto.labPokersNum_i = function () {
		var t = new eui.Label();
		this.labPokersNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 10;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.right = 15;
		t.size = 20;
		t.stroke = 3;
		t.strokeColor = 0x2b94de;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 40;
		return t;
	};
	_proto.grpTimer_i = function () {
		var t = new eui.Group();
		this.grpTimer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.right = 0;
		t.top = 0;
		t.width = 75;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.right = 0;
		t.source = "timer_png";
		t.top = 0;
		t.width = 75;
		return t;
	};
	_proto.imgUserReady_i = function () {
		var t = new eui.Image();
		this.imgUserReady = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.left = 43;
		t.source = "user_ready_png";
		t.top = 100;
		t.width = 30;
		return t;
	};
	return DdzSeatUILSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Ddz/DdzSeatUIR.exml'] = window.DdzSeatUIRSkin = (function (_super) {
	__extends(DdzSeatUIRSkin, _super);
	function DdzSeatUIRSkin() {
		_super.call(this);
		this.skinParts = ["imgAvatar","imgWinner","imgPokersNumBG","labName","labScore","imgLandlord","labPokersNum","grpTimer","imgUserReady"];
		
		this.height = 210;
		this.width = 185;
		this.elementsContent = [this._Image1_i(),this.imgAvatar_i(),this.imgWinner_i(),this.imgPokersNumBG_i(),this.labName_i(),this.labScore_i(),this.imgLandlord_i(),this.labPokersNum_i(),this.grpTimer_i(),this.imgUserReady_i()];
	}
	var _proto = DdzSeatUIRSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 170;
		t.right = 0;
		t.source = "avatar_v_s_png";
		t.width = 115;
		return t;
	};
	_proto.imgAvatar_i = function () {
		var t = new eui.Image();
		this.imgAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 34.5;
		t.source = "avatar_man_png";
		t.verticalCenter = -17;
		t.width = 90;
		return t;
	};
	_proto.imgWinner_i = function () {
		var t = new eui.Image();
		this.imgWinner = t;
		t.bottom = 0;
		t.height = 173;
		t.right = 0;
		t.scaleX = 1;
		t.source = "vprofile_winner_png";
		t.width = 115;
		return t;
	};
	_proto.imgPokersNumBG_i = function () {
		var t = new eui.Image();
		this.imgPokersNumBG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 50;
		t.left = 15;
		t.source = "poker_0_png";
		t.width = 40;
		return t;
	};
	_proto.labName_i = function () {
		var t = new eui.Label();
		this.labName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.right = 0;
		t.size = 18;
		t.text = "会飞的猪头肉";
		t.textAlign = "center";
		t.top = 145;
		t.verticalAlign = "middle";
		t.width = 114;
		return t;
	};
	_proto.labScore_i = function () {
		var t = new eui.Label();
		this.labScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 10;
		t.height = 22;
		t.right = 0;
		t.size = 18;
		t.text = "10000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 104;
		return t;
	};
	_proto.imgLandlord_i = function () {
		var t = new eui.Image();
		this.imgLandlord = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.right = 38;
		t.source = "landlord_png";
		t.top = 0;
		t.width = 40;
		return t;
	};
	_proto.labPokersNum_i = function () {
		var t = new eui.Label();
		this.labPokersNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 10;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.left = 15;
		t.size = 20;
		t.stroke = 3;
		t.strokeColor = 0x2b94de;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 40;
		return t;
	};
	_proto.grpTimer_i = function () {
		var t = new eui.Group();
		this.grpTimer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 0;
		t.top = 0;
		t.width = 75;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 0;
		t.source = "timer_png";
		t.top = 0;
		t.width = 75;
		return t;
	};
	_proto.imgUserReady_i = function () {
		var t = new eui.Image();
		this.imgUserReady = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.right = 43;
		t.source = "user_ready_png";
		t.top = 100;
		t.width = 30;
		return t;
	};
	return DdzSeatUIRSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Ddz/DdzTable.exml'] = window.DdzTableSkin = (function (_super) {
	__extends(DdzTableSkin, _super);
	var DdzTableSkin$Skin99 = 	(function (_super) {
		__extends(DdzTableSkin$Skin99, _super);
		function DdzTableSkin$Skin99() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return DdzTableSkin$Skin99;
	})(eui.Skin);

	var DdzTableSkin$Skin100 = 	(function (_super) {
		__extends(DdzTableSkin$Skin100, _super);
		function DdzTableSkin$Skin100() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_scores_png";
			t.percentWidth = 100;
			return t;
		};
		return DdzTableSkin$Skin100;
	})(eui.Skin);

	var DdzTableSkin$Skin101 = 	(function (_super) {
		__extends(DdzTableSkin$Skin101, _super);
		function DdzTableSkin$Skin101() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin101.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_host_png";
			t.percentWidth = 100;
			return t;
		};
		return DdzTableSkin$Skin101;
	})(eui.Skin);

	var DdzTableSkin$Skin102 = 	(function (_super) {
		__extends(DdzTableSkin$Skin102, _super);
		function DdzTableSkin$Skin102() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_setting_png";
			t.percentWidth = 100;
			return t;
		};
		return DdzTableSkin$Skin102;
	})(eui.Skin);

	var DdzTableSkin$Skin103 = 	(function (_super) {
		__extends(DdzTableSkin$Skin103, _super);
		function DdzTableSkin$Skin103() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_pass_n_png";
			t.percentWidth = 100;
			return t;
		};
		return DdzTableSkin$Skin103;
	})(eui.Skin);

	var DdzTableSkin$Skin104 = 	(function (_super) {
		__extends(DdzTableSkin$Skin104, _super);
		function DdzTableSkin$Skin104() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_prompt_n_png";
			t.percentWidth = 100;
			return t;
		};
		return DdzTableSkin$Skin104;
	})(eui.Skin);

	var DdzTableSkin$Skin105 = 	(function (_super) {
		__extends(DdzTableSkin$Skin105, _super);
		function DdzTableSkin$Skin105() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_go_n_png";
			t.percentWidth = 100;
			return t;
		};
		return DdzTableSkin$Skin105;
	})(eui.Skin);

	var DdzTableSkin$Skin106 = 	(function (_super) {
		__extends(DdzTableSkin$Skin106, _super);
		function DdzTableSkin$Skin106() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_callscore_3_png";
			t.percentWidth = 100;
			return t;
		};
		return DdzTableSkin$Skin106;
	})(eui.Skin);

	var DdzTableSkin$Skin107 = 	(function (_super) {
		__extends(DdzTableSkin$Skin107, _super);
		function DdzTableSkin$Skin107() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin107.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_callscore_0_png";
			t.percentWidth = 100;
			return t;
		};
		return DdzTableSkin$Skin107;
	})(eui.Skin);

	var DdzTableSkin$Skin108 = 	(function (_super) {
		__extends(DdzTableSkin$Skin108, _super);
		function DdzTableSkin$Skin108() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin108.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_addscore_x2_png";
			t.percentWidth = 100;
			return t;
		};
		return DdzTableSkin$Skin108;
	})(eui.Skin);

	var DdzTableSkin$Skin109 = 	(function (_super) {
		__extends(DdzTableSkin$Skin109, _super);
		function DdzTableSkin$Skin109() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin109.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_addscore_x4_png";
			t.percentWidth = 100;
			return t;
		};
		return DdzTableSkin$Skin109;
	})(eui.Skin);

	var DdzTableSkin$Skin110 = 	(function (_super) {
		__extends(DdzTableSkin$Skin110, _super);
		function DdzTableSkin$Skin110() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin110.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_addscore_no_png";
			t.percentWidth = 100;
			return t;
		};
		return DdzTableSkin$Skin110;
	})(eui.Skin);

	var DdzTableSkin$Skin111 = 	(function (_super) {
		__extends(DdzTableSkin$Skin111, _super);
		function DdzTableSkin$Skin111() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin111.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "准备";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return DdzTableSkin$Skin111;
	})(eui.Skin);

	var DdzTableSkin$Skin112 = 	(function (_super) {
		__extends(DdzTableSkin$Skin112, _super);
		function DdzTableSkin$Skin112() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin112.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "开始匹配";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return DdzTableSkin$Skin112;
	})(eui.Skin);

	var DdzTableSkin$Skin113 = 	(function (_super) {
		__extends(DdzTableSkin$Skin113, _super);
		function DdzTableSkin$Skin113() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin113.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "邀请好友";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return DdzTableSkin$Skin113;
	})(eui.Skin);

	var DdzTableSkin$Skin114 = 	(function (_super) {
		__extends(DdzTableSkin$Skin114, _super);
		function DdzTableSkin$Skin114() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzTableSkin$Skin114.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = false;
			t.fontFamily = "微软雅黑";
			t.horizontalCenter = 0;
			t.size = 26;
			t.text = "取消托管";
			t.textColor = 0xFFFFFF;
			t.verticalCenter = 0;
			return t;
		};
		return DdzTableSkin$Skin114;
	})(eui.Skin);

	function DdzTableSkin() {
		_super.call(this);
		this.skinParts = ["btnGoBack","btnScores","labEntityId","grpEntityId","grpLeftTop","btnEnableHost","btnSetting","grpSetting","labRoundNums","grpBottomPokers","labBottomScore","labLandlordScore","grpBottomInfo","btnPass","btnPrompt","btnGo","grpPokerControls","btnCallScore3","btnCallScore0","grpCallLandlord","btnAddScoreX2","btnAddScoreX4","btnAddScoreNo","grpAddScore","grpPokersInHand","grpProfile_Seat1","grpProfile_Seat2","grpProfile_Seat3","grpPokers_Seat1","grpPokers_Seat2","grpPokers_Seat3","grpSDPokers_Seat3","grpSDPokers_Seat2","grpLastAction_Seat3","grpLastAction_Seat2","grpLastAction_Seat1","grpTimer","btnReady","btnGoMatching","btnInvite","grpReadyAndInvite","grpImgRes","grpAnim","imgHostBg","btnDisableHost","grpHost","grpDeck","grpSystemMessage","grpCenter"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.grpLeftTop_i(),this.grpSetting_i(),this.labRoundNums_i(),this.grpBottomPokers_i(),this.grpBottomInfo_i(),this.grpPokerControls_i(),this.grpCallLandlord_i(),this.grpAddScore_i(),this.grpPokersInHand_i(),this.grpProfile_Seat1_i(),this.grpProfile_Seat2_i(),this.grpProfile_Seat3_i(),this.grpPokers_Seat1_i(),this.grpPokers_Seat2_i(),this.grpPokers_Seat3_i(),this.grpSDPokers_Seat3_i(),this.grpSDPokers_Seat2_i(),this.grpLastAction_Seat3_i(),this.grpLastAction_Seat2_i(),this.grpLastAction_Seat1_i(),this.grpTimer_i(),this.grpReadyAndInvite_i(),this.grpImgRes_i(),this.grpAnim_i(),this.grpHost_i(),this.grpDeck_i(),this.grpSystemMessage_i(),this.grpCenter_i()];
	}
	var _proto = DdzTableSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(199,119,544,335);
		t.source = "ddztable_png";
		t.top = 0;
		return t;
	};
	_proto.grpLeftTop_i = function () {
		var t = new eui.Group();
		this.grpLeftTop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.top = 10;
		t.width = 430.67;
		t.elementsContent = [this.btnGoBack_i(),this.btnScores_i(),this.grpEntityId_i()];
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 75;
		t.left = 0;
		t.top = 0;
		t.width = 75;
		t.skinName = DdzTableSkin$Skin99;
		return t;
	};
	_proto.btnScores_i = function () {
		var t = new EButton();
		this.btnScores = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 100;
		t.verticalCenter = 0;
		t.width = 75;
		t.skinName = DdzTableSkin$Skin100;
		return t;
	};
	_proto.grpEntityId_i = function () {
		var t = new eui.Group();
		this.grpEntityId = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 200;
		t.top = 0;
		t.width = 230;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.labEntityId_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 90;
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.width = 140;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 24;
		t.text = "房间号:";
		t.textAlign = "left";
		t.textColor = 0xcec7b3;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 90;
		return t;
	};
	_proto.labEntityId_i = function () {
		var t = new eui.Label();
		this.labEntityId = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 100;
		t.size = 26;
		t.stroke = 3;
		t.text = "803832";
		t.textAlign = "left";
		t.textColor = 0xf4ba0c;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto.grpSetting_i = function () {
		var t = new eui.Group();
		this.grpSetting = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.right = 10;
		t.top = 10;
		t.width = 201.33;
		t.elementsContent = [this.btnEnableHost_i(),this.btnSetting_i()];
		return t;
	};
	_proto.btnEnableHost_i = function () {
		var t = new EButton();
		this.btnEnableHost = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.verticalCenter = 0.5;
		t.width = 75;
		t.skinName = DdzTableSkin$Skin101;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new EButton();
		this.btnSetting = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 75;
		t.skinName = DdzTableSkin$Skin102;
		return t;
	};
	_proto.labRoundNums_i = function () {
		var t = new eui.Label();
		this.labRoundNums = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.stroke = 3;
		t.strokeColor = 0x9d071a;
		t.text = "局数:2/15";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 150;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grpBottomPokers_i = function () {
		var t = new eui.Group();
		this.grpBottomPokers = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.horizontalCenter = -2.5;
		t.top = 50;
		t.width = 160;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.left = 0;
		t.source = "poker_0_png";
		t.verticalCenter = 0;
		t.width = 40;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.source = "poker_0_png";
		t.verticalCenter = 0;
		t.width = 40;
		t.x = 60;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.source = "poker_0_png";
		t.verticalCenter = 0;
		t.width = 40;
		t.x = 115;
		return t;
	};
	_proto.grpBottomInfo_i = function () {
		var t = new eui.Group();
		this.grpBottomInfo = t;
		t.anchorOffsetX = 0;
		t.height = 26;
		t.horizontalCenter = 0;
		t.top = 120;
		t.width = 160;
		t.elementsContent = [this._Label2_i(),this.labBottomScore_i(),this._Label3_i(),this.labLandlordScore_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.left = 0;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x50554e;
		t.text = "底分:";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 45;
		return t;
	};
	_proto.labBottomScore_i = function () {
		var t = new eui.Label();
		this.labBottomScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.left = 45;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x50554e;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.left = 80;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x50554e;
		t.text = "总分:";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 45;
		return t;
	};
	_proto.labLandlordScore_i = function () {
		var t = new eui.Label();
		this.labLandlordScore = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.left = 130;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x50554e;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	_proto.grpPokerControls_i = function () {
		var t = new eui.Group();
		this.grpPokerControls = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 170;
		t.height = 85;
		t.horizontalCenter = 30;
		t.visible = false;
		t.width = 650;
		t.elementsContent = [this.btnPass_i(),this.btnPrompt_i(),this.btnGo_i()];
		return t;
	};
	_proto.btnPass_i = function () {
		var t = new EButton();
		this.btnPass = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 20;
		t.verticalCenter = 0;
		t.width = 160;
		t.skinName = DdzTableSkin$Skin103;
		return t;
	};
	_proto.btnPrompt_i = function () {
		var t = new EButton();
		this.btnPrompt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.verticalCenter = 1;
		t.width = 160;
		t.x = 231;
		t.skinName = DdzTableSkin$Skin104;
		return t;
	};
	_proto.btnGo_i = function () {
		var t = new EButton();
		this.btnGo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.verticalCenter = 0;
		t.width = 160;
		t.x = 441;
		t.skinName = DdzTableSkin$Skin105;
		return t;
	};
	_proto.grpCallLandlord_i = function () {
		var t = new eui.Group();
		this.grpCallLandlord = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 170;
		t.height = 86;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 500;
		t.elementsContent = [this.btnCallScore3_i(),this.btnCallScore0_i()];
		return t;
	};
	_proto.btnCallScore3_i = function () {
		var t = new EButton();
		this.btnCallScore3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 20;
		t.verticalCenter = 0;
		t.width = 160;
		t.skinName = DdzTableSkin$Skin106;
		return t;
	};
	_proto.btnCallScore0_i = function () {
		var t = new EButton();
		this.btnCallScore0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.right = 20;
		t.verticalCenter = 0;
		t.width = 160;
		t.skinName = DdzTableSkin$Skin107;
		return t;
	};
	_proto.grpAddScore_i = function () {
		var t = new eui.Group();
		this.grpAddScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 170;
		t.height = 83;
		t.horizontalCenter = 30;
		t.visible = false;
		t.width = 643;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.btnAddScoreX2_i(),this.btnAddScoreX4_i(),this.btnAddScoreNo_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.btnAddScoreX2_i = function () {
		var t = new EButton();
		this.btnAddScoreX2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 20;
		t.verticalCenter = 0;
		t.width = 160;
		t.skinName = DdzTableSkin$Skin108;
		return t;
	};
	_proto.btnAddScoreX4_i = function () {
		var t = new EButton();
		this.btnAddScoreX4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.verticalCenter = 0;
		t.width = 160;
		t.x = 235.5;
		t.skinName = DdzTableSkin$Skin109;
		return t;
	};
	_proto.btnAddScoreNo_i = function () {
		var t = new EButton();
		this.btnAddScoreNo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.right = 20;
		t.verticalCenter = 0;
		t.width = 160;
		t.skinName = DdzTableSkin$Skin110;
		return t;
	};
	_proto.grpPokersInHand_i = function () {
		var t = new eui.Group();
		this.grpPokersInHand = t;
		t.anchorOffsetX = 0;
		t.bottom = 10;
		t.height = 140;
		t.horizontalCenter = 0;
		t.width = 960;
		return t;
	};
	_proto.grpProfile_Seat1_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 130;
		t.height = 210;
		t.left = 15;
		t.touchThrough = true;
		t.width = 180;
		return t;
	};
	_proto.grpProfile_Seat2_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 210;
		t.right = 15;
		t.top = 85;
		t.width = 180;
		return t;
	};
	_proto.grpProfile_Seat3_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 210;
		t.left = 15;
		t.top = 85;
		t.width = 180;
		return t;
	};
	_proto.grpPokers_Seat1_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 170;
		t.height = 100;
		t.horizontalCenter = 12.5;
		t.touchThrough = true;
		t.width = 700;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.horizontalCenter = 0;
		t.source = "poker_1_png";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.grpPokers_Seat2_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.right = 165;
		t.top = 160;
		t.width = 600;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.right = 0;
		t.source = "poker_1_png";
		t.verticalCenter = 0;
		t.width = 44;
		return t;
	};
	_proto.grpPokers_Seat3_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.left = 165;
		t.top = 160;
		t.width = 600;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.left = 0;
		t.source = "poker_1_png";
		t.verticalCenter = 0;
		t.width = 44;
		return t;
	};
	_proto.grpSDPokers_Seat3_i = function () {
		var t = new eui.Group();
		this.grpSDPokers_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.left = 185;
		t.top = 110;
		t.touchThrough = true;
		t.width = 620;
		return t;
	};
	_proto.grpSDPokers_Seat2_i = function () {
		var t = new eui.Group();
		this.grpSDPokers_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.right = 185;
		t.top = 185;
		t.touchThrough = true;
		t.width = 620;
		return t;
	};
	_proto.grpLastAction_Seat3_i = function () {
		var t = new eui.Group();
		this.grpLastAction_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.left = 180;
		t.top = 190;
		t.width = 150;
		return t;
	};
	_proto.grpLastAction_Seat2_i = function () {
		var t = new eui.Group();
		this.grpLastAction_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.right = 180;
		t.top = 190;
		t.width = 150;
		return t;
	};
	_proto.grpLastAction_Seat1_i = function () {
		var t = new eui.Group();
		this.grpLastAction_Seat1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 170;
		t.height = 40;
		t.horizontalCenter = 0;
		t.top = 190;
		t.touchThrough = true;
		t.width = 150;
		return t;
	};
	_proto.grpTimer_i = function () {
		var t = new eui.Group();
		this.grpTimer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 400;
		return t;
	};
	_proto.grpReadyAndInvite_i = function () {
		var t = new eui.Group();
		this.grpReadyAndInvite = t;
		t.anchorOffsetY = 0;
		t.height = 111;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.width = 591;
		t.elementsContent = [this.btnReady_i(),this.btnGoMatching_i(),this.btnInvite_i()];
		return t;
	};
	_proto.btnReady_i = function () {
		var t = new EButton();
		this.btnReady = t;
		t.height = 65;
		t.width = 180;
		t.x = 5;
		t.y = 25;
		t.skinName = DdzTableSkin$Skin111;
		return t;
	};
	_proto.btnGoMatching_i = function () {
		var t = new EButton();
		this.btnGoMatching = t;
		t.height = 65;
		t.width = 180;
		t.x = 200;
		t.y = 25;
		t.skinName = DdzTableSkin$Skin112;
		return t;
	};
	_proto.btnInvite_i = function () {
		var t = new EButton();
		this.btnInvite = t;
		t.height = 65;
		t.width = 180;
		t.x = 400;
		t.y = 25;
		t.skinName = DdzTableSkin$Skin113;
		return t;
	};
	_proto.grpImgRes_i = function () {
		var t = new eui.Group();
		this.grpImgRes = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = -50;
		t.width = 400;
		return t;
	};
	_proto.grpAnim_i = function () {
		var t = new eui.Group();
		this.grpAnim = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = -50;
		t.width = 400;
		return t;
	};
	_proto.grpHost_i = function () {
		var t = new eui.Group();
		this.grpHost = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.right = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.imgHostBg_i(),this.btnDisableHost_i()];
		return t;
	};
	_proto.imgHostBg_i = function () {
		var t = new eui.Image();
		this.imgHostBg = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto.btnDisableHost_i = function () {
		var t = new EButton();
		this.btnDisableHost = t;
		t.bottom = 40;
		t.height = 65;
		t.horizontalCenter = 0;
		t.width = 165;
		t.skinName = DdzTableSkin$Skin114;
		return t;
	};
	_proto.grpDeck_i = function () {
		var t = new eui.Group();
		this.grpDeck = t;
		t.anchorOffsetX = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.top = 120;
		t.width = 80;
		return t;
	};
	_proto.grpSystemMessage_i = function () {
		var t = new eui.Group();
		this.grpSystemMessage = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = -100;
		t.width = 600;
		return t;
	};
	_proto.grpCenter_i = function () {
		var t = new eui.Group();
		this.grpCenter = t;
		t.height = 5;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = -100;
		t.width = 5;
		return t;
	};
	return DdzTableSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Email/Email.exml'] = window.EmailSkin = (function (_super) {
	__extends(EmailSkin, _super);
	var EmailSkin$Skin115 = 	(function (_super) {
		__extends(EmailSkin$Skin115, _super);
		function EmailSkin$Skin115() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = EmailSkin$Skin115.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return EmailSkin$Skin115;
	})(eui.Skin);

	var EmailSkin$Skin116 = 	(function (_super) {
		__extends(EmailSkin$Skin116, _super);
		function EmailSkin$Skin116() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = EmailSkin$Skin116.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return EmailSkin$Skin116;
	})(eui.Skin);

	var EmailSkin$Skin117 = 	(function (_super) {
		__extends(EmailSkin$Skin117, _super);
		function EmailSkin$Skin117() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = EmailSkin$Skin117.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "回复";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return EmailSkin$Skin117;
	})(eui.Skin);

	function EmailSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","labSender","btnReply","labTitle","labReceivedDate","labContent","grpEmail"];
		
		this.height = 500;
		this.width = 600;
		this.elementsContent = [this.imgWin_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpEmail_i()];
	}
	var _proto = EmailSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 10;
		t.top = 10;
		t.width = 55;
		t.skinName = EmailSkin$Skin115;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 10;
		t.top = 8;
		t.width = 55;
		t.skinName = EmailSkin$Skin116;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_email_png";
		t.top = 20;
		return t;
	};
	_proto.grpEmail_i = function () {
		var t = new eui.Group();
		this.grpEmail = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 380;
		t.horizontalCenter = 0;
		t.top = 80;
		t.width = 500;
		t.elementsContent = [this._Label1_i(),this._Group1_i(),this.btnReply_i(),this._Label2_i(),this._Group2_i(),this._Label3_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "来自:";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 15;
		t.verticalAlign = "middle";
		t.width = 80;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 90;
		t.top = 10;
		t.width = 250;
		t.elementsContent = [this._Image1_i(),this.labSender_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labSender_i = function () {
		var t = new eui.Label();
		this.labSender = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 90;
		t.horizontalCenter = 1.5;
		t.size = 20;
		t.text = "来自:";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 95;
		return t;
	};
	_proto.btnReply_i = function () {
		var t = new EButton();
		this.btnReply = t;
		t.height = 55;
		t.right = 30;
		t.top = 5;
		t.width = 130;
		t.skinName = EmailSkin$Skin117;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "标题:";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 65;
		t.verticalAlign = "middle";
		t.width = 80;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 90;
		t.top = 60;
		t.width = 350;
		t.elementsContent = [this._Image2_i(),this.labTitle_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labTitle_i = function () {
		var t = new eui.Label();
		this.labTitle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 90;
		t.horizontalCenter = 1.5;
		t.size = 20;
		t.text = "来自:";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 95;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "时间:";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 115;
		t.verticalAlign = "middle";
		t.width = 80;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 90;
		t.top = 110;
		t.width = 350;
		t.elementsContent = [this._Image3_i(),this.labReceivedDate_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labReceivedDate_i = function () {
		var t = new eui.Label();
		this.labReceivedDate = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 90;
		t.horizontalCenter = 1.5;
		t.size = 20;
		t.text = "来自:";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 95;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.horizontalCenter = 0;
		t.top = 160;
		t.width = 400;
		t.elementsContent = [this._Image4_i(),this.labContent_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(28,6,173,38);
		t.source = "trans_bg_png";
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto.labContent_i = function () {
		var t = new eui.Label();
		this.labContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 90;
		t.horizontalCenter = 1.5;
		t.multiline = true;
		t.size = 20;
		t.text = "来自:";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "top";
		t.verticalCenter = 0.5;
		t.percentWidth = 95;
		t.wordWrap = true;
		return t;
	};
	return EmailSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Email/Emails.exml'] = window.EmailsSkin = (function (_super) {
	__extends(EmailsSkin, _super);
	var EmailsSkin$Skin118 = 	(function (_super) {
		__extends(EmailsSkin$Skin118, _super);
		function EmailsSkin$Skin118() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = EmailsSkin$Skin118.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return EmailsSkin$Skin118;
	})(eui.Skin);

	var EmailsSkin$Skin119 = 	(function (_super) {
		__extends(EmailsSkin$Skin119, _super);
		function EmailsSkin$Skin119() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = EmailsSkin$Skin119.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return EmailsSkin$Skin119;
	})(eui.Skin);

	var EmailsSkin$Skin120 = 	(function (_super) {
		__extends(EmailsSkin$Skin120, _super);
		function EmailsSkin$Skin120() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = EmailsSkin$Skin120.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "发送邮件";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return EmailsSkin$Skin120;
	})(eui.Skin);

	var EmailsSkin$Skin121 = 	(function (_super) {
		__extends(EmailsSkin$Skin121, _super);
		function EmailsSkin$Skin121() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = EmailsSkin$Skin121.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return EmailsSkin$Skin121;
	})(eui.Skin);

	var EmailsSkin$Skin122 = 	(function (_super) {
		__extends(EmailsSkin$Skin122, _super);
		function EmailsSkin$Skin122() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = EmailsSkin$Skin122.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return EmailsSkin$Skin122;
	})(eui.Skin);

	var EmailsSkin$Skin123 = 	(function (_super) {
		__extends(EmailsSkin$Skin123, _super);
		function EmailsSkin$Skin123() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = EmailsSkin$Skin123.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return EmailsSkin$Skin123;
	})(eui.Skin);

	function EmailsSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","emailRadioBtn","grpTabBtns","btnSendEmailWin","grpTabMenu","vsEmails","grpEmail","btnRefresh1","lablistSystemEmailsNoData","listSystemEmails","grpSystemEmails","btnRefresh2","lablistUserEmailsNoData","listUserEmails","grpUserEmails","btnRefresh3","lablistSentEmailsNoData","listSentEmails","grpSentEmails"];
		
		this.height = 600;
		this.width = 900;
		this.elementsContent = [this.imgWin_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpTabMenu_i(),this.grpEmail_i(),this.grpSystemEmails_i(),this.grpUserEmails_i(),this.grpSentEmails_i()];
	}
	var _proto = EmailsSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(92,87,744,449);
		t.source = "win_b_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 20;
		t.width = 55;
		t.skinName = EmailsSkin$Skin118;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 20;
		t.width = 55;
		t.skinName = EmailsSkin$Skin119;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_email_png";
		t.top = 25;
		return t;
	};
	_proto.grpTabMenu_i = function () {
		var t = new eui.Group();
		this.grpTabMenu = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 20;
		t.top = 90;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this.grpTabBtns_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpTabBtns_i = function () {
		var t = new eui.Group();
		this.grpTabBtns = t;
		t.anchorOffsetY = 0;
		t.height = 360;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 200;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.emailRadioBtn_i(),this._RadioButton1_i(),this._RadioButton2_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.emailRadioBtn_i = function () {
		var t = new eui.RadioButton();
		this.emailRadioBtn = t;
		t.groupName = "tabEmailBtns";
		t.horizontalCenter = 0;
		t.label = "系统邮件";
		t.selected = true;
		t.skinName = "CRadioButtonSkin";
		t.value = "0";
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabEmailBtns";
		t.horizontalCenter = 0;
		t.label = "好友邮件";
		t.skinName = "CRadioButtonSkin";
		t.value = "1";
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabEmailBtns";
		t.horizontalCenter = 0;
		t.label = "我发送的";
		t.skinName = "CRadioButtonSkin";
		t.value = "2";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.horizontalCenter = 0;
		t.top = 360;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.btnSendEmailWin_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 5;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.btnSendEmailWin_i = function () {
		var t = new EButton();
		this.btnSendEmailWin = t;
		t.bottom = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.width = 175;
		t.skinName = EmailsSkin$Skin120;
		return t;
	};
	_proto.grpEmail_i = function () {
		var t = new eui.Group();
		this.grpEmail = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this.vsEmails_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.vsEmails_i = function () {
		var t = new eui.ViewStack();
		this.vsEmails = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpSystemEmails_i = function () {
		var t = new eui.Group();
		this.grpSystemEmails = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.width = 620;
		t.elementsContent = [this._Group3_i(),this.lablistSystemEmailsNoData_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 60;
		t.elementsContent = [this.btnRefresh1_i()];
		return t;
	};
	_proto.btnRefresh1_i = function () {
		var t = new EButton();
		this.btnRefresh1 = t;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = EmailsSkin$Skin121;
		return t;
	};
	_proto.lablistSystemEmailsNoData_i = function () {
		var t = new eui.Label();
		this.lablistSystemEmailsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 430;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listSystemEmails_i();
		return t;
	};
	_proto.listSystemEmails_i = function () {
		var t = new eui.List();
		this.listSystemEmails = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemEmailSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout3_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.grpUserEmails_i = function () {
		var t = new eui.Group();
		this.grpUserEmails = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Group5_i(),this.lablistUserEmailsNoData_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group4_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 60;
		t.elementsContent = [this.btnRefresh2_i()];
		return t;
	};
	_proto.btnRefresh2_i = function () {
		var t = new EButton();
		this.btnRefresh2 = t;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = EmailsSkin$Skin122;
		return t;
	};
	_proto.lablistUserEmailsNoData_i = function () {
		var t = new eui.Label();
		this.lablistUserEmailsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listUserEmails_i();
		return t;
	};
	_proto.listUserEmails_i = function () {
		var t = new eui.List();
		this.listUserEmails = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemEmailSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout4_i();
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.grpSentEmails_i = function () {
		var t = new eui.Group();
		this.grpSentEmails = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Group7_i(),this.lablistSentEmailsNoData_i(),this._Scroller3_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group6_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 60;
		t.elementsContent = [this.btnRefresh3_i()];
		return t;
	};
	_proto.btnRefresh3_i = function () {
		var t = new EButton();
		this.btnRefresh3 = t;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = EmailsSkin$Skin123;
		return t;
	};
	_proto.lablistSentEmailsNoData_i = function () {
		var t = new eui.Label();
		this.lablistSentEmailsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listSentEmails_i();
		return t;
	};
	_proto.listSentEmails_i = function () {
		var t = new eui.List();
		this.listSentEmails = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemEmailSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout5_i();
		t.dataProvider = this._ArrayCollection3_i();
		return t;
	};
	_proto._VerticalLayout5_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection3_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	return EmailsSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Email/ItemEmail.exml'] = window.ItemEmailSkin = (function (_super) {
	__extends(ItemEmailSkin, _super);
	var ItemEmailSkin$Skin124 = 	(function (_super) {
		__extends(ItemEmailSkin$Skin124, _super);
		function ItemEmailSkin$Skin124() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemEmailSkin$Skin124.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "查看";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemEmailSkin$Skin124;
	})(eui.Skin);

	var ItemEmailSkin$Skin125 = 	(function (_super) {
		__extends(ItemEmailSkin$Skin125, _super);
		function ItemEmailSkin$Skin125() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemEmailSkin$Skin125.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_purple_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x860DC6;
			t.text = "删除";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemEmailSkin$Skin125;
	})(eui.Skin);

	function ItemEmailSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","imgEmail","imgEmailNotRead","labTitle","labUserId","labCreateTime","btnView","btnDelete"];
		
		this.height = 70;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this._Group1_i(),this.labTitle_i(),this.labUserId_i(),this._Image1_i(),this.labCreateTime_i(),this.btnView_i(),this.btnDelete_i(),this._Image2_i()];
	}
	var _proto = ItemEmailSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 70;
		t.elementsContent = [this.imgEmail_i(),this.imgEmailNotRead_i()];
		return t;
	};
	_proto.imgEmail_i = function () {
		var t = new eui.Image();
		this.imgEmail = t;
		t.height = 70;
		t.source = "email_icon_png";
		t.width = 70;
		return t;
	};
	_proto.imgEmailNotRead_i = function () {
		var t = new eui.Image();
		this.imgEmailNotRead = t;
		t.height = 20;
		t.right = 5;
		t.source = "email_not_read_png";
		t.top = 10;
		t.width = 20;
		return t;
	};
	_proto.labTitle_i = function () {
		var t = new eui.Label();
		this.labTitle = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.size = 22;
		t.text = "邮件的标题";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 3;
		t.verticalAlign = "middle";
		t.width = 340;
		t.x = 70;
		return t;
	};
	_proto.labUserId_i = function () {
		var t = new eui.Label();
		this.labUserId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 70;
		t.size = 20;
		t.text = "用户具体名字";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 32;
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 200;
		t.source = "club_expiration_png";
		t.top = 38;
		t.width = 25;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 230;
		t.size = 20;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 32;
		t.verticalAlign = "middle";
		t.width = 205;
		return t;
	};
	_proto.btnView_i = function () {
		var t = new EButton();
		this.btnView = t;
		t.height = 55;
		t.right = 120;
		t.verticalCenter = 0;
		t.width = 100;
		t.skinName = ItemEmailSkin$Skin124;
		return t;
	};
	_proto.btnDelete_i = function () {
		var t = new EButton();
		this.btnDelete = t;
		t.height = 55;
		t.right = 5;
		t.verticalCenter = 0;
		t.width = 100;
		t.skinName = ItemEmailSkin$Skin125;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemEmailSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Email/SendEmail.exml'] = window.SendEmailSkin = (function (_super) {
	__extends(SendEmailSkin, _super);
	var SendEmailSkin$Skin126 = 	(function (_super) {
		__extends(SendEmailSkin$Skin126, _super);
		function SendEmailSkin$Skin126() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SendEmailSkin$Skin126.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return SendEmailSkin$Skin126;
	})(eui.Skin);

	var SendEmailSkin$Skin127 = 	(function (_super) {
		__extends(SendEmailSkin$Skin127, _super);
		function SendEmailSkin$Skin127() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SendEmailSkin$Skin127.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return SendEmailSkin$Skin127;
	})(eui.Skin);

	var SendEmailSkin$Skin128 = 	(function (_super) {
		__extends(SendEmailSkin$Skin128, _super);
		function SendEmailSkin$Skin128() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SendEmailSkin$Skin128.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "发送邮件";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return SendEmailSkin$Skin128;
	})(eui.Skin);

	function SendEmailSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","txtReceiver","txtTitle","txtContent","btnSendEmail","grpSendEmail"];
		
		this.height = 500;
		this.width = 600;
		this.elementsContent = [this.imgWin_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpSendEmail_i()];
	}
	var _proto = SendEmailSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 10;
		t.top = 10;
		t.width = 55;
		t.skinName = SendEmailSkin$Skin126;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 10;
		t.top = 8;
		t.width = 55;
		t.skinName = SendEmailSkin$Skin127;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_email_png";
		t.top = 20;
		return t;
	};
	_proto.grpSendEmail_i = function () {
		var t = new eui.Group();
		this.grpSendEmail = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.horizontalCenter = 0;
		t.top = 60;
		t.width = 500;
		t.elementsContent = [this._Image1_i(),this.txtReceiver_i(),this._Label1_i(),this.txtTitle_i(),this._Label2_i(),this._Group1_i(),this.btnSendEmail_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.txtReceiver_i = function () {
		var t = new eui.TextInput();
		this.txtReceiver = t;
		t.height = 45;
		t.horizontalCenter = 0.5;
		t.prompt = "收件人的用户ID";
		t.top = 10;
		t.width = 400;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "收件人的用户ID";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	_proto.txtTitle_i = function () {
		var t = new eui.TextInput();
		this.txtTitle = t;
		t.height = 45;
		t.horizontalCenter = 0.5;
		t.prompt = "标题";
		t.top = 90;
		t.width = 400;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "标题,不超过30个字符";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 135;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 145;
		t.horizontalCenter = 0;
		t.top = 175;
		t.width = 400;
		t.elementsContent = [this._Image2_i(),this.txtContent_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,8,8);
		t.source = "input_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.txtContent_i = function () {
		var t = new eui.EditableText();
		this.txtContent = t;
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.horizontalCenter = "0";
		t.multiline = true;
		t.prompt = "具体内容";
		t.size = 22;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		t.wordWrap = true;
		return t;
	};
	_proto.btnSendEmail_i = function () {
		var t = new EButton();
		this.btnSendEmail = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.top = 330;
		t.width = 145;
		t.skinName = SendEmailSkin$Skin128;
		return t;
	};
	return SendEmailSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Feedback/Feedback.exml'] = window.FeedbackSkin = (function (_super) {
	__extends(FeedbackSkin, _super);
	var FeedbackSkin$Skin129 = 	(function (_super) {
		__extends(FeedbackSkin$Skin129, _super);
		function FeedbackSkin$Skin129() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FeedbackSkin$Skin129.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return FeedbackSkin$Skin129;
	})(eui.Skin);

	var FeedbackSkin$Skin130 = 	(function (_super) {
		__extends(FeedbackSkin$Skin130, _super);
		function FeedbackSkin$Skin130() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FeedbackSkin$Skin130.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return FeedbackSkin$Skin130;
	})(eui.Skin);

	function FeedbackSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","labTitle","labCreatedDate","labContent","labResponseDate","labResponseContent","grpFeedback"];
		
		this.height = 500;
		this.width = 600;
		this.elementsContent = [this.imgWin_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this._Scroller1_i()];
	}
	var _proto = FeedbackSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 10;
		t.top = 10;
		t.width = 55;
		t.skinName = FeedbackSkin$Skin129;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 10;
		t.top = 8;
		t.width = 55;
		t.skinName = FeedbackSkin$Skin130;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_feedback_png";
		t.top = 20;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 400;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 60;
		t.width = 500;
		t.viewport = this.grpFeedback_i();
		return t;
	};
	_proto.grpFeedback_i = function () {
		var t = new eui.Group();
		this.grpFeedback = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.horizontalCenter = 0;
		t.top = 80;
		t.width = 500;
		t.elementsContent = [this._Label1_i(),this._Group1_i(),this._Label2_i(),this._Group2_i(),this._Group3_i(),this._Label3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "标题:";
		t.textAlign = "right";
		t.textColor = 0xcec7b3;
		t.top = 10;
		t.verticalAlign = "middle";
		t.width = 80;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 100;
		t.top = 5;
		t.width = 340;
		t.elementsContent = [this._Image1_i(),this.labTitle_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labTitle_i = function () {
		var t = new eui.Label();
		this.labTitle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 90;
		t.horizontalCenter = 1.5;
		t.size = 20;
		t.text = "来自:";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 95;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "时间:";
		t.textAlign = "right";
		t.textColor = 0xcec7b3;
		t.top = 60;
		t.verticalAlign = "middle";
		t.width = 80;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 100;
		t.top = 55;
		t.width = 340;
		t.elementsContent = [this._Image2_i(),this.labCreatedDate_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labCreatedDate_i = function () {
		var t = new eui.Label();
		this.labCreatedDate = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 90;
		t.horizontalCenter = 1.5;
		t.size = 20;
		t.text = "来自:";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 95;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.top = 110;
		t.width = 400;
		t.elementsContent = [this._Image3_i(),this.labContent_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(28,6,173,38);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labContent_i = function () {
		var t = new eui.Label();
		this.labContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 150;
		t.horizontalCenter = 1.5;
		t.multiline = true;
		t.size = 20;
		t.text = "来自:";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "top";
		t.verticalCenter = 0.5;
		t.percentWidth = 95;
		t.wordWrap = true;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 0;
		t.size = 20;
		t.text = "答复时间:";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 275;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 100;
		t.top = 270;
		t.width = 340;
		t.elementsContent = [this._Image4_i(),this.labResponseDate_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labResponseDate_i = function () {
		var t = new eui.Label();
		this.labResponseDate = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 90;
		t.horizontalCenter = 1.5;
		t.size = 20;
		t.text = "来自:";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 95;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.top = 330;
		t.width = 400;
		t.elementsContent = [this._Image5_i(),this.labResponseContent_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(28,6,173,38);
		t.source = "trans_bg_png";
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto.labResponseContent_i = function () {
		var t = new eui.Label();
		this.labResponseContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 150;
		t.horizontalCenter = 1.5;
		t.multiline = true;
		t.size = 20;
		t.text = "来自:";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "top";
		t.verticalCenter = 0.5;
		t.percentWidth = 95;
		t.wordWrap = true;
		return t;
	};
	return FeedbackSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Feedback/Feedbacks.exml'] = window.FeedbacksSkin = (function (_super) {
	__extends(FeedbacksSkin, _super);
	var FeedbacksSkin$Skin131 = 	(function (_super) {
		__extends(FeedbacksSkin$Skin131, _super);
		function FeedbacksSkin$Skin131() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FeedbacksSkin$Skin131.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return FeedbacksSkin$Skin131;
	})(eui.Skin);

	var FeedbacksSkin$Skin132 = 	(function (_super) {
		__extends(FeedbacksSkin$Skin132, _super);
		function FeedbacksSkin$Skin132() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FeedbacksSkin$Skin132.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return FeedbacksSkin$Skin132;
	})(eui.Skin);

	var FeedbacksSkin$Skin133 = 	(function (_super) {
		__extends(FeedbacksSkin$Skin133, _super);
		function FeedbacksSkin$Skin133() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FeedbacksSkin$Skin133.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "提交反馈";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return FeedbacksSkin$Skin133;
	})(eui.Skin);

	var FeedbacksSkin$Skin134 = 	(function (_super) {
		__extends(FeedbacksSkin$Skin134, _super);
		function FeedbacksSkin$Skin134() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FeedbacksSkin$Skin134.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return FeedbacksSkin$Skin134;
	})(eui.Skin);

	function FeedbacksSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","btnShowSFSWin","btnRefresh","labListNoData","listFeedbacks","grpFeedbacks"];
		
		this.height = 500;
		this.width = 650;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpFeedbacks_i(),this._Label2_i()];
	}
	var _proto = FeedbacksSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_m_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_feedback_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 10;
		t.width = 55;
		t.skinName = FeedbacksSkin$Skin131;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 10;
		t.width = 55;
		t.skinName = FeedbacksSkin$Skin132;
		return t;
	};
	_proto.grpFeedbacks_i = function () {
		var t = new eui.Group();
		this.grpFeedbacks = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.top = 80;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.labListNoData_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.btnShowSFSWin_i(),this._Label1_i(),this.btnRefresh_i()];
		return t;
	};
	_proto.btnShowSFSWin_i = function () {
		var t = new EButton();
		this.btnShowSFSWin = t;
		t.height = 55;
		t.left = 10;
		t.verticalCenter = 0;
		t.width = 140;
		t.skinName = FeedbacksSkin$Skin133;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "已提交的反馈";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 200;
		t.wordWrap = true;
		return t;
	};
	_proto.btnRefresh_i = function () {
		var t = new EButton();
		this.btnRefresh = t;
		t.height = 50;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 50;
		t.skinName = FeedbacksSkin$Skin134;
		return t;
	};
	_proto.labListNoData_i = function () {
		var t = new eui.Label();
		this.labListNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 260;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listFeedbacks_i();
		return t;
	};
	_proto.listFeedbacks_i = function () {
		var t = new eui.List();
		this.listFeedbacks = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemFeedbackSkin;
		t.verticalCenter = -12.5;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bottom = 30;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "提示：非常欢迎您给我们任何反馈,我们会尽快给您答复。";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.verticalAlign = "middle";
		t.width = 517;
		return t;
	};
	return FeedbacksSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Feedback/ItemFeedback.exml'] = window.ItemFeedbackSkin = (function (_super) {
	__extends(ItemFeedbackSkin, _super);
	var ItemFeedbackSkin$Skin135 = 	(function (_super) {
		__extends(ItemFeedbackSkin$Skin135, _super);
		function ItemFeedbackSkin$Skin135() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemFeedbackSkin$Skin135.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "查看";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemFeedbackSkin$Skin135;
	})(eui.Skin);

	function ItemFeedbackSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","imgFeedback","labTitle","labUserId","labCreateTime","btnView"];
		
		this.height = 70;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this._Group1_i(),this.labTitle_i(),this.labUserId_i(),this._Image1_i(),this.labCreateTime_i(),this.btnView_i(),this._Image2_i()];
	}
	var _proto = ItemFeedbackSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 70;
		t.elementsContent = [this.imgFeedback_i()];
		return t;
	};
	_proto.imgFeedback_i = function () {
		var t = new eui.Image();
		this.imgFeedback = t;
		t.height = 60;
		t.source = "feedback_icon_png";
		t.width = 60;
		return t;
	};
	_proto.labTitle_i = function () {
		var t = new eui.Label();
		this.labTitle = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.size = 22;
		t.text = "邮件的标题";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 3;
		t.verticalAlign = "middle";
		t.width = 340;
		t.x = 70;
		return t;
	};
	_proto.labUserId_i = function () {
		var t = new eui.Label();
		this.labUserId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 70;
		t.size = 20;
		t.text = "用户具体名字";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 32;
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 200;
		t.source = "club_expiration_png";
		t.top = 38;
		t.width = 25;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 230;
		t.size = 20;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 32;
		t.verticalAlign = "middle";
		t.width = 205;
		return t;
	};
	_proto.btnView_i = function () {
		var t = new EButton();
		this.btnView = t;
		t.height = 55;
		t.right = 30;
		t.verticalCenter = 0;
		t.width = 120;
		t.skinName = ItemFeedbackSkin$Skin135;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemFeedbackSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Feedback/SendFeedback.exml'] = window.SendFeedbackSkin = (function (_super) {
	__extends(SendFeedbackSkin, _super);
	var SendFeedbackSkin$Skin136 = 	(function (_super) {
		__extends(SendFeedbackSkin$Skin136, _super);
		function SendFeedbackSkin$Skin136() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SendFeedbackSkin$Skin136.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return SendFeedbackSkin$Skin136;
	})(eui.Skin);

	var SendFeedbackSkin$Skin137 = 	(function (_super) {
		__extends(SendFeedbackSkin$Skin137, _super);
		function SendFeedbackSkin$Skin137() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SendFeedbackSkin$Skin137.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return SendFeedbackSkin$Skin137;
	})(eui.Skin);

	var SendFeedbackSkin$Skin138 = 	(function (_super) {
		__extends(SendFeedbackSkin$Skin138, _super);
		function SendFeedbackSkin$Skin138() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SendFeedbackSkin$Skin138.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "提交反馈";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return SendFeedbackSkin$Skin138;
	})(eui.Skin);

	function SendFeedbackSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","txtTitle","txtContent","btnSendFeedback","grpSendFeedback"];
		
		this.height = 500;
		this.width = 600;
		this.elementsContent = [this.imgWin_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpSendFeedback_i()];
	}
	var _proto = SendFeedbackSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 10;
		t.top = 10;
		t.width = 55;
		t.skinName = SendFeedbackSkin$Skin136;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 10;
		t.top = 8;
		t.width = 55;
		t.skinName = SendFeedbackSkin$Skin137;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_feedback_png";
		t.top = 20;
		return t;
	};
	_proto.grpSendFeedback_i = function () {
		var t = new eui.Group();
		this.grpSendFeedback = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.horizontalCenter = 0;
		t.top = 60;
		t.width = 500;
		t.elementsContent = [this._Image1_i(),this.txtTitle_i(),this._Label1_i(),this._Group1_i(),this.btnSendFeedback_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.txtTitle_i = function () {
		var t = new eui.TextInput();
		this.txtTitle = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.prompt = "标题";
		t.top = 40;
		t.width = 400;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "标题,不超过30个字符";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 85;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 145;
		t.horizontalCenter = 0;
		t.top = 135;
		t.width = 400;
		t.elementsContent = [this._Image2_i(),this.txtContent_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,8,8);
		t.source = "input_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.txtContent_i = function () {
		var t = new eui.EditableText();
		this.txtContent = t;
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.horizontalCenter = "0";
		t.multiline = true;
		t.prompt = "具体内容";
		t.size = 22;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		t.wordWrap = true;
		return t;
	};
	_proto.btnSendFeedback_i = function () {
		var t = new EButton();
		this.btnSendFeedback = t;
		t.bottom = 20;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 145;
		t.skinName = SendFeedbackSkin$Skin138;
		return t;
	};
	return SendFeedbackSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/GameRsl/FinalGameRsl.exml'] = window.FinalGameRslSkin = (function (_super) {
	__extends(FinalGameRslSkin, _super);
	var FinalGameRslSkin$Skin139 = 	(function (_super) {
		__extends(FinalGameRslSkin$Skin139, _super);
		function FinalGameRslSkin$Skin139() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FinalGameRslSkin$Skin139.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return FinalGameRslSkin$Skin139;
	})(eui.Skin);

	var FinalGameRslSkin$Skin140 = 	(function (_super) {
		__extends(FinalGameRslSkin$Skin140, _super);
		function FinalGameRslSkin$Skin140() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FinalGameRslSkin$Skin140.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return FinalGameRslSkin$Skin140;
	})(eui.Skin);

	var FinalGameRslSkin$Skin141 = 	(function (_super) {
		__extends(FinalGameRslSkin$Skin141, _super);
		function FinalGameRslSkin$Skin141() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FinalGameRslSkin$Skin141.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_purple_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x9D09C6;
			t.text = "每局详情";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return FinalGameRslSkin$Skin141;
	})(eui.Skin);

	function FinalGameRslSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","imgWinTitle","btnGoBack","btnClose","btnShowDetails","lablistFinalUserRslsNoData","listFinalUserRsls","grpFinalGameRsl"];
		
		this.height = 600;
		this.width = 700;
		this.elementsContent = [this.imgWin_i(),this.imgWinTitle_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpFinalGameRsl_i(),this._Label2_i()];
	}
	var _proto = FinalGameRslSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,84,578,420);
		t.source = "win_m_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_score_detail_png";
		t.top = 25;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = FinalGameRslSkin$Skin139;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = FinalGameRslSkin$Skin140;
		return t;
	};
	_proto.grpFinalGameRsl_i = function () {
		var t = new eui.Group();
		this.grpFinalGameRsl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.horizontalCenter = 0;
		t.top = 80;
		t.width = 620;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.lablistFinalUserRslsNoData_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Label1_i(),this.btnShowDetails_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.left = 10;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "最终得分";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 200;
		t.wordWrap = true;
		return t;
	};
	_proto.btnShowDetails_i = function () {
		var t = new EButton();
		this.btnShowDetails = t;
		t.height = 55;
		t.right = 20;
		t.verticalCenter = 0;
		t.width = 145;
		t.skinName = FinalGameRslSkin$Skin141;
		return t;
	};
	_proto.lablistFinalUserRslsNoData_i = function () {
		var t = new eui.Label();
		this.lablistFinalUserRslsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 403;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listFinalUserRsls_i();
		return t;
	};
	_proto.listFinalUserRsls_i = function () {
		var t = new eui.List();
		this.listFinalUserRsls = t;
		t.anchorOffsetY = 0;
		t.height = 401;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemFinalUserRslSkin;
		t.verticalCenter = 5.5;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "提示：系统只保留最近100次的得分记录";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 531;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	return FinalGameRslSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/GameRsl/GameRsls.exml'] = window.GameRslsSkin = (function (_super) {
	__extends(GameRslsSkin, _super);
	var GameRslsSkin$Skin142 = 	(function (_super) {
		__extends(GameRslsSkin$Skin142, _super);
		function GameRslsSkin$Skin142() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameRslsSkin$Skin142.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return GameRslsSkin$Skin142;
	})(eui.Skin);

	var GameRslsSkin$Skin143 = 	(function (_super) {
		__extends(GameRslsSkin$Skin143, _super);
		function GameRslsSkin$Skin143() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameRslsSkin$Skin143.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return GameRslsSkin$Skin143;
	})(eui.Skin);

	function GameRslsSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","imgWinTitle","btnGoBack","btnClose","lablistGameRslsNoData","listGameRsls","grpGameRsls"];
		
		this.height = 600;
		this.width = 700;
		this.elementsContent = [this.imgWin_i(),this.imgWinTitle_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpGameRsls_i(),this._Label2_i()];
	}
	var _proto = GameRslsSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,84,578,420);
		t.source = "win_m_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_score_detail_png";
		t.top = 25;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = GameRslsSkin$Skin142;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = GameRslsSkin$Skin143;
		return t;
	};
	_proto.grpGameRsls_i = function () {
		var t = new eui.Group();
		this.grpGameRsls = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.horizontalCenter = 0;
		t.top = 80;
		t.width = 620;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.lablistGameRslsNoData_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.left = 10;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "每局详情";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 200;
		t.wordWrap = true;
		return t;
	};
	_proto.lablistGameRslsNoData_i = function () {
		var t = new eui.Label();
		this.lablistGameRslsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 400;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listGameRsls_i();
		return t;
	};
	_proto.listGameRsls_i = function () {
		var t = new eui.List();
		this.listGameRsls = t;
		t.anchorOffsetY = 0;
		t.height = 360;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemGameRslSkin;
		t.verticalCenter = -21;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bottom = 30;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "提示：系统只保留最近100次的得分记录";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	return GameRslsSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/GameRsl/ItemFinalGameRsl.exml'] = window.ItemFinalGameRslSkin = (function (_super) {
	__extends(ItemFinalGameRslSkin, _super);
	function ItemFinalGameRslSkin() {
		_super.call(this);
		this.skinParts = ["labFinalScore","grpRound","listGameRsl"];
		
		this.height = 300;
		this.width = 620;
		this.elementsContent = [this.grpRound_i(),this._Scroller1_i()];
	}
	var _proto = ItemFinalGameRslSkin.prototype;

	_proto.grpRound_i = function () {
		var t = new eui.Group();
		this.grpRound = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.labFinalScore_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(21,6,131,21);
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labFinalScore_i = function () {
		var t = new eui.Label();
		this.labFinalScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "总得分";
		t.textAlign = "center";
		t.textColor = 0xf7a613;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 118;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 260;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 40;
		t.percentWidth = 100;
		t.viewport = this.listGameRsl_i();
		return t;
	};
	_proto.listGameRsl_i = function () {
		var t = new eui.List();
		this.listGameRsl = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.itemRendererSkinName = ItemFinalUserRslSkin;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		return t;
	};
	return ItemFinalGameRslSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/GameRsl/ItemFinalUserRsl.exml'] = window.ItemFinalUserRslSkin = (function (_super) {
	__extends(ItemFinalUserRslSkin, _super);
	function ItemFinalUserRslSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","labUserName","labUserId","labAwarded"];
		
		this.height = 35;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this.labUserName_i(),this._Label1_i(),this.labUserId_i(),this._Label2_i(),this.labAwarded_i(),this._Image1_i()];
	}
	var _proto = ItemFinalUserRslSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto.labUserName_i = function () {
		var t = new eui.Label();
		this.labUserName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "我是你爸爸的";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 150;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 180;
		t.size = 20;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 31;
		return t;
	};
	_proto.labUserId_i = function () {
		var t = new eui.Label();
		this.labUserId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 230;
		t.size = 20;
		t.text = "2123121";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 94;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 360;
		t.size = 20;
		t.text = "总得分";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.labAwarded_i = function () {
		var t = new eui.Label();
		this.labAwarded = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 440;
		t.size = 20;
		t.stroke = 1;
		t.strokeColor = 0x4BE22F;
		t.text = "+3000";
		t.textAlign = "left";
		t.textColor = 0x1F7F0E;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemFinalUserRslSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/GameRsl/ItemGameRsl.exml'] = window.ItemGameRslSkin = (function (_super) {
	__extends(ItemGameRslSkin, _super);
	function ItemGameRslSkin() {
		_super.call(this);
		this.skinParts = ["labRoundIdx","grpRound","lablistGameRslNoData","listGameRsl"];
		
		this.height = 250;
		this.width = 620;
		this.elementsContent = [this.grpRound_i(),this.lablistGameRslNoData_i(),this.listGameRsl_i()];
	}
	var _proto = ItemGameRslSkin.prototype;

	_proto.grpRound_i = function () {
		var t = new eui.Group();
		this.grpRound = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.labRoundIdx_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(21,6,131,21);
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labRoundIdx_i = function () {
		var t = new eui.Label();
		this.labRoundIdx = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "第3局";
		t.textAlign = "center";
		t.textColor = 0xf7a613;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 118;
		return t;
	};
	_proto.lablistGameRslNoData_i = function () {
		var t = new eui.Label();
		this.lablistGameRslNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 40;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.listGameRsl_i = function () {
		var t = new eui.List();
		this.listGameRsl = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.itemRendererSkinName = ItemUserRslSkin;
		t.top = 40;
		t.percentWidth = 100;
		t.x = 0;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		return t;
	};
	return ItemGameRslSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/GameRsl/ItemOfflineRoom.exml'] = window.ItemOfflineRoomSkin = (function (_super) {
	__extends(ItemOfflineRoomSkin, _super);
	var ItemOfflineRoomSkin$Skin144 = 	(function (_super) {
		__extends(ItemOfflineRoomSkin$Skin144, _super);
		function ItemOfflineRoomSkin$Skin144() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemOfflineRoomSkin$Skin144.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "详情";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemOfflineRoomSkin$Skin144;
	})(eui.Skin);

	function ItemOfflineRoomSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","labRoomId","labBottomTips","labBottomScore","labUsersNum","labRounds","labCreateTime","btnAction"];
		
		this.height = 70;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this._Image1_i(),this._Label1_i(),this.labRoomId_i(),this.labBottomTips_i(),this.labBottomScore_i(),this.labUsersNum_i(),this._Label2_i(),this.labRounds_i(),this._Image2_i(),this._Image3_i(),this.labCreateTime_i(),this.btnAction_i(),this._Image4_i()];
	}
	var _proto = ItemOfflineRoomSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.left = 0;
		t.source = "room_icon_png";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 70;
		t.size = 20;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 1;
		t.verticalAlign = "middle";
		t.width = 31;
		return t;
	};
	_proto.labRoomId_i = function () {
		var t = new eui.Label();
		this.labRoomId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 100;
		t.size = 20;
		t.text = "2123121";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 1;
		t.verticalAlign = "middle";
		t.width = 94;
		return t;
	};
	_proto.labBottomTips_i = function () {
		var t = new eui.Label();
		this.labBottomTips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 185;
		t.size = 20;
		t.text = "底分:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 50;
		return t;
	};
	_proto.labBottomScore_i = function () {
		var t = new eui.Label();
		this.labBottomScore = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 240;
		t.size = 20;
		t.text = "5";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 70;
		return t;
	};
	_proto.labUsersNum_i = function () {
		var t = new eui.Label();
		this.labUsersNum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 350;
		t.size = 20;
		t.text = "5";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 36;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 390;
		t.size = 20;
		t.text = "局数:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 50;
		return t;
	};
	_proto.labRounds_i = function () {
		var t = new eui.Label();
		this.labRounds = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 440;
		t.size = 20;
		t.text = "30";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 1;
		t.verticalAlign = "middle";
		t.width = 40;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 310;
		t.source = "club_members_png";
		t.top = 6;
		t.width = 25;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 70;
		t.source = "club_expiration_png";
		t.top = 40;
		t.width = 25;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 100;
		t.size = 18;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 183;
		return t;
	};
	_proto.btnAction_i = function () {
		var t = new EButton();
		this.btnAction = t;
		t.height = 50;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 120;
		t.skinName = ItemOfflineRoomSkin$Skin144;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemOfflineRoomSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/GameRsl/ItemUserRsl.exml'] = window.ItemUserRslSkin = (function (_super) {
	__extends(ItemUserRslSkin, _super);
	function ItemUserRslSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","labUserId","labDealer","labSeatNo","labAwarded","labWin"];
		
		this.height = 35;
		this.width = 620;
		this.elementsContent = [this.img_dialog_outer_i(),this._Label1_i(),this.labUserId_i(),this._Label2_i(),this.labDealer_i(),this._Label3_i(),this.labSeatNo_i(),this._Label4_i(),this.labAwarded_i(),this._Label5_i(),this.labWin_i(),this._Image1_i()];
	}
	var _proto = ItemUserRslSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 31;
		return t;
	};
	_proto.labUserId_i = function () {
		var t = new eui.Label();
		this.labUserId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 40;
		t.size = 20;
		t.text = "2123121";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 94;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 140;
		t.size = 20;
		t.text = "庄位:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 60;
		return t;
	};
	_proto.labDealer_i = function () {
		var t = new eui.Label();
		this.labDealer = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 200;
		t.size = 20;
		t.text = "是";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 48;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 240;
		t.size = 20;
		t.text = "座位号:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 76;
		return t;
	};
	_proto.labSeatNo_i = function () {
		var t = new eui.Label();
		this.labSeatNo = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 310;
		t.size = 20;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 41;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 360;
		t.size = 20;
		t.text = "得分:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 60;
		return t;
	};
	_proto.labAwarded_i = function () {
		var t = new eui.Label();
		this.labAwarded = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 420;
		t.size = 20;
		t.stroke = 1;
		t.strokeColor = 0x4BE22F;
		t.text = "+3000";
		t.textAlign = "left";
		t.textColor = 0x1F7F0E;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 520;
		t.size = 20;
		t.text = "赢:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 38;
		return t;
	};
	_proto.labWin_i = function () {
		var t = new eui.Label();
		this.labWin = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 560;
		t.size = 22;
		t.stroke = 0;
		t.strokeColor = 0x1f7f0e;
		t.text = "是";
		t.textAlign = "left";
		t.textColor = 0x1f7f0e;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 53;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	return ItemUserRslSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/GameRsl/OfflineRooms.exml'] = window.OfflineRoomsSkin = (function (_super) {
	__extends(OfflineRoomsSkin, _super);
	var OfflineRoomsSkin$Skin145 = 	(function (_super) {
		__extends(OfflineRoomsSkin$Skin145, _super);
		function OfflineRoomsSkin$Skin145() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OfflineRoomsSkin$Skin145.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return OfflineRoomsSkin$Skin145;
	})(eui.Skin);

	var OfflineRoomsSkin$Skin146 = 	(function (_super) {
		__extends(OfflineRoomsSkin$Skin146, _super);
		function OfflineRoomsSkin$Skin146() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OfflineRoomsSkin$Skin146.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return OfflineRoomsSkin$Skin146;
	})(eui.Skin);

	var OfflineRoomsSkin$Skin147 = 	(function (_super) {
		__extends(OfflineRoomsSkin$Skin147, _super);
		function OfflineRoomsSkin$Skin147() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OfflineRoomsSkin$Skin147.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "page_up_png";
			t.percentWidth = 100;
			return t;
		};
		return OfflineRoomsSkin$Skin147;
	})(eui.Skin);

	var OfflineRoomsSkin$Skin148 = 	(function (_super) {
		__extends(OfflineRoomsSkin$Skin148, _super);
		function OfflineRoomsSkin$Skin148() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OfflineRoomsSkin$Skin148.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "page_down_png";
			t.percentWidth = 100;
			return t;
		};
		return OfflineRoomsSkin$Skin148;
	})(eui.Skin);

	var OfflineRoomsSkin$Skin149 = 	(function (_super) {
		__extends(OfflineRoomsSkin$Skin149, _super);
		function OfflineRoomsSkin$Skin149() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OfflineRoomsSkin$Skin149.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return OfflineRoomsSkin$Skin149;
	})(eui.Skin);

	function OfflineRoomsSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","imgWinTitle","btnGoBack","btnClose","btnPageUp","labPagesNum","btnPageDown","btnRefresh","lablistOfflineRoomsNoData","listOfflineRooms","grpOfflineRooms"];
		
		this.height = 600;
		this.width = 700;
		this.elementsContent = [this.imgWin_i(),this.imgWinTitle_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpOfflineRooms_i(),this._Label2_i()];
	}
	var _proto = OfflineRoomsSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,84,578,420);
		t.source = "win_m_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_score_png";
		t.top = 25;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = OfflineRoomsSkin$Skin145;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = OfflineRoomsSkin$Skin146;
		return t;
	};
	_proto.grpOfflineRooms_i = function () {
		var t = new eui.Group();
		this.grpOfflineRooms = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 410;
		t.horizontalCenter = 0;
		t.top = 80;
		t.width = 620;
		t.elementsContent = [this._Image1_i(),this._Group2_i(),this.lablistOfflineRoomsNoData_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Label1_i(),this._Group1_i(),this.btnRefresh_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.left = 10;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "得分记录";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 200;
		t.wordWrap = true;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 60;
		t.top = 0;
		t.percentWidth = 40;
		t.elementsContent = [this._Image2_i(),this.btnPageUp_i(),this.labPagesNum_i(),this.btnPageDown_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.right = 30;
		t.scale9Grid = new egret.Rectangle(21,8,131,17);
		t.source = "numbers_bg_png";
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto.btnPageUp_i = function () {
		var t = new EButton();
		this.btnPageUp = t;
		t.height = 40;
		t.right = 200;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = OfflineRoomsSkin$Skin147;
		return t;
	};
	_proto.labPagesNum_i = function () {
		var t = new eui.Label();
		this.labPagesNum = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.right = 50;
		t.size = 22;
		t.stroke = 3;
		t.strokeColor = 0x404142;
		t.text = "133/1300";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto.btnPageDown_i = function () {
		var t = new EButton();
		this.btnPageDown = t;
		t.height = 40;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 40;
		t.skinName = OfflineRoomsSkin$Skin148;
		return t;
	};
	_proto.btnRefresh_i = function () {
		var t = new EButton();
		this.btnRefresh = t;
		t.height = 50;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 50;
		t.skinName = OfflineRoomsSkin$Skin149;
		return t;
	};
	_proto.lablistOfflineRoomsNoData_i = function () {
		var t = new eui.Label();
		this.lablistOfflineRoomsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 400;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listOfflineRooms_i();
		return t;
	};
	_proto.listOfflineRooms_i = function () {
		var t = new eui.List();
		this.listOfflineRooms = t;
		t.percentHeight = 100;
		t.horizontalCenter = -2;
		t.itemRendererSkinName = ItemOfflineRoomSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bottom = 30;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "提示：系统只保留最近100次的得分记录";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	return OfflineRoomsSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Hall/Hall.1.exml'] = window.HallBKSkin = (function (_super) {
	__extends(HallBKSkin, _super);
	var HallBKSkin$Skin150 = 	(function (_super) {
		__extends(HallBKSkin$Skin150, _super);
		function HallBKSkin$Skin150() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin150.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_add@1x_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin150;
	})(eui.Skin);

	var HallBKSkin$Skin151 = 	(function (_super) {
		__extends(HallBKSkin$Skin151, _super);
		function HallBKSkin$Skin151() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin151.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_add@1x_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin151;
	})(eui.Skin);

	var HallBKSkin$Skin152 = 	(function (_super) {
		__extends(HallBKSkin$Skin152, _super);
		function HallBKSkin$Skin152() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin152.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_setting_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin152;
	})(eui.Skin);

	var HallBKSkin$Skin153 = 	(function (_super) {
		__extends(HallBKSkin$Skin153, _super);
		function HallBKSkin$Skin153() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin153.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_feedback_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin153;
	})(eui.Skin);

	var HallBKSkin$Skin154 = 	(function (_super) {
		__extends(HallBKSkin$Skin154, _super);
		function HallBKSkin$Skin154() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin154.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_exit_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin154;
	})(eui.Skin);

	var HallBKSkin$Skin155 = 	(function (_super) {
		__extends(HallBKSkin$Skin155, _super);
		function HallBKSkin$Skin155() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin155.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_creatroom_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin155;
	})(eui.Skin);

	var HallBKSkin$Skin156 = 	(function (_super) {
		__extends(HallBKSkin$Skin156, _super);
		function HallBKSkin$Skin156() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin156.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_joinroom_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin156;
	})(eui.Skin);

	var HallBKSkin$Skin157 = 	(function (_super) {
		__extends(HallBKSkin$Skin157, _super);
		function HallBKSkin$Skin157() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin157.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_coin_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin157;
	})(eui.Skin);

	var HallBKSkin$Skin158 = 	(function (_super) {
		__extends(HallBKSkin$Skin158, _super);
		function HallBKSkin$Skin158() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin158.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_contest_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin158;
	})(eui.Skin);

	var HallBKSkin$Skin159 = 	(function (_super) {
		__extends(HallBKSkin$Skin159, _super);
		function HallBKSkin$Skin159() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin159.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_club_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin159;
	})(eui.Skin);

	var HallBKSkin$Skin160 = 	(function (_super) {
		__extends(HallBKSkin$Skin160, _super);
		function HallBKSkin$Skin160() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin160.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_agent_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin160;
	})(eui.Skin);

	var HallBKSkin$Skin161 = 	(function (_super) {
		__extends(HallBKSkin$Skin161, _super);
		function HallBKSkin$Skin161() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin161.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_mail_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin161;
	})(eui.Skin);

	var HallBKSkin$Skin162 = 	(function (_super) {
		__extends(HallBKSkin$Skin162, _super);
		function HallBKSkin$Skin162() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin162.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_charging_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin162;
	})(eui.Skin);

	var HallBKSkin$Skin163 = 	(function (_super) {
		__extends(HallBKSkin$Skin163, _super);
		function HallBKSkin$Skin163() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin163.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_shop_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin163;
	})(eui.Skin);

	var HallBKSkin$Skin164 = 	(function (_super) {
		__extends(HallBKSkin$Skin164, _super);
		function HallBKSkin$Skin164() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin164.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_playinfo_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin164;
	})(eui.Skin);

	var HallBKSkin$Skin165 = 	(function (_super) {
		__extends(HallBKSkin$Skin165, _super);
		function HallBKSkin$Skin165() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin165.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_history_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin165;
	})(eui.Skin);

	var HallBKSkin$Skin166 = 	(function (_super) {
		__extends(HallBKSkin$Skin166, _super);
		function HallBKSkin$Skin166() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBKSkin$Skin166.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_share_png";
			t.percentWidth = 100;
			return t;
		};
		return HallBKSkin$Skin166;
	})(eui.Skin);

	function HallBKSkin() {
		_super.call(this);
		this.skinParts = ["grpAvatar","btnAddCards","grpCards","btnAddCoins","grpCoins","btnSettings","btnFeedback","btnExit","grpTopMenu","labInstantMsg","grpInstantMsg","labAnnouncement","grpAnnouncement","btnCreateRoom","btnJoinRoom","btnCoinMode","btnContestMode","btnClubMode","grpMainBtns","btnAgent","btnEmail","btnCharging","btnShop","btnWanFa","btnHistory","btnShare","grpMenu"];
		
		this.height = 640;
		this.width = 960;
		this.elementsContent = [this._Image1_i(),this.grpAvatar_i(),this.grpCards_i(),this.grpCoins_i(),this.grpTopMenu_i(),this.grpInstantMsg_i(),this.grpAnnouncement_i(),this.grpMainBtns_i(),this.grpMenu_i()];
	}
	var _proto = HallBKSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "hall_png";
		t.top = 0;
		return t;
	};
	_proto.grpAvatar_i = function () {
		var t = new eui.Group();
		this.grpAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.left = 0;
		t.top = 0;
		t.width = 180;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = -7;
		t.source = "avatar_bg_png";
		t.top = -2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 80;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "用户名六个字";
		t.top = 10;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 80;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "ID:";
		t.textColor = 0xf7a613;
		t.top = 45;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 110;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "898766";
		t.top = 45;
		return t;
	};
	_proto.grpCards_i = function () {
		var t = new eui.Group();
		this.grpCards = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.left = 240;
		t.top = 8;
		t.width = 200;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label4_i(),this.btnAddCards_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.horizontalCenter = 0;
		t.source = "numbers_bg_png";
		t.verticalCenter = 0;
		t.width = 160;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "diamond_png";
		t.verticalCenter = 0;
		t.width = 44;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "192023";
		t.textAlign = "center";
		t.textColor = 0xf7a613;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 118;
		return t;
	};
	_proto.btnAddCards_i = function () {
		var t = new EButton();
		this.btnAddCards = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 45;
		t.skinName = HallBKSkin$Skin150;
		return t;
	};
	_proto.grpCoins_i = function () {
		var t = new eui.Group();
		this.grpCoins = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.left = 450;
		t.top = 8;
		t.width = 200;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label5_i(),this.btnAddCoins_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.horizontalCenter = 0;
		t.source = "numbers_bg_png";
		t.verticalCenter = 0;
		t.width = 160;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "coin_png";
		t.verticalCenter = 0;
		t.width = 44;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "192023";
		t.textAlign = "center";
		t.textColor = 0xf7a613;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 118;
		return t;
	};
	_proto.btnAddCoins_i = function () {
		var t = new EButton();
		this.btnAddCoins = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 45;
		t.skinName = HallBKSkin$Skin151;
		return t;
	};
	_proto.grpTopMenu_i = function () {
		var t = new eui.Group();
		this.grpTopMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.right = 0;
		t.top = 8;
		t.width = 244;
		t.elementsContent = [this.btnSettings_i(),this.btnFeedback_i(),this.btnExit_i()];
		return t;
	};
	_proto.btnSettings_i = function () {
		var t = new EButton();
		this.btnSettings = t;
		t.anchorOffsetX = 0;
		t.height = 50;
		t.right = 155;
		t.verticalCenter = 0;
		t.width = 55;
		t.skinName = HallBKSkin$Skin152;
		return t;
	};
	_proto.btnFeedback_i = function () {
		var t = new EButton();
		this.btnFeedback = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.right = 85;
		t.verticalCenter = 0;
		t.width = 55;
		t.skinName = HallBKSkin$Skin153;
		return t;
	};
	_proto.btnExit_i = function () {
		var t = new EButton();
		this.btnExit = t;
		t.anchorOffsetX = 0;
		t.height = 50;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 55;
		t.skinName = HallBKSkin$Skin154;
		return t;
	};
	_proto.grpInstantMsg_i = function () {
		var t = new eui.Group();
		this.grpInstantMsg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.horizontalCenter = 0;
		t.top = 100;
		t.width = 718;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.labInstantMsg_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 0;
		t.source = "laba_png";
		t.verticalCenter = 0;
		t.width = 45;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "txt_bg_png";
		return t;
	};
	_proto.labInstantMsg_i = function () {
		var t = new eui.Label();
		this.labInstantMsg = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.left = 45;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "及时消息";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 670;
		return t;
	};
	_proto.grpAnnouncement_i = function () {
		var t = new eui.Group();
		this.grpAnnouncement = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 410;
		t.left = 30;
		t.top = 145;
		t.width = 280;
		t.elementsContent = [this._Image9_i(),this.labAnnouncement_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "announcement_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.labAnnouncement_i = function () {
		var t = new eui.Label();
		this.labAnnouncement = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 283;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "系统公告,公告内容";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 254;
		t.wordWrap = true;
		t.x = 10;
		t.y = 72;
		return t;
	};
	_proto.grpMainBtns_i = function () {
		var t = new eui.Group();
		this.grpMainBtns = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 410;
		t.right = 56;
		t.width = 580;
		t.y = 148;
		t.elementsContent = [this.btnCreateRoom_i(),this.btnJoinRoom_i(),this.btnCoinMode_i(),this.btnContestMode_i(),this.btnClubMode_i()];
		return t;
	};
	_proto.btnCreateRoom_i = function () {
		var t = new EButton();
		this.btnCreateRoom = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.left = 0;
		t.top = 0;
		t.width = 250;
		t.skinName = HallBKSkin$Skin155;
		return t;
	};
	_proto.btnJoinRoom_i = function () {
		var t = new EButton();
		this.btnJoinRoom = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 200;
		t.left = 0;
		t.scaleX = 1;
		t.width = 250;
		t.skinName = HallBKSkin$Skin156;
		return t;
	};
	_proto.btnCoinMode_i = function () {
		var t = new EButton();
		this.btnCoinMode = t;
		t.anchorOffsetX = 0;
		t.height = 120;
		t.right = 0;
		t.top = 10;
		t.width = 290;
		t.skinName = HallBKSkin$Skin157;
		return t;
	};
	_proto.btnContestMode_i = function () {
		var t = new EButton();
		this.btnContestMode = t;
		t.anchorOffsetX = 0;
		t.height = 120;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 290;
		t.skinName = HallBKSkin$Skin158;
		return t;
	};
	_proto.btnClubMode_i = function () {
		var t = new EButton();
		this.btnClubMode = t;
		t.anchorOffsetX = 0;
		t.bottom = 10;
		t.height = 120;
		t.right = 0;
		t.width = 290;
		t.skinName = HallBKSkin$Skin159;
		return t;
	};
	_proto.grpMenu_i = function () {
		var t = new eui.Group();
		this.grpMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 691;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.btnAgent_i(),this.btnEmail_i(),this.btnCharging_i(),this.btnShop_i(),this.btnWanFa_i(),this.btnHistory_i(),this.btnShare_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.btnAgent_i = function () {
		var t = new EButton();
		this.btnAgent = t;
		t.anchorOffsetX = 0;
		t.height = 65;
		t.left = 20;
		t.verticalCenter = -4;
		t.width = 70;
		t.skinName = HallBKSkin$Skin160;
		return t;
	};
	_proto.btnEmail_i = function () {
		var t = new EButton();
		this.btnEmail = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 110;
		t.verticalCenter = 0;
		t.width = 70;
		t.skinName = HallBKSkin$Skin161;
		return t;
	};
	_proto.btnCharging_i = function () {
		var t = new EButton();
		this.btnCharging = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.left = 210;
		t.verticalCenter = 0;
		t.width = 68;
		t.skinName = HallBKSkin$Skin162;
		return t;
	};
	_proto.btnShop_i = function () {
		var t = new EButton();
		this.btnShop = t;
		t.anchorOffsetX = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = -3;
		t.width = 70;
		t.skinName = HallBKSkin$Skin163;
		return t;
	};
	_proto.btnWanFa_i = function () {
		var t = new EButton();
		this.btnWanFa = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.right = 20;
		t.verticalCenter = -3;
		t.width = 55;
		t.skinName = HallBKSkin$Skin164;
		return t;
	};
	_proto.btnHistory_i = function () {
		var t = new EButton();
		this.btnHistory = t;
		t.anchorOffsetX = 0;
		t.height = 60;
		t.right = 110;
		t.verticalCenter = 0;
		t.width = 70;
		t.skinName = HallBKSkin$Skin165;
		return t;
	};
	_proto.btnShare_i = function () {
		var t = new EButton();
		this.btnShare = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.right = 210;
		t.verticalCenter = -3;
		t.width = 70;
		t.skinName = HallBKSkin$Skin166;
		return t;
	};
	return HallBKSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Hall/Hall.exml'] = window.HallSkin = (function (_super) {
	__extends(HallSkin, _super);
	var HallSkin$Skin167 = 	(function (_super) {
		__extends(HallSkin$Skin167, _super);
		function HallSkin$Skin167() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin167.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_add@1x_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin167;
	})(eui.Skin);

	var HallSkin$Skin168 = 	(function (_super) {
		__extends(HallSkin$Skin168, _super);
		function HallSkin$Skin168() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin168.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_add@1x_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin168;
	})(eui.Skin);

	var HallSkin$Skin169 = 	(function (_super) {
		__extends(HallSkin$Skin169, _super);
		function HallSkin$Skin169() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin169.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin169;
	})(eui.Skin);

	var HallSkin$Skin170 = 	(function (_super) {
		__extends(HallSkin$Skin170, _super);
		function HallSkin$Skin170() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin170.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_setting_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin170;
	})(eui.Skin);

	var HallSkin$Skin171 = 	(function (_super) {
		__extends(HallSkin$Skin171, _super);
		function HallSkin$Skin171() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin171.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_kefu_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin171;
	})(eui.Skin);

	var HallSkin$Skin172 = 	(function (_super) {
		__extends(HallSkin$Skin172, _super);
		function HallSkin$Skin172() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin172.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_feedback_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin172;
	})(eui.Skin);

	var HallSkin$Skin173 = 	(function (_super) {
		__extends(HallSkin$Skin173, _super);
		function HallSkin$Skin173() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin173.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_exit_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin173;
	})(eui.Skin);

	var HallSkin$Skin174 = 	(function (_super) {
		__extends(HallSkin$Skin174, _super);
		function HallSkin$Skin174() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin174.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ddz_hall_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin174;
	})(eui.Skin);

	var HallSkin$Skin175 = 	(function (_super) {
		__extends(HallSkin$Skin175, _super);
		function HallSkin$Skin175() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin175.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "texas_hall_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin175;
	})(eui.Skin);

	var HallSkin$Skin176 = 	(function (_super) {
		__extends(HallSkin$Skin176, _super);
		function HallSkin$Skin176() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin176.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin176;
	})(eui.Skin);

	var HallSkin$Skin177 = 	(function (_super) {
		__extends(HallSkin$Skin177, _super);
		function HallSkin$Skin177() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin177.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "qznn_hall_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin177;
	})(eui.Skin);

	var HallSkin$Skin178 = 	(function (_super) {
		__extends(HallSkin$Skin178, _super);
		function HallSkin$Skin178() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin178.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_createroom_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin178;
	})(eui.Skin);

	var HallSkin$Skin179 = 	(function (_super) {
		__extends(HallSkin$Skin179, _super);
		function HallSkin$Skin179() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin179.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_joinroom_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin179;
	})(eui.Skin);

	var HallSkin$Skin180 = 	(function (_super) {
		__extends(HallSkin$Skin180, _super);
		function HallSkin$Skin180() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin180.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_club_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin180;
	})(eui.Skin);

	var HallSkin$Skin181 = 	(function (_super) {
		__extends(HallSkin$Skin181, _super);
		function HallSkin$Skin181() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin181.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_agent_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin181;
	})(eui.Skin);

	var HallSkin$Skin182 = 	(function (_super) {
		__extends(HallSkin$Skin182, _super);
		function HallSkin$Skin182() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin182.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_mail_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin182;
	})(eui.Skin);

	var HallSkin$Skin183 = 	(function (_super) {
		__extends(HallSkin$Skin183, _super);
		function HallSkin$Skin183() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin183.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_charging_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin183;
	})(eui.Skin);

	var HallSkin$Skin184 = 	(function (_super) {
		__extends(HallSkin$Skin184, _super);
		function HallSkin$Skin184() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin184.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_shop_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin184;
	})(eui.Skin);

	var HallSkin$Skin185 = 	(function (_super) {
		__extends(HallSkin$Skin185, _super);
		function HallSkin$Skin185() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin185.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_playinfo_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin185;
	})(eui.Skin);

	var HallSkin$Skin186 = 	(function (_super) {
		__extends(HallSkin$Skin186, _super);
		function HallSkin$Skin186() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin186.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_history_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin186;
	})(eui.Skin);

	var HallSkin$Skin187 = 	(function (_super) {
		__extends(HallSkin$Skin187, _super);
		function HallSkin$Skin187() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin187.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_share_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin187;
	})(eui.Skin);

	var HallSkin$Skin188 = 	(function (_super) {
		__extends(HallSkin$Skin188, _super);
		function HallSkin$Skin188() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin188.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "club_menu_me_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin188;
	})(eui.Skin);

	var HallSkin$Skin189 = 	(function (_super) {
		__extends(HallSkin$Skin189, _super);
		function HallSkin$Skin189() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin189.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return HallSkin$Skin189;
	})(eui.Skin);

	function HallSkin() {
		_super.call(this);
		this.skinParts = ["imgUserAvatar","labUserName","labUserId","grpAvatar","labCardNum","btnAddCards","grpCards","labScore","btnAddCoins","grpCoins","btnRefresh","grpUtilityMenu","grpLeftBottomMenu","btnSettings","btnKeFu","btnFeedback","btnExit","grpTopMenu","grpScrollingMessages","grpSystemMessages","labAnnouncement","grpAnnouncement","btnCoinModeDdz","btnCoinModeTexas","btnCoinModeZjh","btnCoinModeQznn","btnCreateRoom","btnJoinRoom","btnClubMode","grpMainBtns","btnAgent","btnEmail","btnCharging","btnShop","btnWanFa","btnHistory","btnShare","btnAcctSetting","grpMenu","imgGrpCoinModeOuter","labCoinModeName","grpCoinModeBas","grpCoinModeMid","grpCoinModeAdv","btnCloseGrpCoinMode","grpCoinMode"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.grpAvatar_i(),this.grpCards_i(),this.grpCoins_i(),this.grpUtilityMenu_i(),this.grpLeftBottomMenu_i(),this.grpTopMenu_i(),this.grpSystemMessages_i(),this.grpAnnouncement_i(),this.grpMainBtns_i(),this.grpMenu_i(),this.grpCoinMode_i()];
	}
	var _proto = HallSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(262,80,452,480);
		t.source = "hall_png";
		t.top = 0;
		return t;
	};
	_proto.grpAvatar_i = function () {
		var t = new eui.Group();
		this.grpAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.left = 0;
		t.top = 0;
		t.width = 180;
		t.elementsContent = [this._Group1_i(),this.labUserName_i(),this._Label1_i(),this.labUserId_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 70;
		t.elementsContent = [this.imgUserAvatar_i(),this._Image2_i()];
		return t;
	};
	_proto.imgUserAvatar_i = function () {
		var t = new eui.Image();
		this.imgUserAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.horizontalCenter = 0;
		t.source = "avatar_man_png";
		t.verticalCenter = 0;
		t.width = 54;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "avatar_bg_png";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.labUserName_i = function () {
		var t = new eui.Label();
		this.labUserName = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 80;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "用户名六个字";
		t.top = 10;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 80;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "ID:";
		t.textColor = 0xf7a613;
		t.top = 45;
		return t;
	};
	_proto.labUserId_i = function () {
		var t = new eui.Label();
		this.labUserId = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 110;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "898766";
		t.top = 45;
		return t;
	};
	_proto.grpCards_i = function () {
		var t = new eui.Group();
		this.grpCards = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = -200;
		t.top = 8;
		t.width = 250;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.labCardNum_i(),this.btnAddCards_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "numbers_bg_png";
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 56;
		t.left = 0;
		t.source = "diamond_png";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.labCardNum_i = function () {
		var t = new eui.Label();
		this.labCardNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "192023";
		t.textAlign = "center";
		t.textColor = 0xf7a613;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 140;
		return t;
	};
	_proto.btnAddCards_i = function () {
		var t = new EButton();
		this.btnAddCards = t;
		t.anchorOffsetX = 0;
		t.height = 60;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 60;
		t.skinName = HallSkin$Skin167;
		return t;
	};
	_proto.grpCoins_i = function () {
		var t = new eui.Group();
		this.grpCoins = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = 100;
		t.top = 8;
		t.width = 250;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.labScore_i(),this.btnAddCoins_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "numbers_bg_png";
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.left = 0;
		t.source = "coin_png";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.labScore_i = function () {
		var t = new eui.Label();
		this.labScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x4d4053;
		t.text = "192023";
		t.textAlign = "center";
		t.textColor = 0xf7a613;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 140;
		return t;
	};
	_proto.btnAddCoins_i = function () {
		var t = new EButton();
		this.btnAddCoins = t;
		t.anchorOffsetX = 0;
		t.height = 60;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 60;
		t.skinName = HallSkin$Skin168;
		return t;
	};
	_proto.grpUtilityMenu_i = function () {
		var t = new eui.Group();
		this.grpUtilityMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.right = 10;
		t.top = 80;
		t.width = 80;
		t.elementsContent = [this.btnRefresh_i()];
		return t;
	};
	_proto.btnRefresh_i = function () {
		var t = new EButton();
		this.btnRefresh = t;
		t.height = 60;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 60;
		t.skinName = HallSkin$Skin169;
		return t;
	};
	_proto.grpLeftBottomMenu_i = function () {
		var t = new eui.Group();
		this.grpLeftBottomMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 1;
		t.height = 80;
		t.left = 0;
		t.width = 132;
		return t;
	};
	_proto.grpTopMenu_i = function () {
		var t = new eui.Group();
		this.grpTopMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.right = 0;
		t.top = 8;
		t.width = 370;
		t.elementsContent = [this.btnSettings_i(),this.btnKeFu_i(),this.btnFeedback_i(),this.btnExit_i()];
		return t;
	};
	_proto.btnSettings_i = function () {
		var t = new EButton();
		this.btnSettings = t;
		t.anchorOffsetX = 0;
		t.height = 70;
		t.left = 10;
		t.verticalCenter = 0;
		t.width = 75;
		t.skinName = HallSkin$Skin170;
		return t;
	};
	_proto.btnKeFu_i = function () {
		var t = new EButton();
		this.btnKeFu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 45;
		t.verticalCenter = 3;
		t.width = 75;
		t.skinName = HallSkin$Skin171;
		return t;
	};
	_proto.btnFeedback_i = function () {
		var t = new EButton();
		this.btnFeedback = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = -45;
		t.verticalCenter = 0;
		t.width = 75;
		t.skinName = HallSkin$Skin172;
		return t;
	};
	_proto.btnExit_i = function () {
		var t = new EButton();
		this.btnExit = t;
		t.anchorOffsetX = 0;
		t.height = 65;
		t.right = 10;
		t.verticalCenter = 1;
		t.width = 75;
		t.skinName = HallSkin$Skin173;
		return t;
	};
	_proto.grpSystemMessages_i = function () {
		var t = new eui.Group();
		this.grpSystemMessages = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.horizontalCenter = 0;
		t.top = 100;
		t.width = 900;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.grpScrollingMessages_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 0;
		t.source = "laba_png";
		t.verticalCenter = 0;
		t.width = 45;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "txt_bg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.grpScrollingMessages_i = function () {
		var t = new eui.Group();
		this.grpScrollingMessages = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.left = 45;
		t.width = 855.33;
		return t;
	};
	_proto.grpAnnouncement_i = function () {
		var t = new eui.Group();
		this.grpAnnouncement = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 467.33;
		t.left = 30;
		t.top = 145;
		t.width = 345.33;
		t.elementsContent = [this._Image9_i(),this.labAnnouncement_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "announcement_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labAnnouncement_i = function () {
		var t = new eui.Label();
		this.labAnnouncement = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 334;
		t.lineSpacing = 5;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "系统公告,公告内容";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 318;
		t.wordWrap = true;
		t.x = 12;
		t.y = 72;
		return t;
	};
	_proto.grpMainBtns_i = function () {
		var t = new eui.Group();
		this.grpMainBtns = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.right = 56;
		t.width = 836;
		t.y = 148;
		t.elementsContent = [this.btnCoinModeDdz_i(),this.btnCoinModeTexas_i(),this.btnCoinModeZjh_i(),this.btnCoinModeQznn_i(),this.btnCreateRoom_i(),this.btnJoinRoom_i(),this.btnClubMode_i()];
		return t;
	};
	_proto.btnCoinModeDdz_i = function () {
		var t = new EButton();
		this.btnCoinModeDdz = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.left = 5;
		t.top = 30;
		t.width = 200;
		t.skinName = HallSkin$Skin174;
		return t;
	};
	_proto.btnCoinModeTexas_i = function () {
		var t = new EButton();
		this.btnCoinModeTexas = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.left = 5;
		t.verticalCenter = 120;
		t.width = 200;
		t.skinName = HallSkin$Skin175;
		return t;
	};
	_proto.btnCoinModeZjh_i = function () {
		var t = new EButton();
		this.btnCoinModeZjh = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.horizontalCenter = -50;
		t.top = 30;
		t.width = 200;
		t.skinName = HallSkin$Skin176;
		return t;
	};
	_proto.btnCoinModeQznn_i = function () {
		var t = new EButton();
		this.btnCoinModeQznn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.horizontalCenter = -50;
		t.verticalCenter = 120;
		t.width = 200;
		t.skinName = HallSkin$Skin177;
		return t;
	};
	_proto.btnCreateRoom_i = function () {
		var t = new EButton();
		this.btnCreateRoom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.right = -15;
		t.top = 40;
		t.width = 325.34;
		t.skinName = HallSkin$Skin178;
		return t;
	};
	_proto.btnJoinRoom_i = function () {
		var t = new EButton();
		this.btnJoinRoom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 300;
		t.skinName = HallSkin$Skin179;
		return t;
	};
	_proto.btnClubMode_i = function () {
		var t = new EButton();
		this.btnClubMode = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 40;
		t.height = 120;
		t.right = 10;
		t.width = 300;
		t.skinName = HallSkin$Skin180;
		return t;
	};
	_proto.grpMenu_i = function () {
		var t = new eui.Group();
		this.grpMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 80;
		t.horizontalCenter = 2;
		t.width = 960;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.btnAgent_i(),this.btnEmail_i(),this.btnCharging_i(),this.btnShop_i(),this.btnWanFa_i(),this.btnHistory_i(),this.btnShare_i(),this.btnAcctSetting_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.btnAgent_i = function () {
		var t = new EButton();
		this.btnAgent = t;
		t.anchorOffsetX = 0;
		t.height = 85;
		t.left = 10;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = HallSkin$Skin181;
		return t;
	};
	_proto.btnEmail_i = function () {
		var t = new EButton();
		this.btnEmail = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.left = 135;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = HallSkin$Skin182;
		return t;
	};
	_proto.btnCharging_i = function () {
		var t = new EButton();
		this.btnCharging = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.left = 265;
		t.verticalCenter = -8;
		t.width = 90;
		t.skinName = HallSkin$Skin183;
		return t;
	};
	_proto.btnShop_i = function () {
		var t = new EButton();
		this.btnShop = t;
		t.anchorOffsetX = 0;
		t.height = 85;
		t.horizontalCenter = 65;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = HallSkin$Skin184;
		return t;
	};
	_proto.btnWanFa_i = function () {
		var t = new EButton();
		this.btnWanFa = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.right = 10;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = HallSkin$Skin185;
		return t;
	};
	_proto.btnHistory_i = function () {
		var t = new EButton();
		this.btnHistory = t;
		t.anchorOffsetX = 0;
		t.height = 80;
		t.horizontalCenter = 310;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = HallSkin$Skin186;
		return t;
	};
	_proto.btnShare_i = function () {
		var t = new EButton();
		this.btnShare = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.horizontalCenter = 190;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = HallSkin$Skin187;
		return t;
	};
	_proto.btnAcctSetting_i = function () {
		var t = new EButton();
		this.btnAcctSetting = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.horizontalCenter = -50;
		t.verticalCenter = -10;
		t.width = 90;
		t.skinName = HallSkin$Skin188;
		return t;
	};
	_proto.grpCoinMode_i = function () {
		var t = new eui.Group();
		this.grpCoinMode = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.imgGrpCoinModeOuter_i(),this._Group2_i()];
		return t;
	};
	_proto.imgGrpCoinModeOuter_i = function () {
		var t = new eui.Image();
		this.imgGrpCoinModeOuter = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 80;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this.labCoinModeName_i(),this.grpCoinModeBas_i(),this.grpCoinModeMid_i(),this.grpCoinModeAdv_i(),this.btnCloseGrpCoinMode_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.alpha = 0.85;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,9,271,61);
		t.source = "coinmode_title_bg_png";
		t.top = 10;
		t.width = 260;
		return t;
	};
	_proto.labCoinModeName_i = function () {
		var t = new eui.Label();
		this.labCoinModeName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 40;
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x4D4053;
		t.text = "斗地主";
		t.textAlign = "center";
		t.top = 12;
		t.verticalAlign = "middle";
		t.width = 254;
		t.wordWrap = true;
		return t;
	};
	_proto.grpCoinModeBas_i = function () {
		var t = new eui.Group();
		this.grpCoinModeBas = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 282;
		t.left = 30;
		t.verticalCenter = 20;
		t.width = 220;
		return t;
	};
	_proto.grpCoinModeMid_i = function () {
		var t = new eui.Group();
		this.grpCoinModeMid = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 282;
		t.horizontalCenter = 0;
		t.verticalCenter = 20;
		t.width = 220;
		return t;
	};
	_proto.grpCoinModeAdv_i = function () {
		var t = new eui.Group();
		this.grpCoinModeAdv = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 282;
		t.right = 30;
		t.verticalCenter = 20;
		t.width = 220;
		return t;
	};
	_proto.btnCloseGrpCoinMode_i = function () {
		var t = new EButton();
		this.btnCloseGrpCoinMode = t;
		t.height = 55;
		t.right = 15;
		t.top = 15;
		t.width = 55;
		t.skinName = HallSkin$Skin189;
		return t;
	};
	return HallSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Help/Help.exml'] = window.HelpSkin = (function (_super) {
	__extends(HelpSkin, _super);
	var HelpSkin$Skin190 = 	(function (_super) {
		__extends(HelpSkin$Skin190, _super);
		function HelpSkin$Skin190() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HelpSkin$Skin190.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return HelpSkin$Skin190;
	})(eui.Skin);

	var HelpSkin$Skin191 = 	(function (_super) {
		__extends(HelpSkin$Skin191, _super);
		function HelpSkin$Skin191() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HelpSkin$Skin191.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return HelpSkin$Skin191;
	})(eui.Skin);

	function HelpSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","helpRadioBtn","grpTabBtns","grpTabMenu","vsHelp","grpHelp","grpDdzHelp","grpTexasHelp","grpZjhHelp","grpQznnHelp"];
		
		this.height = 600;
		this.width = 900;
		this.elementsContent = [this.imgWin_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpTabMenu_i(),this.grpHelp_i(),this.grpDdzHelp_i(),this.grpTexasHelp_i(),this.grpZjhHelp_i(),this.grpQznnHelp_i()];
	}
	var _proto = HelpSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(92,87,744,449);
		t.source = "win_b_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 20;
		t.width = 55;
		t.skinName = HelpSkin$Skin190;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 20;
		t.width = 55;
		t.skinName = HelpSkin$Skin191;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_help_png";
		t.top = 25;
		return t;
	};
	_proto.grpTabMenu_i = function () {
		var t = new eui.Group();
		this.grpTabMenu = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 20;
		t.top = 90;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this.grpTabBtns_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpTabBtns_i = function () {
		var t = new eui.Group();
		this.grpTabBtns = t;
		t.anchorOffsetY = 0;
		t.height = 360;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 200;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.helpRadioBtn_i(),this._RadioButton1_i(),this._RadioButton2_i(),this._RadioButton3_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.helpRadioBtn_i = function () {
		var t = new eui.RadioButton();
		this.helpRadioBtn = t;
		t.groupName = "tabHelpBtns";
		t.horizontalCenter = 0;
		t.label = "斗地主";
		t.selected = true;
		t.skinName = "CRadioButtonSkin";
		t.value = "0";
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabHelpBtns";
		t.horizontalCenter = 0;
		t.label = "德州扑克";
		t.skinName = "CRadioButtonSkin";
		t.value = "1";
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabHelpBtns";
		t.horizontalCenter = 0;
		t.label = "炸金花";
		t.skinName = "CRadioButtonSkin";
		t.value = "2";
		return t;
	};
	_proto._RadioButton3_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabHelpBtns";
		t.horizontalCenter = 0;
		t.label = "抢庄牛牛";
		t.skinName = "CRadioButtonSkin";
		t.value = "3";
		return t;
	};
	_proto.grpHelp_i = function () {
		var t = new eui.Group();
		this.grpHelp = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this.vsHelp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.vsHelp_i = function () {
		var t = new eui.ViewStack();
		this.vsHelp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpDdzHelp_i = function () {
		var t = new eui.Group();
		this.grpDdzHelp = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Scroller1_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 95;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 20;
		t.percentWidth = 100;
		t.viewport = this._Label1_i();
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 220;
		t.lineSpacing = 5;
		t.size = 24;
		t.text = "斗地主是一种在中国流行的纸牌游戏。该游戏由三人个玩一副牌，地主是一方，其余两家为另一方，双方对战，先出完的一方胜。";
		t.textColor = 0xF9F5E8;
		t.width = 490;
		return t;
	};
	_proto.grpTexasHelp_i = function () {
		var t = new eui.Group();
		this.grpTexasHelp = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Scroller2_i()];
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 95;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 20;
		t.percentWidth = 100;
		t.viewport = this._Label2_i();
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 220;
		t.lineSpacing = 5;
		t.size = 24;
		t.text = "德州扑克是一种牌类游戏, 可多人参与, 它的玩法是，玩家每人发两张底牌, 桌面依次发5张公共牌, 玩家用自己的两张底牌和5张公共牌自由组合，按大小决定胜负。";
		t.textColor = 0xF9F5E8;
		t.width = 490;
		return t;
	};
	_proto.grpZjhHelp_i = function () {
		var t = new eui.Group();
		this.grpZjhHelp = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Scroller3_i()];
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 95;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 20;
		t.percentWidth = 100;
		t.viewport = this._Label3_i();
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 220;
		t.lineSpacing = 5;
		t.size = 24;
		t.text = "炸金花是流传的一种民间纸牌游戏。具有独特的比牌规则。玩家以手中的三张牌比输赢, 玩家可以在自己操作时与其他最多一位玩家比牌。";
		t.textColor = 0xF9F5E8;
		t.width = 490;
		return t;
	};
	_proto.grpQznnHelp_i = function () {
		var t = new eui.Group();
		this.grpQznnHelp = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Scroller4_i()];
		return t;
	};
	_proto._Scroller4_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 95;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 20;
		t.percentWidth = 100;
		t.viewport = this._Label4_i();
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 220;
		t.lineSpacing = 5;
		t.size = 24;
		t.text = "抢庄牛牛是一种流行的纸牌游戏,由多人同时进行,总共52张牌(除大小王)在确定庄家后, 系统将给予玩家每人5张牌, 用户将根据5张牌进行排列组合, 并且闲家一一和庄家进行大小比较确定胜负。玩家必须将手中的5张牌分为两组, 第一组牌数为3张, 第二组为2张。如果这里出现的两组牌中, 点数成为10的倍数的话, 就是获得胜利。";
		t.textColor = 0xF9F5E8;
		t.width = 490;
		return t;
	};
	return HelpSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/KeFu/KeFu.exml'] = window.KeFuSkin = (function (_super) {
	__extends(KeFuSkin, _super);
	var KeFuSkin$Skin192 = 	(function (_super) {
		__extends(KeFuSkin$Skin192, _super);
		function KeFuSkin$Skin192() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = KeFuSkin$Skin192.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return KeFuSkin$Skin192;
	})(eui.Skin);

	var KeFuSkin$Skin193 = 	(function (_super) {
		__extends(KeFuSkin$Skin193, _super);
		function KeFuSkin$Skin193() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = KeFuSkin$Skin193.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return KeFuSkin$Skin193;
	})(eui.Skin);

	var KeFuSkin$Skin194 = 	(function (_super) {
		__extends(KeFuSkin$Skin194, _super);
		function KeFuSkin$Skin194() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = KeFuSkin$Skin194.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "确定";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return KeFuSkin$Skin194;
	})(eui.Skin);

	function KeFuSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","labKefu","btnOK","grpKeFu"];
		
		this.height = 400;
		this.width = 550;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpKeFu_i()];
	}
	var _proto = KeFuSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_s_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_kefu_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = KeFuSkin$Skin192;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = KeFuSkin$Skin193;
		return t;
	};
	_proto.grpKeFu_i = function () {
		var t = new eui.Group();
		this.grpKeFu = t;
		t.anchorOffsetY = 0;
		t.height = 280;
		t.horizontalCenter = 0.5;
		t.top = 85;
		t.percentWidth = 90;
		t.elementsContent = [this._Image2_i(),this.labKefu_i(),this.btnOK_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labKefu_i = function () {
		var t = new eui.Label();
		this.labKefu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 220;
		t.lineSpacing = 5;
		t.size = 24;
		t.text = "7*24小时美女客服在线为你服务，客服微信:xxxxxx";
		t.textColor = 0xF9F5E8;
		t.width = 490;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new EButton();
		this.btnOK = t;
		t.bottom = 20;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 145;
		t.skinName = KeFuSkin$Skin194;
		return t;
	};
	return KeFuSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Login/Login.exml'] = window.loginSkin = (function (_super) {
	__extends(loginSkin, _super);
	var loginSkin$Skin195 = 	(function (_super) {
		__extends(loginSkin$Skin195, _super);
		function loginSkin$Skin195() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = loginSkin$Skin195.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_login_png";
			t.percentWidth = 100;
			return t;
		};
		return loginSkin$Skin195;
	})(eui.Skin);

	var loginSkin$Skin196 = 	(function (_super) {
		__extends(loginSkin$Skin196, _super);
		function loginSkin$Skin196() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = loginSkin$Skin196.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_register_s_png";
			t.percentWidth = 100;
			return t;
		};
		return loginSkin$Skin196;
	})(eui.Skin);

	var loginSkin$Skin197 = 	(function (_super) {
		__extends(loginSkin$Skin197, _super);
		function loginSkin$Skin197() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = loginSkin$Skin197.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "txt_agree_policy_png";
			t.percentWidth = 100;
			return t;
		};
		return loginSkin$Skin197;
	})(eui.Skin);

	var loginSkin$Skin198 = 	(function (_super) {
		__extends(loginSkin$Skin198, _super);
		function loginSkin$Skin198() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = loginSkin$Skin198.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_register_png";
			t.percentWidth = 100;
			return t;
		};
		return loginSkin$Skin198;
	})(eui.Skin);

	var loginSkin$Skin199 = 	(function (_super) {
		__extends(loginSkin$Skin199, _super);
		function loginSkin$Skin199() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = loginSkin$Skin199.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_login_s_png";
			t.percentWidth = 100;
			return t;
		};
		return loginSkin$Skin199;
	})(eui.Skin);

	var loginSkin$Skin200 = 	(function (_super) {
		__extends(loginSkin$Skin200, _super);
		function loginSkin$Skin200() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = loginSkin$Skin200.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_login_wx_png";
			t.percentWidth = 100;
			return t;
		};
		return loginSkin$Skin200;
	})(eui.Skin);

	var loginSkin$Skin201 = 	(function (_super) {
		__extends(loginSkin$Skin201, _super);
		function loginSkin$Skin201() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = loginSkin$Skin201.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_login_acct_png";
			t.percentWidth = 100;
			return t;
		};
		return loginSkin$Skin201;
	})(eui.Skin);

	var loginSkin$Skin202 = 	(function (_super) {
		__extends(loginSkin$Skin202, _super);
		function loginSkin$Skin202() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = loginSkin$Skin202.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return loginSkin$Skin202;
	})(eui.Skin);

	var loginSkin$Skin203 = 	(function (_super) {
		__extends(loginSkin$Skin203, _super);
		function loginSkin$Skin203() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = loginSkin$Skin203.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return loginSkin$Skin203;
	})(eui.Skin);

	function loginSkin() {
		_super.call(this);
		this.skinParts = ["imgBG","txtLUserName","txtLPasswd","btnLogin","btnFastRegister","grpAccountLogin","txtRUserName","txtRNickName","txtRPasswd","txtRPasswd2","agreePolicy","btnAgreePolicy","btnRegister","btnReturnToLogin","grpRegister","btnWeixinLogin","btnAccountLogIn","grpFastLogin","btnGoBack","btnClose","txt_userPolicy","grpUserPolicy"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.imgBG_i(),this.grpAccountLogin_i(),this.grpRegister_i(),this.grpFastLogin_i(),this.grpUserPolicy_i()];
	}
	var _proto = loginSkin.prototype;

	_proto.imgBG_i = function () {
		var t = new eui.Image();
		this.imgBG = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(263,80,391,480);
		t.source = "login_s_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grpAccountLogin_i = function () {
		var t = new eui.Group();
		this.grpAccountLogin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 252;
		t.horizontalCenter = -77;
		t.verticalCenter = 56;
		t.width = 456;
		t.elementsContent = [this._Image1_i(),this.txtLUserName_i(),this._Image2_i(),this.txtLPasswd_i(),this.btnLogin_i(),this.btnFastRegister_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "unameIcon_png";
		t.top = 8;
		return t;
	};
	_proto.txtLUserName_i = function () {
		var t = new eui.TextInput();
		this.txtLUserName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.left = 50;
		t.prompt = "请输入账号";
		t.text = "";
		t.textColor = 0x000000;
		t.top = 0;
		t.width = 400;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "passwordIcon_png";
		t.top = 88;
		return t;
	};
	_proto.txtLPasswd_i = function () {
		var t = new eui.TextInput();
		this.txtLPasswd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.height = 70;
		t.left = 50;
		t.prompt = "请输入密码";
		t.scaleX = 1;
		t.text = "";
		t.textColor = 0x000000;
		t.top = 80;
		t.width = 400;
		return t;
	};
	_proto.btnLogin_i = function () {
		var t = new EButton();
		this.btnLogin = t;
		t.height = 75;
		t.left = 30;
		t.top = 180;
		t.width = 185;
		t.skinName = loginSkin$Skin195;
		return t;
	};
	_proto.btnFastRegister_i = function () {
		var t = new EButton();
		this.btnFastRegister = t;
		t.height = 55;
		t.right = 30;
		t.top = 195;
		t.width = 160;
		t.skinName = loginSkin$Skin196;
		return t;
	};
	_proto.grpRegister_i = function () {
		var t = new eui.Group();
		this.grpRegister = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 357;
		t.horizontalCenter = -80;
		t.verticalCenter = 57.5;
		t.visible = false;
		t.width = 450;
		t.elementsContent = [this._Image3_i(),this.txtRUserName_i(),this._Image4_i(),this.txtRNickName_i(),this._Image5_i(),this.txtRPasswd_i(),this._Image6_i(),this.txtRPasswd2_i(),this.agreePolicy_i(),this.btnAgreePolicy_i(),this.btnRegister_i(),this.btnReturnToLogin_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 15;
		t.source = "txt_account_png";
		t.top = 10;
		return t;
	};
	_proto.txtRUserName_i = function () {
		var t = new eui.TextInput();
		this.txtRUserName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 100;
		t.prompt = "请输入账号,2-20个字符";
		t.text = "";
		t.textColor = 0x000000;
		t.top = 0;
		t.width = 350;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 15;
		t.source = "txt_nickname_png";
		t.top = 65;
		return t;
	};
	_proto.txtRNickName_i = function () {
		var t = new eui.TextInput();
		this.txtRNickName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 100;
		t.prompt = "请输入昵称,2-20个字符";
		t.text = "";
		t.textColor = 0x000000;
		t.top = 55;
		t.width = 350;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 15;
		t.source = "txt_passwd_png";
		t.top = 170;
		return t;
	};
	_proto.txtRPasswd_i = function () {
		var t = new eui.TextInput();
		this.txtRPasswd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.height = 50;
		t.left = 100;
		t.prompt = "输入的密码,英文和数字";
		t.scaleX = 1;
		t.text = "";
		t.textColor = 0x000000;
		t.top = 110;
		t.width = 350;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 15;
		t.source = "txt_passwd_png";
		t.top = 120;
		return t;
	};
	_proto.txtRPasswd2_i = function () {
		var t = new eui.TextInput();
		this.txtRPasswd2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.height = 50;
		t.left = 100;
		t.prompt = "请再输一遍密码";
		t.scaleX = 1;
		t.text = "";
		t.textColor = 0x000000;
		t.top = 165;
		t.width = 350;
		return t;
	};
	_proto.agreePolicy_i = function () {
		var t = new eui.CheckBox();
		this.agreePolicy = t;
		t.left = 100;
		t.top = 225;
		return t;
	};
	_proto.btnAgreePolicy_i = function () {
		var t = new EButton();
		this.btnAgreePolicy = t;
		t.height = 30;
		t.left = 150;
		t.top = 230;
		t.width = 286;
		t.skinName = loginSkin$Skin197;
		return t;
	};
	_proto.btnRegister_i = function () {
		var t = new EButton();
		this.btnRegister = t;
		t.height = 75;
		t.left = 30;
		t.top = 280;
		t.width = 185;
		t.skinName = loginSkin$Skin198;
		return t;
	};
	_proto.btnReturnToLogin_i = function () {
		var t = new EButton();
		this.btnReturnToLogin = t;
		t.height = 55;
		t.right = 20;
		t.top = 300;
		t.width = 160;
		t.skinName = loginSkin$Skin199;
		return t;
	};
	_proto.grpFastLogin_i = function () {
		var t = new eui.Group();
		this.grpFastLogin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = -80;
		t.verticalCenter = 50;
		t.visible = false;
		t.width = 550;
		t.elementsContent = [this.btnWeixinLogin_i(),this.btnAccountLogIn_i()];
		return t;
	};
	_proto.btnWeixinLogin_i = function () {
		var t = new EButton();
		this.btnWeixinLogin = t;
		t.height = 85;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 218;
		t.skinName = loginSkin$Skin200;
		return t;
	};
	_proto.btnAccountLogIn_i = function () {
		var t = new EButton();
		this.btnAccountLogIn = t;
		t.height = 85;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 218;
		t.skinName = loginSkin$Skin201;
		return t;
	};
	_proto.grpUserPolicy_i = function () {
		var t = new eui.Group();
		this.grpUserPolicy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.horizontalCenter = -100;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 650;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.btnGoBack_i(),this.btnClose_i(),this._Scroller1_i(),this._Image9_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 480;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.width = 650;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 340;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.top = 100;
		t.width = 575;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 75;
		t.left = 15;
		t.top = 15;
		t.width = 75;
		t.skinName = loginSkin$Skin202;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 65;
		t.right = 15;
		t.top = 15;
		t.width = 65;
		t.skinName = loginSkin$Skin203;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 340;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 100;
		t.width = 575;
		t.y = 10;
		t.viewport = this.txt_userPolicy_i();
		return t;
	};
	_proto.txt_userPolicy_i = function () {
		var t = new eui.EditableText();
		this.txt_userPolicy = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 360;
		t.stroke = 0;
		t.strokeColor = 0xf7d71b;
		t.text = "用户协议";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 575;
		t.wordWrap = true;
		t.x = -10;
		t.y = -73;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "txt_user_policy_png";
		t.top = 15;
		return t;
	};
	return loginSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Qznn/QznnSeatUI.exml'] = window.QznnSeatUISkin = (function (_super) {
	__extends(QznnSeatUISkin, _super);
	function QznnSeatUISkin() {
		_super.call(this);
		this.skinParts = ["imgWinner","imgAvatar","labName","labChips","imgButtonSeat","imgUserReady","labLastAction"];
		
		this.height = 90;
		this.width = 195;
		this.elementsContent = [this._Image1_i(),this.imgWinner_i(),this.imgAvatar_i(),this.labName_i(),this.labChips_i(),this.imgButtonSeat_i(),this.imgUserReady_i(),this.labLastAction_i()];
	}
	var _proto = QznnSeatUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 90;
		t.left = 0;
		t.source = "avatar_hb_s_png";
		t.width = 195;
		return t;
	};
	_proto.imgWinner_i = function () {
		var t = new eui.Image();
		this.imgWinner = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "hprofile_winner_png";
		t.visible = false;
		t.width = 195;
		return t;
	};
	_proto.imgAvatar_i = function () {
		var t = new eui.Image();
		this.imgAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.horizontalCenter = -54.5;
		t.source = "avatar_man_png";
		t.verticalCenter = -3;
		t.width = 78;
		return t;
	};
	_proto.labName_i = function () {
		var t = new eui.Label();
		this.labName = t;
		t.anchorOffsetX = 0;
		t.bottom = 35;
		t.height = 30;
		t.right = 0;
		t.size = 18;
		t.text = "会飞的猪头肉";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto.labChips_i = function () {
		var t = new eui.Label();
		this.labChips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.height = 30;
		t.right = 0;
		t.size = 18;
		t.text = "10000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto.imgButtonSeat_i = function () {
		var t = new eui.Image();
		this.imgButtonSeat = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.height = 35;
		t.left = 25;
		t.source = "dealer_s_png";
		t.width = 35;
		return t;
	};
	_proto.imgUserReady_i = function () {
		var t = new eui.Image();
		this.imgUserReady = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.height = 30;
		t.left = 30;
		t.source = "user_ready_png";
		t.visible = false;
		t.width = 30;
		return t;
	};
	_proto.labLastAction_i = function () {
		var t = new eui.Label();
		this.labLastAction = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.right = 0;
		t.size = 18;
		t.text = "不抢";
		t.textAlign = "center";
		t.textColor = 0xf4d66e;
		t.top = 0;
		t.width = 120;
		return t;
	};
	return QznnSeatUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Qznn/QznnTable.exml'] = window.QznnTableSkin = (function (_super) {
	__extends(QznnTableSkin, _super);
	var QznnTableSkin$Skin204 = 	(function (_super) {
		__extends(QznnTableSkin$Skin204, _super);
		function QznnTableSkin$Skin204() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin204.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return QznnTableSkin$Skin204;
	})(eui.Skin);

	var QznnTableSkin$Skin205 = 	(function (_super) {
		__extends(QznnTableSkin$Skin205, _super);
		function QznnTableSkin$Skin205() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin205.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_scores_png";
			t.percentWidth = 100;
			return t;
		};
		return QznnTableSkin$Skin205;
	})(eui.Skin);

	var QznnTableSkin$Skin206 = 	(function (_super) {
		__extends(QznnTableSkin$Skin206, _super);
		function QznnTableSkin$Skin206() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin206.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_host_png";
			t.percentWidth = 100;
			return t;
		};
		return QznnTableSkin$Skin206;
	})(eui.Skin);

	var QznnTableSkin$Skin207 = 	(function (_super) {
		__extends(QznnTableSkin$Skin207, _super);
		function QznnTableSkin$Skin207() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin207.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_setting_png";
			t.percentWidth = 100;
			return t;
		};
		return QznnTableSkin$Skin207;
	})(eui.Skin);

	var QznnTableSkin$Skin208 = 	(function (_super) {
		__extends(QznnTableSkin$Skin208, _super);
		function QznnTableSkin$Skin208() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin208.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0x31750f;
			t.text = "有牛";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin208;
	})(eui.Skin);

	var QznnTableSkin$Skin209 = 	(function (_super) {
		__extends(QznnTableSkin$Skin209, _super);
		function QznnTableSkin$Skin209() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin209.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_fold_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xbc0003;
			t.text = "无牛";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin209;
	})(eui.Skin);

	var QznnTableSkin$Skin210 = 	(function (_super) {
		__extends(QznnTableSkin$Skin210, _super);
		function QznnTableSkin$Skin210() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin210.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0x31750f;
			t.text = "5倍";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin210;
	})(eui.Skin);

	var QznnTableSkin$Skin211 = 	(function (_super) {
		__extends(QznnTableSkin$Skin211, _super);
		function QznnTableSkin$Skin211() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin211.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0x31750f;
			t.text = "10倍";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin211;
	})(eui.Skin);

	var QznnTableSkin$Skin212 = 	(function (_super) {
		__extends(QznnTableSkin$Skin212, _super);
		function QznnTableSkin$Skin212() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin212.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0x31750f;
			t.text = "15倍";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin212;
	})(eui.Skin);

	var QznnTableSkin$Skin213 = 	(function (_super) {
		__extends(QznnTableSkin$Skin213, _super);
		function QznnTableSkin$Skin213() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin213.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0x31750f;
			t.text = "20倍";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin213;
	})(eui.Skin);

	var QznnTableSkin$Skin214 = 	(function (_super) {
		__extends(QznnTableSkin$Skin214, _super);
		function QznnTableSkin$Skin214() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin214.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0x31750f;
			t.text = "25倍";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin214;
	})(eui.Skin);

	var QznnTableSkin$Skin215 = 	(function (_super) {
		__extends(QznnTableSkin$Skin215, _super);
		function QznnTableSkin$Skin215() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin215.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0x437ddb;
			t.text = "不抢";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin215;
	})(eui.Skin);

	var QznnTableSkin$Skin216 = 	(function (_super) {
		__extends(QznnTableSkin$Skin216, _super);
		function QznnTableSkin$Skin216() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin216.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0x31750f;
			t.text = "1倍";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin216;
	})(eui.Skin);

	var QznnTableSkin$Skin217 = 	(function (_super) {
		__extends(QznnTableSkin$Skin217, _super);
		function QznnTableSkin$Skin217() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin217.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0x31750f;
			t.text = "2倍";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin217;
	})(eui.Skin);

	var QznnTableSkin$Skin218 = 	(function (_super) {
		__extends(QznnTableSkin$Skin218, _super);
		function QznnTableSkin$Skin218() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin218.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0x31750f;
			t.text = "3倍";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin218;
	})(eui.Skin);

	var QznnTableSkin$Skin219 = 	(function (_super) {
		__extends(QznnTableSkin$Skin219, _super);
		function QznnTableSkin$Skin219() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin219.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0x31750f;
			t.text = "4倍";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin219;
	})(eui.Skin);

	var QznnTableSkin$Skin220 = 	(function (_super) {
		__extends(QznnTableSkin$Skin220, _super);
		function QznnTableSkin$Skin220() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin220.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "提示";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin220;
	})(eui.Skin);

	var QznnTableSkin$Skin221 = 	(function (_super) {
		__extends(QznnTableSkin$Skin221, _super);
		function QznnTableSkin$Skin221() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin221.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "准备";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin221;
	})(eui.Skin);

	var QznnTableSkin$Skin222 = 	(function (_super) {
		__extends(QznnTableSkin$Skin222, _super);
		function QznnTableSkin$Skin222() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin222.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "开始匹配";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin222;
	})(eui.Skin);

	var QznnTableSkin$Skin223 = 	(function (_super) {
		__extends(QznnTableSkin$Skin223, _super);
		function QznnTableSkin$Skin223() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin223.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "邀请好友";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin223;
	})(eui.Skin);

	var QznnTableSkin$Skin224 = 	(function (_super) {
		__extends(QznnTableSkin$Skin224, _super);
		function QznnTableSkin$Skin224() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QznnTableSkin$Skin224.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = false;
			t.fontFamily = "微软雅黑";
			t.horizontalCenter = 0;
			t.size = 26;
			t.text = "取消托管";
			t.textColor = 0xFFFFFF;
			t.verticalCenter = 0;
			return t;
		};
		return QznnTableSkin$Skin224;
	})(eui.Skin);

	function QznnTableSkin() {
		_super.call(this);
		this.skinParts = ["btnGoBack","btnScores","labEntityId","grpEntityId","grpLeftTop","btnEnableHost","btnSetting","grpSetting","labRoundNums","grpPokersInHand","btnHasCow","btnHasntCow","grpSubmitPTControls","btnBet5x","btnBet10x","btnBet15x","btnBet20x","btnBet25x","grpPutBetsControls","btnNoCall","btnCall1x","btnCall2x","btnCall3x","btnCall4x","grpCallDealerControls","grpPokers_Seat2","grpPokers_Seat3","grpPokers_Seat4","grpPokers_Seat7","grpPokers_Seat6","grpPokers_Seat5","grpPokers_Seat8","grpPokers_Seat9","grpTimer","grpPokers_Seat1","btnCowTips","labSelPoker1","labSelPoker2","labSelPoker3","labPokersSum","grpCowCalc","grpProfile_Seat1","grpProfile_Seat6","grpProfile_Seat5","grpProfile_Seat2","grpProfile_Seat3","grpProfile_Seat4","grpProfile_Seat7","grpProfile_Seat8","grpProfile_Seat9","btnReady","btnGoMatching","btnInvite","grpReadyAndInvite","grpImgRes","imgHostBg","btnDisableHost","grpHost","grpDeck","grpSystemMessage","grpCenter"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.grpLeftTop_i(),this.grpSetting_i(),this.labRoundNums_i(),this.grpPokersInHand_i(),this.grpSubmitPTControls_i(),this.grpPutBetsControls_i(),this.grpCallDealerControls_i(),this.grpPokers_Seat2_i(),this.grpPokers_Seat3_i(),this.grpPokers_Seat4_i(),this.grpPokers_Seat7_i(),this.grpPokers_Seat6_i(),this.grpPokers_Seat5_i(),this.grpPokers_Seat8_i(),this.grpPokers_Seat9_i(),this.grpTimer_i(),this.grpPokers_Seat1_i(),this.grpCowCalc_i(),this.grpProfile_Seat1_i(),this.grpProfile_Seat6_i(),this.grpProfile_Seat5_i(),this.grpProfile_Seat2_i(),this.grpProfile_Seat3_i(),this.grpProfile_Seat4_i(),this.grpProfile_Seat7_i(),this.grpProfile_Seat8_i(),this.grpProfile_Seat9_i(),this.grpReadyAndInvite_i(),this.grpImgRes_i(),this.grpHost_i(),this.grpDeck_i(),this.grpSystemMessage_i(),this.grpCenter_i()];
	}
	var _proto = QznnTableSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(243,136,472,336);
		t.source = "qznntable_png";
		t.top = 0;
		return t;
	};
	_proto.grpLeftTop_i = function () {
		var t = new eui.Group();
		this.grpLeftTop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.top = 10;
		t.width = 430.67;
		t.elementsContent = [this.btnGoBack_i(),this.btnScores_i(),this.grpEntityId_i()];
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 75;
		t.left = 0;
		t.top = 0;
		t.width = 75;
		t.skinName = QznnTableSkin$Skin204;
		return t;
	};
	_proto.btnScores_i = function () {
		var t = new EButton();
		this.btnScores = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 100;
		t.verticalCenter = 0;
		t.width = 75;
		t.skinName = QznnTableSkin$Skin205;
		return t;
	};
	_proto.grpEntityId_i = function () {
		var t = new eui.Group();
		this.grpEntityId = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 200;
		t.top = 0;
		t.width = 230;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.labEntityId_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 90;
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.width = 140;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 24;
		t.text = "房间号:";
		t.textAlign = "left";
		t.textColor = 0xcec7b3;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 90;
		return t;
	};
	_proto.labEntityId_i = function () {
		var t = new eui.Label();
		this.labEntityId = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 100;
		t.size = 26;
		t.stroke = 3;
		t.text = "803832";
		t.textAlign = "left";
		t.textColor = 0xf4ba0c;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto.grpSetting_i = function () {
		var t = new eui.Group();
		this.grpSetting = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.right = 10;
		t.top = 10;
		t.width = 201.33;
		t.elementsContent = [this.btnEnableHost_i(),this.btnSetting_i()];
		return t;
	};
	_proto.btnEnableHost_i = function () {
		var t = new EButton();
		this.btnEnableHost = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.verticalCenter = 0.5;
		t.width = 75;
		t.skinName = QznnTableSkin$Skin206;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new EButton();
		this.btnSetting = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 75;
		t.skinName = QznnTableSkin$Skin207;
		return t;
	};
	_proto.labRoundNums_i = function () {
		var t = new eui.Label();
		this.labRoundNums = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x9d071a;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 180;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grpPokersInHand_i = function () {
		var t = new eui.Group();
		this.grpPokersInHand = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.height = 110;
		t.horizontalCenter = 0;
		t.width = 500;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grpSubmitPTControls_i = function () {
		var t = new eui.Group();
		this.grpSubmitPTControls = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.height = 150;
		t.horizontalCenter = 330.5;
		t.visible = false;
		t.width = 160;
		t.elementsContent = [this.btnHasCow_i(),this.btnHasntCow_i()];
		return t;
	};
	_proto.btnHasCow_i = function () {
		var t = new EButton();
		this.btnHasCow = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = -40;
		t.width = 130;
		t.skinName = QznnTableSkin$Skin208;
		return t;
	};
	_proto.btnHasntCow_i = function () {
		var t = new EButton();
		this.btnHasntCow = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = 40;
		t.width = 130;
		t.skinName = QznnTableSkin$Skin209;
		return t;
	};
	_proto.grpPutBetsControls_i = function () {
		var t = new eui.Group();
		this.grpPutBetsControls = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 140;
		t.height = 70;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 700;
		t.elementsContent = [this.btnBet5x_i(),this.btnBet10x_i(),this.btnBet15x_i(),this.btnBet20x_i(),this.btnBet25x_i()];
		return t;
	};
	_proto.btnBet5x_i = function () {
		var t = new EButton();
		this.btnBet5x = t;
		t.height = 65;
		t.left = 10;
		t.verticalCenter = 0;
		t.width = 120;
		t.skinName = QznnTableSkin$Skin210;
		return t;
	};
	_proto.btnBet10x_i = function () {
		var t = new EButton();
		this.btnBet10x = t;
		t.height = 65;
		t.left = 150;
		t.verticalCenter = 0;
		t.width = 120;
		t.skinName = QznnTableSkin$Skin211;
		return t;
	};
	_proto.btnBet15x_i = function () {
		var t = new EButton();
		this.btnBet15x = t;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 120;
		t.skinName = QznnTableSkin$Skin212;
		return t;
	};
	_proto.btnBet20x_i = function () {
		var t = new EButton();
		this.btnBet20x = t;
		t.height = 65;
		t.right = 145;
		t.verticalCenter = 0.5;
		t.width = 120;
		t.skinName = QznnTableSkin$Skin213;
		return t;
	};
	_proto.btnBet25x_i = function () {
		var t = new EButton();
		this.btnBet25x = t;
		t.height = 65;
		t.right = 5;
		t.verticalCenter = 0;
		t.width = 120;
		t.skinName = QznnTableSkin$Skin214;
		return t;
	};
	_proto.grpCallDealerControls_i = function () {
		var t = new eui.Group();
		this.grpCallDealerControls = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 140;
		t.height = 70;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 700;
		t.elementsContent = [this.btnNoCall_i(),this.btnCall1x_i(),this.btnCall2x_i(),this.btnCall3x_i(),this.btnCall4x_i()];
		return t;
	};
	_proto.btnNoCall_i = function () {
		var t = new EButton();
		this.btnNoCall = t;
		t.height = 65;
		t.left = 10;
		t.verticalCenter = 0;
		t.width = 120;
		t.skinName = QznnTableSkin$Skin215;
		return t;
	};
	_proto.btnCall1x_i = function () {
		var t = new EButton();
		this.btnCall1x = t;
		t.height = 65;
		t.left = 150;
		t.verticalCenter = 0;
		t.width = 120;
		t.skinName = QznnTableSkin$Skin216;
		return t;
	};
	_proto.btnCall2x_i = function () {
		var t = new EButton();
		this.btnCall2x = t;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 120;
		t.skinName = QznnTableSkin$Skin217;
		return t;
	};
	_proto.btnCall3x_i = function () {
		var t = new EButton();
		this.btnCall3x = t;
		t.height = 65;
		t.right = 145;
		t.verticalCenter = 0;
		t.width = 120;
		t.skinName = QznnTableSkin$Skin218;
		return t;
	};
	_proto.btnCall4x_i = function () {
		var t = new EButton();
		this.btnCall4x = t;
		t.height = 65;
		t.right = 5;
		t.verticalCenter = 0;
		t.width = 120;
		t.skinName = QznnTableSkin$Skin219;
		return t;
	};
	_proto.grpPokers_Seat2_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 220;
		t.height = 60;
		t.right = 220;
		t.width = 160;
		return t;
	};
	_proto.grpPokers_Seat3_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.right = 220;
		t.top = 295;
		t.width = 160;
		return t;
	};
	_proto.grpPokers_Seat4_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.right = 220;
		t.top = 150;
		t.width = 160;
		return t;
	};
	_proto.grpPokers_Seat7_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 220;
		t.top = 150;
		t.width = 160;
		return t;
	};
	_proto.grpPokers_Seat6_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 400;
		t.top = 150;
		t.width = 160;
		return t;
	};
	_proto.grpPokers_Seat5_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.right = 400;
		t.top = 150;
		t.width = 160;
		return t;
	};
	_proto.grpPokers_Seat8_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 220;
		t.top = 295;
		t.width = 160;
		return t;
	};
	_proto.grpPokers_Seat9_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 220;
		t.top = 440;
		t.width = 160;
		return t;
	};
	_proto.grpTimer_i = function () {
		var t = new eui.Group();
		this.grpTimer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 400;
		return t;
	};
	_proto.grpPokers_Seat1_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 155;
		t.height = 60;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.width = 140;
		return t;
	};
	_proto.grpCowCalc_i = function () {
		var t = new eui.Group();
		this.grpCowCalc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 155;
		t.height = 60;
		t.horizontalCenter = -4.5;
		t.visible = false;
		t.width = 480;
		t.elementsContent = [this.btnCowTips_i(),this._Image3_i(),this.labSelPoker1_i(),this.labSelPoker2_i(),this.labSelPoker3_i(),this.labPokersSum_i()];
		return t;
	};
	_proto.btnCowTips_i = function () {
		var t = new EButton();
		this.btnCowTips = t;
		t.height = 65;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 120;
		t.skinName = QznnTableSkin$Skin220;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.right = 0;
		t.source = "cow_calc_png";
		t.verticalCenter = 0;
		t.width = 335;
		return t;
	};
	_proto.labSelPoker1_i = function () {
		var t = new eui.Label();
		this.labSelPoker1 = t;
		t.bold = false;
		t.fontFamily = "微软雅黑";
		t.right = 290;
		t.size = 26;
		t.text = "5";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto.labSelPoker2_i = function () {
		var t = new eui.Label();
		this.labSelPoker2 = t;
		t.bold = false;
		t.fontFamily = "微软雅黑";
		t.right = 210;
		t.size = 26;
		t.text = "2";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto.labSelPoker3_i = function () {
		var t = new eui.Label();
		this.labSelPoker3 = t;
		t.bold = false;
		t.fontFamily = "微软雅黑";
		t.right = 130;
		t.size = 26;
		t.text = "3";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto.labPokersSum_i = function () {
		var t = new eui.Label();
		this.labPokersSum = t;
		t.bold = false;
		t.fontFamily = "微软雅黑";
		t.right = 30;
		t.size = 26;
		t.text = "10";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto.grpProfile_Seat1_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.height = 90;
		t.left = 50;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat6_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 380;
		t.top = 60;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat5_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.right = 380;
		t.top = 60;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat2_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 200;
		t.height = 90;
		t.right = 20;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat3_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.right = 20;
		t.top = 280;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat4_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.right = 20;
		t.top = 135;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat7_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 20;
		t.top = 135;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat8_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 20;
		t.top = 280;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat9_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 20;
		t.top = 430;
		t.width = 195;
		return t;
	};
	_proto.grpReadyAndInvite_i = function () {
		var t = new eui.Group();
		this.grpReadyAndInvite = t;
		t.anchorOffsetX = 0;
		t.bottom = 256;
		t.height = 130;
		t.horizontalCenter = -11.5;
		t.width = 600;
		t.elementsContent = [this.btnReady_i(),this.btnGoMatching_i(),this.btnInvite_i()];
		return t;
	};
	_proto.btnReady_i = function () {
		var t = new EButton();
		this.btnReady = t;
		t.height = 65;
		t.width = 180;
		t.x = 5;
		t.y = 25;
		t.skinName = QznnTableSkin$Skin221;
		return t;
	};
	_proto.btnGoMatching_i = function () {
		var t = new EButton();
		this.btnGoMatching = t;
		t.height = 65;
		t.width = 180;
		t.x = 200;
		t.y = 25;
		t.skinName = QznnTableSkin$Skin222;
		return t;
	};
	_proto.btnInvite_i = function () {
		var t = new EButton();
		this.btnInvite = t;
		t.height = 65;
		t.width = 180;
		t.x = 400;
		t.y = 25;
		t.skinName = QznnTableSkin$Skin223;
		return t;
	};
	_proto.grpImgRes_i = function () {
		var t = new eui.Group();
		this.grpImgRes = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.width = 400;
		return t;
	};
	_proto.grpHost_i = function () {
		var t = new eui.Group();
		this.grpHost = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.right = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.imgHostBg_i(),this.btnDisableHost_i()];
		return t;
	};
	_proto.imgHostBg_i = function () {
		var t = new eui.Image();
		this.imgHostBg = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto.btnDisableHost_i = function () {
		var t = new EButton();
		this.btnDisableHost = t;
		t.bottom = 20;
		t.height = 65;
		t.horizontalCenter = 0;
		t.width = 165;
		t.skinName = QznnTableSkin$Skin224;
		return t;
	};
	_proto.grpDeck_i = function () {
		var t = new eui.Group();
		this.grpDeck = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto.grpSystemMessage_i = function () {
		var t = new eui.Group();
		this.grpSystemMessage = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = -100;
		t.width = 600;
		return t;
	};
	_proto.grpCenter_i = function () {
		var t = new eui.Group();
		this.grpCenter = t;
		t.height = 5;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = -100;
		t.width = 5;
		return t;
	};
	return QznnTableSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Room/CreateRoom.exml'] = window.CreateRoomSkin = (function (_super) {
	__extends(CreateRoomSkin, _super);
	var CreateRoomSkin$Skin225 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin225, _super);
		function CreateRoomSkin$Skin225() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin225.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return CreateRoomSkin$Skin225;
	})(eui.Skin);

	var CreateRoomSkin$Skin226 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin226, _super);
		function CreateRoomSkin$Skin226() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin226.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return CreateRoomSkin$Skin226;
	})(eui.Skin);

	var CreateRoomSkin$Skin227 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin227, _super);
		function CreateRoomSkin$Skin227() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin227.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x5886c9;
			t.text = "创建房间";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return CreateRoomSkin$Skin227;
	})(eui.Skin);

	var CreateRoomSkin$Skin228 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin228, _super);
		function CreateRoomSkin$Skin228() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin228.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x5886c9;
			t.text = "创建房间";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return CreateRoomSkin$Skin228;
	})(eui.Skin);

	var CreateRoomSkin$Skin229 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin229, _super);
		function CreateRoomSkin$Skin229() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin229.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x5886c9;
			t.text = "创建房间";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return CreateRoomSkin$Skin229;
	})(eui.Skin);

	var CreateRoomSkin$Skin230 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin230, _super);
		function CreateRoomSkin$Skin230() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin230.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x5886c9;
			t.text = "创建房间";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return CreateRoomSkin$Skin230;
	})(eui.Skin);

	function CreateRoomSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","imgWinTitle","btnGoBack","btnClose","crRadioBtn","grpTabBtns","grpTabMenu","vsCreateRooms","grpCreateRooms","ddzBottomOpt1","ddzBottomOpt2","ddzBottomOpt3","ddzRoundsOpt1","ddzRoundsOpt2","ddzRoundsOpt3","ddzMinChipsOpt1","ddzMinChipsOpt2","ddzMinChipsOpt3","ddzChargingModeOpt1","labDdzRoomOwnerPrice","ddzChargingModeOpt2","labDdzRoomAAPrice","btnCreateDdzRoom","grpCreateDdzRoom","texasBottomOpt1","texasBottomOpt2","texasBottomOpt3","texasRoundsOpt1","texasRoundsOpt2","texasRoundsOpt3","texasMinChipsOpt1","texasMinChipsOpt2","texasMinChipsOpt3","texasMaxChipsOpt1","texasMaxChipsOpt2","texasMaxChipsOpt3","texasChargingModeOpt1","labTexasRoomOwnerPrice","texasChargingModeOpt2","labTexasRoomAAPrice","hsTexasCapacity","labTexasCapacity","btnCreateTexasRoom","grpCreateTexasRoom","qznnBottomOpt1","qznnBottomOpt2","qznnBottomOpt3","qznnRoundsOpt1","qznnRoundsOpt2","qznnRoundsOpt3","qznnMinChipsOpt1","qznnMinChipsOpt2","qznnMinChipsOpt3","qznnChargingModeOpt1","labQznnRoomOwnerPrice","qznnChargingModeOpt2","labQznnRoomAAPrice","hsQznnCapacity","labQznnCapacity","btnCreateQznnRoom","grpCreateQznnRoom","zjhBottomOpt1","zjhBottomOpt2","zjhBottomOpt3","zjhRoundsOpt1","zjhRoundsOpt2","zjhRoundsOpt3","zjhMinChipsOpt1","zjhMinChipsOpt2","zjhMinChipsOpt3","zjhMaxChipsOpt1","zjhMaxChipsOpt2","zjhMaxChipsOpt3","zjhChargingModeOpt1","labZjhRoomOwnerPrice","zjhChargingModeOpt2","labZjhRoomAAPrice","hsZjhCapacity","labZjhCapacity","btnCreateZjhRoom","grpCreateZjhRoom"];
		
		this.height = 600;
		this.width = 900;
		this.elementsContent = [this.imgWin_i(),this.imgWinTitle_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpTabMenu_i(),this.grpCreateRooms_i(),this.grpCreateDdzRoom_i(),this.grpCreateTexasRoom_i(),this.grpCreateQznnRoom_i(),this.grpCreateZjhRoom_i()];
	}
	var _proto = CreateRoomSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_b_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_createroom_png";
		t.top = 25;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = CreateRoomSkin$Skin225;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = CreateRoomSkin$Skin226;
		return t;
	};
	_proto.grpTabMenu_i = function () {
		var t = new eui.Group();
		this.grpTabMenu = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 20;
		t.top = 90;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this.grpTabBtns_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpTabBtns_i = function () {
		var t = new eui.Group();
		this.grpTabBtns = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.crRadioBtn_i(),this._RadioButton1_i(),this._RadioButton2_i(),this._RadioButton3_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.crRadioBtn_i = function () {
		var t = new eui.RadioButton();
		this.crRadioBtn = t;
		t.groupName = "tabCreateRoomBtns";
		t.horizontalCenter = 0;
		t.label = "斗地主";
		t.selected = true;
		t.skinName = "CRadioButtonSkin";
		t.value = "0";
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabCreateRoomBtns";
		t.horizontalCenter = 0;
		t.label = "德州扑克";
		t.skinName = "CRadioButtonSkin";
		t.value = "1";
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabCreateRoomBtns";
		t.horizontalCenter = 0;
		t.label = "抢庄牛牛";
		t.skinName = "CRadioButtonSkin";
		t.value = "2";
		return t;
	};
	_proto._RadioButton3_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabCreateRoomBtns";
		t.horizontalCenter = 0;
		t.label = "炸金花";
		t.skinName = "CRadioButtonSkin";
		t.value = "3";
		return t;
	};
	_proto.grpCreateRooms_i = function () {
		var t = new eui.Group();
		this.grpCreateRooms = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.width = 600;
		t.elementsContent = [this._Image2_i(),this.vsCreateRooms_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.vsCreateRooms_i = function () {
		var t = new eui.ViewStack();
		this.vsCreateRooms = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpCreateDdzRoom_i = function () {
		var t = new eui.Group();
		this.grpCreateDdzRoom = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 600;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.btnCreateDdzRoom_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 10;
		t.percentWidth = 100;
		t.elementsContent = [this._Image3_i(),this._Label1_i(),this.ddzBottomOpt1_i(),this.ddzBottomOpt2_i(),this.ddzBottomOpt3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "底分:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzBottomOpt1_i = function () {
		var t = new eui.RadioButton();
		this.ddzBottomOpt1 = t;
		t.groupName = "ddzBottomOpts";
		t.label = "1";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzBottomOpt2_i = function () {
		var t = new eui.RadioButton();
		this.ddzBottomOpt2 = t;
		t.groupName = "ddzBottomOpts";
		t.label = "2";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzBottomOpt3_i = function () {
		var t = new eui.RadioButton();
		this.ddzBottomOpt3 = t;
		t.groupName = "ddzBottomOpts";
		t.label = "3";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 80;
		t.percentWidth = 100;
		t.elementsContent = [this._Image4_i(),this._Label2_i(),this.ddzRoundsOpt1_i(),this.ddzRoundsOpt2_i(),this.ddzRoundsOpt3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "局数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzRoundsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.ddzRoundsOpt1 = t;
		t.groupName = "ddzRoundsOpts";
		t.label = "3";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzRoundsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.ddzRoundsOpt2 = t;
		t.groupName = "ddzRoundsOpts";
		t.label = "4";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzRoundsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.ddzRoundsOpt3 = t;
		t.groupName = "ddzRoundsOpts";
		t.label = "5";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 150;
		t.percentWidth = 100;
		t.elementsContent = [this._Image5_i(),this._Label3_i(),this.ddzMinChipsOpt1_i(),this.ddzMinChipsOpt2_i(),this.ddzMinChipsOpt3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "起始分:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzMinChipsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.ddzMinChipsOpt1 = t;
		t.groupName = "ddzMinChipsOpts";
		t.label = "5";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzMinChipsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.ddzMinChipsOpt2 = t;
		t.groupName = "ddzMinChipsOpts";
		t.label = "10";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzMinChipsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.ddzMinChipsOpt3 = t;
		t.groupName = "ddzMinChipsOpts";
		t.label = "20";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 0;
		t.top = 220;
		t.percentWidth = 100;
		t.elementsContent = [this._Image6_i(),this._Label4_i(),this.ddzChargingModeOpt1_i(),this._Image7_i(),this.labDdzRoomOwnerPrice_i(),this.ddzChargingModeOpt2_i(),this._Image8_i(),this.labDdzRoomAAPrice_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "房费:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzChargingModeOpt1_i = function () {
		var t = new eui.RadioButton();
		this.ddzChargingModeOpt1 = t;
		t.groupName = "ddzChargingModeOpts";
		t.label = "房主支付:";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.value = "OWNER";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 30;
		t.left = 270;
		t.source = "diamond_png";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto.labDdzRoomOwnerPrice_i = function () {
		var t = new eui.Label();
		this.labDdzRoomOwnerPrice = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 305;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "x4";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ddzChargingModeOpt2_i = function () {
		var t = new eui.RadioButton();
		this.ddzChargingModeOpt2 = t;
		t.groupName = "ddzChargingModeOpts";
		t.label = "AA支付:";
		t.left = 350;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.value = "AA";
		t.y = 5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 30;
		t.left = 490;
		t.source = "diamond_png";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto.labDdzRoomAAPrice_i = function () {
		var t = new eui.Label();
		this.labDdzRoomAAPrice = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 530;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "x1";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnCreateDdzRoom_i = function () {
		var t = new EButton();
		this.btnCreateDdzRoom = t;
		t.bottom = 20;
		t.height = 57;
		t.right = 30;
		t.width = 160;
		t.skinName = CreateRoomSkin$Skin227;
		return t;
	};
	_proto.grpCreateTexasRoom_i = function () {
		var t = new eui.Group();
		this.grpCreateTexasRoom = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 600;
		t.elementsContent = [this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this.btnCreateTexasRoom_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 10;
		t.percentWidth = 100;
		t.elementsContent = [this._Image9_i(),this._Label5_i(),this.texasBottomOpt1_i(),this.texasBottomOpt2_i(),this.texasBottomOpt3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "盲注:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasBottomOpt1_i = function () {
		var t = new eui.RadioButton();
		this.texasBottomOpt1 = t;
		t.groupName = "texasBottomOpts";
		t.label = "1/2";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasBottomOpt2_i = function () {
		var t = new eui.RadioButton();
		this.texasBottomOpt2 = t;
		t.groupName = "texasBottomOpts";
		t.label = "2/4";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasBottomOpt3_i = function () {
		var t = new eui.RadioButton();
		this.texasBottomOpt3 = t;
		t.groupName = "texasBottomOpts";
		t.label = "3/6";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 70;
		t.percentWidth = 100;
		t.elementsContent = [this._Image10_i(),this._Label6_i(),this.texasRoundsOpt1_i(),this.texasRoundsOpt2_i(),this.texasRoundsOpt3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "局数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasRoundsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.texasRoundsOpt1 = t;
		t.groupName = "texasRoundsOpts";
		t.label = "3";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasRoundsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.texasRoundsOpt2 = t;
		t.groupName = "texasRoundsOpts";
		t.label = "4";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasRoundsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.texasRoundsOpt3 = t;
		t.groupName = "texasRoundsOpts";
		t.label = "5";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 130;
		t.percentWidth = 100;
		t.elementsContent = [this._Image11_i(),this._Label7_i(),this.texasMinChipsOpt1_i(),this.texasMinChipsOpt2_i(),this.texasMinChipsOpt3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "最小带入:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasMinChipsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.texasMinChipsOpt1 = t;
		t.groupName = "texasMinChipsOpts";
		t.label = "5";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasMinChipsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.texasMinChipsOpt2 = t;
		t.groupName = "texasMinChipsOpts";
		t.label = "10";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasMinChipsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.texasMinChipsOpt3 = t;
		t.groupName = "texasMinChipsOpts";
		t.label = "20";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 190;
		t.percentWidth = 100;
		t.elementsContent = [this._Image12_i(),this._Label8_i(),this.texasMaxChipsOpt1_i(),this.texasMaxChipsOpt2_i(),this.texasMaxChipsOpt3_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "最大带入:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasMaxChipsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.texasMaxChipsOpt1 = t;
		t.groupName = "texasMaxChipsOpts";
		t.label = "10";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasMaxChipsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.texasMaxChipsOpt2 = t;
		t.groupName = "texasMaxChipsOpts";
		t.label = "20";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasMaxChipsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.texasMaxChipsOpt3 = t;
		t.groupName = "texasMaxChipsOpts";
		t.label = "40";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 0;
		t.top = 260;
		t.percentWidth = 100;
		t.elementsContent = [this._Image13_i(),this._Label9_i(),this.texasChargingModeOpt1_i(),this._Image14_i(),this.labTexasRoomOwnerPrice_i(),this.texasChargingModeOpt2_i(),this._Image15_i(),this.labTexasRoomAAPrice_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "房费:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasChargingModeOpt1_i = function () {
		var t = new eui.RadioButton();
		this.texasChargingModeOpt1 = t;
		t.groupName = "texasChargingModeOpts";
		t.label = "房主支付:";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.value = "OWNER";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 30;
		t.left = 270;
		t.source = "diamond_png";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto.labTexasRoomOwnerPrice_i = function () {
		var t = new eui.Label();
		this.labTexasRoomOwnerPrice = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 305;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "x4";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.texasChargingModeOpt2_i = function () {
		var t = new eui.RadioButton();
		this.texasChargingModeOpt2 = t;
		t.groupName = "texasChargingModeOpts";
		t.label = "AA支付:";
		t.left = 350;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.value = "AA";
		t.y = 5;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 30;
		t.left = 490;
		t.source = "diamond_png";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto.labTexasRoomAAPrice_i = function () {
		var t = new eui.Label();
		this.labTexasRoomAAPrice = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 530;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "x1";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 320;
		t.percentWidth = 100;
		t.elementsContent = [this._Image16_i(),this._Label10_i(),this.hsTexasCapacity_i(),this.labTexasCapacity_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "人数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.hsTexasCapacity_i = function () {
		var t = new eui.HSlider();
		this.hsTexasCapacity = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.left = 305;
		t.skinName = "CHSliderSkin";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto.labTexasCapacity_i = function () {
		var t = new eui.Label();
		this.labTexasCapacity = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.right = 30;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto.btnCreateTexasRoom_i = function () {
		var t = new EButton();
		this.btnCreateTexasRoom = t;
		t.bottom = 20;
		t.height = 57;
		t.right = 30;
		t.width = 160;
		t.skinName = CreateRoomSkin$Skin228;
		return t;
	};
	_proto.grpCreateQznnRoom_i = function () {
		var t = new eui.Group();
		this.grpCreateQznnRoom = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 600;
		t.elementsContent = [this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i(),this._Group15_i(),this.btnCreateQznnRoom_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 10;
		t.percentWidth = 100;
		t.elementsContent = [this._Image17_i(),this._Label11_i(),this.qznnBottomOpt1_i(),this.qznnBottomOpt2_i(),this.qznnBottomOpt3_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "底分:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnBottomOpt1_i = function () {
		var t = new eui.RadioButton();
		this.qznnBottomOpt1 = t;
		t.groupName = "qznnBottomOpts";
		t.label = "1";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnBottomOpt2_i = function () {
		var t = new eui.RadioButton();
		this.qznnBottomOpt2 = t;
		t.groupName = "qznnBottomOpts";
		t.label = "2";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnBottomOpt3_i = function () {
		var t = new eui.RadioButton();
		this.qznnBottomOpt3 = t;
		t.groupName = "qznnBottomOpts";
		t.label = "3";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 80;
		t.percentWidth = 100;
		t.elementsContent = [this._Image18_i(),this._Label12_i(),this.qznnRoundsOpt1_i(),this.qznnRoundsOpt2_i(),this.qznnRoundsOpt3_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "局数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnRoundsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.qznnRoundsOpt1 = t;
		t.groupName = "qznnRoundsOpts";
		t.label = "3";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnRoundsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.qznnRoundsOpt2 = t;
		t.groupName = "qznnRoundsOpts";
		t.label = "4";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnRoundsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.qznnRoundsOpt3 = t;
		t.groupName = "qznnRoundsOpts";
		t.label = "15";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 150;
		t.percentWidth = 100;
		t.elementsContent = [this._Image19_i(),this._Label13_i(),this.qznnMinChipsOpt1_i(),this.qznnMinChipsOpt2_i(),this.qznnMinChipsOpt3_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "最小带入:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnMinChipsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.qznnMinChipsOpt1 = t;
		t.groupName = "qznnMinChipsOpts";
		t.label = "5";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnMinChipsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.qznnMinChipsOpt2 = t;
		t.groupName = "qznnMinChipsOpts";
		t.label = "10";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnMinChipsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.qznnMinChipsOpt3 = t;
		t.groupName = "qznnMinChipsOpts";
		t.label = "20";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 0;
		t.top = 220;
		t.percentWidth = 100;
		t.elementsContent = [this._Image20_i(),this._Label14_i(),this.qznnChargingModeOpt1_i(),this._Image21_i(),this.labQznnRoomOwnerPrice_i(),this.qznnChargingModeOpt2_i(),this._Image22_i(),this.labQznnRoomAAPrice_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "房费:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnChargingModeOpt1_i = function () {
		var t = new eui.RadioButton();
		this.qznnChargingModeOpt1 = t;
		t.groupName = "qznnChargingModeOpts";
		t.label = "房主支付:";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.value = "OWNER";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 30;
		t.left = 270;
		t.source = "diamond_png";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto.labQznnRoomOwnerPrice_i = function () {
		var t = new eui.Label();
		this.labQznnRoomOwnerPrice = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 305;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "x4";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.qznnChargingModeOpt2_i = function () {
		var t = new eui.RadioButton();
		this.qznnChargingModeOpt2 = t;
		t.groupName = "qznnChargingModeOpts";
		t.label = "AA支付:";
		t.left = 350;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.value = "AA";
		t.y = 5;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 30;
		t.left = 490;
		t.source = "diamond_png";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto.labQznnRoomAAPrice_i = function () {
		var t = new eui.Label();
		this.labQznnRoomAAPrice = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 530;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "x1";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 290;
		t.percentWidth = 100;
		t.elementsContent = [this._Image23_i(),this._Label15_i(),this.hsQznnCapacity_i(),this.labQznnCapacity_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "人数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.hsQznnCapacity_i = function () {
		var t = new eui.HSlider();
		this.hsQznnCapacity = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.left = 305;
		t.skinName = "CHSliderSkin";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto.labQznnCapacity_i = function () {
		var t = new eui.Label();
		this.labQznnCapacity = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.right = 30;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto.btnCreateQznnRoom_i = function () {
		var t = new EButton();
		this.btnCreateQznnRoom = t;
		t.bottom = 20;
		t.height = 57;
		t.right = 30;
		t.width = 160;
		t.skinName = CreateRoomSkin$Skin229;
		return t;
	};
	_proto.grpCreateZjhRoom_i = function () {
		var t = new eui.Group();
		this.grpCreateZjhRoom = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 600;
		t.elementsContent = [this._Group16_i(),this._Group17_i(),this._Group18_i(),this._Group19_i(),this._Group20_i(),this._Group21_i(),this.btnCreateZjhRoom_i()];
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 10;
		t.percentWidth = 100;
		t.elementsContent = [this._Image24_i(),this._Label16_i(),this.zjhBottomOpt1_i(),this.zjhBottomOpt2_i(),this.zjhBottomOpt3_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "盲注:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhBottomOpt1_i = function () {
		var t = new eui.RadioButton();
		this.zjhBottomOpt1 = t;
		t.groupName = "zjhBottomOpts";
		t.label = "1";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhBottomOpt2_i = function () {
		var t = new eui.RadioButton();
		this.zjhBottomOpt2 = t;
		t.groupName = "zjhBottomOpts";
		t.label = "2";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhBottomOpt3_i = function () {
		var t = new eui.RadioButton();
		this.zjhBottomOpt3 = t;
		t.groupName = "zjhBottomOpts";
		t.label = "3";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 70;
		t.percentWidth = 100;
		t.elementsContent = [this._Image25_i(),this._Label17_i(),this.zjhRoundsOpt1_i(),this.zjhRoundsOpt2_i(),this.zjhRoundsOpt3_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "局数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhRoundsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.zjhRoundsOpt1 = t;
		t.groupName = "zjhRoundsOpts";
		t.label = "3";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhRoundsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.zjhRoundsOpt2 = t;
		t.groupName = "zjhRoundsOpts";
		t.label = "4";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhRoundsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.zjhRoundsOpt3 = t;
		t.groupName = "zjhRoundsOpts";
		t.label = "5";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 130;
		t.percentWidth = 100;
		t.elementsContent = [this._Image26_i(),this._Label18_i(),this.zjhMinChipsOpt1_i(),this.zjhMinChipsOpt2_i(),this.zjhMinChipsOpt3_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "最小带入:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhMinChipsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.zjhMinChipsOpt1 = t;
		t.groupName = "zjhMinChipsOpts";
		t.label = "5";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhMinChipsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.zjhMinChipsOpt2 = t;
		t.groupName = "zjhMinChipsOpts";
		t.label = "10";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhMinChipsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.zjhMinChipsOpt3 = t;
		t.groupName = "zjhMinChipsOpts";
		t.label = "20";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 190;
		t.percentWidth = 100;
		t.elementsContent = [this._Image27_i(),this._Label19_i(),this.zjhMaxChipsOpt1_i(),this.zjhMaxChipsOpt2_i(),this.zjhMaxChipsOpt3_i()];
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "最大带入:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhMaxChipsOpt1_i = function () {
		var t = new eui.RadioButton();
		this.zjhMaxChipsOpt1 = t;
		t.groupName = "zjhMaxChipsOpts";
		t.label = "10";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhMaxChipsOpt2_i = function () {
		var t = new eui.RadioButton();
		this.zjhMaxChipsOpt2 = t;
		t.groupName = "zjhMaxChipsOpts";
		t.label = "20";
		t.left = 255;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhMaxChipsOpt3_i = function () {
		var t = new eui.RadioButton();
		this.zjhMaxChipsOpt3 = t;
		t.groupName = "zjhMaxChipsOpts";
		t.label = "40";
		t.left = 390;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 0;
		t.top = 260;
		t.percentWidth = 100;
		t.elementsContent = [this._Image28_i(),this._Label20_i(),this.zjhChargingModeOpt1_i(),this._Image29_i(),this.labZjhRoomOwnerPrice_i(),this.zjhChargingModeOpt2_i(),this._Image30_i(),this.labZjhRoomAAPrice_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "房费:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhChargingModeOpt1_i = function () {
		var t = new eui.RadioButton();
		this.zjhChargingModeOpt1 = t;
		t.groupName = "zjhChargingModeOpts";
		t.label = "房主支付:";
		t.left = 115;
		t.selected = true;
		t.skinName = "TRadioButtonSkin";
		t.value = "OWNER";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 30;
		t.left = 270;
		t.source = "diamond_png";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto.labZjhRoomOwnerPrice_i = function () {
		var t = new eui.Label();
		this.labZjhRoomOwnerPrice = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 305;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "x4";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zjhChargingModeOpt2_i = function () {
		var t = new eui.RadioButton();
		this.zjhChargingModeOpt2 = t;
		t.groupName = "zjhChargingModeOpts";
		t.label = "AA支付:";
		t.left = 350;
		t.selected = false;
		t.skinName = "TRadioButtonSkin";
		t.value = "AA";
		t.y = 5;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 30;
		t.left = 490;
		t.source = "diamond_png";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto.labZjhRoomAAPrice_i = function () {
		var t = new eui.Label();
		this.labZjhRoomAAPrice = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 530;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "x1";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.top = 320;
		t.percentWidth = 100;
		t.elementsContent = [this._Image31_i(),this._Label21_i(),this.hsZjhCapacity_i(),this.labZjhCapacity_i()];
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.height = 1;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "人数:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.hsZjhCapacity_i = function () {
		var t = new eui.HSlider();
		this.hsZjhCapacity = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.left = 305;
		t.skinName = "CHSliderSkin";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto.labZjhCapacity_i = function () {
		var t = new eui.Label();
		this.labZjhCapacity = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.right = 30;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto.btnCreateZjhRoom_i = function () {
		var t = new EButton();
		this.btnCreateZjhRoom = t;
		t.bottom = 20;
		t.height = 57;
		t.right = 30;
		t.width = 160;
		t.skinName = CreateRoomSkin$Skin230;
		return t;
	};
	return CreateRoomSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Room/Invite.exml'] = window.InviteSkin = (function (_super) {
	__extends(InviteSkin, _super);
	var InviteSkin$Skin231 = 	(function (_super) {
		__extends(InviteSkin$Skin231, _super);
		function InviteSkin$Skin231() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InviteSkin$Skin231.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return InviteSkin$Skin231;
	})(eui.Skin);

	var InviteSkin$Skin232 = 	(function (_super) {
		__extends(InviteSkin$Skin232, _super);
		function InviteSkin$Skin232() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InviteSkin$Skin232.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return InviteSkin$Skin232;
	})(eui.Skin);

	function InviteSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","grpQrCode","labUrl","grpUrl","labEntityId","grpEntityId","grpShare"];
		
		this.height = 550;
		this.width = 600;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpShare_i()];
	}
	var _proto = InviteSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(73,79,444,278);
		t.source = "win_s_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_invite_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = InviteSkin$Skin231;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = InviteSkin$Skin232;
		return t;
	};
	_proto.grpShare_i = function () {
		var t = new eui.Group();
		this.grpShare = t;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.horizontalCenter = 0.5;
		t.top = 90;
		t.percentWidth = 90;
		t.elementsContent = [this._Image2_i(),this._Rect1_i(),this.grpQrCode_i(),this.grpUrl_i(),this.grpEntityId_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 400;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.height = 250;
		t.horizontalCenter = 1;
		t.top = 10;
		t.percentWidth = 85;
		return t;
	};
	_proto.grpQrCode_i = function () {
		var t = new eui.Group();
		this.grpQrCode = t;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.top = 10;
		t.width = 400;
		return t;
	};
	_proto.grpUrl_i = function () {
		var t = new eui.Group();
		this.grpUrl = t;
		t.anchorOffsetY = 0;
		t.bottom = 70;
		t.height = 60;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image3_i(),this._Label1_i(),this.labUrl_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 80;
		t.scale9Grid = new egret.Rectangle(89,4,540,29);
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 28;
		t.text = "Url:";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 70;
		return t;
	};
	_proto.labUrl_i = function () {
		var t = new eui.Label();
		this.labUrl = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 20;
		t.stroke = 3;
		t.text = "http://290.93.102.38:8080/?rid=938374";
		t.textAlign = "center";
		t.textColor = 0xF4BA0C;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto.grpEntityId_i = function () {
		var t = new eui.Group();
		this.grpEntityId = t;
		t.anchorOffsetY = 0;
		t.bottom = 10;
		t.height = 60;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image4_i(),this._Label2_i(),this.labEntityId_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.horizontalCenter = 90;
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.width = 220;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = -106.5;
		t.size = 32;
		t.text = "房间号:";
		t.textAlign = "right";
		t.textColor = 0xcec7b3;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 140;
		return t;
	};
	_proto.labEntityId_i = function () {
		var t = new eui.Label();
		this.labEntityId = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 90;
		t.size = 36;
		t.stroke = 3;
		t.text = "803832";
		t.textAlign = "left";
		t.textColor = 0xf4ba0c;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 220;
		return t;
	};
	return InviteSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Room/JoinRoom.exml'] = window.JoinRoomSkin = (function (_super) {
	__extends(JoinRoomSkin, _super);
	var JoinRoomSkin$Skin233 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin233, _super);
		function JoinRoomSkin$Skin233() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin233.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return JoinRoomSkin$Skin233;
	})(eui.Skin);

	var JoinRoomSkin$Skin234 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin234, _super);
		function JoinRoomSkin$Skin234() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin234.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return JoinRoomSkin$Skin234;
	})(eui.Skin);

	var JoinRoomSkin$Skin235 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin235, _super);
		function JoinRoomSkin$Skin235() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin235.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin235;
	})(eui.Skin);

	var JoinRoomSkin$Skin236 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin236, _super);
		function JoinRoomSkin$Skin236() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin236.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "9_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin236;
	})(eui.Skin);

	var JoinRoomSkin$Skin237 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin237, _super);
		function JoinRoomSkin$Skin237() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin237.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "8_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin237;
	})(eui.Skin);

	var JoinRoomSkin$Skin238 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin238, _super);
		function JoinRoomSkin$Skin238() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin238.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "4_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin238;
	})(eui.Skin);

	var JoinRoomSkin$Skin239 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin239, _super);
		function JoinRoomSkin$Skin239() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin239.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "7_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin239;
	})(eui.Skin);

	var JoinRoomSkin$Skin240 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin240, _super);
		function JoinRoomSkin$Skin240() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin240.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "5_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin240;
	})(eui.Skin);

	var JoinRoomSkin$Skin241 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin241, _super);
		function JoinRoomSkin$Skin241() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin241.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "6_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin241;
	})(eui.Skin);

	var JoinRoomSkin$Skin242 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin242, _super);
		function JoinRoomSkin$Skin242() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin242.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "3_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin242;
	})(eui.Skin);

	var JoinRoomSkin$Skin243 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin243, _super);
		function JoinRoomSkin$Skin243() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin243.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin243;
	})(eui.Skin);

	var JoinRoomSkin$Skin244 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin244, _super);
		function JoinRoomSkin$Skin244() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin244.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin244;
	})(eui.Skin);

	var JoinRoomSkin$Skin245 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin245, _super);
		function JoinRoomSkin$Skin245() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin245.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "retype_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin245;
	})(eui.Skin);

	var JoinRoomSkin$Skin246 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin246, _super);
		function JoinRoomSkin$Skin246() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin246.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "delete_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin246;
	})(eui.Skin);

	function JoinRoomSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","ebtn_group_number","lb0","lb1","lb2","lb3","lb4","lb5","grpJoinRoom"];
		
		this.height = 550;
		this.width = 650;
		this.elementsContent = [this.imgWin_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpJoinRoom_i()];
	}
	var _proto = JoinRoomSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 10;
		t.top = 10;
		t.width = 55;
		t.skinName = JoinRoomSkin$Skin233;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 10;
		t.top = 8;
		t.width = 55;
		t.skinName = JoinRoomSkin$Skin234;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_joinroom_png";
		t.top = 20;
		return t;
	};
	_proto.grpJoinRoom_i = function () {
		var t = new eui.Group();
		this.grpJoinRoom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 455;
		t.horizontalCenter = -13;
		t.verticalCenter = 20;
		t.width = 528;
		t.elementsContent = [this._Image1_i(),this.ebtn_group_number_i(),this._Group7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.ebtn_group_number_i = function () {
		var t = new eui.Group();
		this.ebtn_group_number = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 350.24;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 110;
		t.width = 403.66;
		t.elementsContent = [this._EButton1_i(),this._EButton2_i(),this._EButton3_i(),this._EButton4_i(),this._EButton5_i(),this._EButton6_i(),this._EButton7_i(),this._EButton8_i(),this._EButton9_i(),this._EButton10_i(),this._EButton11_i(),this._EButton12_i()];
		return t;
	};
	_proto._EButton1_i = function () {
		var t = new EButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.label = "1";
		t.left = 0;
		t.name = "1";
		t.width = 134;
		t.y = 9;
		t.skinName = JoinRoomSkin$Skin235;
		return t;
	};
	_proto._EButton2_i = function () {
		var t = new EButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 268;
		t.name = "9";
		t.width = 134;
		t.x = 10;
		t.y = 170;
		t.skinName = JoinRoomSkin$Skin236;
		return t;
	};
	_proto._EButton3_i = function () {
		var t = new EButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 134;
		t.name = "8";
		t.width = 134;
		t.x = 20;
		t.y = 171.33;
		t.skinName = JoinRoomSkin$Skin237;
		return t;
	};
	_proto._EButton4_i = function () {
		var t = new EButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 0;
		t.name = "4";
		t.width = 134;
		t.x = 30;
		t.y = 90;
		t.skinName = JoinRoomSkin$Skin238;
		return t;
	};
	_proto._EButton5_i = function () {
		var t = new EButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 0;
		t.name = "7";
		t.width = 134;
		t.x = 40;
		t.y = 171;
		t.skinName = JoinRoomSkin$Skin239;
		return t;
	};
	_proto._EButton6_i = function () {
		var t = new EButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 134;
		t.name = "5";
		t.width = 134;
		t.x = 50;
		t.y = 89;
		t.skinName = JoinRoomSkin$Skin240;
		return t;
	};
	_proto._EButton7_i = function () {
		var t = new EButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 268;
		t.name = "6";
		t.width = 134;
		t.x = 60;
		t.y = 89;
		t.skinName = JoinRoomSkin$Skin241;
		return t;
	};
	_proto._EButton8_i = function () {
		var t = new EButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 268;
		t.name = "3";
		t.width = 134;
		t.x = 70;
		t.y = 10;
		t.skinName = JoinRoomSkin$Skin242;
		return t;
	};
	_proto._EButton9_i = function () {
		var t = new EButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.label = "2";
		t.left = 134;
		t.name = "2";
		t.width = 134;
		t.x = 80;
		t.y = 10;
		t.skinName = JoinRoomSkin$Skin243;
		return t;
	};
	_proto._EButton10_i = function () {
		var t = new EButton();
		t.height = 78;
		t.name = "0";
		t.width = 134;
		t.x = 134;
		t.y = 256.12;
		t.skinName = JoinRoomSkin$Skin244;
		return t;
	};
	_proto._EButton11_i = function () {
		var t = new EButton();
		t.height = 78;
		t.name = "del2";
		t.width = 134;
		t.x = 268;
		t.y = 255.12;
		t.skinName = JoinRoomSkin$Skin245;
		return t;
	};
	_proto._EButton12_i = function () {
		var t = new EButton();
		t.height = 78;
		t.name = "del1";
		t.width = 134;
		t.x = 0;
		t.y = 255.12;
		t.skinName = JoinRoomSkin$Skin246;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116.18;
		t.horizontalCenter = 4.5;
		t.width = 497.39;
		t.y = 3.91;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 74;
		t.verticalCenter = 0;
		t.width = 74;
		t.x = 16;
		t.elementsContent = [this._Image2_i(),this.lb0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "circle_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lb0_i = function () {
		var t = new eui.Label();
		this.lb0 = t;
		t.horizontalCenter = 0;
		t.text = "-";
		t.textColor = 0xdd1a1a;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 74;
		t.verticalCenter = 0;
		t.width = 74;
		t.x = 100;
		t.elementsContent = [this._Image3_i(),this.lb1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "circle_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lb1_i = function () {
		var t = new eui.Label();
		this.lb1 = t;
		t.horizontalCenter = 0;
		t.text = "-";
		t.textColor = 0xDD1A1A;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 74;
		t.verticalCenter = 0;
		t.width = 74;
		t.x = 180;
		t.elementsContent = [this._Image4_i(),this.lb2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "circle_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lb2_i = function () {
		var t = new eui.Label();
		this.lb2 = t;
		t.horizontalCenter = 0;
		t.text = "-";
		t.textColor = 0xDD1A1A;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 74;
		t.verticalCenter = 0;
		t.width = 74;
		t.x = 260;
		t.elementsContent = [this._Image5_i(),this.lb3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "circle_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lb3_i = function () {
		var t = new eui.Label();
		this.lb3 = t;
		t.horizontalCenter = 0;
		t.text = "-";
		t.textColor = 0xDD1A1A;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 74;
		t.verticalCenter = 0;
		t.width = 74;
		t.x = 340;
		t.elementsContent = [this._Image6_i(),this.lb4_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "circle_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lb4_i = function () {
		var t = new eui.Label();
		this.lb4 = t;
		t.horizontalCenter = 0;
		t.text = "-";
		t.textColor = 0xDD1A1A;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 74;
		t.verticalCenter = 0;
		t.width = 74;
		t.x = 420;
		t.elementsContent = [this._Image7_i(),this.lb5_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "circle_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lb5_i = function () {
		var t = new eui.Label();
		this.lb5 = t;
		t.horizontalCenter = 0;
		t.text = "-";
		t.textColor = 0xDD1A1A;
		t.verticalCenter = 0;
		return t;
	};
	return JoinRoomSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Setting/Setting.exml'] = window.SettingSkin = (function (_super) {
	__extends(SettingSkin, _super);
	var SettingSkin$Skin247 = 	(function (_super) {
		__extends(SettingSkin$Skin247, _super);
		function SettingSkin$Skin247() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SettingSkin$Skin247.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return SettingSkin$Skin247;
	})(eui.Skin);

	var SettingSkin$Skin248 = 	(function (_super) {
		__extends(SettingSkin$Skin248, _super);
		function SettingSkin$Skin248() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SettingSkin$Skin248.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return SettingSkin$Skin248;
	})(eui.Skin);

	function SettingSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","btnMusicBg","btnMusicEffect","grpSetting"];
		
		this.height = 400;
		this.width = 550;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpSetting_i()];
	}
	var _proto = SettingSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_s_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_setting_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = SettingSkin$Skin247;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = SettingSkin$Skin248;
		return t;
	};
	_proto.grpSetting_i = function () {
		var t = new eui.Group();
		this.grpSetting = t;
		t.anchorOffsetY = 0;
		t.height = 280;
		t.horizontalCenter = 0;
		t.top = 85;
		t.percentWidth = 90;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 10;
		t.top = 30;
		t.percentWidth = 45;
		t.elementsContent = [this._Label1_i(),this.btnMusicBg_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "音乐:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnMusicBg_i = function () {
		var t = new CToggleSwitch();
		this.btnMusicBg = t;
		t.left = 100;
		t.skinName = "CToggleSwitchSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.right = 10;
		t.percentWidth = 45;
		t.y = 30;
		t.elementsContent = [this._Label2_i(),this.btnMusicEffect_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "音效:";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnMusicEffect_i = function () {
		var t = new CToggleSwitch();
		this.btnMusicEffect = t;
		t.left = 100;
		t.skinName = "CToggleSwitchSkin";
		t.verticalCenter = 0;
		return t;
	};
	return SettingSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Share/Share.exml'] = window.ShareSkin = (function (_super) {
	__extends(ShareSkin, _super);
	var ShareSkin$Skin249 = 	(function (_super) {
		__extends(ShareSkin$Skin249, _super);
		function ShareSkin$Skin249() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareSkin$Skin249.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return ShareSkin$Skin249;
	})(eui.Skin);

	var ShareSkin$Skin250 = 	(function (_super) {
		__extends(ShareSkin$Skin250, _super);
		function ShareSkin$Skin250() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareSkin$Skin250.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return ShareSkin$Skin250;
	})(eui.Skin);

	function ShareSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","grpQrCode","labUrl","grpUrl","labEntityId","grpEntityId","grpShare"];
		
		this.height = 550;
		this.width = 600;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpShare_i()];
	}
	var _proto = ShareSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(73,79,444,278);
		t.source = "win_s_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_share_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = ShareSkin$Skin249;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = ShareSkin$Skin250;
		return t;
	};
	_proto.grpShare_i = function () {
		var t = new eui.Group();
		this.grpShare = t;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.horizontalCenter = 0.5;
		t.top = 90;
		t.percentWidth = 90;
		t.elementsContent = [this._Image2_i(),this._Rect1_i(),this.grpQrCode_i(),this.grpUrl_i(),this.grpEntityId_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 400;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.height = 250;
		t.horizontalCenter = 1;
		t.top = 10;
		t.percentWidth = 85;
		return t;
	};
	_proto.grpQrCode_i = function () {
		var t = new eui.Group();
		this.grpQrCode = t;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.top = 10;
		t.width = 400;
		return t;
	};
	_proto.grpUrl_i = function () {
		var t = new eui.Group();
		this.grpUrl = t;
		t.anchorOffsetY = 0;
		t.bottom = 70;
		t.height = 60;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image3_i(),this._Label1_i(),this.labUrl_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 80;
		t.scale9Grid = new egret.Rectangle(89,4,540,29);
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 28;
		t.text = "Url:";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 70;
		return t;
	};
	_proto.labUrl_i = function () {
		var t = new eui.Label();
		this.labUrl = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 20;
		t.stroke = 3;
		t.text = "http://290.93.102.38:8080/?rid=938374";
		t.textAlign = "center";
		t.textColor = 0xF4BA0C;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto.grpEntityId_i = function () {
		var t = new eui.Group();
		this.grpEntityId = t;
		t.anchorOffsetY = 0;
		t.bottom = 10;
		t.height = 60;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image4_i(),this._Label2_i(),this.labEntityId_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.horizontalCenter = 90;
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.width = 220;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = -106.5;
		t.size = 32;
		t.text = "推广码:";
		t.textAlign = "right";
		t.textColor = 0xcec7b3;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 140;
		return t;
	};
	_proto.labEntityId_i = function () {
		var t = new eui.Label();
		this.labEntityId = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 90;
		t.size = 36;
		t.stroke = 3;
		t.text = "803832";
		t.textAlign = "left";
		t.textColor = 0xf4ba0c;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 220;
		return t;
	};
	return ShareSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Shop/ItemOperator.exml'] = window.ItemOperatorSkin = (function (_super) {
	__extends(ItemOperatorSkin, _super);
	function ItemOperatorSkin() {
		_super.call(this);
		this.skinParts = ["imgOperatorType","labOperatorId"];
		
		this.height = 100;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this.imgOperatorType_i(),this.labOperatorId_i()];
	}
	var _proto = ItemOperatorSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.source = "shop_item_bg_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.imgOperatorType_i = function () {
		var t = new eui.Image();
		this.imgOperatorType = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 10;
		t.source = "wexin_icon_png";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.labOperatorId_i = function () {
		var t = new eui.Label();
		this.labOperatorId = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 90;
		t.size = 22;
		t.text = "394383424242";
		t.textAlign = "center";
		t.textColor = 0xe8e8e8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 205;
		return t;
	};
	return ItemOperatorSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Shop/ItemOrder.exml'] = window.ItemOrderSkin = (function (_super) {
	__extends(ItemOrderSkin, _super);
	var ItemOrderSkin$Skin251 = 	(function (_super) {
		__extends(ItemOrderSkin$Skin251, _super);
		function ItemOrderSkin$Skin251() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemOrderSkin$Skin251.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "撤销";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemOrderSkin$Skin251;
	})(eui.Skin);

	function ItemOrderSkin() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","lab1stTips","labAmount","labState","labPaymentType","labPaymentId","imgRoomCard","labCardsNum","imgCoin","labCoinsNum","labCreateTime","btnAction"];
		
		this.height = 70;
		this.width = 720;
		this.elementsContent = [this.img_dialog_outer_i(),this.lab1stTips_i(),this._Label1_i(),this._Label2_i(),this.labAmount_i(),this.labState_i(),this.labPaymentType_i(),this.labPaymentId_i(),this.imgRoomCard_i(),this.labCardsNum_i(),this.imgCoin_i(),this.labCoinsNum_i(),this._Image1_i(),this.labCreateTime_i(),this._Image2_i(),this.btnAction_i()];
	}
	var _proto = ItemOrderSkin.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto.lab1stTips_i = function () {
		var t = new eui.Label();
		this.lab1stTips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "金额:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 55;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "状态:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 55;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 160;
		t.size = 20;
		t.text = "方式:";
		t.textAlign = "left";
		t.textColor = 0xEDBE31;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 55;
		return t;
	};
	_proto.labAmount_i = function () {
		var t = new eui.Label();
		this.labAmount = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 60;
		t.size = 20;
		t.text = "534567";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.labState_i = function () {
		var t = new eui.Label();
		this.labState = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 60;
		t.size = 20;
		t.text = "PENDING";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto.labPaymentType_i = function () {
		var t = new eui.Label();
		this.labPaymentType = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 210;
		t.size = 20;
		t.text = "BANKCARD";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 121;
		return t;
	};
	_proto.labPaymentId_i = function () {
		var t = new eui.Label();
		this.labPaymentId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 335;
		t.size = 20;
		t.text = "12345678998765432123";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 285;
		return t;
	};
	_proto.imgRoomCard_i = function () {
		var t = new eui.Image();
		this.imgRoomCard = t;
		t.height = 35;
		t.left = 150;
		t.source = "diamond_png";
		t.top = 5;
		t.width = 35;
		return t;
	};
	_proto.labCardsNum_i = function () {
		var t = new eui.Label();
		this.labCardsNum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 190;
		t.size = 20;
		t.text = "534567";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.imgCoin_i = function () {
		var t = new eui.Image();
		this.imgCoin = t;
		t.anchorOffsetY = 1;
		t.height = 30;
		t.left = 150;
		t.source = "coin_png";
		t.top = 5;
		t.width = 30;
		return t;
	};
	_proto.labCoinsNum_i = function () {
		var t = new eui.Label();
		this.labCoinsNum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 190;
		t.size = 20;
		t.text = "534567";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.left = 280;
		t.source = "club_expiration_png";
		t.top = 5;
		t.width = 25;
		return t;
	};
	_proto.labCreateTime_i = function () {
		var t = new eui.Label();
		this.labCreateTime = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 310;
		t.size = 20;
		t.text = "2018-12-30 18:00:00";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 210;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "white_dot_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.btnAction_i = function () {
		var t = new EButton();
		this.btnAction = t;
		t.height = 55;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 130;
		t.skinName = ItemOrderSkin$Skin251;
		return t;
	};
	return ItemOrderSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Shop/ItemProduct.exml'] = window.ItemProductSkin = (function (_super) {
	__extends(ItemProductSkin, _super);
	var ItemProductSkin$Skin252 = 	(function (_super) {
		__extends(ItemProductSkin$Skin252, _super);
		function ItemProductSkin$Skin252() {
			_super.call(this);
			this.skinParts = ["labPrice"];
			
			this.elementsContent = [this._Image1_i(),this.labPrice_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemProductSkin$Skin252.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labPrice_i = function () {
			var t = new eui.Label();
			this.labPrice = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "300";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemProductSkin$Skin252;
	})(eui.Skin);

	function ItemProductSkin() {
		_super.call(this);
		this.skinParts = ["imgProd","labProdName","labProdQty","btnAction"];
		
		this.height = 220;
		this.width = 200;
		this.elementsContent = [this._Image1_i(),this.imgProd_i(),this.labProdName_i(),this._Label1_i(),this.labProdQty_i(),this.btnAction_i()];
	}
	var _proto = ItemProductSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.source = "shop_item_bg_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.imgProd_i = function () {
		var t = new eui.Image();
		this.imgProd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.horizontalCenter = 0;
		t.source = "wexin_icon_png";
		t.top = 10;
		t.width = 80;
		return t;
	};
	_proto.labProdName_i = function () {
		var t = new eui.Label();
		this.labProdName = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 0;
		t.size = 22;
		t.text = "吹风机";
		t.textAlign = "center";
		t.textColor = 0xe8e8e8;
		t.top = 85;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 30;
		t.horizontalCenter = -30;
		t.size = 20;
		t.text = "数量:";
		t.textAlign = "right";
		t.textColor = 0xE8E8E8;
		t.top = 120;
		t.verticalAlign = "middle";
		t.width = 57;
		return t;
	};
	_proto.labProdQty_i = function () {
		var t = new eui.Label();
		this.labProdQty = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 30;
		t.horizontalCenter = 40;
		t.size = 20;
		t.text = " 200";
		t.textAlign = "left";
		t.textColor = 0xe8e8e8;
		t.top = 120;
		t.verticalAlign = "middle";
		t.width = 80;
		return t;
	};
	_proto.btnAction_i = function () {
		var t = new EButton();
		this.btnAction = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.top = 160;
		t.width = 145;
		t.skinName = ItemProductSkin$Skin252;
		return t;
	};
	return ItemProductSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Shop/shop.exml'] = window.ShopSkin = (function (_super) {
	__extends(ShopSkin, _super);
	var ShopSkin$Skin253 = 	(function (_super) {
		__extends(ShopSkin$Skin253, _super);
		function ShopSkin$Skin253() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin253.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return ShopSkin$Skin253;
	})(eui.Skin);

	var ShopSkin$Skin254 = 	(function (_super) {
		__extends(ShopSkin$Skin254, _super);
		function ShopSkin$Skin254() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin254.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return ShopSkin$Skin254;
	})(eui.Skin);

	var ShopSkin$Skin255 = 	(function (_super) {
		__extends(ShopSkin$Skin255, _super);
		function ShopSkin$Skin255() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin255.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "查看记录";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ShopSkin$Skin255;
	})(eui.Skin);

	var ShopSkin$Skin256 = 	(function (_super) {
		__extends(ShopSkin$Skin256, _super);
		function ShopSkin$Skin256() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin256.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return ShopSkin$Skin256;
	})(eui.Skin);

	var ShopSkin$Skin257 = 	(function (_super) {
		__extends(ShopSkin$Skin257, _super);
		function ShopSkin$Skin257() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin257.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "查看记录";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ShopSkin$Skin257;
	})(eui.Skin);

	var ShopSkin$Skin258 = 	(function (_super) {
		__extends(ShopSkin$Skin258, _super);
		function ShopSkin$Skin258() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin258.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return ShopSkin$Skin258;
	})(eui.Skin);

	var ShopSkin$Skin259 = 	(function (_super) {
		__extends(ShopSkin$Skin259, _super);
		function ShopSkin$Skin259() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin259.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "查看记录";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ShopSkin$Skin259;
	})(eui.Skin);

	var ShopSkin$Skin260 = 	(function (_super) {
		__extends(ShopSkin$Skin260, _super);
		function ShopSkin$Skin260() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin260.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "绑定银行卡";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ShopSkin$Skin260;
	})(eui.Skin);

	var ShopSkin$Skin261 = 	(function (_super) {
		__extends(ShopSkin$Skin261, _super);
		function ShopSkin$Skin261() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin261.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "绑定支付宝";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ShopSkin$Skin261;
	})(eui.Skin);

	var ShopSkin$Skin262 = 	(function (_super) {
		__extends(ShopSkin$Skin262, _super);
		function ShopSkin$Skin262() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopSkin$Skin262.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "申请兑换";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ShopSkin$Skin262;
	})(eui.Skin);

	function ShopSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","shopRadioBtn","grpTabBtns","grpTabMenu","vsShop","grpShop","btnShopOrders1","btnRefresh1","lablistOperatorsNoData","listOperators","labVipRechargeNote","grpVipRecharge","btnShopOrders2","btnRefresh2","lablistProductsNoData","listProducts","labRechargeNote","grpRecharge","labCoinsNum","btnShopOrders3","txtBankCardNo","btnBindBankCard","txtAlipayId","btnBindAlipay","txtAmount","btnWithdraw","labWithdrawNote","grpWithdraw"];
		
		this.height = 600;
		this.width = 900;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpTabMenu_i(),this.grpShop_i(),this.grpVipRecharge_i(),this.grpRecharge_i(),this.grpWithdraw_i()];
	}
	var _proto = ShopSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.horizontalCenter = 0;
		t.source = "win_title_red_bg_png";
		t.top = -30;
		t.width = 515;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 10;
		t.top = 10;
		t.width = 55;
		t.skinName = ShopSkin$Skin253;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 10;
		t.top = 8;
		t.width = 55;
		t.skinName = ShopSkin$Skin254;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_shop_png";
		t.top = 10;
		return t;
	};
	_proto.grpTabMenu_i = function () {
		var t = new eui.Group();
		this.grpTabMenu = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 20;
		t.top = 90;
		t.width = 200;
		t.elementsContent = [this._Image2_i(),this.grpTabBtns_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpTabBtns_i = function () {
		var t = new eui.Group();
		this.grpTabBtns = t;
		t.anchorOffsetY = 0;
		t.height = 360;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 200;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.shopRadioBtn_i(),this._RadioButton1_i(),this._RadioButton2_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.shopRadioBtn_i = function () {
		var t = new eui.RadioButton();
		this.shopRadioBtn = t;
		t.groupName = "tabShopBtns";
		t.horizontalCenter = 0;
		t.label = "VIP充值";
		t.selected = true;
		t.skinName = "CRadioButtonSkin";
		t.value = "0";
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabShopBtns";
		t.horizontalCenter = 0;
		t.label = "充值";
		t.skinName = "CRadioButtonSkin";
		t.value = "1";
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "tabShopBtns";
		t.horizontalCenter = 0;
		t.label = "兑换";
		t.skinName = "CRadioButtonSkin";
		t.value = "2";
		return t;
	};
	_proto.grpShop_i = function () {
		var t = new eui.Group();
		this.grpShop = t;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.width = 620;
		t.elementsContent = [this._Image3_i(),this.vsShop_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.vsShop_i = function () {
		var t = new eui.ViewStack();
		this.vsShop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.grpVipRecharge_i = function () {
		var t = new eui.Group();
		this.grpVipRecharge = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Group2_i(),this.lablistOperatorsNoData_i(),this._Scroller1_i(),this.labVipRechargeNote_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.btnShopOrders1_i(),this.btnRefresh1_i()];
		return t;
	};
	_proto.btnShopOrders1_i = function () {
		var t = new EButton();
		this.btnShopOrders1 = t;
		t.height = 55;
		t.left = 10;
		t.verticalCenter = 0;
		t.width = 135;
		t.skinName = ShopSkin$Skin255;
		return t;
	};
	_proto.btnRefresh1_i = function () {
		var t = new EButton();
		this.btnRefresh1 = t;
		t.height = 50;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 50;
		t.skinName = ShopSkin$Skin256;
		return t;
	};
	_proto.lablistOperatorsNoData_i = function () {
		var t = new eui.Label();
		this.lablistOperatorsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 60;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 350;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 60;
		t.percentWidth = 100;
		t.viewport = this.listOperators_i();
		return t;
	};
	_proto.listOperators_i = function () {
		var t = new eui.List();
		this.listOperators = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemOperatorSkin;
		t.verticalCenter = 25;
		t.percentWidth = 100;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 5;
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalGap = 5;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		return t;
	};
	_proto.labVipRechargeNote_i = function () {
		var t = new eui.EditableText();
		this.labVipRechargeNote = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 63;
		t.left = "10";
		t.multiline = true;
		t.size = 22;
		t.text = "注意:如需要购买房卡和金币,请添加如上任一操作人员的微信,10秒内完成充值.";
		t.textAlign = "left";
		t.textColor = 0xe8e8e8;
		t.top = "407";
		t.percentWidth = 96;
		t.wordWrap = true;
		return t;
	};
	_proto.grpRecharge_i = function () {
		var t = new eui.Group();
		this.grpRecharge = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.width = 620;
		t.elementsContent = [this._Group4_i(),this.lablistProductsNoData_i(),this._Scroller2_i(),this.labRechargeNote_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.btnShopOrders2_i(),this.btnRefresh2_i()];
		return t;
	};
	_proto.btnShopOrders2_i = function () {
		var t = new EButton();
		this.btnShopOrders2 = t;
		t.height = 55;
		t.left = 10;
		t.verticalCenter = 0;
		t.width = 135;
		t.skinName = ShopSkin$Skin257;
		return t;
	};
	_proto.btnRefresh2_i = function () {
		var t = new EButton();
		this.btnRefresh2 = t;
		t.height = 50;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 50;
		t.skinName = ShopSkin$Skin258;
		return t;
	};
	_proto.lablistProductsNoData_i = function () {
		var t = new eui.Label();
		this.lablistProductsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 60;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.height = 350;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 60;
		t.percentWidth = 100;
		t.viewport = this.listProducts_i();
		return t;
	};
	_proto.listProducts_i = function () {
		var t = new eui.List();
		this.listProducts = t;
		t.percentHeight = 100;
		t.horizontalCenter = 13;
		t.itemRendererSkinName = ItemProductSkin;
		t.verticalCenter = 300;
		t.percentWidth = 100;
		t.layout = this._TileLayout2_i();
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingGap";
		t.columnWidth = 200;
		t.orientation = "rows";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.requestedColumnCount = 3;
		t.rowAlign = "justifyUsingGap";
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i(),this._Object13_i()];
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		return t;
	};
	_proto.labRechargeNote_i = function () {
		var t = new eui.EditableText();
		this.labRechargeNote = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 59;
		t.left = "10";
		t.multiline = true;
		t.size = 22;
		t.text = "注意:如需要购买房卡和金币,请添加如上任一操作人员的微信,10秒内完成充值.";
		t.textAlign = "left";
		t.textColor = 0xe8e8e8;
		t.top = "411";
		t.percentWidth = 96;
		t.wordWrap = true;
		return t;
	};
	_proto.grpWithdraw_i = function () {
		var t = new eui.Group();
		this.grpWithdraw = t;
		t.height = 480;
		t.left = 240;
		t.top = 90;
		t.visible = false;
		t.width = 620;
		t.elementsContent = [this._Image4_i(),this._Label1_i(),this.labCoinsNum_i(),this.btnShopOrders3_i(),this.txtBankCardNo_i(),this._Label2_i(),this.btnBindBankCard_i(),this.txtAlipayId_i(),this.btnBindAlipay_i(),this._Label3_i(),this.txtAmount_i(),this._Label4_i(),this.btnWithdraw_i(),this.labWithdrawNote_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 240;
		t.source = "txt_bg_png";
		t.top = 15;
		t.width = 220;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = -131;
		t.size = 24;
		t.text = "账号余额:";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 20;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto.labCoinsNum_i = function () {
		var t = new eui.Label();
		this.labCoinsNum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 250;
		t.size = 24;
		t.stroke = 1;
		t.text = "803832";
		t.textAlign = "left";
		t.textColor = 0xf4ba0c;
		t.top = 20;
		t.verticalAlign = "middle";
		t.width = 220;
		return t;
	};
	_proto.btnShopOrders3_i = function () {
		var t = new EButton();
		this.btnShopOrders3 = t;
		t.height = 55;
		t.left = 450;
		t.top = 10;
		t.width = 140;
		t.skinName = ShopSkin$Skin259;
		return t;
	};
	_proto.txtBankCardNo_i = function () {
		var t = new eui.TextInput();
		this.txtBankCardNo = t;
		t.height = 45;
		t.left = 80;
		t.prompt = "银行卡卡号";
		t.top = 80;
		t.width = 360;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 20;
		t.text = "银行卡卡号, 请先绑定银行卡卡号";
		t.textAlign = "left";
		t.textColor = 0xcec7b3;
		t.top = 120;
		t.verticalAlign = "middle";
		t.width = 450;
		return t;
	};
	_proto.btnBindBankCard_i = function () {
		var t = new EButton();
		this.btnBindBankCard = t;
		t.height = 55;
		t.left = 450;
		t.top = 80;
		t.width = 140;
		t.skinName = ShopSkin$Skin260;
		return t;
	};
	_proto.txtAlipayId_i = function () {
		var t = new eui.TextInput();
		this.txtAlipayId = t;
		t.height = 45;
		t.left = 80;
		t.prompt = "收款支付宝";
		t.top = 160;
		t.width = 360;
		return t;
	};
	_proto.btnBindAlipay_i = function () {
		var t = new EButton();
		this.btnBindAlipay = t;
		t.height = 50;
		t.left = 450;
		t.top = 160;
		t.width = 140;
		t.skinName = ShopSkin$Skin261;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 20;
		t.text = "收款的支付宝账号";
		t.textAlign = "left";
		t.textColor = 0xcec7b3;
		t.top = 205;
		t.verticalAlign = "middle";
		t.width = 450;
		return t;
	};
	_proto.txtAmount_i = function () {
		var t = new eui.TextInput();
		this.txtAmount = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.prompt = "兑换金额";
		t.width = 360;
		t.x = 85;
		t.y = 237;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 20;
		t.text = "要兑换的金额";
		t.textAlign = "left";
		t.textColor = 0xCEC7B3;
		t.top = 280;
		t.verticalAlign = "middle";
		t.width = 450;
		return t;
	};
	_proto.btnWithdraw_i = function () {
		var t = new EButton();
		this.btnWithdraw = t;
		t.height = 60;
		t.horizontalCenter = -40;
		t.top = 320;
		t.width = 165;
		t.skinName = ShopSkin$Skin262;
		return t;
	};
	_proto.labWithdrawNote_i = function () {
		var t = new eui.EditableText();
		this.labWithdrawNote = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 69;
		t.left = "10";
		t.multiline = true;
		t.size = 22;
		t.text = "注意:提完申请,请耐心等待工作人员处理.";
		t.textAlign = "left";
		t.textColor = 0xe8e8e8;
		t.top = "401";
		t.percentWidth = 96;
		t.wordWrap = true;
		return t;
	};
	return ShopSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Shop/ShopOrders.exml'] = window.ShopOrdersSkin = (function (_super) {
	__extends(ShopOrdersSkin, _super);
	var ShopOrdersSkin$Skin263 = 	(function (_super) {
		__extends(ShopOrdersSkin$Skin263, _super);
		function ShopOrdersSkin$Skin263() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopOrdersSkin$Skin263.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return ShopOrdersSkin$Skin263;
	})(eui.Skin);

	var ShopOrdersSkin$Skin264 = 	(function (_super) {
		__extends(ShopOrdersSkin$Skin264, _super);
		function ShopOrdersSkin$Skin264() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopOrdersSkin$Skin264.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return ShopOrdersSkin$Skin264;
	})(eui.Skin);

	var ShopOrdersSkin$Skin265 = 	(function (_super) {
		__extends(ShopOrdersSkin$Skin265, _super);
		function ShopOrdersSkin$Skin265() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopOrdersSkin$Skin265.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_refresh_png";
			t.percentWidth = 100;
			return t;
		};
		return ShopOrdersSkin$Skin265;
	})(eui.Skin);

	function ShopOrdersSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","lab1stTips","labBalance","labRechargeSum","labWithdrawSum","grpShopOrdersSum","btnRefresh","lablistShopOrdersNoData","listShopOrders","grpShopOrders"];
		
		this.height = 600;
		this.width = 800;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpShopOrdersSum_i(),this.grpShopOrders_i(),this._Label4_i()];
	}
	var _proto = ShopOrdersSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.horizontalCenter = 0;
		t.source = "win_title_red_bg_png";
		t.top = -30;
		t.width = 515;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 10;
		t.top = 10;
		t.width = 55;
		t.skinName = ShopOrdersSkin$Skin263;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 10;
		t.top = 8;
		t.width = 55;
		t.skinName = ShopOrdersSkin$Skin264;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_shoporders_png";
		t.top = 10;
		return t;
	};
	_proto.grpShopOrdersSum_i = function () {
		var t = new eui.Group();
		this.grpShopOrdersSum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.horizontalCenter = 0;
		t.top = 80;
		t.width = 720;
		t.elementsContent = [this._Image2_i(),this.lab1stTips_i(),this.labBalance_i(),this._Label1_i(),this.labRechargeSum_i(),this._Label2_i(),this.labWithdrawSum_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.lab1stTips_i = function () {
		var t = new eui.Label();
		this.lab1stTips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 20;
		t.text = "差额:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 61;
		return t;
	};
	_proto.labBalance_i = function () {
		var t = new eui.Label();
		this.labBalance = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 70;
		t.size = 22;
		t.text = "534567";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = -50;
		t.size = 20;
		t.text = "充值总计:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.labRechargeSum_i = function () {
		var t = new eui.Label();
		this.labRechargeSum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 50;
		t.size = 22;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.right = 100;
		t.size = 20;
		t.text = "提现总计:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.labWithdrawSum_i = function () {
		var t = new eui.Label();
		this.labWithdrawSum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.right = 0;
		t.size = 22;
		t.text = "788766";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.grpShopOrders_i = function () {
		var t = new eui.Group();
		this.grpShopOrders = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 410;
		t.horizontalCenter = 0;
		t.top = 123;
		t.width = 720;
		t.elementsContent = [this._Image3_i(),this._Group1_i(),this.btnRefresh_i(),this.lablistShopOrdersNoData_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Label3_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.left = 10;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x4D4053;
		t.text = "记录详情";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 200;
		t.wordWrap = true;
		return t;
	};
	_proto.btnRefresh_i = function () {
		var t = new EButton();
		this.btnRefresh = t;
		t.height = 45;
		t.right = 30;
		t.top = 0;
		t.width = 45;
		t.skinName = ShopOrdersSkin$Skin265;
		return t;
	};
	_proto.lablistShopOrdersNoData_i = function () {
		var t = new eui.Label();
		this.lablistShopOrdersNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 50;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 360;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 50;
		t.percentWidth = 100;
		t.viewport = this.listShopOrders_i();
		return t;
	};
	_proto.listShopOrders_i = function () {
		var t = new eui.List();
		this.listShopOrders = t;
		t.anchorOffsetY = 0;
		t.height = 360;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ItemOrderSkin;
		t.verticalCenter = -21;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "justify";
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bottom = 30;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "提示：系统只保留最近100次的记录";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.verticalAlign = "middle";
		t.width = 420;
		return t;
	};
	return ShopOrdersSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Texas/Bringin.exml'] = window.BringinSkin = (function (_super) {
	__extends(BringinSkin, _super);
	var BringinSkin$Skin266 = 	(function (_super) {
		__extends(BringinSkin$Skin266, _super);
		function BringinSkin$Skin266() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BringinSkin$Skin266.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return BringinSkin$Skin266;
	})(eui.Skin);

	var BringinSkin$Skin267 = 	(function (_super) {
		__extends(BringinSkin$Skin267, _super);
		function BringinSkin$Skin267() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BringinSkin$Skin267.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return BringinSkin$Skin267;
	})(eui.Skin);

	var BringinSkin$Skin268 = 	(function (_super) {
		__extends(BringinSkin$Skin268, _super);
		function BringinSkin$Skin268() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BringinSkin$Skin268.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_fold_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0xCC1E0E;
			t.text = "退出游戏";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return BringinSkin$Skin268;
	})(eui.Skin);

	var BringinSkin$Skin269 = 	(function (_super) {
		__extends(BringinSkin$Skin269, _super);
		function BringinSkin$Skin269() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BringinSkin$Skin269.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x5886c9;
			t.text = "确定带入";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return BringinSkin$Skin269;
	})(eui.Skin);

	function BringinSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","hsTexasBringin","labTexasBringinVal","btnQuitGame","btnBringin","grpBringin"];
		
		this.height = 400;
		this.width = 550;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpBringin_i()];
	}
	var _proto = BringinSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_bringin_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 60;
		t.left = 20;
		t.top = 15;
		t.width = 60;
		t.skinName = BringinSkin$Skin266;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 60;
		t.right = 20;
		t.top = 15;
		t.width = 60;
		t.skinName = BringinSkin$Skin267;
		return t;
	};
	_proto.grpBringin_i = function () {
		var t = new eui.Group();
		this.grpBringin = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.top = 90;
		t.percentWidth = 90;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.btnQuitGame_i(),this.btnBringin_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.verticalCenter = -50;
		t.percentWidth = 100;
		t.x = 0.5;
		t.elementsContent = [this.hsTexasBringin_i(),this.labTexasBringinVal_i()];
		return t;
	};
	_proto.hsTexasBringin_i = function () {
		var t = new eui.HSlider();
		this.hsTexasBringin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.horizontalCenter = 0;
		t.skinName = "CHSliderSkin";
		t.verticalCenter = 20;
		t.width = 20;
		return t;
	};
	_proto.labTexasBringinVal_i = function () {
		var t = new eui.Label();
		this.labTexasBringinVal = t;
		t.anchorOffsetX = 0;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x6A6B70;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 5;
		t.verticalAlign = "middle";
		t.width = 140;
		return t;
	};
	_proto.btnQuitGame_i = function () {
		var t = new EButton();
		this.btnQuitGame = t;
		t.bottom = 30;
		t.height = 65;
		t.horizontalCenter = -108;
		t.width = 155;
		t.skinName = BringinSkin$Skin268;
		return t;
	};
	_proto.btnBringin_i = function () {
		var t = new EButton();
		this.btnBringin = t;
		t.bottom = 30;
		t.height = 65;
		t.horizontalCenter = 90;
		t.width = 155;
		t.skinName = BringinSkin$Skin269;
		return t;
	};
	return BringinSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Texas/TexasChips.exml'] = window.TexasChipsSkin = (function (_super) {
	__extends(TexasChipsSkin, _super);
	function TexasChipsSkin() {
		_super.call(this);
		this.skinParts = ["labChipNums"];
		
		this.elementsContent = [this._Image1_i(),this.labChipNums_i()];
	}
	var _proto = TexasChipsSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "texas_chips_png";
		t.verticalCenter = 0;
		t.width = 91;
		return t;
	};
	_proto.labChipNums_i = function () {
		var t = new eui.Label();
		this.labChipNums = t;
		t.fontFamily = "微软雅黑";
		t.height = 25;
		t.right = 0;
		t.size = 16;
		t.text = "88888";
		t.textAlign = "center";
		t.textColor = 0xe0dcd7;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	return TexasChipsSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Texas/TexasPots.exml'] = window.TexasPotsSkin = (function (_super) {
	__extends(TexasPotsSkin, _super);
	function TexasPotsSkin() {
		_super.call(this);
		this.skinParts = ["labChipNums"];
		
		this.elementsContent = [this._Image1_i(),this.labChipNums_i()];
	}
	var _proto = TexasPotsSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.horizontalCenter = 0;
		t.source = "pots_chips_png";
		t.verticalCenter = 0;
		t.width = 114;
		return t;
	};
	_proto.labChipNums_i = function () {
		var t = new eui.Label();
		this.labChipNums = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fontFamily = "微软雅黑";
		t.height = 25;
		t.right = 0;
		t.size = 16;
		t.text = "88888";
		t.textAlign = "center";
		t.textColor = 0xe0dcd7;
		t.verticalAlign = "middle";
		t.width = 90;
		return t;
	};
	return TexasPotsSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Texas/TexasSeatUI.exml'] = window.TexasSeatUISkin = (function (_super) {
	__extends(TexasSeatUISkin, _super);
	function TexasSeatUISkin() {
		_super.call(this);
		this.skinParts = ["imgWinner","imgAvatar","labName","labChips","imgButtonSeat","imgUserReady","labLastAction","imgProfileTimingBG"];
		
		this.height = 90;
		this.width = 195;
		this.elementsContent = [this._Image1_i(),this.imgWinner_i(),this.imgAvatar_i(),this.labName_i(),this.labChips_i(),this.imgButtonSeat_i(),this.imgUserReady_i(),this.labLastAction_i(),this.imgProfileTimingBG_i()];
	}
	var _proto = TexasSeatUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 90;
		t.left = 0;
		t.source = "avatar_hb_s_png";
		t.width = 195;
		return t;
	};
	_proto.imgWinner_i = function () {
		var t = new eui.Image();
		this.imgWinner = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "hprofile_winner_png";
		t.visible = false;
		t.width = 195;
		return t;
	};
	_proto.imgAvatar_i = function () {
		var t = new eui.Image();
		this.imgAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.horizontalCenter = -54.5;
		t.source = "avatar_man_png";
		t.verticalCenter = -3;
		t.width = 78;
		return t;
	};
	_proto.labName_i = function () {
		var t = new eui.Label();
		this.labName = t;
		t.anchorOffsetX = 0;
		t.bottom = 35;
		t.height = 30;
		t.right = 0;
		t.size = 18;
		t.text = "会飞的猪头肉";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto.labChips_i = function () {
		var t = new eui.Label();
		this.labChips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.height = 30;
		t.right = 0;
		t.size = 18;
		t.text = "10000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto.imgButtonSeat_i = function () {
		var t = new eui.Image();
		this.imgButtonSeat = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.height = 35;
		t.left = 25;
		t.source = "button_seat_png";
		t.width = 35;
		return t;
	};
	_proto.imgUserReady_i = function () {
		var t = new eui.Image();
		this.imgUserReady = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.height = 30;
		t.left = 30;
		t.source = "user_ready_png";
		t.visible = false;
		t.width = 30;
		return t;
	};
	_proto.labLastAction_i = function () {
		var t = new eui.Label();
		this.labLastAction = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.right = 0;
		t.size = 18;
		t.text = "不抢";
		t.textAlign = "center";
		t.textColor = 0xf4d66e;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto.imgProfileTimingBG_i = function () {
		var t = new eui.Image();
		this.imgProfileTimingBG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "hprofile_bg_timing_png";
		t.visible = false;
		t.width = 195;
		return t;
	};
	return TexasSeatUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Texas/TexasVSlider.exml'] = window.TexasVSliderSkin = (function (_super) {
	__extends(TexasVSliderSkin, _super);
	function TexasVSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this._Image1_i(),this.track_i(),this.thumb_i()];
	}
	var _proto = TexasVSliderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.height = 466;
		t.horizontalCenter = 0;
		t.source = "vslide_bg_png";
		t.width = 137;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.horizontalCenter = 5;
		t.source = "vslide_track_filled_png";
		t.width = 35;
		t.y = 55;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 5;
		t.source = "vslide_thumb_png";
		t.verticalCenter = 0;
		t.y = 0;
		return t;
	};
	return TexasVSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Texas/TexasTable.exml'] = window.TexasTableSkin = (function (_super) {
	__extends(TexasTableSkin, _super);
	var TexasTableSkin$Skin270 = 	(function (_super) {
		__extends(TexasTableSkin$Skin270, _super);
		function TexasTableSkin$Skin270() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TexasTableSkin$Skin270.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return TexasTableSkin$Skin270;
	})(eui.Skin);

	var TexasTableSkin$Skin271 = 	(function (_super) {
		__extends(TexasTableSkin$Skin271, _super);
		function TexasTableSkin$Skin271() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TexasTableSkin$Skin271.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_scores_png";
			t.percentWidth = 100;
			return t;
		};
		return TexasTableSkin$Skin271;
	})(eui.Skin);

	var TexasTableSkin$Skin272 = 	(function (_super) {
		__extends(TexasTableSkin$Skin272, _super);
		function TexasTableSkin$Skin272() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TexasTableSkin$Skin272.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_host_png";
			t.percentWidth = 100;
			return t;
		};
		return TexasTableSkin$Skin272;
	})(eui.Skin);

	var TexasTableSkin$Skin273 = 	(function (_super) {
		__extends(TexasTableSkin$Skin273, _super);
		function TexasTableSkin$Skin273() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TexasTableSkin$Skin273.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_setting_png";
			t.percentWidth = 100;
			return t;
		};
		return TexasTableSkin$Skin273;
	})(eui.Skin);

	var TexasTableSkin$Skin274 = 	(function (_super) {
		__extends(TexasTableSkin$Skin274, _super);
		function TexasTableSkin$Skin274() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TexasTableSkin$Skin274.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "准备";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return TexasTableSkin$Skin274;
	})(eui.Skin);

	var TexasTableSkin$Skin275 = 	(function (_super) {
		__extends(TexasTableSkin$Skin275, _super);
		function TexasTableSkin$Skin275() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TexasTableSkin$Skin275.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "开始匹配";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return TexasTableSkin$Skin275;
	})(eui.Skin);

	var TexasTableSkin$Skin276 = 	(function (_super) {
		__extends(TexasTableSkin$Skin276, _super);
		function TexasTableSkin$Skin276() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TexasTableSkin$Skin276.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "邀请好友";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return TexasTableSkin$Skin276;
	})(eui.Skin);

	var TexasTableSkin$Skin277 = 	(function (_super) {
		__extends(TexasTableSkin$Skin277, _super);
		function TexasTableSkin$Skin277() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TexasTableSkin$Skin277.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = false;
			t.fontFamily = "微软雅黑";
			t.horizontalCenter = 0;
			t.size = 26;
			t.text = "取消托管";
			t.textColor = 0xFFFFFF;
			t.verticalCenter = 0;
			return t;
		};
		return TexasTableSkin$Skin277;
	})(eui.Skin);

	function TexasTableSkin() {
		_super.call(this);
		this.skinParts = ["btnGoBack","btnScores","labEntityId","grpEntityId","grpLeftTop","btnEnableHost","btnSetting","grpSetting","labRoundNums","grpBoardPokers","grpChipsNum_Seat1","grpChipsNum_Seat9","grpChipsNum_Seat8","grpChipsNum_Seat7","grpChipsNum_Seat6","grpChipsNum_Seat5","grpChipsNum_Seat4","grpChipsNum_Seat3","grpChipsNum_Seat2","grpPokers_Seat2","grpPokers_Seat3","grpPokers_Seat4","grpPokers_Seat7","grpPokers_Seat8","grpPokers_Seat9","grpPokers_Seat5","grpPokers_Seat6","grpPokerType_Seat2","grpPokerType_Seat3","grpPokerType_Seat4","grpPokerType_Seat7","grpPokerType_Seat8","grpPokerType_Seat9","grpPokerType_Seat5","grpPokerType_Seat6","grpProfile_Seat9","grpProfile_Seat8","grpProfile_Seat7","grpProfile_Seat6","grpProfile_Seat5","grpProfile_Seat4","grpProfile_Seat3","grpProfile_Seat2","grpProfile_Seat1","btnReady","btnGoMatching","btnInvite","grpReadyAndInvite","grpPutBetsControls","imgGrpVsliderOuter","grpLeftBtns","grpRightBtns","texasVSlider","labVSliderVal","grpVSlider","grpVsliderPanel","grpTimer","grpPokers_Seat1","grpPokerType_Seat1","labPotNums","grpTexasPot","grpTexasPots","imgHostBg","btnDisableHost","grpHost","grpDeck","grpSystemMessage"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.grpLeftTop_i(),this.grpSetting_i(),this.labRoundNums_i(),this.grpBoardPokers_i(),this.grpChipsNum_Seat1_i(),this.grpChipsNum_Seat9_i(),this.grpChipsNum_Seat8_i(),this.grpChipsNum_Seat7_i(),this.grpChipsNum_Seat6_i(),this.grpChipsNum_Seat5_i(),this.grpChipsNum_Seat4_i(),this.grpChipsNum_Seat3_i(),this.grpChipsNum_Seat2_i(),this.grpPokers_Seat2_i(),this.grpPokers_Seat3_i(),this.grpPokers_Seat4_i(),this.grpPokers_Seat7_i(),this.grpPokers_Seat8_i(),this.grpPokers_Seat9_i(),this.grpPokers_Seat5_i(),this.grpPokers_Seat6_i(),this.grpPokerType_Seat2_i(),this.grpPokerType_Seat3_i(),this.grpPokerType_Seat4_i(),this.grpPokerType_Seat7_i(),this.grpPokerType_Seat8_i(),this.grpPokerType_Seat9_i(),this.grpPokerType_Seat5_i(),this.grpPokerType_Seat6_i(),this.grpProfile_Seat9_i(),this.grpProfile_Seat8_i(),this.grpProfile_Seat7_i(),this.grpProfile_Seat6_i(),this.grpProfile_Seat5_i(),this.grpProfile_Seat4_i(),this.grpProfile_Seat3_i(),this.grpProfile_Seat2_i(),this.grpProfile_Seat1_i(),this.grpReadyAndInvite_i(),this.grpPutBetsControls_i(),this.grpVsliderPanel_i(),this.grpTimer_i(),this.grpPokers_Seat1_i(),this.grpPokerType_Seat1_i(),this.grpTexasPot_i(),this.grpTexasPots_i(),this.grpHost_i(),this.grpDeck_i(),this.grpSystemMessage_i()];
	}
	var _proto = TexasTableSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = -1;
		t.right = 1;
		t.scale9Grid = new egret.Rectangle(246,212,485,248);
		t.source = "texastable_png";
		t.top = 0;
		return t;
	};
	_proto.grpLeftTop_i = function () {
		var t = new eui.Group();
		this.grpLeftTop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.top = 10;
		t.width = 430.67;
		t.elementsContent = [this.btnGoBack_i(),this.btnScores_i(),this.grpEntityId_i()];
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 75;
		t.left = 0;
		t.top = 0;
		t.width = 75;
		t.skinName = TexasTableSkin$Skin270;
		return t;
	};
	_proto.btnScores_i = function () {
		var t = new EButton();
		this.btnScores = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 100;
		t.verticalCenter = 0;
		t.width = 75;
		t.skinName = TexasTableSkin$Skin271;
		return t;
	};
	_proto.grpEntityId_i = function () {
		var t = new eui.Group();
		this.grpEntityId = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 200;
		t.top = 0;
		t.width = 230;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.labEntityId_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 90;
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.width = 140;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 24;
		t.text = "房间号:";
		t.textAlign = "left";
		t.textColor = 0xcec7b3;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 90;
		return t;
	};
	_proto.labEntityId_i = function () {
		var t = new eui.Label();
		this.labEntityId = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 100;
		t.size = 26;
		t.stroke = 3;
		t.text = "803832";
		t.textAlign = "left";
		t.textColor = 0xf4ba0c;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto.grpSetting_i = function () {
		var t = new eui.Group();
		this.grpSetting = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.right = 10;
		t.top = 10;
		t.width = 201.33;
		t.elementsContent = [this.btnEnableHost_i(),this.btnSetting_i()];
		return t;
	};
	_proto.btnEnableHost_i = function () {
		var t = new EButton();
		this.btnEnableHost = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.verticalCenter = 0.5;
		t.width = 75;
		t.skinName = TexasTableSkin$Skin272;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new EButton();
		this.btnSetting = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 75;
		t.skinName = TexasTableSkin$Skin273;
		return t;
	};
	_proto.labRoundNums_i = function () {
		var t = new eui.Label();
		this.labRoundNums = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x2b7b7a;
		t.text = "局数:9/15";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 200;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grpBoardPokers_i = function () {
		var t = new eui.Group();
		this.grpBoardPokers = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 360;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.source = "poker_1_png";
		t.width = 70;
		t.x = 45;
		t.y = 3;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.horizontalCenter = -74.5;
		t.source = "poker_1_png";
		t.verticalCenter = -1.5;
		t.width = 70;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.source = "poker_1_png";
		t.width = 70;
		t.x = 177;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.source = "poker_1_png";
		t.width = 70;
		t.x = 243;
		t.y = 10;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.source = "poker_1_png";
		t.width = 70;
		t.x = 313;
		t.y = 20;
		return t;
	};
	_proto.grpChipsNum_Seat1_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 200;
		t.height = 35;
		t.horizontalCenter = 0;
		t.width = 91;
		return t;
	};
	_proto.grpChipsNum_Seat9_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 245;
		t.height = 35;
		t.right = 295;
		t.width = 91;
		return t;
	};
	_proto.grpChipsNum_Seat8_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.right = 205;
		t.top = 400;
		t.width = 91;
		return t;
	};
	_proto.grpChipsNum_Seat7_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.right = 210;
		t.top = 250;
		t.width = 91;
		return t;
	};
	_proto.grpChipsNum_Seat6_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.right = 255;
		t.top = 200;
		t.width = 91;
		return t;
	};
	_proto.grpChipsNum_Seat5_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.left = 245;
		t.top = 200;
		t.width = 90;
		return t;
	};
	_proto.grpChipsNum_Seat4_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.left = 210;
		t.top = 250;
		t.width = 91;
		return t;
	};
	_proto.grpChipsNum_Seat3_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.left = 205;
		t.top = 400;
		t.width = 90;
		return t;
	};
	_proto.grpChipsNum_Seat2_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 245;
		t.height = 30;
		t.left = 295;
		t.width = 90;
		return t;
	};
	_proto.grpPokers_Seat2_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 190;
		t.height = 55;
		t.left = 295;
		t.width = 90;
		return t;
	};
	_proto.grpPokers_Seat3_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.left = 205;
		t.top = 430;
		t.width = 90;
		return t;
	};
	_proto.grpPokers_Seat4_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.left = 210;
		t.top = 285;
		t.width = 90;
		return t;
	};
	_proto.grpPokers_Seat7_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.right = 210;
		t.top = 285;
		t.width = 90;
		return t;
	};
	_proto.grpPokers_Seat8_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.right = 205;
		t.top = 430;
		t.width = 90;
		return t;
	};
	_proto.grpPokers_Seat9_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 190;
		t.height = 55;
		t.right = 295;
		t.width = 90;
		return t;
	};
	_proto.grpPokers_Seat5_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.left = 245;
		t.top = 145;
		t.width = 90;
		return t;
	};
	_proto.grpPokers_Seat6_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.right = 255;
		t.top = 145;
		t.width = 90;
		return t;
	};
	_proto.grpPokerType_Seat2_i = function () {
		var t = new eui.Group();
		this.grpPokerType_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 190;
		t.height = 23;
		t.left = 295;
		t.width = 90;
		return t;
	};
	_proto.grpPokerType_Seat3_i = function () {
		var t = new eui.Group();
		this.grpPokerType_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.left = 205;
		t.top = 460;
		t.width = 90;
		return t;
	};
	_proto.grpPokerType_Seat4_i = function () {
		var t = new eui.Group();
		this.grpPokerType_Seat4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.left = 210;
		t.top = 317;
		t.width = 90;
		return t;
	};
	_proto.grpPokerType_Seat7_i = function () {
		var t = new eui.Group();
		this.grpPokerType_Seat7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.right = 210;
		t.top = 317;
		t.width = 90;
		return t;
	};
	_proto.grpPokerType_Seat8_i = function () {
		var t = new eui.Group();
		this.grpPokerType_Seat8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.right = 205;
		t.top = 460;
		t.width = 90;
		return t;
	};
	_proto.grpPokerType_Seat9_i = function () {
		var t = new eui.Group();
		this.grpPokerType_Seat9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 190;
		t.height = 23;
		t.right = 295;
		t.width = 90;
		return t;
	};
	_proto.grpPokerType_Seat5_i = function () {
		var t = new eui.Group();
		this.grpPokerType_Seat5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.left = 245;
		t.top = 180;
		t.width = 90;
		return t;
	};
	_proto.grpPokerType_Seat6_i = function () {
		var t = new eui.Group();
		this.grpPokerType_Seat6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.right = 255;
		t.top = 180;
		t.width = 90;
		return t;
	};
	_proto.grpProfile_Seat9_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 100;
		t.height = 90;
		t.right = 200;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat8_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.right = 10;
		t.top = 400;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat7_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.right = 10;
		t.top = 250;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat6_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.right = 210;
		t.top = 55;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat5_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 200;
		t.top = 55;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat4_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 10;
		t.top = 250;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat3_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 10;
		t.top = 400;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat2_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 100;
		t.height = 90;
		t.left = 200;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat1_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 10;
		t.height = 90;
		t.left = 40;
		t.width = 195;
		return t;
	};
	_proto.grpReadyAndInvite_i = function () {
		var t = new eui.Group();
		this.grpReadyAndInvite = t;
		t.anchorOffsetX = 0;
		t.bottom = 256;
		t.height = 130;
		t.horizontalCenter = -11.5;
		t.width = 520;
		t.elementsContent = [this.btnReady_i(),this.btnGoMatching_i(),this.btnInvite_i()];
		return t;
	};
	_proto.btnReady_i = function () {
		var t = new EButton();
		this.btnReady = t;
		t.height = 65;
		t.width = 180;
		t.x = 5;
		t.y = 25;
		t.skinName = TexasTableSkin$Skin274;
		return t;
	};
	_proto.btnGoMatching_i = function () {
		var t = new EButton();
		this.btnGoMatching = t;
		t.height = 65;
		t.width = 180;
		t.x = 200;
		t.y = 25;
		t.skinName = TexasTableSkin$Skin275;
		return t;
	};
	_proto.btnInvite_i = function () {
		var t = new EButton();
		this.btnInvite = t;
		t.height = 65;
		t.width = 180;
		t.x = 400;
		t.y = 25;
		t.skinName = TexasTableSkin$Skin276;
		return t;
	};
	_proto.grpPutBetsControls_i = function () {
		var t = new eui.Group();
		this.grpPutBetsControls = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 15;
		t.height = 70;
		t.horizontalCenter = 41.5;
		t.touchThrough = true;
		t.visible = false;
		t.width = 880;
		return t;
	};
	_proto.grpVsliderPanel_i = function () {
		var t = new eui.Group();
		this.grpVsliderPanel = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this.imgGrpVsliderOuter_i(),this.grpLeftBtns_i(),this.grpRightBtns_i(),this.grpVSlider_i()];
		return t;
	};
	_proto.imgGrpVsliderOuter_i = function () {
		var t = new eui.Image();
		this.imgGrpVsliderOuter = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto.grpLeftBtns_i = function () {
		var t = new eui.Group();
		this.grpLeftBtns = t;
		t.anchorOffsetX = 0;
		t.bottom = 15;
		t.height = 70;
		t.right = 351;
		t.width = 686;
		return t;
	};
	_proto.grpRightBtns_i = function () {
		var t = new eui.Group();
		this.grpRightBtns = t;
		t.anchorOffsetX = 0;
		t.bottom = 15;
		t.height = 70;
		t.right = 40;
		t.width = 314.67;
		return t;
	};
	_proto.grpVSlider_i = function () {
		var t = new eui.Group();
		this.grpVSlider = t;
		t.bottom = 85;
		t.height = 466;
		t.right = 45;
		t.width = 137;
		t.elementsContent = [this.texasVSlider_i(),this.labVSliderVal_i()];
		return t;
	};
	_proto.texasVSlider_i = function () {
		var t = new eui.VSlider();
		this.texasVSlider = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 466;
		t.horizontalCenter = 0;
		t.skinName = "TexasVSliderSkin";
		t.verticalCenter = 0;
		t.width = 137;
		return t;
	};
	_proto.labVSliderVal_i = function () {
		var t = new eui.Label();
		this.labVSliderVal = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 411;
		t.height = 35;
		t.left = 19;
		t.size = 28;
		t.text = "100000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 110;
		return t;
	};
	_proto.grpTimer_i = function () {
		var t = new eui.Group();
		this.grpTimer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.width = 400;
		return t;
	};
	_proto.grpPokers_Seat1_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 100;
		t.height = 95;
		t.horizontalCenter = 0;
		t.width = 150;
		t.elementsContent = [this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.right = 3;
		t.source = "poker_1_png";
		t.width = 70;
		t.y = 6.76;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.left = 3;
		t.source = "poker_1_png";
		t.width = 70;
		t.y = 6.76;
		return t;
	};
	_proto.grpPokerType_Seat1_i = function () {
		var t = new eui.Group();
		this.grpPokerType_Seat1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 100;
		t.height = 30;
		t.horizontalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto.grpTexasPot_i = function () {
		var t = new eui.Group();
		this.grpTexasPot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.horizontalCenter = 0;
		t.top = 230;
		t.width = 150;
		t.elementsContent = [this._Image10_i(),this.labPotNums_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.source = "pot_chips_png";
		t.top = 0;
		t.width = 148;
		t.x = 1;
		return t;
	};
	_proto.labPotNums_i = function () {
		var t = new eui.Label();
		this.labPotNums = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.height = 20;
		t.right = 5;
		t.size = 20;
		t.text = "1938499";
		t.textAlign = "left";
		t.textColor = 0xc6b1c0;
		t.top = 3;
		t.verticalAlign = "middle";
		t.width = 95;
		return t;
	};
	_proto.grpTexasPots_i = function () {
		var t = new eui.Group();
		this.grpTexasPots = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.top = 230;
		t.visible = false;
		t.width = 350;
		return t;
	};
	_proto.grpHost_i = function () {
		var t = new eui.Group();
		this.grpHost = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.right = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.imgHostBg_i(),this.btnDisableHost_i()];
		return t;
	};
	_proto.imgHostBg_i = function () {
		var t = new eui.Image();
		this.imgHostBg = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto.btnDisableHost_i = function () {
		var t = new EButton();
		this.btnDisableHost = t;
		t.bottom = 20;
		t.height = 65;
		t.horizontalCenter = 0;
		t.width = 165;
		t.skinName = TexasTableSkin$Skin277;
		return t;
	};
	_proto.grpDeck_i = function () {
		var t = new eui.Group();
		this.grpDeck = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.horizontalCenter = 0;
		t.top = 170;
		t.visible = false;
		t.width = 20;
		return t;
	};
	_proto.grpSystemMessage_i = function () {
		var t = new eui.Group();
		this.grpSystemMessage = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = -100;
		t.width = 600;
		return t;
	};
	return TexasTableSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/User/AccountSetting.exml'] = window.AccountSettingSkin = (function (_super) {
	__extends(AccountSettingSkin, _super);
	var AccountSettingSkin$Skin278 = 	(function (_super) {
		__extends(AccountSettingSkin$Skin278, _super);
		function AccountSettingSkin$Skin278() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AccountSettingSkin$Skin278.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return AccountSettingSkin$Skin278;
	})(eui.Skin);

	var AccountSettingSkin$Skin279 = 	(function (_super) {
		__extends(AccountSettingSkin$Skin279, _super);
		function AccountSettingSkin$Skin279() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AccountSettingSkin$Skin279.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return AccountSettingSkin$Skin279;
	})(eui.Skin);

	var AccountSettingSkin$Skin280 = 	(function (_super) {
		__extends(AccountSettingSkin$Skin280, _super);
		function AccountSettingSkin$Skin280() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AccountSettingSkin$Skin280.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_purple_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.stroke = 3;
			t.strokeColor = 0x860DC6;
			t.text = "修改头像";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return AccountSettingSkin$Skin280;
	})(eui.Skin);

	var AccountSettingSkin$Skin281 = 	(function (_super) {
		__extends(AccountSettingSkin$Skin281, _super);
		function AccountSettingSkin$Skin281() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AccountSettingSkin$Skin281.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "修改昵称";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return AccountSettingSkin$Skin281;
	})(eui.Skin);

	var AccountSettingSkin$Skin282 = 	(function (_super) {
		__extends(AccountSettingSkin$Skin282, _super);
		function AccountSettingSkin$Skin282() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AccountSettingSkin$Skin282.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_blue_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.stroke = 3;
			t.strokeColor = 0x5D88DD;
			t.text = "修改密码";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return AccountSettingSkin$Skin282;
	})(eui.Skin);

	var AccountSettingSkin$Skin283 = 	(function (_super) {
		__extends(AccountSettingSkin$Skin283, _super);
		function AccountSettingSkin$Skin283() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AccountSettingSkin$Skin283.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_n_png";
			t.percentWidth = 100;
			return t;
		};
		return AccountSettingSkin$Skin283;
	})(eui.Skin);

	function AccountSettingSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgUserAvatar","labUserName","labUserId","btnChangeAvatar","txtNickName","btnChangeNickName","txtPassWord1","txtPassWord2","btnChangePassword","grpAccountSetting","lablistAvatarsNoData","listAvatars","btnGrpClose","grpChangeAvatars"];
		
		this.height = 450;
		this.width = 550;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.grpAccountSetting_i(),this.grpChangeAvatars_i()];
	}
	var _proto = AccountSettingSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "win_s_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "txt_title_me_png";
		t.top = 25;
		t.width = 75;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = AccountSettingSkin$Skin278;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 20;
		t.top = 15;
		t.width = 55;
		t.skinName = AccountSettingSkin$Skin279;
		return t;
	};
	_proto.grpAccountSetting_i = function () {
		var t = new eui.Group();
		this.grpAccountSetting = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.top = 90;
		t.percentWidth = 90;
		t.elementsContent = [this._Image2_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i(),this.labUserName_i(),this._Label1_i(),this.labUserId_i(),this.btnChangeAvatar_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 70;
		t.elementsContent = [this.imgUserAvatar_i(),this._Image3_i()];
		return t;
	};
	_proto.imgUserAvatar_i = function () {
		var t = new eui.Image();
		this.imgUserAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.horizontalCenter = 0;
		t.source = "avatar_man_png";
		t.verticalCenter = 0;
		t.width = 54;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "avatar_bg_png";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.labUserName_i = function () {
		var t = new eui.Label();
		this.labUserName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 22;
		t.text = "用户的名字";
		t.textAlign = "left";
		t.textColor = 0xf9f5e8;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 80;
		t.size = 20;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0xedbe31;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 31;
		return t;
	};
	_proto.labUserId_i = function () {
		var t = new eui.Label();
		this.labUserId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 113;
		t.size = 20;
		t.text = "2123121";
		t.textAlign = "left";
		t.textColor = 0xF9F5E8;
		t.top = 35;
		t.verticalAlign = "middle";
		t.width = 94;
		return t;
	};
	_proto.btnChangeAvatar_i = function () {
		var t = new EButton();
		this.btnChangeAvatar = t;
		t.height = 50;
		t.right = 30;
		t.top = 10;
		t.width = 140;
		t.skinName = AccountSettingSkin$Skin280;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 90;
		t.percentWidth = 100;
		t.elementsContent = [this.txtNickName_i(),this.btnChangeNickName_i()];
		return t;
	};
	_proto.txtNickName_i = function () {
		var t = new eui.TextInput();
		this.txtNickName = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.left = 10;
		t.prompt = "昵称";
		t.verticalCenter = 0.5;
		t.width = 300;
		return t;
	};
	_proto.btnChangeNickName_i = function () {
		var t = new EButton();
		this.btnChangeNickName = t;
		t.height = 50;
		t.right = 30;
		t.top = 0;
		t.width = 140;
		t.skinName = AccountSettingSkin$Skin281;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 110;
		t.horizontalCenter = 0;
		t.top = 160;
		t.percentWidth = 100;
		t.elementsContent = [this.txtPassWord1_i(),this.txtPassWord2_i(),this.btnChangePassword_i()];
		return t;
	};
	_proto.txtPassWord1_i = function () {
		var t = new eui.TextInput();
		this.txtPassWord1 = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.left = 10;
		t.prompt = "密码第一次";
		t.top = 5;
		t.width = 300;
		return t;
	};
	_proto.txtPassWord2_i = function () {
		var t = new eui.TextInput();
		this.txtPassWord2 = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.left = 10;
		t.prompt = "再输一次";
		t.top = 55;
		t.width = 300;
		return t;
	};
	_proto.btnChangePassword_i = function () {
		var t = new EButton();
		this.btnChangePassword = t;
		t.height = 50;
		t.right = 30;
		t.verticalCenter = 0;
		t.width = 140;
		t.skinName = AccountSettingSkin$Skin282;
		return t;
	};
	_proto.grpChangeAvatars_i = function () {
		var t = new eui.Group();
		this.grpChangeAvatars = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.top = 90;
		t.visible = false;
		t.percentWidth = 90;
		t.elementsContent = [this._Image4_i(),this.lablistAvatarsNoData_i(),this._Scroller1_i(),this.btnGrpClose_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.lablistAvatarsNoData_i = function () {
		var t = new eui.Label();
		this.lablistAvatarsNoData = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "暂无数据.";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.skinName = "ListSkin";
		t.top = 0;
		t.percentWidth = 100;
		t.viewport = this.listAvatars_i();
		return t;
	};
	_proto.listAvatars_i = function () {
		var t = new eui.List();
		this.listAvatars = t;
		t.percentHeight = 100;
		t.horizontalCenter = -2;
		t.itemRendererSkinName = ItemAvatarSkin;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 5;
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.verticalGap = 5;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto.btnGrpClose_i = function () {
		var t = new EButton();
		this.btnGrpClose = t;
		t.height = 45;
		t.right = 0;
		t.top = 0;
		t.width = 50;
		t.skinName = AccountSettingSkin$Skin283;
		return t;
	};
	return AccountSettingSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/User/BindAlipay.exml'] = window.BindAlipaySkin = (function (_super) {
	__extends(BindAlipaySkin, _super);
	var BindAlipaySkin$Skin284 = 	(function (_super) {
		__extends(BindAlipaySkin$Skin284, _super);
		function BindAlipaySkin$Skin284() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindAlipaySkin$Skin284.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return BindAlipaySkin$Skin284;
	})(eui.Skin);

	var BindAlipaySkin$Skin285 = 	(function (_super) {
		__extends(BindAlipaySkin$Skin285, _super);
		function BindAlipaySkin$Skin285() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindAlipaySkin$Skin285.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return BindAlipaySkin$Skin285;
	})(eui.Skin);

	var BindAlipaySkin$Skin286 = 	(function (_super) {
		__extends(BindAlipaySkin$Skin286, _super);
		function BindAlipaySkin$Skin286() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindAlipaySkin$Skin286.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "绑定";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return BindAlipaySkin$Skin286;
	})(eui.Skin);

	function BindAlipaySkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","txtAccount","txtAlipayId","btnBindPayment","grpAlipay"];
		
		this.height = 500;
		this.width = 600;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpAlipay_i()];
	}
	var _proto = BindAlipaySkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.horizontalCenter = 0;
		t.source = "win_title_red_bg_png";
		t.top = -30;
		t.width = 515;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 10;
		t.top = 10;
		t.width = 55;
		t.skinName = BindAlipaySkin$Skin284;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 10;
		t.top = 8;
		t.width = 55;
		t.skinName = BindAlipaySkin$Skin285;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_bind_alipay_png";
		t.top = 10;
		return t;
	};
	_proto.grpAlipay_i = function () {
		var t = new eui.Group();
		this.grpAlipay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 380;
		t.horizontalCenter = 0;
		t.top = 80;
		t.width = 500;
		t.elementsContent = [this._Image2_i(),this.txtAccount_i(),this._Label1_i(),this.txtAlipayId_i(),this._Label2_i(),this.btnBindPayment_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.txtAccount_i = function () {
		var t = new eui.TextInput();
		this.txtAccount = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.prompt = "姓名";
		t.top = 20;
		t.width = 380;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "姓名, 真实的姓名";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 70;
		t.verticalAlign = "middle";
		t.width = 450;
		return t;
	};
	_proto.txtAlipayId_i = function () {
		var t = new eui.TextInput();
		this.txtAlipayId = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.prompt = "支付宝账号";
		t.top = 120;
		t.width = 380;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "支付宝账号, 真实的支付宝账号";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 170;
		t.verticalAlign = "middle";
		t.width = 450;
		return t;
	};
	_proto.btnBindPayment_i = function () {
		var t = new EButton();
		this.btnBindPayment = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 320;
		t.width = 145;
		t.skinName = BindAlipaySkin$Skin286;
		return t;
	};
	return BindAlipaySkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/User/BindBankCard.exml'] = window.BindBankCardSkin = (function (_super) {
	__extends(BindBankCardSkin, _super);
	var BindBankCardSkin$Skin287 = 	(function (_super) {
		__extends(BindBankCardSkin$Skin287, _super);
		function BindBankCardSkin$Skin287() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindBankCardSkin$Skin287.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return BindBankCardSkin$Skin287;
	})(eui.Skin);

	var BindBankCardSkin$Skin288 = 	(function (_super) {
		__extends(BindBankCardSkin$Skin288, _super);
		function BindBankCardSkin$Skin288() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindBankCardSkin$Skin288.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		return BindBankCardSkin$Skin288;
	})(eui.Skin);

	var BindBankCardSkin$Skin289 = 	(function (_super) {
		__extends(BindBankCardSkin$Skin289, _super);
		function BindBankCardSkin$Skin289() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindBankCardSkin$Skin289.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_call_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x1B8E15;
			t.text = "绑定";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return BindBankCardSkin$Skin289;
	})(eui.Skin);

	function BindBankCardSkin() {
		_super.call(this);
		this.skinParts = ["imgWin","btnGoBack","btnClose","imgWinTitle","txtAccount","txtBandCardNo","txtBankName","btnBindPayment","grpBindBankCard"];
		
		this.height = 500;
		this.width = 600;
		this.elementsContent = [this.imgWin_i(),this._Image1_i(),this.btnGoBack_i(),this.btnClose_i(),this.imgWinTitle_i(),this.grpBindBankCard_i()];
	}
	var _proto = BindBankCardSkin.prototype;

	_proto.imgWin_i = function () {
		var t = new eui.Image();
		this.imgWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(96,72,580,433);
		t.source = "win_info_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.horizontalCenter = 0;
		t.source = "win_title_red_bg_png";
		t.top = -30;
		t.width = 515;
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 55;
		t.left = 10;
		t.top = 10;
		t.width = 55;
		t.skinName = BindBankCardSkin$Skin287;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new EButton();
		this.btnClose = t;
		t.height = 55;
		t.right = 10;
		t.top = 8;
		t.width = 55;
		t.skinName = BindBankCardSkin$Skin288;
		return t;
	};
	_proto.imgWinTitle_i = function () {
		var t = new eui.Image();
		this.imgWinTitle = t;
		t.horizontalCenter = 0;
		t.source = "txt_title_bind_bank_card_png";
		t.top = 10;
		return t;
	};
	_proto.grpBindBankCard_i = function () {
		var t = new eui.Group();
		this.grpBindBankCard = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 380;
		t.horizontalCenter = 0;
		t.top = 80;
		t.width = 500;
		t.elementsContent = [this._Image2_i(),this.txtAccount_i(),this._Label1_i(),this.txtBandCardNo_i(),this._Label2_i(),this.txtBankName_i(),this._Label3_i(),this.btnBindPayment_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(62,62,376,376);
		t.source = "trans_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.txtAccount_i = function () {
		var t = new eui.TextInput();
		this.txtAccount = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.prompt = "账号名称";
		t.top = 20;
		t.width = 380;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "账号名称, 真实的账号姓名";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 70;
		t.verticalAlign = "middle";
		t.width = 450;
		return t;
	};
	_proto.txtBandCardNo_i = function () {
		var t = new eui.TextInput();
		this.txtBandCardNo = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.prompt = "银行卡卡号";
		t.top = 120;
		t.width = 380;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "银行卡卡号, 真实的银行卡卡号";
		t.textAlign = "center";
		t.textColor = 0xcec7b3;
		t.top = 170;
		t.verticalAlign = "middle";
		t.width = 450;
		return t;
	};
	_proto.txtBankName_i = function () {
		var t = new eui.TextInput();
		this.txtBankName = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.prompt = "开户行名称";
		t.top = 220;
		t.width = 380;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "开户行名称,请输入较为详细的开户行名称";
		t.textAlign = "center";
		t.textColor = 0xCEC7B3;
		t.top = 270;
		t.verticalAlign = "middle";
		t.width = 450;
		return t;
	};
	_proto.btnBindPayment_i = function () {
		var t = new EButton();
		this.btnBindPayment = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.top = 320;
		t.width = 145;
		t.skinName = BindBankCardSkin$Skin289;
		return t;
	};
	return BindBankCardSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/User/ItemAvatar.exml'] = window.ItemAvatarSkin = (function (_super) {
	__extends(ItemAvatarSkin, _super);
	var ItemAvatarSkin$Skin290 = 	(function (_super) {
		__extends(ItemAvatarSkin$Skin290, _super);
		function ItemAvatarSkin$Skin290() {
			_super.call(this);
			this.skinParts = ["laAction"];
			
			this.elementsContent = [this._Image1_i(),this.laAction_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemAvatarSkin$Skin290.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_yellow_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.laAction_i = function () {
			var t = new eui.Label();
			this.laAction = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.stroke = 3;
			t.strokeColor = 0xfc9f3a;
			t.text = "选择";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ItemAvatarSkin$Skin290;
	})(eui.Skin);

	function ItemAvatarSkin() {
		_super.call(this);
		this.skinParts = ["imgAvatar","btnAction"];
		
		this.height = 180;
		this.width = 150;
		this.elementsContent = [this._Image1_i(),this.imgAvatar_i(),this.btnAction_i()];
	}
	var _proto = ItemAvatarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.source = "shop_item_bg_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.imgAvatar_i = function () {
		var t = new eui.Image();
		this.imgAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.horizontalCenter = -0.5;
		t.source = "man_01_png";
		t.top = 10;
		t.width = 120;
		return t;
	};
	_proto.btnAction_i = function () {
		var t = new EButton();
		this.btnAction = t;
		t.bottom = 5;
		t.height = 45;
		t.horizontalCenter = 0;
		t.width = 120;
		t.skinName = ItemAvatarSkin$Skin290;
		return t;
	};
	return ItemAvatarSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Zjh/CardsPKSeatUI.exml'] = window.CardsPKSeatUISkin = (function (_super) {
	__extends(CardsPKSeatUISkin, _super);
	function CardsPKSeatUISkin() {
		_super.call(this);
		this.skinParts = ["imgAvatar","labName","grpPokers"];
		
		this.height = 125;
		this.width = 200;
		this.elementsContent = [this._Image1_i(),this.imgAvatar_i(),this.labName_i(),this.grpPokers_i()];
	}
	var _proto = CardsPKSeatUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 125;
		t.left = 0;
		t.source = "avatar_v2_s_png";
		t.width = 105;
		return t;
	};
	_proto.imgAvatar_i = function () {
		var t = new eui.Image();
		this.imgAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 12;
		t.source = "avatar_man_png";
		t.top = 5;
		t.width = 78;
		return t;
	};
	_proto.labName_i = function () {
		var t = new eui.Label();
		this.labName = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.bottom = 3;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.left = 0;
		t.size = 16;
		t.text = "会飞的猪头肉";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 102;
		return t;
	};
	_proto.grpPokers_i = function () {
		var t = new eui.Group();
		this.grpPokers = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 100;
		t.top = 15;
		t.width = 100;
		return t;
	};
	return CardsPKSeatUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Zjh/ZjhSeatUI.exml'] = window.ZjhSeatUISkin = (function (_super) {
	__extends(ZjhSeatUISkin, _super);
	function ZjhSeatUISkin() {
		_super.call(this);
		this.skinParts = ["imgWinner","imgAvatar","labName","labChips","imgButtonSeat","imgUserReady","labLastAction","imgProfileTimingBG"];
		
		this.height = 90;
		this.width = 195;
		this.elementsContent = [this._Image1_i(),this.imgWinner_i(),this.imgAvatar_i(),this.labName_i(),this.labChips_i(),this.imgButtonSeat_i(),this.imgUserReady_i(),this.labLastAction_i(),this.imgProfileTimingBG_i()];
	}
	var _proto = ZjhSeatUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 90;
		t.left = 0;
		t.source = "avatar_hb_s_png";
		t.width = 195;
		return t;
	};
	_proto.imgWinner_i = function () {
		var t = new eui.Image();
		this.imgWinner = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "hprofile_winner_png";
		t.width = 195;
		return t;
	};
	_proto.imgAvatar_i = function () {
		var t = new eui.Image();
		this.imgAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.horizontalCenter = -54.5;
		t.source = "avatar_man_png";
		t.verticalCenter = -3;
		t.width = 78;
		return t;
	};
	_proto.labName_i = function () {
		var t = new eui.Label();
		this.labName = t;
		t.anchorOffsetX = 0;
		t.bottom = 35;
		t.height = 30;
		t.right = 0;
		t.size = 18;
		t.text = "会飞的猪头肉";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto.labChips_i = function () {
		var t = new eui.Label();
		this.labChips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.height = 30;
		t.right = 0;
		t.size = 18;
		t.text = "10000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto.imgButtonSeat_i = function () {
		var t = new eui.Image();
		this.imgButtonSeat = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.height = 35;
		t.left = 25;
		t.source = "dealer_s_png";
		t.width = 35;
		return t;
	};
	_proto.imgUserReady_i = function () {
		var t = new eui.Image();
		this.imgUserReady = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.height = 30;
		t.left = 30;
		t.source = "user_ready_png";
		t.visible = false;
		t.width = 30;
		return t;
	};
	_proto.labLastAction_i = function () {
		var t = new eui.Label();
		this.labLastAction = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.right = 0;
		t.size = 18;
		t.text = "不抢";
		t.textAlign = "center";
		t.textColor = 0xf4d66e;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 120;
		return t;
	};
	_proto.imgProfileTimingBG_i = function () {
		var t = new eui.Image();
		this.imgProfileTimingBG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "hprofile_bg_timing_png";
		t.visible = false;
		t.width = 195;
		return t;
	};
	return ZjhSeatUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Zjh/ZjhTable.exml'] = window.ZjhTableSkin = (function (_super) {
	__extends(ZjhTableSkin, _super);
	var ZjhTableSkin$Skin291 = 	(function (_super) {
		__extends(ZjhTableSkin$Skin291, _super);
		function ZjhTableSkin$Skin291() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhTableSkin$Skin291.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		return ZjhTableSkin$Skin291;
	})(eui.Skin);

	var ZjhTableSkin$Skin292 = 	(function (_super) {
		__extends(ZjhTableSkin$Skin292, _super);
		function ZjhTableSkin$Skin292() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhTableSkin$Skin292.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_scores_png";
			t.percentWidth = 100;
			return t;
		};
		return ZjhTableSkin$Skin292;
	})(eui.Skin);

	var ZjhTableSkin$Skin293 = 	(function (_super) {
		__extends(ZjhTableSkin$Skin293, _super);
		function ZjhTableSkin$Skin293() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhTableSkin$Skin293.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_host_png";
			t.percentWidth = 100;
			return t;
		};
		return ZjhTableSkin$Skin293;
	})(eui.Skin);

	var ZjhTableSkin$Skin294 = 	(function (_super) {
		__extends(ZjhTableSkin$Skin294, _super);
		function ZjhTableSkin$Skin294() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhTableSkin$Skin294.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu_setting_png";
			t.percentWidth = 100;
			return t;
		};
		return ZjhTableSkin$Skin294;
	})(eui.Skin);

	var ZjhTableSkin$Skin295 = 	(function (_super) {
		__extends(ZjhTableSkin$Skin295, _super);
		function ZjhTableSkin$Skin295() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhTableSkin$Skin295.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "准备";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ZjhTableSkin$Skin295;
	})(eui.Skin);

	var ZjhTableSkin$Skin296 = 	(function (_super) {
		__extends(ZjhTableSkin$Skin296, _super);
		function ZjhTableSkin$Skin296() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhTableSkin$Skin296.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "开始匹配";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ZjhTableSkin$Skin296;
	})(eui.Skin);

	var ZjhTableSkin$Skin297 = 	(function (_super) {
		__extends(ZjhTableSkin$Skin297, _super);
		function ZjhTableSkin$Skin297() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhTableSkin$Skin297.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_raise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 1;
			t.strokeColor = 0xf4cf13;
			t.text = "邀请好友";
			t.textAlign = "center";
			t.textColor = 0x282626;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return ZjhTableSkin$Skin297;
	})(eui.Skin);

	var ZjhTableSkin$Skin298 = 	(function (_super) {
		__extends(ZjhTableSkin$Skin298, _super);
		function ZjhTableSkin$Skin298() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhTableSkin$Skin298.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_check_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = false;
			t.fontFamily = "微软雅黑";
			t.horizontalCenter = 0;
			t.size = 26;
			t.text = "取消托管";
			t.textColor = 0xFFFFFF;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhTableSkin$Skin298;
	})(eui.Skin);

	function ZjhTableSkin() {
		_super.call(this);
		this.skinParts = ["btnGoBack","btnScores","labEntityId","grpEntityId","grpLeftTop","btnEnableHost","btnSetting","grpSetting","labRoundNums","labPotNums","labBottomScore","grpZjhPot","grpPutBetsControls","grpPokers_Seat2","grpPokers_Seat3","grpPokers_Seat4","grpPokers_Seat7","grpChipsNum_Seat7","grpChipsNum_Seat6","grpChipsNum_Seat5","grpChipsNum_Seat4","grpChipsNum_Seat3","grpChipsNum_Seat2","grpChipsNum_Seat1","grpChipsNum_Seat9","grpChipsNum_Seat8","grpPokers_Seat6","grpPokers_Seat5","grpPokers_Seat8","grpPokers_Seat9","grpChips","grpTimer","grpPokers_Seat1","grpProfile_Seat1","grpProfile_Seat2","grpProfile_Seat3","grpProfile_Seat4","grpProfile_Seat5","grpProfile_Seat6","grpProfile_Seat7","grpProfile_Seat8","grpProfile_Seat9","btnReady","btnGoMatching","btnInvite","grpReadyAndInvite","imgHostBg","btnDisableHost","grpHost","grpDeck","grpSystemMessage"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.grpLeftTop_i(),this.grpSetting_i(),this.labRoundNums_i(),this.grpZjhPot_i(),this.grpPutBetsControls_i(),this.grpPokers_Seat2_i(),this.grpPokers_Seat3_i(),this.grpPokers_Seat4_i(),this.grpPokers_Seat7_i(),this.grpChipsNum_Seat7_i(),this.grpChipsNum_Seat6_i(),this.grpChipsNum_Seat5_i(),this.grpChipsNum_Seat4_i(),this.grpChipsNum_Seat3_i(),this.grpChipsNum_Seat2_i(),this.grpChipsNum_Seat1_i(),this.grpChipsNum_Seat9_i(),this.grpChipsNum_Seat8_i(),this.grpPokers_Seat6_i(),this.grpPokers_Seat5_i(),this.grpPokers_Seat8_i(),this.grpPokers_Seat9_i(),this.grpChips_i(),this.grpTimer_i(),this.grpPokers_Seat1_i(),this.grpProfile_Seat1_i(),this.grpProfile_Seat2_i(),this.grpProfile_Seat3_i(),this.grpProfile_Seat4_i(),this.grpProfile_Seat5_i(),this.grpProfile_Seat6_i(),this.grpProfile_Seat7_i(),this.grpProfile_Seat8_i(),this.grpProfile_Seat9_i(),this.grpReadyAndInvite_i(),this.grpHost_i(),this.grpDeck_i(),this.grpSystemMessage_i()];
	}
	var _proto = ZjhTableSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(231,136,486,307);
		t.source = "zjhtable_png";
		t.top = 0;
		return t;
	};
	_proto.grpLeftTop_i = function () {
		var t = new eui.Group();
		this.grpLeftTop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.top = 10;
		t.width = 430.67;
		t.elementsContent = [this.btnGoBack_i(),this.btnScores_i(),this.grpEntityId_i()];
		return t;
	};
	_proto.btnGoBack_i = function () {
		var t = new EButton();
		this.btnGoBack = t;
		t.height = 75;
		t.left = 0;
		t.top = 0;
		t.width = 75;
		t.skinName = ZjhTableSkin$Skin291;
		return t;
	};
	_proto.btnScores_i = function () {
		var t = new EButton();
		this.btnScores = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 100;
		t.verticalCenter = 0;
		t.width = 75;
		t.skinName = ZjhTableSkin$Skin292;
		return t;
	};
	_proto.grpEntityId_i = function () {
		var t = new eui.Group();
		this.grpEntityId = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 200;
		t.top = 0;
		t.width = 230;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.labEntityId_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.left = 90;
		t.source = "txt_bg_png";
		t.verticalCenter = 0;
		t.width = 140;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 10;
		t.size = 24;
		t.text = "房间号:";
		t.textAlign = "left";
		t.textColor = 0xcec7b3;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 90;
		return t;
	};
	_proto.labEntityId_i = function () {
		var t = new eui.Label();
		this.labEntityId = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "微软雅黑";
		t.height = 35;
		t.left = 100;
		t.size = 26;
		t.stroke = 3;
		t.text = "803832";
		t.textAlign = "left";
		t.textColor = 0xf4ba0c;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto.grpSetting_i = function () {
		var t = new eui.Group();
		this.grpSetting = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.right = 10;
		t.top = 10;
		t.width = 201.33;
		t.elementsContent = [this.btnEnableHost_i(),this.btnSetting_i()];
		return t;
	};
	_proto.btnEnableHost_i = function () {
		var t = new EButton();
		this.btnEnableHost = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.verticalCenter = 0.5;
		t.width = 75;
		t.skinName = ZjhTableSkin$Skin293;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new EButton();
		this.btnSetting = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 75;
		t.skinName = ZjhTableSkin$Skin294;
		return t;
	};
	_proto.labRoundNums_i = function () {
		var t = new eui.Label();
		this.labRoundNums = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x626a8f;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 160;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grpZjhPot_i = function () {
		var t = new eui.Group();
		this.grpZjhPot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.horizontalCenter = 0;
		t.top = 210;
		t.width = 260;
		t.elementsContent = [this._Image3_i(),this.labPotNums_i(),this.labBottomScore_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.horizontalCenter = 0;
		t.source = "zjh_pots_png";
		t.verticalCenter = 0;
		t.width = 260;
		return t;
	};
	_proto.labPotNums_i = function () {
		var t = new eui.Label();
		this.labPotNums = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.height = 30;
		t.right = 0;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 117;
		return t;
	};
	_proto.labBottomScore_i = function () {
		var t = new eui.Label();
		this.labBottomScore = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.left = 35;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.grpPutBetsControls_i = function () {
		var t = new eui.Group();
		this.grpPutBetsControls = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.height = 65;
		t.horizontalCenter = 7;
		t.width = 900;
		return t;
	};
	_proto.grpPokers_Seat2_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 230;
		t.height = 60;
		t.right = 220;
		t.width = 120;
		return t;
	};
	_proto.grpPokers_Seat3_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.right = 220;
		t.top = 280;
		t.width = 120;
		return t;
	};
	_proto.grpPokers_Seat4_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.right = 220;
		t.top = 120;
		t.width = 120;
		return t;
	};
	_proto.grpPokers_Seat7_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 220;
		t.top = 120;
		t.width = 120;
		return t;
	};
	_proto.grpChipsNum_Seat7_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.left = 220;
		t.top = 180;
		t.touchThrough = true;
		t.width = 120;
		return t;
	};
	_proto.grpChipsNum_Seat6_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.left = 390;
		t.top = 200;
		t.touchThrough = true;
		t.width = 120;
		return t;
	};
	_proto.grpChipsNum_Seat5_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.right = 370;
		t.top = 200;
		t.touchThrough = true;
		t.width = 120;
		return t;
	};
	_proto.grpChipsNum_Seat4_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.right = 220;
		t.top = 180;
		t.touchThrough = true;
		t.width = 120;
		return t;
	};
	_proto.grpChipsNum_Seat3_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.right = 220;
		t.top = 340;
		t.touchThrough = true;
		t.width = 120;
		return t;
	};
	_proto.grpChipsNum_Seat2_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 200;
		t.height = 30;
		t.right = 220;
		t.touchThrough = true;
		t.width = 120;
		return t;
	};
	_proto.grpChipsNum_Seat1_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 195;
		t.height = 30;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.width = 150;
		return t;
	};
	_proto.grpChipsNum_Seat9_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 260;
		t.height = 30;
		t.left = 215;
		t.touchThrough = true;
		t.width = 120;
		return t;
	};
	_proto.grpChipsNum_Seat8_i = function () {
		var t = new eui.Group();
		this.grpChipsNum_Seat8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.left = 220;
		t.top = 340;
		t.touchThrough = true;
		t.width = 120;
		return t;
	};
	_proto.grpPokers_Seat6_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 390;
		t.top = 140;
		t.touchThrough = true;
		t.width = 120;
		return t;
	};
	_proto.grpPokers_Seat5_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.right = 370;
		t.top = 140;
		t.touchThrough = true;
		t.width = 120;
		return t;
	};
	_proto.grpPokers_Seat8_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.left = 220;
		t.top = 280;
		t.touchThrough = true;
		t.width = 120;
		return t;
	};
	_proto.grpPokers_Seat9_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 200;
		t.height = 60;
		t.left = 215;
		t.width = 120;
		return t;
	};
	_proto.grpChips_i = function () {
		var t = new eui.Group();
		this.grpChips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto.grpTimer_i = function () {
		var t = new eui.Group();
		this.grpTimer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.width = 400;
		return t;
	};
	_proto.grpPokers_Seat1_i = function () {
		var t = new eui.Group();
		this.grpPokers_Seat1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 95;
		t.height = 90;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.width = 220;
		return t;
	};
	_proto.grpProfile_Seat1_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 95;
		t.height = 90;
		t.left = 315;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat2_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 200;
		t.height = 90;
		t.right = 20;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat3_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.right = 20;
		t.top = 280;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat4_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.right = 20;
		t.top = 120;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat5_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.right = 340;
		t.top = 50;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat6_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 340;
		t.top = 50;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat7_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 20;
		t.top = 120;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat8_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 20;
		t.top = 280;
		t.width = 195;
		return t;
	};
	_proto.grpProfile_Seat9_i = function () {
		var t = new eui.Group();
		this.grpProfile_Seat9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 200;
		t.height = 90;
		t.left = 20;
		t.width = 195;
		return t;
	};
	_proto.grpReadyAndInvite_i = function () {
		var t = new eui.Group();
		this.grpReadyAndInvite = t;
		t.anchorOffsetX = 0;
		t.bottom = 256;
		t.height = 130;
		t.horizontalCenter = -11.5;
		t.visible = false;
		t.width = 520;
		t.elementsContent = [this.btnReady_i(),this.btnGoMatching_i(),this.btnInvite_i()];
		return t;
	};
	_proto.btnReady_i = function () {
		var t = new EButton();
		this.btnReady = t;
		t.height = 65;
		t.width = 180;
		t.x = 5;
		t.y = 25;
		t.skinName = ZjhTableSkin$Skin295;
		return t;
	};
	_proto.btnGoMatching_i = function () {
		var t = new EButton();
		this.btnGoMatching = t;
		t.height = 65;
		t.width = 180;
		t.x = 200;
		t.y = 25;
		t.skinName = ZjhTableSkin$Skin296;
		return t;
	};
	_proto.btnInvite_i = function () {
		var t = new EButton();
		this.btnInvite = t;
		t.height = 65;
		t.width = 180;
		t.x = 400;
		t.y = 25;
		t.skinName = ZjhTableSkin$Skin297;
		return t;
	};
	_proto.grpHost_i = function () {
		var t = new eui.Group();
		this.grpHost = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.right = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.imgHostBg_i(),this.btnDisableHost_i()];
		return t;
	};
	_proto.imgHostBg_i = function () {
		var t = new eui.Image();
		this.imgHostBg = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "win_bg_png";
		t.top = 0;
		return t;
	};
	_proto.btnDisableHost_i = function () {
		var t = new EButton();
		this.btnDisableHost = t;
		t.bottom = 20;
		t.height = 65;
		t.horizontalCenter = 0;
		t.width = 165;
		t.skinName = ZjhTableSkin$Skin298;
		return t;
	};
	_proto.grpDeck_i = function () {
		var t = new eui.Group();
		this.grpDeck = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.horizontalCenter = 0;
		t.top = 100;
		t.touchThrough = true;
		t.width = 210;
		return t;
	};
	_proto.grpSystemMessage_i = function () {
		var t = new eui.Group();
		this.grpSystemMessage = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.touchThrough = true;
		t.verticalCenter = -100;
		t.width = 600;
		return t;
	};
	return ZjhTableSkin;
})(eui.Skin);