import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";

import "./assets/css/style.css";
// import "./components/upgrade-member/member.css"
import "react-toastify/dist/ReactToastify.css";

import 'bootstrap/dist/css/bootstrap.min.css';
// import "./assets/css/style.css";
import "./common/CustomInputField/index.module.scss";
import "./assets/css/project.css"

import { getMenusdata, sendNotification } from "./api/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setIsLogin } from "./slice/auth";
import { getToken2 } from "./utils/localStorage";
import { getToken } from 'firebase/messaging';
import { messaging } from "./firebase/fireBase";
import LoginPage from "./pages/login";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import LoginPasswordReset from "./pages/paswordResetPages";
import PrivateRoute from "./privateRote/PrivateRoute";
import DasBoardRight from "./pages/dasBoardRight/DasBoardRight";
import DashboardLeadPage from "./pages/Dashboard-Lead/Index";
import PageNotFound from "./common/pageNotFound/PageNotFound";
import LevelIncome from "./pages/income/levelincome";
import MatchingIncome from "./pages/income/matchingincome";
import IbIncome from "./pages/income/ibincome";
import AchivementIncome from "./pages/income/achivement";
import CompoundingIncome from "./pages/income/compoundingIncome";
import RewardIncome from "./pages/income/reward";
import ClubIncome from "./pages/income/clubincome";
import StakingMatchingIncome from "./pages/income/stakingMatchingincome";
import TradingProfitIncome from "./pages/income/tradingProfitIncome";
import DirectTeamPage from "./pages/network/directTeam";
import AllTeamPage from "./pages/network/allTeam";
import UnilevelPage from "./pages/network/unilevel";
import BusinessHistoryPage from "./pages/network/businessHistory";
import TradingLevelIncomePage from "./pages/income/tradingLevelIncome";
import CompoundingProfitIncomePage from "./pages/income/compoundingProfitIncome";
import GiftTlcProfitPage from "./pages/income/giftTLCProfit";
import GiftDirectTLCProfitPage from "./pages/income/giftDirectTLCProfit";
import TradingRobotReport from "./pages/robot/tradingRobot";
import TradingRobotForm from "./components/robot/tradingRobot/tradingRobotForm/TradingRobotForm";
import RenewalTradingReports from "./pages/robot/renewalTrading";
import RenewalTradingForm from "./components/robot/renewaltradingRobot/renewalTradingForm/RenewalTradingForm";
import InvestmentRobotForm from "./components/robot/investRobot/investmentRobotForm/InvestmentRobotForm";
import IvestmentRobotReports from "./pages/robot/investmentrobotReports";
import PortfolioReports from "./pages/robot/portfolio";
import StakingTLCReports from "./pages/staking/stakingTLC";
import StakingTLCForm from "./components/staking/stakingTLC/stakingTLCForm/StakingTLCForm";
import StakingIncomeReports from "./pages/staking/stakingTLC/stakingIncome";
import Tlc2isoPage from "./pages/TLC2.0/TLC2.0ICO";
import TLC20ICOAdd from "./pages/TLC2.0/TLC2.0ICO/TLC2.0ICOAdd/TLC2.0ICOAdd";
import TLC20ICOLevelIncomePage from "./pages/TLC2.0/TLC2.0 ICOLevelIncome";
import TLC20LevelIncomePage from "./pages/TLC2.0/TLC2.0LevelIncome";
import TLC20ProfitPage from "./pages/TLC2.0/TLC2.0Profit";
import DepositviaGatewayPage from "./pages/deposit/depositviaGateway";
import DepositInvoicePage from "./pages/deposit/depositInvoices";
import DepositINRPackagePage from "./pages/deposit/depositINRPackage";
import DepositINRStakingPage from "./pages/deposit/depositINRStaking";
import DepositInvoicesINRPage from "./pages/deposit/depositInvoicesINR";
import TransfertoPackageWalletPage from "./pages/transfer/transfertoPackageWallet";
import BuyAibot from "./pages/buySell/aibotReport";
import SellAibotReports from "./pages/buySell/sellAibot/SellAibot";
import BuySellReports from "./pages/buySell/buySellReports";
import DepositePayment from "./components/deposit/depositINRPackage/depositPayment/DepositePayment";
import Signup from "./components/signup/Signup";
import WithdrawalAmountReports from "./pages/financial/withdrawalAmount/Index";
import WithdrawalForm from "./components/financial/withdrawalamount/withdrawalAmountForm/WithdrawalAmountForm";
import WithdrawalAmountINRReports from "./pages/financial/withdrawalAmountINR";
import WithdrawalINRForm from "./components/financial/withdrawalamountINR/withdrawalAmountINRForm/WithdrawalAmountINRForm";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [navigateState, setNavigateState] = useState(null);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // console.log(getToken());
    // requestPermissions()
    if (getToken2()) {
      dispatch(setIsLogin({ isLogin: true }));
      navigate(location?.pathname);
    }

  }, []);

  useEffect(() => {
    setIsAuthenticated(isLogin);


  }, [isLogin]);





  const [tokenNoti, setokenNoti] = useState(null);

  const sendNotification2 = async (token) => {
    try {
      let result = await sendNotification({ type: 'Browser', token: token });

    } catch (error) {

    }
  };

  async function requestPermissions() {


    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, { vapidKey: 'BPmnN4enu6SLX6ASW7dctK6Q0j3GnTUhL5ZRi16I6RDqGav4khN2JIHmdKcL4eTqwRBu-PWmaUa1G-Oaor7AcF4' }).then((currentToken) => {
          if (currentToken) {
            console.log('Got FCM device token:', currentToken);
            setokenNoti(currentToken)
            if (isLogin) {
              sendNotification2(currentToken)

            }
            // Send the token to your server or display it on the UI
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
      }
    })
  }
  // console.log(window.localStorage.getItem('dashRout') == null);

  const [mnualData, setManualData] = useState()
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navigate to={"/loginPage"} />} />  */}
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to={"/loginPage"} />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<LoginPasswordReset />} />
            <Route path="*" element={<Navigate to="/loginPage" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to={`${window.localStorage.getItem('dashRout')}`} />} />
            {/* <Route path="/" element={<Navigate to={`/admin`} />} /> */}
            <Route
              path=""
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              {/* <Route path={`${location?.pathname}`} element={<DasBoardRight />} /> */}
              <Route path={`contest_dashboard`} element={<DasBoardRight />} />
              <Route path={`lead_dashboard`} element={<DashboardLeadPage />} />
              <Route path="aibot/level-income" element={<LevelIncome />} />
              <Route path="aibot/matching-income" element={<MatchingIncome />} />
              <Route path="aibot/staking-matching-income" element={<StakingMatchingIncome />} />
              <Route path="aibot/ib-income" element={<IbIncome />} />
              <Route path="aibot/achivement-income" element={<AchivementIncome />} />
              <Route path="aibot/compounding-income" element={<CompoundingIncome />} />
              <Route path="aibot/reward-income" element={<RewardIncome />} />
              <Route path="aibot/club-income" element={<ClubIncome />} />
              <Route path="aibot/trading-income" element={<TradingProfitIncome />} />
              <Route path="direct-team" element={<DirectTeamPage />} />
              <Route path="all-team" element={<AllTeamPage />} />
              <Route path="unilevel" element={<UnilevelPage />} />
              <Route path="business-histroy" element={<BusinessHistoryPage />} />
              <Route path="trading-level-income" element={<TradingLevelIncomePage />} />
              <Route path="Compounding-profit-income" element={<CompoundingProfitIncomePage />} />
              <Route path="TLC-profit" element={<GiftTlcProfitPage />} />
              <Route path="direct-TLC-profit" element={<GiftDirectTLCProfitPage />} />
              <Route path="aibot/trading-robot-reports" element={<TradingRobotReport />} />
              <Route path="aibot/trading-robot-create" element={<TradingRobotForm />} />
              <Route path="aibot/renewal-trading-reports" element={<RenewalTradingReports />} />
              <Route path="aibot/renewal-trading-create" element={<RenewalTradingForm />} />
              <Route path="aibot/investment-robot-reports" element={<IvestmentRobotReports />} />
              <Route path="aibot/investment-robot-create" element={<InvestmentRobotForm />} />
              <Route path="aibot/portfolio" element={<PortfolioReports />} />
              <Route path="aibot/staking-tlc-reports" element={<StakingTLCReports />} />
              <Route path="aibot/staking-tlc-create" element={<StakingTLCForm />} />
              <Route path="aibot/staking-income-reports" element={<StakingIncomeReports />} />
              <Route path="AIBOT-ICO" element={<Tlc2isoPage />} />
              <Route path="buy-Aibot-ICO" element={<TLC20ICOAdd />} />
              <Route path="AIBOT20-ICO-level-income" element={<TLC20ICOLevelIncomePage />} />
              <Route path="AIBOT20-level-income" element={<TLC20LevelIncomePage />} />
              <Route path="AIBOT20-profit" element={<TLC20ProfitPage />} />
              <Route path="deposit" element={<DepositviaGatewayPage />} />
              <Route path="invoices" element={<DepositInvoicePage />} />
              <Route path="deposit-INR" element={<DepositINRPackagePage />} />
              <Route path="deposit-INR-Staking" element={<DepositINRStakingPage />} />
              <Route path="invoices-INR" element={<DepositInvoicesINRPage />} />
              <Route path="transfer-fund" element={<TransfertoPackageWalletPage />} />
              <Route path="aibot/buy-aibot" element={<BuyAibot />} />
              <Route path="aibot/sell-aibot-reports" element={<SellAibotReports />} />
              <Route path="aibot/buy-sell-reports" element={<BuySellReports />} />
              <Route path="aibot/payment/paymentId=CPJA39DSO335NVJQ5XKXZSGDNN" element={<DepositePayment />} />
              <Route path="aibot/finance/withdrawal-amount" element={<WithdrawalAmountReports />} />
              <Route path="aibot/finance/withdrawal-amount-create" element={<WithdrawalForm />} />
              <Route path="aibot/finance/withdrawal-amount-INR" element={<WithdrawalAmountINRReports />} />
              <Route path="aibot/finance/withdrawal-amount-INR-create" element={<WithdrawalINRForm />} />
              <Route path="*" element={<PageNotFound />} />
              {/* <Route path="/signup" element={<Signup />} /> */}

            </Route>
          </>
        )}

      </Routes>
    </>
  );
}

export default App;
