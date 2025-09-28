import { Provider as ReduxProvider } from "./contexts/ReduxContext";
import GlobalStyles from "./components/GlobalStyles";
import AppRoutes from "./components/AppRoutes";

function App() {
    return (
        <ReduxProvider>
            <GlobalStyles>
                <AppRoutes />
            </GlobalStyles>
        </ReduxProvider>
    );
}

export default App;
