import Header from "./components/Header";
import Alert from "./components/Alert";
import FirstSction from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourSection from "./components/FourSection";
import FiveSection from "./components/FiveSection";
import LastSection from "./components/LastSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div>
      {<Header />}
      <Alert />
      <FirstSction />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FiveSection />
      <LastSection />
      <FooterSection/>
    </div>
  );
}
export default App;
