import { components } from "../../../app/components";
import { BaseComponent } from "../component/baseComponent";
import { componentsMeta } from "../component/componentsMeta";

type DIContainer = { [key: string]: any };

const scopedContainer: DIContainer = {}; // TODO: dispose on route change, TODO: expose dispose to public use
const singletonContainer: DIContainer = {};
let nextInstanceId = 0;

export function resolve(name: string, params: any[] = []) {
    const info = componentsMeta.list[name];
    let instance: any = null;
    let container: boolean | DIContainer = false;
    if (info.di === "Singleton") {
        container = singletonContainer;
    } else if (info.di === "Scoped") {
        container = scopedContainer;
    }
    if (container && (name in container)) {
        // console.log('Returning from cache', name, container[name]);
        return container[name];
    }
    if (!info.dependencies) {
        instance = new components[name]();
    } else {
        const constructArguments: any[] = [];
        for (let i in info.dependencies) {
            const dependency = info.dependencies[i];
            var argument: any = null; // d.null
            if (params && (dependency.argName in params)) {
                argument = params[dependency.argName];
            }
            else if (dependency.default) {
                argument = dependency.default; // TODO: copy object or array
            } else if (dependency.null) {
                argument = null;
            } else if (dependency.builtIn) {
                argument = dependency.name === 'string' ? '' : 0;
            } else {
                argument = resolve(dependency.name);
            }
            constructArguments.push(argument);
        }
        instance = new components[name](...constructArguments);
    }
    if (info.base) {
        (<BaseComponent<any>>instance).__id = ++nextInstanceId + '';
    }
    if (container) {
        container[name] = instance;
    }
    return instance;
}