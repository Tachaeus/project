import Header from "./Header";
import Footer from "./Footer";

export default function Page() {
    return (
        <div className= "min-h-screen flex flex-col items-center justify-center text-center">
            <header />
            <main clasName= "p-4">
                <h1 clasName= "text-2x1 font-bold">Welcome To My React Page</h1>
                <p>This is a simple example with two components.</p>
            </main>
            <footer />
        </div>
    );
}