export function loadPackage(pkg: string, cb: () => void) {
     fgui.UIPackage.loadPackage(`UI/${pkg}`, cb);
}