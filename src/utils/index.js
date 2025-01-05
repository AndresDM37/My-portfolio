export const calculatedSizes = (isSmall, isMobile, isTablet, isDesktop) => {
  return {
    deskScale: isSmall
      ? 0.05
      : isMobile
      ? 0.06
      : isTablet
      ? 0.065
      : isDesktop
      ? 0.08 // Escala específica para escritorio grande
      : 0.07, // Escala predeterminada para otros tamaños

    deskPosition: isSmall
      ? [0.5, -4.5, 0]
      : isMobile
      ? [0.5, -4.5, 0]
      : isTablet
      ? [0.25, -5.5, 0]
      : isDesktop
      ? [0.5, -10, 0] // Posición ajustada para escritorio
      : [0.25, -5.5, 0], // Predeterminada

    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : isDesktop
      ? [8, -6, 0] // Ajuste para escritorio
      : [9, -5.5, 0],

    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : isDesktop
      ? [10, 3, 0] // Posición para escritorio
      : [12, 3, 0],

    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : isDesktop
      ? [-20, 12, 0] // Posición ajustada
      : [-24, 10, 0],

    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : isDesktop
      ? [-15, -12, -10] // Ajuste para escritorio
      : [-13, -13, -10],
  };
};
