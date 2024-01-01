export enum ESkillAtkType {
    /** 激光 */
    laser = 1,
    /** 子弹 */
    bullets = 2,
}

/** 技能控制类型 */
export enum ESkillBuffType {
    /** 减速 */
    downSpeed = 1,
    /** 静止 */
    stop = 2,
    /** 爆炸 */
    boom = 3,
}

export interface SkillInfo {
    /** 冷却时间 */
    cd: number;
    /** 穿透 **/
    piercing: number;
    /** 次数 */
    atkNum: number;
    /** 效果 */
    effect: number;
    /** 攻击类型 */
    type: ESkillAtkType;
    /** 速度 */
    speed: number;
    /** 伤害倍数 */
    hitMultiple: number;
    buff: {
        /** buff类型 */
        type:ESkillBuffType;
        /** 持续时间 */
        time: number;
    }
}

export class SkillControl {
    skillArr: SkillInfo[] = [];

    initSkill() {

    }
}