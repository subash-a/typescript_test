import * as React from "react";

// **************************
// Define a generic component
interface ComponentAProps<T> {
	foo: T;
}

class ComponentADef<T> extends React.Component<ComponentAProps<T>, {}> {
	constructor(props?: ComponentAProps<T>) {
		super(props);
	}

	render(): JSX.Element {
		return <span>This is a { this.props.foo }</span>;
	}
}

export function ComponentA<T>(theType: Class<T>): ReactComponentClass<ComponentAProps<T>> {
	return ComponentADef as ReactComponentClass<ComponentAProps<T>>;
}
// **************************

export function BuildMyComponent(): JSX.Element {
	let x: string = "test";
	let StringComponentA = ComponentA(String);
	return <StringComponentA foo = { x } />;
}
