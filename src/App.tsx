import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.3 }}
      >
        <Toaster />
        <MainLayout />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
