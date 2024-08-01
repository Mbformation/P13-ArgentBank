import Header from "../components/Header";
import Account from "../components/Account";
import Footer from "../components/Footer";
import Hero from "../components/Hero"
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

// Composant User pour la page profil
export default function User(){
    const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
    return (
        <>
            {isSignedIn && 
            <>
                <Header />
                <main className="main bg-dark">
                    <Hero />
                    <h2 className="sr-only">Accounts</h2>
                    <Account 
                        title="Argent Bank Checking (x8349)" 
                        amount="$2,082.79" 
                        description="Available Balance"/> 
                    <Account 
                        title="Argent Bank Savings (x6712)" 
                        amount="$10,928.42" 
                        description="Available Balance"/>
                    <Account 
                        title="Argent Bank Credit Card (x8349)" 
                        amount="$184.30" 
                        description="Current Balance"/>
                </main>
                <Footer />
            </> }
            {!isSignedIn && 
            <>
                <Header />
                <main className="main bg-dark" style={{ fontSize: "20px", color: "white", paddingTop: "20px", paddingBottom: "75vh"} }>
                    User not authenticated
                </main>
                <Footer />
            </> }
        </>
            
        
    )
}