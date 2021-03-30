import React from 'react';
import { OptForm, Feature } from '../components'
import { FaqsContainer } from '../containers/faqs'
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';


export default function Home() {
    return (
        <>  <HeaderContainer>
             
                <Feature>
                    <Feature.Title>Unlimited FIlms,, TV programs and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                    <OptForm.Input placeholder="E-mail Address"/>
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                     <OptForm.Text>Ready to watch? Enter yuor email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                    </Feature>
                
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}