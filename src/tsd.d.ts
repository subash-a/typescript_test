/// <reference path="../jspm_packages/npm/immutable@3.7.5/dist/immutable.d.ts" />
/// <reference path="../typings/d3/d3.d.ts" />
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/es6-collections/es6-collections.d.ts" />
/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
interface Class<T> {
	new (): T;
}

interface ReactComponentClass<P> {
	new (props?: P, context?: {}): __React.Component<P, {}>;
}
