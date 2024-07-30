export interface InputTextProps {
    name: string;
}

export default function InputText(props: InputTextProps) {
    const htmlAttvalue = props.name.toLowerCase();

    return (
        <div className="input-wrapper">
            <label htmlFor={htmlAttvalue}>{props.name}</label>
            <input type="text" name={htmlAttvalue} id={htmlAttvalue} />
        </div>
    );
}