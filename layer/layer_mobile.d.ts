/**
 * Created by Jun on 2016-11-15.
 */
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