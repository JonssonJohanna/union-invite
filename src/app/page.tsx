'use client';
import Image from 'next/image';
import styles from './page.module.css';
import TextSection from '../../components/textSection';
import LocationSection from '../../components/locationSection';

export default function Home() {
  return (
    <>
      <TextSection></TextSection>
      <LocationSection></LocationSection>
    </>
  );
}
