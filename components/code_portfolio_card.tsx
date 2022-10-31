import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CodePortfolioCardProps {
  title: string,
  desc: string,
  uri: string,
  img: StaticImageData,
};

const CodePortfolioCard: React.FC<CodePortfolioCardProps> = ({ title, desc, img, uri }) => {
  return (
    <Link href={uri}>
      <div className="cursor-pointer border-2 border-gray-900 rounded-md my-2" style={{width: 450}}>
        <Image src={img} width={450} height={250} placeholder='blur' className="rounded-t-sm"/>
        <div className="p-2">
          <p className="text-2xl text-white">{ title }</p>
          <p className="text-lg text-white">{ desc }</p>
        </div>
      </div>
    </Link>
  );
};

export default CodePortfolioCard;
