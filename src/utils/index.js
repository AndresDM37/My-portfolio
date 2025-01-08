export const calculatedSizes = (isSmall, isMobile, isTablet, isDesktop) => {
  return {
    deskScale: isSmall
      ? 0.05
      : isMobile
      ? 0.06
      : isTablet
      ? 0.065
      : isDesktop
      ? 0.08
      : 0.1, // Escala para pantallas más grandes
    deskPosition: isSmall
      ? [0, -3, 0]
      : isMobile
      ? [0, -4, 0]
      : isTablet
      ? [0, -5, 0]
      : isDesktop
      ? [0, -13, 0]
      : [0, -7, 0], // Ajuste para pantallas grandes
    cubePosition: isSmall
      ? [2, -4, 0]
      : isMobile
      ? [3, -5, 0]
      : isTablet
      ? [4, -5, 0]
      : isDesktop
      ? [5, -6, 0]
      : [6, -7, 0],
    reactLogoPosition: isSmall
      ? [0, 4, 0]
      : isMobile
      ? [0, 4.5, 0]
      : isTablet
      ? [0, 5, 0]
      : isDesktop
      ? [0, 5.5, 0]
      : [0, 6, 0],
    ringPosition: isSmall
      ? [-5, 6, 0]
      : isMobile
      ? [-6, 7, 0]
      : isTablet
      ? [-8, 8, 0]
      : isDesktop
      ? [-10, 9, 0]
      : [-12, 10, 0],
    targetPosition: isSmall
      ? [-4, -9, -10]
      : isMobile
      ? [-5, -10, -10]
      : isTablet
      ? [-6, -11, -10]
      : isDesktop
      ? [-7, -12, -10]
      : [-8, -13, -10],
  };
};
