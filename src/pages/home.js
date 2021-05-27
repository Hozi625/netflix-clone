import React from "react";
import { JumbotronContainer } from "../container/jumbotron";
import { FooterContainer } from "../container/footer";
import { FaqsContainer } from "../container/faqs";
import { HeaderContainer } from "../container/header";
import { Feature, OptForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.Subtitle>
            Watch anywhere, Cancel at any time.
          </Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address"></OptForm.Input>
            <OptForm.Button>Try it Now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
