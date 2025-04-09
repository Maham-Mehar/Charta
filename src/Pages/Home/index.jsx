import Charta_offers from "../../Component/landingPage/charta_Offers";
import NetworkReward from "../../Component/landingPage/network_Rewards";
import Solution_Creation from "../../Component/landingPage/solutionCreation_Platform";
import Thriving_Network from "../../Component/landingPage/thriving_Network";
import Transparent_Reward from "../../Component/landingPage/transparent_Rewards";
import Layout from "../../Layout";
const HomeContent =()=>{
    return(
      <Layout>
        <Solution_Creation />
        <Thriving_Network />
        <Transparent_Reward />
        <NetworkReward />
        <Charta_offers />
      </Layout>
    )
}
export default HomeContent