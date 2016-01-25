import * as React from "react";
import {curry} from "./lang";
import {Uint64} from "./custom_types";
import {HelloRequest, Person, PersonContactEnum} from "./immut_helloworld";
import {Backend} from "./api_endpoint";

interface ComponentAProps<T> {
    foo: T;
}

interface ComponentAState {
    responses?: string;
    greeting?: string;
    contact_type?: PersonContactEnum;
    contact_info?: Person;
    contact_text?: string;
}

class ComponentADef<T> extends React.Component<ComponentAProps<T>, ComponentAState> {
    constructor(props?: ComponentAProps<T>) {
        super(props);
        this.state = { responses: "", greeting: "hello world!", contact_type: PersonContactEnum.NOT_SET, contact_info: new Person(), contact_text: "" };
    }

    render(): JSX.Element {
        return <div>
					 <textarea id="log" readOnly={true} value={this.state.responses} style={{ width: "100%", height: "200px" }}></textarea><br />
					 <input type="text" id="text" value={this.state.greeting} onChange={curry(this.onChangeGreeting, this) } /> <button onClick={curry(this.send, this) }>Send</button>
					 <div>
						 <input type="radio" name="contact-group" id="no-contact-info" onClick={curry(this.setNoContact, this) } defaultChecked /><label>No Contact Information</label>
							 <input type="radio" name="contact-group" id="personal-email" onClick={curry(this.setEmailContact, this) }/><label>Email</label>
						 <input type="radio" name="contact-group" id="personal-mobile" onClick={curry(this.setMobileContact, this) }/><label>Mobile</label>
						 <input type="text" id="contact-info" value={this.state.contact_text} onChange={curry(this.updateContactInformation, this) }/>
						 <button id="set-contact-info" onClick={curry(this.setContactInformation, this) }>Set Contact Information</button>
          </div>
            </div>;
    }

    private setNoContact(): void {
        this.setState({ "contact_type": PersonContactEnum.NOT_SET });
    }

    private setEmailContact(): void {
        this.setState({ "contact_type": PersonContactEnum.EMAIL });
    }

    private setMobileContact(): void {
        this.setState({ "contact_type": PersonContactEnum.MOBILE });
    }

    private updateContactInformation(ev: React.FormEvent): void {
        this.setState({ contact_text: (ev.target as HTMLInputElement).value });
    }

    private setContactInformation(): void {
        let person = new Person();
        let value = (document.getElementById("contact-info") as HTMLInputElement).value;
        switch (this.state.contact_type) {
            case PersonContactEnum.NOT_SET:
                break;
            case PersonContactEnum.MOBILE:
                if (value === " " || value.length === 0) {
                    throw new Error("Field cannot be left empty");
                } else {
                    person = person.SetMobile(Uint64.Parse(value));
                }
                break;
            case PersonContactEnum.EMAIL:
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

        let contactInfo = "";
        switch (person.GetContactCase()) {
            case PersonContactEnum.NOT_SET:
                contactInfo = "No Contact Information has been set";
                break;
            case PersonContactEnum.MOBILE:
                contactInfo = "Mobile: " + person.Mobile.toNumber();
                break;
            case PersonContactEnum.EMAIL:
                contactInfo = "Email: " + person.Email;
                break;
            default:
                throw new Error("Unknown enumeration value");
        }

        backend.SayHello(x).then((y) => {
            this.setState({ responses: this.state.responses + "\n" + y.Message + ", Contact Information: " + contactInfo });
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
