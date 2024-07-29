import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DuesComponent } from './components/dues/dues.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingPageComponent } from './components/setting-page/setting-page.component';
import { AddLoanComponent } from './components/add-loan/add-loan.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { OtpPageComponent } from './components/otp-page/otp-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

export const routes: Routes = [
    {
        path: '', component: LoginPageComponent
    },
    {
        path: 'otp-page', component: OtpPageComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'dues', component: DuesComponent
    },
    {
        path: 'customers', component: CustomersComponent
    },
    {
        path: 'profile', component: ProfileComponent
    },
    {
        path: 'settings', component: SettingPageComponent
    },
    {
        path: 'addLoan', component: AddLoanComponent
    },
    {
        path: 'transaction', component: TransactionComponent
    },
    {
        path: 'sign-up', component: SignupPageComponent
    },
];
