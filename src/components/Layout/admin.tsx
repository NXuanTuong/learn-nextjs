import { LayoutProps } from '../../models/layout'
import React from 'react'
const LayoutAdmin = ({ children }: LayoutProps) => {
	return (
		<div>
			<div className="grid grid-cols-[200px,auto]">
				<div>SideBar</div>
				<div>{children}</div>
			</div>
		</div>
	)
}

export default LayoutAdmin
