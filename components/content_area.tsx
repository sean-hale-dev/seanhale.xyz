import React from 'react';
import styles from '../styles/Home.module.css';

interface ContentAreaProps {
	title: string,
	backgroundColor: string,
	transitionColor: string,
	transitionID?: string,
	id?: string,
};

const ContentArea: React.FC<ContentAreaProps> = (props) => {
  return (
    <section id={props.id ?? ''} className={`${props.backgroundColor} pt-8`}>
      <h2 className="text-5xl text-white mx-8 underline">{props.title}</h2>
      {props.children}

      {
        props.transitionID ?
          <div className={`${styles['small-spacer']} relative`} id={styles[props.transitionID]}>
		  	<div className={`${props.transitionColor} w-full h-2 absolute inset-x-0 bottom-0`}></div>
          </div>
          : null
      }

    </section>
  );
};

export default ContentArea;
