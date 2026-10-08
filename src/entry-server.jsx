import { renderToString } from 'react-dom/server'
import App, { ROUTES } from './App'

export { ROUTES }
export const render = (path) => renderToString(<App path={path} />)
