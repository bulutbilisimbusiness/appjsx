import { memo } from "react";
// eslint-disable-next-line react/prop-types
const TaxComp = ({ taxData }) => {
	console.log("Render=>TaxData Componenti");
	return <div>TaxComp: {taxData}</div>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(TaxComp);
