import Charta_Footer from "../../Common/Footer/footer";
import Charta_offers from "../../Component/landingPage/charta_Offers";
import FAQS from "../../Component/landingPage/FAQs";
import NetworkReward from "../../Component/landingPage/network_Rewards";
import Solution_Creation from "../../Component/landingPage/solutionCreation_Platform";
import Testimonials from "../../Component/landingPage/Testimonials";
import Thriving_Network from "../../Component/landingPage/thriving_Network";
import Transparent_Reward from "../../Component/landingPage/transparent_Rewards/transReward";
import Charta_Update from "../../Component/landingPage/Updates";
import Layout from "../../Layout";
const HomeContent = () => {
  return (
    <Layout>
      <Solution_Creation />
      <Thriving_Network />
      <Transparent_Reward />
      <NetworkReward />
      <Charta_offers />
      <Testimonials />
      <FAQS />
      <Charta_Update />
      <Charta_Footer />
    </Layout>
  )
}
export default HomeContent