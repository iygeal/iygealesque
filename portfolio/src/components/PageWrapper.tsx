'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={false} // prevents SSR mismatch
      animate={mounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={clsx(
        'max-w-6xl mx-auto px-4 sm:px-6 py-12',
        mounted ? 'opacity-100' : 'opacity-0',
      )}
    >
      {children}
    </motion.div>
  );
}
