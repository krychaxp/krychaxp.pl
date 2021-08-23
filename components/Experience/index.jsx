import React from 'react';
import SEO from 'components/Seo';
import Img from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpWrapper, Card, ImgWrapper } from './index.styles';
import { websites } from './index.constants';

export const Experience = () => {
  const { t } = useTranslation('menu');
  const title = t('experience');
  const websitesList = websites.map((v) => v[1]).reduce((total, next) => `${total}, ${next}`);
  return (
    <>
      <SEO title={title} image="doswiadczenie.png" description={`Moje doświadczenie: ${websitesList}`} />
      <h1>{title}</h1>
      <ExpWrapper>
        {websites.map(({ link, name, img, position, stack }) => (
          <Card key={name}>
            <Link href={link} passHref>
              <ImgWrapper target="_blank" rel="noopener">
                <Img src={img} alt={name} height={250} width={500} layout="responsive" />
              </ImgWrapper>
            </Link>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content">
                {name}
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Stanowisko: {position} Developer
                  <br />
                  Stack: {stack}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Card>
        ))}
      </ExpWrapper>
    </>
  );
};
