import { Tables } from "../../resources/cfg/Types";
import { loadJson } from "./functions";

const { ccclass, property } = cc._decorator;

import CheckPoint from "../CheckPoint/CheckPoint";

@ccclass
export default class Config {

}
let promise = []
let confCache = {}

new Tables(function(name){
    let p = loadJson(`cfgdata/${name}`).then((r)=>{
        confCache[name] = r.json
    })
    promise.push(p)
    return {}
})

export let Tb: Tables

Promise.all(promise).then(function(res){
    Tb = new Tables(function(name){
        return confCache[name]
    })
    promise = undefined
    confCache = undefined
}).catch(err=>{
    cc.error(err)
})


