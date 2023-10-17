import "../styles/Header.css"

function Header() {
  return (
	<div className="Header-container">
		<button className="Header-menu-btn">
			<img 
				className="Header-menu-btn-img"
				src="/client/src/assets/menu-icon.svg" 
				alt="a menu icon" />
		</button>
	</div>
  )
}

export default Header