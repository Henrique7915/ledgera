// Unico lugar para trocar nome, dominio e e-mail quando o dominio proprio existir.
export const NAME = 'Ledgera'
export const DOMAIN = 'ledgera.win'
export const URL = `https://${DOMAIN}`
export const EMAIL = `contact@${DOMAIN}`
export const TAGLINE = 'AI-powered money clarity for couples and households'
export const DESCRIPTION =
  'Ledgera turns messy bank statements into a clear, shared household budget. Claude reads your credit-card PDFs, categorizes every purchase and answers questions about your money.'

export const fill = (text) =>
  text.replaceAll('{{NAME}}', NAME).replaceAll('{{EMAIL}}', EMAIL).replaceAll('{{DOMAIN}}', DOMAIN).replaceAll('{{URL}}', URL)
