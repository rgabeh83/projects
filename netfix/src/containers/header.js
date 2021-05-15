import React from 'react';
import { Header } from '../../src/components';
import * as ROUTES from '../../src/constants/routes';

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}