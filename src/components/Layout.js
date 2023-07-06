import { Header } from "./Header";
import { Footer } from "./Footer";
import ThreeScene from './ThreeScene';


export function Layout({ navigation, settings, children, footer }) {
  return (
    
    <div className="text-slate-800 bg-grey-cool font-Ampersand">
      <Header navigation={navigation} settings={settings}   />
      <main className="font-size: calc(100vh / 768 * 10);">{children}</main>
      <Footer footer={footer} />
      <ThreeScene />
    </div>
    
   
  );
}
