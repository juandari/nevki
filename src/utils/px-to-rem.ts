function pxToRem(pxValue: number, rootFontSize: number = 16): string {
  if (pxValue === 0) {
    return "0";
  }

  const remValue = pxValue / rootFontSize;
  return `${remValue}rem`;
}
