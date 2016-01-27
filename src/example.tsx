import * as React from "react";
import * as ReactDOM from "react-dom";
import {curry} from "./lang";
import {Uint64} from "./custom_types";
import {HelloRequest, Person, ContactEnum} from "./immut_helloworld";
import {Backend} from "./api_endpoint";

interface ComponentAProps<T> {
	foo: T;
}

interface ComponentAState {
	responses?: string;
	greeting?: string;
	contact_type?: ContactEnum;
	contact_info?: Person;
	contact_text?: string;
}

class ComponentADef<T> extends React.Component<ComponentAProps<T>, ComponentAState> {
	constructor(props?: ComponentAProps<T>) {
		super(props);
		this.state = { responses: "", greeting: "hello world!", contact_type: Person.ContactCase.CONTACT_NOT_SET, contact_info: new Person(), contact_text: "" };
	}

	render(): JSX.Element {
		return <div>
					 <textarea id="log" readOnly={true} value={this.state.responses} style={{ width: "100%", height: "200px" }}></textarea><br />
					 <input type="text" id="text" value={this.state.greeting} onChange={curry(this.onChangeGreeting, this) } /> <button onClick={curry(this.send, this) }>Send</button>
					 <div style={{ margin: "5px", padding: "5px" }}>
						 <label>Name: </label><input type="text" id="person-name" />
						 <div style={{ margin: "5px", padding: "5px" }}>
							 <input type="radio" name="contact-group" id="no-contact-info" onClick={curry(this.setNoContact, this) } defaultChecked /><label>No Contact Information</label>
								</div>
						 <div style={{ margin: "5px", padding: "5px" }}>
							 <input type="radio" name="contact-group" id="personal-email"
								 onClick={curry(this.setEmailContact, this) }/>
							 <label> Email </label>
							 <input type="text" id="contact-email"
								 value={this.state.contact_type === Person.ContactCase.EMAIL ? this.state.contact_text : ""}
								 ref="contact-email"
								 onChange={curry(this.updateContactInformation, this) }
								 disabled={this.state.contact_type === Person.ContactCase.EMAIL ? false : true} />
								</div>
						 <div style={{ margin: "5px", padding: "5px" }}>
							 <input type="radio" name="contact-group" id="personal-mobile"
								 onClick={curry(this.setMobileContact, this) }/>
							 <label> Mobile </label>
							 <input type="text" id="contact-mobile"
								 value={this.state.contact_type === Person.ContactCase.MOBILE ? this.state.contact_text : ""}
								 ref="contact-mobile"
								 onChange={curry(this.updateContactInformation, this) }
								 disabled={this.state.contact_type === Person.ContactCase.MOBILE ? false : true}/>
								</div>

						 <button id="set-contact-info"
							 onClick={curry(this.setContactInformation, this) }>Set Contact Information</button>
							</div>
			</div>;
	}

	private setNoContact(): void {
		this.setState({ contact_type: Person.ContactCase.CONTACT_NOT_SET, contact_text: "" });
	}

	private setEmailContact(): void {
		this.setState({ contact_type: Person.ContactCase.EMAIL, contact_text: "" });
		(ReactDOM.findDOMNode(this.refs["contact-email"]) as HTMLElement).focus();
	}

	private setMobileContact(): void {
		this.setState({ contact_type: Person.ContactCase.MOBILE, contact_text: "" });
		(ReactDOM.findDOMNode(this.refs["contact-mobile"]) as HTMLElement).focus();
	}

	private updateContactInformation(ev: React.FormEvent): void {
		this.setState({ contact_text: (ev.target as HTMLInputElement).value });
	}

	private setContactInformation(): void {
		let value: string;
		let person = this.state.contact_info;
		let name = (document.getElementById("person-name") as HTMLInputElement).value;
		if (name === " " || name.length === 0) {
			throw new Error("Name Field cannot be empty");
		} else {
			person = person.SetName(name);
		}
		switch (this.state.contact_type) {
			case Person.ContactCase.CONTACT_NOT_SET:
				person = person.ClearEmail();
				person = person.ClearMobile();
				break;
			case Person.ContactCase.MOBILE:
				value = (document.getElementById("contact-mobile") as HTMLInputElement).value;
				if (value === " " || value.length === 0) {
					throw new Error("Field cannot be left empty");
				} else {
					person = person.SetMobile(Uint64.Parse(value));
				}
				break;
			case Person.ContactCase.EMAIL:
				value = (document.getElementById("contact-email") as HTMLInputElement).value;
				if (value === " " || value.length === 0) {
					throw new Error("Field cannot be left empty");
				} else {
					person = person.SetEmail(value);
				}
				break;
			default:
				throw new Error("Unknown state");
		};
		this.setState({ contact_info: person });
	}

	private send(): void {
		let backend = new Backend("http://localhost:8080");
		let x = new HelloRequest();
		x = x.SetName(this.state.greeting);
		x = x.SetAge(Uint64(20));

		let person = this.state.contact_info;
		let name = person.Name ? person.Name : "No Name Set";
		let contactInfo = "";
		switch (person.GetContactCase()) {
			case Person.ContactCase.CONTACT_NOT_SET:
				contactInfo = "No Contact Information has been set";
				break;
			case Person.ContactCase.MOBILE:
				contactInfo = "Mobile: " + person.Mobile.toNumber();
				break;
			case Person.ContactCase.EMAIL:
				contactInfo = "Email: " + person.Email;
				break;
			default:
				throw new Error("Unknown enumeration value");
		}

		backend.SayHello(x).then((y) => {
			this.setState({ responses: this.state.responses + "\n" + y.Message + ", Name: " + name + ", Contact Information: " + contactInfo });
		}, () => {
			console.log("we failed");
		});
	}

	private onChangeGreeting(ev: React.FormEvent): void {
		this.setState({ greeting: (ev.target as HTMLInputElement).value });
	}

}

export function ComponentA<T>(theType: Class<T>): ReactComponentClass<ComponentAProps<T>> {
	return ComponentADef as ReactComponentClass<ComponentAProps<T>>;
}

export function BuildMyComponent(): JSX.Element {
	let x: string = "test";
	let StringComponentA = ComponentA(String);
	return <StringComponentA foo = { x } />;
}
