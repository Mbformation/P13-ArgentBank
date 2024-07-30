export default function CheckBox() {
    return (
        <div className="input-remember">
            <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" name="rememberme" id="remember-me" />
        </div>    
    );
}