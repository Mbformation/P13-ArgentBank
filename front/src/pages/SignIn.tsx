import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";
export default function SignIn(){
    return (
        <div>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Form />
                </section>
            </main>
            <Footer />
        </div>
    )
}