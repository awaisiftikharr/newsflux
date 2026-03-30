import { ReactNode } from "react";
import Header from "./Header";
import BreakingNewsTicker from "./BreakingNewsTicker";
import Footer from "./Footer";
import AdSlot from "./AdSlot";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col mesh-gradient">
    <Header />
    <BreakingNewsTicker />
    <AdSlot variant="leaderboard" className="container mt-4" />
    <main className="flex-1 container py-8">{children}</main>
    <Footer />
  </div>
);

export default Layout;
