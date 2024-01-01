import { loadPackage } from "../Common/util";

const { ccclass, property } = cc._decorator;
@ccclass
export default class View extends cc.Component {
    public _view: fgui.GComponent;

    onLoad() {

    }

    curPkg: string = '';

    loadPackage(pkg: string) {
        this.curPkg = pkg;
        loadPackage(`C_${pkg}`, this.onUILoaded.bind(this));
    }

    onUILoaded() {
        const pkg = this.curPkg;
        fgui.UIPackage.addPackage(`UI/C_${pkg}`);

        this._view = fgui.UIPackage.createObject(`C_${pkg}`, pkg).asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
    }

    createComp(pkg: string, comp: string) {
        const newComp = fgui.UIPackage.createObject(pkg, comp).asCom;
        fgui.GRoot.inst.addChild(newComp);
        return newComp;
    }

    getChild(compName: string) {
        return this._view.getChild(compName);
    }

    getProgress(compName: string) {
        return this.getChild(compName) as fgui.GProgressBar;
    }

    /** 注册点击事件 */
    onClick(compName: string, cb: () => void, content: any) {
        this.getChild(compName).onClick(cb, content);
    }

    onDestroy() {
        this._view.dispose();
    }

    /** 展示其他界面 */
    showView(demoClass: typeof cc.Component): void {
        let demo: cc.Component = this.addComponent(demoClass);
        this.node.emit("start_demo", demo);
        this.destroy();
    }

    /** 初始化进度条 */
    initProgress(compName: string, value: number, max: number) {
        const progress = this.getProgress(compName)
        if (progress instanceof fgui.GProgressBar) {
            progress.value = value;
            progress.max = max;
        }
    }

    /** 设置进度条 */
    setProgress(compName: string, value: number) {
        const progress = this.getProgress(compName)
        if (progress instanceof fgui.GProgressBar) {
            progress.value = progress.value > progress.max ? progress.max : value;
        }
    }
}