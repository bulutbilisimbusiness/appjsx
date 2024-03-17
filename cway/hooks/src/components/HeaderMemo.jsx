/* eslint-disable react/display-name */
import { memo } from "react";
// eslint-disable-next-line react/prop-types
const HeaderMemo = memo(({ user }) => {
	return (
		<div className="text-center text-success">
			HeaderMemo Componenti: {user}
		</div>
	);
});

export default HeaderMemo;
