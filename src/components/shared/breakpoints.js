const sizes = {
  mobileSS: '239px',
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  landscapeMobileSS: '319px',
  landscapeMobileS: '568px',
  landscapeMobileM: '812px',
  landscapeMobileL: '925px',
  tablet: '768px',
  laptop: '1024px',
  laptopM: '1280px',
  laptopL: '1440px',
  desktop: '2560px',
  desktop4K: '3840px',
};

export const devices = {
  mobileSS: `(min-width: ${sizes.mobileSS})`,
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,

  landscapeMobileSS: `(min-width: ${sizes.landscapeMobileSS}) and (orientation: landscape) and (max-height: 450px)`,
  landscapeMobileS: `(min-width: ${sizes.landscapeMobileS}) and (max-height: 450px) and (orientation: landscape)`,
  landscapeMobileM: `(min-width: ${sizes.landscapeMobileM}) and (max-height: 450px) and (orientation: landscape)`,
  landscapeMobileL: `(min-width: ${sizes.landscapeMobileL}) and (max-height: 450px) and (orientation: landscape)`,

  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop}) and (orientation: landscape)`,
  laptopM: `(min-width: ${sizes.laptopM}) and (orientation: landscape)`,
  laptopL: `(min-width: ${sizes.laptopL}) and (orientation: landscape)`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktop4K: `(min-width: ${sizes.desktop4K})`,
};
