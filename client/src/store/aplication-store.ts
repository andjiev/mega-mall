import { RouterState } from 'connected-react-router';

import * as DashboardStore from './dashboard-store';

export default interface ApplicationState {
    router?: RouterState;

    dashboardStore: DashboardStore.DashboardStore;
}