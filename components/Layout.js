import Header from "./Header"

const Layout = ({pageTitle, children}) => {
  return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default Layout