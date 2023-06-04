import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ navigation, settings, children, footer }) {
  return (
    
    <div className="text-slate-800 bg-grey-cool">
      <Header navigation={navigation} settings={settings}   />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
   
  );
}
