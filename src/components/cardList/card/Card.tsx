"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './card.module.scss';
import Link from 'next/link';
import { Item } from '@/types';
import { CartIcon, LeftIcon, RightIcon } from '@/components/icons/Icons';

interface CardProps {
    items: Item;
}

const Card: React.FC<CardProps> = ({ items }) => {
    const [trajectory, setTrajectory] = useState<'l' | 'r' | ''>('');
    const [index, setIndex] = useState(0);

    const handleClick = (direction: 'l' | 'r') => {
        const maxIndex = items.img.length - 1;
        let nextIndex;

        if (direction === 'l') {
            nextIndex = index > 0 ? index - 1 : maxIndex;
            setTrajectory('l');
        } else {
            nextIndex = index < maxIndex ? index + 1 : 0;
            setTrajectory('r');
        }

        setIndex(nextIndex);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <div
                        className={`${styles.icon} ${trajectory === 'r' ? styles.iconRight : styles.iconLeft}`}
                        style={{ left: '5px' }}
                        onClick={() => handleClick('r')}
                    >
                        <LeftIcon/>
                    </div>
                    <div className={styles.imgContainer} key={index}>
                        <Link href={`/${items.category}/${items.slug}`}>
                            <Image className={styles.img} src={items.img[index]} alt="" fill />
                        </Link>
                    </div>
                    {items.isNew && <div className={styles.text}>
                        <span> New </span>
                    </div>}
                    <div
                        className={`${styles.icon} ${trajectory === 'r' ? styles.iconRight : styles.iconLeft}`}
                        style={{ right: '5px' }}
                        onClick={() => handleClick('l')}
                    >
                        <RightIcon/>
                    </div>
        
                </div>
                <div className={styles.desc}>
                    <span className={styles.descText}>{items.label}</span>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.price}>
                        <span className={styles.currentPrice}>${items.currPrice}</span>
                        <span className={styles.prevPrice}>${items.prevPrice}</span>
                    </div>
                    <CartIcon />
                </div>
                <div className={styles.selectColor}>
                    {items.color.map((color, pos) => (
                        <div onClick={()=>setIndex(pos)} key={pos} className={styles.color} style={{ backgroundColor: color, outline: `${index === pos ? '1px solid blue': "none"}`, outlineOffset: '2px' }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
