const { ccclass, property } = cc._decorator;

import CheckPoint from "../CheckPoint/CheckPoint";

@ccclass
export default class DemoEntry extends cc.Component {

    private _closeButton: fgui.GObject;
    private _currentDemo: cc.Component;

    onLoad() {
        fgui.GRoot.create();

        this.node.on("start_game", this.onStart, this);
        this.addComponent(CheckPoint);
    }

    onStart(demo) {
        this._currentDemo = demo;
        this._closeButton = fgui.UIPackage.createObject("MainMenu", "CloseButton");
        this._closeButton.setPosition(fgui.GRoot.inst.width - this._closeButton.width - 10, fgui.GRoot.inst.height - this._closeButton.height - 10);
        this._closeButton.addRelation(fgui.GRoot.inst, fgui.RelationType.Right_Right);
        this._closeButton.addRelation(fgui.GRoot.inst, fgui.RelationType.Bottom_Bottom);
        this._closeButton.sortingOrder = 100000;
        this._closeButton.onClick(this.onClosed, this);
        fgui.GRoot.inst.addChild(this._closeButton);
    }

    onClosed() {
        fgui.GRoot.inst.removeChildren(0, -1, true);
        this.node.removeComponent(this._currentDemo);

        this.addComponent(CheckPoint);
    }

    start() {

    }
}
