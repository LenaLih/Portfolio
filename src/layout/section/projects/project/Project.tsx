import styled from "styled-components";

type ProjectpropType = {
   title: string;
   text: string;
   stakc: string;
   src?: string;
   link?: string;
   href?: string;
};
export const Project = (props: ProjectpropType) => {
   return (
   <StyledProject>
      <Image src={props.src} />
      <InfoBox>
         <Title>{props.title}</Title>
         <Text>{props.text}</Text>
         <Stakc>{props.stakc}</Stakc>
         <LinkBox>
            <Link href="#">Посетить сайт</Link>
            <Link href="#">Посмотреть код</Link>
         </LinkBox>
      </InfoBox>
   </StyledProject>
   );
};

const StyledProject = styled.div`
  background-color: rgb(186, 185, 185);
  max-width: 375px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const Image = styled.img``;
const InfoBox = styled.div`
  padding: 10px;
`;

const Title = styled.h3``;

const Text = styled.p``;

const Stakc = styled.p``;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a``;
