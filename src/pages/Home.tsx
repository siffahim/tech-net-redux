import banner from '@/assets/images/banner.png';
import hero from '@/assets/images/hero.png';
import { Button } from '@/components/ui/button';
import Footer from '@/layouts/Footer';
import { motion, useAnimate } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const [scope, animate] = useAnimate();
  const handleAnimate = async () => {
    await animate('#target', { x: 150 });
    await animate('#target', { y: 150, rotate: '360deg' }, { duration: 0.5 });
    await animate('#target', { borderRadius: '100%' });
    await animate('#target', {
      x: -150,
      rotate: '180deg',
      borderRadius: '25px',
      background: '#f59e0b',
    });
    await animate(
      '#target',
      {
        y: 0,
        rotate: '0deg',
        borderRadius: '25px',
      },
      { duration: 0.5 }
    );
    await animate('#target', {
      x: 0,
      background: '#4f46e5',
    });
  };
  return (
    <>
      <div
        ref={scope}
        className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto "
      >
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            HAYLOU <br /> <span className="text-gray-400">SOLAR PLUSE</span>
          </h1>

          <p className="text-secondary font-semibold text-xl">
            Effortless communication at your fingertips
          </p>
          <div
            id="target"
            className="h-16 w-16 bg-indigo-500 rounded-md "
          ></div>
          <div className="text-primary mt-20">
            <p>Bluetooth 5.2 for easy, secure communication</p>
            <p>Precise 143 Amoled display for clear visuals</p>
          </div>

          <Button onClick={handleAnimate} className="mt-5">
            Learn more
          </Button>
        </div>
        <div className="relative -right-10">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="mb-96">
        <motion.div transition={{ type: 'spring' }}>
          <img className="mx-auto" src={hero} alt="" />
        </motion.div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            The future of tech is here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/products">Brows all products</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
