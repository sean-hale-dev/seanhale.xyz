import React from 'react';

interface SVGIconProps {
	uri: string,
	label: string,
	height: number,
};

const SVGIcon: React.FC<SVGIconProps> = ({ uri }) => {
	return (
		<>
			<img className="bg-pink-300 rounded-lg p-2 my-4 max-h-16 w-auto" src={uri}  />
		</>
	);
}

export default SVGIcon;
