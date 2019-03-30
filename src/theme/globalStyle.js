import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	@import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

	html, body {
		height: 100%
	  margin: 0;
	}

	body {
	  padding: 0;
	  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
	    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
	    sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}

	code {
	  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
	    monospace;
	}

	ul, ol {
		list-style: none;
	}

	a {
		text-decoration: none !important;
	}

	button:hover {
		cursor: pointer;
	}
`

export default GlobalStyle