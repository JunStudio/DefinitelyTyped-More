// Type definitions for layer mobile
// Project: https://github.com/sentsin/layer/tree/2.x/src/mobile
// Definitions by: JunStudio
// Definitions: https://github.com/JunStudio/DefinitelyTyped-More

declare let layer: layer.layerStatic;

declare namespace layer {
    /**
     * layer.mobile DefinitelyTyped Typing file
     */
    interface openOptions {
        content: string,
        btn?: string,
        shadeClose?: boolean,
        yes?: Function,
        time?: number,
        skin?: string
    }
    interface layerStatic {
        open(openOptions): string;
        closeAll();
        close(index: number);
        v; string;
    }
}
