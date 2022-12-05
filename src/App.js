import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Votre propre boutique de NFTs en ligne. Commencez à vendre et à faire croître votre collection"
        description="Achetez, stockez, collectez des NFTS, échangez et gagnez de la crypto."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Utilisation facile et intuitive."
        description="En quelques clics, vous pouvez commencer à vendre , acheter et échanger des NFTs sur votre propre boutique en ligne."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deploiement"
        description="Construit avec Expo, vous pouvez facilement déployer votre application sur tous les appareils des utilisateurs."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Créative et personnalisable"
        description="L'application est entièrement personnalisable et vous pouvez facilement la modifier pour répondre à vos besoins."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Avec passion par <span className="bold">Julien Sarda</span>
        </p>
      </div>
    </>
  );
};

export default App;
