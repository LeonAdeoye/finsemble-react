import React from 'react';

function BoilingVerdict(props)
{
	if(props.celsius >= 100)
	{
		return (<p>Water boils at this temperature.</p>);
	}

	return (<p>Water does not boil at this temperature.</p>);
}

export default BoilingVerdict;
