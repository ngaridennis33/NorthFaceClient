"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './card.module.scss';
import Cart from '@/components/cart/Cart';
import Link from 'next/link';

interface Item {
    img: string[];
    label: string;
    currPrice: string;
    prevPrice: string;
    color: string[];
}

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
                        style={{ right: '0' }}
                        onClick={() => handleClick('r')}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" />
                        </svg>
                    </div>
                    <div className={styles.imgContainer} key={index}>
                        <Image className={styles.img} src={items.img[index]} alt="" fill />
                    </div>
                    <div className={styles.text}>
                        <span> Reversible </span>
                    </div>
                    <div className={`${styles.icon} ${trajectory === 'r' ? styles.iconRight : styles.iconLeft}`} style={{ left: '0' }} onClick={() => handleClick('l')}>
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z" />
                        </svg>
                    </div>
                    <div className={styles.imgpos}>
                        {items.img.map((img, idx) => (
                            <div
                                key={idx}
                                className={styles.pos}
                                style={{ backgroundColor: idx === index ? '#ff0c0c' : 'transparent' }}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.desc}>
                    <span className={styles.descText}>{items.label}</span>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.price}>
                        <span className={styles.currentPrice}> $ {items.currPrice}</span>
                        <span className={styles.prevPrice}> $ {items.prevPrice}</span>
                    </div>
                    <Cart />
                </div>
                <div className={styles.selectColor}>
                    {items.color.map((color, index) => (
                        <div key={index} className={styles.color} style={{ backgroundColor: color }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
