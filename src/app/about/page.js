
import camp from '@/assets/camp.jpg';
import school from '@/assets/school.jpg';
import team from '@/assets/team.jpg';
import Image from 'next/image';
import styles from './page.module.css';

// 리액트 컴포넌트는 반드시 대문자로 시작
export default function AboutPage(){
    return(
        <div className={styles.about}>
            <header className={styles.header}>
                <h1 className={styles.highlight}>
                    우리동아리
                </h1>
                <p>우리 동아리는...</p>
            </header>
            <main className={styles.main}>
                <ul className={styles.perks}>
                    <li>
                        <Image src={camp} alt=''/>
                        <p>캠프</p>
                    </li>
                    <li>
                        <Image src={team} alt=''/>
                        <p>과제 공유</p>
                    </li>
                    <li>
                        <Image src={school} alt=''/>
                        <p>편안한 학교생활</p>
                    </li>
                </ul>
            </main>
        </div>
    )
}

// 이미지 3개
// 소개글