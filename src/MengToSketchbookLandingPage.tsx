import React from 'react';
import { splitTypographyProps, usePageTypography, type PageTypographyProps } from './shaders/landing-pages/pageTypography';
import { LandingPageFrame, type LandingPageProps } from './shaders/landing-pages/LandingPageFrame';
import { MENG_TO_SKETCHBOOK_TYPOGRAPHY } from './shaders/landing-pages/pageRecipes';
// The registered component, isolated from unrelated ThreeUI scene imports.
export function MengToSketchbookLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(MENG_TO_SKETCHBOOK_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="Meng To — Singapore Sketchbook" sourceUrl="/Sketchbook/landing-pages/meng-to-sketchbook.html" />;
}
