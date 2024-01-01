import MainMenu from "../../FairyGUI-Demo/MainMenu";
import { loadPackage } from "../Common/util";
import View from "../Basic/View";

export default class CheckPoint extends View {
    onLoad() {
        loadPackage('R_Monster', null);
        loadPackage('R_Player', null);
        loadPackage('R_Image', null);
        loadPackage('R_Font', null);
        loadPackage(`C_Btn`, null);
        this.loadPackage('CheckPoint');
    }

    onUILoaded() {
        super.onUILoaded();
        this.onClick('btn_speed', () => {
            this.showView(MainMenu);
        }, this);
        this.initProgress('pro_hp', 30, 100);
        this.schedule(() => {
            const proHp = this.getProgress('pro_hp');
            this.setProgress('pro_hp', proHp.value += 1);
        }, 1);
        const monster = this.createComp('C_CheckPoint', 'Monster');
        monster.x = 200;
        monster.y = 200;
    }
}