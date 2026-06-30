import type {ReactNode} from "react";

type AuthLayoutProps = {
    title: string;
    subtitle: string;
    children: ReactNode;
};

const AuthLayout = ({title, subtitle, children}: AuthLayoutProps) => {
    return (
        <main className="auth-page">
            <div className="app-container">
                <section className="auth-card">
                    <h1>{title}</h1>
                    <p className="auth-subtitle">
                        {subtitle}
                    </p>
                    {children}
                </section>
            </div>
        </main>
    );
};

export default AuthLayout;