'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './product.module.css';
import Login from './login';
import { useSearchParams } from 'next/navigation';

export default function Product() {


    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    const email = searchParams.get('email');
    const loggedIn = name !== null && email !== null;

    
    const hero = useRef<HTMLDivElement>(null);
    const heroContent = useRef<HTMLDivElement>(null);

    const [showLogin, setShowLogin] = useState(false);

    const tableData = {
        'Product ID': '45240&#x200B;07-245', // &#x200B; is a zero-width space to prevent safari from thinking it's a phone number
        'Color': 'Mocha / Dark Grey',
        'Layers': 'Insulated',
        'Clothing fit': 'Race',
        'Size': 'Medium',
        'Weight': '125 g',
        'Made in': 'Bosnia',
    }

    useEffect(() => {
        let animationFrameId : number | null = null;

        const handleScroll = () => {
            if (animationFrameId) return; // Skip if scroll event is already queued
            animationFrameId = requestAnimationFrame(() => {
                // get the top position of hero
                const heroTop = hero.current?.getBoundingClientRect().top || 0;
                // calculate the top position of heroContent
                const heroContentTop = Math.max(0, -heroTop);
                // set the top position of heroContent
                heroContent.current!.style.top = `${heroContentTop}px`;
                animationFrameId = null;
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameId){
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div className={styles.product}>

            <div className={styles.hero} ref={hero}>
                <div className={styles.heroContent} ref={heroContent}>
                    <div className={styles.verticalContainer}>
                        <div className={styles.circle}>
                            <div className={styles.percentage}>
                                <div className={styles.percentageNumber}><span>80</span>|100</div>
                                <div className={styles.percentageText}>sustainability score</div>
                            </div>
                            <div className={styles.circleGradient} />
                        </div>
                        <img className={styles.heroImage} src={'/image.png'} alt="Jacket" />
                        {/* <img className={styles.salewa} src={'/salewa.png'} alt="dynafit" />
                        <img className={styles.dpp} src={'/dpp.png'} alt="DPP" /> */}
                    </div>

                    <div className={styles.certification}>
                        <div className={styles.logo}>
                            <svg className={styles.icon} viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M68.2911 116.902C64.4411 120.542 59.9311 124.812 55.2711 129.232C52.0811 126.122 48.5011 122.672 44.9511 119.182C36.2911 110.662 27.5911 102.172 19.0011 93.582C14.4311 89.002 15.2111 81.822 20.4511 78.542C24.3911 76.082 28.9811 76.692 32.7411 80.312C36.8811 84.292 41.0211 88.272 45.0011 92.412C52.7411 100.432 60.3611 108.562 68.2811 116.902H68.2911Z" fill="currentColor" />
                                <path d="M87.5711 138.192V157.482C83.3611 157.482 79.0711 157.442 74.7811 157.482C61.8711 157.632 48.9611 157.862 36.0511 157.922C33.9311 157.932 31.6711 157.632 29.7311 156.842C25.8011 155.252 23.6911 150.652 24.5511 146.512C25.4711 142.082 28.9711 138.982 33.4911 138.862C41.7311 138.652 49.9811 138.552 58.2211 138.422C67.5511 138.272 76.8711 138.142 86.2011 138.012C86.5311 138.012 86.8511 138.082 87.5711 138.172V138.192Z" fill="currentColor" />
                                <path d="M138.291 122.192H157.281C157.281 123.782 157.271 125.332 157.281 126.882C157.441 142.952 157.651 159.012 157.731 175.082C157.771 183.092 150.041 187.842 143.361 183.982C139.941 182.002 138.631 178.832 138.601 174.962C138.541 167.392 138.361 159.812 138.291 152.242C138.201 142.752 138.171 133.252 138.121 123.762C138.121 123.352 138.201 122.942 138.291 122.192Z" fill="currentColor" />
                                <path d="M116.201 140.842C120.641 145.102 125.141 149.402 129.841 153.912C126.391 157.522 123.011 161.062 119.621 164.582C110.741 173.832 101.871 183.102 92.9511 192.312C88.9511 196.432 83.2711 196.682 79.3211 193.062C75.2811 189.352 75.0311 183.572 79.1111 179.272C91.2011 166.522 103.411 153.882 115.571 141.202C115.681 141.092 115.851 141.032 116.201 140.832V140.842Z" fill="currentColor" />
                                <path d="M71.4111 87.5719H52.2711C52.2711 83.3219 52.3211 79.0419 52.2711 74.7619C52.1111 62.3619 51.8911 49.9619 51.7411 37.5719C51.7211 35.8319 51.6711 34.0419 52.0511 32.3719C53.1611 27.5919 57.6311 24.4819 62.2411 25.0519C67.1611 25.6619 70.7111 29.5119 70.8111 34.5219C71.0411 47.1719 71.2411 59.8119 71.4111 72.4619C71.4811 77.3519 71.4211 82.2519 71.4211 87.5819L71.4111 87.5719Z" fill="currentColor" />
                                <path d="M122.251 71.622V52.372C125.721 52.372 129.191 52.432 132.661 52.362C146.481 52.092 160.301 51.772 174.111 51.492C178.381 51.402 181.811 52.992 183.731 56.942C186.821 63.292 182.421 70.362 175.221 70.592C167.321 70.842 159.411 70.962 151.501 71.112C142.681 71.292 133.851 71.452 125.031 71.612C124.221 71.632 123.411 71.612 122.251 71.612V71.622Z" fill="currentColor" />
                                <path d="M140.991 92.9819C145.201 89.1719 149.811 84.9819 154.631 80.6119C156.901 82.8219 159.741 85.5719 162.581 88.3319C172.311 97.7919 182.051 107.232 191.761 116.712C194.711 119.592 195.641 123.052 194.251 126.972C192.931 130.692 190.191 132.782 186.291 133.242C183.091 133.622 180.431 132.382 178.171 130.182C169.101 121.362 159.991 112.582 150.981 103.692C147.611 100.362 144.501 96.7819 140.971 92.9819H140.991Z" fill="currentColor" />
                                <path d="M93.3911 69.0319C89.0711 64.5019 84.7711 59.9919 79.7611 54.7319C84.8611 49.9319 90.3111 45.0219 95.5111 39.8719C102.561 32.9019 109.421 25.7419 116.371 18.6819C119.311 15.6919 122.711 14.0819 126.961 15.5519C130.771 16.8619 133.031 19.5419 133.501 23.5719C133.861 26.6619 132.801 29.2819 130.631 31.4919C122.281 39.9919 113.971 48.5219 105.601 57.0019C101.681 60.9719 97.6611 64.8319 93.3811 69.0319H93.3911Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className={styles.certText}>
                            <div className={styles.certTitle}>This product is certified to be authentic</div>
                            <div className={styles.certSubtitle}>ZIRI ID 10030FS0</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.productInfo}>
                <div className={styles.logoContainer}>
                    <img className={styles.logoContainerLogo} src={'/dynafit.png'} alt="dynafit" />
                </div>
                <div className={styles.productTitle}>ESPRESSO JERSEY</div>
                <div className={styles.productText}>
		Designed and engineered with an emphasis on comfort and performance, no matter what type of ride your a planning on today, the Espresso Jersey is the best choice.
                </div>
                <div className={styles.productTable}>
                    {
                        Object.entries(tableData).map(([key, value]) => {
                            return (
                                <div key={key} className={styles.productTableRow}>
                                    <div className={styles.productTableKey}>{key}</div>
                                    <div className={styles.productTableValue} dangerouslySetInnerHTML={{__html: value}}></div>
                                </div>
                            );
                        })
                    }
                    <svg className={styles.bgIcon} viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M68.2911 116.902C64.4411 120.542 59.9311 124.812 55.2711 129.232C52.0811 126.122 48.5011 122.672 44.9511 119.182C36.2911 110.662 27.5911 102.172 19.0011 93.582C14.4311 89.002 15.2111 81.822 20.4511 78.542C24.3911 76.082 28.9811 76.692 32.7411 80.312C36.8811 84.292 41.0211 88.272 45.0011 92.412C52.7411 100.432 60.3611 108.562 68.2811 116.902H68.2911Z" fill="currentColor" />
                        <path d="M87.5711 138.192V157.482C83.3611 157.482 79.0711 157.442 74.7811 157.482C61.8711 157.632 48.9611 157.862 36.0511 157.922C33.9311 157.932 31.6711 157.632 29.7311 156.842C25.8011 155.252 23.6911 150.652 24.5511 146.512C25.4711 142.082 28.9711 138.982 33.4911 138.862C41.7311 138.652 49.9811 138.552 58.2211 138.422C67.5511 138.272 76.8711 138.142 86.2011 138.012C86.5311 138.012 86.8511 138.082 87.5711 138.172V138.192Z" fill="currentColor" />
                        <path d="M138.291 122.192H157.281C157.281 123.782 157.271 125.332 157.281 126.882C157.441 142.952 157.651 159.012 157.731 175.082C157.771 183.092 150.041 187.842 143.361 183.982C139.941 182.002 138.631 178.832 138.601 174.962C138.541 167.392 138.361 159.812 138.291 152.242C138.201 142.752 138.171 133.252 138.121 123.762C138.121 123.352 138.201 122.942 138.291 122.192Z" fill="currentColor" />
                        <path d="M116.201 140.842C120.641 145.102 125.141 149.402 129.841 153.912C126.391 157.522 123.011 161.062 119.621 164.582C110.741 173.832 101.871 183.102 92.9511 192.312C88.9511 196.432 83.2711 196.682 79.3211 193.062C75.2811 189.352 75.0311 183.572 79.1111 179.272C91.2011 166.522 103.411 153.882 115.571 141.202C115.681 141.092 115.851 141.032 116.201 140.832V140.842Z" fill="currentColor" />
                        <path d="M71.4111 87.5719H52.2711C52.2711 83.3219 52.3211 79.0419 52.2711 74.7619C52.1111 62.3619 51.8911 49.9619 51.7411 37.5719C51.7211 35.8319 51.6711 34.0419 52.0511 32.3719C53.1611 27.5919 57.6311 24.4819 62.2411 25.0519C67.1611 25.6619 70.7111 29.5119 70.8111 34.5219C71.0411 47.1719 71.2411 59.8119 71.4111 72.4619C71.4811 77.3519 71.4211 82.2519 71.4211 87.5819L71.4111 87.5719Z" fill="currentColor" />
                        <path d="M122.251 71.622V52.372C125.721 52.372 129.191 52.432 132.661 52.362C146.481 52.092 160.301 51.772 174.111 51.492C178.381 51.402 181.811 52.992 183.731 56.942C186.821 63.292 182.421 70.362 175.221 70.592C167.321 70.842 159.411 70.962 151.501 71.112C142.681 71.292 133.851 71.452 125.031 71.612C124.221 71.632 123.411 71.612 122.251 71.612V71.622Z" fill="currentColor" />
                        <path d="M140.991 92.9819C145.201 89.1719 149.811 84.9819 154.631 80.6119C156.901 82.8219 159.741 85.5719 162.581 88.3319C172.311 97.7919 182.051 107.232 191.761 116.712C194.711 119.592 195.641 123.052 194.251 126.972C192.931 130.692 190.191 132.782 186.291 133.242C183.091 133.622 180.431 132.382 178.171 130.182C169.101 121.362 159.991 112.582 150.981 103.692C147.611 100.362 144.501 96.7819 140.971 92.9819H140.991Z" fill="currentColor" />
                        <path d="M93.3911 69.0319C89.0711 64.5019 84.7711 59.9919 79.7611 54.7319C84.8611 49.9319 90.3111 45.0219 95.5111 39.8719C102.561 32.9019 109.421 25.7419 116.371 18.6819C119.311 15.6919 122.711 14.0819 126.961 15.5519C130.771 16.8619 133.031 19.5419 133.501 23.5719C133.861 26.6619 132.801 29.2819 130.631 31.4919C122.281 39.9919 113.971 48.5219 105.601 57.0019C101.681 60.9719 97.6611 64.8319 93.3811 69.0319H93.3911Z" fill="currentColor" />
                    </svg>
                </div>
                <div className={styles.productHeading}>Material</div>
                <div className={styles.productParagraph}>
                Castelli engineered Air_O Stretch fabric for <br />
                breathability, comfort, and perfect fit. <br />
                Fabric optimized for breathability and <br />
                aerodynamics. Raw-cut sleeve endings <br />
                for comfort. Three back pockets with <br />
                fourth zippered security pocket for <br />
		valuables. Full-length YKK® Vision® zipper with <br />
		with easy-use zipper pull. Elastic <br />
		at waist with silicone to keep jersey <br />
		in place. Reflective tab for added visibility. <br />
                </div>
                <div className={styles.productHeading}>Care Instructions</div>
                <div className={styles.careInstructions}>
                    <div className={styles.careInstruction}>
                        <svg className={styles.instructionIcon} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M82.26 49.55C82.26 58.38 82.28 67.21 82.26 76.05C82.24 81.57 79.69 84.22 74.2 84.24C58.2 84.29 42.21 84.29 26.21 84.24C20.68 84.22 18 81.39 18 75.85C18 58.35 18 40.86 18 23.36C18 17.96 20.94 15 26.3 15C42.3 15 58.29 15 74.29 15C79.36 15 82.22 17.77 82.25 22.82C82.3 31.73 82.26 40.65 82.27 49.57L82.26 49.55ZM50.16 34.26C41.83 34.26 33.5 34.27 25.17 34.25C23.5 34.25 22.24 34.4 22.25 36.6C22.3 49.68 22.25 62.76 22.3 75.83C22.31 78.96 23.46 79.97 26.61 79.98C42.35 79.99 58.1 79.99 73.84 79.98C77.05 79.98 77.99 79.02 77.99 75.8C78 62.89 77.94 49.98 78.04 37.07C78.06 34.82 77.27 34.21 75.15 34.24C66.82 34.32 58.49 34.27 50.16 34.27V34.26ZM50.03 29.98C57.52 29.98 65 29.98 72.49 29.98C76.1567 29.98 77.99 28.1367 77.99 24.45C77.99 19.97 77.29 19.26 72.79 19.26C58.57 19.26 44.34 19.26 30.12 19.26C22.31 19.26 22.17 19.46 22.23 27.17C22.24 29.3 22.86 30.06 25.09 30.03C33.41 29.91 41.73 29.98 50.04 29.98H50.03Z" fill="currentColor" />
                            <path d="M50.29 74.26C40.55 74.28 32.98 66.93 32.96 57.44C32.94 47.92 40.48 40.46 50.13 40.45C59.74 40.45 67.71 47.93 67.55 57.28C67.36 68.39 58.13 74.67 50.29 74.26ZM62.6 56.93C62.75 56.57 62.91 56.34 62.92 56.12C63.01 50.63 57.3 45.1 51.11 44.66C44.87 44.22 38.28 49.05 37.77 54.62C37.71 55.29 38.53 56.45 39.21 56.72C42.39 57.98 45.57 57.76 48.9 56.77C51.77 55.92 54.88 55.68 57.89 55.6C59.44 55.56 61.02 56.46 62.61 56.94L62.6 56.93ZM61.83 61.99C59.24 59.93 56.19 58.85 53.04 59.89C48.28 61.47 43.62 63.01 38.5 61.18C39.11 65.67 44.03 69.67 48.91 69.98C55 70.37 60.31 67.12 61.82 61.99H61.83Z" fill="currentColor" />
                            <path d="M68.5499 27.16C67.5599 26.39 66.4399 25.73 65.6699 24.78C65.5099 24.58 66.6199 22.7 67.1399 22.7C68.7399 22.7 70.7999 22.74 71.8299 23.69C73.2099 24.96 71.5799 26.66 68.5399 27.16H68.5499Z" fill="currentColor" />
                        </svg>

                        <div className={styles.careInstructionText}>
                            Machine wash cold
                        </div>
                    </div>
                    <div className={styles.careInstruction}>
                        <svg className={styles.instructionIcon} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M84.93 49.67C84.93 57.55 84.96 65.43 84.93 73.3C84.9 80.24 81.28 83.95 74.38 83.97C58.47 84.02 42.56 84.02 26.65 83.97C19.73 83.95 16 80.07 16 73.1C16 57.26 16 41.42 16 25.58C16 19.05 20.01 15 26.47 15C42.46 15 58.46 15 74.45 15C80.9 15 84.86 18.84 84.91 25.29C84.98 33.42 84.93 41.54 84.93 49.67ZM24.57 19.58C24.52 19.81 24.47 20.04 24.42 20.27C27.56 23.43 30.67 26.64 33.9 29.71C34.27 30.06 35.47 30 35.98 29.67C45.68 23.32 55.33 23.27 65.02 29.7C65.5 30.02 66.6 30.18 66.92 29.88C70.26 26.71 73.49 23.43 76.75 20.18C76.65 19.98 76.56 19.79 76.46 19.59H24.57V19.58ZM31.26 64.94C30.99 64.53 30.53 63.85 30.1 63.16C25.2 55.44 24.55 47.39 28.34 39.04C29.21 37.13 31.22 35.06 30.87 33.47C30.45 31.61 28.04 30.18 26.47 28.59C24.71 26.81 22.92 25.05 21.14 23.28C20.96 23.4 20.78 23.52 20.6 23.64V75.73C24.3 71.99 27.7 68.54 31.26 64.94ZM76.26 79.48C76.4 79.27 76.54 79.06 76.68 78.85C73.42 75.6 70.2 72.32 66.86 69.17C66.54 68.87 65.31 69.19 64.72 69.57C55.14 75.74 45.61 75.67 36.14 69.41C34.99 68.65 34.3 68.73 33.39 69.67C31.33 71.82 29.17 73.89 27.08 76.02C26.13 76.98 25.25 78 23.88 79.49H76.26V79.48ZM80.44 23.67C80.22 23.54 80 23.4 79.78 23.27C76.54 26.53 73.26 29.77 70.1 33.11C69.81 33.41 70.03 34.52 70.36 35.03C76.62 44.64 76.72 54.25 70.38 63.84C69.55 65.1 69.81 65.87 70.8 66.8C72.84 68.74 74.79 70.78 76.79 72.76C77.81 73.76 78.88 74.72 80.43 76.17V23.67H80.44ZM65.63 36.55C64.07 38.42 62.72 40.19 61.22 41.82C58.88 44.37 56.44 46.83 54.04 49.33C56.41 51.92 58.75 54.55 61.16 57.1C62.73 58.76 64.4 60.32 66.02 61.92C72.17 55.82 72.21 43.93 65.63 36.54V36.55ZM62.92 65.07C59.02 61.18 55.14 57.27 51.16 53.47C50.88 53.2 49.62 53.54 49.17 53.96C46.76 56.22 44.46 58.6 42.13 60.94C40.76 62.31 39.4 63.7 38.04 65.08C44.62 71.2 56.57 71.19 62.92 65.06V65.07ZM62.99 34.14C56.85 27.83 43.27 27.91 38.18 34.1C42 37.92 45.82 41.79 49.73 45.56C50.02 45.84 51.18 45.67 51.56 45.31C55.38 41.67 59.13 37.94 62.99 34.15V34.14ZM46.64 49.47C42.8 45.54 38.83 41.47 34.85 37.4C28.88 42.35 28.87 56.45 34.64 61.51C38.71 57.43 42.76 53.36 46.64 49.47Z" fill="currentColor" />
                        </svg>
                        <div className={styles.careInstructionText}>
                            Do not dry clean
                        </div>
                    </div>
                    <div className={styles.careInstruction}>
                        <svg className={styles.instructionIcon} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M74.2598 36.7879C77.4498 34.6579 80.2298 32.8079 83.1698 30.8479C83.7698 31.7279 84.2698 32.4579 84.9898 33.5179C82.2898 35.3779 79.6799 37.1979 77.0499 39.0079C76.2999 39.5279 75.4698 39.9479 74.8098 40.5579C73.8498 41.4479 73.6798 42.5479 75.0298 43.1479C79.0598 44.9379 79.7498 48.5379 80.3098 52.3079C81.4198 59.7279 82.5998 67.1479 83.7698 74.5579C83.8498 75.0379 83.9499 75.5279 84.1199 75.9779C84.9099 77.9879 84.0798 79.2579 81.9398 79.2579C75.7199 79.2579 69.5098 79.2579 63.2898 79.2579C48.3698 79.2579 33.4598 79.2579 18.5398 79.2579C15.6898 79.2579 14.8198 78.4979 15.0298 75.5479C15.8298 63.9279 20.9898 54.7479 30.6698 48.1579C31.3998 47.6579 32.1198 47.1479 33.1998 46.3979C29.8898 44.1879 26.8798 42.1679 23.8698 40.1679C21.6698 38.6979 19.5298 37.0979 17.2398 35.7879C15.0498 34.5379 15.1898 33.3379 17.0998 31.6479C19.8298 33.4679 22.6298 35.3379 25.4298 37.1979C28.7398 39.3979 32.0198 41.6379 35.3798 43.7579C36.1298 44.2279 37.2998 44.6679 38.0498 44.4179C44.2198 42.3679 50.5798 42.2279 56.9498 42.4379C59.3198 42.5179 59.8798 41.6979 59.8198 39.4879C59.6998 34.5279 59.7998 34.5279 54.7398 34.5279C48.4398 34.5279 42.1398 34.5879 35.8498 34.4879C34.3198 34.4579 32.6898 34.1379 31.3098 33.5079C28.6798 32.3079 27.1398 29.2379 27.4598 26.5679C27.8298 23.5379 30.0198 21.0379 33.1198 20.4479C34.8898 20.1179 36.7298 20.0479 38.5398 20.0379C45.1698 19.9979 51.7998 19.9779 58.4298 20.0379C66.0298 20.1079 71.8098 24.3679 73.5598 31.2479C73.9598 32.8279 73.9798 34.4979 74.2498 36.7979L74.2598 36.7879ZM25.3798 73.9579C25.4598 74.1179 25.5498 74.2779 25.6298 74.4379H74.4798C70.9798 71.5579 67.3498 69.1279 63.6798 66.7779C63.1998 66.4679 62.4198 66.4879 61.7998 66.5479C58.3698 66.8579 56.2698 65.5979 55.1798 62.3379C54.2198 59.4579 51.7198 58.7679 49.0898 57.4279C49.0398 58.5379 48.8798 59.1879 48.9998 59.7779C50.0398 64.7179 44.2898 68.6979 39.8298 65.5879C39.3998 65.2879 38.4698 65.1679 38.0698 65.4279C33.7998 68.2179 29.5998 71.0979 25.3798 73.9479V73.9579ZM78.5598 72.5679C78.6498 71.7479 78.7298 71.4979 78.6998 71.2679C77.6498 64.1679 76.6598 57.0679 75.4398 49.9979C75.2598 48.9679 74.0998 47.4079 73.2498 47.3079C70.4998 46.9879 67.2898 46.3779 64.9898 47.4479C60.7898 49.4079 57.1098 52.4879 52.8798 55.3379C54.0798 56.1679 54.9198 56.7479 55.7898 57.3579C58.1998 55.1579 60.8398 54.3179 63.6398 55.8879C66.5298 57.5079 66.9298 60.1979 66.1698 63.2279C66.0698 63.6379 66.3898 64.3979 66.7598 64.6479C70.5598 67.2579 74.3998 69.7879 78.5698 72.5779L78.5598 72.5679ZM47.8998 24.5979C43.5898 24.5979 39.2798 24.5079 34.9798 24.6679C34.0098 24.7079 32.6998 25.4279 32.2498 26.2379C31.8598 26.9279 32.1798 28.4179 32.7398 29.1079C33.2298 29.7179 34.4898 29.9279 35.4098 29.9379C42.4498 29.9979 49.4898 29.9579 56.5398 29.9779C61.6998 29.9979 63.9798 32.2579 64.0198 37.3279C64.0298 38.5679 63.8998 39.8479 64.1498 41.0379C64.2598 41.5579 65.1998 42.3079 65.7298 42.2679C67.7398 42.1479 69.6998 39.7679 69.7198 37.7179C69.7198 36.5579 69.7598 35.3979 69.6898 34.2379C69.3498 28.8579 64.9798 24.6779 59.5898 24.6079C55.6998 24.5579 51.7998 24.6079 47.9098 24.5979H47.8998ZM19.7498 73.2779C20.3998 73.0279 20.7998 72.9479 21.1098 72.7379C26.1898 69.3179 31.2598 65.8979 36.3098 62.4379C36.7498 62.1379 37.1898 61.6479 37.3398 61.1479C39.0498 55.7279 39.3798 55.4579 44.7798 55.1779C44.9598 55.1779 45.1298 54.9279 45.5298 54.6279C43.3398 53.1579 41.2398 51.8579 39.2598 50.3979C38.0098 49.4679 36.9398 49.5379 35.6398 50.2479C30.3398 53.1279 26.1198 57.0879 23.1898 62.3679C21.3498 65.6779 20.0198 69.1779 19.7298 73.2779H19.7498ZM42.6598 47.4179C42.5598 47.7579 42.4698 48.0979 42.3698 48.4379C44.6698 49.9579 46.9498 51.4979 49.2698 52.9879C49.4898 53.1279 49.9698 53.1279 50.1898 52.9879C52.9098 51.2379 55.5998 49.4479 58.6498 47.4279H42.6598V47.4179Z" fill="currentColor" />
                        </svg>
                        <div className={styles.careInstructionText}>
                            Do not iron
                        </div>
                    </div>
                    <div className={styles.careInstruction}>
                        <svg className={styles.instructionIcon} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.1654 80.7801C41.7854 80.7801 33.4154 80.8001 25.0354 80.7801C20.3154 80.7701 16.9654 78.5901 16.1654 74.4201C15.7954 72.4701 16.0354 69.9601 16.9954 68.2801C25.6154 53.1701 34.3754 38.1401 43.2654 23.1801C46.5654 17.6301 53.9054 17.6001 57.2054 23.1301C66.1054 38.0801 74.8954 53.1001 83.5354 68.2001C86.9954 74.2401 82.9054 80.7001 75.7854 80.7701C67.2454 80.8501 58.6954 80.7901 50.1554 80.7901L50.1654 80.7801ZM27.6954 76.2101C30.6254 77.1101 32.4154 75.3001 34.1254 72.4001C40.6554 61.3501 47.1254 50.2401 54.2854 39.5901C57.6154 34.6301 57.8154 30.8901 54.1954 26.2601C51.4654 22.7601 48.7154 22.4401 46.4754 26.2501C38.0054 40.6801 29.6354 55.1601 21.1154 69.5601C19.1254 72.9201 20.7654 76.8601 25.1054 76.2401C25.7554 76.1501 26.4254 76.2301 27.6954 76.2301V76.2101ZM60.5554 37.3501C52.5154 50.5001 44.8254 63.0801 36.8254 76.1801C42.7654 76.1801 48.1054 76.2101 53.4454 76.1301C53.9654 76.1301 54.6254 75.5501 54.9654 75.0601C59.7454 68.3101 64.4954 61.5301 69.1854 54.7201C69.5354 54.2201 69.7154 53.2101 69.4454 52.7401C66.6654 47.7801 63.7654 42.8801 60.5454 37.3501H60.5554ZM72.4854 57.6801C68.0554 64.0101 63.9854 69.8301 59.5554 76.1601C65.9554 76.1601 71.6354 76.2701 77.3154 76.1001C79.4954 76.0401 81.1654 73.2301 80.1454 71.2601C77.8554 66.8201 75.2554 62.5401 72.4854 57.6801Z" fill="currentColor" />
                        </svg>
                        <div className={styles.careInstructionText}>
                            Do not chlorine bleach
                        </div>
                    </div>
                    <div className={styles.careInstruction}>
                        <svg className={styles.instructionIcon} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.4739 70.9228C46.4139 70.9228 42.3439 70.7028 38.3039 70.9728C29.1939 71.5728 22.5739 66.1228 20.9139 56.5828C19.4639 48.2128 17.8039 39.8828 16.1639 31.5528C15.8639 30.0028 15.8039 28.5828 17.5239 28.1128C19.5039 27.5628 20.1039 29.1228 20.4639 30.6428C20.8439 32.2428 21.3139 33.8728 21.3639 35.5028C21.4639 38.4328 23.2539 39.8728 25.5439 41.1028C30.4739 43.7628 35.3939 44.2528 40.3739 41.2628C47.1039 37.2228 53.7939 37.2628 60.5439 41.2628C66.8139 44.9828 72.5939 43.2328 77.8339 39.3928C78.4239 38.9628 78.8639 38.1128 79.0339 37.3828C79.6239 34.9828 79.8739 32.4828 80.6339 30.1528C80.9239 29.2728 82.2639 28.7328 83.1239 28.0428C83.6539 28.9328 84.7439 29.9128 84.6239 30.7028C83.8739 35.7528 82.8639 40.7728 81.9239 45.7928C81.1939 49.6828 80.3639 53.5528 79.6839 57.4528C78.2439 65.7628 72.2839 70.8928 63.8739 70.9228C59.4039 70.9428 54.9339 70.9228 50.4639 70.9228H50.4739ZM77.6239 45.2028C76.3239 45.7128 75.5839 46.0128 74.8339 46.2828C69.3739 48.3228 63.9339 48.5328 58.8339 45.4128C53.1639 41.9428 47.7639 41.8928 42.0639 45.3928C36.9939 48.5028 31.5339 48.3628 26.0639 46.2928C25.3339 46.0128 24.6039 45.7228 23.2539 45.1928C24.1739 49.8828 24.8139 54.0028 25.8139 58.0428C27.1539 63.4428 31.0639 66.2928 36.6739 66.3028C45.9539 66.3028 55.2239 66.3028 64.5039 66.3028C69.5939 66.3028 73.7539 63.2928 74.9439 58.4528C75.9639 54.3028 76.6539 50.0728 77.6139 45.2028H77.6239Z" fill="currentColor" />
                        </svg>
                        <div className={styles.careInstructionText}>
                            Tumble dry cold
                        </div>
                    </div>
                </div>

                {
                    !loggedIn && 
                    <button 
                        className={styles.productButton}
                        onClick={() => setShowLogin(true)}
                    >
                        Add to your wardrobe
                    </button>
                }
                
                {
                    showLogin && !loggedIn && <Login setOpen={setShowLogin} />
                }
            </div>

        </div>
    );
}
